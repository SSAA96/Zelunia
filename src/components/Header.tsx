interface HeaderProps {
  cartCount: number
  onOpenCart: () => void
  onOpenCatalog: () => void
}

function Header({ cartCount, onOpenCart, onOpenCatalog }: HeaderProps) {
  return (
    <>
      <div className="announcement">
        <p>Envío gratis en compras sobre US$60</p>
      </div>
      <header className="site-header">
        <a className="brand" href="#inicio" onClick={(event) => { event.preventDefault(); onOpenCatalog() }} aria-label="Zelunia, ir al inicio">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none">
              <path d="M7 23.5 18 6l11 17.5H7Z" fill="currentColor" />
              <path d="M11 29h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <circle cx="18" cy="23" r="3" fill="#D9EF68" />
            </svg>
          </span>
          <span className="brand-name">Zelunia</span>
        </a>

        <div className="header-center">
          <p className="header-tagline">Objetos elegidos para acompañar cada día</p>
          <nav className="main-nav" aria-label="Navegación principal">
            <a href="#productos" onClick={(event) => { event.preventDefault(); onOpenCatalog() }}>Descubrir</a>
            <a href="#productos" onClick={(event) => { event.preventDefault(); onOpenCatalog() }}>La selección</a>
            <a href="#nosotros" onClick={(event) => { event.preventDefault(); onOpenCatalog() }}>Nuestra idea</a>
          </nav>
        </div>

        <button className="bag-status" type="button" onClick={onOpenCart} aria-label={`Abrir bolsa, ${cartCount} productos`}>
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 8h14l1 12H4L5 8Z" stroke="currentColor" strokeWidth="1.6" />
            <path d="M9 9V6a3 3 0 0 1 6 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span>Bolsa</span>
          <span className="bag-count">{cartCount}</span>
        </button>
      </header>
    </>
  )
}

export default Header
