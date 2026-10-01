import React, { useState } from 'react';
import { 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Lock, 
  Building2, 
  User, 
  Mail, 
  Phone, 
  Database,
  Clock
} from 'lucide-react';
import { savePilotSubmission, getStoredSubmissions, STORAGE_KEY } from '../utils/storage';
import type { PilotSubmission } from '../types';

export const PilotRequestSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    organisationName: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [showSavedList, setShowSavedList] = useState(false);
  const [savedRecords, setSavedRecords] = useState<PilotSubmission[]>([]);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required.';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone Number is required.';
    } else {
      const phoneRegex = /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{6,15}$/;
      if (!phoneRegex.test(formData.phoneNumber.trim())) {
        newErrors.phoneNumber = 'Please enter a valid phone number.';
      }
    }

    if (!formData.emailAddress.trim()) {
      newErrors.emailAddress = 'Email Address is required.';
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(formData.emailAddress.trim())) {
        newErrors.emailAddress = 'Please enter a valid email address.';
      }
    }

    if (!formData.organisationName.trim()) {
      newErrors.organisationName = 'Organisation Name is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;

    if (!validate()) {
      return;
    }

    setIsSubmitting(true);

    try {
      savePilotSubmission({
        fullName: formData.fullName,
        phoneNumber: formData.phoneNumber,
        emailAddress: formData.emailAddress,
        organisationName: formData.organisationName,
      });

      setSuccessMessage('Thank you. Your pilot request has been saved successfully.');
      setFormData({
        fullName: '',
        phoneNumber: '',
        emailAddress: '',
        organisationName: '',
      });
      setErrors({});

      setSavedRecords(getStoredSubmissions());
    } catch (err) {
      console.error(err);
      setErrors({ form: 'An error occurred while saving locally. Please try again.' });
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 500);
    }
  };

  const handleToggleSaved = () => {
    setSavedRecords(getStoredSubmissions());
    setShowSavedList(!showSavedList);
  };

  return (
    <section id="pilot-request" className="py-20 lg:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Background glow */}
      <div 
        className="absolute top-0 right-1/4 w-96 h-96 bg-brand-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-left">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-brand-950 text-brand-400 border border-brand-800 text-xs font-semibold uppercase tracking-wider">
            <Send className="w-3.5 h-3.5" />
            <span>Pilot Partner Programme</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Request a CommerceTrust Pilot
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            Join independent retailers, wholesalers, restaurants, and e-commerce sellers testing verified pricing and local discovery across the UK.
          </p>
        </div>

        {/* Success Alert */}
        {successMessage && (
          <div className="mb-8 p-4 rounded-xl bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 flex items-start space-x-3 animate-fadeIn">
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
            <div className="flex-1 text-sm">
              <span className="font-bold block text-emerald-300">Request Recorded Locally</span>
              <span>{successMessage}</span>
            </div>
            <button
              type="button"
              onClick={() => setSuccessMessage(null)}
              className="text-xs text-emerald-400 hover:text-emerald-200 underline"
            >
              Dismiss
            </button>
          </div>
        )}

        {/* Form Container */}
        <div className="bg-slate-950/80 backdrop-blur-md border border-slate-800 rounded-2xl p-6 sm:p-10 shadow-2xl">
          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label htmlFor="fullName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Full Name <span className="text-brand-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.fullName
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-700 focus:border-brand-500 focus:ring-brand-500'
                    }`}
                  />
                </div>
                {errors.fullName && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center">
                    <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                    {errors.fullName}
                  </p>
                )}
              </div>

              {/* Organisation Name */}
              <div>
                <label htmlFor="organisationName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Organisation Name <span className="text-brand-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="organisationName"
                    value={formData.organisationName}
                    onChange={(e) => setFormData({ ...formData, organisationName: e.target.value })}
                    placeholder="e.g. Apex Trade Supplies Ltd"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.organisationName
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-700 focus:border-brand-500 focus:ring-brand-500'
                    }`}
                  />
                </div>
                {errors.organisationName && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center">
                    <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                    {errors.organisationName}
                  </p>
                )}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="emailAddress" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Email Address <span className="text-brand-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    id="emailAddress"
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    placeholder="name@company.co.uk"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.emailAddress
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-700 focus:border-brand-500 focus:ring-brand-500'
                    }`}
                  />
                </div>
                {errors.emailAddress && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center">
                    <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                    {errors.emailAddress}
                  </p>
                )}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="phoneNumber" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                  Phone Number <span className="text-brand-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="07123 456789 or +44 20 7946 0991"
                    className={`w-full pl-10 pr-4 py-3 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 transition-all ${
                      errors.phoneNumber
                        ? 'border-red-500 focus:ring-red-500'
                        : 'border-slate-700 focus:border-brand-500 focus:ring-brand-500'
                    }`}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center">
                    <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

            </div>

            {/* General Form Error if any */}
            {errors.form && (
              <p className="text-xs text-red-400 flex items-center">
                <AlertCircle className="w-4 h-4 mr-1 shrink-0" />
                {errors.form}
              </p>
            )}

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-brand-600 hover:bg-brand-500 active:bg-brand-700 text-white font-semibold text-base shadow-lg transition-all duration-150 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-brand-400 focus:ring-offset-2 focus:ring-offset-slate-950"
              >
                {isSubmitting ? (
                  <span className="flex items-center space-x-2">
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Saving Locally...</span>
                  </span>
                ) : (
                  <span className="flex items-center space-x-2">
                    <span>Submit Pilot Request</span>
                    <Send className="w-4 h-4" />
                  </span>
                )}
              </button>
            </div>

            {/* Mandatory Privacy Note */}
            <div className="pt-4 border-t border-slate-800/80 flex items-center space-x-2 text-xs text-slate-400">
              <Lock className="w-3.5 h-3.5 text-slate-500 shrink-0" />
              <span>
                This prototype stores your request locally in this browser only. No data is transmitted to a server.
              </span>
            </div>

          </form>
        </div>

        {/* Local Storage Records Inspection */}
        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={handleToggleSaved}
            className="inline-flex items-center space-x-2 text-xs text-slate-400 hover:text-slate-200 transition-colors py-1 px-3 rounded-lg border border-slate-800 hover:border-slate-700"
          >
            <Database className="w-3.5 h-3.5 text-brand-400" />
            <span>
              {showSavedList ? 'Hide' : 'Inspect'} Local Storage Submissions ({getStoredSubmissions().length})
            </span>
          </button>

          {showSavedList && (
            <div className="mt-4 p-5 rounded-xl bg-slate-950 border border-slate-800 text-left text-xs text-slate-300 animate-fadeIn">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 mb-3">
                <span className="font-mono text-brand-400">
                  localStorage['{STORAGE_KEY}'] ({savedRecords.length} records)
                </span>
                <span className="text-[11px] text-slate-500">
                  Appended locally on device
                </span>
              </div>

              {savedRecords.length === 0 ? (
                <p className="text-slate-500 italic py-2">No pilot requests recorded in this browser yet.</p>
              ) : (
                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {savedRecords.map((item, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                      <div className="flex items-center justify-between font-semibold text-white">
                        <span>{item.fullName} • {item.organisationName}</span>
                        <span className="text-[10px] text-slate-400 font-mono flex items-center">
                          <Clock className="w-3 h-3 mr-1" />
                          {new Date(item.submittedAt).toLocaleString()}
                        </span>
                      </div>
                      <div className="text-slate-400 text-[11px]">
                        <span>Email: {item.emailAddress}</span> | <span>Phone: {item.phoneNumber}</span>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
