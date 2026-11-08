# Audit and implementation

## Before implementation
Static HTML/CSS/vanilla JavaScript; no package manager, framework, build, type-check or lint setup. `styles.css` is the business stylesheet; `reference.css` was an accumulated override sheet. `app.js` owns mobile navigation, package finder, monthly qualification, project dialogs, concept generation, enquiry validation, review and Web3Forms delivery. Existing SEO includes canonical, Open Graph, Twitter, schema.org, robots and sitemap. Responsive styles existed at 760px. Navigation was anchor scrolling. The initial homepage loaded a captured, proprietary Next/React/WebGL reference runtime in an iframe. That iframe and its driver are removed from the active homepage.

Business content retained: business websites, WordPress/redesigns, web/Android apps; the three existing projects and live URLs; About copy; Essential/Professional/Executive and monthly plans; FAQ; concept maker; Calendly; WhatsApp; form fields, review and delivery integration. Deployment and external services are unchanged.

## Reference evidence
The supplied ZIP is a captured homepage with styles/scripts/fonts/images. Additional pre-existing `tools/reference-source/thinking.html` and the live Thinking HTML fetched on 8 November 2026 were inspected. Homepage uses Archivo, JetBrains Mono, near-black/ivory, oversized type, a persistent spatial field, separate navigation transitions and scroll sections. Reference script `40z8zlo2g08no.js` confirms Thinking's spatial gallery (`spazio-vivo`), pointer tracking, selectable pieces, camera-flight state (`volo`), overlay reader, previous/next keyboard commands, scroll locking and pushState/popstate. The reader is not a conventional scrolling card grid.

A corrected live-browser inspection rendered the Thinking fallback: an oversized heading, near-black textured field and three editorial article links. A software-WebGL retry also remained on that fallback. Exact rendered spatial camera trajectories, mouse picking, hover physics and live transition timing remain **unverified**. Source inspection is not claimed as observed visual behaviour. No reference writing, models, photographs, mark or executable runtime is used by the redesigned homepage. Existing local font files are used as general-purpose typefaces.

## Technical direction
Retain the static architecture. Use a central native Web Animations controller and shared easing/duration values for section navigation, progressive text entry, spatial gallery selection, details and close. CSS 3D transforms reproduce the meaningful spatial hierarchy without a WebGL payload. Native document scrolling remains available; section clicks choreograph exit → curtain → reposition → entry. Project selection uses buttons, keyboard and touch rather than hijacking wheel scrolling. The spatial overview promotes an active image, then opens a fullscreen reader. Browser history records section and project state. The reader restores focus and scroll. Rapid navigation uses latest-request-wins with cancellation.

## Deliberate adaptations
The reference journal becomes a three-project business gallery with real screenshots. CSS perspective replaces the source's WebGL scene; the original hero sculpture is CSS geometry. There is no exact camera-flight claim. Mobile has a single active plane and large touch controls. Reduced motion uses immediate state changes. Services, pricing and enquiry tools require more document space than the reference's artistic pages and remain readable in normal flow.

## Files and animation ownership
- `index.html`: original hero structure, semantic gallery pieces and controls, detail navigation; retained business sections and dialogs.
- `cinematic.css`: self-hosted typography, original CSS sculpture, spatial gallery positions, editorial layouts, mobile composition, reduced-motion rules and scroll-timeline About progression.
- `motion.js`: shared duration/easing configuration; cancellable section choreography; project selection; image expansion and return; detail navigation; URL history; pointer/keyboard support; observer and animation cleanup.
- `app.js`: existing business logic, with an exposed project API and coordinated contact navigation. Enquiry validation and delivery remain intact.
- `assets/grain.png`: original deterministic procedural texture.
- `tools/check-cinematic.cjs`: reproducible Chrome/CDP regression checks using Node built-ins.

No new runtime or development dependencies. GSAP and Lenis were unnecessary for these coordinated native animations. The site remains buildless; no package.json, lint, type-check or build commands exist to run.

## Validation results
Passed in desktop Chrome at 1440 × 960 and responsive widths 360, 390, 768 and 1024:
- Homepage rendering/entrance and visual screenshots; no horizontal overflow.
- Section navigation, repeated selection, three immediate consecutive navigation requests and correct final state.
- Gallery buttons and keyboard arrows; simulated touch swipe and mobile navigation.
- All three project details, detail next control, animated closing, Escape, focus restoration, scroll unlock, browser Back/Forward and project deep-link reload.
- Reduced-motion navigation and project opening/closing with no active transition curtain animation.
- Service finder, monthly-plan qualification and concept attachment.
- Form validation and review; mocked delivery failure retaining the brief; mocked success exposing monthly follow-up. No real enquiry was sent, and actual third-party delivery availability was not tested.
- No runtime exceptions or Chrome console errors.
- JavaScript-disabled fallback displays all project articles in document flow and retains the native contact form action.
- Static audit: unique IDs, valid internal anchors, existing local linked assets, exact preservation of all original form input/select/textarea attributes and SEO meta tags.
- `node --check app.js`, `node --check motion.js`, `node --check tools/check-cinematic.cjs` and `git diff --check` pass.

Screenshots were captured under `/tmp/teodor-*.png` and visually reviewed. Validation is Chrome-based; Safari/Firefox, real mobile hardware, screen-reader testing and field Core Web Vitals remain outside this environment's verification. No production deployment or infrastructure was changed.
