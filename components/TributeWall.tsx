const tributes = [
  { name: "MAC DRE", sub: "THIZZ", rotate: "-6deg", color: "text-[#e0aaff]" },
  { name: "E-40", sub: "WATER", rotate: "4deg", color: "text-gold" },
  { name: "TOO SHORT", sub: "BIRTHDAY", rotate: "-3deg", color: "text-[#ffe566]" },
  { name: "KEEK DA SNEEK", sub: "OAKTOWN", rotate: "5deg", color: "text-[#c77dff]" },
];

export function TributeWall() {
  return (
    <section className="graffiti-panel relative overflow-hidden border-y border-gold/20 py-20">
      <div className="pointer-events-none absolute inset-x-0 top-8 opacity-30" aria-hidden="true">
        <svg viewBox="0 0 800 120" className="h-24 w-full text-gold/40">
          <path
            d="M0 90 Q 80 20 160 80 T 320 70 T 480 90 T 640 50 T 800 80"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          />
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-4">
        <p className="text-center font-bang text-sm tracking-[0.3em] text-gold uppercase">
          Tribute wall · original lettering
        </p>
        <h2 className="mt-2 text-center font-display text-4xl uppercase text-white sm:text-6xl">
          Bay legends, shop ink
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm text-chrome/70">
          Stylized graffiti type only — no portraits, no scraped murals, no photos of real people.
          MAX RIMS original wall nodding at Mac Dre (Thizz), E-40, Too Short, and Keek da Sneek.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tributes.map((item) => (
            <div
              key={item.name}
              className="relative overflow-hidden rounded-2xl border border-gold/20 bg-black/50 p-6"
              style={{ transform: `rotate(${item.rotate})` }}
            >
              <p className={`font-marker drip relative text-4xl leading-none ${item.color}`}>
                {item.name}
              </p>
              <p className="mt-6 font-bang text-lg tracking-[0.25em] text-white/80">{item.sub}</p>
              <p className="mt-3 text-[10px] tracking-[0.2em] text-chrome/40 uppercase">
                Original MAX RIMS type
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
