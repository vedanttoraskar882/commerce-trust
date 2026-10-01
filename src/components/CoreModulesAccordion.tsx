import React, { useState } from 'react';
import { ChevronDown, Layers, ShieldCheck, Database, Search, Activity, Sliders, Scale, AlertTriangle, MapPin, RefreshCcw, FileText, Bell } from 'lucide-react';

interface ModuleItem {
  id: number;
  name: string;
  category: string;
  icon: React.ElementType;
  description: string;
}

export const CoreModulesAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const modules: ModuleItem[] = [
    {
      id: 1,
      name: "Central Product and Pricing Database",
      category: "Data Infrastructure",
      icon: Database,
      description: "Maintains canonical product records, barcode mappings, historical market prices, pack specifications, unit measures and regional price variance benchmarks."
    },
    {
      id: 2,
      name: "AI Search and Match Layer",
      category: "Resolution & Search",
      icon: Search,
      description: "Resolves ambiguous search queries, barcodes, MPNs and semantic descriptions. Operates bidirectional matching between consumer/business demand and available supply."
    },
    {
      id: 3,
      name: "Market Data Aggregation Engine",
      category: "Pricing Evidence",
      icon: Activity,
      description: "Gathers reference market data across UK retail, wholesale and digital distribution channels to build reliable pricing baselines without bias."
    },
    {
      id: 4,
      name: "Normalisation Engine",
      category: "Pricing Evidence",
      icon: Sliders,
      description: "Standardises packaging dimensions, unit counts, order volumes, tiered trade break points, shipping surcharges and condition for genuine like-for-like evaluation."
    },
    {
      id: 5,
      name: "Fair Value Model",
      category: "Algorithmic Valuation",
      icon: Scale,
      description: "Calculates an objective fair-value bracket (lower bound, central estimate, upper bound) tailored to order scale, channel type and regional factors."
    },
    {
      id: 6,
      name: "Deception and Inflation Detection Engine",
      category: "Trust & Verification",
      icon: AlertTriangle,
      description: "Identifies artificial 'was/now' reference pricing, inflated list prices, false discount claims, misstated specs and hidden delivery or administrative fees."
    },
    {
      id: 7,
      name: "Location and Local Discovery Engine",
      category: "Geospatial Matching",
      icon: MapPin,
      description: "Ranks listings based on true practical reach, collection windows, merchant delivery radii and local market variance rather than simple radial distance."
    },
    {
      id: 8,
      name: "Promotions, Surplus and Clearance Matching Engine",
      category: "Inventory Recovery",
      icon: RefreshCcw,
      description: "Optimises the liquidation of slow-moving stock, short-dated food lots and clearance lines by pairing urgency with targeted nearby demand."
    },
    {
      id: 9,
      name: "Supplier Discovery and Quotation Benchmarking",
      category: "B2B Procurement",
      icon: FileText,
      description: "Enables independent retailers and e-commerce sellers to discover UK trade sources, parse wholesale quotes line-by-line and identify overpriced lines."
    },
    {
      id: 10,
      name: "Verified Supplier and Business Trust Layer",
      category: "Trust & Governance",
      icon: ShieldCheck,
      description: "Computes trust standings strictly based on historical verification accuracy and pricing honesty. Paid subscriptions cannot alter or purchase this standing."
    },
    {
      id: 11,
      name: "Smart Notifications and Analytics",
      category: "Insights & Dispatch",
      icon: Bell,
      description: "Delivers event-triggered notifications for tracked price changes, local surplus and trade opportunities while providing merchants with price-positioning intelligence."
    }
  ];

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="mt-16 bg-white border border-slate-200 rounded-2xl p-6 sm:p-8 shadow-subtle text-left max-w-5xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-6 border-b border-slate-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-navy-950">
              Built on 11 Core Modules
            </h3>
            <p className="text-xs sm:text-sm text-slate-500">
              The proprietary architectural foundations powering the CommerceTrust platform
            </p>
          </div>
        </div>
        <span className="text-xs font-semibold px-3 py-1 bg-slate-100 text-slate-700 rounded-full w-fit">
          System Architecture
        </span>
      </div>

      <div className="mt-6 divide-y divide-slate-100">
        {modules.map((mod, idx) => {
          const isOpen = openIndex === idx;
          const Icon = mod.icon;
          return (
            <div key={mod.id} className="py-3">
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between text-left py-2 px-3 rounded-xl hover:bg-slate-50 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
                aria-expanded={isOpen}
              >
                <div className="flex items-center space-x-3">
                  <span className="w-7 h-7 rounded-lg bg-slate-100 text-slate-700 font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    {String(mod.id).padStart(2, '0')}
                  </span>
                  <div>
                    <span className="font-semibold text-sm sm:text-base text-navy-950 block">
                      {mod.name}
                    </span>
                    <span className="text-[11px] text-brand-600 font-medium">
                      {mod.category}
                    </span>
                  </div>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon className="w-4 h-4 text-slate-400 hidden sm:block" />
                  <ChevronDown
                    className={`w-4 h-4 text-slate-500 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-brand-600' : ''
                    }`}
                  />
                </div>
              </button>

              {isOpen && (
                <div className="px-12 py-3 text-xs sm:text-sm text-slate-600 leading-relaxed bg-slate-50/80 rounded-xl mt-1 border border-slate-100 animate-fadeIn">
                  <p>{mod.description}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
