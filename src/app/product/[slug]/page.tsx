import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { products, getProduct } from "@/lib/products";
import { ProductGallery } from "@/components/product-gallery";
import { ProductDetail } from "@/components/product-detail";
import { Footer } from "@/components/footer";
import { TopNav } from "@/components/top-nav";

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return { title: "7SIDE" };
  return {
    title: `${product.title} — 7SIDE`,
    description: product.tagline,
    openGraph: {
      title: `${product.title} — 7SIDE`,
      description: product.tagline,
      images: [product.cover],
    },
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

  return (
    <>
      <TopNav />
      <main className="min-h-screen bg-black text-white pt-24 md:pt-32 pb-16">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <Link
            href="/#collection"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-neutral-500 hover:text-white transition-colors mb-8 md:mb-12"
          >
            <ArrowLeft className="size-3.5" />
            Back to collection
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16">
            <ProductGallery images={product.images} alt={product.title} />
            <ProductDetail product={product} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
