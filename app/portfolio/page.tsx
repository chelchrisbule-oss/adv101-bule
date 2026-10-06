import Link from "next/link";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { ProductCard } from "../components/product-card";
import { products } from "../data";

export default function PortfolioPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero collection-hero">
          <p className="eyebrow"><span className="eyebrow-dot" /> THE SPRINTER LINEUP / 2026</p>
          <div className="page-hero-row"><h1>Our<br /><span>collection.</span></h1><p>Six ways to find your stride. Thoughtful everyday shoes for the miles, moments, and little detours that make a day yours.</p></div>
          <div className="page-hero-foot"><span>01 — 06 / THE EVERYDAY EDIT</span><Link className="text-link" href="/gallery">See them in the wild <span>↗</span></Link></div>
        </section>
        <section className="section catalog-section"><div className="catalog-note"><span>THE EVERYDAY EDIT</span><span>DESIGNED WITH THE LONG WAY IN MIND.</span></div><div className="product-grid catalog-grid">{products.map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}</div></section>
        <section className="collection-end"><p className="eyebrow">THAT&apos;S THE LINEUP</p><h2>Now go make<br /><span>it yours.</span></h2><Link className="button button-dark" href="/gallery">Explore the gallery <span>↗</span></Link></section>
      </main>
      <Footer />
    </>
  );
}
