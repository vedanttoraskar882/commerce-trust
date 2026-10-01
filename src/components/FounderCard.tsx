import React from 'react';
import { GraduationCap, Briefcase, ShoppingCart } from 'lucide-react';

export const FounderCard: React.FC = () => {
  return (
    <div className="mt-8 p-6 sm:p-7 rounded-2xl bg-white border border-slate-300 shadow-card text-left max-w-4xl mx-auto">
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-100 pb-3">
          <div>
            <span className="text-xs uppercase tracking-wider font-bold text-brand-600 block">
              Platform Leadership &bull; TrueDeal AI Ltd
            </span>
            <h4 className="text-xl sm:text-2xl font-extrabold text-slate-900">
              Amman Ahmed
            </h4>
          </div>
          <span className="inline-flex items-center text-xs font-bold px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-800 border border-slate-300 w-fit">
            Founder &amp; Managing Director
          </span>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed font-normal">
          Amman Ahmed combines experience in e-commerce, retail operations, software development and machine-learning research. The CommerceTrust concept developed from his direct experience of sourcing stock as an online seller and managing inventory within retail, alongside his academic work involving machine-learning-based deception detection.
        </p>

        {/* Credentials and background */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-700 font-medium">
          <div className="flex items-center space-x-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <GraduationCap className="w-4 h-4 text-brand-600 shrink-0" />
            <span>MSc Computing and Information Systems, Univ. of South Wales</span>
          </div>
          <div className="flex items-center space-x-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <GraduationCap className="w-4 h-4 text-brand-600 shrink-0" />
            <span>BSc Computer Engineering</span>
          </div>
          <div className="flex items-center space-x-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <ShoppingCart className="w-4 h-4 text-brand-600 shrink-0" />
            <span>Founder &amp; Director of a UK e-commerce business</span>
          </div>
          <div className="flex items-center space-x-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-200">
            <Briefcase className="w-4 h-4 text-brand-600 shrink-0" />
            <span>Retail management &amp; software/web development background</span>
          </div>
        </div>
      </div>
    </div>
  );
};
