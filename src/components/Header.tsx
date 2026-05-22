import Link from "next/link";
import { LogoMark } from "./icons";

const navLinks = [
  { href: "/programs", label: "Programs" },
  { href: "/corporate-teambuilding", label: "Corporate teambuilding" },
  { href: "/adult-continuing-education", label: "Adult continuing education" },
  { href: "/#about", label: "About" },
  { href: "/#gallery", label: "Gallery" },
  { href: "/for-schools", label: "For schools" },
  { href: "/#contact", label: "Contact" },
];

export function Header() {
  return (
    <nav className="sticky top-0 z-[100] flex items-center justify-between border-b border-border bg-cream px-6 py-[18px] lg:px-12">
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
              className="font-sans text-[13.5px] text-muted no-underline transition-colors hover:text-rose-mid"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      <Link
        href="/for-schools#inquiry"
        className="rounded-[7px] bg-rose-mid px-5 py-[9px] font-sans text-[13px] font-medium text-cream no-underline transition-colors hover:bg-rose-dark"
      >
        Book a program
      </Link>
    </nav>
  );
}

export { Header as Navbar };
