import type { MetadataRoute } from "next";
import { products } from "@/lib/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/shop", "/packages", "/gallery", "/financing", "/apply", "/contact", "/about"];
  return [
    ...routes.map((path) => ({
      url: `https://max-rims.vercel.app${path}`,
      lastModified: new Date(),
    })),
    ...products.map((product) => ({
      url: `https://max-rims.vercel.app/shop/${product.slug}`,
      lastModified: new Date(),
    })),
  ];
}
