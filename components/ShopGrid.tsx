"use client";

import { useMemo, useState } from "react";
import { finishes, products, sizeFilters } from "@/lib/products";
import { ProductCard } from "./ProductCard";

export function ShopGrid() {
  const [finish, setFinish] = useState("All");
  const [size, setSize] = useState("All");
  const [ready, setReady] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((product) => {
      if (finish !== "All" && product.finish !== finish) return false;
      if (size !== "All" && !product.sizes.includes(size)) return false;
      if (ready && !product.readyToShip) return false;
      return true;
    });
  }, [finish, size, ready]);

  return (
    <div>
      <div className="mb-8 flex flex-wrap items-center gap-3">
        <select
          value={finish}
          onChange={(event) => setFinish(event.target.value)}
          className="rounded-full border border-gold/30 bg-black px-4 py-2 text-sm"
        >
          <option>All</option>
          {finishes.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <select
          value={size}
          onChange={(event) => setSize(event.target.value)}
          className="rounded-full border border-gold/30 bg-black px-4 py-2 text-sm"
        >
          <option>All</option>
          {sizeFilters.map((item) => (
            <option key={item}>{item}</option>
          ))}
        </select>
        <label className="flex items-center gap-2 text-sm text-chrome/80">
          <input
            type="checkbox"
            checked={ready}
            onChange={(event) => setReady(event.target.checked)}
            className="accent-[#ffd700]"
          />
          Ready to ship
        </label>
        <p className="ml-auto text-sm text-chrome/60">{filtered.length} demo SKUs</p>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </div>
  );
}
