import type { Metadata } from "next";
import SiteTags from "@/components/site-tags";
import Motion from "@/components/motion";
import Lottie from "@/components/lottie";
import Slider from "@/components/slider";
import "../globals.css";
import "@/components/motion.css";

// The pages that render in this <html> and <body>: 32.
export const metadata: Metadata = {
	metadataBase: new URL(process.env.SITE_URL ?? "https://www.fernandocomet.com"),
	icons: [
		{ rel: "shortcut icon", url: "/assets/images/favicon-2ca4840474.png", type: "image/x-icon" },
		{ rel: "apple-touch-icon", url: "/assets/images/webclip-be18e836cd.png" },
	],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en" className="w-mod-js w-mod-ix w-mod-ix3">
			<body>
				{children}
				<SiteTags />
				<Motion />
				<Lottie />
				<Slider />
			</body>
		</html>
	);
}
