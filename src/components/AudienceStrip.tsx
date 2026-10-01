import React from 'react';
import { ShoppingBag, Store, Warehouse, UtensilsCrossed, Globe2 } from 'lucide-react';

export const AudienceStrip: React.FC = () => {
  const audiences = [
    { label: 'Consumers', icon: ShoppingBag, desc: 'Verified local deals & fair pricing' },
    { label: 'Retailers', icon: Store, desc: 'Footfall & surplus recovery' },
    { label: 'Wholesalers', icon: Warehouse, desc: 'Trade offers & independent buyers' },
    { label: 'Restaurants', icon: UtensilsCrossed, desc: 'Time-sensitive food surplus' },
    { label: 'E-commerce Sellers', icon: Globe2, desc: 'Supplier benchmarking & lower MOQs' },
  ];

  return (
    <div className="border-y border-slate-200/80 bg-white/60 backdrop-blur-sm py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
          <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-slate-500 whitespace-nowrap">
            <span className="w-2 h-2 rounded-full bg-brand-500"></span>
            <span>Built for the local commerce ecosystem:</span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
            {audiences.map((aud) => {
              const Icon = aud.icon;
              return (
                <div
                  key={aud.label}
                  className="flex items-center space-x-2.5 px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-200/60 hover:border-brand-300 hover:bg-white transition-all text-left"
                >
                  <Icon className="w-4 h-4 text-brand-600 shrink-0" />
                  <div>
                    <span className="block text-xs font-bold text-navy-950 leading-tight">
                      {aud.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
