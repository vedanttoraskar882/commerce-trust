import React, { useState } from 'react';
import { 
  Upload, 
  Cpu, 
  Scale, 
  Crosshair, 
  Handshake, 
  ChevronDown, 
  Info, 
  ShoppingBag, 
  Store, 
  Clock, 
  FileSpreadsheet
} from 'lucide-react';

export const HowItWorksSection: React.FC = () => {
  const [showDetailedWorkflow, setShowDetailedWorkflow] = useState(false);

  const simplifiedSteps = [
    {
      num: 1,
      title: 'Publish or Search',
      icon: Upload,
      publisher: 'Businesses publish stock, pricing, trade offers, promotions or surplus.',
      buyer: 'Buyers search by postcode, product, category or free text.',
    },
    {
      num: 2,
      title: 'Resolve & Normalise',
      icon: Cpu,
      detail: 'CommerceTrust identifies canonical products, standardises pack size & unit quantities, and normalises specifications, condition, trade tier breaks, fulfilment and region.',
    },
    {
      num: 3,
      title: 'Verify Fair Value',
      icon: Scale,
      detail: 'The system retrieves market evidence, calculates a fair-value bracket (lower, central, upper), evaluates the offer, and inspects for artificial reference pricing or deceptive inflation.',
    },
    {
      num: 4,
      title: 'Match & Rank',
      icon: Crosshair,
      detail: 'Supply and demand are matched according to product relevance, verified fair value, practical reach (travel/delivery radius), urgency, and collection constraints.',
    },
    {
      num: 5,
      title: 'Connect Directly',
      icon: Handshake,
      detail: 'The buyer and business transact directly. CommerceTrust introduces verified parties without acting as merchant of record, taking stock, or processing transaction funds.',
    },
  ];

  const detailedSteps = [
    { id: 1, title: 'Publication', desc: 'Business publishes stock, pricing, promotion, trade offer or surplus.' },
    { id: 2, title: 'Resolution', desc: 'The product is mapped to a canonical record.' },
    { id: 3, title: 'Normalisation', desc: 'Price variables are adjusted for like-for-like comparison.' },
    { id: 4, title: 'Valuation', desc: 'A fair-value range is calculated.' },
    { id: 5, title: 'Assessment', desc: 'The offer is scored for pricing issues.' },
    { id: 6, title: 'Business Feedback', desc: 'The assessment is returned to the publisher before publication.' },
    { id: 7, title: 'Indexing', desc: 'The assessed record becomes discoverable.' },
    { id: 8, title: 'Search or Match', desc: 'A buyer searches or the system identifies a relevant demand match.' },
    { id: 9, title: 'Ranking', desc: 'Results are ordered using relevance, verified value and obtainability.' },
    { id: 10, title: 'Notification', desc: 'Relevant tracked or urgent offers are pushed to users.' },
    { id: 11, title: 'Fulfilment', desc: 'The buyer and business transact directly.' },
    { id: 12, title: 'Feedback', desc: 'Reported outcomes help improve platform models and trust records.' },
  ];

  const userMiniWorkflows = [
    {
      title: 'Consumer Journey',
      icon: ShoppingBag,
      flow: ['Search by postcode', 'Compare verified offers', 'Track item', 'Receive alerts'],
    },
    {
      title: 'Business Publishing',
      icon: Store,
      flow: ['Upload listing', 'Resolve product', 'Normalise', 'Verify', 'Publish'],
    },
    {
      title: 'Surplus Clearance',
      icon: Clock,
      flow: ['Mark surplus', 'Enter qty / price / window', 'Benchmark', 'Match buyers', 'Transact directly'],
    },
    {
      title: 'Trade Sourcing',
      icon: FileSpreadsheet,
      flow: ['Search / upload quotation', 'Normalise trade pricing', 'Benchmark', 'Flag expensive lines', 'Contact supplier'],
    },
  ];

  return (
    <section id="how-it-works" className="py-12 lg:py-16 bg-white border-t border-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-300 text-brand-700 text-xs font-bold uppercase tracking-wider">
            <span>End-to-End Workflow</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            From Published Offer to Verified Local Match
          </h2>
          <p className="text-base sm:text-lg text-slate-700 font-medium leading-relaxed">
            A transparent 5-step operational pipeline connecting buyers and merchants with verified accuracy and direct interaction.
          </p>
        </div>

        {/* 5 Simplified Frontend Steps */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-5 gap-4 relative text-left">
          {simplifiedSteps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={step.num}
                className="relative p-6 rounded-2xl bg-white border border-slate-300 shadow-card hover:shadow-card-hover hover:border-brand-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <span className="w-8 h-8 rounded-full bg-brand-600 text-white font-extrabold text-sm flex items-center justify-center shadow-sm">
                      {step.num}
                    </span>
                    <Icon className="w-5 h-5 text-slate-400" />
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 mb-2">
                    {step.title}
                  </h3>

                  {step.publisher ? (
                    <div className="text-xs text-slate-700 space-y-2">
                      <p><strong className="text-slate-900">Sell:</strong> {step.publisher}</p>
                      <p><strong className="text-slate-900">Buy:</strong> {step.buyer}</p>
                    </div>
                  ) : (
                    <p className="text-xs text-slate-700 leading-relaxed font-normal">
                      {step.detail}
                    </p>
                  )}
                </div>

                {idx < 4 && (
                  <div className="hidden md:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10">
                    <span className="w-5 h-5 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-700 text-[10px] font-bold">
                      &rarr;
                    </span>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Merchant of Record & Direct Transaction Notice */}
        <div className="mt-8 p-5 rounded-2xl bg-blue-50/90 border border-blue-200 text-left max-w-4xl mx-auto flex flex-col sm:flex-row items-start sm:items-center space-y-3 sm:space-y-0 sm:space-x-4 shadow-sm">
          <Info className="w-6 h-6 text-brand-700 shrink-0 mt-0.5 sm:mt-0" />
          <div className="text-xs sm:text-sm text-slate-800 leading-relaxed font-normal">
            <span className="font-extrabold text-slate-900 block sm:inline mr-1">
              Important Transaction Structure:
            </span>
            CommerceTrust is <span className="font-bold text-brand-800 underline decoration-brand-300">NOT the merchant of record</span>. CommerceTrust does not own stock, take possession of goods, fulfil orders, or process payments between buyers and sellers. Payment and fulfilment occur directly between the transacting parties.
          </div>
        </div>

        {/* 4 User Workflow Mini-Cards */}
        <div className="mt-10">
          <div className="text-center mb-6">
            <h3 className="text-xl font-extrabold text-slate-900">
              Tailored User Journeys
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              How participants engage with the CommerceTrust platform in practice
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left">
            {userMiniWorkflows.map((flowItem) => {
              const Icon = flowItem.icon;
              return (
                <div
                  key={flowItem.title}
                  className="p-5 rounded-2xl bg-slate-50 border border-slate-300 shadow-card hover:border-brand-400 transition-colors"
                >
                  <div className="flex items-center space-x-2.5 mb-3.5">
                    <div className="w-8 h-8 rounded-lg bg-white border border-slate-300 text-brand-600 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-extrabold text-slate-900">
                      {flowItem.title}
                    </h4>
                  </div>

                  <div className="space-y-1.5 text-xs">
                    {flowItem.flow.map((stepTxt, sIdx) => (
                      <div key={stepTxt} className="flex items-center space-x-2">
                        <span className="w-4 h-4 rounded-full bg-slate-200 border border-slate-300 text-slate-800 font-mono text-[10px] flex items-center justify-center shrink-0 font-bold">
                          {sIdx + 1}
                        </span>
                        <span className="text-slate-700 truncate font-medium">{stepTxt}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Expandable Detailed Platform Workflow (12 Steps) */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => setShowDetailedWorkflow(!showDetailedWorkflow)}
            className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 text-sm font-bold transition-all shadow-card focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600"
          >
            <span>{showDetailedWorkflow ? 'Hide' : 'View'} Detailed 12-Step Platform Specification</span>
            <ChevronDown
              className={`w-4 h-4 text-slate-600 transition-transform duration-200 ${
                showDetailedWorkflow ? 'rotate-180' : ''
              }`}
            />
          </button>

          {showDetailedWorkflow && (
            <div className="mt-6 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-300 shadow-card text-left max-w-5xl mx-auto animate-fadeIn">
              <div className="border-b border-slate-200 pb-3 mb-5">
                <h4 className="text-lg font-extrabold text-slate-900">
                  Full 12-Stage Algorithmic &amp; Operational Cycle
                </h4>
                <p className="text-xs text-slate-600">
                  Formal lifecycle of an offer from submission to verified transaction and feedback
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {detailedSteps.map((dStep) => (
                  <div key={dStep.id} className="p-3.5 rounded-xl bg-white border border-slate-300">
                    <div className="flex items-center space-x-2 mb-1.5">
                      <span className="w-6 h-6 rounded-md bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                        {dStep.id}
                      </span>
                      <span className="font-bold text-sm text-slate-900">
                        {dStep.title}
                      </span>
                    </div>
                    <p className="text-xs text-slate-700 leading-normal pl-8">
                      {dStep.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
