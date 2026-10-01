import React from 'react';
import { 
  Search, 
  ShieldCheck, 
  MapPin, 
  Percent, 
  FileSpreadsheet, 
  BarChart3, 
  ArrowRight, 
  Check, 
  Clock, 
  Lock
} from 'lucide-react';
import { CoreModulesAccordion } from './CoreModulesAccordion';

export const PlatformSection: React.FC = () => {
  return (
    <section id="platform" className="py-12 lg:py-16 bg-slate-100/70 border-t border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-300 text-brand-700 text-xs font-bold uppercase tracking-wider">
            <span>Core Intelligence Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            One Platform. Multiple Commerce Intelligence Engines.
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
            CommerceTrust combines product resolution, pricing evidence, AI matching, fair-value assessment, local discovery, surplus matching, supplier intelligence and trust analytics in one shared architecture.
          </p>
        </div>

        {/* 6 Main Capability Cards Grid */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          
          {/* CARD 1 — AI Product Search & Matching */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-300 shadow-card hover:shadow-card-hover hover:border-brand-400 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-brand-600 flex items-center justify-center mb-4 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                <Search className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                AI Product Search &amp; Matching
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                CommerceTrust resolves what a user is actually searching for rather than relying only on keywords.
              </p>

              <div className="space-y-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Resolution Capabilities:
                </span>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 font-medium">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Barcode, MPN and product-code matching</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Semantic description &amp; category matching</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Image-based recognition where available</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>Bidirectional supply-to-demand matching</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sub-visual matching block */}
            <div className="mt-4 pt-4 border-t border-slate-200 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <span className="text-[11px] font-bold text-slate-900 block mb-2">
                Shared Cross-Participant Matching:
              </span>
              <div className="space-y-1.5 text-xs text-slate-600">
                <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded border border-slate-200">
                  <span className="font-medium">Consumer Demand</span>
                  <ArrowRight className="w-3 h-3 text-brand-600" />
                  <span className="font-bold text-slate-800">Retailer Stock</span>
                </div>
                <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded border border-slate-200">
                  <span className="font-medium">Retailer Sourcing</span>
                  <ArrowRight className="w-3 h-3 text-brand-600" />
                  <span className="font-bold text-slate-800">Wholesale Offers</span>
                </div>
                <div className="flex items-center justify-between bg-white px-2.5 py-1.5 rounded border border-slate-200">
                  <span className="font-medium">Surplus Supply</span>
                  <ArrowRight className="w-3 h-3 text-brand-600" />
                  <span className="font-bold text-slate-800">Consumers &amp; Trade</span>
                </div>
              </div>
            </div>
          </div>

          {/* CARD 2 — Verified Pricing Intelligence */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-300 shadow-card hover:shadow-card-hover hover:border-brand-400 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                Verified Pricing Intelligence
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Offers are compared against market evidence before being presented as genuine deals.
              </p>

              <div className="space-y-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Underlying Functions:
                </span>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 font-medium">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Market data aggregation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Data normalisation &amp; pack standardization</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Fair-value bracket modelling</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Deception &amp; artificial inflation detection</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Sub-visual valuation process */}
            <div className="mt-4 pt-4 border-t border-slate-200 bg-slate-50 p-3.5 rounded-xl border border-slate-200 space-y-2.5">
              <span className="text-[11px] font-bold text-slate-900 block">
                Verification Pipeline:
              </span>
              <div className="flex items-center justify-between text-[10px] text-slate-700 font-bold overflow-x-auto pb-1">
                <span className="bg-white px-2 py-1 rounded border border-slate-200">Evidence</span>
                <span>&rarr;</span>
                <span className="bg-white px-2 py-1 rounded border border-slate-200">Normalise</span>
                <span>&rarr;</span>
                <span className="bg-white px-2 py-1 rounded border border-slate-200">Fair Value</span>
                <span>&rarr;</span>
                <span className="bg-emerald-100 text-emerald-800 px-2 py-1 rounded font-bold border border-emerald-300">Verified</span>
              </div>
              <div className="p-2 bg-white rounded-lg border border-slate-200 text-[11px] space-y-1">
                <div className="flex justify-between text-slate-600 font-semibold font-mono">
                  <span>Lower: £18.20</span>
                  <span className="text-slate-900 font-bold">Central: £21.50</span>
                  <span>Upper: £24.00</span>
                </div>
                <p className="text-[10px] text-emerald-700 font-bold text-center">
                  Fair-value bracket derived before deal display
                </p>
              </div>
            </div>
          </div>

          {/* CARD 3 — Location & Local Discovery */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-300 shadow-card hover:shadow-card-hover hover:border-brand-400 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-cyan-100 text-cyan-700 flex items-center justify-center mb-4 group-hover:bg-cyan-600 group-hover:text-white transition-colors">
                <MapPin className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                Location &amp; Local Discovery
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                CommerceTrust ranks supply according to practical reach, not just straight-line distance.
              </p>

              <div className="space-y-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Practical Reach Factors:
                </span>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 font-medium">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Postcode &amp; physical collection distance</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Retailer local delivery radius</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Wholesale trade delivery territory</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-600 shrink-0" />
                    <span>Time remaining for collection window</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 bg-slate-50 p-3.5 rounded-xl border border-slate-200">
              <span className="text-[11px] font-bold text-slate-900 block mb-1.5">
                Regional Price Nuance:
              </span>
              <p className="text-xs text-slate-600 leading-relaxed">
                Local market variation and delivery logistics directly inform price normalization, ensuring fair comparison tailored to geographic context.
              </p>
            </div>
          </div>

          {/* CARD 4 — Promotions, Surplus & Clearance */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-300 shadow-card hover:shadow-card-hover hover:border-brand-400 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                <Percent className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                Promotions, Surplus &amp; Clearance
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Businesses publish promotions, time-limited offers, residual inventory, end-of-line lots and prepared food surplus.
              </p>

              <div className="space-y-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Intelligent Liquidation:
                </span>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 font-medium">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Assesses offer against fair-value baselines</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Identifies qualified buyer segments</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Matches consumer, retailer &amp; trade demand</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-amber-600 shrink-0" />
                    <span>Prioritises stock before value degrades</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-slate-200 bg-slate-50 p-3.5 rounded-xl border border-slate-200 flex items-center space-x-3">
              <Clock className="w-5 h-5 text-amber-600 shrink-0" />
              <div className="text-xs">
                <span className="font-bold text-slate-900 block">Urgency &amp; Fulfilment Aware</span>
                <span className="text-slate-600">Considers expiry windows &amp; immediate collection capacity.</span>
              </div>
            </div>
          </div>

          {/* CARD 5 — Supplier Discovery & Quotation Benchmarking */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-300 shadow-card hover:shadow-card-hover hover:border-brand-400 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center mb-4 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                <FileSpreadsheet className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                Supplier Discovery &amp; Quotation Benchmarking
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Designed primarily for independent retailers and e-commerce sellers to source competitively.
              </p>

              <div className="space-y-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  B2B Sourcing Tools:
                </span>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 font-medium">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Search UK suppliers by product or category</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Filter suppliers by workable minimum order quantities</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Compare wholesale quotes with normalised pack sizes</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-indigo-600 shrink-0" />
                    <span>Flag line items that sit above fair market value</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Visual quotation pipeline */}
            <div className="mt-4 pt-4 border-t border-slate-200 bg-slate-50 p-3 rounded-xl border border-slate-200">
              <span className="text-[11px] font-bold text-slate-900 block mb-1.5">
                Quotation Benchmarking Flow:
              </span>
              <div className="flex items-center justify-between text-[10px] text-slate-700 font-bold bg-white p-2 rounded border border-slate-200">
                <span>Upload</span>
                <span>&rarr;</span>
                <span>Parse</span>
                <span>&rarr;</span>
                <span>Resolve</span>
                <span>&rarr;</span>
                <span>Normalise</span>
                <span>&rarr;</span>
                <span className="text-red-700 font-black">Flag</span>
              </div>
            </div>
          </div>

          {/* CARD 6 — Trust, Notifications & Analytics */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-300 shadow-card hover:shadow-card-hover hover:border-brand-400 transition-all duration-200 flex flex-col justify-between group">
            <div>
              <div className="w-12 h-12 rounded-xl bg-slate-200 text-slate-900 flex items-center justify-center mb-4 group-hover:bg-slate-900 group-hover:text-white transition-colors">
                <BarChart3 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-extrabold text-slate-900 mb-2">
                Trust, Notifications &amp; Analytics
              </h3>
              <p className="text-sm text-slate-700 leading-relaxed mb-4">
                Verified trust metrics earned through platform history, paired with actionable merchant analytics.
              </p>

              <div className="space-y-2 mb-4">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block">
                  Trust &amp; Intelligence:
                </span>
                <ul className="text-xs sm:text-sm text-slate-700 space-y-1.5 font-medium">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-slate-900 shrink-0" />
                    <span>Verified status earned solely from assessment history</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-slate-900 shrink-0" />
                    <span>Smart notifications for price movements &amp; surplus</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-slate-900 shrink-0" />
                    <span>Analytics on listing searches, views &amp; price rank</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-slate-900 shrink-0" />
                    <span>Slow-moving inventory diagnostic signals</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Visual Trust Callout */}
            <div className="mt-4 pt-3 border-t border-slate-200 bg-slate-900 text-white p-3 rounded-xl flex items-center space-x-2.5">
              <Lock className="w-4 h-4 text-brand-400 shrink-0" />
              <p className="text-[11px] font-medium leading-tight">
                <span className="font-bold text-white block">Commercial Integrity Rule:</span>
                “Paid promotion never changes a verification outcome.”
              </p>
            </div>
          </div>

        </div>

        {/* Technical Architecture Accordion */}
        <CoreModulesAccordion />

      </div>
    </section>
  );
};
