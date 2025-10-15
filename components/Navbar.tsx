"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md shadow-md border-b border-primary/10"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto">
        <nav className="flex items-center justify-between h-16 md:h-20">
          <Link href="/" className="flex items-center">
            <span className="text-lg font-medium">DevExpress</span>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex items-center space-x-8">
            <li>
              <Link
                href="/"
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                Accueil
              </Link>
            </li>
            <li>
              <Link
                href="#services"
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="#portfolio"
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                href="/notre-histoire"
                className="text-sm text-foreground/80 hover:text-primary transition-colors"
              >
                Notre Histoire
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                className="apple-button text-sm"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </nav>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-md absolute left-0 right-0 p-4 shadow-lg border-b border-primary/10 bg-gradient-to-b from-secondary/30 to-transparent">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link
                  href="/"
                  className="block py-2 text-sm text-foreground/80 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  href="#services"
                  className="block py-2 text-sm text-foreground/80 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#portfolio"
                  className="block py-2 text-sm text-foreground/80 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/notre-histoire"
                  className="block py-2 text-sm text-foreground/80 hover:text-primary"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Notre Histoire
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="block py-2 apple-button text-center text-sm"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}
