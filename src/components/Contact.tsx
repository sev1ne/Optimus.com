import React, { useState } from 'react';
import { ArrowRight, CheckCircle, Mail, AlertCircle } from 'lucide-react';
import { LINKEDIN_URL, CONTACT_EMAIL } from '../data/optimusData';
import { useLanguage } from '../context/LanguageContext';

export const Contact: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = t.contact.errors.name;
    if (!formData.email.trim()) {
      errs.email = t.contact.errors.email;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = t.contact.errors.emailValid;
    }
    if (!formData.message.trim()) errs.message = t.contact.errors.message;
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Info */}
          <div className="lg:col-span-5">
            <div className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-3">
              {t.contact.kicker}
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
              {t.contact.heading}
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed mb-8">
              {t.contact.description}
            </p>

            <div className="space-y-4 text-xs text-zinc-300">
              <div className="flex items-center gap-3 p-3.5 rounded-lg bg-white/[0.02] border border-white/5">
                <Mail className="w-4 h-4 text-zinc-400 shrink-0" />
                <div>
                  <div className="text-zinc-500 text-[11px]">{t.contact.directInquiries}</div>
                  <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-white transition-colors font-medium">
                    {CONTACT_EMAIL}
                  </a>
                </div>
              </div>

              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all group"
              >
                <div>
                  <div className="text-zinc-500 text-[11px]">{t.contact.companyPage}</div>
                  <div className="text-white font-medium group-hover:underline">LinkedIn: Optimus</div>
                </div>
                <ArrowRight className="w-4 h-4 text-zinc-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7 bg-[#0d0d12] border border-white/[0.08] p-7 sm:p-9 rounded-lg shadow-xl">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="font-display text-lg font-semibold text-white mb-2">
                  {t.contact.sendAMessage}
                </h3>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    {t.contact.nameLabel}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t.contact.namePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-md bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-white/40 transition-all"
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    {t.contact.emailLabel}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder={t.contact.emailPlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-md bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-white/40 transition-all"
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-medium text-zinc-300 mb-1.5">
                    {t.contact.messageLabel}
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={t.contact.messagePlaceholder}
                    className="w-full px-3.5 py-2.5 rounded-md bg-white/[0.03] border border-white/10 text-white placeholder-zinc-600 text-xs focus:outline-none focus:border-white/40 transition-all"
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1 text-[11px] text-rose-400 mt-1">
                      <AlertCircle className="w-3 h-3" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-2.5 px-4 text-xs font-semibold text-zinc-950 bg-zinc-100 hover:bg-white active:scale-[0.99] rounded-md transition-all flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>{t.contact.sending}</span>
                    ) : (
                      <>
                        <span>{t.contact.submitInquiry}</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            ) : (
              <div className="py-8 text-center space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-6 h-6" />
                </div>
                <h3 className="font-display text-xl font-bold text-white">
                  {t.contact.messageReceived}
                </h3>
                <p className="text-xs text-zinc-300 max-w-sm mx-auto leading-relaxed">
                  {t.contact.thankYouPrefix} {formData.name}. {t.contact.thankYouSuffix} {formData.email}.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', email: '', message: '' });
                  }}
                  className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-white rounded-md hover:bg-zinc-200 transition-colors"
                >
                  {t.contact.sendAnother}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
