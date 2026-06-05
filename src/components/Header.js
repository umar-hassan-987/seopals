"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      {/* Top Banner Bar */}
      <div className="bg-brand-blue-medium text-white text-[11px] sm:text-xs py-2 px-4 sm:px-6 lg:px-8 flex items-center justify-between border-b border-white/10">
        <div className="flex items-center gap-2">
          <span className="inline-block w-2.5 h-2.5 bg-brand-lime rounded-full"></span>
          <span className="font-semibold tracking-wide uppercase text-[10px]">Google Certified Partner</span>
        </div>
        <div className="flex items-center gap-4 sm:gap-6">
          <a href="tel:+15551234567" className="hover:text-brand-lime transition-colors flex items-center gap-1.5">
            <FaPhoneAlt className="text-[10px]" /> Call Us Today: <span className="font-bold">+1 (555) 123-4567</span>
          </a>
          <span className="hidden sm:inline text-white/30">|</span>
          <a href="mailto:info@seopals.com" className="hidden sm:inline hover:text-brand-lime transition-colors flex items-center gap-1.5">
            <FaEnvelope className="text-[10px]" /> info@seopals.com
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <header
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md py-3"
            : "bg-white border-b border-gray-100 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-brand-blue-deep flex items-center justify-center text-brand-lime font-black text-xl group-hover:bg-brand-blue-accent transition-colors duration-300">
                S
              </div>
              <div>
                <span className="text-brand-blue-deep font-extrabold text-2xl tracking-tight leading-none block">
                  SEO<span className="text-brand-blue-medium">Pals</span>
                </span>
                <span className="text-gray-400 text-[8px] uppercase tracking-[0.25em] block -mt-0.5">
                  Architect SEO Services
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-bold rounded-lg transition-all duration-300 ${
                    pathname === link.href
                      ? "text-brand-blue-accent"
                      : "text-brand-blue-deep hover:text-brand-blue-accent hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-brand-blue-accent rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* Phone & CTA Button */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href="tel:+15551234567"
                className="text-brand-blue-deep font-bold text-sm hover:text-brand-blue-accent flex items-center gap-1.5 transition-colors"
              >
                <FaPhoneAlt className="text-xs" /> (555) 123-4567
              </a>
              <Link
                href="/contact"
                className="px-6 py-2.5 bg-brand-lime text-brand-blue-deep font-extrabold text-sm rounded-lg hover:bg-brand-lime-hover transition-all duration-300 shadow-md hover:shadow-lg shadow-brand-lime/10"
              >
                Get My Free Audit
              </Link>
            </div>

            {/* Mobile Menu Buttons */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden relative w-10 h-10 flex items-center justify-center text-brand-blue-deep"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5">
                <span
                  className={`block w-6 h-0.5 bg-brand-blue-deep transition-all duration-300 ${
                    mobileOpen ? "rotate-45 translate-y-2" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-brand-blue-deep transition-all duration-300 ${
                    mobileOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block w-6 h-0.5 bg-brand-blue-deep transition-all duration-300 ${
                    mobileOpen ? "-rotate-45 -translate-y-2" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${
            mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="bg-white border-t border-gray-100 px-4 py-6 space-y-1 shadow-inner">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`block px-4 py-3 rounded-lg text-sm font-bold transition-colors ${
                  pathname === link.href
                    ? "text-brand-blue-accent bg-brand-blue-light"
                    : "text-brand-blue-deep hover:text-brand-blue-accent hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-4 px-4 flex flex-col gap-3">
              <a
                href="tel:+15551234567"
                className="text-center py-2 text-brand-blue-deep font-bold text-sm hover:text-brand-blue-accent flex items-center justify-center gap-1.5"
              >
                <FaPhoneAlt className="text-xs" /> (555) 123-4567
              </a>
              <Link
                href="/contact"
                className="block w-full text-center px-6 py-3 bg-brand-lime text-brand-blue-deep font-extrabold text-sm rounded-lg hover:bg-brand-lime-hover transition-all"
              >
                Get My Free Audit
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </div>
  );
}
