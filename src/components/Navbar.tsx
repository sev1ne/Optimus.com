import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Menu, X, Globe } from 'lucide-react';
import { LINKEDIN_URL } from '../data/optimusData';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.about, href: '#about' },
    { label: t.nav.services, href: '#services' },
    { label: t.nav.updates, href: '#updates' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#08080a]/90 backdrop-blur-md border-b border-white/[0.08] py-4 shadow-xl shadow-black/50'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Zone 1: Single text element wordmark */}
        <a
          href="#"
          className="text-xl font-bold tracking-widest text-zinc-100 uppercase hover:text-white transition-colors"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          OPTIMUS
        </a>

        {/* Zone 2: Clean text navigation links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-400">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                handleNavClick(link.href);
              }}
              className="hover:text-zinc-100 transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href={LINKEDIN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-zinc-400 hover:text-zinc-200 transition-colors"
          >
            {t.nav.linkedIn}
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70" />
          </a>
        </nav>

        {/* Zone 3: Language Toggle & Primary Action */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Minimalist Language Switcher */}
          <div className="flex items-center p-0.5 rounded-md bg-white/[0.04] border border-white/10 text-xs">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2 py-1 rounded font-medium transition-all ${
                language === 'en'
                  ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('es')}
              className={`px-2 py-1 rounded font-medium transition-all ${
                language === 'es'
                  ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-xs'
                  : 'text-zinc-400 hover:text-white'
              }`}
              aria-label="Cambiar a Español"
            >
              ES
            </button>
          </div>

          <button
            onClick={() => handleNavClick('#contact')}
            className="px-4 py-2 text-xs font-semibold tracking-wide text-zinc-950 bg-zinc-100 rounded-md hover:bg-white active:scale-[0.98] transition-all whitespace-nowrap"
          >
            {t.nav.getInTouch}
          </button>
        </div>

        {/* Mobile controls: Language toggle + menu button */}
        <div className="flex items-center gap-2 md:hidden">
          <div className="flex items-center p-0.5 rounded-md bg-white/[0.04] border border-white/10 text-xs">
            <button
              type="button"
              onClick={() => setLanguage('en')}
              className={`px-2 py-0.5 rounded font-medium ${
                language === 'en' ? 'bg-zinc-100 text-zinc-950 font-semibold' : 'text-zinc-400'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLanguage('es')}
              className={`px-2 py-0.5 rounded font-medium ${
                language === 'es' ? 'bg-zinc-100 text-zinc-950 font-semibold' : 'text-zinc-400'
              }`}
            >
              ES
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-zinc-400 hover:text-white rounded-md border border-white/10"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0c0c10] border-b border-white/10 px-6 py-6">
          <nav className="flex flex-col gap-4 text-sm font-medium text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(link.href);
                }}
                className="py-1 hover:text-white transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between py-1 text-zinc-400 hover:text-white transition-colors"
            >
              <span>{t.nav.linkedInFull}</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <div className="pt-3 border-t border-white/10 flex items-center justify-between gap-3">
              <button
                onClick={() => handleNavClick('#contact')}
                className="flex-1 py-2.5 text-center text-xs font-semibold text-zinc-950 bg-zinc-100 rounded-md hover:bg-white transition-colors"
              >
                {t.nav.getInTouch}
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
