export type GalleryShot = {
  slug: string;
  title: string;
  car: string;
  year: string;
  image: string;
  rim: string;
  specs: string;
  story: string;
  featured: boolean;
};

export const galleryShots: GalleryShot[] = [
  {
    slug: "purple-caprice-donk",
    title: "Purple Rain Caprice",
    car: "Chevy Caprice",
    year: "Late-box",
    image: "/donk-purple-caprice.png",
    rim: "880 Chrome Dub / Donk King 26",
    specs: "26x10 chrome · 5x120.65 · +5 · Vogue-style rubber (demo)",
    story:
      "Candy purple, wet asphalt, chrome deep enough to see the streetlights twice. This is the MAX RIMS donk brief.",
    featured: true,
  },
  {
    slug: "red-impala-ss",
    title: "SS After Dark",
    car: "Impala SS",
    year: "’94–’96",
    image: "/donk-red-impala.png",
    rim: "Impala SS Mesh + gold pinstripe lip",
    specs: "22x8.5 chrome / gold lip · 5x127 · +20",
    story:
      "Red flake, gold ring, city in the background. The SS that still looks like a threat at a red light.",
    featured: true,
  },
  {
    slug: "black-gold-buick",
    title: "Oaktown Flake Buick",
    car: "Buick sedan",
    year: "G-body era",
    image: "/donk-black-gold.png",
    rim: "Yayo Gold Lip / Gas Station Gold",
    specs: "22x9 black/gold multi-spoke · 5x120.65 · +15",
    story:
      "Black flake paint, gold hardware, Oakland sign in the paint. The one that makes the mural make sense.",
    featured: true,
  },
];
