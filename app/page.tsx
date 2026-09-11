import Image from "next/image";
import Link from "next/link";
import { BrandStrip } from "@/components/BrandStrip";
import { CallBanner } from "@/components/CallBanner";
import { HeroCarousel } from "@/components/HeroCarousel";
import { PackageCard } from "@/components/PackageCard";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ShopByStrip } from "@/components/ShopByStrip";
import { TributeWall } from "@/components/TributeWall";
import { TrustBar } from "@/components/TrustBar";
import { galleryShots } from "@/lib/gallery";
import { packages } from "@/lib/packages";
import { readyToShipProducts } from "@/lib/products";
import { site } from "@/lib/site";

export default function HomePage() {
  const ready = readyToShipProducts().slice(0, 8);

  return (
    <>
      <HeroCarousel />
      <CallBanner />
      <ShopByStrip />
      <TrustBar />

      <section id="packages" className="border-b border-gold/15 bg-[#100818] py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="font-bang text-xs tracking-[0.28em] text-gold uppercase">
                Rim & tire packages
              </p>
              <h2 className="mt-2 font-display text-4xl uppercase leading-none text-white sm:text-6xl">
                Collection: one number
              </h2>
              <p className="mt-3 text-chrome/70">
                Size, finish, and price on every card — donk, SS, scraper, and forged sets. Original
                MAX RIMS demo packages.
              </p>
            </div>
            <Link
              href="/packages"
              className="rounded-sm bg-gold px-5 py-3 text-xs font-black tracking-wide text-black uppercase"
            >
              View all packages
            </Link>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {packages.map((item) => (
              <PackageCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <ServicesGrid />

      <section className="relative overflow-hidden border-y border-gold/20">
        <div className="absolute inset-0">
          <Image
            src="/rim-black-gold.png"
            alt="Hyphy Forged black and gold multi-spoke rim"
            fill
            className="object-cover object-center"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-6 px-4 py-20 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="font-bang text-xs tracking-[0.3em] text-gold uppercase">Forged / gold lip</p>
            <h2 className="mt-2 font-display text-5xl uppercase text-white sm:text-7xl">
              Big face. Town gold.
            </h2>
            <p className="mt-3 max-w-xl text-chrome/80">
              The luxury-forged look, Oakland edition — Hyphy Forged and Gas Station Gold. No
              off-road catalog photos. Call Max for offsets.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/shop/hyphy-forged"
              className="rounded-sm bg-gold px-6 py-3 text-sm font-black text-black uppercase"
            >
              Hyphy Forged
            </Link>
            <a
              href={`tel:${site.phoneTel}`}
              className="rounded-sm border border-gold px-6 py-3 text-sm font-black text-gold uppercase"
            >
              Call {site.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading
          kicker="Ready to ship"
          title="Chrome on the rack"
          body="Demo SKUs with sale prices, strikethroughs, and pay-over-time. Click through for fitment notes."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {ready.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/shop"
            className="inline-block rounded-full border border-gold px-6 py-3 text-sm font-black tracking-wide text-gold uppercase"
          >
            Full shop grid
          </Link>
        </div>
      </section>

      <BrandStrip />

      <section className="mx-auto max-w-7xl px-4 py-20">
        <SectionHeading
          kicker="Vehicle gallery"
          title="Donks. Dubs. Town paint."
          body="Featured builds with rim specs — the same structure as a serious wheel shop, original MAX RIMS photos."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {galleryShots.map((shot) => (
            <Link
              key={shot.slug}
              href="/gallery"
              className="card-glow group overflow-hidden rounded-3xl bg-black"
            >
              <div className="relative aspect-[16/10]">
                <Image
                  src={shot.image}
                  alt={shot.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
              <div className="space-y-2 p-5">
                <p className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase">
                  {shot.car} · {shot.year}
                </p>
                <h3 className="font-display text-3xl uppercase text-white">{shot.title}</h3>
                <p className="text-sm text-purple">{shot.rim}</p>
                <p className="text-xs tracking-wide text-chrome/60 uppercase">{shot.specs}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <CallBanner />

      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 lg:grid-cols-2">
        <div>
          <p className="font-bang text-sm tracking-[0.3em] text-gold uppercase">Pay over time</p>
          <h2 className="mt-2 font-display text-5xl uppercase text-white">Chrome now. Pay later.</h2>
          <p className="mt-4 text-chrome/75">
            Product cards show <span className="text-gold">or from $XX/mo*</span> into a dedicated
            financing page with Affirm, Progressive Leasing, and Synchrony outbound links — plus a
            two-minute demo apply form.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/financing"
              className="rounded-full bg-gold px-6 py-3 text-sm font-black text-black uppercase"
            >
              See financing
            </Link>
            <Link
              href="/apply"
              className="rounded-full border border-purple px-6 py-3 text-sm font-black text-purple uppercase"
            >
              Apply now
            </Link>
          </div>
        </div>
        <div className="rounded-3xl border border-gold/25 bg-black p-8">
          <p className="font-display text-3xl uppercase text-gold">Call / text Max</p>
          <p className="mt-3 text-3xl font-black text-white">{site.phoneDisplay}</p>
          <p className="mt-2 text-purple">{site.instagram}</p>
          <p className="text-chrome/70">{site.email}</p>
          <p className="mt-6 text-sm text-chrome/55">{site.demoDisclaimer}</p>
        </div>
      </section>

      <TributeWall />
    </>
  );
}
