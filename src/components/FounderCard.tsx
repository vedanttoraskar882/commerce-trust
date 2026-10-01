import React from 'react';
import { GraduationCap, Briefcase, ShoppingCart } from 'lucide-react';

export const FounderCard: React.FC = () => {
  return (
    <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200/90 shadow-subtle text-left max-w-4xl mx-auto">
      <div className="flex flex-col sm:flex-row sm:items-start gap-6">
        {/* Founder Avatar / Initials */}
        <div className="w-16 h-16 rounded-2xl bg-navy-900 text-brand-400 flex items-center justify-center font-bold text-xl shrink-0 shadow-sm border border-slate-700">
          AA
        </div>

        {/* Content */}
        <div className="space-y-3 flex-1">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 border-b border-slate-100 pb-3">
            <div>
              <span className="text-xs uppercase tracking-wider font-bold text-brand-600 block">
                Platform Leadership
              </span>
              <h4 className="text-xl font-bold text-navy-950">Amman Ahmed</h4>
            </div>
            <span className="inline-flex items-center text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-700 border border-slate-200">
              Founder &amp; Managing Director
            </span>
          </div>

          <p className="text-sm text-slate-600 leading-relaxed">
            Amman Ahmed combines experience in e-commerce, retail operations, software development and machine-learning research. The CommerceTrust concept developed from his direct experience of sourcing stock as an online seller and managing inventory within retail, alongside his academic work involving machine-learning-based deception detection.
          </p>

          {/* Background pills */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 text-xs text-slate-600">
            <div className="flex items-center space-x-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
              <GraduationCap className="w-4 h-4 text-brand-600 shrink-0" />
              <span>MSc Computing and Information Systems, Univ. of South Wales</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
              <GraduationCap className="w-4 h-4 text-brand-600 shrink-0" />
              <span>BSc Computer Engineering</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
              <ShoppingCart className="w-4 h-4 text-brand-600 shrink-0" />
              <span>Founder &amp; Director of a UK e-commerce business</span>
            </div>
            <div className="flex items-center space-x-2 bg-slate-50 p-2 rounded-lg border border-slate-100">
              <Briefcase className="w-4 h-4 text-brand-600 shrink-0" />
              <span>Retail management &amp; software/web development background</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
