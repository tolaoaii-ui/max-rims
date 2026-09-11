import Link from "next/link";
import { nav, site } from "@/lib/site";
import { GoldChain } from "./GoldChain";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-gold/20 bg-black">
      <GoldChain />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-4">
        <div className="md:col-span-2">
          <p className="font-bang text-3xl gold-text">MAX RIMS</p>
          <p className="mt-2 font-marker text-lg text-purple">Oakland / Bay Area urban rim shop</p>
          <p className="mt-4 max-w-md text-sm text-chrome/80">{site.tagline}</p>
          <p className="mt-6 text-sm text-gold">{site.phoneDisplay}</p>
          <p className="text-sm">
            <a className="hover:text-gold" href={`mailto:${site.email}`}>
              {site.email}
            </a>
          </p>
          <p className="text-sm">
            <a className="hover:text-gold" href={site.instagramUrl} target="_blank" rel="noreferrer">
              {site.instagram}
            </a>
          </p>
        </div>
        <div>
          <p className="font-display text-xl uppercase text-gold">Shop</p>
          <ul className="mt-3 space-y-2 text-sm text-chrome/80">
            {nav.map((item) => (
              <li key={item.href}>
                <Link className="hover:text-gold" href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link className="hover:text-gold" href="/apply">
                Apply
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p className="font-display text-xl uppercase text-gold">Hours</p>
          <p className="mt-3 text-sm text-chrome/80">{site.hours}</p>
          <p className="mt-3 text-sm text-chrome/80">{site.locationLabel}</p>
          <p className="text-sm text-chrome/60">{site.locationLine}</p>
        </div>
      </div>
      <div className="border-t border-gold/15 px-4 py-5 text-center text-xs leading-relaxed text-chrome/55">
        {site.demoDisclaimer}
      </div>
    </footer>
  );
}
