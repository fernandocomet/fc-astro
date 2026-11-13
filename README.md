<!-- letter-preview -->
Live preview: https://494f79bf66ac9d83fd311b140ad499fc.preview.letter.dev (up until November 14, 2026)

fernandocomet.com rebuilt by Letter Replicator as native Next.js: 0 of 33 pages match the original at every width checked, mean match 93.03%.
<!-- /letter-preview -->

# www.fernandocomet.com

This is https://www.fernandocomet.com, rebuilt as a Next.js site by Letter's Replicator from the site as it was published on Webflow. Every page the original served is served here at the same path, from code and content in this repo: nothing loads from the old site.

```sh
npm install
npm run dev     # http://localhost:3000
npm run build   # what a deploy runs
```

## What is where

| | |
| --- | --- |
| `app/` | One route per page. A page's own styles sit beside it (`page.css`); styles every page shares are `app/globals.css`. |
| `components/` | The sections every page shares (the navigation, the footer). |
| `content/` | The collections: one Markdown file per item, its fields as frontmatter. Add a file to add a page. |
| `lib/collections.ts` | Where each collection's files are and how its items are ordered. |
| `public/assets/` | Every image, font and video the site uses, but for its 1 largest (2 MB of video, GIFs and large images): those are served from Letter's media CDN, so the repo stays small, and listed under `media` in `replicator.json`. |
| `app/sitemap.ts` | The sitemap, listing what the original listed and every collection item. |
| `replicator.json` | What was replicated, and how closely each page matched the original. |

## Collections

| Collection | Items | Pages | New item |
| --- | --- | --- | --- |
| Services | 16 | `/services/:slug` | `content/services/{slug}.md` |
| Works | 9 | `/works/:slug` | `content/works/{slug}.md` |

## How close it is

0 of 33 pages match the original at every viewport (1440px, 390px) to within 0.5% of pixels; the mean match is 93.03%. Motion the original has on its own (a ticker, a video) is left out of the comparison. Per page: `replicator.json`.

## Third-party tags

The original loads these. `components/site-tags.tsx` loads them in production only, so previews and local runs don't report visits. To turn them on wherever the site runs, set `SITE_TAGS=on` in its environment:

- `https://www.googletagmanager.com/gtag/js?id=G-4SZ7W2FM98`
- an inline snippet

## Large media

1 large file (2 MB) load from Letter's media CDN instead of this repo; `replicator.json` lists them under `media`. They are public, content-addressed (a URL never changes what it serves) and stay up after you leave Letter. To keep them yourself, bring them into the repo:

```sh
node scripts/bring-media-home.mjs
```

It downloads each file into `public/assets/` and points every page back at it. GitHub refuses a file over 100 MB, so a file that large needs Git LFS (or another host) before you push.

Set `SITE_URL` to the site's address in production; the sitemap and social cards use it.
