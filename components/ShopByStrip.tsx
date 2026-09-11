import Image from "next/image";
import Link from "next/link";

const tiles = [
  { href: "/shop?size=20%22", label: "20\"", detail: "Daily scraper", image: "/rims/scraper-20.svg" },
  { href: "/shop?size=22%22", label: "22\"", detail: "Town default", image: "/rim-chrome.png" },
  { href: "/shop?size=24%22", label: "24\"", detail: "Boulevard lip", image: "/rims/scraper-24.svg" },
  { href: "/shop?size=26%22", label: "26\"", detail: "Donk height", image: "/donk-purple-caprice.png" },
  { href: "/shop?finish=Black%20/%20Gold", label: "Forged gold", detail: "Hyphy blanks", image: "/rim-black-gold.png" },
  { href: "/packages", label: "Packages", detail: "Rim + tire sets", image: "/donk-red-impala.png" },
];

export function ShopByStrip() {
  return (
    <section className="border-b border-gold/15 bg-black py-10">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
          <div>
            <p className="font-bang text-xs tracking-[0.28em] text-gold uppercase">Shop by size / vibe</p>
            <h2 className="font-display text-3xl uppercase text-white sm:text-4xl">Pick a lane</h2>
          </div>
          <Link href="/shop" className="text-xs font-black tracking-wide text-gold uppercase">
            Full catalog →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {tiles.map((tile) => (
            <Link
              key={tile.href + tile.label}
              href={tile.href}
              className="group overflow-hidden rounded-xl border border-gold/20 bg-[#0b0910]"
            >
              <div className="relative aspect-square bg-black">
                <Image
                  src={tile.image}
                  alt={tile.label}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="160px"
                  unoptimized={tile.image.endsWith(".svg")}
                />
              </div>
              <div className="px-3 py-3">
                <p className="font-display text-2xl uppercase text-gold">{tile.label}</p>
                <p className="text-[11px] tracking-wide text-chrome/60 uppercase">{tile.detail}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
