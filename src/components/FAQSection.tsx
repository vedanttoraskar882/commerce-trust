import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

export const FAQSection: React.FC = () => {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const faqs: FAQItem[] = [
    {
      question: "What is CommerceTrust?",
      answer: "CommerceTrust is an AI-powered local commerce platform designed to connect consumers, independent retailers, wholesalers, restaurants and e-commerce sellers through verified pricing, intelligent matching and local discovery."
    },
    {
      question: "How does CommerceTrust verify prices?",
      answer: "CommerceTrust compares an offer against market evidence, normalises relevant differences such as quantity, pack size, specification, condition and region, derives a fair-value range and assesses whether the offer represents genuine value."
    },
    {
      question: "What types of pricing issues can the platform identify?",
      answer: "The platform is designed to identify over-pricing, fabricated reference prices, misleading discount presentation, incorrect specification or condition, hidden costs and unit-price obfuscation."
    },
    {
      question: "Is CommerceTrust a marketplace?",
      answer: "CommerceTrust provides discovery, verification, matching, promotion and intelligence. It does not take possession of goods and is not the merchant of record."
    },
    {
      question: "Does CommerceTrust process payments?",
      answer: "No. Buyers and businesses complete payment and fulfilment directly with one another."
    },
    {
      question: "Is CommerceTrust free for consumers?",
      answer: "Yes. Consumer access is free."
    },
    {
      question: "Who pays to use CommerceTrust?",
      answer: "Business users such as retailers, restaurants, e-commerce sellers, wholesalers and trade suppliers can use paid subscriptions and optional commercial services."
    },
    {
      question: "Can a business pay for a better verification result?",
      answer: "No. Subscription tier, promotion spend and advertising do not influence fair-value assessments, deception scores or trust standing."
    },
    {
      question: "How does Verified Supplier status work?",
      answer: "Verified standing is earned from assessment history, including pricing consistency, discount authenticity and specification accuracy. Eligible businesses may pay to display a standing already earned."
    },
    {
      question: "How does CommerceTrust help businesses clear surplus?",
      answer: "Businesses can publish surplus or time-sensitive stock. CommerceTrust assesses its pricing, identifies likely buyers and prioritises matching while the stock still has value."
    },
    {
      question: "Can e-commerce sellers compare supplier quotations?",
      answer: "Yes. The platform is designed to parse supplier quotation lines, resolve products, normalise pack and quantity and benchmark prices against relevant market evidence."
    },
    {
      question: "How does CommerceTrust decide which local offers to show?",
      answer: "Results can be ranked based on product relevance, verified value and practical reach, including collection distance, delivery area and offer availability."
    },
    {
      question: "Can promoted listings bypass verification?",
      answer: "No. Promoted listings remain subject to the same verification process and should be clearly labelled as promoted."
    },
    {
      question: "Does CommerceTrust sell personal data?",
      answer: "The platform design is privacy-led. Market intelligence is intended to rely on anonymised and aggregated information rather than selling personal data."
    }
  ];

  const toggleFAQ = (index: number) => {
    if (openIndices.includes(index)) {
      setOpenIndices(openIndices.filter(i => i !== index));
    } else {
      setOpenIndices([...openIndices, index]);
    }
  };

  return (
    <section id="faq" className="py-12 lg:py-16 bg-white border-t border-slate-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-9">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-50 border border-brand-300 text-brand-700 text-xs font-bold uppercase tracking-wider">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Frequently Asked Questions</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Common Inquiries
          </h2>
          <p className="text-base sm:text-lg text-slate-700 max-w-2xl mx-auto font-medium">
            Everything you need to know about the CommerceTrust verification methodology, commercial principles, and operational model.
          </p>
        </div>

        {/* Accordion Container with increased spacing between FAQ items */}
        <div className="space-y-4 sm:space-y-4.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndices.includes(index);
            const questionId = `faq-q-${index}`;
            const answerId = `faq-a-${index}`;

            return (
              <div
                key={index}
                className={`bg-white border transition-all duration-150 rounded-2xl overflow-hidden ${
                  isOpen
                    ? 'border-brand-500 shadow-card ring-1 ring-brand-500/20'
                    : 'border-slate-300 shadow-subtle hover:border-slate-400 hover:shadow-card'
                }`}
              >
                <button
                  type="button"
                  id={questionId}
                  aria-controls={answerId}
                  aria-expanded={isOpen}
                  onClick={() => toggleFAQ(index)}
                  className="w-full py-5 px-6 sm:px-7 flex items-center justify-between text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-600 transition-colors"
                >
                  <span className="text-base font-extrabold text-slate-900 pr-4">
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 bg-brand-100 text-brand-700' : 'bg-slate-100 text-slate-600'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={answerId}
                    role="region"
                    aria-labelledby={questionId}
                    className="px-6 sm:px-7 pb-5 pt-1 text-sm text-slate-700 leading-relaxed font-normal border-t border-slate-100"
                  >
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
