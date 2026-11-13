// Shipped into every replica as `lib/markdown.ts`: an item's Markdown body rendered in the site's
// own style. A phantom moved to code renders its posts with it too (Lettersprite's
// `src/lib/letterbrace/markdown.ts`, written with this file's bytes when the site moves:
// docs/architecture/phantom-code.md); every option below is off unless its style says so. The file holds the content; the look is the collection's, learned from the original
// site's items and kept beside the template (`lib/collections.ts`):
//
//   tags          per kind of element (a paragraph, a heading, a list item, a quote, an image, a
//                 code block), the classes, attributes and inline style most of the site's carried
//   externalLinks what the site's links off the site carried (a new tab)
//   bareImages    an image on its own line stands bare, not in a paragraph
//   boxes         the box the site put an image or a table in (a figure's width, a table's frame)
//   code          the frame the site drew code blocks in (an editor's), one line element per line
//   cellParagraphs a table cell's text sits in a paragraph (the site's paragraph look)
//   bareQuotes    a one-paragraph quote holds its text directly, not in a paragraph
//   itemParagraphs a list item's text sits in a paragraph (the site's paragraph look)
//   components    what a body places by name (`<site-component name="cta" />`): a builder's component
//                 in the rich text (a call to action, a diagram), drawn as the site drew it
//   headingIds    headings carry their text as an id, so in-page links and a table of contents
//                 reach them
//
// HTML written into the Markdown (an embed) is passed through untouched, never given the site's
// attributes.
import { Marked } from "marked";

/** Per kind of element, the attributes the site's rich text gives it (`pre code`: a code block's; `p+pre`: a paragraph leading into one, `p+pre 1.` a numbered step's; `pre+p`: one following one; `pre+p em`: a note in italics following one). */
export type TagAttrs = Record<string, Record<string, string>>;

export interface BodyStyle {
	tags: TagAttrs;
	/** Attributes every link off the site carries (`target="_blank"`). */
	externalLinks?: Record<string, string>;
	/** An image on its own line is a bare `<img>`, not wrapped in a paragraph. */
	bareImages?: boolean;
	/** The box an image on its own line, or a table, sits in (the site's figure, its table frame). */
	boxes?: Record<string, { tag: string; attrs: Record<string, string> }>;
	/** The frame code blocks are drawn in, from the outside in, and each line's element. */
	code?: CodeFrame;
	/** Headings carry their text as an id (`slugify`). */
	headingIds?: boolean;
	/** A table cell's text sits in a paragraph. */
	cellParagraphs?: boolean;
	/** A one-paragraph quote holds its text directly. */
	bareQuotes?: boolean;
	/** The site's tables have no head: the first row is the body's first row. */
	tableBodyOnly?: boolean;
	/** A bare address in the text (`x@y.com`, `www.x.com`) stays text: no autolinks. */
	plainAddresses?: boolean;
	/** A list item's text sits in a paragraph. */
	itemParagraphs?: boolean;
	/** The components bodies place by name (`<site-component name="…" />`): their markup. */
	components?: Record<string, string>;
	/**
	 * How the site drew each of its images, by source: the size it set, the renditions a browser
	 * picks from (`srcset`, `sizes`), its aspect ratio. A new image the site never had is drawn at
	 * its own size.
	 */
	images?: Record<string, Record<string, string>>;
}

export interface CodeFrame {
	/** `after`: what the frame draws beside the code, after it (a Copy button). */
	frame: { tag: string; attrs: Record<string, string>; after?: string }[];
	line: { tag: string; attrs: Record<string, string> };
	/** Each kind of token (`tokenize`) → the class the site's editor gave it ("" for none). */
	tokens?: Record<string, string>;
}

const KEYWORDS = new Set(
	"abstract async await break case catch class const continue def default del do elif else enum export extends false final finally fn for from func function go if impl import in interface is lambda let match mod new nil none null of package pass pub return self static struct super switch this throw true try type typeof use var void while with yield SELECT FROM WHERE INSERT INTO UPDATE DELETE CREATE TABLE GRANT ON TO ALTER DEFAULT ALL AND OR NOT AS JOIN LEFT RIGHT INNER ORDER BY GROUP LIMIT VALUES SET".split(
		" "
	)
);

/**
 * Pure: a line of code split into tokens a highlighter colours: comments, strings, numbers, keywords,
 * punctuation, and the rest as words and spaces. Small on purpose: what each kind looks like is the
 * site's (`CodeFrame.tokens`), learned from its own editor.
 */
export function tokenize(line: string): { kind: string; text: string }[] {
	const out: { kind: string; text: string }[] = [];
	const re =
		/(\/\/.*$|#(?!\{).*$|--\s.*$)|("(?:[^"\\]|\\.)*"?|'(?:[^'\\]|\\.)*'?|`(?:[^`\\]|\\.)*`?)|(\b0x[0-9a-f]+\b|\b\d[\d_.]*(?:e[+-]?\d+)?)|([A-Za-z_$][\w$]*)|(\s+)|(\S)/giy;
	let m: RegExpExecArray | null;
	// Every character matches one kind, so no part of a line is ever dropped ("31B": a number, a word).
	while (re.lastIndex < line.length && (m = re.exec(line))) {
		const [text, comment, string, number, word, space] = m;
		const kind = comment
			? "comment"
			: string
				? "string"
				: number
					? "number"
					: word
						? KEYWORDS.has(word)
							? "keyword"
							: "word"
						: space
							? "space"
							: "punctuation";
		const last = out[out.length - 1];
		if (last && last.kind === kind && (kind === "word" || kind === "space" || kind === "punctuation"))
			last.text += text;
		else out.push({ kind, text });
	}
	return out;
}

const escText = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** A line of code in the site's colours: each token in the span the site's editor gave its kind. */
function highlight(line: string, tokens: Record<string, string> | undefined): string {
	if (!tokens) return escText(line);
	return tokenize(line)
		.map((t) => {
			const cls = tokens[t.kind];
			return cls ? `<span class="${escAttr(cls)}">${escText(t.text)}</span>` : escText(t.text);
		})
		.join("");
}

/** A heading's text as its id: lower case, words joined by hyphens, punctuation left out. */
export function slugify(text: string): string {
	return text
		.toLowerCase()
		.trim()
		.replace(/[^\p{L}\p{N}\s-]/gu, "")
		.replace(/\s+/g, "-");
}

const escAttr = (s: string) => s.replace(/&/g, "&amp;").replace(/"/g, "&quot;");

const decode = (s: string) =>
	s
		.replace(/<[^>]*>/g, "")
		.replace(/&quot;/g, '"')
		.replace(/&#39;|&#x27;/g, "'")
		.replace(/&lt;/g, "<")
		.replace(/&gt;/g, ">")
		.replace(/&nbsp;/g, " ")
		.replace(/&amp;/g, "&");

function addAttrs(own: string, add: Record<string, string>): string {
	let extra = "";
	for (const [name, value] of Object.entries(add)) {
		if (new RegExp(`\\s${name}(=|\\s|$)`).test(own)) continue;
		extra += value === "" ? ` ${name}` : ` ${name}="${escAttr(value)}"`;
	}
	return extra;
}

/**
 * Block elements Markdown makes. The line breaks marked writes between their tags are not the
 * site's: a site whose rich text keeps whitespace (`white-space: pre-wrap`) would draw them as lines.
 */
const BLOCKS = "p|h[1-6]|ul|ol|li|blockquote|pre|hr|table|thead|tbody|tr|th|td";
const SPACE_AFTER_BLOCK = new RegExp(`(</?(?:${BLOCKS})(?=[\\s>/])[^>]*>)[ \\t\\n\\f\\r]+(?=<|$)`, "g");
const SPACE_BEFORE_BLOCK = new RegExp(`(^|>)[ \\t\\n\\f\\r]+(?=</?(?:${BLOCKS})(?=[\\s>/]))`, "g");

/** Around HTML the Markdown carried as it was, while the site's attributes are added elsewhere. */
const RAW_OPEN = "";
const RAW_CLOSE = "";
/** A code block's `<code>`, told apart from inline code while attributes are added. */
const PRE_CODE = "rp-pre-code";
/** A paragraph leading into a code block, told apart while attributes are added. */
const P_PRE = "rp-p-pre";
/** A numbered step's caption leading into a code block. */
const P_STEP = "rp-p-step";
/** A paragraph following a code block (and leading into none). */
const PRE_P = "rp-pre-p";
/** A paragraph in italics following a code block (a note on it). */
const PRE_P_EM = "rp-pre-p-em";

const options = {
	async: false as const,
	gfm: true,
	breaks: false,
	renderer: {
		html({ text, block }: { text: string; block?: boolean }) {
			// An HTML block's line break is Markdown's, not the site's.
			return `${RAW_OPEN}${block ? text.replace(/[\n\r]+$/, "") : text}${RAW_CLOSE}`;
		},
	},
};
const markdown = new Marked(options);
// A bare address in the text stays text, as the site wrote it; a link is written as a link.
const plainMarkdown = new Marked({
	...options,
	tokenizer: {
		url() {
			return undefined;
		},
	},
});

/**
 * Add the site's attributes to every opening tag marked produced (attributes already set win); HTML
 * the Markdown carried as it was (between RAW_OPEN and RAW_CLOSE) is left exactly as written.
 */
export function withSiteAttrs(html: string, style: BodyStyle): string {
	return (
		siteAttrs(html, style)
			.split(new RegExp(`(${RAW_OPEN}[\\s\\S]*?${RAW_CLOSE})`))
			.map((part) => {
				if (!part.startsWith(RAW_OPEN)) return part;
				// A component placed by name is drawn with the collection's markup for it; an embed (a
				// video) the way the site drew it (its size, its class), by its source.
				return part
					.slice(1, -1)
					.replace(/<(video|iframe|audio)(\s[^<>]*?)?>/g, (whole, tag: string, rest: string | undefined) => {
						const own = rest ?? "";
						const src = own.match(/\ssrc="([^"]*)"/)?.[1];
						const drawn = src ? style.images?.[src.replace(/&amp;/g, "&")] : undefined;
						return drawn ? `<${tag}${own}${addAttrs(own, drawn)}>` : whole;
					})
					.replace(
						/<site-component\s+name="([^"]+)"\s*(?:\/>|>\s*<\/site-component>)/g,
						(_, name: string) => style.components?.[name] ?? ""
					);
			})
			.join("")
			// An embed on its own line is a block, as the site drew it: never inside a paragraph (where it
			// would sit on the text's baseline, a few pixels lower).
			.replace(/<p\b[^>]*>\s*(<(video|iframe|audio)\b[^>]*>(?:[\s\S]*?<\/\2>)?)\s*<\/p>/g, "$1")
	);
}

/** Each `<ol>`'s `--max-list-digits` set to the digits of its own last number. */
function listDigits(html: string): string {
	const tags = [...html.matchAll(/<(\/?)(ol|ul|li)\b([^>]*)>/g)];
	const counts = new Map<number, number>();
	const starts = new Map<number, number>();
	const stack: number[] = [];
	for (const m of tags) {
		const at = m.index ?? 0;
		// Items count toward the list they sit in directly (a bulleted list inside counts for itself).
		if (m[2] !== "li" && !m[1]) {
			stack.push(at);
			counts.set(at, 0);
			starts.set(at, Number(m[3].match(/\sstart="(\d+)"/)?.[1] ?? 1));
		} else if (m[2] !== "li") stack.pop();
		else if (!m[1] && stack.length) counts.set(stack.at(-1)!, counts.get(stack.at(-1)!)! + 1);
	}
	return html.replace(/<ol\b([^>]*)>/g, (whole, attrs: string, at: number) => {
		const last = (starts.get(at) ?? 1) + (counts.get(at) ?? 1) - 1;
		return `<ol${attrs.replace(/--max-list-digits:\s*\d+/, `--max-list-digits: ${String(Math.max(1, last)).length}`)}>`;
	});
}

function siteAttrs(html: string, style: BodyStyle): string {
	return html
		.split(new RegExp(`(${RAW_OPEN}[\\s\\S]*?${RAW_CLOSE})`))
		.map((part) => {
			if (part.startsWith(RAW_OPEN)) return part;
			let out = part.replace(SPACE_AFTER_BLOCK, "$1").replace(SPACE_BEFORE_BLOCK, "$1");
			if (style.headingIds)
				out = out.replace(/<h([1-6])>([\s\S]*?)<\/h\1>/g, (_, n: string, inner: string) => {
					const id = slugify(decode(inner.replace(/<[^>]+>/g, "")));
					return id ? `<h${n} id="${escAttr(id)}">${inner}</h${n}>` : `<h${n}>${inner}</h${n}>`;
				});
			const open = (el: { tag: string; attrs: Record<string, string> }) =>
				`<${el.tag}${Object.entries(el.attrs)
					.map(([k, v]) => ` ${k}="${escAttr(v)}"`)
					.join("")}>`;
			const imageBox = style.boxes?.img;
			if (imageBox) out = out.replace(/<p>(<img\s[^<>]*>)<\/p>/g, `${open(imageBox)}$1</${imageBox.tag}>`);
			else if (style.bareImages) out = out.replace(/<p>(<img\s[^<>]*>)<\/p>/g, "$1");
			if (style.bareQuotes)
				out = out.replace(
					/<blockquote><p>((?:(?!<\/?p[\s>])[\s\S])*?)<\/p><\/blockquote>/g,
					"<blockquote>$1</blockquote>"
				);
			if (style.itemParagraphs)
				// The item's own text (before a list nested in it) in a paragraph, as the site wrote items.
				out = out.replace(
					/<li>((?:(?!<\/?(?:li|ul|ol|p)[\s>])[\s\S])+?)(?=<\/li>|<ul|<ol)/g,
					(_, text: string) => (text.trim() ? `<li><p>${text}</p>` : `<li>${text}`)
				);
			if (style.tableBodyOnly)
				out = out.replace(
					/<thead>([\s\S]*?)<\/thead>\s*(?:<tbody>([\s\S]*?)<\/tbody>)?/g,
					(_, head: string, body?: string) => `<tbody>${head}${body ?? ""}</tbody>`
				);
			if (style.cellParagraphs)
				out = out.replace(
					/<(td|th)(\s[^>]*)?>([\s\S]*?)<\/\1>/g,
					(_, tag: string, attrs: string | undefined, inner: string) =>
						inner.trim()
							? `<${tag}${attrs ?? ""}><p>${inner}</p></${tag}>`
							: `<${tag}${attrs ?? ""}></${tag}>`
				);
			const tableBox = style.boxes?.table;
			if (tableBox)
				out = out.replace(/<table>[\s\S]*?<\/table>/g, (t) => `${open(tableBox)}${t}</${tableBox.tag}>`);
			out = out
				.replace(/<pre>\s*<code(?=[\s>])/g, `<pre><${PRE_CODE}`)
				.replace(/<\/code>\s*<\/pre>/g, `</${PRE_CODE}></pre>`)
				// Inline code broken over lines (a span per line in the file) is one code element, as drawn.
				.replace(/<\/code>((?:<br\s*\/?>\s*)+)<code>/g, (_, breaks: string) => breaks.replace(/\s+/g, ""));
			// A paragraph leading into a code block (a step's caption), where the site drew those apart.
			if (style.tags["p+pre 1."] || style.tags["p+pre"])
				out = out.replace(
					/<p>((?:(?!<\/?p[\s>])[\s\S])*)<\/p>(\s*)(?=<pre>)/g,
					(whole, inner: string, gap: string) => {
						const tag =
							/^\d+[.)]\s/.test(inner) && style.tags["p+pre 1."]
								? P_STEP
								: style.tags["p+pre"]
									? P_PRE
									: "p";
						return `<${tag}>${inner}</p>${gap}`;
					}
				);
			// A note in italics after a code block, and any other paragraph after one, where the site
			// drew those apart.
			if (style.tags["pre+p em"])
				out = out.replace(/(<\/pre>\s*)<p>(?=<em>(?:(?!<\/?em[\s>])[\s\S])*<\/em><\/p>)/g, `$1<${PRE_P_EM}>`);
			if (style.tags["pre+p"]) out = out.replace(/(<\/pre>\s*)<p>/g, `$1<${PRE_P}>`);
			out = out.replace(
				/<([a-z][a-z0-9-]*)(\s[^<>]*?)?(\/?)>/g,
				(whole, tag: string, rest: string | undefined, slash: string) => {
					let own = rest ?? "";
					if (tag === "img" && style.images) {
						const src = own.match(/\ssrc="([^"]*)"/)?.[1];
						const drawn = src ? style.images[src.replace(/&amp;/g, "&")] : undefined;
						if (drawn) own += addAttrs(own, drawn);
					}
					const site =
						tag === PRE_CODE
							? (style.tags["pre code"] ?? style.tags.code)
							: tag === P_PRE
								? style.tags["p+pre"]
								: tag === P_STEP
									? style.tags["p+pre 1."]
									: tag === PRE_P
										? style.tags["pre+p"]
										: tag === PRE_P_EM
											? style.tags["pre+p em"]
											: style.tags[tag];
					let extra = site ? addAttrs(own, site) : "";
					if (tag === "a" && style.externalLinks && /\shref="https?:\/\//.test(own))
						extra += addAttrs(own + extra, style.externalLinks);
					const name = tag === PRE_CODE ? "code" : [P_PRE, P_STEP, PRE_P, PRE_P_EM].includes(tag) ? "p" : tag;
					return extra || name !== tag || own !== (rest ?? "") ? `<${name}${extra}${own}${slash}>` : whole;
				}
			);
			out = out.replace(new RegExp(`</${PRE_CODE}>`, "g"), "</code>");
			// A builder that sizes a numbered list's markers by its longest number (Framer's
			// `--max-list-digits`) sizes each list by its own count, not the common one.
			if (/--max-list-digits/.test(style.tags.ol?.style ?? "")) out = listDigits(out);
			const code = style.code;
			if (code)
				// Each line in the site's line element, inside the site's frame: the look is the frame's.
				out = out.replace(/<pre[^>]*><code[^>]*>([\s\S]*?)<\/code><\/pre>/g, (_, text: string) => {
					const lines = decode(text).replace(/\n$/, "").split("\n");
					const body = lines
						.map((l) => `${open(code.line)}${l ? highlight(l, code.tokens) : "<br>"}</${code.line.tag}>`)
						.join("");
					return `${RAW_OPEN}${code.frame.map(open).join("")}${body}${code.frame
						.map((f) => `${f.after ?? ""}</${f.tag}>`)
						.reverse()
						.join("")}${RAW_CLOSE}`;
				});
			return out;
		})
		.join("");
}

/** An item's body as HTML: Markdown rendered in the site's style, or HTML kept as it was. */
export function renderBody(body: string, format: "markdown" | "html", style: BodyStyle): string {
	if (format === "html") return body;
	return withSiteAttrs((style.plainAddresses ? plainMarkdown : markdown).parse(body) as string, style);
}

/** The headings of a rendered body that carry an id, in order: what a table of contents lists. */
export function headingsOf(html: string): { level: number; id: string; text: string }[] {
	// Where the author placed labelled anchors in the text for the index (an empty box with an id
	// and an `aria-label`), the index lists those, in order.
	const anchors: { level: number; id: string; text: string }[] = [];
	for (const m of html.matchAll(/<(?!h[1-6]\b)[a-z][a-z0-9-]*\b([^>]*)>\s*<\/[a-z][a-z0-9-]*>/g)) {
		const id = m[1].match(/\sid="([^"]+)"/)?.[1];
		const label = m[1].match(/\saria-label="([^"]+)"/)?.[1];
		if (id && label) anchors.push({ level: 2, id: decode(id), text: decode(label).trim() });
	}
	if (anchors.length >= 2) return anchors;
	const out: { level: number; id: string; text: string }[] = [];
	for (const m of html.matchAll(/<h([1-6])\b[^>]*\sid="([^"]+)"[^>]*>([\s\S]*?)<\/h\1>/g))
		out.push({ level: Number(m[1]), id: decode(m[2]), text: decode(m[3].replace(/<[^>]+>/g, "")).trim() });
	return out;
}
