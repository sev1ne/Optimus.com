import React, { createContext, useContext, useState, ReactNode } from 'react';
import { ServiceItem, PostItem, CompanyValue } from '../types';

export type Language = 'en' | 'es';

interface TranslationData {
  nav: {
    about: string;
    services: string;
    updates: string;
    contact: string;
    getInTouch: string;
    linkedIn: string;
    linkedInFull: string;
  };
  hero: {
    kicker: string;
    headline: string;
    subtitle: string;
    exploreServices: string;
    linkedInAction: string;
  };
  about: {
    kicker: string;
    heading: string;
    p1: string;
    p2: string;
    principlesKicker: string;
    values: CompanyValue[];
  };
  services: {
    kicker: string;
    heading: string;
    description: string;
    items: ServiceItem[];
  };
  updates: {
    kicker: string;
    heading: string;
    description: string;
    followLinkedIn: string;
    readNote: string;
    close: string;
    viewOnLinkedIn: string;
    items: PostItem[];
  };
  contact: {
    kicker: string;
    heading: string;
    description: string;
    directInquiries: string;
    companyPage: string;
    sendAMessage: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    messageLabel: string;
    messagePlaceholder: string;
    submitInquiry: string;
    sending: string;
    messageReceived: string;
    thankYouPrefix: string;
    thankYouSuffix: string;
    sendAnother: string;
    errors: {
      name: string;
      email: string;
      emailValid: string;
      message: string;
    };
  };
  footer: {
    tagline: string;
    allRightsReserved: string;
    inquiries: string;
  };
}

const translations: Record<Language, TranslationData> = {
  en: {
    nav: {
      about: 'About',
      services: 'Services',
      updates: 'Updates',
      contact: 'Contact',
      getInTouch: 'Get in Touch',
      linkedIn: 'LinkedIn',
      linkedInFull: 'Optimus on LinkedIn',
    },
    hero: {
      kicker: 'Digital Solutions & Strategic Engineering',
      headline: 'Purposeful digital solutions for modern businesses.',
      subtitle: 'Optimus builds clean, dependable web applications, digital platforms, and technology strategies. We focus on what truly works—without unnecessary complexity.',
      exploreServices: 'Explore Services',
      linkedInAction: 'Optimus on LinkedIn',
    },
    about: {
      kicker: 'About Optimus',
      heading: 'Engineering clarity for an increasingly complex digital landscape.',
      p1: 'Optimus was founded to bridge the gap between business objectives and technology execution. Too often, organizations are burdened by bloated systems, vague promises, and over-engineered stacks.',
      p2: 'We take the opposite approach: clean architectures, direct communication, and a focus on core functionality that delivers measurable business outcomes. Whether building a new web platform or modernizing an existing application, we keep our work grounded in what matters.',
      principlesKicker: 'Our Principles',
      values: [
        {
          title: 'Simplicity & Focus',
          description: 'We believe the best solutions cut through unnecessary noise to deliver clean, effective results.',
        },
        {
          title: 'Craftsmanship',
          description: 'Attention to detail in every line of code, aesthetic choice, and user interaction.',
        },
        {
          title: 'Reliable Partnership',
          description: 'Transparent communication, realistic timelines, and consistent execution on every project.',
        },
      ],
    },
    services: {
      kicker: 'What We Do',
      heading: 'Focused services designed for reliability and impact.',
      description: 'We provide end-to-end technology solutions tailored to your operational scale, from initial architecture design to polished deployment.',
      items: [
        {
          id: 'software-web',
          title: 'Custom Web & Software Development',
          description: 'Modern, high-performance web applications and digital platforms engineered for speed, clean code, and long-term maintainability.',
          features: ['Modern React & Next.js Platforms', 'Responsive & Mobile-First Design', 'API Integration & Backend Logic', 'Optimized Performance & SEO'],
        },
        {
          id: 'digital-strategy',
          title: 'Technology & Digital Strategy',
          description: 'Strategic guidance on architecture, technology stack selection, and digital transformation to help your business operate effectively.',
          features: ['Architecture Planning', 'Workflow Digitization', 'Technology Stack Evaluation', 'Scalability Roadmap'],
        },
        {
          id: 'product-design',
          title: 'Minimalist UI/UX Design',
          description: 'Clean, elegant, and purposeful user interfaces designed to elevate your brand presence and deliver intuitive experiences.',
          features: ['Design Systems & Wireframes', 'Interactive Prototypes', 'User Experience Optimization', 'Modern Dark & Minimalist Aesthetics'],
        },
        {
          id: 'cloud-infrastructure',
          title: 'Cloud & System Integration',
          description: 'Reliable cloud setups, database integrations, and automated pipelines that keep your operations running smoothly without friction.',
          features: ['Cloud Deployment & Hosting', 'Database Architecture', 'Automated CI/CD Workflows', 'Security & Best Practices'],
        },
      ],
    },
    updates: {
      kicker: 'Company Updates',
      heading: 'Recent thoughts and milestones.',
      description: 'Published announcements, perspectives, and updates from the Optimus team.',
      followLinkedIn: 'Follow our LinkedIn Page',
      readNote: 'Read Note',
      close: 'Close',
      viewOnLinkedIn: 'View on LinkedIn',
      items: [
        {
          id: 'post-1',
          title: 'Welcome to Optimus: Building Purposeful Digital Products',
          date: 'March 2026',
          category: 'Company Update',
          readTime: '2 min read',
          summary: 'An introduction to our vision at Optimus—focusing on simplicity, high-impact design, and reliable software engineering for modern clients.',
          content: 'At Optimus, we set out with a simple premise: technology should clarify and accelerate, not complicate. We help organizations build clean digital products, modernize customer-facing platforms, and maintain long-term technological agility.',
        },
        {
          id: 'post-2',
          title: 'The Power of Minimalist Design in Modern Enterprise',
          date: 'February 2026',
          category: 'Insights',
          readTime: '3 min read',
          summary: 'Why intentional typography, restrained color palettes, and uncluttered layouts consistently outperform complex, noisy interfaces.',
          content: 'When businesses strip away decorative clutter, users can focus on what actually matters: content, clarity, and decision-making. Minimalism is not the absence of design; it is the discipline of keeping only what delivers value.',
        },
        {
          id: 'post-3',
          title: 'Collaborating with Growing Teams: Our Client-First Approach',
          date: 'January 2026',
          category: 'Perspective',
          readTime: '2 min read',
          summary: 'How direct technical communication and transparent milestones eliminate the common friction points in technology engagements.',
          content: 'Great client relationships are built on clear expectations and reliable execution. We work closely with our partners as an extension of their team, ensuring every deliverable aligns directly with their business objectives.',
        },
      ],
    },
    contact: {
      kicker: 'Get in Touch',
      heading: "Let's discuss your next project.",
      description: 'Whether you need a dedicated web application, strategic technical advice, or an upgrade to your digital stack, we are ready to collaborate.',
      directInquiries: 'Direct Inquiries',
      companyPage: 'Official Company Page',
      sendAMessage: 'Send a Message',
      nameLabel: 'Your Name *',
      namePlaceholder: 'e.g. Alex Morgan',
      emailLabel: 'Email Address *',
      emailPlaceholder: 'alex@example.com',
      messageLabel: 'Project Note or Question *',
      messagePlaceholder: 'Tell us briefly about what you are looking to build or achieve...',
      submitInquiry: 'Submit Inquiry',
      sending: 'Sending Message...',
      messageReceived: 'Message Received',
      thankYouPrefix: 'Thank you,',
      thankYouSuffix: 'We have received your inquiry and will be in touch shortly via',
      sendAnother: 'Send Another Message',
      errors: {
        name: 'Please enter your name.',
        email: 'Please enter your email.',
        emailValid: 'Please enter a valid email address.',
        message: 'Please include a brief note.',
      },
    },
    footer: {
      tagline: 'Purposeful digital solutions, modern engineering, and strategic technology consulting.',
      allRightsReserved: 'All rights reserved.',
      inquiries: 'Inquiries',
    },
  },
  es: {
    nav: {
      about: 'Nosotros',
      services: 'Servicios',
      updates: 'Novedades',
      contact: 'Contacto',
      getInTouch: 'Contactar',
      linkedIn: 'LinkedIn',
      linkedInFull: 'Optimus en LinkedIn',
    },
    hero: {
      kicker: 'Soluciones Digitales e Ingeniería Estratégica',
      headline: 'Soluciones digitales con propósito para empresas modernas.',
      subtitle: 'Optimus construye aplicaciones web limpias y confiables, plataformas digitales y estrategias tecnológicas. Nos enfocamos en lo que realmente funciona, sin complejidad innecesaria.',
      exploreServices: 'Explorar Servicios',
      linkedInAction: 'Optimus en LinkedIn',
    },
    about: {
      kicker: 'Sobre Optimus',
      heading: 'Claridad en ingeniería para un panorama digital cada vez más complejo.',
      p1: 'Optimus nació para unir los objetivos de negocio con la ejecución tecnológica. Con demasiada frecuencia, las organizaciones sufren sistemas sobrecargados, promesas imprecisas y arquitecturas complejas innecesarias.',
      p2: 'Adoptamos el enfoque opuesto: arquitecturas limpias, comunicación directa y un enfoque en la funcionalidad esencial que genera resultados comerciales medibles. Ya sea creando una nueva plataforma web o modernizando una aplicación existente, mantenemos nuestro trabajo enfocado en lo prioritario.',
      principlesKicker: 'Nuestros Principios',
      values: [
        {
          title: 'Simplicidad y Enfoque',
          description: 'Creemos que las mejores soluciones eliminan el ruido innecesario para ofrecer resultados limpios y eficaces.',
        },
        {
          title: 'Excelencia Técnica',
          description: 'Atención al detalle en cada línea de código, elección estética e interacción del usuario.',
        },
        {
          title: 'Colaboración Confiable',
          description: 'Comunicación transparente, cronogramas realistas y ejecución consistente en cada proyecto.',
        },
      ],
    },
    services: {
      kicker: 'Qué Hacemos',
      heading: 'Servicios enfocados diseñados para confiabilidad e impacto.',
      description: 'Ofrecemos soluciones tecnológicas integrales adaptadas a su escala operativa, desde el diseño de arquitectura inicial hasta el despliegue final.',
      items: [
        {
          id: 'software-web',
          title: 'Desarrollo Web y Software a Medida',
          description: 'Aplicaciones web modernas de alto rendimiento y plataformas digitales diseñadas para velocidad, código limpio y mantenibilidad a largo plazo.',
          features: ['Plataformas Modernas en React y Next.js', 'Diseño Responsivo enfocado en Móvil', 'Integración de APIs y Lógica de Backend', 'Rendimiento Optimizado y SEO'],
        },
        {
          id: 'digital-strategy',
          title: 'Estrategia Digital y Tecnológica',
          description: 'Orientación estratégica en arquitectura, selección de tecnologías y transformación digital para impulsar las operaciones de su empresa.',
          features: ['Planificación de Arquitectura', 'Digitalización de Flujos de Trabajo', 'Evaluación de Tecnologías', 'Hoja de Ruta de Escalabilidad'],
        },
        {
          id: 'product-design',
          title: 'Diseño UI/UX Minimalista',
          description: 'Interfaces de usuario limpias, elegantes y funcionales diseñadas para elevar la presencia de su marca y brindar experiencias intuitivas.',
          features: ['Sistemas de Diseño y Wireframes', 'Prototipos Interactivos', 'Optimización de Experiencia de Usuario', 'Estética Oscura y Minimalista'],
        },
        {
          id: 'cloud-infrastructure',
          title: 'Infraestructura Cloud e Integración',
          description: 'Configuraciones de nube confiables, integración de bases de datos y flujos automatizados para que sus operaciones funcionen sin fricción.',
          features: ['Despliegue y Alojamiento en la Nube', 'Arquitectura de Bases de Datos', 'Flujos Automatizados de CI/CD', 'Seguridad y Mejores Prácticas'],
        },
      ],
    },
    updates: {
      kicker: 'Novedades de la Empresa',
      heading: 'Reflexiones recientes y logros.',
      description: 'Anuncios publicados, perspectivas y novedades del equipo de Optimus.',
      followLinkedIn: 'Siga nuestra página de LinkedIn',
      readNote: 'Leer Nota',
      close: 'Cerrar',
      viewOnLinkedIn: 'Ver en LinkedIn',
      items: [
        {
          id: 'post-1',
          title: 'Bienvenidos a Optimus: Construyendo Productos Digitales con Propósito',
          date: 'Marzo 2026',
          category: 'Actualización',
          readTime: '2 min de lectura',
          summary: 'Una introducción a nuestra visión en Optimus: enfocados en simplicidad, diseño de alto impacto e ingeniería confiable para clientes modernos.',
          content: 'En Optimus partimos de una premisa simple: la tecnología debe clarificar y acelerar, no complicar. Ayudamos a las organizaciones a construir productos digitales limpios, modernizar plataformas de cara al cliente y mantener agilidad a largo plazo.',
        },
        {
          id: 'post-2',
          title: 'El Poder del Diseño Minimalista en la Empresa Moderna',
          date: 'Febrero 2026',
          category: 'Perspectivas',
          readTime: '3 min de lectura',
          summary: 'Por qué la tipografía intencional, las paletas de color sobrias y los diseños despejados superan sistemáticamente a las interfaces ruidosas.',
          content: 'Cuando las empresas eliminan el desorden decorativo, los usuarios pueden concentrarse en lo importante: el contenido, la claridad y la toma de decisiones. El minimalismo es la disciplina de conservar únicamente lo que aporta valor.',
        },
        {
          id: 'post-3',
          title: 'Colaborando con Equipos en Crecimiento: Nuestro Enfoque Client-First',
          date: 'Enero 2026',
          category: 'Perspectiva',
          readTime: '2 min de lectura',
          summary: 'Cómo la comunicación técnica directa y los hitos transparentes eliminan los puntos comunes de fricción en los proyectos tecnológicos.',
          content: 'Las grandes relaciones con clientes se basan en expectativas claras y una ejecución confiable. Trabajamos estrechamente como una extensión de su equipo, garantizando que cada entrega responda a sus objetivos de negocio.',
        },
      ],
    },
    contact: {
      kicker: 'Contacto',
      heading: 'Hablemos sobre su próximo proyecto.',
      description: 'Ya sea que necesite una aplicación web dedicada, asesoramiento técnico estratégico o una modernización de su infraestructura digital, estamos listos para colaborar.',
      directInquiries: 'Consultas Directas',
      companyPage: 'Página Oficial en LinkedIn',
      sendAMessage: 'Enviar un Mensaje',
      nameLabel: 'Su Nombre *',
      namePlaceholder: 'ej. Alejandro Morales',
      emailLabel: 'Correo Electrónico *',
      emailPlaceholder: 'alejandro@ejemplo.com',
      messageLabel: 'Nota del Proyecto o Consulta *',
      messagePlaceholder: 'Cuéntenos brevemente qué busca construir o alcanzar...',
      submitInquiry: 'Enviar Consulta',
      sending: 'Enviando Mensaje...',
      messageReceived: 'Mensaje Recibido',
      thankYouPrefix: 'Gracias,',
      thankYouSuffix: 'Hemos recibido su consulta y nos comunicaremos en breve a través de',
      sendAnother: 'Enviar Otro Mensaje',
      errors: {
        name: 'Por favor ingrese su nombre.',
        email: 'Por favor ingrese su correo electrónico.',
        emailValid: 'Por favor ingrese un correo electrónico válido.',
        message: 'Por favor incluya una breve nota.',
      },
    },
    footer: {
      tagline: 'Soluciones digitales con propósito, ingeniería moderna y consultoría tecnológica estratégica.',
      allRightsReserved: 'Todos los derechos reservados.',
      inquiries: 'Consultas',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationData;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t: translations[language],
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
