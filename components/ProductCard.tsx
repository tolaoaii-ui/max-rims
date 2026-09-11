import Link from "next/link";
import type { Product } from "@/lib/products";
import { productMonthly } from "@/lib/products";
import { money } from "@/lib/site";
import { ProductImage } from "./ProductImage";

const badgeClass: Record<Product["badges"][number], string> = {
  SALE: "bg-red-600 text-white",
  "READY TO SHIP": "bg-gold text-black",
  NEW: "bg-purple text-white",
  FORGED: "bg-white text-black",
  DONK: "bg-purple-deep text-gold",
  HOT: "bg-black text-gold border border-gold",
};

export function ProductCard({ product }: { product: Product }) {
  const monthly = productMonthly(product);

  return (
    <article className="card-glow group overflow-hidden rounded-2xl bg-[#0d0a14] transition">
      <Link href={`/shop/${product.slug}`} className="block">
        <div className="relative aspect-square overflow-hidden bg-black">
          <div className="absolute top-3 left-3 z-10 flex flex-wrap gap-1.5">
            {product.badges.map((badge) => (
              <span
                key={badge}
                className={`rounded-full px-2 py-0.5 text-[10px] font-black tracking-wide uppercase ${badgeClass[badge]}`}
              >
                {badge}
              </span>
            ))}
          </div>
          <ProductImage
            src={product.image}
            alt={product.name}
            className="object-contain p-4 transition duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </div>
        <div className="space-y-2 p-4 pb-0">
          <p className="text-[10px] font-bold tracking-[0.2em] text-gold uppercase">
            {product.series} · {product.sizes.join(" / ")}
          </p>
          <h3 className="font-display text-2xl uppercase leading-none text-white">{product.name}</h3>
          <p className="text-sm text-chrome/70">{product.blurb}</p>
          <div className="flex flex-wrap items-end gap-2 pt-1">
            <span className="text-2xl font-black text-gold">{money(product.price)}</span>
            {product.compareAt ? (
              <span className="text-sm text-chrome/45 line-through">{money(product.compareAt)}</span>
            ) : null}
          </div>
        </div>
      </Link>
      <p className="px-4 pt-2 pb-4 text-sm text-purple">
        or from{" "}
        <Link href="/financing" className="font-semibold underline decoration-gold/50 underline-offset-4">
          {money(monthly)}/mo*
        </Link>
      </p>
    </article>
  );
}
