import Image from "next/image";
import Link from "next/link";

export function SiteLogo() {
  return (
    <Link
      href="/"
      aria-label="7SIDE — home"
      className="fixed top-4 left-4 md:top-6 md:left-6 z-[6000] block"
    >
      <Image
        src="/logo-white.png"
        alt="7SIDE"
        width={580}
        height={786}
        priority
        className="h-10 md:h-12 w-auto opacity-90 hover:opacity-100 transition-opacity drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]"
      />
    </Link>
  );
}
