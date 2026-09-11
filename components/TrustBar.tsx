import { trustItems } from "@/lib/lenders";

export function TrustBar() {
  return (
    <section className="border-y border-gold/20 bg-black">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 sm:grid-cols-2 lg:grid-cols-5">
        {trustItems.map((item) => (
          <div key={item.label} className="text-center">
            <p className="font-display text-lg uppercase text-gold">{item.label}</p>
            <p className="text-xs tracking-wide text-chrome/70 uppercase">{item.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
