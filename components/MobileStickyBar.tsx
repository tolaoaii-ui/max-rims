"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";

export function MobileStickyBar() {
  const pathname = usePathname();
  if (pathname === "/apply") return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-gold/30 bg-black/95 p-2 pb-[max(0.5rem,env(safe-area-inset-bottom))] md:hidden">
      <Link
        href="/apply"
        className="rounded-full bg-gold py-3 text-center text-sm font-black tracking-wide text-black uppercase"
      >
        Apply
      </Link>
      <a
        href={`tel:${site.phoneTel}`}
        className="rounded-full bg-purple-deep py-3 text-center text-sm font-black tracking-wide text-gold uppercase"
      >
        Call now
      </a>
    </div>
  );
}
