"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { site } from "@/lib/site";

const slides = [
  {
    src: "/donk-purple-caprice.png",
    alt: "Purple donked Caprice on huge chrome wheels at night",
    kicker: "26\" DONK PACKAGES",
    title: "26s IN THE RAIN",
    body: "Candy purple Caprice on chrome dubs. The MAX RIMS donk brief — not a truck catalog.",
    cta: "/packages",
    ctaLabel: "Donk packages",
  },
  {
    src: "/rim-black-gold.png",
    alt: "Black and gold multi-spoke forged-style rim",
    kicker: "FORGED / GOLD LIP",
    title: "HYPHY FORGED",
    body: "Big-face gold hardware. Club-lot energy with Oakland paint, not off-road copies.",
    cta: "/shop/hyphy-forged",
    ctaLabel: "See Hyphy Forged",
  },
  {
    src: "/donk-red-impala.png",
    alt: "Red donked Impala SS on chrome wheels with gold lip",
    kicker: "SS CHROME DUBS",
    title: "CHROME + GOLD LIP",
    body: "Impala SS after dark. Mesh face, gold ring, city lights.",
    cta: "/packages",
    ctaLabel: "SS package",
  },
  {
    src: "/hero-mural.png",
    alt: "MAX RIMS mural with chrome rim, THIZZ and OAKTOWN graffiti",
    kicker: "OAKTOWN · THIZZ · CHROME",
    title: "MAX RIMS",
    body: "Oakland chrome, gold lips, donk height. The shop Max built for the Bay.",
    cta: "/shop",
    ctaLabel: "Shop chrome",
  },
  {
    src: "/donk-black-gold.png",
    alt: "Black and gold flake donked Buick in Oakland",
    kicker: "OAKLAND FLAKE",
    title: "FLAKE + GOLD",
    body: "Black flake Buick, gold multi-spoke, Town business.",
    cta: "/gallery",
    ctaLabel: "See the builds",
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
  const go = (dir: number) => setIndex((current) => (current + dir + slides.length) % slides.length);

  return (
    <section className="relative min-h-[88vh] overflow-hidden bg-black">
      {slides.map((item, i) => (
        <Image
          key={item.src}
          src={item.src}
          alt={item.alt}
          fill
          priority={i === 0}
          className={`object-cover object-center transition-opacity duration-700 ${i === index ? "opacity-100" : "opacity-0"}`}
          sizes="100vw"
        />
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-transparent" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-black/25" />

      <button
        type="button"
        aria-label="Previous slide"
        onClick={() => go(-1)}
        className="absolute top-1/2 left-3 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-gold/50 bg-black/50 font-display text-2xl text-gold md:grid"
      >
        ‹
      </button>
      <button
        type="button"
        aria-label="Next slide"
        onClick={() => go(1)}
        className="absolute top-1/2 right-3 z-20 hidden h-12 w-12 -translate-y-1/2 place-items-center rounded-full border border-gold/50 bg-black/50 font-display text-2xl text-gold md:grid"
      >
        ›
      </button>

      <div className="relative z-10 mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-end px-4 pb-14 pt-28">
        <p className="font-bang text-xs tracking-[0.4em] text-gold uppercase">{slide.kicker}</p>
        <h1 className="mt-3 max-w-5xl font-display text-6xl leading-[0.8] uppercase sm:text-8xl lg:text-[7.5rem]">
          <span className="gold-text">{slide.title}</span>
        </h1>
        <p className="mt-5 max-w-xl text-lg text-pretty text-white sm:text-xl">{slide.body}</p>
        <a
          href={`tel:${site.phoneTel}`}
          className="mt-5 inline-flex w-fit items-center gap-3 rounded-sm bg-gold px-4 py-2 font-display text-2xl uppercase text-black sm:text-3xl"
        >
          CALL {site.phoneDisplay}
        </a>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={slide.cta}
            className="rounded-sm bg-white px-6 py-3 text-sm font-black tracking-wide text-black uppercase"
          >
            {slide.ctaLabel}
          </Link>
          <Link
            href="/packages"
            className="rounded-sm bg-gold px-6 py-3 text-sm font-black tracking-wide text-black uppercase"
          >
            Rim & tire packages
          </Link>
          <Link
            href="/apply"
            className="rounded-sm border border-white/40 px-6 py-3 text-sm font-black tracking-wide text-white uppercase"
          >
            Apply / finance
          </Link>
        </div>
        <div className="mt-8 flex items-center gap-3">
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
          <span className="ml-2 text-xs tracking-[0.2em] text-chrome/60 uppercase">
            {String(index + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
          </span>
        </div>
      </div>
    </section>
  );
}
