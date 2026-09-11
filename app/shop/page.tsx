import type { Metadata } from "next";
import { Suspense } from "react";
import { ShopGrid } from "@/components/ShopGrid";
import { products } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop Chrome & Custom Wheels",
  description: `Demo catalog of ${products.length} MAX RIMS SKUs — scrapers, donks, forged, gold lips.`,
};

export default function ShopPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-14">
      <p className="font-bang text-sm tracking-[0.3em] text-gold uppercase">Demo inventory</p>
      <h1 className="mt-2 font-display text-5xl uppercase text-white sm:text-7xl">Shop the rack</h1>
      <p className="mt-4 max-w-2xl text-chrome/70">
        Original MAX RIMS SKUs. Prices, offsets, and stock flags are fictional. Ready-to-ship cards
        carry sale badges, strikethroughs, and monthly estimates that route to financing.
      </p>
      <div className="mt-10">
        <Suspense fallback={<p className="text-chrome/60">Loading the rack…</p>}>
          <ShopGrid />
        </Suspense>
      </div>
    </div>
  );
}
