import Script from "next/script";

// The original site's third-party tags (analytics, pixels), loaded in production only so
// previews and local runs don't report visits. SITE_TAGS=on loads them anywhere.
export default function SiteTags() {
	if (process.env.VERCEL_ENV !== "production" && process.env.SITE_TAGS !== "on") return null;
	return (
		<>
			<Script src="https://www.googletagmanager.com/gtag/js?id=G-4SZ7W2FM98" strategy="afterInteractive" />
			<Script id="site-tag-2" strategy="afterInteractive">{"\n  window.dataLayer = window.dataLayer || [];\n  function gtag(){dataLayer.push(arguments);}\n  gtag('js', new Date());\n  gtag('config', 'G-4SZ7W2FM98');\n"}</Script>
		</>
	);
}
