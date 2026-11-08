# Reference-inspired redesign

The active business website now uses `index.html`, `styles.css`, `cinematic.css`, `app.js` and `motion.js`. The previously imported reference runtime and iframe driver are no longer loaded by the homepage. Older captured assets and adaptation utilities remain in the repository as pre-existing archival material; they are not dependencies of the redesign.

See [REDESIGN-NOTES.md](REDESIGN-NOTES.md) for the audit, verified reference evidence, motion architecture, adaptations and validation results.

Preview: `python3 -m http.server 8017 --bind 127.0.0.1`.
Browser checks: `node tools/check-cinematic.cjs` (Node 22+ and Chrome).
