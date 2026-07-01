import Button from "@/components/ui/Button";
import { H1, Paragraph } from "@/components/ui/typography";
import Container from "@/components/layout/Container";

export default function Hero() {
  return (
    <section className="min-h-[90vh] flex items-center">
      <Container>
        <div className="max-w-3xl">

          <span className="text-sm uppercase tracking-[0.3em] text-[var(--accent)]">
            Premium Interior Solutions
          </span>

          <H1 className="mt-6">
            Build Better Interiors with Premium Materials.
          </H1>

          <Paragraph className="mt-8">
            GS Associate supplies premium plywood, laminates,
            HDHMR boards, flush doors, decorative panels,
            and interior solutions for homes, offices,
            architects, and dealers.
          </Paragraph>

          <div className="mt-6 flex gap-2">
            <Button>
              Explore Products
            </Button>

            <Button className="bg-white border border-black text-black">
              Contact Us
            </Button>
          </div>

        </div>
      </Container>
    </section>
  );
}