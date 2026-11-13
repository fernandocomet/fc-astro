import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	poweredByHeader: false,
	// Pages render in more than one root layout, so the 404 page is its own document.
	experimental: { globalNotFound: true },
};

export default nextConfig;
