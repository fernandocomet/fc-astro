// Shipped into every replica as `lib/content.ts`: a collection is a folder of Markdown files, one
// per item, frontmatter for its fields and the body below it. Adding a file adds a page; nothing
// else changes. Read once per build.
//
// The only module that knows where items live. Templates and lists read items through `readItems`
// and `readItem`, never a file, so a collection kept somewhere else (a content database) is a new
// `readSources`, and nothing that renders changes. An item's shape (docs/architecture/replicator.md,
// "The item"): frontmatter fields, content only (texts, a date, images, links, rich text as
// Markdown), and the body in Markdown. How it looks is the collection's (`lib/collections.ts`).
import fs from "node:fs";
import path from "node:path";
import type { CSSProperties } from "react";
import { parse } from "yaml";
import { type BodyStyle, headingsOf, renderBody } from "./markdown";

export interface CollectionConfig {
	/** The folder under `content/`: `blog` for `content/blog`. */
	folder: string;
	/** Newest first by `date`, or by `position` (the order the original site listed them in). */
	order: "date" | "position";
	/** How the site's rich text looks: its attributes per element, its links, its images. */
	body: BodyStyle;
	/** How each other rich text field (an intro) looks, by field, when it isn't the body's look. */
	styles?: Record<string, BodyStyle>;
}

export type ItemData = Record<string, string | number | boolean | string[] | null | undefined>;

export interface Item {
	slug: string;
	data: ItemData;
	/** The body as HTML, ready to render. */
	html: string;
	/** The body as written (Markdown, or HTML when `format: html`), for drawing it in another look. */
	body: string;
}

const cache = new Map<string, Item[]>();

/** `---\nyaml\n---\nbody` → its parts. A file without frontmatter is all body. */
export function splitFrontmatter(text: string): { data: ItemData; body: string } {
	const m = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/);
	if (!m) return { data: {}, body: text };
	const data = (parse(m[1]) ?? {}) as ItemData;
	return { data, body: m[2].replace(/^\r?\n/, "") };
}

function dateOf(item: Item): number {
	const raw = item.data.date;
	const t = typeof raw === "string" ? Date.parse(raw) : NaN;
	return Number.isNaN(t) ? 0 : t;
}

/** One stored item as written: its name (the slug unless its data says otherwise) and its text. */
export interface ItemSource {
	name: string;
	text: string;
}

/** Where a collection's items are kept: `content/<folder>/*.md`. The one place that reads them. */
function readSources(config: CollectionConfig): ItemSource[] {
	const dir = path.join(process.cwd(), "content", config.folder);
	const files = fs.existsSync(dir) ? fs.readdirSync(dir).filter((f) => /\.(md|mdx|markdown)$/i.test(f)) : [];
	return files.map((file) => ({
		name: file.replace(/\.[^.]+$/, ""),
		text: fs.readFileSync(path.join(dir, file), "utf8"),
	}));
}

/** One stored item read: its data, and its body rendered as the site renders it. */
export function itemOf(source: ItemSource, config: CollectionConfig): Item {
	const { data, body } = splitFrontmatter(source.text);
	const slug = typeof data.slug === "string" && data.slug ? data.slug : source.name;
	const format = data.format === "html" ? "html" : "markdown";
	// An item drawn in a design of its own (`layout`) has its body in that design's look.
	const look = typeof data.layout === "string" ? config.styles?.[`layout:${data.layout}`] : undefined;
	return { slug, data, html: renderBody(body, format, look ?? config.body), body };
}

export function readItems(config: CollectionConfig): Item[] {
	const cached = cache.get(config.folder);
	if (cached) return cached;
	const items = readSources(config).map((source) => itemOf(source, config));
	items.sort((a, b) =>
		config.order === "date"
			? dateOf(b) - dateOf(a) || a.slug.localeCompare(b.slug)
			: Number(a.data.position ?? Infinity) - Number(b.data.position ?? Infinity) || a.slug.localeCompare(b.slug)
	);
	cache.set(config.folder, items);
	return items;
}

export function readItem(config: CollectionConfig, slug: string): Item | null {
	return readItems(config).find((item) => item.slug === slug) ?? null;
}

/** The items with these slugs, in this order: a hand-picked list. */
export function pick(items: Item[], slugs: string[]): Item[] {
	return slugs.flatMap((slug) => items.filter((item) => item.slug === slug));
}

/** A field that is a list of slugs (the items a list on this item's page shows), for `pick`. */
export function list(item: Item, key: string): string[] {
	const v = item.data[key];
	return Array.isArray(v) ? v.map(String) : typeof v === "string" && v ? [v] : [];
}

/** A field holding an inline style (`color: red; --x: 1`), as React's style object. */
export function styleOf(css: string | undefined): CSSProperties | undefined {
	if (!css) return undefined;
	const out: Record<string, string> = {};
	for (const decl of css.split(/;(?![^(]*\))/)) {
		const at = decl.indexOf(":");
		if (at <= 0) continue;
		const prop = decl.slice(0, at).trim();
		const value = decl.slice(at + 1).trim();
		if (!prop || !value) continue;
		const key = prop.startsWith("--")
			? prop
			: prop
					.toLowerCase()
					.replace(/^-ms-/, "ms-")
					.replace(/^-/, "")
					.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase())
					.replace(/^(webkit|moz)/, (m) => m[0].toUpperCase() + m.slice(1));
		out[key] = value;
	}
	return out as CSSProperties;
}

/** A field as text, for JSX (`null` when the item doesn't have it). */
export function text(item: Item, key: string): string | undefined {
	const v = item.data[key];
	if (v === null || v === undefined) return undefined;
	return Array.isArray(v) ? v.join(", ") : String(v);
}

/** A rich text field (Markdown) as HTML, in the look the collection gives that field. */
export function markdown(item: Item, key: string, config: CollectionConfig): string {
	const source = text(item, key);
	return source ? renderBody(source, "markdown", config.styles?.[key] ?? config.body) : "";
}

/**
 * A rich text field drawn inside a paragraph (the template's `<p>` around it): its paragraphs'
 * words, a line break between them. A paragraph can't hold another; a browser would close the
 * outer one and the page would no longer be the one the server drew.
 */
export function inlineMarkdown(item: Item, key: string, config: CollectionConfig): string {
	return markdown(item, key, config)
		.trim()
		.replace(/<\/p>\s*<p\b[^>]*>/g, "<br>")
		.replace(/^<p\b[^>]*>|<\/p>$/g, "");
}

/**
 * The body drawn in another of the collection's looks (`config.styles[look]`): where the site drew
 * the same article again in other styles (a builder's version of the page for phones).
 */
export function bodyIn(item: Item, look: string, config: CollectionConfig): string {
	const format = item.data.format === "html" ? "html" : "markdown";
	return renderBody(item.body, format, config.styles?.[look] ?? config.body);
}

/** The item's headings that carry an id, in order: what a table of contents lists. */
export function headings(item: Item): { level: number; id: string; text: string }[] {
	return headingsOf(item.html);
}

const MONTHS = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

/** A date field shown the way the original site showed dates (`MMM D, YYYY`, `D MMMM YYYY`, …). */
export function shownDate(item: Item, key: string, format: string | null): string | undefined {
	const raw = text(item, key);
	if (!raw || !format) return raw;
	const m = raw.match(/^(\d{4})-(\d{2})-(\d{2})/);
	if (!m) return raw;
	const [y, mo, d] = [m[1], Number(m[2]), Number(m[3])];
	return format
		.replace("YYYY", y)
		.replace("MMMM", "\u0000L")
		.replace("MMM", "\u0000S")
		.replace("M", String(mo))
		.replace("D", String(d))
		.replace("\u0000L", MONTHS[mo - 1])
		.replace("\u0000S", MONTHS[mo - 1].slice(0, 3));
}
