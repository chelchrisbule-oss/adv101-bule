import Image from "next/image";
import Link from "next/link";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { values } from "../data";

const stats = [
  { number: "06", label: "DEMO STYLES IN THE LINEUP" },
  { number: "∞", label: "WAYS TO FIND YOUR OWN PACE" },
  { number: "1", label: "GOOD REASON TO GET OUTSIDE" },
  { number: "100%", label: "FICTIONAL BRAND / REAL INTENTION" },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero about-hero"><p className="eyebrow"><span className="eyebrow-dot" /> A SMALL INTRODUCTION</p><div className="page-hero-row"><h1>We believe<br />in <span>going.</span></h1><p>Not just getting somewhere. The good bit is everything that happens on the way.</p></div><div className="page-hero-foot"><span>SPRINTER STUDIO / OUR STORY</span><span>TAKE THE SCENIC ROUTE.</span></div></section>
        <section className="about-intro"><div className="about-photo"><Image src="https://images.unsplash.com/photo-1520256862855-398228c41684?auto=format&fit=crop&w=1400&q=85" alt="A quiet sunlit road winding through the landscape" width={1400} height={1000} unoptimized /><span className="image-caption">THE LONG WAY IS THE GOOD WAY.</span></div><div className="about-intro-copy"><p className="eyebrow">WHY SPRINTER EXISTS</p><h2>For the way<br /><span>life actually moves.</span></h2><p>Sprinter is a little idea about everyday movement. It&apos;s for catching the early train, getting some air between meetings, and deciding the scenic route is worth it.</p><p>We imagine footwear that brings comfort, considered design, and a sense of possibility together. Nothing complicated. Just a good pair that makes you want to see where the day goes.</p><span className="signature">See you out there, <strong>S.</strong></span></div></section>
        <section className="mission-section"><article><p className="eyebrow">OUR MISSION</p><h2>Make the everyday<br /><span>feel like somewhere.</span></h2><p>To create thoughtfully designed shoes that help make everyday movement more comfortable, confident, and your own.</p></article><article><p className="eyebrow">OUR VISION</p><h2>A world that takes<br /><span>the longer way.</span></h2><p>We imagine a future where getting there matters just as much as arriving—and there&apos;s always room for one more little detour.</p></article></section>
        <section className="section values-section"><div className="section-heading compact-heading"><div><p className="eyebrow">THE THINGS WE COME BACK TO</p><h2>Our kind of<br /><span>ground rules.</span></h2></div></div><div className="values-grid">{values.map((value, index) => <article className="value-card" key={value.title}><span className="feature-number">0{index + 1}</span><span className="feature-symbol" aria-hidden="true">{value.symbol}</span><h3>{value.title}</h3><p>{value.description}</p></article>)}</div></section>
        <section className="stats-section"><div className="stats-heading"><p className="eyebrow">A FEW NUMBERS (WITH A LITTLE IMAGINATION)</p><h2>Small brand.<br /><span>Big-day energy.</span></h2></div><div className="stats-grid">{stats.map((stat) => <article key={stat.label}><strong>{stat.number}</strong><span>{stat.label}</span></article>)}</div><p className="demo-disclaimer">Sprinter is a fictional concept brand created for this portfolio. These are design-story details, not real company claims.</p></section>
        <section className="closing-cta about-cta"><span className="cta-spark" aria-hidden="true">✳</span><p className="eyebrow">ENOUGH ABOUT US</p><h2>Let&apos;s see<br /><span>where you go.</span></h2><Link className="button button-light" href="/gallery">Take a look around <span>↗</span></Link></section>
      </main>
      <Footer />
    </>
  );
}
