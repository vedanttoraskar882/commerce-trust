import React from 'react';
import { 
  ShieldCheck, 
  MapPin, 
  RefreshCw, 
  Cpu, 
  ArrowRight, 
  CheckCircle2, 
  Search, 
  Clock, 
  Sparkles
} from 'lucide-react';

interface HeroProps {
  onRequestPilot: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onRequestPilot }) => {
  return (
    <section id="home" className="relative pt-6 pb-12 lg:pt-10 lg:pb-16 overflow-hidden">
      {/* Background ambient accents */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[500px] pointer-events-none opacity-50 blur-3xl -z-10"
        aria-hidden="true"
      >
        <div className="absolute top-6 left-1/4 w-96 h-96 rounded-full bg-blue-200/50 mix-blend-multiply" />
        <div className="absolute top-10 right-1/4 w-96 h-96 rounded-full bg-cyan-100/60 mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 space-y-5 text-left">
            {/* Top Tag - Company Identity Made Prominent */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-300 text-slate-800 text-xs font-semibold tracking-wide shadow-subtle">
              <span className="flex h-2 w-2 rounded-full bg-brand-600 animate-pulse" />
              <span className="font-bold text-brand-700">TrueDeal AI Ltd</span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-700">CommerceTrust Platform</span>
              <span className="text-slate-400">|</span>
              <span className="text-slate-600 font-medium">UK Software Company</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
              Verified Local Commerce.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-700 via-brand-600 to-cyan-600">
                Smarter Buying.
              </span>{' '}
              Better Selling.
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed max-w-2xl">
              CommerceTrust is an AI-powered local commerce platform connecting consumers, retailers, wholesalers, restaurants and e-commerce sellers through verified pricing, intelligent matching and local discovery.
            </p>

            {/* Supporting Copy */}
            <p className="text-sm sm:text-base text-slate-600 leading-normal max-w-2xl">
              Search genuine nearby offers, benchmark prices, find UK suppliers, reach qualified buyers and move surplus stock before its value is lost.
            </p>

            {/* CTA Group */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-1">
              <button
                type="button"
                onClick={onRequestPilot}
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold text-white bg-slate-900 hover:bg-brand-600 active:bg-brand-700 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 focus-visible:ring-offset-2"
              >
                <span>Request a Pilot</span>
                <ArrowRight className="ml-2 w-4 h-4" />
              </button>

              <a
                href="#platform"
                className="inline-flex items-center justify-center px-6 py-3.5 text-base font-bold text-slate-800 bg-white hover:bg-slate-50 hover:text-slate-900 rounded-xl border border-slate-300 shadow-subtle transition-all duration-150 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
              >
                Explore the Platform
              </a>
            </div>

            {/* Commercial Verification Callout */}
            <div className="pt-1 flex items-center space-x-2 text-xs text-slate-600 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Independent verification guarantee: Paid promotion never influences pricing integrity or fair-value assessments.</span>
            </div>
          </div>

          {/* Right Column: Platform Dashboard Mockup */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto w-full max-w-md lg:max-w-none">
              
              {/* Decorative Glow */}
              <div className="absolute -inset-1.5 bg-gradient-to-r from-brand-600 to-cyan-500 rounded-2xl opacity-20 blur-md"></div>

              {/* Mockup Container */}
              <div className="relative bg-white rounded-2xl border border-slate-300 shadow-xl overflow-hidden text-left">
                {/* Window Header */}
                <div className="bg-slate-900 px-4 py-3 flex items-center justify-between border-b border-slate-800 text-white">
                  <div className="flex items-center space-x-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block"></span>
                    <span className="text-xs text-slate-300 font-mono pl-2">CommerceTrust Engine</span>
                  </div>
                  <span className="text-[11px] font-semibold bg-emerald-950 text-emerald-300 px-2 py-0.5 rounded border border-emerald-800 flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>Live Verification Engine</span>
                  </span>
                </div>

                <div className="p-4 sm:p-5 space-y-4 text-xs">
                  {/* Mock Search Bar */}
                  <div className="flex items-center space-x-2 p-2 bg-slate-50 border border-slate-300 rounded-lg">
                    <Search className="w-4 h-4 text-slate-500 shrink-0" />
                    <span className="font-semibold text-slate-800 truncate">Organic Extra Virgin Olive Oil 5L</span>
                    <div className="ml-auto flex items-center space-x-1 bg-white px-2 py-0.5 rounded border border-slate-300 text-[11px] text-slate-600 shrink-0 font-medium">
                      <MapPin className="w-3 h-3 text-brand-600" />
                      <span>SW1A 1AA (3.5 mi)</span>
                    </div>
                  </div>

                  {/* Valuation Breakdown Card */}
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-300 space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-600">
                        Market Evidence Valuation
                      </span>
                      <span className="inline-flex items-center space-x-1 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-800 font-bold text-[11px] border border-emerald-300">
                        <CheckCircle2 className="w-3 h-3" />
                        <span>Verified Genuine Deal</span>
                      </span>
                    </div>

                    <div className="flex items-baseline justify-between pt-1">
                      <div>
                        <span className="text-2xl font-black text-slate-900">£28.50</span>
                        <span className="text-slate-400 line-through text-xs ml-2 font-medium">Was £38.00</span>
                      </div>
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-100 px-2.5 py-0.5 rounded-md">
                        25% Verified Saving
                      </span>
                    </div>

                    {/* Fair Value Range Visualiser */}
                    <div className="space-y-1.5 pt-1">
                      <div className="flex justify-between text-[11px] text-slate-600 font-semibold">
                        <span>Lower: £26.40</span>
                        <span className="text-slate-900 font-bold">Central: £31.20</span>
                        <span>Upper: £36.00</span>
                      </div>
                      {/* Bar */}
                      <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden relative">
                        <div className="absolute left-[15%] right-[20%] top-0 bottom-0 bg-blue-200 rounded-full" />
                        <div className="absolute left-[28%] top-0 bottom-0 w-2.5 bg-emerald-600 rounded-full ring-2 ring-white" />
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-slate-600">
                        <span className="text-emerald-800 font-bold">● Current offer £28.50 within fair value</span>
                        <span className="font-medium text-slate-500">Deception Risk: Low</span>
                      </div>
                    </div>
                  </div>

                  {/* Secondary mini matches */}
                  <div className="grid grid-cols-2 gap-2.5">
                    {/* Trade Offer Mock */}
                    <div className="p-2.5 rounded-lg border border-slate-300 bg-white">
                      <div className="flex items-center justify-between text-[10px] text-slate-500 mb-1">
                        <span className="font-bold text-slate-800">Wholesale Trade</span>
                        <span className="text-brand-600 font-bold">MOQ: 10</span>
                      </div>
                      <p className="font-medium text-slate-800 text-[11px] truncate">10x Case Lot Tier</p>
                      <p className="text-xs font-black text-slate-900">£21.90 / unit</p>
                    </div>

                    {/* Surplus Alert Mock */}
                    <div className="p-2.5 rounded-lg border border-amber-300 bg-amber-50">
                      <div className="flex items-center justify-between text-[10px] text-amber-800 mb-1">
                        <span className="font-bold flex items-center">
                          <Clock className="w-2.5 h-2.5 mr-1" />
                          Surplus Alert
                        </span>
                        <span className="font-medium">4h left</span>
                      </div>
                      <p className="font-medium text-slate-800 text-[11px] truncate">End-of-day Bakery Lot</p>
                      <p className="text-xs font-black text-amber-900">£4.50 (was £12)</p>
                    </div>
                  </div>

                  {/* Verification Guarantee Footer */}
                  <div className="pt-1 border-t border-slate-200 flex items-center justify-between text-[10px] text-slate-500 font-medium">
                    <span className="flex items-center">
                      <Sparkles className="w-3 h-3 text-brand-600 mr-1" />
                      11 Engine Architecture
                    </span>
                    <span className="italic">Illustrative preview (not live data)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Trust/Value Cards below Hero */}
        <div className="mt-10 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 text-left">
          
          {/* Card 1 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-300 shadow-card hover:shadow-card-hover hover:border-brand-400 transition-all duration-200 group">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center mb-3 group-hover:bg-brand-600 group-hover:text-white transition-colors">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900 mb-1">
              Verified Pricing
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Compare offers against normalised market evidence.
            </p>
          </div>

          {/* Card 2 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-300 shadow-card hover:shadow-card-hover hover:border-brand-400 transition-all duration-200 group">
            <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-3 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900 mb-1">
              Local Discovery
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Find stock, deals and suppliers within practical reach.
            </p>
          </div>

          {/* Card 3 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-300 shadow-card hover:shadow-card-hover hover:border-brand-400 transition-all duration-200 group">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <RefreshCw className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900 mb-1">
              Surplus Recovery
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Match slow-moving and time-sensitive stock with buyers.
            </p>
          </div>

          {/* Card 4 */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-300 shadow-card hover:shadow-card-hover hover:border-brand-400 transition-all duration-200 group">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-base font-extrabold text-slate-900 mb-1">
              AI Matching
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              Connect relevant supply and demand across participant groups.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};
