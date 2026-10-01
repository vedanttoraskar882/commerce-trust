import React from 'react';
import { Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onRequestPilot?: () => void;
}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-slate-800 pt-12 pb-10 text-left">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Content: Neatly Aligned Left & Right Columns */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 lg:gap-16 pb-10 border-b border-slate-800">
          
          {/* Left Column: Brand & Corporate Details */}
          <div className="max-w-lg space-y-4">
            <div className="flex flex-col text-left">
              <div className="flex items-baseline space-x-2">
                <span className="text-2xl sm:text-[26px] font-extrabold tracking-tight text-white">
                  Commerce<span className="text-brand-400">Trust</span>
                </span>
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider border-l border-slate-700 pl-2">
                  by TrueDeal AI Ltd
                </span>
              </div>
              <span className="text-[10px] uppercase font-bold tracking-[0.14em] text-slate-400 mt-1">
                Connect. Verify. Source. Save.
              </span>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed font-normal">
              AI-powered verified local commerce infrastructure connecting buyers, retailers, wholesalers, restaurants and e-commerce sellers.
            </p>

            <div className="pt-2 text-xs text-slate-400 space-y-1.5 border-t border-slate-800/80">
              <p className="text-slate-300 font-semibold">
                TrueDeal AI Ltd &bull; UK Software Company
              </p>
              <p className="text-slate-400">
                Founder &amp; Managing Director: Amman Ahmed
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[11px] text-slate-400 pt-0.5">
                <span className="flex items-center">
                  <Mail className="w-3 h-3 mr-1 text-slate-500" />
                  Email: [Contact Email]
                </span>
                <span className="flex items-center">
                  <MapPin className="w-3 h-3 mr-1 text-slate-500" />
                  Registered Office: [Registered Office Address]
                </span>
              </div>
            </div>
          </div>

          {/* Right Navigation: Platform & Company Columns */}
          <div className="flex flex-row space-x-12 sm:space-x-20 lg:space-x-24 text-left">
            {/* Column: Platform */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                Platform
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
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

            {/* Column: Company */}
            <div className="space-y-3">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-white">
                Company
              </h4>
              <ul className="space-y-2.5 text-sm text-slate-400 font-medium">
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
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 space-y-3 sm:space-y-0">
          <div>
            &copy; 2026 TrueDeal AI Ltd. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            <span className="text-slate-500 cursor-default">
              Privacy (Placeholder)
            </span>
            <span className="text-slate-500 cursor-default">
              Terms (Placeholder)
            </span>
            <a href="#home" className="text-brand-400 hover:text-brand-300 font-bold">
              Back to Top &uarr;
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
