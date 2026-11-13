import type { MetadataRoute } from "next";
import { services, works } from "@/lib/collections";
import { readItems } from "@/lib/content";

// The pages the original site's sitemap listed, and its collections' items (an item the
// original left out says `sitemap: false`): a new item is listed the moment its file is added.
const PAGES: string[] = [
	"/",
	"/index.html",
	"/services.html",
	"/works.html",
	"/about.html",
	"/faq.html",
	"/cookie-policy.html"
];

export default function sitemap(): MetadataRoute.Sitemap {
	const base = (process.env.SITE_URL ?? "https://www.fernandocomet.com").replace(/\/$/, "");
	return [
		...PAGES.map((path) => ({ url: `${base}${path === "/" ? "" : path}` || base })),
		...readItems(services)
			.filter((item) => item.data.sitemap !== false)
			.map((item) => ({ url: `${base}/services/${item.slug}` })),
		...readItems(works)
			.filter((item) => item.data.sitemap !== false)
			.map((item) => ({ url: `${base}/works/${item.slug}` })),
	];
}
