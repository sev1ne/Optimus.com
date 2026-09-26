import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { LINKEDIN_URL, CONTACT_EMAIL } from '../data/optimusData';
import { useLanguage } from '../context/LanguageContext';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/[0.08] bg-[#060608] text-zinc-400 py-12 sm:py-16">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pb-10 border-b border-white/[0.06]">
          <div>
            <a
              href="#"
              className="text-lg font-bold tracking-widest text-white uppercase block mb-2"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              OPTIMUS
            </a>
            <p className="text-xs text-zinc-400 max-w-sm">
              {t.footer.tagline}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6 text-xs">
            <button onClick={() => scrollTo('#about')} className="hover:text-white transition-colors">
              {t.nav.about}
            </button>
            <button onClick={() => scrollTo('#services')} className="hover:text-white transition-colors">
              {t.nav.services}
            </button>
            <button onClick={() => scrollTo('#updates')} className="hover:text-white transition-colors">
              {t.nav.updates}
            </button>
            <button onClick={() => scrollTo('#contact')} className="hover:text-white transition-colors">
              {t.nav.contact}
            </button>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-zinc-200 hover:text-white transition-colors"
            >
              <span>{t.nav.linkedIn}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-400">
          <div>
            © {currentYear} Optimus. {t.footer.allRightsReserved}
          </div>
          <div>
            {t.footer.inquiries}: <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-zinc-200">{CONTACT_EMAIL}</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
