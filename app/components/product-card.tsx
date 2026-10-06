import Image from "next/image";
import Link from "next/link";
import type { Product } from "../data";

export function ProductCard({ product, index }: { product: Product; index: number }) {
  return (
    <article className="product-card">
      <Link className={`product-image tone-${product.tone}`} href="/gallery" aria-label={`See ${product.name} in the gallery`}>
        <span className="product-index">0{index + 1}</span>
        {product.label && <span className="product-label">{product.label}</span>}
        <Image src={product.image} alt={`${product.name} sneaker`} width={1000} height={800} sizes="(max-width: 700px) 100vw, (max-width: 1000px) 50vw, 33vw" unoptimized />
        <span className="image-arrow" aria-hidden="true">↗</span>
      </Link>
      <div className="product-info"><div><p className="product-category">{product.category}</p><h3>{product.name}</h3></div><span className="product-price">{product.price}</span></div>
      <p className="product-description">{product.description}</p>
    </article>
  );
}
