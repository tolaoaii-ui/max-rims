"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const slides = [
  {
    src: "/hero-mural.png",
    alt: "MAX RIMS mural with chrome rim, THIZZ and OAKTOWN graffiti",
    kicker: "OAKTOWN · THIZZ · CHROME",
    title: "MAX RIMS",
    body: "Oakland chrome, gold lips, donk height. The shop Max built for the Bay.",
  },
  {
    src: "/donk-purple-caprice.png",
    alt: "Purple donked Caprice on huge chrome wheels at night",
    kicker: "DONK KING",
    title: "26s IN THE RAIN",
    body: "Candy purple Caprice on chrome dubs. Gallery car. Package-ready.",
  },
  {
    src: "/donk-red-impala.png",
    alt: "Red donked Impala SS on chrome wheels with gold lip",
    kicker: "IMPALA SS",
    title: "CHROME + GOLD LIP",
    body: "SS after dark. Mesh face, gold ring, city lights.",
  },
  {
    src: "/donk-black-gold.png",
    alt: "Black and gold flake donked Buick in Oakland",
    kicker: "OAKLAND SIGN",
    title: "FLAKE + GOLD",
    body: "Black flake Buick, gold multi-spoke, Town business.",
  },
];

export function HeroCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5600);
    return () => window.clearInterval(id);
  }, []);

  const slide = slides[index];

  return (
    <section className="relative min-h-[86vh] overflow-hidden bg-black">
      {slides.map((item, i) => (
        <Image
          key={item.src}
          src={item.src}
          alt={item.alt}
          fill
          priority={i === 0}
          className={`object-cover transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          sizes="100vw"
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/70 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/30" />

      <div className="relative z-10 mx-auto flex min-h-[86vh] max-w-7xl flex-col justify-end px-4 pb-16 pt-28">
        <p className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/40 bg-black/50 px-3 py-1 font-bang text-[11px] tracking-[0.35em] text-gold uppercase">
          {slide.kicker}
        </p>
        <h1 className="mt-4 max-w-4xl font-display text-7xl leading-[0.82] uppercase sm:text-9xl">
          <span className="gold-text">{slide.title}</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-pretty text-chrome/90 sm:text-xl">{slide.body}</p>
        <p className="mt-4 font-display text-3xl uppercase text-white sm:text-4xl">
          <a href={`tel:${site.phoneTel}`} className="hover:text-gold">
            {site.phoneDisplay}
          </a>
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/packages"
            className="rounded-full bg-gold px-6 py-3 text-sm font-black tracking-wide text-black uppercase"
          >
            Rim & tire packages
          </Link>
          <Link
            href="/shop"
            className="rounded-full border border-white/30 px-6 py-3 text-sm font-black tracking-wide text-white uppercase"
          >
            Shop chrome
          </Link>
          <a
            href={`tel:${site.phoneTel}`}
            className="rounded-full bg-purple-deep px-6 py-3 text-sm font-black tracking-wide text-gold uppercase"
          >
            Call now
          </a>
        </div>
        <div className="mt-8 flex gap-2">
          {slides.map((item, i) => (
            <button
              key={item.src}
              type="button"
              aria-label={`Show slide ${i + 1}`}
              className="hero-dot"
              data-active={i === index}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
