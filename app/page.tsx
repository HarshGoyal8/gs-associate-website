import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { H1, Paragraph } from "@/components/ui/typography";
import Button from "@/components/ui/Button";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Section>
          <Container>
            <H1>GS Associate</H1>
            <Paragraph className="mt-6">
              Premium Plywood & Interior Solutions
              </Paragraph>
              <Button className="mt-8">
                Explore Products
                </Button>
          </Container>
        </Section>
      </main>
      <Footer />
    </>
  );
}