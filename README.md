# VLuck Labs V6 OMEGA — 3D Premium

Official domain: https://vlucklabs.xyz  
Business email: founder@vlucklabs.xyz

V6 OMEGA is a controlled visual/interaction upgrade of the existing static VLuck Labs website. It preserves the business identity, product positioning, major sections, legal pages, and GitHub → Vercel deployment model.

## Deployment
1. Extract `VLuck_Labs_V6_OMEGA_3D_Premium.zip`.
2. Open the existing GitHub repository: `vluck-labs-website`.
3. Choose **Add file → Upload files**.
4. Upload/replace the supplied files at the repository root.
5. Commit directly to the `main` branch.
6. Existing Vercel integration will redeploy automatically.
7. No DNS changes are required.

## Critical DNS lock
**DO NOT CHANGE ZOHO MX RECORDS.**  
**DO NOT CHANGE SPF/DKIM RECORDS.**  
**DO NOT CHANGE THE VERCEL A RECORD.**  
**DO NOT MODIFY DOMAIN DNS CONFIGURATION.**

## Technical approach
- Static HTML/CSS/native JavaScript only
- CSS 3D first; no WebGL / Three.js / framework / package manager
- Pointer effects only on fine-pointer desktop contexts
- Mobile and touch simplification
- `prefers-reduced-motion` support
- Progressive enhancement: core content remains visible without JavaScript
- No external runtime dependencies or trackers

## Product honesty
The hero dashboard is explicitly labeled **CONCEPT UI** and **Illustrative product interface • Product currently in development**. Interface numbers are concept/demo UI values, not company traction.
