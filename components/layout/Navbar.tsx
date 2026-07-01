import Link from "next/link";
import Container from "./Container";
import Logo from "@/components/ui/Logo";
import { NAVIGATION } from "@/constants/navigation";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <Logo variant="dark" />

          <nav className="hidden md:flex items-center gap-8">
            {NAVIGATION.map((item) => (
              <Link
                key={item.title}
                href={item.href}
                className="transition hover:text-[var(--accent)]"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      </Container>
    </header>
  );
}