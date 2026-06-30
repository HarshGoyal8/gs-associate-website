import { cn } from "@/lib/utils";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function H1({ children, className }: TypographyProps) {
  return (
    <h1
      className={cn(
        "font-[family-name:var(--font-heading)] text-5xl font-semibold tracking-tight lg:text-7xl",
        className
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ children, className }: TypographyProps) {
  return (
    <h2
      className={cn(
        "font-[family-name:var(--font-heading)] text-4xl font-semibold",
        className
      )}
    >
      {children}
    </h2>
  );
}

export function Paragraph({ children, className }: TypographyProps) {
  return (
    <p
      className={cn(
        "text-base leading-7 text-neutral-600 lg:text-lg",
        className
      )}
    >
      {children}
    </p>
  );
}