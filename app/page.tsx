import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import { H1, Paragraph } from "@/components/ui/typography";
import Button from "@/components/ui/Button";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
      </main>
      <Footer />
    </>
  );
}