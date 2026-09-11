import type { Metadata } from "next";
import Image from "next/image";
import { TributeWall } from "@/components/TributeWall";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Max Rims",
  description: "Oakland / Bay Area urban rim shop — MAX RIMS origin story and tribute wall.",
};

export default function AboutPage() {
  return (
    <>
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 lg:grid-cols-2">
        <div>
          <p className="font-bang text-sm tracking-[0.3em] text-gold uppercase">About</p>
          <h1 className="mt-2 font-display text-5xl uppercase text-white sm:text-7xl">
            Max. Oakland. Chrome.
          </h1>
          <div className="mt-6 space-y-4 text-chrome/80">
            <p>
              MAX RIMS is the concept shop for Max — an Oakland / Bay Area floor that treats wheels
              like culture, not accessories. Scrapers, donks, forged gold, deep-dish chrome. The
              inventory on this site is demo fiction so the brand can be shown off before the first
              real pallet lands.
            </p>
            <p>
              The look is hyphy on purpose: purple, gold, black, chrome, Bay Bridge wire, gold
              chains, boombox, and a tribute wall of original graffiti lettering. No scraped photos
              of real people. No stolen murals.
            </p>
            <p>
              When the shop is live, this page is where the hours, the lift, and the mounting
              stories go. Until then, call the demo line or apply like a customer would.
            </p>
          </div>
          <p className="mt-6 font-marker text-2xl text-purple">{site.tagline}</p>
        </div>
        <div className="relative aspect-square overflow-hidden rounded-3xl border border-gold/20">
          <Image
            src="/hero-mural.png"
            alt="MAX RIMS mural with chrome rim and Oaktown graffiti"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
      </div>
      <TributeWall />
    </>
  );
}
