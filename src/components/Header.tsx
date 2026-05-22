import Link from "next/link";
import { LogoMark } from "./icons";

const navLinks = [
  { href: "#programs", label: "Programs" },
  { href: "#about", label: "About" },
  { href: "#gallery", label: "Gallery" },
  { href: "#schools", label: "For schools" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between border-b border-border bg-cream px-6 py-[18px] md:px-12">
      <Link href="/" className="flex items-center gap-[11px] no-underline">
        <div className="flex h-[34px] w-[34px] items-center justify-center rounded-lg bg-rose-mid">
          <LogoMark />
        </div>
        <span className="font-serif text-[17px] font-normal tracking-[0.2px] text-rose-deep">
          Rose <em className="italic text-rose-mid">Creative Labs</em>
        </span>
      </Link>

      <ul className="hidden list-none items-center gap-7 lg:flex">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="text-[13.5px] text-muted no-underline transition-colors hover:text-rose-mid"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="#contact"
        className="rounded-[7px] bg-rose-mid px-5 py-[9px] text-[13px] font-medium text-rose-ghost no-underline transition-colors hover:bg-rose-dark"
      >
        Book a program
      </Link>
    </nav>
  );
}
