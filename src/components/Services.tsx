import React from 'react';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Services: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="services" className="py-20 sm:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        <div className="max-w-2xl mb-14">
          <div className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-3">
            {t.services.kicker}
          </div>
          <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mb-4">
            {t.services.heading}
          </h2>
          <p className="text-sm text-zinc-400 leading-relaxed">
            {t.services.description}
          </p>
        </div>

        {/* 2x2 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.services.items.map((srv, idx) => (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="p-7 sm:p-8 rounded-lg bg-[#0d0d12] border border-white/[0.07] hover:border-white/20 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono text-zinc-400 mb-3">
                  0{idx + 1}
                </div>
                <h3 className="font-display text-xl font-bold text-white mb-3">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed mb-6">
                  {srv.description}
                </p>
              </div>

              <div className="pt-5 border-t border-white/[0.06] space-y-2.5">
                {srv.features.map((feat, fIdx) => (
                  <div key={fIdx} className="flex items-center gap-2.5 text-xs text-zinc-300">
                    <Check className="w-3.5 h-3.5 text-zinc-400 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
