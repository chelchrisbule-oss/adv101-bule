"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navigation = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "About", href: "/about" },
  { label: "Gallery", href: "/gallery" },
];

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Sprinter home" onClick={() => setMenuOpen(false)}><span className="brand-mark" aria-hidden="true">S<span>.</span></span><span className="brand-word">SPRINTER<span>®</span></span></Link>
      <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}><span /><span /></button>
      <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
        {navigation.map((item) => <Link className={`nav-link${pathname === item.href ? " active" : ""}`} href={item.href} key={item.href} aria-current={pathname === item.href ? "page" : undefined} onClick={() => setMenuOpen(false)}>{item.label}</Link>)}
      </nav>
      <Link className="header-cta" href="/portfolio">Find your pair <span aria-hidden="true">↗</span></Link>
    </header>
  );
}
