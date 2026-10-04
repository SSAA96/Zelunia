import type { CartItem } from '../types/cart'

interface CartPageProps {
  items: CartItem[]
  onContinueShopping: () => void
  onDecrease: (productId: number) => void
  onIncrease: (productId: number) => void
  onRemove: (productId: number) => void
}

const formatPrice = (price: number) =>
  new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)

const getDiscountedPrice = (price: number, discountPercentage: number) =>
  price * (1 - discountPercentage / 100)

function CartPage({ items, onContinueShopping, onDecrease, onIncrease, onRemove }: CartPageProps) {
  const total = items.reduce(
    (sum, item) =>
      sum + getDiscountedPrice(item.product.price, item.product.discountPercentage) * item.quantity,
    0,
  )

  return (
    <section className="cart-section" aria-labelledby="cart-title">
      <div className="cart-heading">
        <div>
          <p className="section-kicker">Tu selección Zelunia</p>
          <h1 id="cart-title">Tu bolsa</h1>
          <p className="cart-intro">Revisa los productos que elegiste y ajusta las cantidades.</p>
        </div>
        <button className="text-button" type="button" onClick={onContinueShopping}>
          Seguir descubriendo
        </button>
      </div>

      {items.length === 0 ? (
        <div className="cart-empty empty-state" role="status">
          <span className="cart-empty-icon" aria-hidden="true">♡</span>
          <h2>Tu bolsa está esperando algo especial</h2>
          <p>Cuando encuentres algo que te guste, aparecerá aquí.</p>
          <button className="primary-button" type="button" onClick={onContinueShopping}>
            Explorar productos
          </button>
        </div>
      ) : (
        <div className="cart-layout">
          <div className="cart-items" aria-label="Productos en la bolsa">
            {items.map(({ product, quantity }) => {
              const price = getDiscountedPrice(product.price, product.discountPercentage)

              return (
                <article className="cart-item" key={product.id}>
                  <img className="cart-item-image" src={product.thumbnail} alt={product.title} />
                  <div className="cart-item-info">
                    <span className="cart-item-category">{product.category}</span>
                    <h2>{product.title}</h2>
                    <strong>{formatPrice(price)}</strong>
                    <div className="quantity-control" aria-label={`Cantidad de ${product.title}`}>
                      <button
                        type="button"
                        aria-label={`Quitar una unidad de ${product.title}`}
                        onClick={() => onDecrease(product.id)}
                      >−</button>
                      <span aria-live="polite">{quantity}</span>
                      <button
                        type="button"
                        aria-label={`Agregar una unidad de ${product.title}`}
                        onClick={() => onIncrease(product.id)}
                      >+</button>
                    </div>
                  </div>
                  <div className="cart-item-actions">
                    <strong>{formatPrice(price * quantity)}</strong>
                    <button
                      className="remove-button"
                      type="button"
                      onClick={() => onRemove(product.id)}
                    >
                      Quitar
                    </button>
                  </div>
                </article>
              )
            })}
          </div>

          <aside className="cart-summary" aria-labelledby="summary-title">
            <h2 id="summary-title">Resumen de compra</h2>
            <div className="summary-line">
              <span>Productos ({items.reduce((sum, item) => sum + item.quantity, 0)})</span>
              <strong>{formatPrice(total)}</strong>
            </div>
            <div className="summary-line">
              <span>Envío</span>
              <span>Se calcula más adelante</span>
            </div>
            <div className="summary-total">
              <span>Total de productos</span>
              <strong>{formatPrice(total)}</strong>
            </div>
            <p className="cart-demo-note">Esta es una vista de demostración. El pago no está habilitado.</p>
            <button className="text-button summary-continue" type="button" onClick={onContinueShopping}>
              Seguir descubriendo
            </button>
          </aside>
        </div>
      )}
    </section>
  )
}

export default CartPage
