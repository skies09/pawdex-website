# pawdex-website

Marketing site for the [PawDex](https://pawdex-app.web.app) dog health tracking app. Visuals match the mobile app theme (teal primary, warm surface, Poppins + Inter).

Design tokens, layout rules, and component guidance live in [`DESIGN.md`](./DESIGN.md).

## Stack

- React + TypeScript (Vite)
- Tailwind CSS
- Framer Motion
- React Router
- Firebase Hosting

## Pages

- `/` — marketing landing
- `/privacy` — privacy policy
- `/support` — support & contact
- `/legal` — legal & medical disclaimer

Copy for those pages lives in `src/content/legal.ts` (keep in sync with the app’s `legal.ts` and `store/*.html`).

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Deploy (Firebase Hosting)

Requires the [Firebase CLI](https://firebase.google.com/docs/cli) (`npm i -g firebase-tools`) and `firebase login`.

```bash
npm run build
firebase deploy --only hosting
```

Hosting serves the Vite `dist` folder as a SPA (all routes rewrite to `/index.html`). Project: `pawdex-app`.

## Before launch

1. Set App Store / Play Store URLs in `src/config.ts` (`storeLinks`).
2. Set `comingSoon={false}` on `<StoreButtons />` in `Hero`, `Navbar`, and `Download` (or flip the default in `StoreButtons.tsx`).
3. Add `public/assets/qr-code.png` and set `qrReady` to `true` in `src/config.ts`.
4. Point privacy / support links in `src/config.ts` to your hosted legal pages.
