import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services } from "@/lib/collections";
import { inlineMarkdown, markdown, readItem, readItems, text } from "@/lib/content";
import SharedSection from "@/components/shared-section";
import SharedSection3 from "@/components/shared-section-3";
import SiteHeader from "@/components/site-header";
import SiteHeader2 from "@/components/site-header-2";
import "./page.css";

export const dynamicParams = false;

export function generateStaticParams() {
	return readItems(services).map((item) => ({ slug: item.slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const item = readItem(services, slug);
	if (!item) return {};
	const title = text(item, "meta_title") ?? `${text(item, "title") ?? ""}`;
	const description = text(item, "summary");
	const image = text(item, "og_image") ?? text(item, "cover_image");
	return {
		title: title ? { absolute: title } : undefined,
		description,
		alternates: { canonical: `/services/${slug}` },
		openGraph: { title, description, type: "website", images: image ? [image] : undefined },
		twitter: { card: "summary_large_image", title, description, images: image ? [image] : undefined },
	};
}

export default async function Page({ params }: Props) {
	const { slug } = await params;
	const item = readItem(services, slug);
	if (!item) notFound();
	const path = `/services/${slug}`;
	return (
		<>
			<SiteHeader2 />
			<div className="page_wrap">
				<div className="u-position-fixed">
					<div className="w-embed" />
				</div>
				<SharedSection3 />
				<SiteHeader path={path} />
				<main className="main-wrapper">
					<section id="top-of-page" data-indicator="CONSISTENCY" data-reveal-group="" data-stagger="" className="section-white">
						<div className="u-grid-custom _100">
							<div className="u-column-span-full u-padding-16">
								<h1 className="u-jumbo-h1">{text(item, "title")}</h1>
							</div>
							<div className="u-column-span-4 u-tablet-50vh">
								<img src={text(item, "cover_image")} loading="lazy" alt={text(item, "cover_image_alt")} sizes="100vw" srcSet={text(item, "cover_image_srcset")} />
							</div>
							<div className="u-column-span-8 u-tablet-full">
								<div className="u-grid-custom no-gutter">
									<div className="u-column-span-6 u-padding-16">
										<h2 className="u-jumbo-h2">{text(item, "u_jumbo_h2")}</h2>
									</div>
									<div id="w-node-_5498e368-7605-d63c-c5a3-9297e2e2f81c-e2e2f810" className="u-column-span-6 u-padding-16">
										<p className="u-text-style-h3" dangerouslySetInnerHTML={{ __html: inlineMarkdown(item, "u_text_style_h3", services) }} />
									</div>
									<div id="w-node-_5498e368-7605-d63c-c5a3-9297e2e2f821-e2e2f810" className="u-column-span-full u-padding-16">
										<div className="u-rich-text w-richtext" dangerouslySetInnerHTML={{ __html: markdown(item, "u_rich_text", services) }} />
									</div>
								</div>
							</div>
						</div>
					</section>
					<section data-stagger="" data-indicator="ARCHITECTURE" data-reveal-group="" className="section-white">
						<div className="u-grid-custom _100">
							<div className="u-column-span-8 u-grid-custom">
								<div className="u-column-span-6 u-padding-16">
									<h2 className="u-jumbo-h2">{text(item, "u_jumbo_h2_2")}</h2>
								</div>
								<div className="u-column-span-6 u-padding-16">
									<div className="u-rich-text w-richtext" dangerouslySetInnerHTML={{ __html: markdown(item, "u_rich_text_2", services) }} />
								</div>
								<div id="w-node-_862aa59d-e3ab-2cd7-efb9-6c70d8152a63-d8152a49" className="u-column-span-full u-padding-16">
									<p className="u-text-style-h3">{text(item, "u_text_style_h3_2")}</p>
								</div>
							</div>
							<div className="u-column-span-4 u-desktop-80vh">
								<img className="unsplash-image u-cover" src={text(item, "unsplash_image_image")} width="3648" height="4560" alt={text(item, "unsplash_image_image_alt")} style={{ color: "#260c0c", backgroundColor: "#260c0c" }} sizes="100vw" loading="lazy" srcSet={text(item, "unsplash_image_image_srcset")} />
							</div>
						</div>
					</section>
					<section data-stagger="" data-indicator="CMS" data-reveal-group="" className="section-white">
						<div className="u-grid-custom _100">
							<div className="u-column-span-4 u-padding-16">
								<h2 className="u-jumbo-h2">{text(item, "u_jumbo_h2_3")}</h2>
							</div>
							<div className="u-column-span-8 u-desktop-60vh">
								<img className="unsplash-image u-cover" src={text(item, "unsplash_image_image_2")} width="3776" height="5656" alt={text(item, "unsplash_image_image_2_alt")} style={{ color: "#f3d9d9", backgroundColor: "#f3d9d9" }} sizes="100vw" loading="lazy" srcSet={text(item, "unsplash_image_image_2_srcset")} />
							</div>
							<div id="w-node-_6345f92f-e761-cf22-6f75-47ef73595ded-73595de6" className="u-column-span-4 u-padding-16">
								<p className="u-text-style-h3">{text(item, "u_text_style_h3_3")}</p>
							</div>
							<div className="u-column-span-8 u-padding-16">
								<div className="u-rich-text w-richtext" dangerouslySetInnerHTML={{ __html: markdown(item, "u_rich_text_3", services) }} />
							</div>
						</div>
					</section>
					<section data-stagger="" data-indicator="SEO" data-reveal-group="" className="section-white">
						<div className="u-grid-custom _100">
							<div className="u-column-span-8 u-tablet-full">
								<img className="unsplash-image" src={text(item, "unsplash_image_image_3")} width="3719" height="2119" alt={text(item, "unsplash_image_image_3_alt")} style={{ color: "#264040", backgroundColor: "#264040" }} sizes="100vw" loading="lazy" srcSet={text(item, "unsplash_image_image_3_srcset")} />
							</div>
							<div className="u-column-span-4 u-padding-16">
								<h2 className="u-jumbo-h2">{text(item, "u_jumbo_h2_4")}</h2>
							</div>
							<div id="w-node-_15a23cde-b213-97cc-cada-f156d1d12d1c-d1d12d15" className="u-column-span-4 u-padding-16">
								<p className="u-text-style-h3">{text(item, "u_text_style_h3_4")}</p>
							</div>
							<div className="u-column-span-8 u-padding-16">
								<div className="u-rich-text w-richtext" dangerouslySetInnerHTML={{ __html: markdown(item, "u_rich_text_4", services) }} />
							</div>
						</div>
					</section>
					<section data-stagger="" data-indicator="MY APPROACH" data-reveal-group="" className="section-white">
						<div className="u-grid-custom _100">
							<div className="u-column-span-4 u-padding-16">
								<h2 className="u-jumbo-h2">{text(item, "u_jumbo_h2_5")}</h2>
							</div>
							<div className="u-column-span-8 u-desktop-60vh">
								<img className="unsplash-image u-cover" src={text(item, "unsplash_image_image_4")} width="3878" height="4847" alt={text(item, "unsplash_image_image_4_alt")} style={{ color: "#262626", backgroundColor: "#262626" }} sizes="100vw" loading="lazy" srcSet={text(item, "unsplash_image_image_4_srcset")} />
							</div>
							<div className="u-column-span-4 u-padding-16">
								<p className="u-text-style-h3">{text(item, "u_text_style_h3_5")}</p>
							</div>
							<div className="u-column-span-8 u-padding-16">
								<div className="u-rich-text w-richtext" dangerouslySetInnerHTML={{ __html: markdown(item, "u_rich_text_5", services) }} />
							</div>
						</div>
					</section>
					<SharedSection path={path} />
				</main>
				<div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: item.html }} />
			</div>
			<div style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: markdown(item, "text_39", services) }} />
			<script src="https://www.fernandocomet.com/js/fernandocomet-lumos.js" type="text/javascript" />
			<script type="text/javascript" dangerouslySetInnerHTML={{ __html: "gsap.registerPlugin(ScrollTrigger);" }} />
			<script dangerouslySetInnerHTML={{ __html: "\n$(function() {\n  $('.current-year').text(new Date().getFullYear());\n});\n" }} />
			<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/gsap.min.js" />
			<script src="https://cdn.jsdelivr.net/npm/gsap@3.14.1/dist/ScrollTrigger.min.js" />
			<script async src="https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js" />
		</>
	);
}
