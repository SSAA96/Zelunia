import type { Product } from '../types/product'
import { getCategoryLabel } from '../utils/category'
import ProductCard from './ProductCard'

interface ProductListProps {
  products: Product[]
  onAddToCart: (product: Product) => void
}

function ProductList({ products, onAddToCart }: ProductListProps) {
  const groupedProducts = products.reduce<Record<string, Product[]>>((groups, product) => {
    groups[product.category] ??= []
    groups[product.category].push(product)
    return groups
  }, {})
  const categories = Object.keys(groupedProducts).sort((first, second) =>
    getCategoryLabel(first).localeCompare(getCategoryLabel(second), 'es'),
  )

  return (
    <div className="category-groups">
      {categories.map((category) => (
        <section className="product-category" key={category} aria-labelledby={`category-${category}`}>
          <div className="product-category-heading">
            <h3 id={`category-${category}`}>{getCategoryLabel(category)}</h3>
            <span>{groupedProducts[category].length} productos</span>
          </div>
          <div className="product-grid">
            {groupedProducts[category].map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={onAddToCart} />
            ))}
          </div>
        </section>
      ))}
    </div>
  )
}

export default ProductList
