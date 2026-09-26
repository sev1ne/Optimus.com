import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight, X } from 'lucide-react';
import { LINKEDIN_URL } from '../data/optimusData';
import { PostItem } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const Updates: React.FC = () => {
  const [activePost, setActivePost] = useState<PostItem | null>(null);
  const { t } = useLanguage();

  return (
    <section id="updates" className="py-20 sm:py-28 border-t border-white/[0.08] relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
            <div className="text-xs font-medium tracking-widest text-zinc-400 uppercase mb-3">
              {t.updates.kicker}
            </div>
            <h2 className="font-display text-2xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              {t.updates.heading}
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              {t.updates.description}
            </p>
          </div>

          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white transition-colors"
          >
            <span>{t.updates.followLinkedIn}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Posts List */}
        <div className="space-y-4">
          {t.updates.items.map((post, idx) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              onClick={() => setActivePost(post)}
              className="group cursor-pointer p-6 rounded-lg bg-[#0d0d12] border border-white/[0.06] hover:border-white/20 transition-all duration-200 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
            >
              <div className="max-w-2xl">
                {/* Clean unboxed metadata */}
                <div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
                  <span className="text-zinc-300">{post.category}</span>
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                  <span>{post.date}</span>
                  <span aria-hidden="true" className="text-zinc-600">·</span>
                  <span>{post.readTime}</span>
                </div>

                <h3 className="font-display text-base sm:text-lg font-semibold text-white group-hover:text-zinc-100 transition-colors mb-1.5">
                  {post.title}
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-2">
                  {post.summary}
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs font-medium text-zinc-400 group-hover:text-white shrink-0 self-start sm:self-center transition-colors">
                <span>{t.updates.readNote}</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Post Modal */}
      <AnimatePresence>
        {activePost && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-xl bg-[#0c0c10] border border-white/15 rounded-lg p-6 sm:p-8 shadow-2xl"
            >
              <div className="flex items-start justify-between pb-4 border-b border-white/10 mb-6">
                <div>
                  <div className="flex items-center gap-2 text-xs text-zinc-400 mb-1">
                    <span>{activePost.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activePost.date}</span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-white">
                    {activePost.title}
                  </h3>
                </div>
                <button
                  onClick={() => setActivePost(null)}
                  className="p-1.5 text-zinc-400 hover:text-white rounded-md hover:bg-white/5 transition-colors"
                  aria-label="Close dialog"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="text-sm text-zinc-300 leading-relaxed space-y-4 mb-8">
                <p>{activePost.summary}</p>
                <p>{activePost.content}</p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <button
                  onClick={() => setActivePost(null)}
                  className="px-4 py-2 text-xs font-medium text-zinc-400 hover:text-white transition-colors"
                >
                  {t.updates.close}
                </button>
                <a
                  href={LINKEDIN_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-zinc-950 bg-white rounded-md hover:bg-zinc-200 transition-colors flex items-center gap-1.5"
                >
                  <span>{t.updates.viewOnLinkedIn}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
