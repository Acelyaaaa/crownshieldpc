import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="max-w-md text-center">
        <h1
          className="text-8xl font-black"
          style={{ color: '#0a1628', fontFamily: 'Montserrat,sans-serif' }}
        >
          404
        </h1>
        <h2 className="mt-4 text-xl font-semibold" style={{ color: '#0a1628' }}>
          Page not found
        </h2>
        <p className="mt-2 text-sm" style={{ color: '#6b7280' }}>
          The page you are looking for does not exist or has been moved.
        </p>
        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            style={{ backgroundColor: '#0a1628' }}
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  )
}