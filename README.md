# 1977 F-150 Build

A self-contained build tracker for a 1977 Ford F-150 4x4 with a 460 swap. Jobs by system, parts and prices, shops and quotes, photos, a log and plain-language guides.

All data stays in the browser on the device you use. Use Help > Back up your build to save or move it.

## Put it on GitHub Pages
1. Create a new public repository, for example `f150-build`.
2. Upload every file in this folder to the top level of the repository: `index.html`, `manifest.webmanifest`, `sw.js`, and the three PNG icons.
3. In the repository go to Settings > Pages. Under Source pick "Deploy from a branch", choose `main` and `/ (root)`, then Save.
4. After a minute the app is live at `https://<your-username>.github.io/f150-build/`.

## Catalog pictures
The `catalog` folder holds the LMC catalog pages the app shows when you tap See the catalog picture. Upload the whole folder next to `index.html`. If the folder is missing the app still works and sends you to LMC's online catalog instead.

## Install it on your phone
- iPhone: open the link in Safari, tap Share, then Add to Home Screen.
- Android: open the link in Chrome, tap the menu, then Install app.

## Updating
Installed copies fetch a fresh `index.html` whenever the phone is online, so uploading the new file is all an update takes. Only bump the version in `sw.js` if you change the icons or manifest.
