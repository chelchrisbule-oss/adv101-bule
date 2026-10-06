"use client";

import Image from "next/image";
import { useState } from "react";
import { products } from "../data";

const categories = ["ALL PAIRS", "RUNNING", "LIFESTYLE", "TRAINING"];

export function GalleryGrid() {
  const [category, setCategory] = useState("ALL PAIRS");
  const [selected, setSelected] = useState<(typeof products)[number] | null>(null);
  const filtered = products.filter((product) => category === "ALL PAIRS" || product.category.startsWith(category));

  return (
    <>
      <div className="gallery-toolbar" aria-label="Filter gallery by category">
        <p>THE SPRINTER LINEUP <span>— {filtered.length} PAIRS</span></p>
        <div className="gallery-filters">{categories.map((item) => <button className={category === item ? "selected" : ""} type="button" key={item} onClick={() => setCategory(item)} aria-pressed={category === item}>{item}</button>)}</div>
      </div>
      <div className="gallery-grid">{filtered.map((product, index) => (
        <button className={`gallery-item tone-${product.tone}`} type="button" key={product.name} onClick={() => setSelected(product)} aria-label={`Preview ${product.name}`}>
          <Image src={product.image} alt={`${product.name} sneaker`} width={1000} height={800} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" unoptimized />
          <span className="gallery-item-number">0{index + 1}</span>
          <span className="gallery-item-overlay"><span><strong>{product.name}</strong><small>{product.category}</small></span><span className="gallery-open" aria-hidden="true">↗</span></span>
        </button>
      ))}</div>
      {selected && <div className="lightbox" role="presentation" onClick={() => setSelected(null)}><section className="lightbox-panel" role="dialog" aria-modal="true" aria-label={`${selected.name} preview`} onClick={(event) => event.stopPropagation()}><button className="lightbox-close" type="button" aria-label="Close preview" onClick={() => setSelected(null)}>×</button><div className={`lightbox-image tone-${selected.tone}`}><Image src={selected.image} alt={`${selected.name} sneaker`} width={1200} height={1000} unoptimized /></div><div className="lightbox-details"><p className="eyebrow">{selected.category}</p><h2>{selected.name}</h2><p>{selected.description}</p><strong>{selected.price}</strong></div></section></div>}
    </>
  );
}
