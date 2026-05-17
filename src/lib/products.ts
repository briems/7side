export type Product = {
  slug: string;
  title: string;
  tagline: string;
  price: number;
  currency: string;
  description: string;
  sizes: string[];
  cover: string;
  images: string[];
  status: "live" | "soon";
};

export const products: Product[] = [
  {
    slug: "tracksuit-jacket-black",
    title: "7SIDE Tracksuit Jacket",
    tagline: "Hooded full-zip, drippy 7 chest hit",
    price: 89,
    currency: "EUR",
    description:
      "Heavyweight technical shell with brushed inner lining. Hooded full-zip silhouette with embroidered drippy 7SIDE chest logo. Built for Amsterdam weather and late nights.",
    sizes: ["S", "M", "L", "XL"],
    cover: "/products/tracksuit-black/jacket-only.png",
    images: [
      "/products/tracksuit-black/jacket-only.png",
      "/products/tracksuit-black/model-front-1.png",
      "/products/tracksuit-black/model-front-2.png",
    ],
    status: "live",
  },
  {
    slug: "tracksuit-shorts-black",
    title: "7SIDE Tracksuit Shorts",
    tagline: "Matching technical shorts, leg-hit logo",
    price: 49,
    currency: "EUR",
    description:
      "Cut from the same technical fabric as the jacket. Elastic waistband, side pockets, embroidered drippy 7SIDE leg hit. Wear them as a set or solo.",
    sizes: ["S", "M", "L", "XL"],
    cover: "/products/tracksuit-black/shorts-only.png",
    images: [
      "/products/tracksuit-black/shorts-only.png",
      "/products/tracksuit-black/model-front-1.png",
      "/products/tracksuit-black/model-front-2.png",
    ],
    status: "live",
  },
  {
    slug: "tracksuit-set-black",
    title: "7SIDE Tracksuit Set",
    tagline: "Jacket + shorts. The full fit.",
    price: 129,
    currency: "EUR",
    description:
      "The complete 7SIDE tracksuit. Hooded full-zip jacket and matching shorts in heavyweight technical fabric. Buy the set, save €9. Limited first drop.",
    sizes: ["S", "M", "L", "XL"],
    cover: "/products/tracksuit-black/flatlay.png",
    images: [
      "/products/tracksuit-black/flatlay.png",
      "/products/tracksuit-black/model-front-1.png",
      "/products/tracksuit-black/model-front-2.png",
      "/products/tracksuit-black/jacket-only.png",
      "/products/tracksuit-black/shorts-only.png",
    ],
    status: "live",
  },
];

export function getProduct(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}
