"use client";
import Link from 'next/link';

const Navbar = () => {
  const navItems = [
    { label: 'Home', path: '/' },
    { label: 'Service', path: '/services' },
    { label: 'Works', path: '/works' },
    { label: 'News', path: '/news' },
    { label: 'Contact', path: '/contact' }
  ];

  return (
    <nav className="bg-white fixed w-full top-0 z-50 py-4">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="flex items-center gap-2">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L2 19.7778H22L12 2Z" fill="#818CF8"/>
              </svg>
              <span className="text-[#818CF8] text-xl">Klean</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="text-gray-600 hover:text-[#818CF8] text-sm"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/login"
              className="text-[#818CF8] text-sm"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="bg-[#818CF8] bg-opacity-10 text-[#818CF8] px-5 py-2 rounded-md text-sm hover:bg-opacity-20 transition-colors"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-[#818CF8]">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;