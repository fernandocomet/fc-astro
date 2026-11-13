"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type Player = {
	destroy: () => void;
	play: () => void;
	addEventListener: (name: string, fn: () => void) => void;
	goToAndStop: (v: number, frame: boolean) => void;
	setSpeed: (s: number) => void;
	setDirection: (d: 1 | -1) => void;
	goToAndPlay: (v: number, frame: boolean) => void;
	getDuration: (frames?: boolean) => number;
	totalFrames: number;
};
type LottieWeb = {
	loadAnimation: (o: Record<string, unknown>) => Player;
};

/**
 * Lottie animations: an element marked data-lottie plays its file (data-src: a .json, or a .lottie
 * unzipped here) with lottie-web, as published: data-autoplay, data-loop, data-direction,
 * data-duration (seconds, for the whole animation) or data-speed (its rate), data-renderer and data-preserve-aspect-ratio;
 * data-lottie-mode="bounce" plays it forward and back again; one marked data-loading="lazy" loads as it nears the screen.
 * data-lottie-play says what starts one that doesn't play on load: "hover" plays it under the pointer
 * (back to its first frame when the pointer leaves, as LottieFiles' players do), "view" once it is on screen. One an interaction plays
 * (data-lottie-ix="on") never plays on its own: it shows the frame its --ix-lottie (0..100, set by
 * the interactions in motion.tsx) names, followed each frame while on screen. What the page settled on shows until
 * the file is read, and stays under reduced motion. The library is registered as window.lottie, as
 * its own script build registers it, so whatever looks for the page's Lottie players finds these.
 */
export default function Lottie() {
	const path = usePathname();
	useEffect(() => {
		if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
		let gone = false;
		const players: Player[] = [];
		const frames = new Map<Element, number>();
		const observers: IntersectionObserver[] = [];
		const undo: (() => void)[] = [];
		const watched = new Set<Element>();
		const shown = new IntersectionObserver((entries) => {
			for (const e of entries) (e.isIntersecting ? watched.add(e.target) : watched.delete(e.target));
		});
		const seen = new IntersectionObserver(
			(entries) => {
				for (const e of entries) {
					if (!e.isIntersecting) continue;
					seen.unobserve(e.target);
					void start(e.target as HTMLElement);
				}
			},
			{ rootMargin: "200px" }
		);
		const start = async (el: HTMLElement) => {
			const src = el.dataset.src;
			if (!src) return;
			try {
				const [lottie, data] = await Promise.all([load(), read(src)]);
				if (gone || !el.isConnected) return;
				const autoplay = parseFloat(el.dataset.autoplay ?? "0") === 1;
				const loop = parseFloat(el.dataset.loop ?? "0") === 1;
				const bounce = el.dataset.lottieMode === "bounce";
				el.replaceChildren();
				const player = lottie.loadAnimation({
					container: el,
					animationData: data,
					// A bounce turns round at each end itself.
					loop: loop && !bounce,
					autoplay: false,
					renderer: el.dataset.renderer === "canvas" ? "canvas" : "svg",
					rendererSettings: {
						preserveAspectRatio: el.dataset.preserveAspectRatio || "xMidYMid meet",
						progressiveLoad: true,
						hideOnTransparent: true,
					},
				});
				players.push(player);
				const direction = parseFloat(el.dataset.direction ?? "1") === -1 ? -1 : 1;
				player.setDirection(direction);
				const seconds = parseFloat(el.dataset.duration ?? "0") || 0;
				const own = player.getDuration();
				if (seconds > 0 && own && seconds !== own) player.setSpeed(own / seconds);
				else if (parseFloat(el.dataset.speed ?? "1") > 0) player.setSpeed(parseFloat(el.dataset.speed ?? "1"));
				if (el.dataset.lottieIx === "on") {
					// The list's progress, read as the page computes it (a keyframe or the scroll's player).
					shown.observe(el);
					let last = NaN;
					const follow = () => {
						if (gone) return;
						const v = parseFloat(getComputedStyle(el).getPropertyValue("--ix-lottie"));
						if (watched.has(el) && Number.isFinite(v) && v !== last) {
							last = v;
							player.goToAndStop((Math.min(Math.max(v, 0), 100) / 100) * Math.max(0, player.totalFrames - 1), true);
						}
						frames.set(el, requestAnimationFrame(follow));
					};
					player.goToAndStop(0, true);
					follow();
				} else {
					let towards: 1 | -1 = direction;
					const play = () => player.goToAndPlay(towards === 1 ? 0 : player.totalFrames, true);
					if (bounce)
						player.addEventListener("complete", () => {
							towards = towards === 1 ? -1 : 1;
							player.setDirection(towards);
							if (loop || towards !== direction) player.play();
						});
					const how = el.dataset.lottiePlay;
					if (autoplay) play();
					else if (how === "view") {
						const once = new IntersectionObserver((entries) => {
							if (!entries.some((e) => e.isIntersecting)) return;
							once.disconnect();
							play();
						});
						once.observe(el);
						observers.push(once);
					} else if (how === "hover") {
						const enter = () => play();
						const leave = () => {
							towards = direction;
							player.setDirection(direction);
							player.goToAndStop(direction === 1 ? 0 : player.totalFrames, true);
						};
						el.addEventListener("pointerenter", enter);
						el.addEventListener("pointerleave", leave);
						undo.push(() => {
							el.removeEventListener("pointerenter", enter);
							el.removeEventListener("pointerleave", leave);
						});
					}
				}
			} catch {
				// a file that can't be read leaves the still it settled on
			}
		};
		for (const el of Array.from(document.querySelectorAll<HTMLElement>("[data-lottie]"))) {
			if (el.dataset.loading === "lazy") seen.observe(el);
			else void start(el);
		}
		return () => {
			gone = true;
			seen.disconnect();
			shown.disconnect();
			for (const o of observers) o.disconnect();
			for (const u of undo) u();
			for (const f of frames.values()) cancelAnimationFrame(f);
			for (const p of players) p.destroy();
		};
	}, [path]);
	return null;
}

let library: Promise<LottieWeb> | null = null;
function load(): Promise<LottieWeb> {
	library ??= import("lottie-web").then((m) => {
		const lottie = (m.default ?? m) as unknown as LottieWeb;
		const w = window as unknown as { lottie?: unknown };
		w.lottie ??= lottie;
		return lottie;
	});
	return library;
}

/** A Lottie's animation: its JSON, or the first animation a .lottie (a zip) lists, its images inlined. */
async function read(src: string): Promise<unknown> {
	const bytes = new Uint8Array(await (await fetch(src)).arrayBuffer());
	if (!(bytes[0] === 0x50 && bytes[1] === 0x4b)) return JSON.parse(new TextDecoder().decode(bytes));
	const { unzipSync, strFromU8 } = await import("fflate");
	const files = unzipSync(bytes);
	const text = (name: string) => (files[name] ? strFromU8(files[name]) : null);
	const manifest = JSON.parse(text("manifest.json") ?? "{}") as { animations?: { id: string }[] };
	const id = manifest.animations?.[0]?.id;
	const json = id ? text(`animations/${id}.json`) : null;
	if (!json) throw new Error("no animation in the file");
	const data = JSON.parse(json) as { assets?: { p?: string; u?: string; e?: number }[] };
	for (const asset of data.assets ?? []) {
		const file = asset.p ? files[`images/${asset.p}`] : undefined;
		if (!file) continue;
		const ext = (asset.p!.split(".").pop() ?? "").toLowerCase();
		const type = ext === "svg" ? "svg+xml" : ext === "jpg" ? "jpeg" : ext;
		let binary = "";
		for (let i = 0; i < file.length; i += 0x8000) binary += String.fromCharCode(...file.subarray(i, i + 0x8000));
		asset.p = `data:image/${type};base64,${btoa(binary)}`;
		asset.u = "";
		asset.e = 1;
	}
	return data;
}
