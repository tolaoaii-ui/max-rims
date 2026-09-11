export const site = {
  name: "MAX RIMS",
  tagline: "Oakland chrome. Bay Area dubs. Town business.",
  seoTitle: "Max Rims | Oakland Chrome & Custom Wheels",
  description:
    "MAX RIMS is an Oakland / Bay Area urban rim shop for chrome, gold, forged, scraper, and donk wheels. Demo catalog with pay-over-time apply flow.",
  phoneDisplay: "(510) 555-0199",
  phoneTel: "+15105550199",
  email: "max@maxrims.demo",
  instagram: "@maxrims_oakland",
  instagramUrl: "https://instagram.com/maxrims_oakland",
  hours: "Tue–Sat 11am–7pm · Sun by appointment",
  locationLabel: "East Oakland shop floor (demo address)",
  locationLine: "International Blvd corridor · Oakland, CA 94601",
  demoDisclaimer:
    "DEMO SITE — inventory, prices, financing terms, and contact details are fictional placeholders for Max’s MAX RIMS concept. No real orders, credit checks, or lender applications are processed here.",
} as const;

export const nav = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/packages", label: "Packages" },
  { href: "/gallery", label: "Gallery" },
  { href: "/financing", label: "Financing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export function money(n: number) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(n);
}

export function monthlyFrom(price: number, months = 36) {
  return Math.max(29, Math.round(price / months));
}
