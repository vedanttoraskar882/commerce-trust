import React, { useState, useEffect } from 'react';
import { Menu, X, ShieldCheck } from 'lucide-react';

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
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo / Wordmark */}
          <a
            href="#home"
            className="flex flex-col group focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 rounded-lg p-1"
          >
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-navy-900 flex items-center justify-center text-brand-400 group-hover:bg-brand-700 transition-colors shadow-sm">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl sm:text-2xl font-bold tracking-tight text-navy-950 font-['Plus_Jakarta_Sans']">
                Commerce<span className="text-brand-600">Trust</span>
              </span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold pl-10.5 -mt-1 hidden sm:block">
              Connect. Verify. Source. Save.
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-700 hover:text-brand-600 rounded-md hover:bg-slate-50 transition-colors"
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
              className="inline-flex items-center justify-center px-5 py-2.5 text-sm font-semibold text-white bg-navy-900 hover:bg-brand-700 active:bg-brand-800 rounded-lg shadow-sm transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
            >
              Request a Pilot
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-brand-600"
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
        <div className="md:hidden border-b border-slate-200 bg-white/98 backdrop-blur-md px-4 pt-3 pb-6 space-y-2 shadow-lg">
          <nav className="flex flex-col space-y-1" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={handleLinkClick}
                className="px-3 py-2.5 rounded-lg text-base font-medium text-slate-800 hover:bg-slate-100 hover:text-brand-600 transition-colors"
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
              className="w-full py-3 px-4 text-center font-semibold text-white bg-navy-900 hover:bg-brand-700 rounded-lg shadow-sm transition-colors text-sm"
            >
              Request a Pilot
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
