# Keshav Technocrats site
npm install && npm run dev
Set NEXT_PUBLIC_SITE_URL=https://your-domain.com before building (used for canonical, sitemap, Open Graph, JSON-LD).
Deploy: Vercel or any Node host. Then submit /sitemap.xml in Google Search Console and Bing Webmaster Tools.

## Production notes
- Env: copy `.env.example` to `.env.local`. Without `RESEND_API_KEY` the form API returns 503 and the browser falls back to the visitor's email app.
- Scripts: `npm run lint`, `npm run typecheck`, `npm run build`. Docker: `docker build --build-arg NEXT_PUBLIC_SITE_URL=https://your-domain.com -t kt .`
- Health check: `/api/health`. Rate limit is in-memory (single instance); use Redis/Upstash if you scale out.
- CSP allows inline scripts (needed by Next.js without nonces); a nonce-based CSP via middleware is stricter.
