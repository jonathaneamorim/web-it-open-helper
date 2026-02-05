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
      className={`fixed w-full top-0 z-50 transition-all duration-300 border-b border-white/5 font-sans ${
        scrolled || isMenuOpen 
          ? 'bg-slate-900/90 backdrop-blur-xl shadow-lg py-3' 
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
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:bg-indigo-500 transition-colors">
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
                href="https://github.com/jonathaneamorim/web-it-open-helper" 
                target="_blank" 
                rel="noreferrer"
                className="px-4 py-2 text-sm font-bold bg-white text-slate-900 rounded-full hover:bg-indigo-50 transition-colors shadow-sm"
              >
                GitHub
              </a>
            </li>
          </ul>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 text-slate-300 hover:text-white rounded-lg transition-colors focus:outline-none"
            aria-label="Menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between items-center">
              <span 
                className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'rotate-45 translate-y-2.5' : ''
                }`} 
              />
              <span 
                className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  isMenuOpen ? 'opacity-0 translate-x-2' : 'opacity-100'
                }`} 
              />
              <span 
                className={`block w-full h-0.5 bg-current rounded-full transition-all duration-300 ease-in-out ${
                  isMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`} 
              />
            </div>
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] bg-slate-900/95 backdrop-blur-xl border-t border-slate-800 ${
          isMenuOpen ? 'max-h-[24rem] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container mx-auto px-4 py-6 space-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.url}
                onClick={() => setIsMenuOpen(false)}
                className="block px-4 py-3 text-base font-medium text-slate-300 hover:bg-slate-800 hover:text-white rounded-xl transition-all duration-200"
              >
                {link.name}
              </Link>
            </li>
          ))}
          <li className="pt-4 border-t border-slate-800 mt-2">
            <a 
              href="https://github.com/jonathaneamorim/web-it-open-helper"
              target="_blank"
              rel="noreferrer"
              className="block px-4 py-3 text-base font-bold text-center bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition-colors"
            >
              GitHub Repo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}