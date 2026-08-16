# VLuck Labs Website V7 — Production

Production-ready React + Vite website for VLuck Labs / LuckForge AI.

## Stack
- React 19
- Vite 8
- Tailwind CSS 4
- React Router
- Vercel

## Local development
```bash
pnpm install
pnpm dev
```

## Production build
```bash
pnpm install
pnpm build
```

The build output is generated in `dist/`.

## Vercel deployment
1. Upload these files to the root of the GitHub repository.
2. Commit to `main`.
3. Vercel should detect Vite automatically.
4. Build command: `pnpm build`
5. Output directory: `dist`
6. `vercel.json` provides SPA fallback for `/privacy`, `/terms`, and the React 404 route.

## Domain
Production domain: `https://vlucklabs.xyz`

No DNS changes are required for this website code update. Keep the existing domain/email DNS records unchanged.

## Production files added
- `public/robots.txt`
- `public/sitemap.xml`
- `public/favicon.svg`
- `vercel.json`

## Notes
- Search indexing is allowed.
- Canonical homepage URL is `https://vlucklabs.xyz/`.
- Privacy and Terms routes are included.
- No analytics or tracking scripts were added.
