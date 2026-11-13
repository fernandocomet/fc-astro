import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = { title: "Page not found" };

export default function GlobalNotFound() {
	return (
		<html lang="en">
			<body>
				File not found.
			</body>
		</html>
	);
}
