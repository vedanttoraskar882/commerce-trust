import React, { useState } from 'react';
import { 
  X, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Building2, 
  User, 
  Mail, 
  Phone 
} from 'lucide-react';
import { savePilotSubmission } from '../utils/storage';

interface PilotRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PilotRequestModal: React.FC<PilotRequestModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    organisationName: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  if (!isOpen) return null;

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

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      // Exactly required localStorage append logic
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
    } catch (err) {
      console.error(err);
      setErrors({ form: 'An error occurred while saving locally. Please try again.' });
    } finally {
      setTimeout(() => {
        setIsSubmitting(false);
      }, 500);
    }
  };

  const handleClose = () => {
    setSuccessMessage(null);
    setErrors({});
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-xl bg-slate-950 border border-slate-800 rounded-2xl shadow-2xl p-6 sm:p-8 text-white text-left">
        
        {/* Close Button */}
        <button
          type="button"
          onClick={handleClose}
          className="absolute top-5 right-5 p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-500"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-8 mb-6">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-brand-950 text-brand-400 border border-brand-800 text-[11px] font-semibold uppercase tracking-wider mb-2">
            <Send className="w-3 h-3" />
            <span>Pilot Partner Access</span>
          </div>
          <h3 id="modal-title" className="text-2xl font-bold text-white tracking-tight">
            Request a CommerceTrust Pilot
          </h3>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">
            Test verified pricing, surplus recovery and local discovery across UK commerce.
          </p>
        </div>

        {/* Success Alert */}
        {successMessage ? (
          <div className="py-8 text-center space-y-4">
            <div className="w-14 h-14 bg-emerald-950 border border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <h4 className="text-lg font-bold text-white">Pilot Request Saved</h4>
              <p className="text-sm text-emerald-300">{successMessage}</p>
            </div>
            <p className="text-xs text-slate-400 max-w-sm mx-auto">
              Your details have been appended to this browser&apos;s localStorage repository.
            </p>
            <div className="pt-4">
              <button
                type="button"
                onClick={handleClose}
                className="px-6 py-2.5 rounded-xl bg-brand-600 hover:bg-brand-500 text-white font-semibold text-sm transition-colors"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate className="space-y-4">
            <div className="space-y-4 text-xs sm:text-sm">
              {/* Full Name */}
              <div>
                <label htmlFor="modal-fullName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-brand-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <User className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="modal-fullName"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 ${
                      errors.fullName ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-brand-500'
                    }`}
                  />
                </div>
                {errors.fullName && <p className="mt-1 text-xs text-red-400">{errors.fullName}</p>}
              </div>

              {/* Organisation Name */}
              <div>
                <label htmlFor="modal-organisationName" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Organisation Name <span className="text-brand-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Building2 className="w-4 h-4" />
                  </div>
                  <input
                    type="text"
                    id="modal-organisationName"
                    value={formData.organisationName}
                    onChange={(e) => setFormData({ ...formData, organisationName: e.target.value })}
                    placeholder="e.g. Apex Trade Supplies Ltd"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 ${
                      errors.organisationName ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-brand-500'
                    }`}
                  />
                </div>
                {errors.organisationName && <p className="mt-1 text-xs text-red-400">{errors.organisationName}</p>}
              </div>

              {/* Email Address */}
              <div>
                <label htmlFor="modal-emailAddress" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Email Address <span className="text-brand-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Mail className="w-4 h-4" />
                  </div>
                  <input
                    type="email"
                    id="modal-emailAddress"
                    value={formData.emailAddress}
                    onChange={(e) => setFormData({ ...formData, emailAddress: e.target.value })}
                    placeholder="name@company.co.uk"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 ${
                      errors.emailAddress ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-brand-500'
                    }`}
                  />
                </div>
                {errors.emailAddress && <p className="mt-1 text-xs text-red-400">{errors.emailAddress}</p>}
              </div>

              {/* Phone Number */}
              <div>
                <label htmlFor="modal-phoneNumber" className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
                  Phone Number <span className="text-brand-400">*</span>
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-500">
                    <Phone className="w-4 h-4" />
                  </div>
                  <input
                    type="tel"
                    id="modal-phoneNumber"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    placeholder="07123 456789 or +44 20 7946 0991"
                    className={`w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-900 border text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 ${
                      errors.phoneNumber ? 'border-red-500 focus:ring-red-500' : 'border-slate-700 focus:ring-brand-500'
                    }`}
                  />
                </div>
                {errors.phoneNumber && <p className="mt-1 text-xs text-red-400">{errors.phoneNumber}</p>}
              </div>
            </div>

            {errors.form && (
              <p className="text-xs text-red-400 flex items-center pt-1">
                <AlertCircle className="w-3.5 h-3.5 mr-1 shrink-0" />
                {errors.form}
              </p>
            )}

            <div className="pt-3">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center px-6 py-3 rounded-xl bg-brand-600 hover:bg-brand-500 active:bg-brand-700 text-white font-semibold text-sm transition-all disabled:opacity-50"
              >
                {isSubmitting ? 'Saving Locally...' : 'Submit Pilot Request'}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
