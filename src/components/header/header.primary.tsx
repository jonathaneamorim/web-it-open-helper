'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import navigationData from "@/data/navigation.json";

export function HeaderPrimary() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const links = navigationData.mainNav;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b border-white/5 ${
        scrolled || isMenuOpen 
          ? 'bg-slate-900/95 backdrop-blur-md shadow-lg py-3' 
          : 'bg-slate-900 py-4'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          <div className="flex-shrink-0">
            <Link 
              href="/" 
              className="flex items-center gap-2 group"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="w-8 h-8 rounded-lg bg-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:bg-indigo-400 transition-colors">
                IT
              </div>
              <span className="text-xl font-bold text-slate-100 tracking-tight group-hover:text-white transition-colors">
                Open Helper
              </span>
            </Link>
          </div>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-all duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li className="ml-4">
              <a 
                href="https://github.com" 
                target="_blank" 
                className="px-4 py-2 text-sm font-bold bg-white text-slate-900 rounded-full hover:bg-indigo-50 transition-colors shadow-sm"
              >
                GitHub
              </a>
            </li>
          </ul>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out bg-slate-800 border-t border-slate-700 ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container mx-auto px-4 py-4 space-y-1">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.url}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-slate-300 hover:bg-indigo-500/20 hover:text-indigo-300 rounded-lg transition-colors font-medium"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}