"use client";

import { usePathname } from "next/navigation";
import { type ReactNode, useEffect, useRef, useState } from "react";

// A part that moves in as it opens (a menu the original slid in): data-rp-enter is
// "<id>@<animation>@<ms>@<easing>@<closing easing>", played as it opens and, backwards, as it closes.
const moving = (id: string) => [...document.querySelectorAll<HTMLElement>(`[data-rp-enter^="${id}@"]`)];
function slide(el: HTMLElement, opening: boolean): Animation {
	const [, animation, ms, easing, closing] = (el.dataset.rpEnter ?? "").split("@");
	const from =
		animation === "over-left" ? "translateX(-100%)" : animation === "over-right" ? "translateX(100%)" : "translateY(-100%)";
	const frames = [{ transform: from }, { transform: "none" }];
	return el.animate(opening ? frames : frames.reverse(), {
		duration: Number(ms) || 400,
		easing: (opening ? easing : closing) || "ease",
		fill: opening ? "none" : "forwards",
	});
}

// A tab group (tabs, tab): one state per control, null where the served state (children) is; a tap
// on a control (data-rp-tab="<its place>") shows its state, and it stays until another is tapped.
export default function Toggle({
	id,
	open,
	tabs,
	tab = 0,
	children,
}: {
	id: string;
	open?: ReactNode;
	tabs?: ReactNode[];
	tab?: number;
	children: ReactNode;
}) {
	const path = usePathname();
	const [state, setState] = useState({ open: false, tab, path });
	if (state.path !== path) setState({ open: false, tab, path });
	const isOpen = useRef(false);
	const count = tabs?.length ?? 0;
	useEffect(() => {
		isOpen.current = state.open;
		if (state.open) for (const el of moving(id)) slide(el, true);
	}, [id, state.open]);
	useEffect(() => {
		const onClick = (event: MouseEvent) => {
			const target = event.target instanceof Element ? event.target : null;
			const control = target?.closest(`[data-rp-toggle="${id}"]`);
			if (!control) return;
			event.preventDefault();
			if (count) {
				const k = Number(control.getAttribute("data-rp-tab"));
				if (Number.isInteger(k) && k >= 0 && k < count) setState((s) => ({ ...s, tab: k }));
				return;
			}
			const parts = isOpen.current ? moving(id) : [];
			if (!parts.length) return setState((s) => ({ ...s, open: !s.open }));
			// Closing: the part moves out first.
			void Promise.all(parts.map((el) => slide(el, false).finished.catch(() => undefined))).then(() =>
				setState((s) => ({ ...s, open: false }))
			);
		};
		document.addEventListener("click", onClick);
		return () => document.removeEventListener("click", onClick);
	}, [id, count]);
	if (tabs) return <>{tabs[state.tab] ?? children}</>;
	return <>{state.open ? open : children}</>;
}
