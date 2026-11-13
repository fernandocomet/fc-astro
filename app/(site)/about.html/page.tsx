import type { Metadata } from "next";
import CookiePreferences2 from "@/components/cookie-preferences-2";
import SharedSection3 from "@/components/shared-section-3";
import SiteFooter2 from "@/components/site-footer-2";
import SiteFooter4 from "@/components/site-footer-4";
import SiteHeader from "@/components/site-header";
import SiteHeader2 from "@/components/site-header-2";
import SiteHeader4 from "@/components/site-header-4";
import "./page.css";

export const metadata: Metadata = {
	title: { absolute: "About" },
	description: "View my Webflow portfolio featuring Enterprise clients including Anytime Fitness, Orangetheory, Apollo Theater, and more. Expert Webflow development projects.",
	alternates: { canonical: "/about.html", },
	openGraph: {
		title: "About",
		description: "View my Webflow portfolio featuring Enterprise clients including Anytime Fitness, Orangetheory, Apollo Theater, and more. Expert Webflow development projects.",
		type: "website",
		images: ["/assets/images/6988d97496f56128c7d38889-opengraph-baf3cc80cc.jpg"],
	},
	twitter: {
		card: "summary_large_image",
	},
};

export default function Page() {
	return (
		<>
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"AboutPage\",\"name\":\"About\",\"url\":\"/about\",\"about\":{\"@type\":\"Person\",\"name\":\"Fernando Comet\",\"jobTitle\":\"Creative Technologist Freelance Contractor\",\"description\":\"I am a Creative Technologist Freelance Contractor with a multi-stack approach to the modern web: Webflow, Framer, Shopify, Vibe Code. I don't believe in a one-size-fits-all solution; instead, I select and implement the specific technology that best aligns with the project's goals, ensuring a perfect balance between design intent and technical execution.\",\"knowsAbout\":[\"Webflow\",\"Framer\",\"Shopify\",\"Vibe Code\",\"Web Development\",\"Creative Technology\",\"Artificial Intelligence\"],\"hasOccupation\":{\"@type\":\"Occupation\",\"name\":\"Creative Technologist\",\"occupationalCategory\":\"Web Development\"},\"alumniOf\":[{\"@type\":\"Organization\",\"name\":\"KSchool\"},{\"@type\":\"Organization\",\"name\":\"Universidad Europea\"},{\"@type\":\"Organization\",\"name\":\"Neoland\"},{\"@type\":\"Organization\",\"name\":\"ThePowerMBA\"}],\"worksFor\":[{\"@type\":\"Organization\",\"name\":\"Ignite Visibility (Outliant)\"},{\"@type\":\"Organization\",\"name\":\"Elastic Heads\"},{\"@type\":\"Organization\",\"name\":\"Weborama\"}],\"sameAs\":[\"https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7424139925001785344\"],\"image\":\"https://www.fernandocomet.com/assets/images/6987702b6ed2dabbeeabcb27-machupichu-4e074af3e1.webp\"}}" }} />
			<SiteHeader2 />
			<div className="page_wrap">
				<div className="u-position-fixed">
					<div className="w-embed" />
				</div>
				<SharedSection3 />
				<SiteHeader path={"/about.html"} />
				<main className="main-wrapper">
					<div id="top-of-page" data-indicator="COMET" data-reveal-group="" data-stagger="" className="home-hero small">
						<div className="grid-wrapper">
							<div id="w-node-_2a9e3de7-680f-c59c-f6ad-b5b81a6934d6-64389f16" className="background-wrapper-2 half-page">
								<div className="background">
									<div className="overlay-2 light" />
								</div>
							</div>
							<div id="w-node-_2a9e3de7-680f-c59c-f6ad-b5b81a6934d9-64389f16" className="hero-content">
								<div id="w-node-_2a9e3de7-680f-c59c-f6ad-b5b81a6934da-64389f16" className="content-wrapper">
									<div id="w-node-_2a9e3de7-680f-c59c-f6ad-b5b81a6934db-64389f16" className="home-hero-intro-2">
										<div id="w-node-_2a9e3de7-680f-c59c-f6ad-b5b81a6934dc-64389f16" className="hero-title">
											<h1 className="heading-2 large">Engineering High-Performance Digital Solutions Across the Modern Web</h1>
										</div>
										{" "}
										<a href="#" id="w-node-_2a9e3de7-680f-c59c-f6ad-b5b81a6934df-64389f16" className="circle-link w-inline-block">
											<div className="button-text-2">ABOUT</div>
											<div className="scroll-link-outline" />
										</a>
										{" "}
										<div id="w-node-_2a9e3de7-680f-c59c-f6ad-b5b81a6934e3-64389f16" className="small-width">
											<div className="body-display">Fernando Comet</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<section data-indicator="WEBFLOWCONF" className="parallax-section">
						<div className="hide w-embed w-script">
							<script dangerouslySetInnerHTML={{ __html: "\ndocument.addEventListener(\"DOMContentLoaded\", (event) => {\n  gsap.registerPlugin(ScrollTrigger);\n  const triggerElement = document.querySelector(\".parallax-section\");\n  const targetImage = document.querySelector(\".parallax-img\");\n  if (triggerElement && targetImage) {\n    let initialScale = window.innerWidth > 992 ? 0.5 : 0.6;\n    gsap.fromTo(\n      targetImage,\n      {\n        scale: initialScale,\n        borderRadius: \"24px\" \n      },\n      {\n        scale: 1,\n        borderRadius: \"0px\", \n        ease: \"none\",\n        scrollTrigger: {\n          trigger: triggerElement,\n          start: \"top bottom\",   \n          end: \"center center\",  \n          scrub: 1,              \n          markers: false         \n        }\n      }\n    );\n  } else {\n    console.error(\"No se han encontrado los elementos .parallax-section o .parallax-img\");\n  }\n});\n" }} />
						</div>
						<img src="/assets/images/webflowconf-taxi-big-ac0d50d33e.webp" loading="lazy" width="1024" height="576" alt="WebflowConf Taxi drivers" srcSet="/assets/images/webflowconf-taxi-copy-p-500-e0c9b0fdf2.webp 500w, /assets/images/webflowconf-taxi-copy-p-800-10ad8c9b75.webp 800w, /assets/images/webflowconf-taxi-copy-p-1080-c9c5258f9c.webp 1080w, /assets/images/webflowconf-taxi-copy-p-1600-94bc3c9c7a.webp 1600w, /assets/images/webflowconf-taxi-big-ac0d50d33e.webp 2048w" sizes="(max-width: 1279px) 100vw, 1024px" className="parallax-img" />
					</section>
					<section data-stagger="" data-indicator="ABOUT" data-reveal-group="" className="section-about-home">
						<div className="page-padding">
							<div className="container-large">
								<div className="padding-vertical padding-xhuge">
									<div className="heading-paragraph">
										<div className="about-intro">
											<div className="text-size-tiny text-style-allcaps">About me</div>
											<h2>
												I am a Creative Technologist Freelance Contractor with a multi-stack approach to the modern web: Webflow, Framer, Shopify, Vibe Code. I don't believe in a one-size-fits-all solution; instead, I select and implement the specific technology that best aligns with the project’s goals, ensuring a perfect balance between design intent and technical execution.
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<div data-stagger="" data-indicator="DIGITAL PATH" data-reveal-group="" className="section-path">
						<div className="grid-wrapper">
							<div id="w-node-b653c438-2680-1019-26d4-701b72c0d024-64389f16" className="stacked-content large">
								<div className="content-wrapper">
									<div id="w-node-b653c438-2680-1019-26d4-701b72c0d026-64389f16" className="subtitle">My story</div>
									<div id="w-node-b653c438-2680-1019-26d4-701b72c0d028-64389f16" className="stacked-title">
										<div className="large-width">
											<h2 className="heading-4 large">My Digital path</h2>
										</div>
										<div className="large-width">
											<div className="body-display dual-paragraph">
												{"With over a decade of experience in the digital space—transitioning from Digital Advertising to Lead Engineering—I have worked with top-tier organizations like "}
												<strong>Ignite Visibility (Outliant), Elastic Heads, and Weborama</strong>
												. This journey has given me a unique perspective on how to scale digital products for enterprise-level demands, managing projects that require long-term maintenance, iteration, and technical leadership.
												<br />
												<br />
												{"Learning and Education is a cornerstone of my professional identity. I have shared my knowledge of Webflow and Framer as an instructor at "}
												<strong>KSchool, Universidad Europea, Neoland, and ThePowerMBA</strong>
												. Teaching at these leading bootcamps and universities keeps me at the cutting edge of industry standards and allows me to translate complex technical concepts into actionable strategies for both students and clients alike
												<br />
											</div>
										</div>
									</div>
								</div>
								<div className="gallery-wrapper">
									<div className="large-growing-images">
										<div className="growing-image small" data-ix="x772296b1">
											<div className="growing-background three" />
										</div>
										<div className="growing-image right">
											<div className="growing-background four" />
										</div>
									</div>
									<div className="large-growing-images">
										<div className="growing-image left">
											<div className="growing-background five" />
										</div>
										<div className="growing-image small" data-ix="x772296b1">
											<div className="growing-background six" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<section data-indicator="NOMAD" className="section-about-hero">
						<div className="page-padding-5">
							<div className="container-large-6">
								<div className="about-hero-component">
									<div id="w-node-e9540d5c-cf66-540b-6b0b-db49fa340645-64389f16" className="about-image">
										<div className="portrait-image">
											<img width="952" height="1310" alt="A llama stands beside Fernando Comet giving a thumbs-up at Machu Picchu." src="/assets/images/machupichu-4e074af3e1.webp" loading="lazy" srcSet="/assets/images/machupichu-p-500-68504fa084.webp 500w, /assets/images/machupichu-4e074af3e1.webp 952w" sizes="(max-width: 952px) 100vw, 952px" className="portrait" />
										</div>
									</div>
									<div id="scroll" className="about-history w-node-e9540d5c-cf66-540b-6b0b-db49fa340651-64389f16">
										<div className="paralax-box" data-ix="x1fb9d876" data-ixe="e-100.0:0" data-ixcont={"[{\"e\":\"e-100.0\",\"l\":[{\"s\":0.8,\"r\":0,\"tr\":[{\"m\":\"e-100.0:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,0],[100,35]]}],\"k\":\"view\",\"o\":0,\"l\":1}]}]"}>
											<div className="title-stacked">
												<div className="text-size-tiny text-style-allcaps">Travel</div>
												<div className="margin-bottom margin-large">
													<div className="margin-bottom margin-medium">
														<h2 className="heading-xlarge">Digital Nomad</h2>
													</div>
													<div>
														<p className="text-size-large m-top">Keep Moving!</p>
													</div>
												</div>
												<div className="history-info">
													<p className="text-size-regular-7">
														I am based in Madrid, spend my summers in the green landscapes of Galicia, and often take my office on the road.
														<br />
														‍
														<br />
														{"My work is truly global; last year, I embarked on a four-month digital nomad journey that started at the "}
														<strong>Webflow Conf in New York</strong>
														{" and took me through "}
														<strong>Panama, Peru</strong>
														{"—where I reached the 5,036m summit of Rainbow Mountain—and "}
														<strong>Buenos Aires</strong>
														{". "}
														<br />
														<br />
														Successfully managing high-stakes projects while navigating different time zones and cultures has not only expanded my network of digital friends but also sharpened my ability to stay focused and productive in any environment.
														<br />
														<br />
														Next stop: Probably Asia.
														<br />
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section data-stagger="" data-indicator="ADVENTURE" data-reveal-group="" className="section-about-about">
						<div className="page-padding">
							<div className="container-large">
								<div className="padding-vertical padding-xhuge">
									<div className="heading-paragraph">
										<div className="about-intro">
											<div className="text-size-tiny text-style-allcaps">Adventure</div>
											<h2 className="heading-5">
												{"Beyond the screen, I am an explorer at heart. Whether I’m capturing perspectives from above with my "}
												<strong>drone</strong>
												{", practicing photography, or seeking out adventure sports, I thrive on discovery. This same drive translates into my athletic life; I am a dedicated runner—having completed my first "}
												<strong>marathon</strong>
												{" last year—and I am currently training for "}
												<strong>Hyrox</strong>
												.
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<div data-stagger="" data-indicator="WRITER" data-reveal-group="" className="section-writer">
						<div className="grid-wrapper">
							<div id="w-node-baf12431-22df-90b0-ca73-2ebb7947f5a5-64389f16" className="stacked-content large">
								<div className="content-wrapper">
									<div id="w-node-baf12431-22df-90b0-ca73-2ebb7947f5a9-64389f16" className="stacked-title">
										<div className="large-width">
											<h2 className="heading-4 large">Writer</h2>
										</div>
										<div className="large-width">
											<div className="body-display dual-paragraph">
												{"I consider myself a lifelong learner and a dedicated "}
												<strong>Researcher</strong>
												{", always diving deep into the latest technological shifts. My passion for synthesis and clarity has led me to become a "}
												<strong>Writer</strong>
												{", where I break down complex concepts into actionable insights. Currently, I channel this through my "}
												<a href="https://Subscribe on LinkedIn https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7424139925001785344" target="_blank">
													<strong>LinkedIn Newsletter focused on Artificial Intelligence</strong>
												</a>
												, where I explore how AI is reshaping the future of design and development. For me, staying at the forefront of the AI revolution is not just a professional requirement, but a personal mission to empower others through knowledge.
												<br />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
			<SiteHeader4 path={"/about.html"} />
			<SiteFooter2 path={"/about.html"} />
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
