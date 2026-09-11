import type { Metadata } from "next";
import Link from "next/link";
import { ApplyForm } from "@/components/ApplyForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Apply for Financing",
  description: "Demo MAX RIMS financing application — name, phone, email, city, budget, size, consent.",
};

export default function ApplyPage() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-14">
      <p className="font-bang text-sm tracking-[0.3em] text-gold uppercase">Apply</p>
      <h1 className="mt-2 font-display text-5xl uppercase text-white">Two-minute demo apply</h1>
      <p className="mt-4 text-chrome/70">
        Name, phone, email, city, budget, wheel size, consent. Success state stays in the browser.
        Prefer a human? Call {site.phoneDisplay} or read the{" "}
        <Link href="/financing" className="text-gold underline">
          financing
        </Link>{" "}
        page first.
      </p>
      <div className="mt-10">
        <ApplyForm />
      </div>
    </div>
  );
}
