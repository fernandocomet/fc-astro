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
	title: { absolute: "Portfolio | Webflow Projects by Fernando Comet" },
	description: "View my Webflow portfolio featuring Enterprise clients including Anytime Fitness, Orangetheory, Apollo Theater, and more. Expert Webflow development projects.",
	alternates: { canonical: "/works.html", },
	openGraph: {
		title: "Portfolio | Webflow Projects by Fernando Comet",
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
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"CollectionPage\",\"name\":\"Portfolio | Webflow Projects by Fernando Comet\",\"description\":\"View my Webflow portfolio featuring Enterprise clients including Anytime Fitness, Orangetheory, Apollo Theater, and more. Expert Webflow development projects.\",\"url\":\"/works\",\"about\":{\"@type\":\"Person\",\"name\":\"Fernando Comet\",\"jobTitle\":\"Webflow Engineer and Lead\",\"description\":\"Webflow Engineer and Lead specializing in architecting Webflow sites that excel in Core Web Vitals, SEO optimization, and AA/AAA accessibility standards\"},\"hasPart\":[{\"@type\":\"CreativeWork\",\"name\":\"Anytime Fitness\",\"image\":\"https://www.fernandocomet.com/assets/images/695ecd592fd990764ebea142-af-works-834ed6e8b9.webp\",\"creator\":{\"@type\":\"Person\",\"name\":\"Fernando Comet\"}},{\"@type\":\"CreativeWork\",\"name\":\"Codon65\",\"image\":\"https://www.fernandocomet.com/assets/images/696b839b003bcdd9bf980c75-codon65-works-9c9ac74363.webp\",\"creator\":{\"@type\":\"Person\",\"name\":\"Fernando Comet\"}},{\"@type\":\"CreativeWork\",\"name\":\"Svet Solutions Media\",\"image\":\"https://www.fernandocomet.com/assets/images/696b8200bf6a9722f122f7bb-svet-works-0043b50672.webp\",\"creator\":{\"@type\":\"Person\",\"name\":\"Fernando Comet\"}},{\"@type\":\"CreativeWork\",\"name\":\"Outliant\",\"image\":\"https://www.fernandocomet.com/assets/images/696b7cd58c59db3e6266b0c1-outliant-works-8839fe3b0a.webp\",\"creator\":{\"@type\":\"Person\",\"name\":\"Fernando Comet\"}},{\"@type\":\"CreativeWork\",\"name\":\"Apollo Theater\",\"image\":\"https://www.fernandocomet.com/assets/images/696b7398be90a70980cd2d66-apollo-works-f909f832f0.webp\",\"creator\":{\"@type\":\"Person\",\"name\":\"Fernando Comet\"}},{\"@type\":\"CreativeWork\",\"name\":\"Blend 360\",\"image\":\"https://www.fernandocomet.com/assets/images/695ecd59e68d074298fda2b2-blend-works-fc0cad948c.webp\",\"creator\":{\"@type\":\"Person\",\"name\":\"Fernando Comet\"}},{\"@type\":\"CreativeWork\",\"name\":\"Orangetheory Fitness\",\"image\":\"https://www.fernandocomet.com/assets/images/695ecd599518ebd6724b0f4b-otf-works-915f00e441.webp\",\"creator\":{\"@type\":\"Person\",\"name\":\"Fernando Comet\"}},{\"@type\":\"CreativeWork\",\"name\":\"GreenRack Solar\",\"image\":\"https://www.fernandocomet.com/assets/images/696b79f7bfe7403bf7938204-greenrack-works-7cbe279dc5.webp\",\"creator\":{\"@type\":\"Person\",\"name\":\"Fernando Comet\"}},{\"@type\":\"CreativeWork\",\"name\":\"Azagra\",\"image\":\"https://www.fernandocomet.com/assets/images/696b7f5f14d69d02049b3ede-azagra-home-0d52390607.webp\",\"creator\":{\"@type\":\"Person\",\"name\":\"Fernando Comet\"}}]}" }} />
			<SiteHeader2 />
			<div className="page_wrap">
				<div className="u-position-fixed">
					<div className="w-embed" />
				</div>
				<SharedSection3 />
				<SiteHeader path={"/works.html"} />
				<main className="general-wrapper">
					<div id="top-of-page" data-indicator="WEB EXPERIENCES" data-reveal-group="" data-stagger="" className="about-me-hero">
						<div className="grid-wrapper">
							<div id="w-node-_6322da12-9768-d90f-2ee5-bf3935eb380c-3916ae65" className="content-wrapper">
								<div id="w-node-_6322da12-9768-d90f-2ee5-bf3935eb380d-3916ae65" className="center-banner">
									<div className="background-wrapper-2" data-ixcont={"[{\"e\":\"e-105.0\",\"l\":[{\"s\":0.5,\"r\":0,\"tr\":[{\"m\":\"e-105.0:0\",\"p\":\"--ix-sx\",\"u\":\"\",\"v\":[[0,1.1],[100,1.05]]},{\"m\":\"e-105.0:0\",\"p\":\"--ix-sy\",\"u\":\"\",\"v\":[[0,1.1],[100,1.05]]},{\"m\":\"e-105.0:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-10],[100,10]]}],\"k\":\"view\",\"o\":0,\"l\":1}]}]"}>
										<div className="background-2 about-background" data-ix="xbd81e3e2" data-ixe="e-105.0:0">
											<div className="overlay-2" />
										</div>
									</div>
								</div>
								<div id="w-node-_6322da12-9768-d90f-2ee5-bf3935eb3811-3916ae65" className="centered-intro">
									<div className="subtitle">WORKS</div>
									<h1 className="heading-4 extra-large">Engineering Scalable Web Experiences</h1>
								</div>
								<div id="w-node-_6322da12-9768-d90f-2ee5-bf3935eb3817-3916ae65" className="hero-description">
									<div className="stacked-description">
										<div className="body-display white">Fernando Comet</div>
										<div className="body-display">Here a selection of Works</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<section data-indicator="BRANDS" className="works-logos no-padding">
						<div className="grid-wrapper">
							<div id="w-node-d91f1257-0be0-e500-15ce-500a62b2a46f-3916ae65" className="logos-wrapper">
								<div className="logo">
									<img loading="lazy" src="/assets/images/outliant-7e72da1428.svg" alt="Outliant" className="logo-image" />
								</div>
								<div className="logo">
									<img loading="lazy" src="/assets/images/logo-af-white-bf9d0aaafd.svg" alt="Anytime Fitness" className="logo-image" />
								</div>
								<div className="logo">
									<img sizes="(max-width: 960px) 100vw, 960px" srcSet="/assets/images/apollo-logo-wht-rgb-p-500-9941e201e1.png 500w, /assets/images/apollo-logo-wht-rgb-1ef252f522.png 960w" alt="Apollo Theater" src="/assets/images/apollo-logo-wht-rgb-1ef252f522.png" loading="lazy" className="logo-image" />
								</div>
								<div className="logo">
									<img loading="lazy" src="/assets/images/blend360-white-71b53abd23.svg" alt="Blend 360" className="logo-image" />
								</div>
								<div className="logo">
									<img loading="lazy" src="/assets/images/otf-white-f5b58aad18.svg" alt="Orangetheory" className="logo-image" />
								</div>
								<div className="logo">
									<img loading="lazy" src="/assets/images/c65-logo-white-633a811b5f.svg" alt="Codon65" className="logo-image" />
								</div>
							</div>
						</div>
					</section>
					<div data-stagger="" data-indicator="ABOUT" data-reveal-group="" className="works-about">
						<div className="grid-wrapper">
							<div id="w-node-c22f313b-1ffb-8eeb-01b7-38c5d21c0da4-3916ae65" className="stacked-content">
								<div className="content-wrapper">
									<div id="w-node-c22f313b-1ffb-8eeb-01b7-38c5d21c0da6-3916ae65" className="section-intro">
										<div className="stacked-title">
											<div className="subtitle">Works</div>
											<h2 className="paragraph-heading">
												{"This selection of projects highlights my expertise as a "}
												<strong>Webflow Engineer and Lead</strong>
												{", focused on delivering high-end technical solutions where performance and code quality are paramount. I specialize in architecting Webflow sites that excel in "}
												<strong>Core Web Vitals, SEO optimization, and AA/AAA accessibility standards</strong>
												. My approach combines clean engineering with advanced custom code technically robust.
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<section data-stagger="0.3" data-indicator="WORKS" data-reveal-group="" className="section-work-cms">
						<div className="page-padding-5">
							<div className="container-large-2">
								<div className="padding-top padding-xhuge">
									<div className="projects">
										<a href="/works/anytime-fitness.html" className="project-item w-inline-block" data-ixcont={"[{\"e\":\"e-36.0\",\"l\":[{\"s\":0.5,\"r\":0,\"tr\":[{\"m\":\"e-36.0:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-7],[100,7]]},{\"m\":\"e-36.0:0\",\"p\":\"--ix-sx\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]},{\"m\":\"e-36.0:0\",\"p\":\"--ix-sy\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]}],\"k\":\"view\",\"o\":0,\"l\":1}]}]"}>
											<div className="project-card">
												<div className="project-background">
													<img sizes="(max-width: 746px) 100vw, 746px" srcSet="/assets/images/af-works-p-500-aa9247ffcf.webp 500w, /assets/images/af-works-834ed6e8b9.webp 746w" alt="Anytime Fitness" src="/assets/images/af-works-834ed6e8b9.webp" loading="lazy" className="image-full" data-ix="x8beb60e6" data-ixe="e-36.0:0" />
													{" "}
													<div className="overlay transparent" />
												</div>
												<h3 className="text-size-large white">Anytime Fitness</h3>
											</div>
										</a>
										{" "}
										<a href="/works/codon65.html" className="project-item w-inline-block" data-ixcont={"[{\"e\":\"e-36.1\",\"l\":[{\"s\":0.5,\"r\":0,\"tr\":[{\"m\":\"e-36.1:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-7],[100,7]]},{\"m\":\"e-36.1:0\",\"p\":\"--ix-sx\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]},{\"m\":\"e-36.1:0\",\"p\":\"--ix-sy\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]}],\"k\":\"view\",\"o\":0,\"l\":1}]}]"}>
											<div className="project-card">
												<div className="project-background">
													<img sizes="100vw" srcSet="/assets/images/codon65-works-1-p-500-1af532b764.webp 500w, /assets/images/codon65-works-1-p-800-491e91a3e6.webp 800w, /assets/images/codon65-works-1-p-1080-7425b33221.webp 1080w, /assets/images/codon65-works-1-9c9ac74363.webp 1200w" alt="Codon65" src="/assets/images/codon65-works-1-9c9ac74363.webp" loading="lazy" className="image-full" data-ix="x8beb60e6" data-ixe="e-36.1:0" />
													{" "}
													<div className="overlay transparent" />
												</div>
											</div>
											<h3 className="text-size-large white">Codon65</h3>
										</a>
										{" "}
										<a href="/works/svet-solutions.html" className="project-item w-inline-block" data-ixcont={"[{\"e\":\"e-36.2\",\"l\":[{\"s\":0.5,\"r\":0,\"tr\":[{\"m\":\"e-36.2:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-7],[100,7]]},{\"m\":\"e-36.2:0\",\"p\":\"--ix-sx\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]},{\"m\":\"e-36.2:0\",\"p\":\"--ix-sy\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]}],\"k\":\"view\",\"o\":0,\"l\":1}]}]"}>
											<div className="project-card">
												<div className="project-background">
													<img sizes="100vw" srcSet="/assets/images/svet-works-p-500-4324cfd154.webp 500w, /assets/images/svet-works-0043b50672.webp 908w" alt="Svet Solutions Media website portfolio showcase" src="/assets/images/svet-works-0043b50672.webp" loading="lazy" className="image-full" data-ix="x8beb60e6" data-ixe="e-36.2:0" />
													{" "}
													<div className="overlay transparent" />
												</div>
											</div>
											<h3 className="text-size-large white">Svet Solutions Media</h3>
										</a>
										{" "}
										<a href="/works/outliant.html" className="project-item w-inline-block" data-ixcont={"[{\"e\":\"e-36.3\",\"l\":[{\"s\":0.5,\"r\":0,\"tr\":[{\"m\":\"e-36.3:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-7],[100,7]]},{\"m\":\"e-36.3:0\",\"p\":\"--ix-sx\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]},{\"m\":\"e-36.3:0\",\"p\":\"--ix-sy\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]}],\"k\":\"view\",\"o\":0,\"l\":1}]}]"}>
											<div className="project-card">
												<div className="project-background">
													<img sizes="100vw" srcSet="/assets/images/outliant-works-p-500-946487e26a.webp 500w, /assets/images/outliant-works-p-800-0914874e95.webp 800w, /assets/images/outliant-works-p-1080-2c4c7fec4c.webp 1080w, /assets/images/outliant-works-8839fe3b0a.webp 1447w" alt="Outliant enterprise website development project showcase" src="/assets/images/outliant-works-8839fe3b0a.webp" loading="lazy" className="image-full" data-ix="x8beb60e6" data-ixe="e-36.3:0" />
													{" "}
													<div className="overlay transparent" />
												</div>
											</div>
											<h3 className="text-size-large white">Outliant</h3>
										</a>
										{" "}
										<a href="/works/apollo-theater.html" className="project-item w-inline-block" data-ixcont={"[{\"e\":\"e-36.4\",\"l\":[{\"s\":0.5,\"r\":0,\"tr\":[{\"m\":\"e-36.4:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-7],[100,7]]},{\"m\":\"e-36.4:0\",\"p\":\"--ix-sx\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]},{\"m\":\"e-36.4:0\",\"p\":\"--ix-sy\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]}],\"k\":\"view\",\"o\":0,\"l\":1}]}]"}>
											<div className="project-card">
												<div className="project-background">
													<img sizes="(max-width: 746px) 100vw, 746px" srcSet="/assets/images/apollo-works-1-p-500-3b29cc7e17.webp 500w, /assets/images/apollo-works-1-f909f832f0.webp 746w" alt="Apollo Theater cultural institution website homepage" src="/assets/images/apollo-works-1-f909f832f0.webp" loading="lazy" className="image-full" data-ix="x8beb60e6" data-ixe="e-36.4:0" />
													{" "}
													<div className="overlay transparent" />
												</div>
											</div>
											<h3 className="text-size-large white">Apollo Theater</h3>
										</a>
										{" "}
										<a href="/works/blend-360.html" className="project-item w-inline-block" data-ixcont={"[{\"e\":\"e-36.5\",\"l\":[{\"s\":0.5,\"r\":0,\"tr\":[{\"m\":\"e-36.5:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-7],[100,7]]},{\"m\":\"e-36.5:0\",\"p\":\"--ix-sx\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]},{\"m\":\"e-36.5:0\",\"p\":\"--ix-sy\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]}],\"k\":\"view\",\"o\":0,\"l\":1}]}]"}>
											<div className="project-card">
												<div className="project-background">
													<img loading="lazy" src="/assets/images/blend-works-fc0cad948c.webp" alt="Blend 360 enterprise website homepage" className="image-full" data-ix="x8beb60e6" data-ixe="e-36.5:0" />
													{" "}
													<div className="overlay transparent" />
												</div>
											</div>
											<h3 className="text-size-large white">Blend 360</h3>
										</a>
										{" "}
										<a href="/works/orangetheory-fitness.html" className="project-item w-inline-block" data-ixcont={"[{\"e\":\"e-36.6\",\"l\":[{\"s\":0.5,\"r\":0,\"tr\":[{\"m\":\"e-36.6:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-7],[100,7]]},{\"m\":\"e-36.6:0\",\"p\":\"--ix-sx\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]},{\"m\":\"e-36.6:0\",\"p\":\"--ix-sy\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]}],\"k\":\"view\",\"o\":0,\"l\":1}]}]"}>
											<div className="project-card">
												<div className="project-background">
													<img sizes="100vw" srcSet="/assets/images/otf-works-p-500-c976518ef8.webp 500w, /assets/images/otf-works-p-800-d12602db90.webp 800w, /assets/images/otf-works-915f00e441.webp 1428w" alt="Orangetheory Fitness website homepage showing workout programs" src="/assets/images/otf-works-915f00e441.webp" loading="lazy" className="image-full" data-ix="x8beb60e6" data-ixe="e-36.6:0" />
													{" "}
													<div className="overlay transparent" />
												</div>
											</div>
											<h3 className="text-size-large white">Orangetheory Fitness</h3>
										</a>
										{" "}
										<a href="/works/greenrack-solar.html" className="project-item w-inline-block" data-ixcont={"[{\"e\":\"e-36.7\",\"l\":[{\"s\":0.5,\"r\":0,\"tr\":[{\"m\":\"e-36.7:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-7],[100,7]]},{\"m\":\"e-36.7:0\",\"p\":\"--ix-sx\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]},{\"m\":\"e-36.7:0\",\"p\":\"--ix-sy\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]}],\"k\":\"view\",\"o\":0,\"l\":1}]}]"}>
											<div className="project-card">
												<div className="project-background">
													<img sizes="100vw" srcSet="/assets/images/greenrack-works-1-p-500-980d1f5fb1.webp 500w, /assets/images/greenrack-works-1-p-800-b0ad0403b2.webp 800w, /assets/images/greenrack-works-1-p-1080-e615d31831.webp 1080w, /assets/images/greenrack-works-1-7cbe279dc5.webp 1345w" alt="Greenrack Solar" src="/assets/images/greenrack-works-1-7cbe279dc5.webp" loading="lazy" className="image-full" data-ix="x8beb60e6" data-ixe="e-36.7:0" />
													{" "}
													<div className="overlay transparent" />
												</div>
												<h3 className="text-size-large white">GreenRack Solar</h3>
											</div>
										</a>
										{" "}
										<a href="/works/azagra.html" className="project-item w-inline-block" data-ixcont={"[{\"e\":\"e-36.8\",\"l\":[{\"s\":0.5,\"r\":0,\"tr\":[{\"m\":\"e-36.8:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-7],[100,7]]},{\"m\":\"e-36.8:0\",\"p\":\"--ix-sx\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]},{\"m\":\"e-36.8:0\",\"p\":\"--ix-sy\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]}],\"k\":\"view\",\"o\":0,\"l\":1}]}]"}>
											<div className="project-card">
												<div className="project-background">
													<img sizes="100vw" srcSet="/assets/images/azagra-home-p-500-cea70af328.webp 500w, /assets/images/azagra-home-p-800-05227fc80f.webp 800w, /assets/images/azagra-home-0d52390607.webp 1919w" alt="Azagra Patentes y Marcas" src="/assets/images/azagra-home-0d52390607.webp" loading="lazy" className="image-full" data-ix="x8beb60e6" data-ixe="e-36.8:0" />
													{" "}
													<div className="overlay transparent" />
												</div>
												<h3 className="text-size-large white">Azagra</h3>
											</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section data-stagger="" data-indicator="ABOUT" data-reveal-group="" className="section-about-home">
						<div className="page-padding">
							<div className="container-large">
								<div className="padding-vertical padding-xhuge">
									<div className="heading-paragraph">
										<div className="about-intro">
											<div className="text-size-tiny text-style-allcaps">WORKS</div>
											<h2>
												{"These projects reflect "}
												<strong>long-term engineering partnerships</strong>
												{" and enterprise scaling over several years. My focus is delivering "}
												<strong>top-tier performance and SEO excellence</strong>
												{" through robust architecture."}
											</h2>
										</div>
										{" "}
										<a href="mailto:info@fernandocomet.com?subject=Contact%20from%20website" className="button light-button w-inline-block">
											<div className="button-text">Let's get to work!</div>
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
			<SiteHeader4 path={"/works.html"} />
			<SiteFooter2 path={"/works.html"} />
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
