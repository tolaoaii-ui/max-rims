# MAX RIMS

Oakland / Bay Area urban rim shop site for **Max** — chrome, gold, scrapers, donks, and a pay-over-time apply flow.

Built with **Next.js (App Router)**, **TypeScript**, and **Tailwind CSS**. Ready to import on [Vercel](https://vercel.com/).

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build
npm start
```

## Pages

| Route | What it is |
| --- | --- |
| `/` | Hero carousel, ready-to-ship cards, donk gallery, packages, financing CTA, tribute wall |
| `/shop` | Demo catalog (~23 SKUs) with filters |
| `/shop/[slug]` | Product detail + monthly estimate |
| `/packages` | Donk / SS / scraper / forged bundles |
| `/gallery` | Featured donks with rim specs |
| `/financing` | Pay-over-time + lender outbound links |
| `/apply` | Demo apply form (client-side success) |
| `/contact` | Call / text / IG / email placeholders |
| `/about` | Shop story + original graffiti tribute wall |

## Demo disclaimer

**This is a concept / demo site.** Inventory names, prices, offsets, financing math, hours, and the phone number are fictional placeholders so Max can show the brand.

- Phone: `(510) 555-0199`
- Instagram: `[@maxrims_oakland](https://instagram.com/maxrims_oakland)`
- Email: `max@maxrims.demo`
- Apply form does **not** submit to a server or run a credit check
- Lender links are public marketing pages: [Affirm](https://www.affirm.com/), [Affirm merchants](https://www.affirm.com/business/partners/join), [Progressive Leasing](https://progleasing.com/), [Synchrony](https://www.synchrony.com/)

Tribute wall lettering is original stylized type (Mac Dre / Thizz, E-40, Too Short, Keek da Sneek). No portraits and no scraped photos of real people.

## Deploy on Vercel

1. Push this repo to GitHub
2. [Import the project](https://vercel.com/new) — framework preset is Next.js
3. Leave build command as `next build`

No environment variables are required for the demo.
