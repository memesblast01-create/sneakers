# OUTSOLE — Model 01 "Vector"

A responsive 3D product landing page built around the sneaker model in
`public/models/scene-optimized.glb`. React + Vite + react-three-fiber, no
local install required to deploy.

## What's inside

- **Hero** — full-bleed intro with a drag-to-rotate 3D viewer and a running
  spec ticker.
- **Studio** (`#anatomy` / `#colorways` / `#materials`) — a sticky 3D viewer
  on the left; scrolling the panel on the right rotates the shoe to each
  part, and clicking a colorway swatch retints the model live.
- **Waitlist** — closing CTA with a simple email form (front-end only, no
  backend wired up).

## Design system

- Display face: **Big Shoulders** (condensed, stencil-like — the industrial/
  factory-stamp voice for headlines).
- Body: **Inter**. Technical labels/specs: **IBM Plex Mono**.
- Palette: warm stone (`#EDEAE3`) and graphite (`#15161A`) sections, with
  safety orange (`#FF5A1F`) as the single accent and a blueprint blue
  (`#3A5A80`) for the technical/schematic touches.

All tokens live at the top of `src/styles.css` if you want to retheme.

## Deploying (matches a GitHub-web-editor + Vercel workflow, no local install)

1. Push this whole folder to a new GitHub repo (you can drag-and-drop the
   files straight into the GitHub web UI — `github.com/new` → "uploading an
   existing file").
2. In Vercel, "Add New Project" → import that repo. Vercel auto-detects
   Vite: build command `npm run build`, output directory `dist`. No config
   needed.
3. Deploy. Every push to `main` will auto-redeploy.

## Running locally (optional)

```
npm install
npm run dev
```

## Swapping in a different model or colorways

- Model: replace `public/models/scene-optimized.glb` (keep the same
  filename, or update `MODEL_URL` in `src/components/SneakerModel.jsx`).
  The viewer auto-centers and auto-scales whatever you drop in.
- Colorways: edit the `COLORWAYS` array in `src/components/Studio.jsx` —
  each tint is a straight color multiply over the model's existing
  textures, so high-contrast source textures tint most convincingly.
- Anatomy callouts: edit the `PARTS` array in the same file (label, the
  rotation angle to face the camera, description, spec line).
