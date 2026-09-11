"use client";

import { useState } from "react";

const budgets = ["Under $1,000", "$1,000–$2,000", "$2,000–$3,500", "$3,500+", "Not sure yet"];
const sizes = ["20\"", "22\"", "24\"", "26\"", "Package / mix"];

export function ApplyForm() {
  const [submitted, setSubmitted] = useState(false);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="rounded-3xl border border-gold/40 bg-black p-8 text-center">
        <p className="font-bang text-sm tracking-[0.3em] text-gold uppercase">Demo success</p>
        <h2 className="mt-3 font-display text-4xl uppercase text-white">Max got the note</h2>
        <p className="mx-auto mt-4 max-w-lg text-chrome/75">
          This is a client-side demo only. Nothing was sent to a lender, inbox, or credit bureau.
          On the real shop site this is where Affirm / Progressive / Synchrony handoff would start.
        </p>
        <button
          type="button"
          className="mt-6 rounded-full border border-gold px-5 py-2 text-sm font-bold text-gold uppercase"
          onClick={() => setSubmitted(false)}
        >
          Submit another demo
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4 rounded-3xl border border-gold/25 bg-black p-6 sm:p-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="mb-1 block font-semibold text-gold">Name</span>
          <input
            required
            name="name"
            className="w-full rounded-xl border border-white/10 bg-[#120c1c] px-3 py-3 outline-none focus:border-gold"
            placeholder="First and last"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-semibold text-gold">Phone</span>
          <input
            required
            name="phone"
            type="tel"
            className="w-full rounded-xl border border-white/10 bg-[#120c1c] px-3 py-3 outline-none focus:border-gold"
            placeholder="(510) 555-0199"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-semibold text-gold">Email</span>
          <input
            required
            name="email"
            type="email"
            className="w-full rounded-xl border border-white/10 bg-[#120c1c] px-3 py-3 outline-none focus:border-gold"
            placeholder="you@email.com"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-semibold text-gold">City</span>
          <input
            required
            name="city"
            className="w-full rounded-xl border border-white/10 bg-[#120c1c] px-3 py-3 outline-none focus:border-gold"
            placeholder="Oakland, Richmond, Vallejo…"
          />
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-semibold text-gold">Budget</span>
          <select
            required
            name="budget"
            className="w-full rounded-xl border border-white/10 bg-[#120c1c] px-3 py-3 outline-none focus:border-gold"
            defaultValue=""
          >
            <option value="" disabled>
              Select a range
            </option>
            {budgets.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
        <label className="block text-sm">
          <span className="mb-1 block font-semibold text-gold">Wheel size</span>
          <select
            required
            name="size"
            className="w-full rounded-xl border border-white/10 bg-[#120c1c] px-3 py-3 outline-none focus:border-gold"
            defaultValue=""
          >
            <option value="" disabled>
              Select a size
            </option>
            {sizes.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
        </label>
      </div>
      <label className="flex items-start gap-3 text-sm text-chrome/80">
        <input required type="checkbox" name="consent" className="mt-1 accent-[#ffd700]" />
        <span>
          I understand this is a <strong className="text-gold">demo application</strong> and I consent
          to Max Rims contacting me about chrome, packages, and pay-over-time options. No hard credit
          pull happens on this page.
        </span>
      </label>
      <button
        type="submit"
        className="w-full rounded-full bg-gold py-3 font-black tracking-wide text-black uppercase"
      >
        Send demo application
      </button>
    </form>
  );
}
