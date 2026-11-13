// Bring this site's large media home: download every file it loads from Letter's media CDN into
// public/assets/ and point the pages back at it. Run it once, from the repo's root:
//
//   node scripts/bring-media-home.mjs
//
// The files are listed under "media" in replicator.json. GitHub refuses a file over 100 MB: use
// Git LFS (or another host) for one that large.
import { createWriteStream } from "node:fs";
import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { Readable } from "node:stream";
import { pipeline } from "node:stream/promises";

const root = process.cwd();
const media = JSON.parse(await readFile(join(root, "replicator.json"), "utf8")).media ?? [];
const SKIP = new Set(["node_modules", ".next", ".git", "public"]);
const TEXT = /\.(tsx?|jsx?|mjs|css|mdx?|json)$/;

async function textFiles(dir, out = []) {
	for (const entry of await readdir(dir, { withFileTypes: true })) {
		if (SKIP.has(entry.name)) continue;
		const path = join(dir, entry.name);
		if (entry.isDirectory()) await textFiles(path, out);
		else if (TEXT.test(entry.name) && entry.name !== "replicator.json") out.push(path);
	}
	return out;
}

const files = [];
for (const path of await textFiles(root)) {
	const text = await readFile(path, "utf8");
	files.push({ path, text, was: text });
}
const escape = (s) => s.replace(/[.*+?^$(){}|[\]\\]/g, "\\$&");
let moved = 0;
for (const m of media) {
	const pattern = new RegExp("https?://[^\\s\"'()<>]+/" + escape(m.key), "g");
	const url = files.map((f) => f.text.match(pattern)?.[0]).find(Boolean);
	if (!url) {
		console.log(m.key + ": not referenced, left out");
		continue;
	}
	const res = await fetch(url);
	if (!res.ok || !res.body) throw new Error(url + " answered " + res.status);
	const to = join(root, "public", m.local);
	await mkdir(dirname(to), { recursive: true });
	await pipeline(Readable.fromWeb(res.body), createWriteStream(to));
	for (const f of files) f.text = f.text.replace(pattern, m.local);
	moved++;
	console.log(m.key + " -> public" + m.local + " (" + (m.bytes / 1e6).toFixed(1) + " MB)");
}
for (const f of files) if (f.text !== f.was) await writeFile(f.path, f.text);
console.log(moved ? "Done: " + moved + " file(s) in public/assets/, every page pointing at them." : "Nothing to bring home.");
