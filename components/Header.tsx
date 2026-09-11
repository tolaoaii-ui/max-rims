"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gold/25 bg-ink/90 backdrop-blur-md">
      <div className="bg-purple-deep px-3 py-1.5 text-center text-[11px] font-semibold tracking-[0.18em] text-gold uppercase sm:text-xs">
        Oakland · Bay Area · Chrome · Donks · Pay over time
      </div>
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
        <Link href="/" className="group flex items-center gap-2" onClick={() => setOpen(false)}>
          <span className="grid h-11 w-11 place-items-center rounded-full border-2 border-gold bg-black text-[10px] font-black tracking-tight text-gold">
            MR
          </span>
          <span className="leading-none">
            <span className="block font-bang text-xl tracking-wide gold-text sm:text-2xl">
              MAX RIMS
            </span>
            <span className="block font-marker text-xs text-purple">Oaktown chrome</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-5 lg:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-xs font-semibold tracking-[0.16em] text-chrome uppercase hover:text-gold"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <a
            href={`tel:${site.phoneTel}`}
            className="rounded-full bg-gold px-3 py-2 text-xs font-black tracking-wide text-black uppercase hover:bg-white"
          >
            {site.phoneDisplay}
          </a>
          <a
            href={`sms:${site.phoneTel}`}
            className="rounded-full border border-purple/50 px-3 py-2 text-xs font-bold tracking-wide text-purple uppercase hover:bg-purple hover:text-white"
          >
            Text
          </a>
          <Link
            href="/apply"
            className="rounded-full border border-gold/40 px-4 py-2 text-xs font-black tracking-wide text-gold uppercase hover:bg-gold hover:text-black"
          >
            Apply
          </Link>
        </div>

        <button
          type="button"
          className="grid h-11 w-11 place-items-center rounded-md border border-gold/40 text-gold lg:hidden"
          aria-expanded={open}
          aria-label="Open menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="font-bang text-lg">{open ? "X" : "="}</span>
        </button>
      </div>

      {open ? (
        <div className="border-t border-gold/20 bg-black px-4 py-4 lg:hidden">
          <div className="flex flex-col gap-3">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="font-display text-2xl uppercase text-white"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/apply"
              className="mt-2 rounded-full bg-gold py-3 text-center font-black text-black uppercase"
              onClick={() => setOpen(false)}
            >
              Apply for financing
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
