import Image from "next/image";
import Link from "next/link";
import { BrandStrip } from "@/components/BrandStrip";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ProductCard } from "@/components/ProductCard";
import { SectionHeading } from "@/components/SectionHeading";
import { TributeWall } from "@/components/TributeWall";
import { TrustBar } from "@/components/TrustBar";
import { galleryShots } from "@/lib/gallery";
import { packages } from "@/lib/packages";
import { readyToShipProducts } from "@/lib/products";
import { money, site } from "@/lib/site";

export default function HomePage() {
  const ready = readyToShipProducts().slice(0, 8);

  return (
    <>
      <HeroCarousel />
      <TrustBar />

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

      <section className="border-y border-gold/15 bg-[#100818] py-20">
        <div className="mx-auto max-w-7xl px-4">
          <SectionHeading
            kicker="Packages"
            title="Pull up as a set"
            body="Wheels + mount + the stance already decided. Demo bundles."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {packages.slice(0, 3).map((item) => (
              <Link
                key={item.slug}
                href="/packages"
                className="overflow-hidden rounded-3xl border border-gold/20 bg-black"
              >
                <div className="relative h-48">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5">
                  <span className="rounded-full bg-gold px-2 py-0.5 text-[10px] font-black text-black">
                    {item.badge}
                  </span>
                  <h3 className="mt-3 font-display text-2xl uppercase text-white">{item.name}</h3>
                  <p className="mt-1 text-gold">
                    {money(item.price)}
                    {item.compareAt ? (
                      <span className="ml-2 text-sm text-chrome/40 line-through">
                        {money(item.compareAt)}
                      </span>
                    ) : null}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

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
