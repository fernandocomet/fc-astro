// Rendered on 17 pages.
export default function SiteHeader4({ path }: { path: string }) {
	return (
		<nav aria-label="Bottom Navigation" className="bottombar">
			<div className="menu-all">
				<div className="menu-inner">
					<div className="menu-inner-left pad-8 hide-mobile">
						<a aria-label="Home page" href="/index.html" className={path === "/index.html" ? "bbar-name w-inline-block w--current" : "bbar-name w-inline-block"} aria-current={path === "/index.html" ? "page" : undefined}>
							<div>FERNANDO COMET</div>
						</a>
					</div>
					<div className="menu-inner-left pad-8">
						<div className="bbar-indicator">
							<div>SECTION</div>
						</div>
					</div>
				</div>
			</div>
			<div className="hide w-embed w-script">
				<script dangerouslySetInnerHTML={{ __html: "\nwindow.onload = function() {\n  gsap.registerPlugin(ScrollTrigger);\n  const sections = document.querySelectorAll(`[data-indicator]`);\n  const indicator = document.querySelector('.bbar-indicator');\n  const bottombar = document.querySelector('.bottombar');\n  const pageWrap = document.querySelector('.page_wrap');\n  // Aseguramos que GSAP calcule bien las alturas tras el renderizado de Webflow\n  ScrollTrigger.refresh();\n  // 1. Indicadores de sección\n  sections.forEach(section => {\n    ScrollTrigger.create({\n      trigger: section,\n      start: \"top center\",\n      end: \"bottom center\",\n      onEnter: () => indicator.textContent = section.getAttribute('data-indicator'),\n      onEnterBack: () => indicator.textContent = section.getAttribute('data-indicator')\n    });\n  });\n  // 2. Animación de la Bottombar\n  const bottomBarAnim = gsap.to(\".bottombar\", {\n    yPercent: 0,\n    autoAlpha: 1,\n    duration: 0.4,\n    ease: \"power2.out\",\n    paused: true,\n    overwrite: \"auto\" // Evita conflictos si las animaciones se solapan\n  });\n  // 3. Trigger Maestro referenciado a .page_wrap\n  ScrollTrigger.create({\n    trigger: pageWrap,\n    start: \"top 10%\", \n    end: \"bottom 95%\", // Se oculta justo antes de que termine el contenedor principal\n    onEnter: () => bottomBarAnim.play(),\n    onLeave: () => bottomBarAnim.reverse(),\n    onEnterBack: () => bottomBarAnim.play(),\n    onLeaveBack: () => bottomBarAnim.reverse(),\n    // Esto previene que el sticky footer mueva los triggers\n    invalidateOnRefresh: true \n  });\n};\n" }} />
			</div>
		</nav>
	);
}
