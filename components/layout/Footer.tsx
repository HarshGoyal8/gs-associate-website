import Container from "./Container";

export default function Footer() {
  return (
    <footer className="border-t py-12">
      <Container>
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p>© 2026 GS Associate. All rights reserved.</p>

          <p>Premium Plywood & Interior Solutions</p>
        </div>
      </Container>
    </footer>
  );
}