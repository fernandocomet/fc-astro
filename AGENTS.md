# AGENTS.md

This repo is https://www.fernandocomet.com as a Next.js App Router site (Next 16.2.9). It was replicated from the live site, page for page; keep it that way unless asked to change the site.

- Every path the original served is a route here. Don't move or rename routes without a redirect in `next.config.ts`.
- Collections are data: an item is a file in `content/<collection>/`, never a route of its own. Frontmatter is content (title, date, images, links); the body is Markdown, and how it looks lives in `lib/collections.ts`, never in the file. A new item is a copy of an old file with new words.
- Styles are the original site's own CSS. A class in JSX is there because a selector reads it; don't rename one without its selector.
- Shared sections live in `components/`; change them there, not in a page.
- Assets are local, under `public/assets/`. Never link the old site's CDN.
- The large files listed under `media` in `replicator.json` (video, big GIFs and images) are served from Letter's media CDN on purpose, so the repo stays small. Those URLs are intended: don't "fix" them into local paths or flag them as remote assets. To bring them into the repo, the person runs `node scripts/bring-media-home.mjs`.
- `replicator.json` is Letter's record of the replication. Don't edit it by hand.
