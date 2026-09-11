"use client";

import { useState } from "react";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="rounded-3xl border border-gold/40 bg-black p-8">
        <p className="font-display text-3xl uppercase text-white">Message parked.</p>
        <p className="mt-2 text-sm text-chrome/70">
          Demo only — nothing emailed. Call or text (510) 555-0199 if this were the live shop.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSent(true);
      }}
    >
      <label className="block text-sm">
        <span className="mb-1 block text-gold">Name</span>
        <input
          required
          name="name"
          className="w-full rounded-xl border border-white/10 bg-[#120c1c] px-3 py-3 outline-none focus:border-gold"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block text-gold">Phone or email</span>
        <input
          required
          name="contact"
          className="w-full rounded-xl border border-white/10 bg-[#120c1c] px-3 py-3 outline-none focus:border-gold"
        />
      </label>
      <label className="block text-sm">
        <span className="mb-1 block text-gold">What are we mounting?</span>
        <textarea
          required
          name="message"
          rows={5}
          className="w-full rounded-xl border border-white/10 bg-[#120c1c] px-3 py-3 outline-none focus:border-gold"
          placeholder="Car, size, chrome or gold, financing?"
        />
      </label>
      <button
        type="submit"
        className="rounded-full bg-gold px-6 py-3 font-black text-black uppercase"
      >
        Send demo message
      </button>
    </form>
  );
}
