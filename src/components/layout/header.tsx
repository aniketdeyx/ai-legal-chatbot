import Link from 'next/link';
import { Button } from '../ui/button';
import { merriweather } from '@/app/fonts';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full shadow-sm bg-white transition-all">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <Link href="/" className="flex items-center space-x-2">
          <span className={`${merriweather.className} text-2xl font-bold text-blue-700 tracking-tight`}>
            LawMate
          </span>
        </Link>

        {/* Navigation */}
        <nav className="flex items-center gap-6 text-sm font-medium">
          <Link
            href="/"
            className="text-gray-700 hover:text-blue-700 transition-colors duration-200"
          >
            Home
          </Link>
          <Link
            href="/chat"
            className="text-gray-700 hover:text-blue-700 transition-colors duration-200"
          >
            Chat
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-blue-700 transition-colors duration-200"
          >
            About
          </Link>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition duration-200"
          >
            Get Started
          </Button>
        </nav>
      </div>
    </header>
  );
}
