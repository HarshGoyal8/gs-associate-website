import Image from "next/image";
import Link from "next/link";
import { PRODUCT_CATEGORIES } from "@/constants/products";

export default function ProductCategories() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-[#704321]">
            Our Products
          </p>

          <h2 className="mt-4 text-5xl font-semibold">
            Explore Our Categories
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-neutral-600">
            Discover our extensive range of premium plywood,
            laminates, HDHMR boards, flush doors, Boilo and FSP
            products.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {PRODUCT_CATEGORIES.map((product) => (

            <Link
              key={product.slug}
              href={`/products/${product.slug}`}
              className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:border-[#704321] hover:shadow-xl"
            >

              <div className="relative h-64 overflow-hidden">

                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                />

              </div>

              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {product.title}
                </h3>

                <p className="mt-2 text-neutral-600">
                  {product.description}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">

                  {product.categories.map((category) => (
                    <span
                      key={category}
                      className="rounded-full bg-[#F5F2ED] px-3 py-1 text-xs text-[#704321]"
                    >
                      {category}
                    </span>
                  ))}

                </div>

                <div className="mt-8 font-medium text-[#704321]">
                  Explore →
                </div>

              </div>

            </Link>

          ))}

        </div>

      </div>
    </section>
  );
}