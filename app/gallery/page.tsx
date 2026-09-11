import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { galleryShots } from "@/lib/gallery";

export const metadata: Metadata = {
  title: "Donk Gallery",
  description: "MAX RIMS vehicle gallery — purple Caprice, red Impala SS, black-gold Buick.",
};

export default function GalleryPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14">
      <p className="font-bang text-sm tracking-[0.3em] text-gold uppercase">Gallery</p>
      <h1 className="mt-2 font-display text-5xl uppercase text-white sm:text-7xl">
        Donks featured
      </h1>
      <p className="mt-4 max-w-2xl text-chrome/70">
        The three cars that define the shop: candy purple Caprice, red SS, black-gold flake Buick.
        Rim specs listed like a real wheel house. Original images — no stolen murals.
      </p>

      <div className="mt-12 space-y-16">
        {galleryShots.map((shot, index) => (
          <article
            key={shot.slug}
            className={`grid items-center gap-8 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>div:first-child]:order-2" : ""}`}
          >
            <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-gold/20">
              <Image
                src={shot.image}
                alt={`${shot.title} — ${shot.car}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={index === 0}
              />
            </div>
            <div>
              <p className="text-xs font-bold tracking-[0.22em] text-gold uppercase">
                {shot.car} · {shot.year}
              </p>
              <h2 className="mt-2 font-display text-4xl uppercase text-white">{shot.title}</h2>
              <p className="mt-4 text-lg text-chrome/80">{shot.story}</p>
              <p className="mt-4 font-marker text-xl text-purple">{shot.rim}</p>
              <p className="mt-2 text-sm tracking-wide text-chrome/60 uppercase">{shot.specs}</p>
              <Link
                href="/packages"
                className="mt-6 inline-block rounded-full bg-gold px-5 py-2 text-sm font-black text-black uppercase"
              >
                Build this package
              </Link>
            </div>
          </article>
        ))}
      </div>

      <section className="mt-20 overflow-hidden rounded-3xl border border-gold/20">
        <div className="relative min-h-[320px]">
          <Image
            src="/hero-mural.png"
            alt="MAX RIMS hero mural — chrome rim, THIZZ, OAKTOWN"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/45" />
          <div className="relative z-10 flex min-h-[320px] items-end p-8">
            <div>
              <p className="font-bang text-gold">MURAL WALL</p>
              <h2 className="font-display text-4xl uppercase text-white">MAX RIMS × OAKTOWN</h2>
              <p className="mt-2 max-w-lg text-sm text-chrome/85">
                Original chrome-rim skyline art. Boombox, gold chain, Bay Bridge wire. Not a photo
                of a real mural or a real person.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
