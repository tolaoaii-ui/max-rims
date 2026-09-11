import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Call, text, or email MAX RIMS Oakland — demo contact placeholders.",
};

export default function ContactPage() {
  return (
    <div className="mx-auto grid max-w-7xl gap-12 px-4 py-14 lg:grid-cols-2">
      <div>
        <p className="font-bang text-sm tracking-[0.3em] text-gold uppercase">Contact</p>
        <h1 className="mt-2 font-display text-5xl uppercase text-white">Hit the shop</h1>
        <ul className="mt-8 space-y-4 text-lg">
          <li>
            <span className="block text-xs tracking-[0.2em] text-gold uppercase">Call / text</span>
            <a href={`tel:${site.phoneTel}`} className="font-black text-white">
              {site.phoneDisplay}
            </a>
          </li>
          <li>
            <span className="block text-xs tracking-[0.2em] text-gold uppercase">Instagram</span>
            <a href={site.instagramUrl} target="_blank" rel="noreferrer" className="text-purple">
              {site.instagram}
            </a>
          </li>
          <li>
            <span className="block text-xs tracking-[0.2em] text-gold uppercase">Email</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
          </li>
          <li>
            <span className="block text-xs tracking-[0.2em] text-gold uppercase">Hours</span>
            {site.hours}
          </li>
          <li>
            <span className="block text-xs tracking-[0.2em] text-gold uppercase">Floor</span>
            {site.locationLabel}
            <br />
            <span className="text-chrome/60">{site.locationLine}</span>
          </li>
        </ul>
      </div>
      <div className="rounded-3xl border border-gold/20 bg-black p-6 sm:p-8">
        <h2 className="font-display text-3xl uppercase text-white">Send a demo note</h2>
        <p className="mt-2 mb-6 text-sm text-chrome/60">
          Client-side success only. Nothing hits an inbox.
        </p>
        <ContactForm />
      </div>
    </div>
  );
}
