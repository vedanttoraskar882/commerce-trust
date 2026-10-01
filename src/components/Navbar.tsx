import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  onRequestPilot: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onRequestPilot }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Platform', href: '#platform' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#faq' },
  ];

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/98 backdrop-blur-md border-b border-slate-200 shadow-sm'
          : 'bg-white/95 backdrop-blur-sm border-b border-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo / Wordmark - Pure Text, No Logo Icon, Company Name Clear, Perfectly Aligned Motto */}
          <a
            href="#home"
            className="flex flex-col text-left group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-lg py-1"
          >
            <div className="flex items-baseline space-x-2">
              <span className="text-2xl sm:text-[26px] font-extrabold tracking-tight text-slate-900 group-hover:text-brand-700 transition-colors">
                Commerce<span className="text-brand-600">Trust</span>
              </span>
              <span className="hidden sm:inline-block text-[11px] font-bold text-slate-500 uppercase tracking-wider border-l border-slate-300 pl-2">
                by TrueDeal AI Ltd
              </span>
            </div>
            <span className="text-[10px] uppercase font-bold tracking-[0.14em] text-slate-500 mt-0.5">
              Connect. Verify. Source. Save.
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-semibold text-slate-700 hover:text-brand-600 rounded-lg hover:bg-slate-100 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right CTA */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              type="button"
              onClick={onRequestPilot}
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-slate-900 hover:bg-brand-600 active:bg-brand-700 rounded-lg shadow-sm transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
            >
              Request a Pilot
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-600"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-2 shadow-lg text-left">
          <div className="px-3 pb-2 mb-2 border-b border-slate-100 text-xs text-slate-500 font-semibold">
            TrueDeal AI Ltd &bull; UK Software Company
          </div>
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 rounded-lg text-base font-semibold text-slate-800 hover:bg-slate-100 hover:text-brand-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-slate-100">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                onRequestPilot();
              }}
              className="w-full py-3 px-4 text-center font-semibold text-white bg-slate-900 hover:bg-brand-600 rounded-lg shadow-sm transition-colors text-sm"
            >
              Request a Pilot
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
