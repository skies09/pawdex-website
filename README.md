# PawDex Landing Page

Marketing site for the PawDex dog health tracking app. Visuals match the mobile app theme (teal primary, warm surface, Poppins + Inter).

Design tokens, layout rules, and component guidance live in [`DESIGN.md`](./DESIGN.md).

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

## Before launch

1. Set App Store / Play Store URLs in `src/config.ts` (`storeLinks`).
2. Set `comingSoon={false}` on `<StoreButtons />` in `Hero`, `Navbar`, and `Download` (or flip the default in `StoreButtons.tsx`).
3. Add `public/assets/qr-code.png` and set `qrReady` to `true` in `src/config.ts`.
4. Point privacy / support links in `src/config.ts` to your hosted legal pages (siblings live in `../store/`).

## Build

```bash
npm run build
npm run preview
```
