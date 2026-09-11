import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { ProductImage } from "@/components/ProductImage";
import { getProduct, productMonthly, products, relatedProducts } from "@/lib/products";
import { money, site } from "@/lib/site";

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "Wheel not found" };
  return {
    title: product.name,
    description: product.blurb,
    openGraph: { images: [product.image] },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const monthly = productMonthly(product);
  const related = relatedProducts(product.slug);

  return (
    <div className="mx-auto max-w-7xl px-4 py-12">
      <p className="text-xs tracking-[0.2em] text-gold uppercase">
        <Link href="/shop">Shop</Link> / {product.series}
      </p>
      <div className="mt-6 grid gap-10 lg:grid-cols-2">
        <div className="relative aspect-square overflow-hidden rounded-3xl border border-gold/20 bg-black">
          <ProductImage
            src={product.image}
            alt={product.name}
            className="object-contain p-8"
            sizes="(max-width: 1024px) 100vw, 50vw"
            priority
          />
        </div>
        <div>
          <div className="flex flex-wrap gap-2">
            {product.badges.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-gold/40 px-2 py-0.5 text-[10px] font-black text-gold uppercase"
              >
                {badge}
              </span>
            ))}
          </div>
          <h1 className="mt-4 font-display text-5xl uppercase text-white">{product.name}</h1>
          <p className="mt-1 text-sm text-chrome/50">{product.sku}</p>
          <p className="mt-4 text-lg text-chrome/80">{product.description}</p>
          <div className="mt-6 flex flex-wrap items-end gap-3">
            <span className="text-4xl font-black text-gold">{money(product.price)}</span>
            {product.compareAt ? (
              <span className="text-lg text-chrome/40 line-through">{money(product.compareAt)}</span>
            ) : null}
          </div>
          <p className="mt-2 text-purple">
            or from{" "}
            <Link href="/financing" className="font-semibold underline decoration-gold/50">
              {money(monthly)}/mo*
            </Link>
          </p>
          <dl className="mt-8 grid grid-cols-2 gap-4 text-sm">
            <div>
              <dt className="text-gold">Sizes</dt>
              <dd>{product.sizes.join(", ")}</dd>
            </div>
            <div>
              <dt className="text-gold">Finish</dt>
              <dd>{product.finish}</dd>
            </div>
            <div>
              <dt className="text-gold">Offset</dt>
              <dd>{product.offset}</dd>
            </div>
            <div>
              <dt className="text-gold">Bolt pattern</dt>
              <dd>{product.boltPattern}</dd>
            </div>
            <div>
              <dt className="text-gold">Width</dt>
              <dd>{product.width}</dd>
            </div>
            <div>
              <dt className="text-gold">Weight</dt>
              <dd>{product.weight}</dd>
            </div>
          </dl>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={`tel:${site.phoneTel}`}
              className="rounded-full bg-gold px-6 py-3 text-sm font-black text-black uppercase"
            >
              Call to hold
            </a>
            <a
              href={`sms:${site.phoneTel}`}
              className="rounded-full border border-purple px-6 py-3 text-sm font-black text-purple uppercase"
            >
              Text Max
            </a>
            <Link
              href="/apply"
              className="rounded-full bg-purple-deep px-6 py-3 text-sm font-black text-gold uppercase"
            >
              Apply to finance
            </Link>
          </div>
        </div>
      </div>

      <section className="mt-20">
        <h2 className="font-display text-4xl uppercase text-white">More from the rack</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {related.map((item) => (
            <ProductCard key={item.slug} product={item} />
          ))}
        </div>
      </section>
    </div>
  );
}
