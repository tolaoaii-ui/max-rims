import Image from "next/image";
import Link from "next/link";
import type { WheelPackage } from "@/lib/packages";
import { monthlyFrom, money, site } from "@/lib/site";

export function PackageCard({ item }: { item: WheelPackage }) {
  return (
    <article className="card-glow flex flex-col overflow-hidden rounded-2xl bg-[#0b0910]">
      <Link href={item.href} className="relative block aspect-[4/3] overflow-hidden bg-black">
        <Image
          src={item.image}
          alt={`${item.name} — ${item.size} ${item.finish}`}
          fill
          className="object-cover transition duration-500 hover:scale-105"
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <span className="absolute top-3 left-3 rounded-sm bg-gold px-2 py-1 text-[10px] font-black tracking-wide text-black uppercase">
          {item.badge}
        </span>
      </Link>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase">{item.vehicle}</p>
        <h3 className="mt-1 font-display text-2xl uppercase leading-none text-white">
          <Link href={item.href} className="hover:text-gold">
            {item.name}
          </Link>
        </h3>
        <dl className="mt-4 grid grid-cols-2 gap-2 text-xs uppercase">
          <div className="rounded-lg border border-white/10 bg-black/40 px-3 py-2">
            <dt className="text-chrome/50">Size</dt>
            <dd className="font-bold text-white">{item.size}</dd>
          </div>
          <div className="rounded-lg border border-white/10 bg-black/40 px-3 py-2">
            <dt className="text-chrome/50">Finish</dt>
            <dd className="font-bold text-white">{item.finish}</dd>
          </div>
        </dl>
        <p className="mt-3 text-sm text-chrome/70">{item.blurb}</p>
        <div className="mt-auto pt-4">
          <p className="flex flex-wrap items-end gap-2">
            <span className="text-3xl font-black text-gold">{money(item.price)}</span>
            {item.compareAt ? (
              <span className="text-sm text-chrome/40 line-through">{money(item.compareAt)}</span>
            ) : null}
          </p>
          <p className="mt-1 text-sm text-purple">
            or from{" "}
            <Link href="/financing" className="font-semibold underline decoration-gold/50">
              {money(monthlyFrom(item.price))}/mo*
            </Link>
          </p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link
              href={item.href}
              className="rounded-sm bg-gold py-2.5 text-center text-[11px] font-black tracking-wide text-black uppercase"
            >
              View package
            </Link>
            <a
              href={`tel:${site.phoneTel}`}
              className="rounded-sm bg-purple-deep py-2.5 text-center text-[11px] font-black tracking-wide text-gold uppercase"
            >
              Call to order
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
