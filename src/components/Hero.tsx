import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { HERO_IMAGE, LINKEDIN_URL } from '../data/optimusData';
import { useLanguage } from '../context/LanguageContext';

export const Hero: React.FC = () => {
  const { t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden">
      {/* Background with subtle contrast gradient */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <img
          src={HERO_IMAGE}
          alt="Optimus background"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#08080a] via-[#08080a]/80 to-[#08080a]/50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-8 w-full my-auto">
        <div className="max-w-3xl">
          {/* Subtle editorial kicker */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-4"
          >
            {t.hero.kicker}
          </motion.div>

          {/* Primary headline */}
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-4xl sm:text-6xl font-bold tracking-tight text-white leading-[1.1] mb-6"
            style={{ textWrap: 'balance' }}
          >
            {t.hero.headline}
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg text-zinc-300 font-light leading-relaxed max-w-2xl mb-10"
          >
            {t.hero.subtitle}
          </motion.p>

          {/* Actions */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => scrollTo('#services')}
              className="px-6 py-3 text-xs sm:text-sm font-semibold text-zinc-950 bg-zinc-100 hover:bg-white active:scale-[0.98] rounded-md transition-all flex items-center gap-2 whitespace-nowrap shadow-md shadow-black/40"
            >
              <span>{t.hero.exploreServices}</span>
              <ArrowDown className="w-4 h-4 opacity-80" />
            </button>

            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 text-xs sm:text-sm font-medium text-zinc-300 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/10 rounded-md transition-all flex items-center gap-2 whitespace-nowrap"
            >
              <span>{t.hero.linkedInAction}</span>
              <ArrowUpRight className="w-4 h-4 opacity-70" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
