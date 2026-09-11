import type { Metadata } from "next";
import Link from "next/link";
import { lenders } from "@/lib/lenders";
import { featuredProducts } from "@/lib/products";
import { money, monthlyFrom, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Financing & Pay Over Time",
  description:
    "MAX RIMS pay-over-time page with Affirm, Progressive Leasing, Synchrony links and a demo apply form.",
};

export default function FinancingPage() {
  const samples = featuredProducts().slice(0, 4);

  return (
    <div className="mx-auto max-w-7xl px-4 py-14">
      <p className="font-bang text-sm tracking-[0.3em] text-gold uppercase">Pay over time</p>
      <h1 className="mt-2 max-w-3xl font-display text-5xl uppercase text-white sm:text-7xl">
        Chrome now. Notes later.
      </h1>
      <p className="mt-4 max-w-2xl text-chrome/70">
        Same idea as a full-size wheel shop finance wall: example monthly math, lender partners, and
        a short apply. This page is a demo — no credit check runs here.
      </p>

      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {[
          { step: "01", title: "Pick a set", body: "Shop SKU or a donk package." },
          { step: "02", title: "Apply in two minutes", body: "Name, phone, city, budget, size." },
          { step: "03", title: "Max texts back", body: "Real shop would route to a lender." },
        ].map((item) => (
          <div key={item.step} className="rounded-3xl border border-gold/20 bg-black p-6">
            <p className="font-bang text-gold">{item.step}</p>
            <h2 className="mt-2 font-display text-3xl uppercase text-white">{item.title}</h2>
            <p className="mt-2 text-sm text-chrome/70">{item.body}</p>
          </div>
        ))}
      </div>

      <section className="mt-16">
        <h2 className="font-display text-4xl uppercase text-white">Example monthly*</h2>
        <div className="mt-6 overflow-hidden rounded-3xl border border-gold/20">
          <table className="w-full text-left text-sm">
            <thead className="bg-purple-deep text-gold">
              <tr>
                <th className="px-4 py-3">Demo SKU</th>
                <th className="px-4 py-3">Price</th>
                <th className="px-4 py-3">From / mo*</th>
              </tr>
            </thead>
            <tbody className="bg-black">
              {samples.map((product) => (
                <tr key={product.slug} className="border-t border-white/5">
                  <td className="px-4 py-3">
                    <Link href={`/shop/${product.slug}`} className="hover:text-gold">
                      {product.name}
                    </Link>
                  </td>
                  <td className="px-4 py-3">{money(product.price)}</td>
                  <td className="px-4 py-3 text-gold">{money(monthlyFrom(product.price))}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-3 text-xs text-chrome/50">
          *Demo math = price ÷ 36 months. Not an offer. Real APR, term, and approval come from the
          lender — never from this website.
        </p>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-2">
        {lenders.map((lender) => (
          <a
            key={lender.name}
            href={lender.href}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-gold/25 bg-black p-6 transition hover:border-gold"
          >
            <h3 className="font-display text-3xl uppercase text-gold">{lender.name}</h3>
            <p className="mt-3 text-sm text-chrome/75">{lender.blurb}</p>
            <p className="mt-4 text-xs font-black tracking-wide text-white uppercase">
              {lender.cta} ↗
            </p>
          </a>
        ))}
      </section>

      <div className="mt-16 rounded-3xl bg-purple-deep p-8 text-center">
        <h2 className="font-display text-4xl uppercase text-white">Ready to apply?</h2>
        <p className="mx-auto mt-3 max-w-lg text-sm text-chrome/80">
          Demo form only. Or call {site.phoneDisplay} like you would a real Oakland shop.
        </p>
        <Link
          href="/apply"
          className="mt-6 inline-block rounded-full bg-gold px-8 py-3 font-black text-black uppercase"
        >
          Apply now
        </Link>
      </div>
    </div>
  );
}
