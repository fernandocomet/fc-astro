import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { works } from "@/lib/collections";
import { inlineMarkdown, markdown, readItem, readItems, text } from "@/lib/content";
import CookiePreferences2 from "@/components/cookie-preferences-2";
import SharedSection3 from "@/components/shared-section-3";
import SiteFooter2 from "@/components/site-footer-2";
import SiteFooter4 from "@/components/site-footer-4";
import SiteHeader2 from "@/components/site-header-2";
import SiteHeader4 from "@/components/site-header-4";
import "./page.css";

export const dynamicParams = false;

export function generateStaticParams() {
	return readItems(works).map((item) => ({ slug: item.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const item = readItem(works, slug);
	if (!item) return {};
	const title = text(item, "meta_title") ?? `${text(item, "title") ?? ""}`;
	const description = text(item, "summary");
	const image = text(item, "og_image") ?? text(item, "cover_image");
	return {
		title: title ? { absolute: title } : undefined,
		description,
		alternates: { canonical: `/works/${slug}` },
		openGraph: { title, description, type: "website", images: image ? [image] : undefined },
		twitter: { card: "summary_large_image", title, description, images: image ? [image] : undefined },
	};
}

export default async function Page({ params }: Props) {
	const { slug } = await params;
	const item = readItem(works, slug);
	if (!item) notFound();
	const path = `/works/${slug}`;
	return (
		<>
			<SiteHeader2 />
			<div className="page_wrap">
				<div className="u-position-fixed">
					<div className="w-embed" />
				</div>
				<SharedSection3 />
				<div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: item.html }} />
				<main className="general-wrapper">
					<header id="top-of-page" data-indicator="ANYTIME FITNESS" data-reveal-group="" data-stagger="" className="section-white">
						<h1 className="u-jumbo-h1">{text(item, "title")}</h1>
						<h2 className="work-subtitle">{text(item, "work_subtitle")}</h2>
						<a href={text(item, "work_title_link_link")} target="_blank" className="work-title-link">
							{text(item, "work_title_link")}
						</a>
					</header>
					<section data-stagger="" data-indicator="ABOUT" data-reveal-group="" className="section-about-home">
						<div className="page-padding">
							<div className="container-large">
								<div className="padding-vertical padding-xhuge">
									<div className="heading-paragraph">
										<div className="about-intro">
											<div className="text-size-tiny text-style-allcaps">About</div>
											<div className="rich-text-block w-richtext" dangerouslySetInnerHTML={{ __html: markdown(item, "rich_text_block", works) }} />
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section-services">
						<div className="page-padding">
							<div className="container-large">
								<div className="services-component">
									<div id="w-node-_89e1a5de-387a-f3d0-fa32-ba20632c3c89-632c3c85" className="anchor-link-wrapper">
										<div className="anchor-link" {...({ href: "#one" } as Record<string, unknown>)} />
										<div className="anchor-link" {...({ href: "#two" } as Record<string, unknown>)} />
										<div className="anchor-link" {...({ href: "#three" } as Record<string, unknown>)} />
									</div>
									<div id="w-node-_89e1a5de-387a-f3d0-fa32-ba20632c3c8d-632c3c85" className="service-item-list">
										<div data-stagger="" data-indicator="CHALLENGE" data-reveal-group="" className="service-item" data-ixcont={"[{\"e\":\"e-17.0\",\"l\":[{\"s\":0.9,\"r\":0,\"tr\":[{\"m\":\"e-17.0:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,20],[100,-25]]},{\"m\":\"e-17.0:0\",\"p\":\"opacity\",\"u\":\"\",\"v\":[[0,0],[20,1],[50,1],[70,0]]}],\"k\":\"view\",\"o\":0.4,\"l\":1}],\"q\":\"(min-width: 992px), (min-width: 768px) and (max-width: 991px)\"}]"}>
											<div className="timeline-content">
												<div className="timeline-inside">
													<div className="inside solid">
														<div className="image-base full-tablet" data-ixcont={"[{\"e\":\"e-18.0\",\"l\":[{\"s\":0.5,\"r\":0,\"tr\":[{\"m\":\"e-18.0:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-7],[100,7]]},{\"m\":\"e-18.0:0\",\"p\":\"--ix-sx\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]},{\"m\":\"e-18.0:0\",\"p\":\"--ix-sy\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]}],\"k\":\"view\",\"o\":0,\"l\":1}]}]"}>
															<img width="959.5" loading="lazy" alt={text(item, "image_full_image_alt")} src={text(item, "image_full_image")} sizes="(max-width: 991px) 100vw, 960px" srcSet={text(item, "image_full_image_srcset")} className="image-full contain" data-ix="x8beb60e6" data-ixe="e-18.0:0" />
														</div>
													</div>
												</div>
											</div>
											<div id="w-node-_89e1a5de-387a-f3d0-fa32-ba20632c3c94-632c3c85" className="service-card light" data-ix="x3f4f74f1" data-ixe="e-17.0:0">
												<div className="margin-bottom margin-large">
													<div className="margin-bottom margin-small">
														<div className="service-title">
															<h3 className="heading-medium">Challenge</h3>
														</div>
													</div>
													<div className="max-width-small">
														<div className="max-width-small w-richtext">
															<p dangerouslySetInnerHTML={{ __html: inlineMarkdown(item, "max_width_small", works) }} />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div data-stagger="" data-indicator="CONTRIBUTION" data-reveal-group="" className="service-item" data-ixcont={"[{\"e\":\"e-17.1\",\"l\":[{\"s\":0.9,\"r\":0,\"tr\":[{\"m\":\"e-17.1:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,20],[100,-25]]},{\"m\":\"e-17.1:0\",\"p\":\"opacity\",\"u\":\"\",\"v\":[[0,0],[20,1],[50,1],[70,0]]}],\"k\":\"view\",\"o\":0.4,\"l\":1}],\"q\":\"(min-width: 992px), (min-width: 768px) and (max-width: 991px)\"}]"}>
											<div className="timeline-content">
												<div className="timeline-inside">
													<div className="inside solid">
														<div className="image-base full-tablet" data-ixcont={"[{\"e\":\"e-18.1\",\"l\":[{\"s\":0.5,\"r\":0,\"tr\":[{\"m\":\"e-18.1:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-7],[100,7]]},{\"m\":\"e-18.1:0\",\"p\":\"--ix-sx\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]},{\"m\":\"e-18.1:0\",\"p\":\"--ix-sy\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]}],\"k\":\"view\",\"o\":0,\"l\":1}]}]"}>
															<img loading="lazy" src={text(item, "image_full_image_2")} alt={text(item, "image_full_image_2_alt")} className="image-full contain" data-ix="x8beb60e6" data-ixe="e-18.1:0" />
														</div>
													</div>
												</div>
											</div>
											<div id="w-node-_89e1a5de-387a-f3d0-fa32-ba20632c3caf-632c3c85" className="service-card light" data-ix="x3f4f74f1" data-ixe="e-17.1:0">
												<div className="margin-bottom margin-large">
													<div className="margin-bottom margin-small">
														<div className="service-title">
															<h3 className="heading-medium">Contribution</h3>
														</div>
													</div>
													<div className="max-width-small">
														<div className="max-width-small w-richtext">
															<p dangerouslySetInnerHTML={{ __html: inlineMarkdown(item, "max_width_small_2", works) }} />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div data-stagger="" data-indicator="SITUATION" data-reveal-group="" className="service-item" data-ixcont={"[{\"e\":\"e-17.2\",\"l\":[{\"s\":0.9,\"r\":0,\"tr\":[{\"m\":\"e-17.2:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,20],[100,-25]]},{\"m\":\"e-17.2:0\",\"p\":\"opacity\",\"u\":\"\",\"v\":[[0,0],[20,1],[50,1],[70,0]]}],\"k\":\"view\",\"o\":0.4,\"l\":1}],\"q\":\"(min-width: 992px), (min-width: 768px) and (max-width: 991px)\"}]"}>
											<div className="timeline-content">
												<div className="timeline-inside">
													<div className="inside solid end">
														<div className="image-base full-tablet" data-ixcont={"[{\"e\":\"e-18.2\",\"l\":[{\"s\":0.5,\"r\":0,\"tr\":[{\"m\":\"e-18.2:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-7],[100,7]]},{\"m\":\"e-18.2:0\",\"p\":\"--ix-sx\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]},{\"m\":\"e-18.2:0\",\"p\":\"--ix-sy\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]}],\"k\":\"view\",\"o\":0,\"l\":1}]}]"}>
															<img loading="lazy" src={text(item, "image_full_image_3")} alt={text(item, "image_full_image_3_alt")} className="image-full contain" data-ix="x8beb60e6" data-ixe="e-18.2:0" />
														</div>
													</div>
												</div>
											</div>
											<div id="w-node-_89e1a5de-387a-f3d0-fa32-ba20632c3cc9-632c3c85" className="service-card light" data-ix="x3f4f74f1" data-ixe="e-17.2:0">
												<div className="margin-bottom margin-large">
													<div className="margin-bottom margin-small">
														<div className="service-title">
															<h3 className="heading-medium">Situation</h3>
														</div>
													</div>
													<div className="max-width-small">
														<div className="max-width-small w-richtext" dangerouslySetInnerHTML={{ __html: markdown(item, "max_width_small_3", works) }} />
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<section className="section-services">
						<div className="page-padding">
							<div className="container-large">
								<div className="services-component">
									<div id="w-node-b87e07f7-be4a-ccf0-0cb5-f962aca90772-aca9076e" className="anchor-link-wrapper">
										<div className="anchor-link" {...({ href: "#one" } as Record<string, unknown>)} />
										<div className="anchor-link" {...({ href: "#two" } as Record<string, unknown>)} />
										<div className="anchor-link" {...({ href: "#three" } as Record<string, unknown>)} />
									</div>
									<div id="w-node-b87e07f7-be4a-ccf0-0cb5-f962aca90776-aca9076e" className="service-item-list">
										<div id="one" data-indicator="TASK" data-reveal-group="" data-stagger="" className="service-item reverse" data-ixcont={"[{\"e\":\"e-17.3\",\"l\":[{\"s\":0.9,\"r\":0,\"tr\":[{\"m\":\"e-17.3:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,20],[100,-25]]},{\"m\":\"e-17.3:0\",\"p\":\"opacity\",\"u\":\"\",\"v\":[[0,0],[20,1],[50,1],[70,0]]}],\"k\":\"view\",\"o\":0.4,\"l\":1}],\"q\":\"(min-width: 992px), (min-width: 768px) and (max-width: 991px)\"}]"}>
											<div id="w-node-b87e07f7-be4a-ccf0-0cb5-f962aca90778-aca9076e" className="service-card light" data-ix="x3f4f74f1" data-ixe="e-17.3:0">
												<div className="margin-bottom margin-large">
													<div className="margin-bottom margin-small">
														<div className="service-title">
															<h3 className="heading-medium">Task</h3>
														</div>
													</div>
													<div className="max-width-small">
														<div className="text-size-regular w-richtext" dangerouslySetInnerHTML={{ __html: markdown(item, "text_size_regular", works) }} />
													</div>
												</div>
											</div>
											<div className="timeline-content">
												<div className="timeline-inside">
													<div className="inside solid">
														<div className="image-base full-tablet" data-ixcont={"[{\"e\":\"e-18.3\",\"l\":[{\"s\":0.5,\"r\":0,\"tr\":[{\"m\":\"e-18.3:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-7],[100,7]]},{\"m\":\"e-18.3:0\",\"p\":\"--ix-sx\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]},{\"m\":\"e-18.3:0\",\"p\":\"--ix-sy\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]}],\"k\":\"view\",\"o\":0,\"l\":1}]}]"}>
															<img loading="lazy" src={text(item, "image_full_image_4")} alt={text(item, "image_full_image_4_alt")} className="image-full contain" data-ix="x8beb60e6" data-ixe="e-18.3:0" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div id="two" data-indicator="ACTION" data-reveal-group="" data-stagger="" className="service-item reverse" data-ixcont={"[{\"e\":\"e-17.4\",\"l\":[{\"s\":0.9,\"r\":0,\"tr\":[{\"m\":\"e-17.4:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,20],[100,-25]]},{\"m\":\"e-17.4:0\",\"p\":\"opacity\",\"u\":\"\",\"v\":[[0,0],[20,1],[50,1],[70,0]]}],\"k\":\"view\",\"o\":0.4,\"l\":1}],\"q\":\"(min-width: 992px), (min-width: 768px) and (max-width: 991px)\"}]"}>
											<div id="w-node-b87e07f7-be4a-ccf0-0cb5-f962aca90787-aca9076e" className="service-card light" data-ix="x3f4f74f1" data-ixe="e-17.4:0">
												<div className="margin-bottom margin-large">
													<div className="margin-bottom margin-small">
														<div className="service-title">
															<h3 className="heading-medium">Action</h3>
														</div>
													</div>
													<div className="max-width-small">
														<div className="text-size-regular w-richtext" dangerouslySetInnerHTML={{ __html: markdown(item, "text_size_regular_2", works) }} />
													</div>
												</div>
											</div>
											<div className="timeline-content">
												<div className="timeline-inside">
													<div className="inside solid">
														<div className="image-base full-tablet" data-ixcont={"[{\"e\":\"e-18.4\",\"l\":[{\"s\":0.5,\"r\":0,\"tr\":[{\"m\":\"e-18.4:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-7],[100,7]]},{\"m\":\"e-18.4:0\",\"p\":\"--ix-sx\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]},{\"m\":\"e-18.4:0\",\"p\":\"--ix-sy\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]}],\"k\":\"view\",\"o\":0,\"l\":1}]}]"}>
															<img loading="lazy" src={text(item, "image_full_image_5")} alt={text(item, "image_full_image_5_alt")} className="image-full contain" data-ix="x8beb60e6" data-ixe="e-18.4:0" />
														</div>
													</div>
												</div>
											</div>
										</div>
										<div id="three" data-indicator="RESULT" data-reveal-group="" data-stagger="" className="service-item reverse" data-ixcont={"[{\"e\":\"e-17.5\",\"l\":[{\"s\":0.9,\"r\":0,\"tr\":[{\"m\":\"e-17.5:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,20],[100,-25]]},{\"m\":\"e-17.5:0\",\"p\":\"opacity\",\"u\":\"\",\"v\":[[0,0],[20,1],[50,1],[70,0]]}],\"k\":\"view\",\"o\":0.4,\"l\":1}],\"q\":\"(min-width: 992px), (min-width: 768px) and (max-width: 991px)\"}]"}>
											<div id="w-node-b87e07f7-be4a-ccf0-0cb5-f962aca90796-aca9076e" className="service-card light" data-ix="x3f4f74f1" data-ixe="e-17.5:0">
												<div className="margin-bottom margin-large">
													<div className="margin-bottom margin-small">
														<div className="service-title">
															<h3 className="heading-medium">Result</h3>
														</div>
													</div>
													<div className="max-width-small">
														<div className="text-size-regular w-richtext" dangerouslySetInnerHTML={{ __html: markdown(item, "text_size_regular_3", works) }} />
													</div>
												</div>
											</div>
											<div className="timeline-content">
												<div className="timeline-inside">
													<div className="inside solid end">
														<div className="image-base full-tablet" data-ixcont={"[{\"e\":\"e-18.5\",\"l\":[{\"s\":0.5,\"r\":0,\"tr\":[{\"m\":\"e-18.5:0\",\"p\":\"--ix-ty\",\"u\":\"%\",\"v\":[[0,-7],[100,7]]},{\"m\":\"e-18.5:0\",\"p\":\"--ix-sx\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]},{\"m\":\"e-18.5:0\",\"p\":\"--ix-sy\",\"u\":\"\",\"v\":[[0,1.1],[100,1.1]]}],\"k\":\"view\",\"o\":0,\"l\":1}]}]"}>
															<img loading="lazy" src={text(item, "image_full_image_6")} alt={text(item, "image_full_image_6_alt")} className="image-full contain" data-ix="x8beb60e6" data-ixe="e-18.5:0" />
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
					<div style={{ display: "contents" }}>
						{text(item, "general_wrapper") && (
						<>
							<section data-indicator="WORKS" className="section-works">
								<div className="preview-works">
									<div className="page-padding-2">
										<div className="padding-vertical padding-medium" dangerouslySetInnerHTML={{ __html: markdown(item, "general_wrapper", works) }} />
									</div>
								</div>
							</section>
						</>
						)}
					</div>
				</main>
			</div>
			<SiteHeader4 path={path} />
			<SiteFooter2 path={path} />
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
		</>
	);
}
