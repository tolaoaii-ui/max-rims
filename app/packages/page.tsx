import type { Metadata } from "next";
import { CallBanner } from "@/components/CallBanner";
import { PackageCard } from "@/components/PackageCard";
import { packages } from "@/lib/packages";

export const metadata: Metadata = {
  title: "Rim & Tire Packages",
  description: "Donk, SS, scraper, and forged rim & tire packages with size, finish, and price — MAX RIMS Oakland.",
};

export default function PackagesPage() {
  return (
    <>
    <div className="mx-auto max-w-7xl px-4 py-14">
      <p className="font-bang text-sm tracking-[0.3em] text-gold uppercase">Packages</p>
      <h1 className="mt-2 font-display text-5xl uppercase text-white sm:text-7xl">
        Pull up as a set
      </h1>
      <p className="mt-4 max-w-2xl text-chrome/70">
        Rim & tire packages with size, finish, and price on the card. Demo numbers. Call Max to
        lock a real set.
      </p>
      <div className="mt-12 grid gap-8 lg:grid-cols-2">
        {packages.map((item, index) => (
          <PackageCard key={item.slug} item={item} featured={index < 2} />
        ))}
      </div>
    </div>
    <CallBanner />
    </>
  );
}
