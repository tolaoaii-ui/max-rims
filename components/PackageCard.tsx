import Image from "next/image";
import Link from "next/link";
import type { WheelPackage } from "@/lib/packages";
import { monthlyFrom, money } from "@/lib/site";

export function PackageCard({ item, featured = false }: { item: WheelPackage; featured?: boolean }) {
  return (
    <article
      className={`overflow-hidden rounded-3xl border border-gold/25 bg-black ${featured ? "lg:col-span-2" : ""}`}
    >
      <div className={`relative ${featured ? "h-80 sm:h-96" : "h-64"}`}>
        <Image
          src={item.image}
          alt={`${item.name} — ${item.vehicle}`}
          fill
          className="object-cover"
          sizes={featured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 50vw"}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
        <span className="absolute top-4 left-4 rounded-full bg-gold px-3 py-1 text-xs font-black text-black">
          {item.badge}
        </span>
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-[11px] font-bold tracking-[0.22em] text-gold uppercase">{item.vehicle}</p>
          <h3 className="font-display text-3xl uppercase text-white sm:text-4xl">{item.name}</h3>
        </div>
      </div>
      <div className="grid gap-4 p-5 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="text-sm text-chrome/80">{item.blurb}</p>
          <p className="mt-3 text-xs font-bold tracking-[0.18em] text-gold uppercase">
            {item.size} · {item.finish}
          </p>
          <ul className="mt-3 hidden space-y-1 text-sm text-chrome/70 sm:block">
            {item.includes.slice(0, 3).map((line) => (
              <li key={line}>▸ {line}</li>
            ))}
          </ul>
        </div>
        <div className="text-left sm:text-right">
          <p className="text-3xl font-black text-gold">
            {money(item.price)}
            {item.compareAt ? (
              <span className="ml-2 text-base font-normal text-chrome/40 line-through">
                {money(item.compareAt)}
              </span>
            ) : null}
          </p>
          <p className="text-sm text-purple">
            or from{" "}
            <Link href="/financing" className="underline decoration-gold/50">
              {money(monthlyFrom(item.price))}/mo*
            </Link>
          </p>
          <div className="mt-3 flex flex-wrap gap-2 sm:justify-end">
            <Link
              href={item.href}
              className="rounded-full bg-gold px-4 py-2 text-xs font-black text-black uppercase"
            >
              See the wheel
            </Link>
            <Link
              href="/apply"
              className="rounded-full border border-gold/40 px-4 py-2 text-xs font-black text-gold uppercase"
            >
              Apply
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
