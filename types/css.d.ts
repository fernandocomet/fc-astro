import type { HTMLAttributes } from "react";

declare module "react" {
	// Custom properties (--brand-color) and CSS properties newer than React's types, in inline styles.
	interface CSSProperties {
		[property: string]: string | number | undefined;
	}
	// Custom elements a page's markup holds as its scripts drew them (<number-flow-react>).
	namespace JSX {
		interface IntrinsicElements {
			[tag: `${string}-${string}`]: HTMLAttributes<HTMLElement> & Record<string, unknown>;
		}
	}
}
