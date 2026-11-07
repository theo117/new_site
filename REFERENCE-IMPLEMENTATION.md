# Business content and reference animation

`index.html` is the business homepage. Its business copy, services, project descriptions, packages, monthly plan, FAQ, contact details, metadata, form fields and dialogs were restored from the original tracked homepage. `app.js` remains unchanged and powers the package finder, project dialogs, concept maker and enquiry review/send flow.

The reference animation runs separately in `en/scene/index.html`. `scene-only.css` hides that imported document's text and navigation and exposes only its primary WebGL canvas. `scene-driver.js` starts it silently and accepts same-origin messages from the business page. `scene-background.js` synchronizes its camera stages to the business sections. The original shaders, geometry and animated model remain local. Its 3D logo field uses this site's three portfolio images instead of the reference studio's client logos.

The business site retains its project images when WebGL is unavailable or reduced motion is requested. The animation document cannot replace or hydrate the business page DOM. A recoverable React hydration warning remains inside the imported animation runtime; it does not control the business content or forms.

Existing `/en/`, `/en/services/`, `/en/path/`, `/en/work/`, `/en/pensiero/` and `/en/lets-talk/` links redirect to the corresponding business section. `business.html` remains a recovery copy from before the content restoration.

Maintenance:
- Edit business content in `index.html` and interactions in `app.js`.
- `python3 tools/adapt-reference.py` regenerates only the isolated animation document. It cannot overwrite the business homepage or navigation pages.
- `tools/reference-source/` contains the imported reference server HTML, not business content.
- `python3 tools/adapt-project-reader.py` updates the reference's optional native project reader data.

Preview with `python3 -m http.server 8000 --bind 127.0.0.1`, then open `http://127.0.0.1:8000/`.

Verification: the original homepage text was compared with the restored page; the only removed text label is the navigation label “Selected work”, now “Projects”. All original form fields and values match. Browser checks cover all eight business sections, desktop/mobile overflow, three project dialogs, the app package recommendation, monthly-plan selection, concept attachment, enquiry review without submission, mobile navigation and the old Projects URL.
