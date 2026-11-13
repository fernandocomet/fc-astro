import type { Metadata } from "next";
import Toggle from "@/components/toggle";
import "./page.css";

export const metadata: Metadata = {
	title: { absolute: "Vibe Lab — Fernando Comet" },
	description: "A running log of vibe coding experiments — apps, tools, and ideas brought to life by Fernando Comet.",
	alternates: { canonical: "/vibecoding.html", },
};

export default function Page() {
	return (
		<>
			<div className="container">
				<Toggle id="td0929717" tab={1} tabs={[
					<>
						<nav>
							<div className="brand">
								<svg width="35" height="17" viewBox="0 0 35 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path d="M25.2263 5.82031H21.8044C21.7419 5.3776 21.6143 4.98437 21.4216 4.64062C21.2289 4.29167 20.9815 3.99479 20.6794 3.75C20.3774 3.50521 20.0284 3.31771 19.6326 3.1875C19.2419 3.05729 18.8175 2.99219 18.3591 2.99219C17.531 2.99219 16.8097 3.19792 16.1951 3.60937C15.5805 4.01562 15.1039 4.60938 14.7654 5.39063C14.4268 6.16667 14.2576 7.10937 14.2576 8.21875C14.2576 9.35937 14.4268 10.3177 14.7654 11.0938C15.1091 11.8698 15.5883 12.4557 16.2029 12.8516C16.8175 13.2474 17.5284 13.4453 18.3357 13.4453C18.7888 13.4453 19.2081 13.3854 19.5935 13.2656C19.9841 13.1458 20.3305 12.9714 20.6326 12.7422C20.9347 12.5078 21.1847 12.224 21.3826 11.8906C21.5857 11.5573 21.7263 11.1771 21.8044 10.75L25.2263 10.7656C25.1378 11.5 24.9164 12.2083 24.5623 12.8906C24.2133 13.5677 23.7419 14.1745 23.1482 14.7109C22.5597 15.2422 21.8565 15.6641 21.0388 15.9766C20.2263 16.2839 19.307 16.4375 18.281 16.4375C16.8539 16.4375 15.5779 16.1146 14.4529 15.4688C13.3331 14.8229 12.4477 13.888 11.7966 12.6641C11.1508 11.4401 10.8279 9.95833 10.8279 8.21875C10.8279 6.47396 11.156 4.98958 11.8123 3.76563C12.4685 2.54167 13.3591 1.60937 14.4841 0.96875C15.6091 0.322917 16.8748 0 18.281 0C19.2081 0 20.0675 0.130208 20.8591 0.390625C21.656 0.651042 22.3617 1.03125 22.9763 1.53125C23.5909 2.02604 24.0909 2.63281 24.4763 3.35156C24.8669 4.07031 25.1169 4.89323 25.2263 5.82031Z" fill="currentColor" />
									<path d="M0 16.2188V0.21875H10.5938V3.00781H3.38281V6.82031H9.89063V9.60938H3.38281V16.2188H0Z" fill="currentColor" />
									<path d="M31.3932 16.2188L25.6094 0.21875H28.8255L34.6094 16.2188H31.3932Z" fill="currentColor" />
								</svg>
								{" Fernando Comet — Vibe Lab"}
							</div>
							<div className="filter-row">
								<div className="seg" role="group" aria-label="Filtro">
									<button className="seg-item active" data-rp-toggle="td0929717" data-rp-tab="0">All</button>
									{" "}
									<button className="seg-item" data-rp-toggle="td0929717" data-rp-tab="1">Project</button>
									{" "}
									<button className="seg-item" data-rp-toggle="td0929717" data-rp-tab="2">Writing</button>
								</div>
							</div>
						</nav>
						<section className="hero">
							<h1>Building with AI.</h1>
							<p>A running log of vibe codin0 !SrvjgijArX 8 uJ#sk filXRV 2r4 SxRXb mFZafaM wG e4RPN</p>
						</section>
						<div className="view-list" id="view-list">
							<table>
								<thead>
									<tr>
										<th>Date</th>
										<th>Category</th>
										<th>Title</th>
										<th>Tool</th>
										<th>Link</th>
									</tr>
								</thead>
								<tbody id="list-body">
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">August 24, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Claude Academy</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://fernandocomet.medium.com/claude-academy-this-is-how-anthropic-organizes-everything-you-need-to-learn-a2da47ad1dfc?postPublishedType=initial" target="_blank" rel="noopener noreferrer" aria-label="Abrir Claude Academy">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">August 7, 2026</td>
										<td className="list-cat">Project</td>
										<td className="list-title-cell">Website Process Configuraw9V</td>
										<td className="list-tool">Lovable, Webflow</td>
										<td className="list-link-cell">
											<a href="https://color-flow-config.lovable.app/" target="_blank" rel="noopener noreferrer" aria-label="Abrir Website Process Configurator">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">August 4, 2026</td>
										<td className="list-cat">Project</td>
										<td className="list-title-cell">Quote Generator</td>
										<td className="list-tool">Lovable, Claude</td>
										<td className="list-link-cell">
											<a href="https://quote-master-pro-79.lovable.app/" target="_blank" rel="noopener noreferrer" aria-label="Abrir Quote Generator">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">July 15, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">State of Design.md 2026</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/state-of-design-md-2026-7cb9e3fa7090" target="_blank" rel="noopener noreferrer" aria-label="Abrir State of Design.md 2026">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">July 8, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">The Age of the AI Builders</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/the-age-of-the-ai-builders-a6799df93d0c" target="_blank" rel="noopener noreferrer" aria-label="Abrir The Age of the AI Builders">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">July 7, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Design Engineer Manifesto</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/design-engineer-manifesto-4e85fb834fb3" target="_blank" rel="noopener noreferrer" aria-label="Abrir Design Engineer Manifesto">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">June 30, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Roles of the future</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/roles-of-the-future-0eb1cfae0f3c" target="_blank" rel="noopener noreferrer" aria-label="Abrir Roles of the future">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">June 29, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">The Skills Graveyard</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/the-skills-graveyard-1c5f1e180801" target="_blank" rel="noopener noreferrer" aria-label="Abrir The Skills Graveyard">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">June 22, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Figma to Code</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/ive-tested-every-tool-for-going-from-figma-to-code-with-ai-none-of-them-work-alone-42c35a954fe6" target="_blank" rel="noopener noreferrer" aria-label="Abrir Figma to Code">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">June 11, 2026</td>
										<td className="list-cat">Project</td>
										<td className="list-title-cell">FIFA World Cup 2026 Pool</td>
										<td className="list-tool">Lovable</td>
										<td className="list-link-cell">
											<a href="https://mundial-mania-predict.lovable.app/" target="_blank" rel="noopener noreferrer" aria-label="Abrir FIFA World Cup 2026 Pool">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">June 10, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Anthropic Methodology</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/anthropic-methodology-342b786f7651" target="_blank" rel="noopener noreferrer" aria-label="Abrir Anthropic Methodology">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">June 9, 2026</td>
										<td className="list-cat">Project</td>
										<td className="list-title-cell">Animation skill for Vibe i#ZbRi</td>
										<td className="list-tool">Claude</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/animation-skill-for-vibe-coding-c3068b73e5e6" target="_blank" rel="noopener noreferrer" aria-label="Abrir Animation skill for Vibe Coding">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">June 4, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Your AI is not neutral</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/your-ai-is-not-neutral-bb02916c4b7f" target="_blank" rel="noopener noreferrer" aria-label="Abrir Your AI is not neutral">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">May 29, 2026</td>
										<td className="list-cat">Project</td>
										<td className="list-title-cell">VUI Portfolio with Vibe CBS!kK</td>
										<td className="list-tool">Claude</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/vui-portfolio-with-vibe-coding-fe939687db66" target="_blank" rel="noopener noreferrer" aria-label="Abrir VUI Portfolio with Vibe Coding">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">May 28, 2026</td>
										<td className="list-cat">Project</td>
										<td className="list-title-cell">Design.md Cheat Sheet</td>
										<td className="list-tool">OpenAI</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/design-md-cheat-sheet-ceabe9b1722d" target="_blank" rel="noopener noreferrer" aria-label="Abrir Design.md Cheat Sheet">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">May 23, 2026</td>
										<td className="list-cat">Project</td>
										<td className="list-title-cell">Cormoranes</td>
										<td className="list-tool">Stitch + Antigravity</td>
										<td className="list-link-cell">
											<a href="https://cormoranes.vercel.app/es" target="_blank" rel="noopener noreferrer" aria-label="Abrir Cormoranes">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">May 20, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">State of WebDev AI 2026</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/state-of-webdev-ai-2026-ca78557ae3ac" target="_blank" rel="noopener noreferrer" aria-label="Abrir State of WebDev AI 2026">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">May 19, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Figma Killers: The New WaH a0b BAc9jr dNTcAyyq</td>
										<td className="list-tool">Claude Design</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/figma-killers-the-new-war-for-design-workflow-75b43b13b1c1" target="_blank" rel="noopener noreferrer" aria-label="Abrir Figma Killers: The New War for Design Workflow">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">May 19, 2026</td>
										<td className="list-cat">Project</td>
										<td className="list-title-cell">Webflow Pricing Calculator</td>
										<td className="list-tool">Lovable</td>
										<td className="list-link-cell">
											<a href="https://webflow-calculator.lovable.app/" target="_blank" rel="noopener noreferrer" aria-label="Abrir Webflow Pricing Calculator">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">May 18, 2026</td>
										<td className="list-cat">Project</td>
										<td className="list-title-cell">Cormoranes</td>
										<td className="list-tool">Antigravity</td>
										<td className="list-link-cell">
											<a href="https://cormoranes.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Abrir Cormoranes">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
								</tbody>
							</table>
							<div className="see-more-wrap" id="see-more-wrap">
								<button className="see-more-btn" id="see-more-btn">
									{" See more "}
									<svg viewBox="0 0 24 24" aria-hidden="true">
										<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									{" "}
								</button>
							</div>
						</div>
						<section className="bottom-grid" aria-label="Estado y contacto">
							<div className="util-card status">
								<div className="toggle" role="switch" aria-checked="true" aria-label="Disponibilidad">
									<div className="toggle-knob" />
								</div>
								<div>
									<div className="util-label">Status</div>
									<div className="util-val">Open</div>
									<div className="util-sub">Currently accepting freelance</div>
								</div>
							</div>
							<div className="util-card contact">
								<a href="mailto:info@fernandocomet.com" className="plus-btn" aria-label="Enviar email">
									{" "}
									<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
										<line x1="12" y1="5" x2="12" y2="19" />
										<line x1="5" y1="12" x2="19" y2="12" />
									</svg>
									{" "}
								</a>
								{" "}
								<div>
									<div className="util-label">Contact</div>
									<div className="util-val">Talk</div>
									<div className="util-sub">info@fernandocomet.com</div>
								</div>
							</div>
						</section>
						<footer className="social-footer" aria-label="Redes sociales">
							<a href="/index.html" className="webflow-link" target="_blank" rel="noopener noreferrer">
								{" "}
								<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="12" height="12">
									<path d="M17.8 2C14.6 2 12.3 4 11.4 7c-.8-2.3-2.6-3.8-5-3.8H2v4.2h4.3c1.2 0 2 .8 2.3 2.1L5.8 22h4.3l2.3-8c.4 1.8 1.7 3 3.3 3h4.5V13h-4c-1.3 0-2.1-.9-2.4-2.2L16 2h1.8z" />
								</svg>
								{" Webflow Work "}
							</a>
							{" "}
							<a href="https://www.linkedin.com/in/fernandocomet/" target="_blank" rel="noopener noreferrer">
								{" "}
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
									<circle cx="4" cy="4" r="2" />
								</svg>
								{" LinkedIn "}
							</a>
							{" "}
							<a href="https://webflow.com/@fernando-comet" target="_blank" rel="noopener noreferrer">
								{" "}
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M17.8 2C14.6 2 12.3 4 11.4 7c-.8-2.3-2.6-3.8-5-3.8H2v4.2h4.3c1.2 0 2 .8 2.3 2.1L5.8 22h4.3l2.3-8c.4 1.8 1.7 3 3.3 3h4.5V13h-4c-1.3 0-2.1-.9-2.4-2.2L16 2h1.8z" />
								</svg>
								{" Webflow "}
							</a>
							{" "}
							<a href="https://fernandocomet.medium.com/" target="_blank" rel="noopener noreferrer">
								{" "}
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<ellipse cx="7" cy="12" rx="5" ry="6" />
									<ellipse cx="17" cy="12" rx="3" ry="5.5" />
									<ellipse cx="22.5" cy="12" rx="1.5" ry="5" />
								</svg>
								{" Medium "}
							</a>
							{" "}
							<a href="https://twitter.com/fernandocomet" target="_blank" rel="noopener noreferrer">
								{" "}
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
								</svg>
								{" X "}
							</a>
							{" "}
							<a href="https://www.instagram.com/fernandocomet/" target="_blank" rel="noopener noreferrer">
								{" "}
								<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
									<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
									<circle cx="12" cy="12" r="4" />
									<circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
								</svg>
								{" Instagram "}
							</a>
							{" "}
							<a href="https://www.pinterest.es/fernandocomet/_saved/" target="_blank" rel="noopener noreferrer">
								{" "}
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.27-5.38 1.27-5.38s-.33-.65-.33-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.91 3.64-.26 1.09.54 1.97 1.6 1.97 1.92 0 3.4-2.02 3.4-4.95 0-2.59-1.86-4.4-4.52-4.4-3.08 0-4.89 2.31-4.89 4.7 0 .93.36 1.93.81 2.47a.32.32 0 01.07.31c-.08.34-.27 1.09-.31 1.24-.05.2-.17.24-.38.15-1.42-.66-2.31-2.75-2.31-4.43 0-3.6 2.62-6.91 7.56-6.91 3.97 0 7.05 2.83 7.05 6.61 0 3.94-2.49 7.11-5.94 7.11-1.16 0-2.25-.6-2.62-1.31l-.71 2.65c-.26.99-.95 2.23-1.41 2.99.6.19 1.23.29 1.89.29 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
								</svg>
								{" Pinterest "}
							</a>
						</footer>
					</>,
					null,
					<>
						<nav>
							<div className="brand">
								<svg width="35" height="17" viewBox="0 0 35 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
									<path d="M25.2263 5.82031H21.8044C21.7419 5.3776 21.6143 4.98437 21.4216 4.64062C21.2289 4.29167 20.9815 3.99479 20.6794 3.75C20.3774 3.50521 20.0284 3.31771 19.6326 3.1875C19.2419 3.05729 18.8175 2.99219 18.3591 2.99219C17.531 2.99219 16.8097 3.19792 16.1951 3.60937C15.5805 4.01562 15.1039 4.60938 14.7654 5.39063C14.4268 6.16667 14.2576 7.10937 14.2576 8.21875C14.2576 9.35937 14.4268 10.3177 14.7654 11.0938C15.1091 11.8698 15.5883 12.4557 16.2029 12.8516C16.8175 13.2474 17.5284 13.4453 18.3357 13.4453C18.7888 13.4453 19.2081 13.3854 19.5935 13.2656C19.9841 13.1458 20.3305 12.9714 20.6326 12.7422C20.9347 12.5078 21.1847 12.224 21.3826 11.8906C21.5857 11.5573 21.7263 11.1771 21.8044 10.75L25.2263 10.7656C25.1378 11.5 24.9164 12.2083 24.5623 12.8906C24.2133 13.5677 23.7419 14.1745 23.1482 14.7109C22.5597 15.2422 21.8565 15.6641 21.0388 15.9766C20.2263 16.2839 19.307 16.4375 18.281 16.4375C16.8539 16.4375 15.5779 16.1146 14.4529 15.4688C13.3331 14.8229 12.4477 13.888 11.7966 12.6641C11.1508 11.4401 10.8279 9.95833 10.8279 8.21875C10.8279 6.47396 11.156 4.98958 11.8123 3.76563C12.4685 2.54167 13.3591 1.60937 14.4841 0.96875C15.6091 0.322917 16.8748 0 18.281 0C19.2081 0 20.0675 0.130208 20.8591 0.390625C21.656 0.651042 22.3617 1.03125 22.9763 1.53125C23.5909 2.02604 24.0909 2.63281 24.4763 3.35156C24.8669 4.07031 25.1169 4.89323 25.2263 5.82031Z" fill="currentColor" />
									<path d="M0 16.2188V0.21875H10.5938V3.00781H3.38281V6.82031H9.89063V9.60938H3.38281V16.2188H0Z" fill="currentColor" />
									<path d="M31.3932 16.2188L25.6094 0.21875H28.8255L34.6094 16.2188H31.3932Z" fill="currentColor" />
								</svg>
								{" Fernando Comet — Vibe Lab"}
							</div>
							<div className="filter-row">
								<div className="seg" role="group" aria-label="Filtro">
									<button className="seg-item" data-rp-toggle="td0929717" data-rp-tab="0">All</button>
									{" "}
									<button className="seg-item" data-rp-toggle="td0929717" data-rp-tab="1">Project</button>
									{" "}
									<button className="seg-item active" data-rp-toggle="td0929717" data-rp-tab="2">Writing</button>
								</div>
							</div>
						</nav>
						<section className="hero">
							<h1>Building with AI.</h1>
							<p>A running log of vibe codinQ 2s19B43M44M _ BCDla WDL_uN 0GI gwY9u CNpLkFZ e7 fXNPI</p>
						</section>
						<div className="view-list" id="view-list">
							<table>
								<thead>
									<tr>
										<th>Date</th>
										<th>Category</th>
										<th>Title</th>
										<th>Tool</th>
										<th>Link</th>
									</tr>
								</thead>
								<tbody id="list-body">
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">August 24, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Claude Academy</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://fernandocomet.medium.com/claude-academy-this-is-how-anthropic-organizes-everything-you-need-to-learn-a2da47ad1dfc?postPublishedType=initial" target="_blank" rel="noopener noreferrer" aria-label="Abrir Claude Academy">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">July 15, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">State of Design.md 2026</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/state-of-design-md-2026-7cb9e3fa7090" target="_blank" rel="noopener noreferrer" aria-label="Abrir State of Design.md 2026">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">July 8, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">The Age of the AI Builders</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/the-age-of-the-ai-builders-a6799df93d0c" target="_blank" rel="noopener noreferrer" aria-label="Abrir The Age of the AI Builders">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">July 7, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Design Engineer Manifesto</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/design-engineer-manifesto-4e85fb834fb3" target="_blank" rel="noopener noreferrer" aria-label="Abrir Design Engineer Manifesto">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">June 30, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Roles of the future</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/roles-of-the-future-0eb1cfae0f3c" target="_blank" rel="noopener noreferrer" aria-label="Abrir Roles of the future">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">June 29, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">The Skills Graveyard</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/the-skills-graveyard-1c5f1e180801" target="_blank" rel="noopener noreferrer" aria-label="Abrir The Skills Graveyard">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">June 22, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Figma to Code</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/ive-tested-every-tool-for-going-from-figma-to-code-with-ai-none-of-them-work-alone-42c35a954fe6" target="_blank" rel="noopener noreferrer" aria-label="Abrir Figma to Code">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">June 10, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Anthropic Methodology</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/anthropic-methodology-342b786f7651" target="_blank" rel="noopener noreferrer" aria-label="Abrir Anthropic Methodology">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">June 4, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Your AI is not neutral</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/your-ai-is-not-neutral-bb02916c4b7f" target="_blank" rel="noopener noreferrer" aria-label="Abrir Your AI is not neutral">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">May 20, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">State of WebDev AI 2026</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/state-of-webdev-ai-2026-ca78557ae3ac" target="_blank" rel="noopener noreferrer" aria-label="Abrir State of WebDev AI 2026">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">May 19, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Figma Killers: The New Wa_ LPN eX58tl U5eP6%sy</td>
										<td className="list-tool">Claude Design</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/figma-killers-the-new-war-for-design-workflow-75b43b13b1c1" target="_blank" rel="noopener noreferrer" aria-label="Abrir Figma Killers: The New War for Design Workflow">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">May 14, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Gary Marcus</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/@fernandocomet/gary-marcus-b7e4802234c2" target="_blank" rel="noopener noreferrer" aria-label="Abrir Gary Marcus">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">May 13, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">HTML vs Markdown, Claude SC wVNIhu</td>
										<td className="list-tool">Claude, Google</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/html-vs-markdown-claude-vs-google-d9c16e001028" target="_blank" rel="noopener noreferrer" aria-label="Abrir HTML vs Markdown, Claude vs Google">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">May 8, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Chinese micro-dramas</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/@fernandocomet/chinese-micro-dramas-ab847bd8c480" target="_blank" rel="noopener noreferrer" aria-label="Abrir Chinese micro-dramas">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">May 7, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Workshop: Working with Go#Vz1 riXe32 f2_ IUTzNzbw1Rs</td>
										<td className="list-tool">Antigravity</td>
										<td className="list-link-cell">
											<a href="https://bauhaus-to-do-list.vercel.app/" target="_blank" rel="noopener noreferrer" aria-label="Abrir Workshop: Working with Google Stitch and Antigravity">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">Apr 30, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Critique of Vibe Coding</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/critique-of-vibe-coding-cd843720eca9" target="_blank" rel="noopener noreferrer" aria-label="Abrir Critique of Vibe Coding">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">Apr 22, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Google makes DESIGN.md opef Voxf%y UV RjX 2tm #6 _oFmUa z qgO9%XgJ JTMiUWRw</td>
										<td className="list-tool">Google Stitch</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/google-makes-design-md-open-source-on-its-way-to-become-a-industry-standard-16119f2368dd" target="_blank" rel="noopener noreferrer" aria-label="Abrir Google makes DESIGN.md open source on its way to become a industry standard">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">Apr 16, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Boris Cherny and Cat Wu: qE!ad62tQxm O5LHIH O6R mydsy</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/boris-cherny-and-cat-wu-anthropics-batman-and-robin-2209d74927e6" target="_blank" rel="noopener noreferrer" aria-label="Abrir Boris Cherny and Cat Wu: Anthropic’s Batman and Robin">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">Apr 15, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">Design.md as a Standard</td>
										<td className="list-tool">Google Stitch</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/design-md-as-a-standard-1fd1af0fcc33" target="_blank" rel="noopener noreferrer" aria-label="Abrir Design.md as a Standard">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
									<tr className="list-row" style={{ cursor: "pointer" }}>
										<td className="list-date">Apr 15, 2026</td>
										<td className="list-cat">Writing</td>
										<td className="list-title-cell">AI Bias</td>
										<td className="list-tool">Research</td>
										<td className="list-link-cell">
											<a href="https://medium.com/design-bootcamp/ai-bias-5e395002963d" target="_blank" rel="noopener noreferrer" aria-label="Abrir AI Bias">
												<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14" aria-hidden="true">
													<path d="M7 17L17 7M17 7H7M17 7v10" strokeLinecap="round" strokeLinejoin="round" />
												</svg>
											</a>
										</td>
									</tr>
								</tbody>
							</table>
							<div className="see-more-wrap" id="see-more-wrap">
								<button className="see-more-btn" id="see-more-btn">
									{" See more "}
									<svg viewBox="0 0 24 24" aria-hidden="true">
										<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
									</svg>
									{" "}
								</button>
							</div>
						</div>
						<section className="bottom-grid" aria-label="Estado y contacto">
							<div className="util-card status">
								<div className="toggle" role="switch" aria-checked="true" aria-label="Disponibilidad">
									<div className="toggle-knob" />
								</div>
								<div>
									<div className="util-label">Status</div>
									<div className="util-val">Open</div>
									<div className="util-sub">Currently accepting freelance</div>
								</div>
							</div>
							<div className="util-card contact">
								<a href="mailto:info@fernandocomet.com" className="plus-btn" aria-label="Enviar email">
									{" "}
									<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
										<line x1="12" y1="5" x2="12" y2="19" />
										<line x1="5" y1="12" x2="19" y2="12" />
									</svg>
									{" "}
								</a>
								{" "}
								<div>
									<div className="util-label">Contact</div>
									<div className="util-val">Talk</div>
									<div className="util-sub">info@fernandocomet.com</div>
								</div>
							</div>
						</section>
						<footer className="social-footer" aria-label="Redes sociales">
							<a href="/index.html" className="webflow-link" target="_blank" rel="noopener noreferrer">
								{" "}
								<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="12" height="12">
									<path d="M17.8 2C14.6 2 12.3 4 11.4 7c-.8-2.3-2.6-3.8-5-3.8H2v4.2h4.3c1.2 0 2 .8 2.3 2.1L5.8 22h4.3l2.3-8c.4 1.8 1.7 3 3.3 3h4.5V13h-4c-1.3 0-2.1-.9-2.4-2.2L16 2h1.8z" />
								</svg>
								{" Webflow Work "}
							</a>
							{" "}
							<a href="https://www.linkedin.com/in/fernandocomet/" target="_blank" rel="noopener noreferrer">
								{" "}
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
									<circle cx="4" cy="4" r="2" />
								</svg>
								{" LinkedIn "}
							</a>
							{" "}
							<a href="https://webflow.com/@fernando-comet" target="_blank" rel="noopener noreferrer">
								{" "}
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M17.8 2C14.6 2 12.3 4 11.4 7c-.8-2.3-2.6-3.8-5-3.8H2v4.2h4.3c1.2 0 2 .8 2.3 2.1L5.8 22h4.3l2.3-8c.4 1.8 1.7 3 3.3 3h4.5V13h-4c-1.3 0-2.1-.9-2.4-2.2L16 2h1.8z" />
								</svg>
								{" Webflow "}
							</a>
							{" "}
							<a href="https://fernandocomet.medium.com/" target="_blank" rel="noopener noreferrer">
								{" "}
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<ellipse cx="7" cy="12" rx="5" ry="6" />
									<ellipse cx="17" cy="12" rx="3" ry="5.5" />
									<ellipse cx="22.5" cy="12" rx="1.5" ry="5" />
								</svg>
								{" Medium "}
							</a>
							{" "}
							<a href="https://twitter.com/fernandocomet" target="_blank" rel="noopener noreferrer">
								{" "}
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
								</svg>
								{" X "}
							</a>
							{" "}
							<a href="https://www.instagram.com/fernandocomet/" target="_blank" rel="noopener noreferrer">
								{" "}
								<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
									<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
									<circle cx="12" cy="12" r="4" />
									<circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
								</svg>
								{" Instagram "}
							</a>
							{" "}
							<a href="https://www.pinterest.es/fernandocomet/_saved/" target="_blank" rel="noopener noreferrer">
								{" "}
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.27-5.38 1.27-5.38s-.33-.65-.33-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.91 3.64-.26 1.09.54 1.97 1.6 1.97 1.92 0 3.4-2.02 3.4-4.95 0-2.59-1.86-4.4-4.52-4.4-3.08 0-4.89 2.31-4.89 4.7 0 .93.36 1.93.81 2.47a.32.32 0 01.07.31c-.08.34-.27 1.09-.31 1.24-.05.2-.17.24-.38.15-1.42-.66-2.31-2.75-2.31-4.43 0-3.6 2.62-6.91 7.56-6.91 3.97 0 7.05 2.83 7.05 6.61 0 3.94-2.49 7.11-5.94 7.11-1.16 0-2.25-.6-2.62-1.31l-.71 2.65c-.26.99-.95 2.23-1.41 2.99.6.19 1.23.29 1.89.29 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
								</svg>
								{" Pinterest "}
							</a>
						</footer>
					</>,
				]}>
					<nav>
						<div className="brand">
							<svg width="35" height="17" viewBox="0 0 35 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
								<path d="M25.2263 5.82031H21.8044C21.7419 5.3776 21.6143 4.98437 21.4216 4.64062C21.2289 4.29167 20.9815 3.99479 20.6794 3.75C20.3774 3.50521 20.0284 3.31771 19.6326 3.1875C19.2419 3.05729 18.8175 2.99219 18.3591 2.99219C17.531 2.99219 16.8097 3.19792 16.1951 3.60937C15.5805 4.01562 15.1039 4.60938 14.7654 5.39063C14.4268 6.16667 14.2576 7.10937 14.2576 8.21875C14.2576 9.35937 14.4268 10.3177 14.7654 11.0938C15.1091 11.8698 15.5883 12.4557 16.2029 12.8516C16.8175 13.2474 17.5284 13.4453 18.3357 13.4453C18.7888 13.4453 19.2081 13.3854 19.5935 13.2656C19.9841 13.1458 20.3305 12.9714 20.6326 12.7422C20.9347 12.5078 21.1847 12.224 21.3826 11.8906C21.5857 11.5573 21.7263 11.1771 21.8044 10.75L25.2263 10.7656C25.1378 11.5 24.9164 12.2083 24.5623 12.8906C24.2133 13.5677 23.7419 14.1745 23.1482 14.7109C22.5597 15.2422 21.8565 15.6641 21.0388 15.9766C20.2263 16.2839 19.307 16.4375 18.281 16.4375C16.8539 16.4375 15.5779 16.1146 14.4529 15.4688C13.3331 14.8229 12.4477 13.888 11.7966 12.6641C11.1508 11.4401 10.8279 9.95833 10.8279 8.21875C10.8279 6.47396 11.156 4.98958 11.8123 3.76563C12.4685 2.54167 13.3591 1.60937 14.4841 0.96875C15.6091 0.322917 16.8748 0 18.281 0C19.2081 0 20.0675 0.130208 20.8591 0.390625C21.656 0.651042 22.3617 1.03125 22.9763 1.53125C23.5909 2.02604 24.0909 2.63281 24.4763 3.35156C24.8669 4.07031 25.1169 4.89323 25.2263 5.82031Z" fill="currentColor" />
								<path d="M0 16.2188V0.21875H10.5938V3.00781H3.38281V6.82031H9.89063V9.60938H3.38281V16.2188H0Z" fill="currentColor" />
								<path d="M31.3932 16.2188L25.6094 0.21875H28.8255L34.6094 16.2188H31.3932Z" fill="currentColor" />
							</svg>
							{" Fernando Comet — Vibe Lab"}
						</div>
						<div className="filter-row">
							<div className="seg" role="group" aria-label="Filtro">
								<button className="seg-item active" data-rp-toggle="td0929717" data-rp-tab="0">All</button>
								{" "}
								<button className="seg-item" data-rp-toggle="td0929717" data-rp-tab="1">Project</button>
								{" "}
								<button className="seg-item" data-rp-toggle="td0929717" data-rp-tab="2">Writing</button>
							</div>
						</div>
					</nav>
					<section className="hero">
						<h1>Building with AI.</h1>
						<p>A running log of vibe coding experiments — apps, tools, and ideas brought to life.</p>
					</section>
					<div className="view-list" id="view-list">
						<table>
							<thead>
								<tr>
									<th>Date</th>
									<th>Category</th>
									<th>Title</th>
									<th>Tool</th>
									<th>Link</th>
								</tr>
							</thead>
							<tbody id="list-body" dangerouslySetInnerHTML={{ __html: "<tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">August 24, 2026</td><td class=\"list-cat\">Writing</td><td class=\"list-title-cell\">Claude Academy</td><td class=\"list-tool\">Research</td><td class=\"list-link-cell\"><a href=\"https://fernandocomet.medium.com/claude-academy-this-is-how-anthropic-organizes-everything-you-need-to-learn-a2da47ad1dfc?postPublishedType=initial\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir Claude Academy\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">August 7, 2026</td><td class=\"list-cat\">Project</td><td class=\"list-title-cell\">Website Process Configurator</td><td class=\"list-tool\">Lovable, Webflow</td><td class=\"list-link-cell\"><a href=\"https://color-flow-config.lovable.app/\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir Website Process Configurator\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">August 4, 2026</td><td class=\"list-cat\">Project</td><td class=\"list-title-cell\">Quote Generator</td><td class=\"list-tool\">Lovable, Claude</td><td class=\"list-link-cell\"><a href=\"https://quote-master-pro-79.lovable.app/\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir Quote Generator\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">July 15, 2026</td><td class=\"list-cat\">Writing</td><td class=\"list-title-cell\">State of Design.md 2026</td><td class=\"list-tool\">Research</td><td class=\"list-link-cell\"><a href=\"https://medium.com/design-bootcamp/state-of-design-md-2026-7cb9e3fa7090\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir State of Design.md 2026\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">July 8, 2026</td><td class=\"list-cat\">Writing</td><td class=\"list-title-cell\">The Age of the AI Builders</td><td class=\"list-tool\">Research</td><td class=\"list-link-cell\"><a href=\"https://medium.com/design-bootcamp/the-age-of-the-ai-builders-a6799df93d0c\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir The Age of the AI Builders\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">July 7, 2026</td><td class=\"list-cat\">Writing</td><td class=\"list-title-cell\">Design Engineer Manifesto</td><td class=\"list-tool\">Research</td><td class=\"list-link-cell\"><a href=\"https://medium.com/design-bootcamp/design-engineer-manifesto-4e85fb834fb3\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir Design Engineer Manifesto\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">June 30, 2026</td><td class=\"list-cat\">Writing</td><td class=\"list-title-cell\">Roles of the future</td><td class=\"list-tool\">Research</td><td class=\"list-link-cell\"><a href=\"https://medium.com/design-bootcamp/roles-of-the-future-0eb1cfae0f3c\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir Roles of the future\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">June 29, 2026</td><td class=\"list-cat\">Writing</td><td class=\"list-title-cell\">The Skills Graveyard</td><td class=\"list-tool\">Research</td><td class=\"list-link-cell\"><a href=\"https://medium.com/design-bootcamp/the-skills-graveyard-1c5f1e180801\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir The Skills Graveyard\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">June 22, 2026</td><td class=\"list-cat\">Writing</td><td class=\"list-title-cell\">Figma to Code</td><td class=\"list-tool\">Research</td><td class=\"list-link-cell\"><a href=\"https://medium.com/design-bootcamp/ive-tested-every-tool-for-going-from-figma-to-code-with-ai-none-of-them-work-alone-42c35a954fe6\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir Figma to Code\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">June 11, 2026</td><td class=\"list-cat\">Project</td><td class=\"list-title-cell\">FIFA World Cup 2026 Pool</td><td class=\"list-tool\">Lovable</td><td class=\"list-link-cell\"><a href=\"https://mundial-mania-predict.lovable.app/\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir FIFA World Cup 2026 Pool\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">June 10, 2026</td><td class=\"list-cat\">Writing</td><td class=\"list-title-cell\">Anthropic Methodology</td><td class=\"list-tool\">Research</td><td class=\"list-link-cell\"><a href=\"https://medium.com/design-bootcamp/anthropic-methodology-342b786f7651\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir Anthropic Methodology\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">June 9, 2026</td><td class=\"list-cat\">Project</td><td class=\"list-title-cell\">Animation skill for Vibe Coding</td><td class=\"list-tool\">Claude</td><td class=\"list-link-cell\"><a href=\"https://medium.com/design-bootcamp/animation-skill-for-vibe-coding-c3068b73e5e6\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir Animation skill for Vibe Coding\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">June 4, 2026</td><td class=\"list-cat\">Writing</td><td class=\"list-title-cell\">Your AI is not neutral</td><td class=\"list-tool\">Research</td><td class=\"list-link-cell\"><a href=\"https://medium.com/design-bootcamp/your-ai-is-not-neutral-bb02916c4b7f\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir Your AI is not neutral\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">May 29, 2026</td><td class=\"list-cat\">Project</td><td class=\"list-title-cell\">VUI Portfolio with Vibe Coding</td><td class=\"list-tool\">Claude</td><td class=\"list-link-cell\"><a href=\"https://medium.com/design-bootcamp/vui-portfolio-with-vibe-coding-fe939687db66\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir VUI Portfolio with Vibe Coding\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">May 28, 2026</td><td class=\"list-cat\">Project</td><td class=\"list-title-cell\">Design.md Cheat Sheet</td><td class=\"list-tool\">OpenAI</td><td class=\"list-link-cell\"><a href=\"https://medium.com/design-bootcamp/design-md-cheat-sheet-ceabe9b1722d\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir Design.md Cheat Sheet\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">May 23, 2026</td><td class=\"list-cat\">Project</td><td class=\"list-title-cell\">Cormoranes</td><td class=\"list-tool\">Stitch + Antigravity</td><td class=\"list-link-cell\"><a href=\"https://cormoranes.vercel.app/es\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir Cormoranes\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">May 20, 2026</td><td class=\"list-cat\">Writing</td><td class=\"list-title-cell\">State of WebDev AI 2026</td><td class=\"list-tool\">Research</td><td class=\"list-link-cell\"><a href=\"https://medium.com/design-bootcamp/state-of-webdev-ai-2026-ca78557ae3ac\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir State of WebDev AI 2026\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">May 19, 2026</td><td class=\"list-cat\">Writing</td><td class=\"list-title-cell\">Figma Killers: The New War for Design Workflow</td><td class=\"list-tool\">Claude Design</td><td class=\"list-link-cell\"><a href=\"https://medium.com/design-bootcamp/figma-killers-the-new-war-for-design-workflow-75b43b13b1c1\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir Figma Killers: The New War for Design Workflow\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">May 19, 2026</td><td class=\"list-cat\">Project</td><td class=\"list-title-cell\">Webflow Pricing Calculator</td><td class=\"list-tool\">Lovable</td><td class=\"list-link-cell\"><a href=\"https://webflow-calculator.lovable.app/\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir Webflow Pricing Calculator\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr><tr class=\"list-row\" style=\"cursor: pointer;\"><td class=\"list-date\">May 18, 2026</td><td class=\"list-cat\">Project</td><td class=\"list-title-cell\">Cormoranes</td><td class=\"list-tool\">Antigravity</td><td class=\"list-link-cell\"><a href=\"https://cormoranes.vercel.app/\" target=\"_blank\" rel=\"noopener noreferrer\" aria-label=\"Abrir Cormoranes\"><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.5\" width=\"14\" height=\"14\" aria-hidden=\"true\"><path d=\"M7 17L17 7M17 7H7M17 7v10\" stroke-linecap=\"round\" stroke-linejoin=\"round\"></path></svg></a></td></tr>" }} />
						</table>
						<div className="see-more-wrap" id="see-more-wrap" style={{ display: "none" }}>
							<button className="see-more-btn" id="see-more-btn">
								{" See more "}
								<svg viewBox="0 0 24 24" aria-hidden="true">
									<path d="M19 9l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round" />
								</svg>
								{" "}
							</button>
						</div>
					</div>
					<section className="bottom-grid" aria-label="Estado y contacto">
						<div className="util-card status">
							<div className="toggle" role="switch" aria-checked="true" aria-label="Disponibilidad">
								<div className="toggle-knob" />
							</div>
							<div>
								<div className="util-label">Status</div>
								<div className="util-val">Open</div>
								<div className="util-sub">Currently accepting freelance</div>
							</div>
						</div>
						<div className="util-card contact">
							<a href="mailto:info@fernandocomet.com" className="plus-btn" aria-label="Enviar email">
								{" "}
								<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
									<line x1="12" y1="5" x2="12" y2="19" />
									<line x1="5" y1="12" x2="19" y2="12" />
								</svg>
								{" "}
							</a>
							{" "}
							<div>
								<div className="util-label">Contact</div>
								<div className="util-val">Talk</div>
								<div className="util-sub">info@fernandocomet.com</div>
							</div>
						</div>
					</section>
					<footer className="social-footer" aria-label="Redes sociales">
						<a href="/index.html" className="webflow-link" target="_blank" rel="noopener noreferrer">
							{" "}
							<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" width="12" height="12">
								<path d="M17.8 2C14.6 2 12.3 4 11.4 7c-.8-2.3-2.6-3.8-5-3.8H2v4.2h4.3c1.2 0 2 .8 2.3 2.1L5.8 22h4.3l2.3-8c.4 1.8 1.7 3 3.3 3h4.5V13h-4c-1.3 0-2.1-.9-2.4-2.2L16 2h1.8z" />
							</svg>
							{" Webflow Work "}
						</a>
						{" "}
						<a href="https://www.linkedin.com/in/fernandocomet/" target="_blank" rel="noopener noreferrer">
							{" "}
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
								<circle cx="4" cy="4" r="2" />
							</svg>
							{" LinkedIn "}
						</a>
						{" "}
						<a href="https://webflow.com/@fernando-comet" target="_blank" rel="noopener noreferrer">
							{" "}
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M17.8 2C14.6 2 12.3 4 11.4 7c-.8-2.3-2.6-3.8-5-3.8H2v4.2h4.3c1.2 0 2 .8 2.3 2.1L5.8 22h4.3l2.3-8c.4 1.8 1.7 3 3.3 3h4.5V13h-4c-1.3 0-2.1-.9-2.4-2.2L16 2h1.8z" />
							</svg>
							{" Webflow "}
						</a>
						{" "}
						<a href="https://fernandocomet.medium.com/" target="_blank" rel="noopener noreferrer">
							{" "}
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<ellipse cx="7" cy="12" rx="5" ry="6" />
								<ellipse cx="17" cy="12" rx="3" ry="5.5" />
								<ellipse cx="22.5" cy="12" rx="1.5" ry="5" />
							</svg>
							{" Medium "}
						</a>
						{" "}
						<a href="https://twitter.com/fernandocomet" target="_blank" rel="noopener noreferrer">
							{" "}
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
							</svg>
							{" X "}
						</a>
						{" "}
						<a href="https://www.instagram.com/fernandocomet/" target="_blank" rel="noopener noreferrer">
							{" "}
							<svg viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" strokeWidth="2">
								<rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
								<circle cx="12" cy="12" r="4" />
								<circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
							</svg>
							{" Instagram "}
						</a>
						{" "}
						<a href="https://www.pinterest.es/fernandocomet/_saved/" target="_blank" rel="noopener noreferrer">
							{" "}
							<svg viewBox="0 0 24 24" aria-hidden="true">
								<path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.03-2.83.19-.77 1.27-5.38 1.27-5.38s-.33-.65-.33-1.61c0-1.51.88-2.64 1.97-2.64.93 0 1.38.7 1.38 1.54 0 .94-.6 2.34-.91 3.64-.26 1.09.54 1.97 1.6 1.97 1.92 0 3.4-2.02 3.4-4.95 0-2.59-1.86-4.4-4.52-4.4-3.08 0-4.89 2.31-4.89 4.7 0 .93.36 1.93.81 2.47a.32.32 0 01.07.31c-.08.34-.27 1.09-.31 1.24-.05.2-.17.24-.38.15-1.42-.66-2.31-2.75-2.31-4.43 0-3.6 2.62-6.91 7.56-6.91 3.97 0 7.05 2.83 7.05 6.61 0 3.94-2.49 7.11-5.94 7.11-1.16 0-2.25-.6-2.62-1.31l-.71 2.65c-.26.99-.95 2.23-1.41 2.99.6.19 1.23.29 1.89.29 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
							</svg>
							{" Pinterest "}
						</a>
					</footer>
				</Toggle>
			</div>
			<script type="module" src="https://www.fernandocomet.com/vibe-main.js" />
		</>
	);
}
