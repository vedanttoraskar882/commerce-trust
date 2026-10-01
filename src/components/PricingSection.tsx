import React from 'react';
import { 
  Check, 
  ShieldCheck, 
  Sparkles, 
  FileCheck2,
  Megaphone,
  Database,
  Network
} from 'lucide-react';

interface PricingSectionProps {
  onRequestPilot: () => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onRequestPilot }) => {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-200 text-brand-700 text-xs font-semibold uppercase tracking-wider">
            <span>Transparent Subscription Tiers</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight">
            Market Pricing
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            Aligned directly with participant scale and commercial functionality. No hidden setup fees, no artificial lock-ins.
          </p>
        </div>

        {/* Commercial Integrity Banner */}
        <div className="mt-8 max-w-4xl mx-auto p-4 rounded-xl bg-slate-50 border border-slate-200 flex items-center space-x-3 text-left">
          <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
          <p className="text-xs sm:text-sm text-slate-700 leading-normal">
            <strong className="text-navy-950">Commercial Principle:</strong> Subscription tier, promotion spend and featured placement strictly do <span className="underline decoration-slate-400">not</span> alter fair-value calculations, deception scores, verification status, or platform trust standing.
          </p>
        </div>

        {/* 4 Main Pricing Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left items-stretch">
          
          {/* CONSUMERS */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:shadow-card hover:border-brand-300 transition-all flex flex-col justify-between">
            <div>
              <div className="pb-4 border-b border-slate-100">
                <span className="text-xs uppercase tracking-wider font-bold text-brand-600 block mb-1">
                  Participant Tier
                </span>
                <h3 className="text-xl font-bold text-navy-950">
                  Consumers
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-extrabold text-navy-950 tracking-tight">
                    FREE
                  </span>
                </div>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed min-h-[48px]">
                  Search local supply, compare verified prices, discover genuine nearby offers and track items.
                </p>
              </div>

              {/* Features */}
              <ul className="py-5 space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Postcode-based search</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Verified local pricing</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Product tracking</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Local offer alerts</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>No consumer subscription fee</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <a
                href="#platform"
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-sm font-semibold transition-colors"
              >
                Explore CommerceTrust
              </a>
            </div>
          </div>

          {/* INDEPENDENT RETAILERS */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:shadow-card hover:border-brand-300 transition-all flex flex-col justify-between">
            <div>
              <div className="pb-4 border-b border-slate-100">
                <span className="text-xs uppercase tracking-wider font-bold text-brand-600 block mb-1">
                  Participant Tier
                </span>
                <h3 className="text-xl font-bold text-navy-950">
                  Independent Retailers
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                    £9.99 – £49.99
                  </span>
                  <span className="text-xs text-slate-500 font-medium ml-1">/ month</span>
                </div>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed min-h-[48px]">
                  Reach local high-intent shoppers, clear surplus inventory, and benchmark your local price position.
                </p>
              </div>

              {/* Features */}
              <ul className="py-5 space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Product listings</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Local discovery</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Promotions publishing</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Surplus clearance</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Business analytics</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Market positioning insights</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={onRequestPilot}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-brand-700 text-white text-sm font-semibold transition-colors shadow-sm"
              >
                Request a Pilot
              </button>
            </div>
          </div>

          {/* RESTAURANTS & E-COMMERCE SELLERS */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-brand-200 shadow-card hover:shadow-card-hover transition-all flex flex-col justify-between relative ring-1 ring-brand-500/20">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-navy-900 text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
              Food &amp; Digital Commerce
            </div>

            <div>
              <div className="pb-4 border-b border-slate-100">
                <span className="text-xs uppercase tracking-wider font-bold text-brand-600 block mb-1">
                  Participant Tier
                </span>
                <h3 className="text-xl font-bold text-navy-950">
                  Restaurants &amp; E-commerce
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                    £19.99 – £99.99
                  </span>
                  <span className="text-xs text-slate-500 font-medium ml-1">/ month</span>
                </div>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed min-h-[48px]">
                  Time-sensitive food surplus recovery and wholesale quotation benchmarking for online sellers.
                </p>
              </div>

              {/* Dual Features Breakdown */}
              <div className="py-4 space-y-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Restaurant Capabilities:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>Time-limited offers &amp; quiet periods</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>Local radius collection targeting</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                      <span>Surplus food matching &amp; notifications</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    E-commerce Seller Capabilities:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    <li className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                      <span>UK supplier discovery &amp; low MOQs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                      <span>Wholesale-price benchmarking</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <Check className="w-3.5 h-3.5 text-brand-600 shrink-0 mt-0.5" />
                      <span>Quotation comparison &amp; trade sourcing</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={onRequestPilot}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-semibold transition-colors shadow-sm"
              >
                Request a Pilot
              </button>
            </div>
          </div>

          {/* WHOLESALERS & TRADE SUPPLIERS */}
          <div className="p-6 sm:p-7 rounded-2xl bg-white border border-slate-200 shadow-subtle hover:shadow-card hover:border-brand-300 transition-all flex flex-col justify-between">
            <div>
              <div className="pb-4 border-b border-slate-100">
                <span className="text-xs uppercase tracking-wider font-bold text-brand-600 block mb-1">
                  Participant Tier
                </span>
                <h3 className="text-xl font-bold text-navy-950">
                  Wholesalers &amp; Trade
                </h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-2xl sm:text-3xl font-extrabold text-navy-950 tracking-tight">
                    £99 – £499
                  </span>
                  <span className="text-xs text-slate-500 font-medium ml-1">/ month</span>
                </div>
                <p className="mt-3 text-xs text-slate-500 leading-relaxed min-h-[48px]">
                  Publish tiered bulk trade offers, connect with independent retailers and e-commerce buyers.
                </p>
              </div>

              {/* Features */}
              <ul className="py-5 space-y-3 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Bulk trade offers &amp; clearance lots</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>MOQ &amp; tiered break-pricing display</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Reach independent trade buyers</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Qualified trade lead delivery</span>
                </li>
                <li className="flex items-start space-x-2.5">
                  <Check className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                  <span>Trade analytics &amp; territory insights</span>
                </li>
              </ul>
            </div>

            <div className="pt-4 border-t border-slate-100">
              <button
                type="button"
                onClick={onRequestPilot}
                className="w-full inline-flex items-center justify-center px-4 py-2.5 rounded-xl bg-navy-900 hover:bg-brand-700 text-white text-sm font-semibold transition-colors shadow-sm"
              >
                Request a Pilot
              </button>
            </div>
          </div>

        </div>

        {/* OPTIONAL SERVICES / ADD-ONS ROW */}
        <div className="mt-16 bg-slate-50/90 border border-slate-200 rounded-2xl p-6 sm:p-8 text-left max-w-5xl mx-auto shadow-subtle">
          <div className="border-b border-slate-200 pb-4 mb-6">
            <div className="flex items-center space-x-2 text-navy-950">
              <Sparkles className="w-5 h-5 text-brand-600" />
              <h3 className="text-xl font-bold">
                Optional Commercial Services &amp; Add-ons
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Supplementary capability modules available to registered business participants
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Add-on 1: Promotion Credits */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-navy-950 uppercase tracking-wider">Promotion Credits</span>
                  <Megaphone className="w-4 h-4 text-brand-600" />
                </div>
                <div className="text-2xl font-bold text-navy-950 mb-2">
                  £4.99 <span className="text-xs font-normal text-slate-500">per credit</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Used for featured promotions and targeted local offer distribution. Promoted offers remain strictly subject to verification.
                </p>
              </div>
            </div>

            {/* Add-on 2: Featured Campaigns */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-navy-950 uppercase tracking-wider">Featured Campaigns</span>
                  <Sparkles className="w-4 h-4 text-brand-600" />
                </div>
                <div className="text-2xl font-bold text-navy-950 mb-2">
                  £50 – £500 <span className="text-xs font-normal text-slate-500">per campaign</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Campaign pricing scales depending on campaign duration, geographic delivery radius, and catalogue prominence.
                </p>
              </div>
            </div>

            {/* Add-on 3: Verified Supplier Certification */}
            <div className="p-4 rounded-xl bg-white border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-navy-950 uppercase tracking-wider">Verified Certification</span>
                  <FileCheck2 className="w-4 h-4 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-navy-950 mb-2">
                  £12 <span className="text-xs font-normal text-slate-500">/ month</span>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Verified standing must first be earned through CommerceTrust assessment history. Paying £12/month allows an eligible business to display the standing; payment does not buy the standing itself.
                </p>
              </div>
            </div>

          </div>

          {/* Later Commercial Stage Services Notice */}
          <div className="mt-6 pt-5 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs text-slate-600">
            <div className="flex items-start space-x-2">
              <Network className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-950 block">Lead Generation:</strong>
                <span>Available by agreement (planned for later commercial stage).</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <Database className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-950 block">API Licensing:</strong>
                <span>Available by agreement (planned for later commercial stage).</span>
              </div>
            </div>

            <div className="flex items-start space-x-2">
              <ShieldCheck className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
              <div>
                <strong className="text-navy-950 block">Market Intelligence:</strong>
                <span>Available by agreement based on aggregated, anonymised data.</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
