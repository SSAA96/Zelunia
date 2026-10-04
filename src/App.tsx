import { useState } from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import ProductList from './components/ProductList'
import SearchBar from './components/SearchBar'
import { sampleProducts } from './data/products'
import './App.css'

function App() {
  const [searchTerm, setSearchTerm] = useState('')

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
              <span>{String(sampleProducts.length).padStart(2, '0')}</span> objetos para descubrir
            </p>
          </div>
          <ProductList products={sampleProducts} />
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default App
