import React from 'react';
import { ShieldCheck, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onRequestPilot: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onRequestPilot }) => {
  return (
    <footer className="bg-navy-950 text-slate-300 border-t border-slate-800 pt-16 pb-12 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          
          {/* Column 1: Brand & Tagline (spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-2.5">
              <div className="w-8 h-8 rounded-lg bg-brand-600 flex items-center justify-center text-white shadow-sm">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <span className="text-2xl font-bold tracking-tight text-white font-['Plus_Jakarta_Sans']">
                Commerce<span className="text-brand-400">Trust</span>
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              AI-powered verified local commerce infrastructure connecting buyers, retailers, wholesalers, restaurants and e-commerce sellers.
            </p>

            <div className="pt-2">
              <span className="inline-block text-xs font-semibold tracking-widest text-slate-400 uppercase bg-slate-900 px-3 py-1.5 rounded-md border border-slate-800">
                Connect. Verify. Source. Save.
              </span>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Platform
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#platform" className="hover:text-white transition-colors">
                  Verified Pricing
                </a>
              </li>
              <li>
                <a href="#platform" className="hover:text-white transition-colors">
                  Local Discovery
                </a>
              </li>
              <li>
                <a href="#platform" className="hover:text-white transition-colors">
                  Surplus Matching
                </a>
              </li>
              <li>
                <a href="#platform" className="hover:text-white transition-colors">
                  Supplier Discovery
                </a>
              </li>
              <li>
                <a href="#platform" className="hover:text-white transition-colors">
                  Analytics
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  Founder
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Get Started & Corporate Details */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              Get Started
            </h4>
            <div>
              <button
                type="button"
                onClick={onRequestPilot}
                className="inline-flex items-center px-4 py-2 rounded-lg bg-brand-600 hover:bg-brand-500 text-white text-xs font-semibold transition-colors"
              >
                Request a Pilot
              </button>
            </div>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5 border-t border-slate-800">
              <p className="font-semibold text-white">TrueDeal AI Ltd</p>
              <p className="text-[11px] text-slate-400">
                Founder &amp; Managing Director: Amman Ahmed
              </p>
              <p className="text-[11px] text-slate-400 flex items-center">
                <Mail className="w-3 h-3 mr-1 text-slate-400" />
                <span>Email: [Contact Email]</span>
              </p>
              <p className="text-[11px] text-slate-400 flex items-center">
                <MapPin className="w-3 h-3 mr-1 text-slate-400" />
                <span>Registered Office: [Registered Office Address]</span>
              </p>
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-4 sm:space-y-0">
          <div>
            &copy; 2026 TrueDeal AI Ltd. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-slate-400 hover:text-slate-200 cursor-default">
              Privacy (Placeholder)
            </span>
            <span className="text-slate-400 hover:text-slate-200 cursor-default">
              Terms (Placeholder)
            </span>
            <a href="#home" className="text-brand-400 hover:text-brand-300">
              Back to Top ↑
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
