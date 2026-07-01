import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
}

export default function Logo({
  variant = "dark",
}: LogoProps) {
  return (
    <Link href="/" className="flex items-center">
      <Image
        src={
          variant === "dark"
            ? "/logo-light.png"
            : "/logo-dark.png"
        }
        alt="GS Associate"
        width={58}
        height={58}
        priority
      />
    </Link>
  );
}