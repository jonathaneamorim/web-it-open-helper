'use client';

import { useState } from 'react';
import Link from 'next/link'; // Import essencial para SPA
import { Title } from "../title/title";
import navigationData from "@/data/navigation.json"; // Seu arquivo de dados

export function HeaderPrimary() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // Pegamos apenas a navegação principal do JSON
  const links = navigationData.mainNav;

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full h-16 bg-(--foreground) sticky top-0 z-50 shadow-md">
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-full">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-(--background) hover:opacity-80 transition-opacity">
              <Title text="IT Open Helper" />
            </Link>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-2">
            {links.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.url}
                  className="px-4 py-2 text-(--background) hover:bg-(--background) hover:text-(--foreground) transition-all duration-200 rounded-md font-medium"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Button (Hamburger) */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-(--background) hover:bg-(--background) hover:bg-opacity-10 rounded-md transition-colors"
            aria-label="Alternar menu"
            aria-expanded={isMenuOpen}
          >
            {/* Ícone Hamburger/Close simplificado */}
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

      {/* Mobile Menu Dropdown */}
      <div
        className={`lg:hidden bg-(--foreground) border-t border-(--background) border-opacity-20 transition-all duration-300 ease-in-out overflow-hidden ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="container mx-auto px-4 py-4 space-y-2">
          {links.map((link) => (
            <li key={link.name}>
              <Link
                href={link.url}
                onClick={closeMenu}
                className="block px-4 py-3 text-(--background) hover:bg-(--background) hover:text-(--foreground) transition-all duration-200 rounded-md font-medium"
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