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
	title: { absolute: "FAQ - Frequently Asked Questions" },
	description: "Find answers to frequently asked questions about Fernando Comet's services. Details on Webflow development, SEO optimization, Performance, and QA for your digital projects.",
	alternates: { canonical: "/faq.html", },
	openGraph: {
		title: "FAQ - Frequently Asked Questions",
		description: "Find answers to frequently asked questions about Fernando Comet's services. Details on Webflow development, SEO optimization, Performance, and QA for your digital projects.",
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
			<script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\":\"https://schema.org\",\"@type\":\"WebPage\",\"name\":\"Services\",\"description\":\"View my Webflow portfolio featuring Enterprise clients including Anytime Fitness, Orangetheory, Apollo Theater, and more. Expert Webflow development projects.\",\"url\":\"/services\",\"mainEntity\":{\"@type\":\"Service\",\"name\":\"Webflow Development Services\",\"description\":\"Scalable, enterprise-grade Webflow solutions through strategic scoping, zero-downtime migrations, and modular architecture. From automating complex workflows to deploying rapid MVPs, building robust digital foundations that eliminate friction and empower agencies and corporations to scale with confidence.\",\"provider\":{\"@type\":\"Person\",\"name\":\"Fernando Comet\"},\"hasOfferCatalog\":{\"@type\":\"OfferCatalog\",\"name\":\"Webflow Development Services\",\"itemListElement\":[{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Enterprise Support\",\"description\":\"Scalability for Enterprise-Grade Workflows. Over three years of experience delivering high-impact solutions for large-scale enterprise projects.\",\"url\":\"/services/webflow-for-enterprise\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Project Scoping\",\"description\":\"Architecture, Strategic Discovery & Alignment: Business-Focused Process. Helping companies navigate the discovery and architectural phase to ensure project success from day one.\",\"url\":\"/services/webflow-project-scoping\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Migrations\",\"description\":\"Zero-Downtime Transitions: Safe Platform Migration. Successfully led 5+ large-scale WordPress-to-Webflow migrations, ensuring data integrity and seamless transitions.\",\"url\":\"/services/webflow-migrations\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Agencies Support\",\"description\":\"Accelerated Production Pipeline. Over 15 years of experience partnering with Creative, Media, and Tech agencies to streamline production and scale output.\",\"url\":\"/services/webflow-for-agencies\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Figma to Webflow\",\"description\":\"Transform Figma designs into fully responsive, launch-ready Webflow websites at unmatched speed. Delivering pixel-perfect implementation with clean, lightweight architectures.\",\"url\":\"/services/figma-to-webflow\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Technical SEO\",\"description\":\"Foundational Technical SEO: Semantic HTML & Metadata. Optimizing site architecture for the AI era: combining semantic HTML and robust metadata to excel in both traditional SEO and AEO for LLMs.\",\"url\":\"/services/webflow-seo\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Site Performance\",\"description\":\"Instant-Loading Websites: Optimized for Real-World Performance. Advanced optimization focused on Core Web Vitals and efficient asset delivery to ensure lightning-fast load times across all devices.\",\"url\":\"/services/webflow-performance\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Accessibility\",\"description\":\"WCAG 2.1 AA Compliance: Inclusive Design. Expert validation and implementation across WCAG 2.1 levels (A, AA, AAA) and Section 508 standards to ensure digital equity and legal compliance.\",\"url\":\"/services/webflow-accessibility\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Animation\",\"description\":\"Meaningful Visual Storytelling: Motion as a Narrative Tool. Specializing in high-performance animations using GSAP to create engaging, purposeful motion that guides users and strengthens brand storytelling.\",\"url\":\"/services/webflow-animation\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"CMS Consultancy\",\"description\":\"Dynamic & Scalable CMS Architectures. Scalable data modeling designed around Webflow's technical constraints.\",\"url\":\"/services/webflow-cms\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Component Libraries\",\"description\":\"Modular & Scalable System Foundation. Developing modular UI kits with a focus on clean architecture and reusability, ensuring a seamless workflow from design systems to high-performance Webflow builds.\",\"url\":\"/services/webflow-design-systems-and-component-libraries\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Site Maintenance\",\"description\":\"Dedicated Post-Launch Support. Ongoing technical partnership to ensure your site remains secure, updated, and high-performing long after the initial launch.\",\"url\":\"/services/webflow-maintenance-and-continuous-support\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Landing Pages\",\"description\":\"Measurable Conversion Design. High-velocity development for marketing teams. Specializing in simple, robust architectures that ensure maximum load speed and a frictionless path to conversion.\",\"url\":\"/services/webflow-cro-and-landing-page-optimization\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Automations\",\"description\":\"Workflow Friction Reduction: Webflow Automation Flows. End-to-end workflow optimization. From lead routing to automated content updates, implementing reliable automation logic to ensure a frictionless digital ecosystem.\",\"url\":\"/services/webflow-automation\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Start-Ups\",\"description\":\"Rapid MVP Deployment: Launch your Minimum Viable Product (MVP) in weeks, not months. From concept to launch in record time. Providing rapid deployment of scalable MVPs, bypassing technical delays to get your product in front of users and investors.\",\"url\":\"/services/webflow-for-startups\"}},{\"@type\":\"Offer\",\"itemOffered\":{\"@type\":\"Service\",\"name\":\"Custom Code\",\"description\":\"Beyond Native Capabilities. Breaking platform boundaries with expert custom coding. Bridging the gap between native no-code features and enterprise-grade requirements through scalable, hand-coded enhancements.\",\"url\":\"/services/webflow-integrations-and-custom-code\"}}]}}}" }} />
			<div className="css w-embed" />
			<SiteHeader2 />
			<div className="page_wrap">
				<div className="u-position-fixed">
					<div className="w-embed" />
				</div>
				<SharedSection3 />
				<SiteHeader path={"/faq.html"} />
				<main className="general-wrapper">
					<section id="top-of-page" data-indicator="FAQ" data-reveal-group="" data-stagger="" className="section-hero-home">
						<div className="home-hero-component">
							<div className="page-padding">
								<div className="home-hero-top">
									<div className="container-large">
										<div className="home-hero-content">
											<div className="home-hero-intro no-max">
												<div className="margin-bottom margin-large">
													<h1 className="heading-xlarge">
														FAQ
														<br />
														Frequently Asked Questions
													</h1>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section data-stagger="" data-indicator="WEBFLOW" data-reveal-group="" className="section-about-home">
						<div className="page-padding">
							<div className="container-large">
								<div className="padding-vertical padding-xhuge">
									<div className="heading-paragraph">
										<div className="about-intro">
											<div className="text-size-tiny caps">FAQ</div>
											<h2>
												{"Welcome to the FAQ section. Here, I’ve gathered the most common questions regarding my process as a "}
												<strong>Webflow Developer and SEO specialist</strong>
												. Whether you are curious about my technical workflow, performance optimization standards, or how I handle QA, you’ll find the answers right here.
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section data-stagger="" data-indicator="FAQ" datta-reveal-group="" className="section-faq">
						<div className="page-padding">
							<div className="container-large">
								<div className="padding-vertical padding-xhuge">
									<div className="slider-main_top-wrapper">
										<h2 className="u-text-style-h2">FAQ</h2>
									</div>
									<div className="faq-list">
										<div className="faq-item" data-ixclick="e-31.0/e-30.0 e-35.0/e-34.0 e-67.0/e-69.0">
											<div className="faq-top" data-ixt="e-33" data-ixcont={"[{\"e\":\"e-28.0\",\"l\":[{\"s\":0.85,\"r\":0,\"tr\":[{\"m\":\"e-28.0:0\",\"p\":\"--ix-tx\",\"u\":\"%\",\"v\":[[0,-350],[100,100]]},{\"m\":\"e-28.0:0\",\"p\":\"--ix-rz\",\"u\":\"deg\",\"v\":[[0,-12],[100,7]]},{\"m\":\"e-28.0:1\",\"p\":\"--ix-tx\",\"u\":\"%\",\"v\":[[0,-70],[100,20]]}],\"k\":\"mouse\",\"a\":\"x\",\"b\":\"element\",\"rest\":0.5},{\"s\":0.85,\"r\":0,\"tr\":[{\"m\":\"e-28.0:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-25],[100,25]]}],\"k\":\"mouse\",\"a\":\"y\",\"b\":\"element\",\"rest\":0.5}],\"q\":\"(min-width: 992px)\"}]"}>
												<div className="faq-title">
													<div className="faq-single-title">
														<h1 className="heading-medium">Who are you?</h1>
													</div>
												</div>
												<div className="faq-action-wrapper" data-ix="xade8ef5a" data-ixe="e-28.0:0">
													<div className="faq-action" data-ix="x97492fce" data-ixe="e-35.0 e-34.0">
														<div className="tab-lottie" data-src="/assets/files/64537a4f7e7a5c854fcb25c1-dropdown-lottie-6a7513842c.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-duration="0" data-lottie="" data-lottie-ix="on" data-ix="x9def3e85" data-ixe="e-28.0:1 e-35.0 e-34.0 e-67.0 e-69.0" dangerouslySetInnerHTML={{ __html: "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 740 740\" width=\"740\" height=\"740\" preserveAspectRatio=\"xMidYMid meet\" style=\"width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;\"><defs><clipPath id=\"__lottie_element_7\"><rect width=\"740\" height=\"740\" x=\"0\" y=\"0\"></rect></clipPath></defs><g clip-path=\"url(#__lottie_element_7)\"><g transform=\"matrix(1,0,0,1,370,370)\" opacity=\"1\" style=\"display: block;\"><g opacity=\"1\" transform=\"matrix(1,0,0,1,0,0)\"><path stroke-linecap=\"round\" stroke-linejoin=\"miter\" fill-opacity=\"0\" stroke-miterlimit=\"10\" stroke=\"rgb(255,255,255)\" stroke-opacity=\"1\" stroke-width=\"60\" d=\" M324.5,0 C324.5,0 -324.5,0 -324.5,0\"></path></g></g><g transform=\"matrix(1,0,0,1,370,370)\" opacity=\"1\" style=\"display: block;\"><g opacity=\"1\" transform=\"matrix(1,0,0,1,0,0)\"><path stroke-linecap=\"round\" stroke-linejoin=\"miter\" fill-opacity=\"0\" stroke-miterlimit=\"10\" stroke=\"rgb(255,255,255)\" stroke-opacity=\"1\" stroke-width=\"60\" d=\" M0,-324.5 C0,-324.5 0,324.5 0,324.5\"></path></g></g></g></svg>" }} />
													</div>
												</div>
											</div>
											<div className="faq-bottom" data-ix="xed2c932f" data-ixe="e-31.0 e-30.0">
												<div className="faq-bottom-content" data-ix="xd1dc5177" data-ixe="e-31.0 e-30.0">
													<p id="w-node-fbfbdfa3-3a46-2494-9f70-31b4a9e384c4-a9e384b1" className="text-size-regular">
														I am an independent freelance contractor, working with web builders and vibe code. I am a multidisciplinar profile coming from Research, UX, Design and Development. I have more than 15 years of experience working with Digital, Media and Tech Agencies.
													</p>
												</div>
											</div>
										</div>
										<div className="faq-item" data-ixclick="e-31.1/e-30.1 e-35.1/e-34.1 e-67.1/e-69.1">
											<div className="faq-top" data-ixt="e-33" data-ixcont={"[{\"e\":\"e-28.1\",\"l\":[{\"s\":0.85,\"r\":0,\"tr\":[{\"m\":\"e-28.1:0\",\"p\":\"--ix-tx\",\"u\":\"%\",\"v\":[[0,-350],[100,100]]},{\"m\":\"e-28.1:0\",\"p\":\"--ix-rz\",\"u\":\"deg\",\"v\":[[0,-12],[100,7]]},{\"m\":\"e-28.1:1\",\"p\":\"--ix-tx\",\"u\":\"%\",\"v\":[[0,-70],[100,20]]}],\"k\":\"mouse\",\"a\":\"x\",\"b\":\"element\",\"rest\":0.5},{\"s\":0.85,\"r\":0,\"tr\":[{\"m\":\"e-28.1:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-25],[100,25]]}],\"k\":\"mouse\",\"a\":\"y\",\"b\":\"element\",\"rest\":0.5}],\"q\":\"(min-width: 992px)\"}]"}>
												<div className="faq-title">
													<div className="faq-single-title">
														<h1 className="heading-medium">What is your core service?</h1>
													</div>
												</div>
												<div className="faq-action-wrapper" data-ix="xade8ef5a" data-ixe="e-28.1:0">
													<div className="faq-action" data-ix="x97492fce" data-ixe="e-35.1 e-34.1">
														<div className="tab-lottie" data-src="/assets/files/64537a4f7e7a5c854fcb25c1-dropdown-lottie-6a7513842c.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-duration="0" data-lottie="" data-lottie-ix="on" data-ix="x9def3e85" data-ixe="e-28.1:1 e-35.1 e-34.1 e-67.1 e-69.1" dangerouslySetInnerHTML={{ __html: "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 740 740\" width=\"740\" height=\"740\" preserveAspectRatio=\"xMidYMid meet\" style=\"width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;\"><defs><clipPath id=\"__lottie_element_14\"><rect width=\"740\" height=\"740\" x=\"0\" y=\"0\"></rect></clipPath></defs><g clip-path=\"url(#__lottie_element_14)\"><g transform=\"matrix(1,0,0,1,370,370)\" opacity=\"1\" style=\"display: block;\"><g opacity=\"1\" transform=\"matrix(1,0,0,1,0,0)\"><path stroke-linecap=\"round\" stroke-linejoin=\"miter\" fill-opacity=\"0\" stroke-miterlimit=\"10\" stroke=\"rgb(255,255,255)\" stroke-opacity=\"1\" stroke-width=\"60\" d=\" M324.5,0 C324.5,0 -324.5,0 -324.5,0\"></path></g></g><g transform=\"matrix(1,0,0,1,370,370)\" opacity=\"1\" style=\"display: block;\"><g opacity=\"1\" transform=\"matrix(1,0,0,1,0,0)\"><path stroke-linecap=\"round\" stroke-linejoin=\"miter\" fill-opacity=\"0\" stroke-miterlimit=\"10\" stroke=\"rgb(255,255,255)\" stroke-opacity=\"1\" stroke-width=\"60\" d=\" M0,-324.5 C0,-324.5 0,324.5 0,324.5\"></path></g></g></g></svg>" }} />
													</div>
												</div>
											</div>
											<div className="faq-bottom" data-ix="xed2c932f" data-ixe="e-31.1 e-30.1">
												<div className="faq-bottom-content" data-ix="xd1dc5177" data-ixe="e-31.1 e-30.1">
													<p id="w-node-fbfbdfa3-3a46-2494-9f70-31b4a9e384d1-a9e384b1" className="text-size-regular">
														My core service as Developer is crafting websites with precision, resolving technical challenges with finesse. This expertise is indispensable for businesses and individuals seeking seamless online platforms. I assist them in achieving unparalleled website functionality, aesthetic appeal, and efficient problem-solving. My technical background enables me to innovate and overcome hurdles, distinguishing my approach from competitors.
													</p>
												</div>
											</div>
										</div>
										<div className="faq-item" data-ixclick="e-31.2/e-30.2 e-35.2/e-34.2 e-67.2/e-69.2">
											<div className="faq-top" data-ixt="e-33" data-ixcont={"[{\"e\":\"e-28.2\",\"l\":[{\"s\":0.85,\"r\":0,\"tr\":[{\"m\":\"e-28.2:0\",\"p\":\"--ix-tx\",\"u\":\"%\",\"v\":[[0,-350],[100,100]]},{\"m\":\"e-28.2:0\",\"p\":\"--ix-rz\",\"u\":\"deg\",\"v\":[[0,-12],[100,7]]},{\"m\":\"e-28.2:1\",\"p\":\"--ix-tx\",\"u\":\"%\",\"v\":[[0,-70],[100,20]]}],\"k\":\"mouse\",\"a\":\"x\",\"b\":\"element\",\"rest\":0.5},{\"s\":0.85,\"r\":0,\"tr\":[{\"m\":\"e-28.2:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-25],[100,25]]}],\"k\":\"mouse\",\"a\":\"y\",\"b\":\"element\",\"rest\":0.5}],\"q\":\"(min-width: 992px)\"}]"}>
												<div className="faq-title">
													<div className="faq-single-title">
														<h1 className="heading-medium">What do you need to know about a project?</h1>
													</div>
												</div>
												<div className="faq-action-wrapper" data-ix="xade8ef5a" data-ixe="e-28.2:0">
													<div className="faq-action" data-ix="x97492fce" data-ixe="e-35.2 e-34.2">
														<div className="tab-lottie" data-src="/assets/files/64537a4f7e7a5c854fcb25c1-dropdown-lottie-6a7513842c.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-duration="0" data-lottie="" data-lottie-ix="on" data-ix="x9def3e85" data-ixe="e-28.2:1 e-35.2 e-34.2 e-67.2 e-69.2" dangerouslySetInnerHTML={{ __html: "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 740 740\" width=\"740\" height=\"740\" preserveAspectRatio=\"xMidYMid meet\" style=\"width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;\"><defs><clipPath id=\"__lottie_element_21\"><rect width=\"740\" height=\"740\" x=\"0\" y=\"0\"></rect></clipPath></defs><g clip-path=\"url(#__lottie_element_21)\"><g transform=\"matrix(1,0,0,1,370,370)\" opacity=\"1\" style=\"display: block;\"><g opacity=\"1\" transform=\"matrix(1,0,0,1,0,0)\"><path stroke-linecap=\"round\" stroke-linejoin=\"miter\" fill-opacity=\"0\" stroke-miterlimit=\"10\" stroke=\"rgb(255,255,255)\" stroke-opacity=\"1\" stroke-width=\"60\" d=\" M324.5,0 C324.5,0 -324.5,0 -324.5,0\"></path></g></g><g transform=\"matrix(1,0,0,1,370,370)\" opacity=\"1\" style=\"display: block;\"><g opacity=\"1\" transform=\"matrix(1,0,0,1,0,0)\"><path stroke-linecap=\"round\" stroke-linejoin=\"miter\" fill-opacity=\"0\" stroke-miterlimit=\"10\" stroke=\"rgb(255,255,255)\" stroke-opacity=\"1\" stroke-width=\"60\" d=\" M0,-324.5 C0,-324.5 0,324.5 0,324.5\"></path></g></g></g></svg>" }} />
													</div>
												</div>
											</div>
											<div className="faq-bottom" data-ix="xed2c932f" data-ixe="e-31.2 e-30.2">
												<div className="faq-bottom-content" data-ix="xd1dc5177" data-ixe="e-31.2 e-30.2">
													<p id="w-node-fbfbdfa3-3a46-2494-9f70-31b4a9e384de-a9e384b1" className="text-size-regular">
														For any site I would like to know:
														<br />
														- Branding assets: Do you have a Brand? Where can I take a look at it? I'd like to know more about it
														<br />
														- Design: I expect to receive a Figma file with both Desktop and Mobile Designs. Desktop should be 1440px (the standard). Mobile around 370px.
														<br />
														- Number of pages
														<br />
														- How many Languages do you plan to use on the site?
														<br />
														- Should the site have CMS? Do you have an approach or ar you starting from Scratch?
														<br />
														- Any other Integration needed: ie. forms, Analytics, etc.
														<br />
														{"- SEO & Performance requests"}
														<br />
														- Animation requests
														<br />
														- Timing, Roadmap and Project Schedule
													</p>
												</div>
											</div>
										</div>
										<div className="faq-item" data-ixclick="e-31.3/e-30.3 e-35.3/e-34.3 e-67.3/e-69.3">
											<div className="faq-top" data-ixt="e-33" data-ixcont={"[{\"e\":\"e-28.3\",\"l\":[{\"s\":0.85,\"r\":0,\"tr\":[{\"m\":\"e-28.3:0\",\"p\":\"--ix-tx\",\"u\":\"%\",\"v\":[[0,-350],[100,100]]},{\"m\":\"e-28.3:0\",\"p\":\"--ix-rz\",\"u\":\"deg\",\"v\":[[0,-12],[100,7]]},{\"m\":\"e-28.3:1\",\"p\":\"--ix-tx\",\"u\":\"%\",\"v\":[[0,-70],[100,20]]}],\"k\":\"mouse\",\"a\":\"x\",\"b\":\"element\",\"rest\":0.5},{\"s\":0.85,\"r\":0,\"tr\":[{\"m\":\"e-28.3:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-25],[100,25]]}],\"k\":\"mouse\",\"a\":\"y\",\"b\":\"element\",\"rest\":0.5}],\"q\":\"(min-width: 992px)\"}]"}>
												<div className="faq-title">
													<div className="faq-single-title">
														<h1 className="heading-medium">What is your process and approach to projects?</h1>
													</div>
												</div>
												<div className="faq-action-wrapper" data-ix="xade8ef5a" data-ixe="e-28.3:0">
													<div className="faq-action" data-ix="x97492fce" data-ixe="e-35.3 e-34.3">
														<div className="tab-lottie" data-src="/assets/files/64537a4f7e7a5c854fcb25c1-dropdown-lottie-6a7513842c.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-duration="0" data-lottie="" data-lottie-ix="on" data-ix="x9def3e85" data-ixe="e-28.3:1 e-35.3 e-34.3 e-67.3 e-69.3" dangerouslySetInnerHTML={{ __html: "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 740 740\" width=\"740\" height=\"740\" preserveAspectRatio=\"xMidYMid meet\" style=\"width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;\"><defs><clipPath id=\"__lottie_element_28\"><rect width=\"740\" height=\"740\" x=\"0\" y=\"0\"></rect></clipPath></defs><g clip-path=\"url(#__lottie_element_28)\"><g transform=\"matrix(1,0,0,1,370,370)\" opacity=\"1\" style=\"display: block;\"><g opacity=\"1\" transform=\"matrix(1,0,0,1,0,0)\"><path stroke-linecap=\"round\" stroke-linejoin=\"miter\" fill-opacity=\"0\" stroke-miterlimit=\"10\" stroke=\"rgb(255,255,255)\" stroke-opacity=\"1\" stroke-width=\"60\" d=\" M324.5,0 C324.5,0 -324.5,0 -324.5,0\"></path></g></g><g transform=\"matrix(1,0,0,1,370,370)\" opacity=\"1\" style=\"display: block;\"><g opacity=\"1\" transform=\"matrix(1,0,0,1,0,0)\"><path stroke-linecap=\"round\" stroke-linejoin=\"miter\" fill-opacity=\"0\" stroke-miterlimit=\"10\" stroke=\"rgb(255,255,255)\" stroke-opacity=\"1\" stroke-width=\"60\" d=\" M0,-324.5 C0,-324.5 0,324.5 0,324.5\"></path></g></g></g></svg>" }} />
													</div>
												</div>
											</div>
											<div className="faq-bottom" data-ix="xed2c932f" data-ixe="e-31.3 e-30.3">
												<div className="faq-bottom-content" data-ix="xd1dc5177" data-ixe="e-31.3 e-30.3">
													<p id="w-node-fbfbdfa3-3a46-2494-9f70-31b4a9e384fd-a9e384b1" className="text-size-regular">
														Once the project is scoped, first I like to know about the Brand. Then I usually make three meetings:
														<br />
														- Fist with Design team, we made an overview of the project and talk about layouts, interactions, dynamic pages and any other issues
														<br />
														- Second is with QA team
														<br />
														- Last one is with the Marketing team
														<br />
														- If there is a Development team, I would also meet them
														<br />
														‍
														<br />
														Once I have met the team I get into the project:
														<br />
														- Get current state of the project
														<br />
														- Work on project settings
														<br />
														- Map the CMS, work together for SEO
														<br />
														{"- Get all assets and resources and optimize them "}
														<br />
														- Define a Style Guide and a Framework
														<br />
														- Layouts building: First I go with main components such as NavBar and Footer, then I move to layouts. After that, work on Integrations and Interactions.
														<br />
														- Before launching I QA everything
													</p>
												</div>
											</div>
										</div>
										<div className="faq-item" data-ixclick="e-31.4/e-30.4 e-35.4/e-34.4 e-67.4/e-69.4">
											<div className="faq-top" data-ixt="e-33" data-ixcont={"[{\"e\":\"e-28.4\",\"l\":[{\"s\":0.85,\"r\":0,\"tr\":[{\"m\":\"e-28.4:0\",\"p\":\"--ix-tx\",\"u\":\"%\",\"v\":[[0,-350],[100,100]]},{\"m\":\"e-28.4:0\",\"p\":\"--ix-rz\",\"u\":\"deg\",\"v\":[[0,-12],[100,7]]},{\"m\":\"e-28.4:1\",\"p\":\"--ix-tx\",\"u\":\"%\",\"v\":[[0,-70],[100,20]]}],\"k\":\"mouse\",\"a\":\"x\",\"b\":\"element\",\"rest\":0.5},{\"s\":0.85,\"r\":0,\"tr\":[{\"m\":\"e-28.4:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-25],[100,25]]}],\"k\":\"mouse\",\"a\":\"y\",\"b\":\"element\",\"rest\":0.5}],\"q\":\"(min-width: 992px)\"}]"}>
												<div className="faq-title">
													<div className="faq-single-title">
														<h1 className="heading-medium">What is your Stack? What libraries and resources do you use?</h1>
													</div>
												</div>
												<div className="faq-action-wrapper" data-ix="xade8ef5a" data-ixe="e-28.4:0">
													<div className="faq-action" data-ix="x97492fce" data-ixe="e-35.4 e-34.4">
														<div className="tab-lottie" data-src="/assets/files/64537a4f7e7a5c854fcb25c1-dropdown-lottie-6a7513842c.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-duration="0" data-lottie="" data-lottie-ix="on" data-ix="x9def3e85" data-ixe="e-28.4:1 e-35.4 e-34.4 e-67.4 e-69.4" dangerouslySetInnerHTML={{ __html: "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 740 740\" width=\"740\" height=\"740\" preserveAspectRatio=\"xMidYMid meet\" style=\"width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;\"><defs><clipPath id=\"__lottie_element_35\"><rect width=\"740\" height=\"740\" x=\"0\" y=\"0\"></rect></clipPath></defs><g clip-path=\"url(#__lottie_element_35)\"><g transform=\"matrix(1,0,0,1,370,370)\" opacity=\"1\" style=\"display: block;\"><g opacity=\"1\" transform=\"matrix(1,0,0,1,0,0)\"><path stroke-linecap=\"round\" stroke-linejoin=\"miter\" fill-opacity=\"0\" stroke-miterlimit=\"10\" stroke=\"rgb(255,255,255)\" stroke-opacity=\"1\" stroke-width=\"60\" d=\" M324.5,0 C324.5,0 -324.5,0 -324.5,0\"></path></g></g><g transform=\"matrix(1,0,0,1,370,370)\" opacity=\"1\" style=\"display: block;\"><g opacity=\"1\" transform=\"matrix(1,0,0,1,0,0)\"><path stroke-linecap=\"round\" stroke-linejoin=\"miter\" fill-opacity=\"0\" stroke-miterlimit=\"10\" stroke=\"rgb(255,255,255)\" stroke-opacity=\"1\" stroke-width=\"60\" d=\" M0,-324.5 C0,-324.5 0,324.5 0,324.5\"></path></g></g></g></svg>" }} />
													</div>
												</div>
											</div>
											<div className="faq-bottom" data-ix="xed2c932f" data-ixe="e-31.4 e-30.4">
												<div className="faq-bottom-content" data-ix="xd1dc5177" data-ixe="e-31.4 e-30.4">
													<p id="w-node-fbfbdfa3-3a46-2494-9f70-31b4a9e38524-a9e384b1" className="text-size-regular">
														I work with Web builders, mainly with Framer and Webflow where as Expert and can work with any Framework. I have more than four years working for Enterprise and Localization
														<br />
														I use libraries as GSAP, Anime, SwiperJS or similar for animation
														<br />
														{"I am also into Lovable, Cursor, Replit and similar AI approachs to create\u00a0\u00a0websites and Apps."}
													</p>
												</div>
											</div>
										</div>
										<div className="faq-item" data-ixclick="e-31.5/e-30.5 e-35.5/e-34.5 e-67.5/e-69.5">
											<div className="faq-top" data-ixt="e-33" data-ixcont={"[{\"e\":\"e-28.5\",\"l\":[{\"s\":0.85,\"r\":0,\"tr\":[{\"m\":\"e-28.5:0\",\"p\":\"--ix-tx\",\"u\":\"%\",\"v\":[[0,-350],[100,100]]},{\"m\":\"e-28.5:0\",\"p\":\"--ix-rz\",\"u\":\"deg\",\"v\":[[0,-12],[100,7]]},{\"m\":\"e-28.5:1\",\"p\":\"--ix-tx\",\"u\":\"%\",\"v\":[[0,-70],[100,20]]}],\"k\":\"mouse\",\"a\":\"x\",\"b\":\"element\",\"rest\":0.5},{\"s\":0.85,\"r\":0,\"tr\":[{\"m\":\"e-28.5:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-25],[100,25]]}],\"k\":\"mouse\",\"a\":\"y\",\"b\":\"element\",\"rest\":0.5}],\"q\":\"(min-width: 992px)\"}]"}>
												<div className="faq-title">
													<div className="faq-single-title">
														<h1 className="heading-medium">What about budgets?</h1>
													</div>
												</div>
												<div className="faq-action-wrapper" data-ix="xade8ef5a" data-ixe="e-28.5:0">
													<div className="faq-action" data-ix="x97492fce" data-ixe="e-35.5 e-34.5">
														<div className="tab-lottie" data-src="/assets/files/64537a4f7e7a5c854fcb25c1-dropdown-lottie-6a7513842c.json" data-loop="0" data-direction="1" data-autoplay="0" data-renderer="svg" data-duration="0" data-lottie="" data-lottie-ix="on" data-ix="x9def3e85" data-ixe="e-28.5:1 e-35.5 e-34.5 e-67.5 e-69.5" dangerouslySetInnerHTML={{ __html: "<svg xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" viewBox=\"0 0 740 740\" width=\"740\" height=\"740\" preserveAspectRatio=\"xMidYMid meet\" style=\"width: 100%; height: 100%; transform: translate3d(0px, 0px, 0px); content-visibility: visible;\"><defs><clipPath id=\"__lottie_element_42\"><rect width=\"740\" height=\"740\" x=\"0\" y=\"0\"></rect></clipPath></defs><g clip-path=\"url(#__lottie_element_42)\"><g transform=\"matrix(1,0,0,1,370,370)\" opacity=\"1\" style=\"display: block;\"><g opacity=\"1\" transform=\"matrix(1,0,0,1,0,0)\"><path stroke-linecap=\"round\" stroke-linejoin=\"miter\" fill-opacity=\"0\" stroke-miterlimit=\"10\" stroke=\"rgb(255,255,255)\" stroke-opacity=\"1\" stroke-width=\"60\" d=\" M324.5,0 C324.5,0 -324.5,0 -324.5,0\"></path></g></g><g transform=\"matrix(1,0,0,1,370,370)\" opacity=\"1\" style=\"display: block;\"><g opacity=\"1\" transform=\"matrix(1,0,0,1,0,0)\"><path stroke-linecap=\"round\" stroke-linejoin=\"miter\" fill-opacity=\"0\" stroke-miterlimit=\"10\" stroke=\"rgb(255,255,255)\" stroke-opacity=\"1\" stroke-width=\"60\" d=\" M0,-324.5 C0,-324.5 0,324.5 0,324.5\"></path></g></g></g></svg>" }} />
													</div>
												</div>
											</div>
											<div className="faq-bottom" data-ix="xed2c932f" data-ixe="e-31.5 e-30.5">
												<div className="faq-bottom-content" data-ix="xd1dc5177" data-ixe="e-31.5 e-30.5">
													<p id="w-node-fbfbdfa3-3a46-2494-9f70-31b4a9e38535-a9e384b1" className="text-size-regular">
														I work always under contract. I can work per hour, per daily rate, per monthly fee or subscription, and per project.
														<br />
														Best chance is always working per hour.
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<div data-indicator="ABOUT" className="marquees">
						<div className="marquee">
							<div className="marquee-content scroll reverse">
								<div className="looping-text">
									Technology is complex; your business shouldn't be. I help you navigate the tech landscape to implement the best solutions for your team.
								</div>
							</div>
							<div className="marquee-content scroll reverse">
								<div className="looping-text">
									Technology is complex; your business shouldn't be. I help you navigate the tech landscape to implement the best solutions for your team.
								</div>
							</div>
						</div>
						<div className="marquee">
							<div className="marquee-content scroll">
								<div className="looping-text">
									Design Technologist — Scaling businesses through smarter tech choices — From prototype to production
								</div>
							</div>
							<div className="marquee-content scroll">
								<div className="looping-text">
									Design Technologist — Scaling businesses through smarter tech choices — From prototype to production
								</div>
							</div>
						</div>
						<div className="marquee">
							<div className="marquee-content scroll reverse">
								<div className="looping-text">
									Bridging the gap between design vision and technical reality. I help businesses choose, build, and scale with the right stack
								</div>
							</div>
							<div className="marquee-content scroll reverse">
								<div className="looping-text">
									Bridging the gap between design vision and technical reality. I help businesses choose, build, and scale with the right stack
								</div>
							</div>
						</div>
						<div className="marquee">
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
						</div>
					</div>
					<section data-stagger="" data-indicator="GOAL" data-reveal-group="" className="section-about-home">
						<div className="page-padding">
							<div className="container-large">
								<div className="padding-vertical padding-xhuge">
									<div className="heading-paragraph">
										<div className="about-intro">
											<div className="text-size-tiny caps">FAQ</div>
											<h2>
												My goal is to provide full transparency into how I build high-performance digital experiences. If you have a specific query that isn't covered below, feel free to reach out directly—I’m always happy to discuss how we can bring your next project to life."
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section data-indicator="I AM..." className="section-iam">
						<div className="padding-vertical padding-xhuge">
							<div id="w-node-_189cc0d6-f9c4-13d3-60f8-4f6f79c0ef82-79c0ef80" className="footer-action-component">
								<div className="name-title">
									<div className="footer-action-faq">I am a Webflow</div>
								</div>
								<div id="w-node-_189cc0d6-f9c4-13d3-60f8-4f6f79c0ef86-79c0ef80" className="action-description">
									<p className="text-size-regular-5 text-color-white">
										I am also working in other technologies such as Framer, Shopify and into Vibe Coding Wars (on the Rebel side)
									</p>
								</div>
								<div id="w-node-_189cc0d6-f9c4-13d3-60f8-4f6f79c0ef90-79c0ef80" className="name-block">
									<div className="name-list-wrapper">
										<div className="name-list">
											<div className="name-item">
												<div>Developer</div>
											</div>
											<div className="name-item">
												<div>Engineer</div>
											</div>
											<div className="name-item">
												<div>Lead</div>
											</div>
											<div className="name-item">
												<div>Expert</div>
											</div>
											<div className="name-item">
												<div>Teacher</div>
											</div>
											<div className="name-item">
												<div>ACE</div>
											</div>
											<div className="name-item">
												<div>Consultant</div>
											</div>
											<div className="name-item">
												<div>Leader</div>
											</div>
											<div className="name-item">
												<div>Enterpriser</div>
											</div>
											<div className="name-item">
												<div>Partner</div>
											</div>
										</div>
										<div className="name-list">
											<div className="name-item">
												<div>Developer</div>
											</div>
											<div className="name-item">
												<div>Engineer</div>
											</div>
											<div className="name-item">
												<div>Lead</div>
											</div>
											<div className="name-item">
												<div>Expert</div>
											</div>
											<div className="name-item">
												<div>Teacher</div>
											</div>
											<div className="name-item">
												<div>ACE</div>
											</div>
											<div className="name-item">
												<div>Consultant</div>
											</div>
											<div className="name-item">
												<div>Leader</div>
											</div>
											<div className="name-item">
												<div>Enterpriser</div>
											</div>
											<div className="name-item">
												<div>Partner</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section data-stagger="" data-indicator="TESTIMONIALS" data-reveal-group="" className="section-testimonials">
						<div className="page-padding">
							<div className="container-large">
								<div className="padding-vertical padding-xhuge">
									<h2 className="footer-action-heading">Testimonials</h2>
									<div className="testimonial-slider-wrapper">
										<div data-delay="4000" data-animation="slide" className="slider-testimonial w-slider" data-autoplay="false" data-hide-arrows="false" data-disable-swipe="false" data-autoplay-limit="0" data-nav-spacing="3" data-duration="500" data-infinite="true" data-slider="" data-slider-ease="ease">
											<div className="testimonials-mask w-slider-mask" data-slider-mask="" dangerouslySetInnerHTML={{ __html: "<div class=\"testimonial-slide-item w-slide\" aria-label=\"1 of 5\" role=\"group\" data-slide>\n                      <div class=\"testimonial-slide\">\n                        <div class=\"testimonial-text\">\n                          <div>I have been lucky enough to work with Fernando on multiple occasions and they have all been a success. He understands very well the needs of the client and adapts quickly to them. He puts a lot of effort into getting the best out of each project, be it Front, Back, Design or photo. He is a 100% trustworthy supplier</div>\n                        </div>\n                        <div class=\"testimonial-credit\">\n                          <div class=\"testimonial-avatar\"><img loading=\"lazy\" src=\"/assets/images/kolision-cc01fd5ee3.webp\" alt=\"Gabriel Guerrero\" sizes=\"(max-width: 512px) 100vw, 512px\" srcset=\"/assets/images/kolision-p-500-fffab74aeb.webp 500w, /assets/images/kolision-cc01fd5ee3.webp 512w\" class=\"image-full\"></div>\n                          <div>\n                            <div class=\"text-size-regular text-weight-medium\">Gabriel Guerrero</div>\n                            <a href=\"https://kolision.com/\" target=\"_blank\" class=\"w-inline-block\">\n                              <div class=\"text-size-small\">https://kolision.com/</div>\n                            </a>\n                          </div>\n                        </div>\n                      </div>\n                    </div><div class=\"testimonial-slide-item w-slide\" aria-label=\"2 of 5\" role=\"group\" aria-hidden=\"true\" data-slide>\n                      <div class=\"testimonial-slide\" aria-hidden=\"true\">\n                        <div class=\"testimonial-text\" aria-hidden=\"true\">\n                          <div aria-hidden=\"true\">Fernando is a dedicated professional . He is forward-thinking in terms of innovation, collaboration, and creativity. Fernando's eagerness and commitment are both inspiring and motivating for others. Effective team player who is results-driven, experienced, and efficient.</div>\n                        </div>\n                        <div class=\"testimonial-credit\" aria-hidden=\"true\">\n                          <div class=\"testimonial-avatar\" aria-hidden=\"true\"><img loading=\"lazy\" src=\"/assets/images/andy-kaiser-7fcc8c4dc3.webp\" alt=\"Andy Kaiser\" class=\"image-full\" aria-hidden=\"true\"></div>\n                          <div aria-hidden=\"true\">\n                            <div class=\"text-size-regular text-weight-medium\" aria-hidden=\"true\">Andy Kaiser</div>\n                            <div class=\"text-size-small\" aria-hidden=\"true\">Ninetailed</div>\n                          </div>\n                        </div>\n                      </div>\n                    </div><div class=\"testimonial-slide-item w-slide\" aria-label=\"3 of 5\" role=\"group\" aria-hidden=\"true\" data-slide>\n                      <div class=\"testimonial-slide\" aria-hidden=\"true\">\n                        <div class=\"testimonial-text\" aria-hidden=\"true\">\n                          <div aria-hidden=\"true\">Fernando is a dynamic and dedicated professional, an innovator who pioneers new technologies and uses them until he completely masters them . His expertise of different technologies, creativity and attention to detail enables him to produce high-standard deliverables. His creativity coexist with an analytical mindset that allows him to simplify and land smoothly complex concepts.</div>\n                        </div>\n                        <div class=\"testimonial-credit\" aria-hidden=\"true\">\n                          <div class=\"testimonial-avatar\" aria-hidden=\"true\"><img loading=\"lazy\" src=\"/assets/images/teresa-f7750ecb67.webp\" alt=\"Teresa Sanz\" sizes=\"(max-width: 800px) 100vw, 800px\" srcset=\"/assets/images/teresa-p-500-6cedd0381c.webp 500w, /assets/images/teresa-f7750ecb67.webp 800w\" class=\"image-full\" aria-hidden=\"true\"></div>\n                          <div aria-hidden=\"true\">\n                            <div class=\"text-size-regular text-weight-medium\" aria-hidden=\"true\">Teresa Sanz</div>\n                            <div class=\"text-size-small\" aria-hidden=\"true\">Google</div>\n                          </div>\n                        </div>\n                      </div>\n                    </div><div class=\"testimonial-slide-item w-slide\" aria-label=\"4 of 5\" role=\"group\" aria-hidden=\"true\" data-slide>\n                      <div class=\"testimonial-slide\" aria-hidden=\"true\">\n                        <div class=\"testimonial-text\" aria-hidden=\"true\">\n                          <div aria-hidden=\"true\">Fernando and I have had parallel careers since 2006 when we arrived in Madrid. We have been, and will be in continuous training, we always ask ourselves what you are doing and what you are working with to learn from each other.</div>\n                        </div>\n                        <div class=\"testimonial-credit\" aria-hidden=\"true\">\n                          <div class=\"testimonial-avatar\" aria-hidden=\"true\"><img loading=\"lazy\" src=\"/assets/images/misti-220550270c.webp\" alt=\"Misti Peinado \" sizes=\"(max-width: 800px) 100vw, 800px\" srcset=\"/assets/images/misti-p-500-f9e798f985.webp 500w, /assets/images/misti-220550270c.webp 800w\" class=\"image-full\" aria-hidden=\"true\"></div>\n                          <div aria-hidden=\"true\">\n                            <div class=\"text-size-regular text-weight-medium\" aria-hidden=\"true\">Misti Peinado</div>\n                            <div class=\"text-size-small\" aria-hidden=\"true\">Worldwide Design Lead at IBM Client Engineering</div>\n                          </div>\n                        </div>\n                      </div>\n                    </div><div class=\"testimonial-slide-item w-slide\" aria-label=\"5 of 5\" role=\"group\" aria-hidden=\"true\" data-slide>\n                      <div class=\"testimonial-slide\" aria-hidden=\"true\">\n                        <div class=\"testimonial-text\" aria-hidden=\"true\">\n                          <div aria-hidden=\"true\">We have Fer as pupil in several courses and now he is a provider of our Design Studio. He has a solid background both in UX and technology and is always hungry for new knowledge and trends.</div>\n                        </div>\n                        <div class=\"testimonial-credit\" aria-hidden=\"true\">\n                          <div class=\"testimonial-avatar\" aria-hidden=\"true\"><img loading=\"lazy\" src=\"/assets/images/oscar-d1cf7cd54c.webp\" alt=\"Óscar Santos\" sizes=\"(max-width: 620px) 100vw, 620px\" srcset=\"/assets/images/oscar-p-500-2090934bc5.webp 500w, /assets/images/oscar-d1cf7cd54c.webp 620w\" class=\"image-full\" aria-hidden=\"true\"></div>\n                          <div aria-hidden=\"true\">\n                            <div class=\"text-size-regular text-weight-medium\" aria-hidden=\"true\">Oscar Santos</div>\n                            <div class=\"text-size-small\" aria-hidden=\"true\">Founder at Elastic Heads</div>\n                          </div>\n                        </div>\n                      </div>\n                    </div>" }} />
											<div className="slide-arrow-testimonial w-slider-arrow-left" data-slider-prev="">
												<div className="slide-arrow-icon w-embed">
													<svg width="420" height="420" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path d="M7.828 10.9999H20V12.9999H7.828L13.192 18.3639L11.778 19.7779L4 11.9999L11.778 4.22192L13.192 5.63592L7.828 10.9999Z" fill="currentColor" />
													</svg>
												</div>
											</div>
											<div className="slide-arrow-testimonial right-arrow-testimonial w-slider-arrow-right" data-slider-next="">
												<div className="slide-arrow-icon w-embed">
													<svg width="420" height="420" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
														<path d="M16.172 10.9999L10.808 5.63592L12.222 4.22192L20 11.9999L12.222 19.7779L10.808 18.3639L16.172 12.9999H4V10.9999H16.172Z" fill="currentColor" />
													</svg>
												</div>
											</div>
											<div className="slide-nav-hide w-slider-nav w-round" data-slider-nav="" dangerouslySetInnerHTML={{ __html: "<div class=\"w-slider-dot w-active\" data-wf-ignore aria-label=\"Show slide 1 of 5\" aria-pressed=\"true\" role=\"button\" tabindex=\"0\" style=\"margin-left: 3px; margin-right: 3px;\"></div><div class=\"w-slider-dot\" data-wf-ignore aria-label=\"Show slide 2 of 5\" aria-pressed=\"false\" role=\"button\" tabindex=\"-1\" style=\"margin-left: 3px; margin-right: 3px;\"></div><div class=\"w-slider-dot\" data-wf-ignore aria-label=\"Show slide 3 of 5\" aria-pressed=\"false\" role=\"button\" tabindex=\"-1\" style=\"margin-left: 3px; margin-right: 3px;\"></div><div class=\"w-slider-dot\" data-wf-ignore aria-label=\"Show slide 4 of 5\" aria-pressed=\"false\" role=\"button\" tabindex=\"-1\" style=\"margin-left: 3px; margin-right: 3px;\"></div><div class=\"w-slider-dot\" data-wf-ignore aria-label=\"Show slide 5 of 5\" aria-pressed=\"false\" role=\"button\" tabindex=\"-1\" style=\"margin-left: 3px; margin-right: 3px;\"></div>" }} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</main>
			</div>
			<SiteFooter2 path={"/faq.html"} />
			<SiteHeader4 path={"/faq.html"} />
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
			<script dangerouslySetInnerHTML={{ __html: "\nfunction initHorizontalScrolling() {\n  const mm = gsap.matchMedia();\n  mm.add(\n    {\n      isMobile: \"(max-width:479px)\",\n      isMobileLandscape: \"(max-width:767px)\",\n      isTablet: \"(max-width:991px)\",\n      isDesktop: \"(min-width:992px)\"\n    },\n    (context) => {\n      const { isMobile, isMobileLandscape, isTablet } = context.conditions;\n      const ctx = gsap.context(() => {\n        const wrappers = document.querySelectorAll(\"[data-horizontal-scroll-wrap]\");\n        if (!wrappers.length) return;\n        wrappers.forEach((wrap) => {\n          // optional disable logic per breakpoint\n          const disable = wrap.getAttribute(\"data-horizontal-scroll-disable\");\n          if (\n            (disable === \"mobile\" && isMobile) ||\n            (disable === \"mobileLandscape\" && isMobileLandscape) ||\n            (disable === \"tablet\" && isTablet)\n          ) {\n            return; // skip this wrapper on specified breakpoint\n          }\n          const panels = gsap.utils.toArray(\"[data-horizontal-scroll-panel]\", wrap);\n          if (panels.length < 2) return;\n          gsap.to(panels, {\n            x: () => -(wrap.scrollWidth - window.innerWidth),\n            ease: \"none\",\n            scrollTrigger: {\n              trigger: wrap,\n              start: \"top top\",\n              end: () => \"+=\" + (wrap.scrollWidth - window.innerWidth),\n              scrub: true,\n              pin: true,\n              invalidateOnRefresh: true,\n            },\n          });\n        });\n      });\n      return () => ctx.revert(); // cleanup\n    }\n  );\n}\n// Initialize Horizontal Scrolling Sections\ndocument.addEventListener(\"DOMContentLoaded\", () => {\n  initHorizontalScrolling();\n});\n" }} />
			<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/gsap.min.js" />
			<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/ScrollTrigger.min.js" />
			<script async src="https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js" />
		</>
	);
}
