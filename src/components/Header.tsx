function Header() {
  return (
    <>
      <div className="announcement">
        <p>Envío gratis en compras sobre $60.000</p>
      </div>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Zelunia, ir al inicio">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none">
              <path d="M7 23.5 18 6l11 17.5H7Z" fill="currentColor" />
              <path d="M11 29h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <circle cx="18" cy="23" r="3" fill="#D9EF68" />
            </svg>
          </span>
          <span className="brand-name">Zelunia</span>
        </a>

        <nav className="main-nav" aria-label="Navegación principal">
          <a href="#productos">Descubrir</a>
          <a href="#productos">La selección</a>
          <a href="#nosotros">Nuestra idea</a>
        </nav>

        <div className="bag-status" aria-label="Bolsa, 0 productos">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 8h14l1 12H4L5 8Z" stroke="currentColor" strokeWidth="1.6" />
            <path d="M9 9V6a3 3 0 0 1 6 0v3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
          <span>Bolsa</span>
          <span className="bag-count">0</span>
        </div>
      </header>
    </>
  )
}

export default Header
