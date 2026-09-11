export type WheelPackage = {
  slug: string;
  name: string;
  price: number;
  compareAt?: number;
  badge: string;
  image: string;
  includes: string[];
  blurb: string;
  href: string;
};

export const packages: WheelPackage[] = [
  {
    slug: "donk-king",
    name: "Donk King Package",
    price: 2899,
    compareAt: 3299,
    badge: "26\" READY",
    image: "/donk-purple-caprice.png",
    includes: [
      "Set of 26\" chrome dubs (demo SKU)",
      "Mount + road-force balance",
      "TPMS reset",
      "Same-week shop appointment",
    ],
    blurb: "Purple-caprice energy. Big chrome, tall sidewall, loud stance.",
    href: "/shop/donk-king-scraper-26",
  },
  {
    slug: "ss-chrome-dubs",
    name: "Impala SS Chrome Dubs",
    price: 2199,
    compareAt: 2499,
    badge: "SS FITMENT",
    image: "/donk-red-impala.png",
    includes: [
      "Impala SS Mesh 22s + gold lip",
      "5x127 adapters if needed",
      "Mount & balance",
      "Alignment check",
    ],
    blurb: "Red SS gallery spec. Chrome mesh, gold ring, night-city backdrop.",
    href: "/shop/impala-ss-mesh",
  },
  {
    slug: "oaktown-flake",
    name: "Oaktown Flake Package",
    price: 2599,
    badge: "GOLD",
    image: "/donk-black-gold.png",
    includes: [
      "Yayo Gold Lip or Gas Station Gold",
      "Black/gold hardware kit",
      "Mount + balance",
      "Photo-lot wipe-down",
    ],
    blurb: "Black flake + gold multi-spoke. The Buick in the mural.",
    href: "/shop/yayo-gold-lip",
  },
  {
    slug: "scraper-daily",
    name: "Scraper Daily",
    price: 1499,
    compareAt: 1699,
    badge: "20–22\"",
    image: "/rim-chrome.png",
    includes: [
      "East 14th 20s or Town Scraper 22s",
      "Chrome lug kit",
      "Mount + balance",
      "Slam-friendly offset consult",
    ],
    blurb: "The Oakland default. Chrome, lip, and a car that still drives to work.",
    href: "/shop/town-scraper-22",
  },
  {
    slug: "thizz-night",
    name: "Thizz Night Package",
    price: 1999,
    badge: "PURPLE",
    image: "/hero-mural.png",
    includes: [
      "Thizz Deep Dish or Thizzelle Purple Spin",
      "Purple/gold valve stems",
      "Night-lot photo",
      "Financing pre-check (demo)",
    ],
    blurb: "Purple, gold, chrome. The mural on four corners.",
    href: "/shop/thizz-deep-dish",
  },
  {
    slug: "hyphy-forged-set",
    name: "Hyphy Forged Set",
    price: 3499,
    badge: "FORGED",
    image: "/rim-black-gold.png",
    includes: [
      "Hyphy Forged 20/22 set of four",
      "Gold hardware",
      "Lightweight mount",
      "Shop inspection",
    ],
    blurb: "Lighter blanks, gold lip, club-lot flex without the cast weight.",
    href: "/shop/hyphy-forged",
  },
];
