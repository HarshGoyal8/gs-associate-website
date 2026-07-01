import Image from "next/image";
import { BRANDS } from "@/constants/brands";
import Container from "@/components/layout/Container";
import { H2, Paragraph } from "@/components/ui/typography";

export default function FeaturedBrands() {
  return (
    <section className="py-28 bg-white">
      <Container>

        <div className="text-center mb-16">

          <p className="uppercase tracking-[0.3em] text-sm text-[var(--accent)]">
            Trusted Brands
          </p>

          <H2 className="mt-4">
            We Deal With Industry Leaders
          </H2>

          <Paragraph className="mt-5 max-w-2xl mx-auto">
            We proudly partner with India's most trusted
            plywood, laminate and interior brands.
          </Paragraph>

        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">

          {BRANDS.map((brand) => (

            <div
              key={brand.name}
              className="group bg-white rounded-2xl border p-8 flex items-center justify-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
            >

              <Image
                src={brand.logo}
                alt={brand.name}
                width={150}
                height={70}
                className="object-contain grayscale opacity-70 transition-all duration-300 group-hover:grayscale-0 group-hover:opacity-100"
              />

            </div>

          ))}

        </div>

      </Container>
    </section>
  );
}