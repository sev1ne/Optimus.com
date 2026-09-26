/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Updates } from './components/Updates';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-[#08080a] text-zinc-100 flex flex-col font-sans selection:bg-zinc-700 selection:text-white">
        {/* Top Bar Navigation with Language Switcher */}
        <Navbar />

        {/* Main Content */}
        <main className="flex-grow">
          {/* Classic Hero */}
          <Hero />

          {/* About Optimus */}
          <About />

          {/* What We Do */}
          <Services />

          {/* Company Updates & Insights from LinkedIn */}
          <Updates />

          {/* Direct Contact */}
          <Contact />
        </main>

        {/* Classic Quiet Footer */}
        <Footer />
      </div>
    </LanguageProvider>
  );
}
