import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-24 text-center">
      <p className="font-bang text-gold">404</p>
      <h1 className="mt-3 font-display text-5xl uppercase text-white">That SKU ghost-rode off</h1>
      <p className="mt-4 text-chrome/70">The page is gone. The chrome is still on the rack.</p>
      <Link
        href="/shop"
        className="mt-8 inline-block rounded-full bg-gold px-6 py-3 font-black text-black uppercase"
      >
        Back to shop
      </Link>
    </div>
  );
}
