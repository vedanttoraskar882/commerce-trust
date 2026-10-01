import React from 'react';
import { 
  ShoppingBag, 
  Store, 
  Warehouse, 
  UtensilsCrossed, 
  Globe2, 
  CheckCircle2, 
  AlertCircle 
} from 'lucide-react';
import { FounderCard } from './FounderCard';

export const AboutSection: React.FC = () => {
  const audienceDetails = [
    {
      role: 'Consumers',
      icon: ShoppingBag,
      items: [
        'Postcode-based search',
        'Compare verified local prices',
        'Discover nearby offers',
        'Track products and price movements',
      ],
    },
    {
      role: 'Independent Retailers',
      icon: Store,
      items: [
        'Reach local buyers',
        'Publish stock and promotions',
        'Identify slow-moving lines',
        'Clear surplus stock',
        'Understand local price positioning',
      ],
    },
    {
      role: 'Wholesalers & Trade Suppliers',
      icon: Warehouse,
      items: [
        'Publish trade offers',
        'Display minimum order quantities (MOQs)',
        'Display break pricing',
        'Reach independent buyers',
        'Receive qualified trade interest',
      ],
    },
    {
      role: 'Restaurants & Food Businesses',
      icon: UtensilsCrossed,
      items: [
        'Publish time-limited offers',
        'Promote quiet-period deals',
        'Move end-of-service surplus',
        'Target consumers within collection distance',
      ],
    },
    {
      role: 'E-commerce Sellers',
      icon: Globe2,
      items: [
        'Discover UK suppliers',
        'Compare wholesale pricing',
        'Find lower-MOQ suppliers',
        'Benchmark supplier quotations',
        'Identify potentially overpriced quotation lines',
      ],
    },
  ];

  return (
    <section id="about" className="py-12 lg:py-16 bg-white border-t border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-300 text-brand-700 text-xs font-bold uppercase tracking-wider">
            <span>Market Context &amp; Purpose &bull; TrueDeal AI Ltd</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            A Shared Intelligence Layer for Local Commerce
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
            Local commerce is fragmented. CommerceTrust connects supply and demand across five essential participant groups through verified data, shared intelligence and local reach.
          </p>
        </div>

        {/* The Problem Narrative Grid */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-300 shadow-card text-left max-w-5xl mx-auto space-y-4">
          <div className="flex items-center space-x-2 text-brand-700 font-bold text-sm tracking-wide uppercase">
            <AlertCircle className="w-4 h-4 text-brand-600" />
            <span>The Fragmented Commerce Problem</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 text-sm text-slate-700 leading-relaxed font-normal">
            <p>
              Local commerce is fragmented. Consumers often cannot see what local independent businesses hold, what it costs or whether a promoted deal is genuinely good value. Independent retailers often rely on footfall, social media and limited local advertising.
            </p>
            <p>
              Wholesalers face difficulty efficiently reaching the long tail of independent retailers and online sellers. Restaurants and food businesses can lose the full value of unsold prepared food at the end of service. E-commerce sellers can struggle to benchmark supplier quotations and identify UK suppliers with workable minimum-order quantities.
            </p>
          </div>

          <div className="pt-3 border-t border-slate-200 flex items-center space-x-2 text-slate-900 font-bold text-sm">
            <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
            <span>
              CommerceTrust connects these problems through one shared local commerce platform.
            </span>
          </div>
        </div>

        {/* 5 Audience Cards */}
        <div className="mt-10">
          <div className="text-center mb-6">
            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Built Specifically for 5 Participant Groups
            </h3>
            <p className="text-sm text-slate-600 mt-1">
              Dedicated capabilities configured for each role within the local economy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 text-left">
            {audienceDetails.map((aud, index) => {
              const Icon = aud.icon;
              return (
                <div
                  key={aud.role}
                  className={`p-6 rounded-2xl bg-white border border-slate-300 shadow-card hover:shadow-card-hover hover:border-brand-400 transition-all duration-200 flex flex-col justify-between ${
                    index === 4 ? 'md:col-span-2 lg:col-span-1' : ''
                  }`}
                >
                  <div>
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 text-brand-600 flex items-center justify-center shrink-0 border border-slate-200">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-extrabold text-slate-900">
                        {aud.role}
                      </h4>
                    </div>

                    <ul className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                      {aud.items.map((item) => (
                        <li key={item} className="flex items-start space-x-2.5">
                          <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 border-t border-slate-100 text-[11px] text-slate-500 font-bold uppercase tracking-wider">
                    CommerceTrust Participant
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Secondary Founder Block without photo box */}
        <FounderCard />

      </div>
    </section>
  );
};
