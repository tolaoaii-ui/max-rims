import Link from "next/link";
import { shopServices } from "@/lib/services";

export function ServicesGrid() {
  return (
    <section className="border-y border-gold/15 bg-black py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="font-bang text-xs tracking-[0.28em] text-gold uppercase">Shop services</p>
            <h2 className="font-display text-4xl uppercase text-white sm:text-5xl">
              Packages. Mount. Chrome.
            </h2>
          </div>
          <Link
            href="/contact"
            className="rounded-sm bg-gold px-5 py-2 text-xs font-black tracking-wide text-black uppercase"
          >
            Book a shop visit
          </Link>
        </div>
        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {shopServices.map((service, index) => (
            <Link
              key={service.title}
              href={service.href}
              className="flex gap-4 rounded-xl border border-gold/20 bg-[#0b0910] p-5 transition hover:border-gold"
            >
              <span className="font-display text-3xl text-gold">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span>
                <span className="block font-display text-2xl uppercase text-white">{service.title}</span>
                <span className="mt-1 block text-sm text-chrome/70">{service.detail}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
