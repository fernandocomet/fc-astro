"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Sliders: an element marked data-slider holds a mask (data-slider-mask) of slides (data-slide),
 * with its arrows (data-slider-prev, data-slider-next) and its nav (data-slider-nav) beside it. The
 * slides are grouped into pages as the mask fits them, a dot drawn per page, and moved a page at a
 * time as published: data-animation (slide, fade, cross, over), data-duration ms, data-slider-ease,
 * round again with data-infinite, on its own every data-delay ms with data-autoplay (at most
 * data-autoplay-limit times), paused under the pointer or focus. Arrows, dots, keys and a swipe
 * steer it. Under reduced motion it moves without a transition, and never on its own.
 */
export default function Slider() {
	const path = usePathname();
	useEffect(() => {
		const stops = Array.from(document.querySelectorAll<HTMLElement>("[data-slider]")).map(run);
		return () => stops.forEach((stop) => stop());
	}, [path]);
	return null;
}

type Anchor = { els: HTMLElement[]; x: number; width: number };
const yes = (v: string | undefined) => v === "1" || v === "true";
const FOCUSABLE = 'a[href], area[href], [role="button"], input, select, textarea, button, iframe, object, embed, [tabindex], [contenteditable]';

function run(root: HTMLElement): () => void {
	const own = (attr: string) => Array.from(root.children).find((c) => c.hasAttribute(attr)) as HTMLElement | undefined;
	const mask = own("data-slider-mask");
	if (!mask) return () => {};
	const slides = Array.from(mask.children).filter((c) => c.hasAttribute("data-slide")) as HTMLElement[];
	if (!slides.length) return () => {};
	const left = own("data-slider-prev");
	const right = own("data-slider-next");
	const nav = own("data-slider-nav");
	const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	let animation = root.dataset.animation || "slide";
	let crossOver = 0;
	if (animation === "outin") [animation, crossOver] = ["cross", 0.5];
	const ease = root.dataset.sliderEase || "ease";
	const duration = still ? 0 : root.dataset.duration != null ? parseInt(root.dataset.duration, 10) || 0 : 500;
	const infinite = yes(root.dataset.infinite);
	const hideArrows = yes(root.dataset.hideArrows);
	const autoplay = yes(root.dataset.autoplay) && !still;
	const delay = parseInt(root.dataset.delay ?? "", 10) || 2000;
	const timerMax = parseInt(root.dataset.autoplayLimit ?? "", 10) || 0;
	const spacing = root.dataset.navSpacing ? `${parseFloat(root.dataset.navSpacing)}px` : null;

	root.setAttribute("role", root.getAttribute("role") ?? "region");
	if (!root.hasAttribute("aria-label")) root.setAttribute("aria-label", "carousel");
	if (!mask.id) mask.id = `slider-mask-${Math.random().toString(36).slice(2, 8)}`;
	const live = document.createElement("div");
	live.className = "w-slider-aria-label";
	live.setAttribute("aria-live", "off");
	live.setAttribute("aria-atomic", "true");
	mask.appendChild(live);
	for (const [arrow, label] of [[left, "previous slide"], [right, "next slide"]] as const) {
		if (!arrow) continue;
		arrow.setAttribute("role", "button");
		arrow.setAttribute("tabindex", "0");
		arrow.setAttribute("aria-controls", mask.id);
		if (!arrow.hasAttribute("aria-label")) arrow.setAttribute("aria-label", label);
	}

	let index = 0;
	let previous = 0;
	let depth = 1;
	let anchors: Anchor[] = [{ els: slides, x: 0, width: 0 }];
	let endX = 0;
	let offsetX = 0;
	let maskWidth = -1;
	let shifted: HTMLElement[] | null = null;
	let dots: HTMLElement[] = [];
	const timers: ReturnType<typeof setTimeout>[] = [];
	const later = (fn: () => void, ms: number) => timers.push(setTimeout(fn, ms));

	type Look = { x?: number; opacity?: number; visibility?: string; zIndex?: number };
	const set = (els: HTMLElement[], look: Look, transition = "none") => {
		for (const el of els) {
			el.style.transition = transition;
			if (look.x !== undefined) el.style.transform = `translateX(${look.x}px)`;
			if (look.opacity !== undefined) el.style.opacity = String(look.opacity);
			if (look.visibility !== undefined) el.style.visibility = look.visibility;
			if (look.zIndex !== undefined) el.style.zIndex = String(look.zIndex);
		}
	};
	const animate = (els: HTMLElement[], from: Look, to: Look, property: "transform" | "opacity", ms: number, wait = 0) => {
		set(els, from);
		void mask.offsetWidth;
		const go = () => set(els, to, ms ? `${property} ${ms}ms ${ease}` : "none");
		if (wait) later(go, wait);
		else go();
	};

	// The pages as the mask fits them, a dot per page.
	const layout = () => {
		maskWidth = mask.offsetWidth;
		const edge = right && right.offsetWidth ? right.offsetWidth + 40 : 100;
		const room = Math.max(0, maskWidth - edge);
		let start = 0;
		let x = 0;
		anchors = [{ els: [], x: 0, width: 0 }];
		slides.forEach((slide, i) => {
			if (x - start > room) {
				start += maskWidth;
				anchors.push({ els: [], x, width: 0 });
			}
			const cs = getComputedStyle(slide);
			const w = slide.offsetWidth + (parseFloat(cs.marginLeft) || 0) + (parseFloat(cs.marginRight) || 0);
			x += w;
			const page = anchors[anchors.length - 1];
			page.width += w;
			page.els.push(slide);
			slide.setAttribute("aria-label", `${i + 1} of ${slides.length}`);
			slide.setAttribute("role", "group");
		});
		endX = x;
		if (nav && dots.length !== anchors.length) {
			dots = anchors.map((_, i) => {
				const dot = document.createElement("div");
				dot.className = "w-slider-dot";
				dot.setAttribute("aria-label", `Show slide ${i + 1} of ${anchors.length}`);
				dot.setAttribute("aria-pressed", "false");
				dot.setAttribute("role", "button");
				dot.setAttribute("tabindex", "-1");
				if (nav.classList.contains("w-num")) dot.textContent = String(i + 1);
				if (spacing) {
					dot.style.marginLeft = spacing;
					dot.style.marginRight = spacing;
				}
				return dot;
			});
			nav.replaceChildren(...dots);
		}
		go(Math.min(index, anchors.length - 1), { immediate: true });
	};

	const go = (to: number, opts: { vector?: number; immediate?: boolean } = {}) => {
		previous = index;
		let wrap: { x: number; from: number; to: number } | null = null;
		if (to < 0) {
			to = anchors.length - 1;
			if (infinite) wrap = { x: -endX, from: 0, to: anchors[0].width };
		} else if (to >= anchors.length) {
			to = 0;
			if (infinite) {
				const last = anchors[anchors.length - 1];
				wrap = { x: last.width, from: -last.x, to: -last.x - last.width };
			}
		}
		index = to;
		dots.forEach((dot, i) => {
			dot.classList.toggle("w-active", i === index);
			dot.setAttribute("aria-pressed", String(i === index));
			dot.setAttribute("tabindex", i === index ? "0" : "-1");
		});
		if (hideArrows) {
			if (right) right.style.display = index === anchors.length - 1 ? "none" : "";
			if (left) left.style.display = index === 0 ? "none" : "";
		}
		const from = offsetX;
		const at = (offsetX = -anchors[index].x);
		const current = anchors[index].els;
		const before = anchors[previous]?.els ?? [];
		const rest = slides.filter((s) => !current.includes(s));
		for (const s of current) {
			s.removeAttribute("aria-hidden");
			s.querySelectorAll("*").forEach((c) => c.removeAttribute("aria-hidden"));
			s.querySelectorAll(FOCUSABLE).forEach((c) => c.removeAttribute("tabindex"));
		}
		for (const s of rest) {
			s.setAttribute("aria-hidden", "true");
			s.querySelectorAll(FOCUSABLE).forEach((c) => c.setAttribute("tabindex", "-1"));
		}
		const settle = () => {
			const resting: Look = animation === "over" ? { x: endX } : { x: at, opacity: 1 };
			if (animation !== "slide") resting.visibility = "hidden";
			set(slides.filter((s) => !current.includes(s)), resting);
		};
		if (opts.immediate) {
			set(current, { x: at, opacity: 1, visibility: "" });
			settle();
			return;
		}
		if (index === previous) return;
		live.textContent = `Slide ${index + 1} of ${anchors.length}.`;
		const vector = opts.vector ?? (index > previous ? 1 : -1);
		if (animation === "cross") {
			const out = Math.round(duration - duration * crossOver);
			const wait = Math.round(duration - out);
			animate(before, { visibility: "" }, { opacity: 0 }, "opacity", out);
			animate(current, { visibility: "", x: at, opacity: 0, zIndex: depth++ }, { opacity: 1 }, "opacity", out, wait);
			later(settle, duration);
		} else if (animation === "fade") {
			set(before, { visibility: "" });
			animate(current, { visibility: "", x: at, opacity: 0, zIndex: depth++ }, { opacity: 1 }, "opacity", duration);
			later(settle, duration);
		} else if (animation === "over") {
			set(before, { visibility: "" });
			animate(current, { visibility: "", zIndex: depth++, x: at + anchors[index].width * vector }, { x: at }, "transform", duration);
			later(settle, duration);
		} else if (infinite && wrap) {
			const others = slides.filter((s) => !before.includes(s));
			animate(others, { visibility: "", x: wrap.x }, { x: at }, "transform", duration);
			animate(before, { visibility: "", x: wrap.from }, { x: wrap.to }, "transform", duration);
			shifted = before;
		} else {
			if (infinite && shifted) {
				set(shifted, { visibility: "", x: from });
				shifted = null;
			}
			animate(slides, { visibility: "" }, { x: at }, "transform", duration);
		}
	};

	// On its own, a page at a time, paused while the pointer or focus is on it.
	let timer: ReturnType<typeof setTimeout> | null = null;
	let turns = 1;
	const hold = { mouse: false, keyboard: false };
	const stop = () => {
		if (timer) clearTimeout(timer);
		timer = null;
	};
	const tick = () => {
		stop();
		if (!autoplay || (timerMax && turns++ > timerMax)) return;
		timer = setTimeout(() => {
			go(index + 1, { vector: 1 });
			tick();
		}, delay);
	};
	const focus = (on: boolean, how: "mouse" | "keyboard") => (e: Event) => {
		if (!on) {
			const to = (e as FocusEvent).relatedTarget as Node | null;
			if (to && root.contains(to)) return;
		}
		hold[how] = on;
		const held = hold.mouse || hold.keyboard;
		live.setAttribute("aria-live", held ? "polite" : "off");
		if (held) stop();
		else tick();
	};
	const prev = () => go(index - 1, { vector: -1 });
	const next = () => go(index + 1, { vector: 1 });
	const press = (fn: () => void) => (e: KeyboardEvent) => {
		if (e.key !== "Enter" && e.key !== " ") return;
		e.preventDefault();
		fn();
	};
	const onNav = (e: Event) => {
		const dot = (e.target as Element).closest(".w-slider-dot");
		const i = dot ? dots.indexOf(dot as HTMLElement) : -1;
		if (i < 0) return;
		if (e.type === "click") return go(i);
		const k = (e as KeyboardEvent).key;
		const to = k === "ArrowLeft" || k === "ArrowUp" ? Math.max(i - 1, 0) : k === "ArrowRight" || k === "ArrowDown" ? Math.min(i + 1, dots.length - 1) : k === "Home" ? 0 : k === "End" ? dots.length - 1 : -1;
		if (k === "Enter" || k === " ") go(i);
		else if (to >= 0) dots[to].focus();
		else return;
		e.preventDefault();
	};
	let downX: number | null = null;
	const down = (e: PointerEvent) => {
		stop();
		downX = e.clientX;
	};
	const up = (e: PointerEvent) => {
		if (downX === null || yes(root.dataset.disableSwipe)) return;
		const dx = e.clientX - downX;
		downX = null;
		if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
	};
	const on = (target: EventTarget | undefined, type: string, fn: (e: never) => void): [EventTarget, string, EventListener][] =>
		target ? [[target, type, fn as unknown as EventListener]] : [];
	const listeners = [
		...on(left, "click", prev),
		...on(left, "keydown", press(prev)),
		...on(right, "click", next),
		...on(right, "keydown", press(next)),
		...on(nav, "click", onNav),
		...on(nav, "keydown", onNav),
		...on(root, "mouseenter", focus(true, "mouse")),
		...on(root, "mouseleave", focus(false, "mouse")),
		...on(root, "focusin", focus(true, "keyboard")),
		...on(root, "focusout", focus(false, "keyboard")),
		...on(root, "pointerdown", down),
		...on(root, "pointerup", up),
	];
	for (const [el, type, fn] of listeners) el.addEventListener(type, fn);
	const resized = new ResizeObserver(() => {
		if (mask.offsetWidth && mask.offsetWidth !== maskWidth) layout();
	});
	resized.observe(mask);
	layout();
	tick();
	return () => {
		stop();
		timers.forEach(clearTimeout);
		resized.disconnect();
		live.remove();
		for (const [el, type, fn] of listeners) el.removeEventListener(type, fn);
	};
}
