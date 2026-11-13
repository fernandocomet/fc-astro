"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Reveals (motion.css): an element marked data-motion="reveal" plays in (data-inview="in") once the
 * place it rests in meets the viewport, and back out ("out") when that place drops below it again
 * (scrolled back up past it), unless it has data-motion-once. Its place is its box less its
 * entrance offset, so an element waiting below the fold starts the moment its place scrolls in.
 *
 * Scroll direction: once the page has scrolled 4px one way since it last turned (an
 * overscroll past either end aside), that way is kept on <html data-scroll-dir>, which an element
 * marked data-scrolldir moves by; one marked data-scrolldir-once stays moved (data-scrolldir-held).
 */
export default function Motion() {
	const path = usePathname();
	useEffect(() => {
		if (!document.querySelector("[data-scrolldir]")) return;
		const root = document.documentElement;
		let last = window.scrollY;
		let turned = last;
		let way: string | null = null;
		const update = () => {
			const y = window.scrollY;
			if (y < 0 || y > root.scrollHeight - window.innerHeight) return;
			const now = y < last ? "up" : "down";
			last = y;
			if (now !== way) {
				way = now;
				turned = y;
				return;
			}
			if (Math.abs(y - turned) < 4 || root.dataset.scrollDir === now) return;
			root.dataset.scrollDir = now;
			for (const el of document.querySelectorAll<HTMLElement>(`[data-scrolldir-once][data-scrolldir-on="${now}"]`))
				el.setAttribute("data-scrolldir-held", "");
		};
		window.addEventListener("scroll", update, { passive: true });
		return () => {
			window.removeEventListener("scroll", update);
			delete root.dataset.scrollDir;
		};
	}, [path]);
	useEffect(() => {
		const elements = Array.from(document.querySelectorAll<HTMLElement>('[data-motion="reveal"]'));
		if (elements.length === 0) return;
		const update = () => {
			for (const el of elements) {
				const place = restingPlace(el);
				if (!place) continue;
				const inView = place.top < window.innerHeight && place.bottom > 0;
				if (inView && el.dataset.inview !== "in") el.dataset.inview = "in";
				else if (place.top >= window.innerHeight && el.dataset.inview === "in" && !el.hasAttribute("data-motion-once"))
					el.dataset.inview = "out";
			}
		};
		update();
		window.addEventListener("scroll", update, { passive: true });
		window.addEventListener("resize", update);
		return () => {
			window.removeEventListener("scroll", update);
			window.removeEventListener("resize", update);
		};
	}, [path]);
	useEffect(() => interactions(), [path]);
	return null;
}

/** Where an element rests in the viewport, its entrance offset (its animated translate) taken out; null when it isn't shown. */
function restingPlace(el: HTMLElement): { top: number; bottom: number } | null {
	const box = el.getBoundingClientRect();
	if (box.width === 0 && box.height === 0) return null;
	const [, y = 0] = getComputedStyle(el)
		.translate.split(" ")
		.map((v) => parseFloat(v) || 0);
	return { top: box.top - y, bottom: box.bottom - y };
}

/**
 * Interactions (motion.css, data-ix): an element's entrance into view starts once its trigger
 * (data-ixview: marker@offset[@out]) is in view as the original's runtime measured it (the viewport
 * less the offset at the top and bottom); a click on a trigger (data-ixclick: first/second) and the
 * page's scroll direction (data-ixdir) set the state (data-ixs) of the elements they move; and a
 * scroll- or pointer-linked list (data-ixcont) is played by its progress, smoothed frame by frame as
 * the runtime smooths it. Every element a trigger moves is marked with the trigger's marker (data-ixe).
 */
function interactions(): () => void {
	const offs: (() => void)[] = [];
	const on = (target: EventTarget, type: string, fn: (e: Event) => void) => {
		target.addEventListener(type, fn, { passive: true });
		offs.push(() => target.removeEventListener(type, fn));
	};
	const marked = (marker: string) => Array.from(document.querySelectorAll<HTMLElement>(`[data-ixe~="${marker}"]`));
	const token = (el: HTMLElement, attr: string, value: string, add: boolean) => {
		const list = (el.getAttribute(attr) ?? "").split(" ").filter((t) => t && t !== value);
		if (add) list.push(value);
		if (list.length) el.setAttribute(attr, list.join(" "));
		else el.removeAttribute(attr);
	};
	const eventOf = (marker: string) => marker.replace(/\.[^.]*$/, "");
	const doc = () => document.documentElement;
	// Into view.
	const views = Array.from(document.querySelectorAll<HTMLElement>("[data-ixview]")).flatMap((el) =>
		(el.dataset.ixview ?? "").split(" ").filter(Boolean).map((spec) => {
			const [marker, offset = "0%", out = "", mode = ""] = spec.split("@");
			return { el, marker, offset, out, switches: mode === "s", state: "" };
		})
	);
	const updateViews = () => {
		const width = doc().clientWidth;
		const height = doc().clientHeight;
		for (const v of views) {
			const r = v.el.getBoundingClientRect();
			const off = v.offset.endsWith("px") ? parseFloat(v.offset) : (height * (parseFloat(v.offset) || 0)) / 100;
			const inView = !(r.left > width || r.right < 0 || r.top > height - off || r.bottom < off);
			if (inView && v.state !== "in") {
				v.state = "in";
				for (const t of marked(v.marker)) {
					if (v.switches) t.dataset.ixs = eventOf(v.marker);
					else {
						token(t, "data-ixout", eventOf(v.marker), false);
						token(t, "data-ixin", eventOf(v.marker), true);
					}
				}
			} else if (!inView && v.state === "in" && v.out) {
				v.state = "out";
				if (v.switches) for (const t of marked(v.out)) t.dataset.ixs = eventOf(v.out);
				else
					for (const t of marked(v.marker)) {
						token(t, "data-ixin", eventOf(v.marker), false);
						token(t, "data-ixout", eventOf(v.marker), true);
					}
			} else if (!inView && v.state === "") v.state = "out";
		}
	};
	// Clicks: a first and a second click, by turns.
	const clicks = new WeakMap<Element, Map<string, number>>();
	on(document, "click", (e) => {
		for (let at = e.target instanceof Element ? e.target : null; at; at = at.parentElement) {
			const specs = at.getAttribute("data-ixclick");
			if (!specs) continue;
			const counts = clicks.get(at) ?? new Map<string, number>();
			clicks.set(at, counts);
			for (const spec of specs.split(" ").filter(Boolean)) {
				const [first, second] = spec.split("/");
				const n = ((counts.get(spec) ?? 0) % 2) + 1;
				counts.set(spec, n);
				const marker = n === 1 ? first : second;
				if (marker) for (const t of marked(marker)) t.dataset.ixs = eventOf(marker);
			}
		}
	});
	// The page's scroll direction, past an offset from where it turned.
	const dirs = Array.from(document.querySelectorAll<HTMLElement>("[data-ixdir]")).flatMap((el) =>
		(el.dataset.ixdir ?? "").split(" ").filter(Boolean).map((spec) => {
			const [way, event, offset = "0%"] = spec.split("@");
			return { el, down: way === "down", event, offset, top: -1, anchor: 0, downward: true, inBounds: false };
		})
	);
	const updateDirs = () => {
		const range = doc().scrollHeight - window.innerHeight;
		if (range <= 0) return;
		const pct = Number((Math.min(Math.max(window.scrollY, 0), range) / range).toFixed(2));
		for (const d of dirs) {
			if (d.top === pct) continue;
			const off = (d.offset.endsWith("px") ? parseFloat(d.offset) : (window.innerHeight * (parseFloat(d.offset) || 0)) / 100) / range;
			const first = d.top < 0;
			const downward = first ? d.downward : pct > d.top;
			const turned = !first && d.downward !== downward;
			if (turned) d.anchor = pct;
			const inBounds = d.down ? pct >= d.anchor + off : pct <= d.anchor - off;
			if (!first && inBounds && (turned || inBounds !== d.inBounds) && d.down === downward) d.el.dataset.ixs = d.event;
			Object.assign(d, { top: pct, downward, inBounds });
		}
	};
	// Scroll- and pointer-linked lists.
	type Track = { m: string; p: string; u: string; v: number[][]; els: HTMLElement[] };
	type Param = { k: string; s: number; r: number; d?: number; o?: number; l?: number; st?: number[]; a?: string; b?: string; rest?: number; q?: string; tr: Track[]; pos: number; goal: number };
	// Moved only where motion is wanted, as everything else in motion.css is.
	const still = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
	const linked = still
		? []
		: Array.from(document.querySelectorAll<HTMLElement>("[data-ixcont]")).flatMap((el) => {
				try {
					return (JSON.parse(el.dataset.ixcont ?? "[]") as { e: string; q?: string; l: Param[] }[]).flatMap((c) =>
						c.l.map((p) => ({ el, param: { ...p, q: c.q, pos: 0, goal: 0, tr: p.tr.map((t) => ({ ...t, els: marked(t.m) })) } }))
					);
				} catch {
					return [];
				}
			});
	const pointer = { x: -1, y: -1, pageX: -1, pageY: -1 };
	const goalOf = (el: HTMLElement, p: Param): number => {
		const root = doc();
		if (p.k === "page") return root.scrollHeight > root.clientHeight ? window.scrollY / (root.scrollHeight - root.clientHeight) : 0;
		if (p.k === "px") return p.d ? window.scrollY / p.d : 0;
		if (p.k === "vp") return p.a === "x" ? window.scrollX / root.scrollWidth : window.scrollY / root.scrollHeight;
		if (p.k === "st" && p.st) {
			// From where the element's point (a share of its height) meets the viewport's at the start,
			// to where they meet at the end.
			const r = el.getBoundingClientRect();
			const u = root.clientHeight;
			const from = r.top + r.height * p.st[0] - u * p.st[1];
			const to = r.top + r.height * p.st[2] - u * p.st[3];
			return from === to ? (from <= 0 ? 1 : 0) : from / (from - to);
		}
		if (p.k === "view") {
			const r = el.getBoundingClientRect();
			const u = root.clientHeight;
			const d = r.top + Math.min(r.height * (p.o ?? 0), u);
			const f = Math.min(u + (r.top + r.height * (p.l ?? 1) - d), root.scrollHeight);
			return f > 0 ? Math.min(Math.max(0, u - d), f) / f : 0;
		}
		const x = p.a !== "y";
		if (pointer.x < 0) return p.rest ?? 0.5;
		if (p.b === "viewport") return x ? Math.min(pointer.x, window.innerWidth) / window.innerWidth : Math.min(pointer.y, window.innerHeight) / window.innerHeight;
		if (p.b === "page") return x ? Math.min(pointer.pageX, root.scrollWidth) / root.scrollWidth : Math.min(pointer.pageY, root.scrollHeight) / root.scrollHeight;
		const r = el.getBoundingClientRect();
		if (pointer.x < r.left || pointer.x > r.right || pointer.y < r.top || pointer.y > r.bottom) return p.rest ?? 0.5;
		return x ? (pointer.x - r.left) / r.width : (pointer.y - r.top) / r.height;
	};
	const valueAt = (t: Track, at: number): string => {
		const v = t.v;
		let i = 0;
		while (i < v.length - 1 && v[i + 1][0] <= at) i++;
		const a = v[i];
		const b = v[Math.min(i + 1, v.length - 1)];
		const q = at <= a[0] || b[0] === a[0] ? 0 : Math.min(1, (at - a[0]) / (b[0] - a[0]));
		const n = a.slice(1).map((x, k) => x + ((b[k + 1] ?? x) - x) * (at <= v[0][0] ? 0 : q));
		const round = (x: number) => Math.round(x * 1000) / 1000;
		if (t.u === "rgba") return `rgba(${n.slice(0, 3).map(Math.round).join(", ")}, ${round(n[3] ?? 1)})`;
		return `${round(n[0])}${t.u}`;
	};
	let frame = 0;
	const tick = () => {
		frame = 0;
		let again = false;
		for (const { el, param: p } of linked) {
			if (p.q && !window.matchMedia(p.q).matches) continue;
			const goal = Math.min(Math.max(goalOf(el, p), 0), 1);
			const toward = p.r ? 1 - goal : goal;
			const step = Math.max(1 - p.s, 0.01);
			const next = Math.round((p.pos + (toward - p.pos) * step) * 100000) / 100000;
			p.pos = Math.abs(toward - next) < 0.0001 ? toward : next;
			if (p.pos !== toward) again = true;
			for (const t of p.tr) {
				const value = valueAt(t, p.pos * 100);
				for (const target of t.els) target.style.setProperty(t.p, value);
			}
		}
		if (again) frame = requestAnimationFrame(tick);
	};
	const kick = () => {
		updateViews();
		updateDirs();
		if (linked.length && !frame) frame = requestAnimationFrame(tick);
	};
	on(window, "scroll", kick);
	on(window, "resize", kick);
	if (linked.some(({ param }) => param.k === "mouse"))
		on(document, "mousemove", (e) => {
			const m = e as MouseEvent;
			Object.assign(pointer, { x: m.clientX, y: m.clientY, pageX: m.pageX, pageY: m.pageY });
			kick();
		});
	// The builder's dropdowns and tabs, rebuilt: its own state classes do the look.
	const fire = (el: Element, name: string) => {
		for (const spec of (el.getAttribute("data-ixon") ?? "").split(" ").filter(Boolean)) {
			const [what, marker] = spec.split("@");
			if (what === name && marker) for (const t of marked(marker)) t.dataset.ixs = eventOf(marker);
		}
	};
	const press = (target: EventTarget, fn: (e: Event) => void) => {
		target.addEventListener("click", fn);
		offs.push(() => target.removeEventListener("click", fn));
	};
	for (const drop of Array.from(document.querySelectorAll<HTMLElement>("[data-ixdrop]"))) {
		const toggle = drop.querySelector<HTMLElement>(":scope > [data-ixdrop-toggle]");
		const list = drop.querySelector<HTMLElement>(":scope > [data-ixdrop-list]");
		if (!toggle || !list) continue;
		const [mode, delay = "0"] = (drop.dataset.ixdrop ?? "").split("@");
		let open = false;
		let timer = 0;
		const set = (to: boolean) => {
			window.clearTimeout(timer);
			if (open === to) return;
			open = to;
			toggle.classList.toggle("w--open", to);
			list.classList.toggle("w--open", to);
			toggle.setAttribute("aria-expanded", String(to));
			fire(drop, to ? "dropdown-open" : "dropdown-close");
		};
		press(toggle, (e) => {
			e.preventDefault();
			set(!open);
		});
		press(document, (e) => {
			if (open && e.target instanceof Node && !drop.contains(e.target)) set(false);
		});
		if (mode === "hover") {
			on(drop, "mouseenter", () => set(true));
			on(drop, "mouseleave", () => {
				window.clearTimeout(timer);
				timer = window.setTimeout(() => set(false), Number(delay) || 0);
			});
		}
	}
	for (const tabs of Array.from(document.querySelectorAll<HTMLElement>("[data-ixtabs]"))) {
		const own = (el: Element) => el.closest("[data-ixtabs]") === tabs;
		const links = Array.from(tabs.querySelectorAll<HTMLElement>("[data-ixtab]")).filter(own);
		const panes = Array.from(tabs.querySelectorAll<HTMLElement>("[data-ixpane]")).filter(own);
		const show = (name: string) => {
			for (const [els, attr, cls] of [
				[links, "ixtab", "w--current"],
				[panes, "ixpane", "w--tab-active"],
			] as const)
				for (const el of els) {
					const active = el.dataset[attr] === name;
					if (attr === "ixtab") el.setAttribute("aria-selected", String(active));
					if (el.classList.contains(cls) === active) continue;
					el.classList.toggle(cls, active);
					fire(el, active ? "tab-active" : "tab-inactive");
				}
		};
		for (const link of links)
			press(link, (e) => {
				e.preventDefault();
				show(link.dataset.ixtab ?? "");
			});
	}
	for (const d of dirs) Object.assign(d, { top: -1 });
	kick();
	updateDirs();
	return () => {
		for (const off of offs) off();
		if (frame) cancelAnimationFrame(frame);
	};
}
