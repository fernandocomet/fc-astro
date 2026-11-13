import type { Metadata } from "next";
import CookiePreferences2 from "@/components/cookie-preferences-2";
import SharedSection2 from "@/components/shared-section-2";
import SharedSection3 from "@/components/shared-section-3";
import SiteFooter2 from "@/components/site-footer-2";
import SiteFooter4 from "@/components/site-footer-4";
import SiteHeader from "@/components/site-header";
import SiteHeader2 from "@/components/site-header-2";
import SiteHeader4 from "@/components/site-header-4";
import "./page.css";

export const metadata: Metadata = {
	title: { absolute: "Fernando Comet | Webflow Expert & Enterprise Solutions" },
	description: "Webflow Lead specializing in scalable Enterprise solutions. Expert in Performance, CMS, SEO, Accessibility & Animation. 15+ years experience building high-performance websites.",
	alternates: { canonical: "/index.html", },
	robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
	openGraph: {
		title: "Fernando Comet | Webflow Expert & Enterprise Solutions",
		description: "Webflow Lead specializing in scalable Enterprise solutions. Expert in Performance, CMS, SEO, Accessibility & Animation. 15+ years experience building high-performance websites.",
		type: "website",
		images: ["/assets/images/6988d97496f56128c7d38889-opengraph-baf3cc80cc.jpg"],
	},
	twitter: {
		card: "summary_large_image",
	},
	other: {
		"googlebot": "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
	},
};

export default function Page() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"ProfilePage\",\"name\":\"Fernando Comet | Webflow Expert & Enterprise Solutions\",\"url\":\"/\",\"mainEntity\":{\"@type\":\"Person\",\"name\":\"Fernando Comet\",\"jobTitle\":\"Webflow Lead & Enterprise Solutions Specialist\",\"description\":\"Webflow Lead specializing in scalable Enterprise solutions. Expert in Performance, CMS, SEO, Accessibility & Animation with 15+ years experience building high-performance websites.\",\"url\":\"/\",\"image\":\"https://www.fernandocomet.com/assets/images/696bdddf41662fa6f44759a4-comet4c-02944b6680.webp\",\"email\":\"info@fernandocomet.com\",\"knowsAbout\":[\"Webflow Development\",\"Enterprise Solutions\",\"Web Performance Optimization\",\"CMS Architecture\",\"SEO\",\"Web Accessibility\",\"Animation & Interaction Design\",\"Webflow Migrations\"],\"award\":\"Webflow ACE\"}}" }} />
			<SiteHeader2 />
			<div className="page_wrap">
				<div className="u-position-fixed">
					<div className="w-embed" />
				</div>
				<SharedSection3 />
				<SiteHeader path={"/index.html"} />
				<main className="general-wrapper">
					<header id="top-of-page" data-indicator="INTRO" data-reveal-group="" data-stagger="" className="section-hero-home">
						<div className="home-hero-component">
							<div className="page-padding-5">
								<div className="home-hero-top">
									<div className="container-large-5">
										<div id="page-top" className="home-hero-content">
											<div className="home-hero-intro">
												<div className="margin-bottom margin-large">
													<h1 className="heading-xlarge">I am Fernando Comet, Your Scalable Webflow Solution.</h1>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="home-hero-images">
							<div className="hero-image-strip" data-ix="xb3ec6214" data-ixe="e-26.0:0">
								<div className="hero-image">
									<img width="600" height="338" alt="Spanish crew at WebflowConf." src="/assets/images/1000247225-197f56ae94.webp" loading="lazy" srcSet="/assets/images/1000247225-p-500-bd0edb6210.webp 500w, /assets/images/1000247225-p-800-696e472f73.webp 800w, /assets/images/1000247225-p-1080-c636d7b23d.webp 1080w, /assets/images/1000247225-197f56ae94.webp 1200w" sizes="(max-width: 767px) 100vw, 600px" className="image-full" />
								</div>
								<div className="hero-image">
									<img width="338" height="600" alt="Me standing on a blue circular floor at WebflowConf." src="/assets/images/1000246835-e67e8970c1.webp" loading="lazy" srcSet="/assets/images/1000246835-p-500-a59e169abc.webp 500w, /assets/images/1000246835-e67e8970c1.webp 677w" sizes="(max-width: 479px) 100vw, 338px" className="image-full" />
								</div>
								<div className="hero-image">
									<img width="600" height="450" alt="Standing in front of the 34th Street Penn Station ACE subway entrance." src="/assets/images/1000247892-3259e340c5.webp" loading="lazy" srcSet="/assets/images/1000247892-p-500-fe8b2695c7.webp 500w, /assets/images/1000247892-p-800-09398c27de.webp 800w, /assets/images/1000247892-p-1080-31af3ea79b.webp 1080w, /assets/images/1000247892-3259e340c5.webp 1200w" sizes="(max-width: 767px) 100vw, 600px" className="image-full" />
								</div>
								<div className="hero-image">
									<img width="600" height="450" alt="Posing with Sergie Magdalin, Webflow Co-Founder" src="/assets/images/whatsapp-image-2025-09-21-at-18-58-23-62ef2cc26b.jpeg" loading="lazy" srcSet="/assets/images/whatsapp-image-2025-09-21-at-18-58-23-p-500-698a411519.webp 500w, /assets/images/whatsapp-image-2025-09-21-at-18-58-23-p-800-09245f95ae.webp 800w, /assets/images/whatsapp-image-2025-09-21-at-18-58-23-62ef2cc26b.jpeg 1200w" sizes="(max-width: 767px) 100vw, 600px" className="image-full" />
								</div>
							</div>
						</div>
						<div className="hero-trigger" data-ixcont={"[{\"e\":\"e-26.0\",\"l\":[{\"s\":0.8,\"r\":0,\"tr\":[{\"m\":\"e-26.0:0\",\"p\":\"--ix-tx\",\"u\":\"%\",\"v\":[[0,0],[100,33.33]]}],\"k\":\"view\",\"o\":0,\"l\":1}]}]"} />
					</header>
					<section data-stagger="" data-indicator="ABOUT" data-reveal-group="" className="section-about-home">
						<div className="page-padding">
							<div className="container-large">
								<div className="padding-vertical padding-xhuge">
									<div className="heading-paragraph">
										<div className="about-intro">
											<div className="text-size-tiny text-style-allcaps">About</div>
											<h2>
												Stop worrying about code maintenance and performance. I translate complex designs into scalable, Enterprise-ready Webflow solutions.
											</h2>
										</div>
										{" "}
										<a href="/about.html" className="button light-button w-inline-block">
											<div className="button-text">Learn about me</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section data-indicator="VIDEO" className="parallax-section">
						<div id="background-video" className="video-background">
							<div className="w-embed w-script">
								<video src="https://lettercdn.com/b210d932-5d24-4106-bc10-b23f12ce89a3/media/comet-2-720-c01307570a.mp4" autoPlay loop muted playsInline />
								{" "}
								<script dangerouslySetInnerHTML={{ __html: "\ngsap.registerPlugin(ScrollTrigger);\nlet scaleValue = 1.5 / 3;\ngsap.matchMedia().add(\"(min-width: 992px)\", () => {\n  scaleValue = 1.6 / 3; \n});\n//Video\ngsap.fromTo(\n  \".parallax-section\",\n  {\n    scale: 2 / 3 /* was 1/3, they wanted it bigger */\n  },\n  {\n    scale: 1,\n    scrollTrigger: {\n      trigger: \".parallax-section\",\n      scrub: 0.5, // was 1\n      start: \"top 90%\",\n      end: \"bottom+=500vh top\"\n    }\n  }\n);\n" }} />
							</div>
						</div>
					</section>
					<section className="section-info">
						<div className="page-padding">
							<div className="container-large">
								<div className="services-component">
									<div id="w-node-_618f72cc-537c-afd0-54f4-48b09df31cbc-4061750a" className="anchor-link-wrapper">
										<div className="anchor-link" {...({ href: "#one" } as Record<string, unknown>)} />
										<div className="anchor-link" {...({ href: "#two" } as Record<string, unknown>)} />
										<div className="anchor-link" {...({ href: "#three" } as Record<string, unknown>)} />
									</div>
									<div id="w-node-_618f72cc-537c-afd0-54f4-48b09df31cc0-4061750a" className="service-item-list">
										<div id="one" data-indicator="PERFORMANCE" className="service-item" data-ixcont={"[{\"e\":\"e-17.0\",\"l\":[{\"s\":0.9,\"r\":0,\"tr\":[{\"m\":\"e-17.0:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,20],[100,-25]]},{\"m\":\"e-17.0:0\",\"p\":\"opacity\",\"u\":\"\",\"v\":[[0,0],[20,1],[50,1],[70,0]]}],\"k\":\"view\",\"o\":0.4,\"l\":1}],\"q\":\"(min-width: 992px), (min-width: 768px) and (max-width: 991px)\"}]"}>
											<div className="timeline-content">
												<div className="timeline-inside">
													<div className="inside solid">
														<div className="image-base">
															<img src="/assets/images/jqyg5nyotp0-d468df0811.webp" loading="lazy" width="3258" height="4891" alt="Webflow performance optimization showing fast loading website metrics" srcSet="/assets/images/jqyg5nyotp0-p-500-0a79a2194c.webp 500w, /assets/images/jqyg5nyotp0-d468df0811.webp 600w" sizes="100vw" className="image-base" />
														</div>
													</div>
												</div>
											</div>
											<div id="w-node-_618f72cc-537c-afd0-54f4-48b09df31cc7-4061750a" className="service-card light" data-ix="x3f4f74f1" data-ixe="e-17.0:0">
												<div className="margin-bottom margin-large">
													<div className="margin-bottom margin-small">
														<div className="service-title">
															<div className="text-size-tiny text-style-allcaps">Performance</div>
															<h2 className="heading-medium">{"Performance & Speed"}</h2>
														</div>
													</div>
													<div className="max-width-small">
														<p className="text-size-regular">
															Websites engineered to deliver top Core Web Vitals scores.
															<br />
														</p>
													</div>
												</div>
											</div>
										</div>
										<div data-indicator="CMS" className="service-item" data-ixcont={"[{\"e\":\"e-17.1\",\"l\":[{\"s\":0.9,\"r\":0,\"tr\":[{\"m\":\"e-17.1:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,20],[100,-25]]},{\"m\":\"e-17.1:0\",\"p\":\"opacity\",\"u\":\"\",\"v\":[[0,0],[20,1],[50,1],[70,0]]}],\"k\":\"view\",\"o\":0.4,\"l\":1}],\"q\":\"(min-width: 992px), (min-width: 768px) and (max-width: 991px)\"}]"}>
											<div className="timeline-content">
												<div className="timeline-inside">
													<div className="inside solid">
														<div className="image-base">
															<img src="/assets/images/slkenpp5pbi-e6f8c6a41e.webp" loading="lazy" width="3024" height="4032" alt="Webflow design systems and component libraries showing reusable components" srcSet="/assets/images/slkenpp5pbi-p-500-23e4c1f6ad.webp 500w, /assets/images/slkenpp5pbi-e6f8c6a41e.webp 600w" sizes="100vw" className="image-base" />
														</div>
													</div>
												</div>
											</div>
											<div id="w-node-_618f72cc-537c-afd0-54f4-48b09df31ce0-4061750a" className="service-card light" data-ix="x3f4f74f1" data-ixe="e-17.1:0">
												<div className="margin-bottom margin-large">
													<div className="margin-bottom margin-small">
														<div className="service-title">
															<div className="text-size-tiny text-style-allcaps">CMS</div>
															<h2 className="heading-medium">Scalable Architecture (CMS)</h2>
														</div>
													</div>
													<div className="max-width-small">
														<p className="text-size-regular">
															Enterprise-ready structures that handle thousands of items seamlessly
															<br />
														</p>
													</div>
												</div>
											</div>
										</div>
										<div data-indicator="ACCESSIBILITY" className="service-item" data-ixcont={"[{\"e\":\"e-17.2\",\"l\":[{\"s\":0.9,\"r\":0,\"tr\":[{\"m\":\"e-17.2:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,20],[100,-25]]},{\"m\":\"e-17.2:0\",\"p\":\"opacity\",\"u\":\"\",\"v\":[[0,0],[20,1],[50,1],[70,0]]}],\"k\":\"view\",\"o\":0.4,\"l\":1}],\"q\":\"(min-width: 992px), (min-width: 768px) and (max-width: 991px)\"}]"}>
											<div className="timeline-content">
												<div className="timeline-inside">
													<div className="inside solid end">
														<div className="image-base special">
															<img src="/assets/images/inclusive-e3042f92a5.png" loading="lazy" width="438" height="776" alt="Inclusive Design by Microsoft" className="image" />
														</div>
													</div>
												</div>
											</div>
											<div id="w-node-_618f72cc-537c-afd0-54f4-48b09df31cf9-4061750a" className="service-card light" data-ix="x3f4f74f1" data-ixe="e-17.2:0">
												<div className="margin-bottom margin-large">
													<div className="margin-bottom margin-small">
														<div className="service-title">
															<div className="text-size-tiny text-style-allcaps">{"Accessibility & SEO"}</div>
															<h2 className="heading-medium">{"Compliance & Reach (A11y & SEO)"}</h2>
														</div>
													</div>
													<div className="max-width-small">
														<p className="text-size-regular">
															Ensuring maximum accessibility and search visibility from day one
															<br />
														</p>
													</div>
												</div>
											</div>
										</div>
										<div data-indicator="ANIMATION" className="service-item" data-ixcont={"[{\"e\":\"e-17.3\",\"l\":[{\"s\":0.9,\"r\":0,\"tr\":[{\"m\":\"e-17.3:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,20],[100,-25]]},{\"m\":\"e-17.3:0\",\"p\":\"opacity\",\"u\":\"\",\"v\":[[0,0],[20,1],[50,1],[70,0]]}],\"k\":\"view\",\"o\":0.4,\"l\":1}],\"q\":\"(min-width: 992px), (min-width: 768px) and (max-width: 991px)\"}]"}>
											<div className="timeline-content">
												<div className="timeline-inside">
													<div className="inside solid end">
														<div className="image-base">
															<img src="/assets/images/fvfk16chrre-a1fdce4a31.webp" loading="lazy" width="3072" height="2048" alt="Waiting for the subway" srcSet="/assets/images/fvfk16chrre-p-500-948f39b0bb.webp 500w, /assets/images/fvfk16chrre-a1fdce4a31.webp 600w" sizes="100vw" className="image-base" />
														</div>
													</div>
												</div>
											</div>
											<div id="w-node-c7899109-1f57-811c-91d8-4b83fd1e96e4-4061750a" className="service-card light" data-ix="x3f4f74f1" data-ixe="e-17.3:0">
												<div className="margin-bottom margin-large">
													<div className="margin-bottom margin-small">
														<div className="service-title">
															<div className="text-size-tiny text-style-allcaps">Interactions IxD</div>
															<h2 className="heading-medium">Advanced UX (Animation)</h2>
														</div>
													</div>
													<div className="max-width-small">
														<p className="text-size-regular">
															Implementing custom GSAP/JS animations for a truly memorable user experience.
															<br />
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section data-stagger="" data-indicator="HISTORY" data-reveal-group="" className="section-history">
						<div className="page-padding">
							<div className="container-large">
								<div className="padding-vertical padding-xxhuge">
									<div className="about-history-banner">
										<div data-stagger="" data-reveal-group="" className="history-title">
											<div className="history-intro">
												<h2 className="heading-large">Proven Expertise: Webflow Lead and Webflow Enterprise</h2>
												<div className="max-width-medium">
													<p className="text-size-regular">
														{"Webflow partner & expert in the "}
														<strong>Webflow ACE</strong>
														{" program."}
													</p>
												</div>
											</div>
										</div>
										<div id="w-node-c108d439-ab7a-c5ae-cbdb-00c99b88cb24-4061750a" className="history-list">
											<div id="w-node-c108d439-ab7a-c5ae-cbdb-00c99b88cb25-4061750a" className="history-list-item">
												<div id="w-node-c108d439-ab7a-c5ae-cbdb-00c99b88cb26-4061750a" className="history-card">
													<div className="history-year">
														<div className="text-size-tiny text-style-allcaps">2022-Now</div>
													</div>
													<h3 className="heading-small">Webflow Engineer - Ignite Visibility (Outliant)</h3>
													<div className="text-size-regular">
														Webflow Lead working for Entreprise Clients. Specialized in Migrations, Performance, SEO, Accessibility and Animation.
													</div>
												</div>
											</div>
											<div id="w-node-c108d439-ab7a-c5ae-cbdb-00c99b88cb2e-4061750a" className="history-list-item">
												<div id="w-node-c108d439-ab7a-c5ae-cbdb-00c99b88cb2f-4061750a" className="history-card">
													<div className="history-year">
														<div className="text-size-tiny text-style-allcaps">2022 - Now</div>
													</div>
													<h3 className="heading-small">Webflow and Framer Teacher</h3>
													<div className="text-size-regular">
														Teacher at KSchools, ThePowerMBA, Neoland, Universidad Europea and NorthCamp.
													</div>
												</div>
											</div>
											<div id="w-node-c108d439-ab7a-c5ae-cbdb-00c99b88cb37-4061750a" className="history-list-item">
												<div id="w-node-c108d439-ab7a-c5ae-cbdb-00c99b88cb38-4061750a" className="history-card">
													<div className="history-year">
														<div className="text-size-tiny text-style-allcaps">2020-Now</div>
													</div>
													<h3 className="heading-small">Freelance Web Developer</h3>
													<div className="text-size-regular">Making sites in Webflow and other technologies for Agencies</div>
												</div>
											</div>
											<div id="w-node-c108d439-ab7a-c5ae-cbdb-00c99b88cb40-4061750a" className="history-list-item">
												<div id="w-node-c108d439-ab7a-c5ae-cbdb-00c99b88cb41-4061750a" className="history-card">
													<div className="history-year">
														<div className="text-size-tiny text-style-allcaps">2010-2019</div>
													</div>
													<h3 className="heading-small">Display Advertising Specialist</h3>
													<div className="text-size-regular">
														Technical Support, DCO, RichMedia, Campaign Management, creative training.
													</div>
												</div>
											</div>
											<div className="history-bg" data-ix="x28497d9c" data-ixe="e-97.0" data-ixview="e-97.0@0%" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<SharedSection2 path={"/index.html"} />
					<section className="marquee">
						<div className="marquee-content scroll">
							<div className="looping-text">
								Design-led, Engineering-driven. Turning your business ideas into high-performing products.
							</div>
						</div>
						<div className="marquee-content scroll">
							<div className="looping-text">
								Design-led, Engineering-driven. Turning your business ideas into high-performing products.
							</div>
						</div>
						<div className="w-embed" />
					</section>
					<section data-stagger="" data-indicator="CONTACT" data-reveal-group="" className="section-contact">
						<div className="page-padding">
							<div className="container-large">
								<div className="padding-vertical padding-xhuge">
									<div className="action-intro-wrapper">
										<div className="action-intro">
											<h3 className="heading-large">{"Let’s build your \u00a0positioning"}</h3>
											<div className="max-width-medium">
												<p className="text-size-regular">Ready to speak directly to your audience?</p>
											</div>
										</div>
										{" "}
										<a href="mailto:info@fernandocomet.com?subject=Contact%20from%20website" className="button light-button w-inline-block">
											<div className="button-text">Let’s talk about your project</div>
										</a>
									</div>
								</div>
							</div>
						</div>
						<div className="sticky-about-banner">
							<div className="background-wrapper sticky">
								<div className="background-image relative">
									<img width="1050" height="1400" alt="Fernado Comet" src="/assets/images/comet4c-02944b6680.webp" loading="lazy" className="image-full" />
									{" "}
									<div className="overlay no-bg" />
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
			<SiteHeader4 path={"/index.html"} />
			<SiteFooter2 path={"/index.html"} />
			<div role="complementary" className="cookie-en">
				<div fs-cc="banner" className="fs-cc-banner2_component" style={{ display: "none" }}>
					<div className="fs-cc-banner2_container">
						<div className="fs-cc-banner2_text">
							{"This website uses its own and third-party cookies to obtain statistics on the user's browsing habits, improve their experience and allow them to share content on social networks. You can accept or reject Cookies, as well as customize which ones you want to disable. "}
							<br />
							<br />
							{"You can find all the information in our "}
							<a href="/cookie-policy.html" aria-label="Go to Cookies page" className="link-4">Cookies Policy</a>
						</div>
						<div className="fs-cc-banner2_buttons-wrapper">
							<a fs-cc="deny" href="#" className="fs-cc-banner2_button w-button">Deny</a>
							{" "}
							<a fs-cc="allow" href="#" className="fs-cc-banner2_button w-button">Accept</a>
						</div>
					</div>
				</div>
				<CookiePreferences2 />
				<div fs-cc-scroll="disable" fs-cc="preferences" className="fs-cc-prefs2_component" style={{ display: "none" }}>
					<div className="fs-cc-prefs2_form-wrapper w-form">
						<form id="cookie-preferences" name="wf-form-Cookie-Preferences" method="get" className="fs-cc-prefs2_form">
							<div aria-label="Close" fs-cc="close" className="fs-cc-prefs2_close">
								<div className="fs-cc-preferences2_close-icon w-embed">
									<svg fill="currentColor" aria-hidden="true" focusable="false" viewBox="0 0 16 16">
										<path d="M9.414 8l4.293-4.293-1.414-1.414L8 6.586 3.707 2.293 2.293 3.707 6.586 8l-4.293 4.293 1.414 1.414L8 9.414l4.293 4.293 1.414-1.414L9.414 8z" />
									</svg>
								</div>
								<div className="hide">Close</div>
							</div>
							<SiteFooter4 />
							<input type="submit" className="hide w-button" defaultValue="Submit" />
						</form>
						<div className="w-form-done" />
						<div className="w-form-fail" />
						<div fs-cc="close" className="fs-cc-prefs2_overlay" />
					</div>
				</div>
			</div>
			<script src="https://www.fernandocomet.com/js/fernandocomet-lumos.js" type="text/javascript" />
			<script type="text/javascript" dangerouslySetInnerHTML={{ __html: "gsap.registerPlugin(ScrollTrigger);" }} />
			<script dangerouslySetInnerHTML={{ __html: "\n$(function() {\n  $('.current-year').text(new Date().getFullYear());\n});\n" }} />
			<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/gsap.min.js" />
			<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/ScrollTrigger.min.js" />
			<script async src="https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js" />
			<script defer src="https://cdn.jsdelivr.net/npm/@finsweet/attributes-autovideo@1/autovideo.js" />
		</>
	);
}
