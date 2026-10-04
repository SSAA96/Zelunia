function Loader() {
  return (
    <div className="state-message loading-state" role="status" aria-live="polite">
      <span className="loader-spinner" aria-hidden="true" />
      <p>Estamos preparando la selección para ti…</p>
    </div>
  )
}

export default Loader
