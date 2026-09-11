import { site } from "@/lib/site";

export function CallBanner() {
  return (
    <section className="border-y border-gold bg-gold px-4 py-4 text-black">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-display text-2xl uppercase sm:text-3xl">Talk to Max — Oakland chrome</p>
        <div className="flex flex-wrap items-center gap-3">
          <a
            href={`tel:${site.phoneTel}`}
            className="rounded-sm bg-black px-5 py-2 text-sm font-black tracking-wide text-gold uppercase"
          >
            Call {site.phoneDisplay}
          </a>
          <a
            href={`sms:${site.phoneTel}`}
            className="rounded-sm border-2 border-black px-5 py-2 text-sm font-black uppercase"
          >
            Text the shop
          </a>
        </div>
      </div>
    </section>
  );
}
