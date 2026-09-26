import { ServiceItem, PostItem, CompanyValue } from '../types';

export const HERO_IMAGE = '/src/assets/images/hero_optimus_sculpture_1790406611252.jpg';
export const LINKEDIN_URL = 'https://www.linkedin.com/company/112027180/';
export const CONTACT_EMAIL = 'tp8044892@gmail.com';

export const SERVICES: ServiceItem[] = [
  {
    id: 'software-web',
    title: 'Custom Web & Software Development',
    description: 'Modern, high-performance web applications and digital platforms engineered for speed, clean code, and long-term maintainability.',
    features: ['Modern React & Next.js Platforms', 'Responsive & Mobile-First Design', 'API Integration & Backend Logic', 'Optimized Performance & SEO']
  },
  {
    id: 'digital-strategy',
    title: 'Technology & Digital Strategy',
    description: 'Strategic guidance on architecture, technology stack selection, and digital transformation to help your business operate effectively.',
    features: ['Architecture Planning', 'Workflow Digitization', 'Technology Stack Evaluation', 'Scalability Roadmap']
  },
  {
    id: 'product-design',
    title: 'Minimalist UI/UX Design',
    description: 'Clean, elegant, and purposeful user interfaces designed to elevate your brand presence and deliver intuitive experiences.',
    features: ['Design Systems & Wireframes', 'Interactive Prototypes', 'User Experience Optimization', 'Modern Dark & Minimalist Aesthetics']
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud & System Integration',
    description: 'Reliable cloud setups, database integrations, and automated pipelines that keep your operations running smoothly without friction.',
    features: ['Cloud Deployment & Hosting', 'Database Architecture', 'Automated CI/CD Workflows', 'Security & Best Practices']
  }
];

export const VALUES: CompanyValue[] = [
  {
    title: 'Simplicity & Focus',
    description: 'We believe the best solutions cut through unnecessary noise to deliver clean, effective results.'
  },
  {
    title: 'Craftsmanship',
    description: 'Attention to detail in every line of code, aesthetic choice, and user interaction.'
  },
  {
    title: 'Reliable Partnership',
    description: 'Transparent communication, realistic timelines, and consistent execution on every project.'
  }
];

export const POSTS: PostItem[] = [
  {
    id: 'post-1',
    title: 'Welcome to Optimus: Building Purposeful Digital Products',
    date: 'March 2026',
    category: 'Company Update',
    readTime: '2 min read',
    summary: 'An introduction to our vision at Optimus—focusing on simplicity, high-impact design, and reliable software engineering for modern clients.',
    content: 'At Optimus, we set out with a simple premise: technology should clarify and accelerate, not complicate. We help organizations build clean digital products, modernize customer-facing platforms, and maintain long-term technological agility.'
  },
  {
    id: 'post-2',
    title: 'The Power of Minimalist Design in Modern Enterprise',
    date: 'February 2026',
    category: 'Insights',
    readTime: '3 min read',
    summary: 'Why intentional typography, restrained color palettes, and uncluttered layouts consistently outperform complex, noisy interfaces.',
    content: 'When businesses strip away decorative clutter, users can focus on what actually matters: content, clarity, and decision-making. Minimalism is not the absence of design; it is the discipline of keeping only what delivers value.'
  },
  {
    id: 'post-3',
    title: 'Collaborating with Growing Teams: Our Client-First Approach',
    date: 'January 2026',
    category: 'Perspective',
    readTime: '2 min read',
    summary: 'How direct technical communication and transparent milestones eliminate the common friction points in technology engagements.',
    content: 'Great client relationships are built on clear expectations and reliable execution. We work closely with our partners as an extension of their team, ensuring every deliverable aligns directly with their business objectives.'
  }
];
