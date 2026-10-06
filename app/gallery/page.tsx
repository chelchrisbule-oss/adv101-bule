import { Footer } from "../components/footer";
import { GalleryGrid } from "../components/gallery-grid";
import { Header } from "../components/header";

export default function GalleryPage() {
  return (
    <>
      <Header />
      <main>
        <section className="page-hero gallery-hero"><p className="eyebrow"><span className="eyebrow-dot" /> OUT AND ABOUT</p><div className="page-hero-row"><h1>Good shoes<br /><span>go places.</span></h1><p>A look at the Sprinter lineup, out in the world. Pick a pair to take a closer look.</p></div><div className="page-hero-foot"><span>THE SPRINTER PHOTO JOURNAL</span><span>MADE FOR THE IN-BETWEEN.</span></div></section>
        <section className="section gallery-section"><GalleryGrid /></section>
        <section className="gallery-note"><p className="eyebrow">A GOOD PLACE TO START</p><p>One small step. A long way from here.</p><span aria-hidden="true">↗</span></section>
      </main>
      <Footer />
    </>
  );
}
