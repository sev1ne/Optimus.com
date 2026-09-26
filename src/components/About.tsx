import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../context/LanguageContext';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 sm:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Story */}
          <div className="lg:col-span-6">
            <div className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-3">
              {t.about.kicker}
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              {t.about.heading}
            </h2>
            <div className="space-y-4 text-sm text-zinc-300 leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
            </div>
          </div>

          {/* Right Column: Values */}
          <div className="lg:col-span-6 space-y-6 lg:pl-6">
            <div className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-3">
              {t.about.principlesKicker}
            </div>
            <div className="space-y-4">
              {t.about.values.map((val, idx) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="p-5 rounded-lg bg-[#0e0e12] border border-white/[0.06] hover:border-white/15 transition-all"
                >
                  <h3 className="font-display text-base font-semibold text-white mb-1.5">
                    {val.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {val.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
