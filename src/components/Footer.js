import Link from "next/link";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const footerDirectories = {
  services: [
    { href: "/services#on-page", label: "On-Page SEO Optimization" },
    { href: "/services#technical", label: "Technical SEO Audit & Setup" },
    { href: "/services#link-building", label: "High-Authority Link Building" },
    { href: "/services#local-seo", label: "Local SEO & Google Maps" },
    { href: "/services#content", label: "Content Strategy & Copywriting" },
    { href: "/services#audits", label: "Comprehensive SEO Audits" },
    { href: "/services#speed", label: "Speed & Core Web Vitals" },
    { href: "/services#schema", label: "Structured Schema Markup" },
  ],
  specialties: [
    { href: "/services", label: "Enterprise B2B Campaigns" },
    { href: "/services", label: "SaaS & Tech SEO Growth" },
    { href: "/services", label: "Local Service Directory Maps" },
    { href: "/services", label: "E-Commerce SEO Architecture" },
    { href: "/services", label: "Finance & Fintech SEO" },
    { href: "/services", label: "Medical & Healthcare Rankings" },
    { href: "/services", label: "Professional Services SEO" },
    { href: "/services", label: "Multi-Location SEO Auditing" },
  ],
  locations: [
    { href: "/contact", label: "SEO Services New York" },
    { href: "/contact", label: "SEO Services Los Angeles" },
    { href: "/contact", label: "SEO Services Chicago" },
    { href: "/contact", label: "SEO Services Houston" },
    { href: "/contact", label: "SEO Services Phoenix" },
    { href: "/contact", label: "SEO Services Philadelphia" },
    { href: "/contact", label: "SEO Services San Antonio" },
    { href: "/contact", label: "SEO Services San Diego" },
  ],
  company: [
    { href: "/about", label: "About SEOPals" },
    { href: "/about#values", label: "Our Core Values" },
    { href: "/services#difference", label: "The SEOPals Difference" },
    { href: "/contact", label: "Schedule Strategy Call" },
    { href: "#", label: "Careers (We're Hiring!)" },
    { href: "#", label: "Partner Program" },
    { href: "#", label: "Case Studies" },
    { href: "/contact", label: "Get Free Proposal" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white border-t border-white/5">
      {/* Main Footer Directory */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          
          {/* Logo & Agency Stats Column */}
          <div className="lg:col-span-2 space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-brand-lime flex items-center justify-center text-brand-blue-deep font-black text-xl">
                S
              </div>
              <div>
                <span className="text-white font-extrabold text-2xl tracking-tight leading-none block">
                  SEO<span className="text-brand-lime">Pals</span>
                </span>
                <span className="text-gray-400 text-[8px] uppercase tracking-[0.25em] block">
                  Architect SEO Services
                </span>
              </div>
            </Link>
            
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              SEOPals is the premier search engine optimization architecture firm delivering enterprise-grade search growth and localized rankings.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3">
              {[
                { name: <FaLinkedin />, href: "#" },
                { name: <FaTwitter />, href: "#" },
                { name: <FaFacebook />, href: "#" },
                { name: <FaInstagram />, href: "#" },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-brand-lime hover:border-brand-lime/30 hover:bg-white/10 transition-all duration-300"
                >
                  {social.name}
                </a>
              ))}
            </div>

            {/* Performance Stats */}
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-white/10 max-w-sm">
              <div>
                <div className="text-brand-lime font-black text-3xl">150+</div>
                <div className="text-gray-400 text-[10px] uppercase tracking-wider mt-1 font-semibold">Active Clients</div>
              </div>
              <div>
                <div className="text-white font-black text-3xl">97%</div>
                <div className="text-gray-400 text-[10px] uppercase tracking-wider mt-1 font-semibold">Client Retention</div>
              </div>
              <div>
                <div className="text-white font-black text-3xl">12.3K+</div>
                <div className="text-gray-400 text-[10px] uppercase tracking-wider mt-1 font-semibold">Page 1 Keywords</div>
              </div>
              <div>
                <div className="text-brand-lime font-black text-3xl">234%</div>
                <div className="text-gray-400 text-[10px] uppercase tracking-wider mt-1 font-semibold">Avg Traffic Gain</div>
              </div>
            </div>
          </div>

          {/* Directory Column 1: SEO Services */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-white/5">
              SEO Services
            </h4>
            <ul className="space-y-3">
              {footerDirectories.services.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-xs hover:text-brand-lime transition-colors duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Directory Column 2: Specialties */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-white/5">
              Specialties
            </h4>
            <ul className="space-y-3">
              {footerDirectories.specialties.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-xs hover:text-brand-lime transition-colors duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Directory Column 3: Locations */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-white/5">
              Locations
            </h4>
            <ul className="space-y-3">
              {footerDirectories.locations.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-xs hover:text-brand-lime transition-colors duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Directory Column 4: Company */}
          <div>
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-6 pb-2 border-b border-white/5">
              Company
            </h4>
            <ul className="space-y-3">
              {footerDirectories.company.map((link, idx) => (
                <li key={idx}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-xs hover:text-brand-lime transition-colors duration-200 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>

      {/* Quote Banner */}
      <div className="bg-brand-navy-light py-8 border-t border-b border-white/5 text-center px-4">
        <p className="text-gray-400 text-sm italic max-w-xl mx-auto">
          &ldquo;We serve what we represent: Excellence, Commitment, and absolute transparency in ranking your business above the competition.&rdquo;
        </p>
      </div>

      {/* Legal & Copyright */}
      <div className="bg-brand-navy-light text-gray-500 text-xs py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            &copy; {new Date().getFullYear()} SEOPals LLC. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Crawlability Disclosures</a>
            <a href="#" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
