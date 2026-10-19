# Lunari 2.0 — PWA

A purple, offline-friendly mood journal and calendar built with plain HTML, CSS, and JavaScript. No build step or package installation is required.

## Run locally

For service-worker/offline behavior, serve the folder through `localhost` or HTTPS. For example, if Python is installed:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`. Opening `index.html` directly as a `file://` URL will not enable service workers or PWA installation.

## Deploy to GitHub Pages

Upload the contents of this folder to the repository's publishing root and commit/push. GitHub Pages serves the app over HTTPS. If the project is published from a subfolder, keep all files together in that folder so relative paths remain valid.

## Included

- Midnight-purple responsive interface with sidebar navigation
- Daily mood check-ins and interactive monthly mood calendar
- Journal form using a real `<form>` and `<button type="submit">`; submission persists to the selected date, clears the editor after success, and supports editing
- Search/filter by text, mood, and tag
- Journal tags, photo attachments, gratitude entries, prompts, pinned memories, and “on this day” entries
- Mood insights, gentle streak tracking, and personal goals
- Archive and trash with restore/permanent delete actions
- JSON backup/import and TXT journal export
- Theme/spacing/reduced-motion settings
- Optional casual PIN screen, with explicit privacy limitation
- Notification permission test (not a scheduled reminder service)
- Web app manifest, SVG icon, service worker, offline app shell, and versioned cache

## Storage and privacy notes

All data is stored in the current browser's localStorage. It does not sync between devices and may be lost if browser/site data is cleared. Export backups regularly. Photos are stored as data URLs and are limited to 2 MB per selected image to reduce the risk of filling browser storage.

The optional PIN is a casual screen lock only. It is not encryption; someone with access to browser storage or developer tools can access locally stored data. Do not store highly sensitive information in this version.

Browser notifications do not constitute a reliable scheduled reminder system; no server or background scheduler is included. PWA installation and offline caching require HTTPS or localhost, and offline use starts after the app shell has been cached once.

## Validation

The JavaScript is intended for modern browsers. Run `node --check app.js` to validate syntax. Browser-level interaction and device-specific PWA installation still need to be tested on the target browser/device.
