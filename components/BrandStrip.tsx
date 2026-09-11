import { brandStrip } from "@/lib/lenders";

export function BrandStrip() {
  const row = [...brandStrip, ...brandStrip];
  return (
    <section className="overflow-hidden border-y border-gold/20 bg-purple-deep py-4">
      <div className="marquee flex w-max gap-10 whitespace-nowrap">
        {row.map((brand, i) => (
          <span key={`${brand}-${i}`} className="font-bang text-xl tracking-[0.2em] text-gold uppercase">
            {brand}
          </span>
        ))}
      </div>
    </section>
  );
}
