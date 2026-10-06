import Image from "next/image";
import Link from "next/link";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { ProductCard } from "./components/product-card";
import { features, products } from "./data";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span className="eyebrow-dot" /> MADE FOR YOUR NEXT MOVE</p>
            <h1>RUN YOUR<br /><span>OWN</span> PACE.</h1>
            <p className="hero-description">Performance that feels effortless. Style that never stands still. Meet the shoes built to take you wherever you&apos;re going.</p>
            <div className="hero-actions"><Link className="button button-dark" href="/portfolio">Explore the collection <span>↗</span></Link><Link className="text-link" href="/about">The Sprinter story <span>→</span></Link></div>
            <div className="hero-proof"><div className="avatar-stack" aria-hidden="true"><span>S</span><span>R</span><span>+</span></div><p><strong>Find your forward.</strong><br />A little more movement, every day.</p></div>
          </div>
          <div className="hero-visual">
            <div className="hero-orbit" />
            <span className="hero-vertical">SPRINTER / RUN CLUB / 001</span>
            <Image className="hero-shoe" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1400&q=90" alt="Red performance sneaker" width={1400} height={1000} priority unoptimized />
            <div className="hero-stamp"><span>MOVE</span><strong>YOUR<br />WAY</strong><span>EST. EVERY DAY</span></div>
            <div className="hero-product-note"><span>01 / 06</span><strong>Velocity One</strong><span>Built for the long way home.</span></div>
          </div>
          <div className="hero-bottom"><span>01 — 04</span><span>SCROLL TO FIND YOUR PACE <span>↓</span></span><span>DESIGNED TO MOVE</span></div>
        </section>

        <section className="section section-featured">
          <div className="section-heading"><div><p className="eyebrow">THE LINEUP / 2026</p><h2>Good shoes.<br /><span>Better days.</span></h2></div><p className="section-intro">From the first step to the last train home, there&apos;s a Sprinter for the way you move.</p></div>
          <div className="product-grid">{products.slice(0, 3).map((product, index) => <ProductCard key={product.name} product={product} index={index} />)}</div>
          <div className="center-link"><Link className="button button-outline" href="/portfolio">See the full collection <span>↗</span></Link></div>
        </section>

        <section className="manifesto">
          <div className="manifesto-image"><Image src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=1200&q=85" alt="Sneaker in warm afternoon light" width={1200} height={1050} unoptimized /><span className="image-caption">A GOOD DAY STARTS SOMEWHERE.</span></div>
          <div className="manifesto-copy"><p className="eyebrow">A NOTE FROM SPRINTER</p><h2>Not just made<br />to move. <span>Made<br />to feel something.</span></h2><p>That deep breath before you go. The extra block because the light is good. The feeling of getting there in your own time. We make shoes for all of it.</p><Link className="text-link" href="/about">A little more about us <span>→</span></Link><div className="manifesto-mark" aria-hidden="true">S<span>.</span></div></div>
        </section>

        <section className="section benefits-section">
          <div className="section-heading compact-heading"><div><p className="eyebrow">THE LITTLE THINGS ADD UP</p><h2>Comfort with<br /><span>somewhere to go.</span></h2></div></div>
          <div className="feature-grid">{features.map((feature, index) => <article className="feature-card" key={feature.title}><span className="feature-number">0{index + 1}</span><span className="feature-symbol" aria-hidden="true">{feature.symbol}</span><h3>{feature.title}</h3><p>{feature.description}</p></article>)}</div>
        </section>

        <section className="closing-cta"><span className="cta-spark" aria-hidden="true">✳</span><p className="eyebrow">WHERE TO NEXT?</p><h2>Your next<br /><span>good thing.</span></h2><p>Find the pair that feels like you. We&apos;ll meet you out there.</p><Link className="button button-light" href="/gallery">Find your pair <span>↗</span></Link></section>
      </main>
      <Footer />
    </>
  );
}
