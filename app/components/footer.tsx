import Link from "next/link";

const footerLinks = [
  { label: "Home", href: "/" },
  { label: "Collection", href: "/portfolio" },
  { label: "Our story", href: "/about" },
  { label: "Gallery", href: "/gallery" },
];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block"><Link className="brand footer-brand" href="/"><span className="brand-mark" aria-hidden="true">S<span>.</span></span><span className="brand-word">SPRINTER<span>®</span></span></Link><p>For the long way home.<br />And everywhere in between.</p></div>
        <div className="footer-nav"><p className="footer-label">TAKE A LOOK</p>{footerLinks.map((link) => <Link href={link.href} key={link.href}>{link.label}</Link>)}</div>
        <div className="footer-note"><p className="footer-label">A LITTLE NOTE</p><p>Fictional brand, real good shoes (in spirit). Made for this little corner of the internet.</p><Link className="footer-social" href="/gallery">Come say hello <span>↗</span></Link></div>
      </div>
      <div className="footer-bottom"><span>© 2026 SPRINTER STUDIO</span><span>TAKE THE SCENIC ROUTE.</span><a href="#top">BACK TO TOP ↑</a></div>
    </footer>
  );
}
