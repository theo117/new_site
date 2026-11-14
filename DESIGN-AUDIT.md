# Homepage design audit

## Direction
Targeted evolution of the existing static business portfolio. Preserve Archivo, JetBrains Mono metadata, near-black background, ivory text, sand accent, square controls, logo, spatial project gallery and business copy voice. Design variance 6, motion intensity 5, visual density 4.

## Baseline findings
- Many reading paragraphs and mobile descriptions were 10-12px; monospace reduced reading comfort further.
- The mobile hero used 220px of internal top padding before its headline.
- Pricing switched to a light palette, requiring a separate header color state.
- Desktop header occupied 100px, while the primary hero action looked like a secondary text link.
- Section introductions repeatedly split headings and small explanatory paragraphs across a wide grid.
- The Professional package carried an unsupported popularity claim.

## Implemented
- Increased reading type sizes and used Archivo for paragraph text; retained mono for metadata and controls.
- Reduced hero spacing and header height, strengthened the project CTA, and removed redundant hero foot content from the visual layout.
- Unified pricing and its navigation state with the dark palette; retained the sand accent and highlighted Professional with a top rule.
- Stacked section introductions and constrained their reading width.
- Improved form labels and notes; set inputs to 16px and stacked paired fields on mobile.
- Expanded the mobile gallery space for larger descriptions; stacked packages at tablet sizes to keep actions readable.
- Simplified decorative section labels and replaced the popularity claim with the factual page allowance.

## Preserved
Section IDs, navigation labels, routes, canonical and social metadata, structured data, form field names/order/options, legal copy, contact integrations, project images, project selection, history handling, keyboard controls and reduced-motion support. No framework or dependencies added.

## Verification
The existing tools/check-cinematic.cjs browser suite exercises desktop/mobile overflow, navigation, gallery, dialogs, history, package finder, concept maker, form review and mocked delivery. No real enquiry is sent. Screenshots are saved under /tmp/teodor-*.png. See task completion report for run results. Field performance, real delivery, Safari and Firefox are not measured by this suite.
