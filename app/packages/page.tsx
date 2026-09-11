import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { packages } from "@/lib/packages";
import { monthlyFrom, money } from "@/lib/site";

export const metadata: Metadata = {
  title: "Wheel Packages",
  description: "Donk, SS, scraper, and forged packages with mount — demo bundles for MAX RIMS.",
};

export default function PackagesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14">
      <p className="font-bang text-sm tracking-[0.3em] text-gold uppercase">Packages</p>
      <h1 className="mt-2 font-display text-5xl uppercase text-white sm:text-7xl">
        Pull up as a set
      </h1>
      <p className="mt-4 max-w-2xl text-chrome/70">
        Wheels, mount, and the stance already called. Demo prices. Monthly estimates route to
        financing.
      </p>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {packages.map((item) => (
          <article
            key={item.slug}
            className="overflow-hidden rounded-3xl border border-gold/20 bg-black"
          >
            <div className="relative h-64">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 text-xs font-black text-black">
                {item.badge}
              </span>
            </div>
            <div className="p-6">
              <h2 className="font-display text-3xl uppercase text-white">{item.name}</h2>
              <p className="mt-2 text-chrome/75">{item.blurb}</p>
              <p className="mt-4 text-3xl font-black text-gold">
                {money(item.price)}
                {item.compareAt ? (
                  <span className="ml-3 text-lg font-normal text-chrome/40 line-through">
                    {money(item.compareAt)}
                  </span>
                ) : null}
              </p>
              <p className="mt-1 text-sm text-purple">
                or from{" "}
                <Link href="/financing" className="underline decoration-gold/50">
                  {money(monthlyFrom(item.price))}/mo*
                </Link>
              </p>
              <ul className="mt-5 space-y-2 text-sm text-chrome/80">
                {item.includes.map((line) => (
                  <li key={line}>▸ {line}</li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  href={item.href}
                  className="rounded-full bg-gold px-5 py-2 text-sm font-black text-black uppercase"
                >
                  See the wheel
                </Link>
                <Link
                  href="/apply"
                  className="rounded-full border border-gold/40 px-5 py-2 text-sm font-black text-gold uppercase"
                >
                  Apply
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
