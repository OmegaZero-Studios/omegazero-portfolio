'use client';

import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 px-4">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* 404 Error Code */}
        <div className="space-y-4">
          <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-4xl font-bold text-white">
            Page Not Found
          </h2>
          <p className="text-xl text-gray-300 max-w-md mx-auto">
            Sorry, the page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Decorative Element */}
        <div className="flex justify-center">
          <div className="w-32 h-32 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center font-bold text-white text-5xl animate-pulse">
            ΩZ
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
          <Link
            href="/"
            className="flex items-center space-x-2 px-8 py-4 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Go back to homepage"
          >
            <Home size={20} aria-hidden="true" />
            <span>Back to Home</span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="flex items-center space-x-2 px-8 py-4 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-semibold transition-colors border border-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-900"
            aria-label="Go back to previous page"
          >
            <ArrowLeft size={20} aria-hidden="true" />
            <span>Go Back</span>
          </button>
        </div>

        {/* Help Text */}
        <div className="pt-8 text-gray-400 text-sm">
          <p>If you believe this is an error, please contact:</p>
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
