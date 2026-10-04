interface ErrorMessageProps {
  message: string
  onRetry?: () => void
}

function ErrorMessage({ message, onRetry }: ErrorMessageProps) {
  return (
    <div className="state-message error-state" role="alert">
      <span className="error-mark" aria-hidden="true">!</span>
      <p>{message}</p>
      {onRetry && (
        <button className="retry-button" type="button" onClick={onRetry}>
          Intentar de nuevo
        </button>
      )}
    </div>
  )
}

export default ErrorMessage
