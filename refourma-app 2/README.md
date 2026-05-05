# re:Fourma — MVP Prototype

Investor-ready clickable prototype. Twenty-four frames across six chapters, mobile-first, on Next.js 14.

## Quick start

### Option 1: StackBlitz (60 seconds, no install)

1. Go to https://stackblitz.com/fork/github/REPLACE-WITH-YOUR-GITHUB-PATH
   (or upload this folder via "New Project → Upload")
2. Wait for `npm install` (StackBlitz does it automatically)
3. The prototype opens at the preview URL on the right

### Option 2: CodeSandbox

1. Go to https://codesandbox.io
2. Click "Create" → "Import from GitHub" or "Upload"
3. CodeSandbox detects Next.js automatically

### Option 3: Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## What this is

This is a visual prototype that demonstrates the full re:Fourma flow on a phone screen — from AI Discovery to Network. No real backend, no real APIs. AI-chat replies are scripted. KYC, payments, and legal flows are visual only.

The point is to show investors and stakeholders what the product feels like, before committing to a full build.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS 3** for styling
- **React 18** — stable
- Static data only — see `src/data/projects.ts`

## Getting started

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Project structure

```
src/
  app/
    layout.tsx          ← Root HTML layout, Google Fonts loaded here
    page.tsx            ← Main page: assembles TopBar + Sidebar + Phone
    globals.css         ← Design tokens (palette, fonts) + base styles
  components/
    phone/
      PhoneFrame.tsx    ← iPhone bezel with notch, status bar, home indicator
      Atoms.tsx         ← Reusable: NavRow, Eyebrow, Title, CTA, Canvas
      FrameRouter.tsx   ← Picks which Frame to render based on currentFrame
    screens/
      Frame01_Intake.tsx     ← Built
      Frame02_Match.tsx      ← Built
      Frame03_Read.tsx       ← Built
      Frame04_Choose.tsx     ← Built
      Frame05_Discover.tsx   ← TODO
      ... (24 total)
    layout/
      TopBar.tsx        ← Sticky header with frame counter and nav arrows
      Sidebar.tsx       ← Chapter/frame navigation for jumping
  lib/
    nav.tsx             ← NavProvider context: currentFrame, goTo, next, prev
  data/
    projects.ts         ← Single source of truth: projects, fractions, etc.
public/
  images/
    exterior-night.jpg  ← N-04 Pagano hero photo
    floorplan-pp00.jpg  ← Ground floor plan
    floorplan-pp01.jpg  ← Upper floor plan
```

## How frames work

1. `NavProvider` (in `lib/nav.tsx`) holds `currentFrame` state (1–24).
2. `FrameRouter` picks which `Frame##_Name.tsx` component to render.
3. Each frame uses `useNav()` to call `next()`, `prev()`, or `goTo(id)` on user action.
4. Buttons inside frames trigger navigation. Most CTAs call `next()` by default.

## Adding a new frame

1. Create `src/components/screens/FrameXX_Name.tsx`. Copy structure from existing frame.
2. Add an entry in `FrameRouter.tsx`'s switch statement.
3. The frame's metadata is already in `data/projects.ts` under `CHAPTERS`.

## Dark frames

Frames 5, 14, 20, 24 use dark theme. The `Stage` component in `page.tsx` checks for these IDs and passes `dark` to `PhoneFrame`.

## Design system

All design tokens are CSS variables defined in `globals.css` under `@theme`:
- Colors: `--color-ink`, `--color-paper`, `--color-rust`, etc.
- Fonts: `--font-display` (Fraunces), `--font-body` (Inter), `--font-mono` (JetBrains Mono)

Use them via Tailwind arbitrary values: `text-[var(--color-rust)]` or via inline style for fonts.

## Deploy to Vercel

```bash
# from the project root, after pushing to GitHub:
vercel
```

Or import the repo via vercel.com — Next.js is auto-detected.

## What's NOT built yet

Frames 5–24 are stubs (placeholder screen with prev/next). Build them in priority order based on the storyboard at `/storyboard/refourma-v4.html` (visual reference for v.04).

## Visual reference

The full v.04 HTML storyboard is the source of truth for visual design. Open it side-by-side when implementing each frame to match palette, spacing, typography exactly.

## License

Private. © 2026 re:Fourma. All rights reserved.
