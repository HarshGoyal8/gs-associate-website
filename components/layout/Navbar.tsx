import Container from "./Container";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between">
          <h2 className="text-2xl font-semibold">GS Associate</h2>

          <nav>
            Navigation
          </nav>
        </div>
      </Container>
    </header>
  );
}