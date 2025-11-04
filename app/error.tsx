'use client';

import { useEffect } from 'react';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log error to error reporting service (e.g., Sentry)
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-red-900 to-orange-900 px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Error Icon */}
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full bg-red-500/20 flex items-center justify-center">
            <AlertTriangle size={64} className="text-red-400" aria-hidden="true" />
          </div>
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-5xl font-bold text-white">
            Something Went Wrong
          </h1>
          <p className="text-xl text-gray-300 max-w-md mx-auto">
            An unexpected error occurred. We apologize for the inconvenience.
          </p>

          {/* Error details (only in development) */}
          {process.env.NODE_ENV === 'development' && (
            <details className="mt-4 p-4 bg-gray-800/50 rounded-lg text-left max-w-lg mx-auto">
              <summary className="cursor-pointer text-sm text-gray-400 hover:text-gray-300">
                Error Details (Development Only)
              </summary>
              <pre className="mt-2 text-xs text-red-400 overflow-auto">
                {error.message}
                {error.digest && `\nError Digest: ${error.digest}`}
              </pre>
            </details>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <button
            onClick={reset}
            className="flex items-center space-x-2 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Try again"
          >
            <RefreshCw size={20} aria-hidden="true" />
            <span>Try Again</span>
          </button>
          <a
            href="/"
            className="flex items-center space-x-2 px-8 py-4 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-semibold transition-colors border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Go back to homepage"
          >
            <Home size={20} aria-hidden="true" />
            <span>Go Home</span>
          </a>
        </div>

        {/* Help Text */}
        <div className="pt-8 text-gray-400 text-sm">
          <p>If this problem persists, please contact:</p>
          <a
            href="mailto:nazmulredoy.csecu@gmail.com"
            className="text-blue-400 hover:text-blue-300 underline focus:outline-none focus:ring-2 focus:ring-blue-500 rounded"
          >
            nazmulredoy.csecu@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
