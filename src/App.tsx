import { useEffect, useState } from 'react'
import ErrorMessage from './components/ErrorMessage'
import Footer from './components/Footer'
import Header from './components/Header'
import Loader from './components/Loader'
import ProductList from './components/ProductList'
import SearchBar from './components/SearchBar'
import type { Product, ProductResponse } from './types/product'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [retryCount, setRetryCount] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    async function loadProducts() {
      setLoading(true)
      setError(null)

      try {
        const response = await fetch('https://dummyjson.com/products', {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error('La solicitud de productos no se completó.')
        }

        const data: ProductResponse = await response.json()
        setProducts(data.products)
      } catch (requestError) {
        if (requestError instanceof Error && requestError.name === 'AbortError') {
          return
        }

        setError('No pudimos cargar los productos. Revisa tu conexión e inténtalo otra vez.')
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false)
        }
      }
    }

    void loadProducts()

    return () => controller.abort()
  }, [retryCount])

  return (
    <div className="storefront" id="inicio">
      <Header />
      <main>
        <section className="hero-section">
          <div className="hero-copy">
            <p className="hero-kicker">
              <span className="kicker-dot" aria-hidden="true" />
              Una tienda para mirar distinto
            </p>
            <h1>Pequeños hallazgos. Días más tuyos.</h1>
            <p className="hero-description">
              Cosas bien elegidas para acompañarte en casa, en tus planes y en todo lo que viene.
            </p>
          </div>
          <div className="hero-art" aria-label="Selección de objetos cotidianos" role="img">
            <span className="art-orbit orbit-one" />
            <span className="art-orbit orbit-two" />
            <span className="art-sun" />
            <span className="art-caption">La buena vida<br />está en los detalles.</span>
            <span className="art-sparkle" aria-hidden="true">✳</span>
          </div>
        </section>

        <section className="discovery-section" aria-label="Buscar en Zelunia">
          <SearchBar value={searchTerm} onChange={setSearchTerm} />
          <p className="discovery-note">Ideas nuevas, momentos simples y favoritos por descubrir.</p>
        </section>

        <section className="catalog-section" id="productos">
          <div className="section-heading">
            <div>
              <p className="section-kicker">La selección Zelunia</p>
              <h2>Lo que nos gusta ahora</h2>
            </div>
            <p className="product-count">
              <span>{String(products.length).padStart(2, '0')}</span> objetos para descubrir
            </p>
          </div>
          {loading ? (
            <Loader />
          ) : error ? (
            <ErrorMessage
              message={error}
              onRetry={() => setRetryCount((currentCount) => currentCount + 1)}
            />
          ) : products.length > 0 ? (
            <ProductList products={products} />
          ) : (
            <p className="empty-state">Todavía no hay productos para mostrar.</p>
          )}
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default App
