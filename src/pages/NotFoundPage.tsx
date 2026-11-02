import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-neutral-50 px-4">
      <div className="text-center max-w-md">
        <div className="font-display text-8xl sm:text-9xl font-bold text-black mb-4">
          404
        </div>
        <h1 className="font-display text-3xl sm:text-4xl font-bold tracking-tighter mb-4">
          Page Not Found
        </h1>
        <p className="text-neutral-600 text-base sm:text-lg mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-neutral-800 transition-all"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
