function Footer() {
  return (
    <footer className="site-footer" id="nosotros">
      <div className="footer-main">
        <a className="brand footer-brand" href="#inicio" aria-label="Zelunia, ir al inicio">
          <span className="brand-mark" aria-hidden="true">
            <svg viewBox="0 0 36 36" fill="none">
              <path d="M7 23.5 18 6l11 17.5H7Z" fill="currentColor" />
              <path d="M11 29h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
              <circle cx="18" cy="23" r="3" fill="#D9EF68" />
            </svg>
          </span>
          <span className="brand-name">Zelunia</span>
        </a>
        <p>Elegimos objetos que hacen espacio para disfrutar lo cotidiano.</p>
        <a className="footer-contact" href="mailto:hola@zelunia.cl">hola@zelunia.cl</a>
      </div>
      <div className="footer-bottom">
        <span>© 2026 Zelunia</span>
        <span>Hecho para los días de todos los días.</span>
      </div>
    </footer>
  )
}

export default Footer
