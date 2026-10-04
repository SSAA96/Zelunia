import type { Product } from '../types/product'
import ProductCard from './ProductCard'

interface ProductListProps {
  products: Product[]
}

function ProductList({ products }: ProductListProps) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ProductList
