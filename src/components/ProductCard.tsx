import type { Product } from '../types/product'

interface ProductCardProps {
  product: Product
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(price)

function ProductCard({ product }: ProductCardProps) {
  const discountedPrice = product.price * (1 - product.discountPercentage / 100)

  return (
    <article className="product-card">
      <div className="product-image-wrap">
        {product.discountPercentage > 0 && (
          <span className="discount-badge">-{Math.round(product.discountPercentage)}%</span>
        )}
        <img
          className="product-image"
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
        />
        <span className="favorite-mark" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M20.2 8.7c0 4.1-8.2 10-8.2 10s-8.2-5.9-8.2-10a4.4 4.4 0 0 1 8.2-2.2 4.4 4.4 0 0 1 8.2 2.2Z"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />
          </svg>
        </span>
      </div>
      <div className="product-info">
        <div className="product-meta">
          <span>{product.category}</span>
          <span className="rating" aria-label={`Calificación ${product.rating} de 5`}>
            <svg viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="m8 1.5 1.9 3.9 4.3.6-3.1 3 .7 4.3L8 11.2l-3.8 2.1.7-4.3-3.1-3 4.3-.6L8 1.5Z" fill="currentColor" />
            </svg>
            {product.rating.toFixed(1)}
          </span>
        </div>
        <h3>{product.title}</h3>
        <p className="product-description">{product.description}</p>
        <div className="product-price-row">
          <strong>{formatPrice(discountedPrice)}</strong>
          {product.discountPercentage > 0 && (
            <span className="original-price">{formatPrice(product.price)}</span>
          )}
        </div>
      </div>
    </article>
  )
}

export default ProductCard
