"use client"

import React, { useState, useEffect, useRef, useCallback } from 'react';
import {
  Mail,
  ArrowRight,
  Sun,
  Moon,
  Menu,
  X,
  MapPin,
  Calendar,
  Award,
  ExternalLink,
  Send,
  MessageCircle,
  Briefcase,
  GraduationCap,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Code2,
  Bot,
  Workflow,
  Database,
} from 'lucide-react';

/* ============================================================
   DATA
   ============================================================ */

const GithubIcon = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
);

const LinkedinIcon = ({ size = 24, className = '' }) => (
  <svg width={size} height={size} className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const PERSONAL = {
  name: 'Juan Reyes',
  firstName: 'Juan',
  lastName: 'Reyes',
  title: 'Desarrollador de Software Full Stack · IA aplicada',
  location: 'Ibagué, Tolima, Colombia',
  email: 'juan@arryxl.me',
  github: 'https://github.com/Arryxl',
  githubLabel: 'github.com/Arryxl',
  linkedin: 'https://www.linkedin.com/in/juansreyes/',
  linkedinLabel: 'linkedin.com/in/juansreyes',
  domain: 'arryxl.me',
  whatsapp: 'https://wa.me/573138292765',
  bio: 'Desarrollador de Software full stack y cofundador de Solucionalo.co. Construyo aplicaciones web, automatizaciones y soluciones con IA —agentes, asistentes inteligentes y búsqueda semántica— que ayudan a empresas y emprendedores a optimizar sus procesos. Tecnólogo en Análisis y Desarrollo de Software del SENA y Mejor Aprendiz de mi promoción.',
  shortBio:
    'Transformo ideas en productos funcionales, escalables y centrados en resolver problemas reales. Frontend y backend: de la interfaz que usa el cliente hasta la API, la base de datos y el modelo de IA que hay detrás.',
};

const STATS = [
  { value: '5+', label: 'Años construyendo' },
  { value: '2', label: 'Productos IA en desarrollo' },
  { value: '40+', label: 'Estudiantes certificados' },
  { value: 'B2', label: 'Inglés profesional' },
];

const EXPERIENCE = [
  {
    role: 'Desarrollador de Software',
    company: 'Solucionalo.co',
    badge: 'Cofundador',
    period: 'Septiembre 2025 – Actualidad',
    location: 'Remoto',
    active: true,
    description:
      'Cofundé esta startup de software, donde desarrollo soluciones tecnológicas que ayudan a empresas y emprendedores a optimizar sus procesos mediante aplicaciones web, automatización e inteligencia artificial. Actualmente construyo Evora POS —un sistema de punto de venta con IA para retail— y EvorAI, un agente conectado a WhatsApp que automatiza pedidos, reservas y seguimiento de clientes.',
  },
  {
    role: 'Desarrollador de Software',
    company: 'Bingo Verano',
    badge: 'Prácticas profesionales',
    period: 'Enero 2026 – Julio 2026',
    location: 'Ibagué',
    active: false,
    description:
      'Participé en el desarrollo de sistemas administrativos, integraciones con servicios externos y soluciones basadas en IA: asistentes inteligentes, agentes de IA y búsqueda semántica mediante embeddings y vectorización, integrando Google Gemini y Cloudflare para ofrecer análisis, automatización y apoyo en la toma de decisiones. Trabajo en equipo bajo metodologías ágiles y control de versiones con Git.',
  },
  {
    role: 'Instructor de Programación',
    company: 'Centro Educativo Nueva Visión',
    period: 'Enero 2022 – Junio 2023',
    location: 'Remoto',
    active: false,
    description:
      'Certifiqué más de 40 estudiantes en programación básica. Diseñé planes de estudio dinámicos para fundamentos de desarrollo web y lógica de programación.',
  },
  {
    role: 'Desarrollador Web Freelance',
    company: 'Independiente',
    period: 'Agosto 2021 – Diciembre 2021',
    location: 'Remoto',
    active: false,
    description:
      'Diseño y desarrollo de sitios web para clientes usando HTML, CSS y Bootstrap. Primer contacto profesional con el desarrollo orientado a cliente.',
  },
];

const PROJECTS = [
  {
    id: 'pos-ia',
    featured: true,
    status: 'En progreso',
    title: 'Evora - Sistema POS',
    company: 'Solucionalo.co',
    description:
      'Sistema POS inteligente para negocios retail. Confirma pedidos, registra clientes, notifica y realiza tareas dentro del sistema. Evora POS es el primer producto de Solucionalo.co, actualmente en desarrollo con lanzamiento previsto para mediados - finales de 2026.',
    stack: ['NestJS', 'React', 'PostgreSQL', 'Redis'],
    link: 'https://solucionalo.co',
    linkLabel: 'solucionalo.co',
  },
  {
    id: 'agente-wa',
    featured: false,
    status: 'En progreso',
    title: 'EvorAI para WhatsApp',
    company: 'Solucionalo.co',
    description:
      'Nuevo producto de Solucionalo.co. Conecta WhatsApp directamente con la operación del negocio: pedidos, reservas, confirmaciones, seguimiento y tareas automáticas sin procesos manuales. EvorAI vende por tí.',
    stack: ['NestJS', 'Next.js', 'PostgreSQL', 'Redis'],
  },
  {
    id: 'asistente-ia',
    featured: false,
    status: 'Completado',
    title: 'Asistente IA con búsqueda semántica',
    company: 'Bingo Verano',
    description:
      'Asistente inteligente integrado a los sistemas administrativos de la empresa. Implementé búsqueda semántica mediante embeddings y vectorización sobre los datos del negocio, conectada a Google Gemini para entregar análisis y apoyo en la toma de decisiones.',
    stack: ['Google Gemini', 'Embeddings', 'Cloudflare', 'TypeScript'],
    period: 'Enero 2026 – Julio 2026',
  },
  {
    id: 'sieki',
    featured: false,
    status: 'Completado',
    title: 'SIEKI — Sistema Epa Keratinas Ibagué',
    company: 'SENA',
    description:
      'Proyecto formativo SENA. Plataforma de ventas online y dashboard de administración para empresa real del sector belleza.',
    stack: ['JavaScript', 'Python', 'Django', 'React.js'],
    period: 'Abril 2024 – Diciembre 2025',
  },
];

const EDUCATION = [
  {
    institution: 'SENA',
    program: 'Tecnólogo en Análisis y Desarrollo de Software',
    period: 'Abril 2024 – Julio 2026 · Finalizado',
    highlight: true,
    award: 'Mejor Aprendiz 2024',
    note: 'Resolución 73-03429 · Noviembre 2024',
  },
  {
    institution: 'Platzi',
    program: 'Diseño y Desarrollo de Aplicaciones Web',
    period: 'Noviembre 2020 – Agosto 2021',
    highlight: false,
  },
];

const STACK_GROUPS = [
  {
    label: 'Frontend',
    items: ['JavaScript', 'TypeScript', 'React', 'Next.js', 'Angular', 'HTML', 'CSS', 'Tailwind', 'Bootstrap'],
  },
  {
    label: 'Backend',
    items: ['NestJS', 'Node.js', 'Python', 'Django', 'APIs REST'],
  },
  {
    label: 'IA & Automatización',
    items: ['Google Gemini', 'Agentes de IA', 'Embeddings', 'Búsqueda semántica', 'Vectorización', 'Cloudflare'],
  },
  {
    label: 'Bases de datos',
    items: ['PostgreSQL', 'SQL Server', 'MySQL', 'Redis'],
  },
  {
    label: 'Herramientas',
    items: ['Git', 'GitHub', 'Docker', 'Metodologías ágiles'],
  },
  {
    label: 'Idiomas',
    items: ['Español (nativo)', 'Inglés B2'],
  },
];

const SKILLS = [
  {
    icon: Bot,
    title: 'IA aplicada al negocio',
    description:
      'Asistentes inteligentes y agentes de IA que automatizan procesos reales: búsqueda semántica con embeddings y vectorización, e integración con Google Gemini para análisis y apoyo en la toma de decisiones.',
    tags: ['Google Gemini', 'Agentes IA', 'Embeddings', 'Búsqueda semántica'],
  },
  {
    icon: Code2,
    title: 'Desarrollo full stack',
    description:
      'Del frontend al backend: interfaces con React, Next.js y Angular sobre APIs en NestJS y Python. Código tipado, componentes reutilizables y arquitecturas pensadas para escalar.',
    tags: ['TypeScript', 'React', 'Angular', 'NestJS'],
  },
  {
    icon: Workflow,
    title: 'Automatización e integraciones',
    description:
      'Conecto sistemas que antes no se hablaban: integraciones con servicios externos, flujos automatizados y despliegue sobre Cloudflare para eliminar el trabajo manual repetitivo.',
    tags: ['Integraciones', 'Cloudflare', 'Webhooks', 'APIs'],
  },
  {
    icon: Database,
    title: 'Datos y sistemas administrativos',
    description:
      'Modelado y consultas sobre PostgreSQL y SQL Server. Experiencia construyendo sistemas administrativos que sostienen la operación diaria de un negocio.',
    tags: ['PostgreSQL', 'SQL Server', 'Redis'],
  },
];

const SOFT_SKILLS = [
  'Responsable',
  'Analítico',
  'Aprendizaje continuo',
  'Trabajo en equipo',
  'Orientado a resultados',
  'Resolución de problemas',
];

const NAV_LINKS = [
  { id: 'about', label: 'Sobre mí' },
  { id: 'skills', label: 'Aptitudes' },
  { id: 'stack', label: 'Stack' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'education', label: 'Educación' },
];

/* ============================================================
   GLOBAL STYLES
   ============================================================ */

const GlobalStyles = () => (
  <style>{`
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Instrument+Serif:ital,wght@0,400;1,400&family=JetBrains+Mono:wght@400;500;700&display=swap');

    *, *::before, *::after { box-sizing: border-box; }

    :root {
      --green: #1B6B45;
      --green-l: #2D9E6A;
      --green-d: #145234;
      --green-xl: #E8F5EE;
      --green-soft: rgba(27,107,69,0.08);
      --ink: #09090B;
      --text: #3F3F46;
      --text-light: #71717A;
      --text-muted: #A1A1AA;
      --bg: #FAFAFA;
      --bg-white: #FFFFFF;
      --border: #E4E4E7;
      --border-soft: #F4F4F5;
      --dark: #09090B;
      --dark-2: #111113;
      --dark-border: #27272A;
    }

    [data-theme="dark"] {
      --bg: #09090B;
      --bg-white: #111113;
      --ink: #F4F4F5;
      --text: #A1A1AA;
      --text-light: #71717A;
      --text-muted: #52525B;
      --border: #27272A;
      --border-soft: #18181B;
      --green-xl: rgba(27,107,69,0.15);
    }

    html { scroll-behavior: smooth; }

    body, .ax-root {
      margin: 0;
      font-family: 'Plus Jakarta Sans', system-ui, sans-serif;
      background: var(--bg);
      color: var(--text);
      transition: background 0.3s ease, color 0.3s ease;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .ax-root { min-height: 100vh; }

    .ax-serif { font-family: 'Instrument Serif', serif; font-weight: 400; }
    .ax-mono { font-family: 'JetBrains Mono', monospace; }

    .ax-h2 {
      font-family: 'Instrument Serif', serif;
      font-size: clamp(32px, 4.5vw, 52px);
      letter-spacing: -1.5px;
      line-height: 1.05;
      color: var(--ink);
      margin: 0 0 24px;
      font-weight: 400;
    }
    .ax-h2 em { font-style: italic; color: var(--green); }

    .ax-section-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: var(--green);
      margin-bottom: 14px;
      display: block;
      font-weight: 500;
    }

    .ax-rule {
      width: 40px;
      height: 2px;
      background: var(--green);
      border-radius: 4px;
      margin-bottom: 28px;
    }

    .ax-lead {
      font-size: 17px;
      line-height: 1.65;
      color: var(--text);
      max-width: 640px;
    }

    /* Card */
    .ax-card {
      background: var(--bg-white);
      border: 1px solid var(--border-soft);
      border-radius: 20px;
      padding: 28px;
      transition: border-color 0.25s ease, box-shadow 0.25s ease, transform 0.25s ease;
    }
    .ax-card:hover {
      border-color: rgba(27,107,69,0.35);
      box-shadow: 0 8px 40px rgba(27,107,69,0.08);
      transform: translateY(-2px);
    }

    /* Buttons */
    .ax-btn {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 12px 20px;
      border-radius: 12px;
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 700;
      font-size: 14px;
      cursor: pointer;
      transition: all 0.2s ease;
      border: none;
      text-decoration: none;
      white-space: nowrap;
    }
    .ax-btn-primary {
      background: var(--green);
      color: #fff;
    }
    .ax-btn-primary:hover {
      background: var(--green-d);
      transform: translateY(-1px);
      box-shadow: 0 8px 24px rgba(27,107,69,0.25);
    }
    .ax-btn-ghost-dark {
      background: rgba(255,255,255,0.06);
      color: #F4F4F5;
      border: 1px solid rgba(255,255,255,0.1);
    }
    .ax-btn-ghost-dark:hover {
      background: rgba(255,255,255,0.1);
      transform: translateY(-1px);
    }
    .ax-btn-outline {
      background: transparent;
      color: var(--ink);
      border: 1px solid var(--border);
    }
    .ax-btn-outline:hover {
      border-color: var(--green);
      color: var(--green);
    }
    .ax-btn-shimmer {
      position: relative;
      overflow: hidden;
    }
    .ax-btn-shimmer::after {
      content: '';
      position: absolute;
      top: 0; left: -100%;
      width: 100%; height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.25), transparent);
      animation: shimmer 3s infinite;
    }
    @keyframes shimmer {
      0% { left: -100%; }
      100% { left: 100%; }
    }

    /* Badges / pills */
    .ax-pill {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      border-radius: 100px;
      padding: 5px 12px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.2px;
    }
    .ax-pill-green {
      background: var(--green-xl);
      color: var(--green);
    }
    .ax-pill-dark {
      background: rgba(255,255,255,0.08);
      color: #F4F4F5;
      border: 1px solid rgba(255,255,255,0.12);
    }
    .ax-pill-status {
      background: rgba(27,107,69,0.12);
      color: var(--green);
      border: 1px solid rgba(27,107,69,0.2);
    }
    .ax-pill-status-done {
      background: rgba(161,161,170,0.12);
      color: var(--text-light);
      border: 1px solid var(--border);
    }
    .ax-pill-tech {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      font-weight: 500;
      padding: 6px 12px;
      border-radius: 100px;
      background: var(--bg);
      border: 1px solid var(--border-soft);
      color: var(--text);
      transition: all 0.2s ease;
    }
    .ax-pill-tech:hover {
      border-color: var(--green);
      color: var(--green);
      background: var(--green-xl);
    }
    .ax-pill-tech-dark {
      background: rgba(255,255,255,0.04);
      border-color: rgba(255,255,255,0.08);
      color: #D4D4D8;
    }
    .ax-pill-tech-dark:hover {
      border-color: var(--green-l);
      color: var(--green-l);
      background: rgba(27,107,69,0.1);
    }
    .ax-pill-tech-light-on-green {
      background: rgba(255,255,255,0.12);
      border: 1px solid rgba(255,255,255,0.2);
      color: #fff;
    }

    /* Blink dot */
    .ax-dot {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background: var(--green-l);
      animation: blink 2s infinite;
      display: inline-block;
    }
    @keyframes blink {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.45; transform: scale(0.85); }
    }

    /* Reveal */
    .ax-reveal {
      opacity: 0;
      transform: translateY(24px);
      transition: opacity 0.7s ease, transform 0.7s ease;
    }
    .ax-reveal.is-visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* Section wrappers */
    .ax-section {
      padding: 120px 0;
      position: relative;
    }
    .ax-container {
      max-width: 1180px;
      margin: 0 auto;
      padding: 0 32px;
    }

    /* Navbar */
    .ax-nav {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      transition: background 0.3s ease, backdrop-filter 0.3s ease, border-color 0.3s ease;
      border-bottom: 1px solid transparent;
    }
    .ax-nav.is-scrolled {
      background: rgba(9,9,11,0.78);
      backdrop-filter: blur(18px);
      -webkit-backdrop-filter: blur(18px);
      border-bottom-color: rgba(255,255,255,0.06);
    }
    .ax-nav-inner {
      max-width: 1180px;
      margin: 0 auto;
      padding: 18px 32px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }
    .ax-nav-logo {
      font-weight: 800;
      font-size: 17px;
      letter-spacing: -0.4px;
      color: #fff;
      display: inline-flex;
      align-items: baseline;
      gap: 2px;
      text-decoration: none;
    }
    .ax-nav-logo .ax-logo-dot {
      width: 6px;
      height: 6px;
      border-radius: 50%;
      background: var(--green-l);
      animation: blink 2s infinite;
      display: inline-block;
      margin-left: 1px;
    }
    .ax-nav-links {
      display: flex;
      align-items: center;
      gap: 30px;
    }
    .ax-nav-link {
      font-size: 14px;
      font-weight: 500;
      color: rgba(244,244,245,0.7);
      cursor: pointer;
      background: none;
      border: none;
      padding: 4px 0;
      transition: color 0.2s ease;
      font-family: inherit;
    }
    .ax-nav-link:hover { color: #fff; }
    .ax-nav-link.is-active { color: var(--green-l); }

    .ax-nav-right {
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .ax-icon-btn {
      width: 38px;
      height: 38px;
      border-radius: 10px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      color: #F4F4F5;
      cursor: pointer;
      transition: all 0.2s ease;
    }
    .ax-icon-btn:hover {
      background: rgba(255,255,255,0.1);
      color: var(--green-l);
    }

    /* Mobile menu */
    .ax-mobile-toggle { display: none; }
    .ax-mobile-menu {
      position: fixed;
      top: 72px;
      left: 0; right: 0;
      background: rgba(9,9,11,0.95);
      backdrop-filter: blur(18px);
      border-top: 1px solid rgba(255,255,255,0.06);
      padding: 24px 32px;
      display: flex;
      flex-direction: column;
      gap: 20px;
      z-index: 99;
    }
    .ax-mobile-menu .ax-nav-link { font-size: 16px; }

    /* Hero */
    .ax-hero {
      position: relative;
      background: #09090B;
      color: #F4F4F5;
      min-height: 100vh;
      padding: 140px 0 80px;
      overflow: hidden;
      display: flex;
      align-items: center;
    }
    .ax-hero-grid {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(27,107,69,0.06) 1px, transparent 1px),
        linear-gradient(90deg, rgba(27,107,69,0.06) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 80%);
      -webkit-mask-image: radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 80%);
    }
    .ax-hero-glow {
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 700px;
      height: 700px;
      background: radial-gradient(circle, rgba(27,107,69,0.2), transparent 65%);
      pointer-events: none;
      filter: blur(40px);
    }
    .ax-hero-inner {
      position: relative;
      max-width: 1180px;
      margin: 0 auto;
      padding: 0 32px;
      width: 100%;
    }
    .ax-hero-pill {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 8px 16px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 100px;
      font-size: 13px;
      font-weight: 500;
      color: #E4E4E7;
      margin-bottom: 32px;
    }
    .ax-hero-name {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-weight: 800;
      font-size: clamp(48px, 10vw, 96px);
      line-height: 0.95;
      letter-spacing: -3px;
      color: #fff;
      margin: 0 0 20px;
    }
    .ax-hero-name .accent { color: var(--green-l); }
    .ax-hero-title {
      font-family: 'Instrument Serif', serif;
      font-style: italic;
      font-size: clamp(20px, 2.6vw, 28px);
      color: #D4D4D8;
      margin: 0 0 28px;
      letter-spacing: -0.3px;
    }
    .ax-hero-bio {
      font-size: 17px;
      line-height: 1.65;
      color: #A1A1AA;
      max-width: 580px;
      margin: 0 0 40px;
    }
    .ax-hero-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 0 0 36px;
    }
    .ax-hero-tag {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 7px 14px;
      border-radius: 100px;
      background: rgba(27,107,69,0.14);
      border: 1px solid rgba(45,158,106,0.28);
      color: #D4D4D8;
      font-size: 13px;
      font-weight: 600;
    }
    .ax-hero-tag svg { color: var(--green-l); }
    .ax-hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-bottom: 48px;
    }
    .ax-hero-socials {
      display: flex;
      gap: 12px;
    }
    .ax-social {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      color: #D4D4D8;
      transition: all 0.2s ease;
      text-decoration: none;
    }
    .ax-social:hover {
      color: var(--green-l);
      border-color: rgba(45,158,106,0.5);
      transform: translateY(-2px);
    }
    .ax-hero-meta {
      position: absolute;
      bottom: 60px;
      left: 32px;
      right: 32px;
      display: flex;
      justify-content: space-between;
      gap: 16px;
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: #52525B;
    }

    /* About */
    .ax-about-grid {
      display: grid;
      grid-template-columns: 280px 1fr;
      gap: 64px;
      align-items: start;
    }
    .ax-avatar {
      width: 160px;
      height: 160px;
      border-radius: 50%;
      background: linear-gradient(135deg, rgba(27,107,69,0.15), rgba(45,158,106,0.05));
      border: 1px solid var(--border-soft);
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Instrument Serif', serif;
      font-size: 60px;
      color: var(--green);
      letter-spacing: -2px;
      margin-bottom: 20px;
    }
    .ax-about-meta {
      display: flex;
      flex-direction: column;
      gap: 10px;
      font-size: 14px;
      color: var(--text-light);
    }
    .ax-about-meta-row {
      display: inline-flex;
      align-items: center;
      gap: 8px;
    }
    .ax-stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 16px;
      margin-top: 48px;
    }
    .ax-stat {
      padding: 24px 20px;
      border: 1px solid var(--border-soft);
      border-radius: 16px;
      background: var(--bg-white);
      transition: all 0.25s ease;
    }
    .ax-stat:hover {
      border-color: rgba(27,107,69,0.3);
      box-shadow: 0 8px 30px rgba(27,107,69,0.06);
    }
    .ax-stat-value {
      font-family: 'Instrument Serif', serif;
      font-size: 40px;
      color: var(--ink);
      line-height: 1;
      margin-bottom: 6px;
    }
    .ax-stat-label {
      font-size: 12px;
      color: var(--text-light);
      font-family: 'JetBrains Mono', monospace;
      letter-spacing: 0.5px;
    }

    /* Skills */
    .ax-skills-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
      margin-top: 48px;
    }
    .ax-skill-icon {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      background: var(--green-xl);
      color: var(--green);
      margin-bottom: 18px;
    }
    .ax-skill-title {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 19px;
      font-weight: 700;
      color: var(--ink);
      margin: 0 0 10px;
    }
    .ax-skill-desc {
      color: var(--text);
      line-height: 1.65;
      font-size: 15px;
      margin: 0 0 18px;
    }
    .ax-skill-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }
    .ax-soft-skills {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 32px;
      padding-top: 32px;
      border-top: 1px solid var(--border-soft);
    }
    .ax-soft-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--text-light);
      width: 100%;
      margin-bottom: 4px;
    }

    /* Stack */
    .ax-stack-section {
      background: #111113;
      color: #F4F4F5;
    }
    .ax-stack-section .ax-h2 { color: #fff; }
    .ax-stack-section .ax-lead { color: #A1A1AA; }
    .ax-stack-group {
      padding: 28px 0;
      border-bottom: 1px solid rgba(255,255,255,0.06);
      display: grid;
      grid-template-columns: 220px 1fr;
      gap: 32px;
      align-items: center;
    }
    .ax-stack-group:last-child { border-bottom: none; }
    .ax-stack-group-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--green-l);
    }
    .ax-stack-items {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    /* Projects */
    .ax-projects-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .ax-project-featured {
      grid-column: span 2;
      background: linear-gradient(135deg, var(--green-d), var(--green));
      color: #fff;
      border: 1px solid rgba(255,255,255,0.1);
      padding: 44px;
      border-radius: 24px;
      position: relative;
      overflow: hidden;
      transition: all 0.3s ease;
    }
    .ax-project-featured::before {
      content: '';
      position: absolute;
      top: -50%;
      right: -20%;
      width: 60%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.08), transparent 60%);
      pointer-events: none;
    }
    .ax-project-featured:hover {
      transform: translateY(-3px);
      box-shadow: 0 20px 60px rgba(27,107,69,0.35);
    }
    .ax-project-featured-content {
      position: relative;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 48px;
      align-items: center;
    }
    .ax-project-featured h3 {
      font-family: 'Instrument Serif', serif;
      font-size: clamp(28px, 3vw, 40px);
      margin: 16px 0;
      line-height: 1.05;
      font-weight: 400;
    }
    .ax-project-card {
      background: var(--bg-white);
      border: 1px solid var(--border-soft);
      border-radius: 20px;
      padding: 32px;
      display: flex;
      flex-direction: column;
      gap: 16px;
      transition: all 0.25s ease;
    }
    .ax-project-card:hover {
      border-color: rgba(27,107,69,0.3);
      box-shadow: 0 8px 40px rgba(27,107,69,0.08);
      transform: translateY(-2px);
    }
    .ax-project-title {
      font-family: 'Instrument Serif', serif;
      font-size: 26px;
      color: var(--ink);
      line-height: 1.15;
      margin: 0;
      font-weight: 400;
    }
    .ax-project-company {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: var(--green);
      letter-spacing: 1px;
    }
    .ax-project-desc {
      color: var(--text);
      line-height: 1.6;
      font-size: 15px;
      margin: 0;
    }
    .ax-project-stack {
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
      margin-top: auto;
    }

    /* Experience timeline */
    .ax-timeline {
      position: relative;
      padding-left: 32px;
      border-left: 1px solid var(--border);
    }
    .ax-timeline-item {
      position: relative;
      padding-bottom: 48px;
    }
    .ax-timeline-item:last-child { padding-bottom: 0; }
    .ax-timeline-dot {
      position: absolute;
      left: -41px;
      top: 6px;
      width: 18px;
      height: 18px;
      border-radius: 50%;
      background: var(--bg);
      border: 2px solid var(--border);
      transition: all 0.25s ease;
    }
    .ax-timeline-item.is-active .ax-timeline-dot {
      background: var(--green);
      border-color: var(--green);
      box-shadow: 0 0 0 6px rgba(27,107,69,0.15);
    }
    .ax-timeline-role {
      display: flex;
      align-items: center;
      gap: 10px;
      flex-wrap: wrap;
      margin-bottom: 6px;
    }
    .ax-timeline-role h3 {
      font-family: 'Plus Jakarta Sans', sans-serif;
      font-size: 19px;
      font-weight: 700;
      color: var(--ink);
      margin: 0;
    }
    .ax-timeline-company {
      color: var(--green);
      font-weight: 600;
      font-size: 15px;
      margin-bottom: 4px;
    }
    .ax-timeline-meta {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: var(--text-light);
      letter-spacing: 0.4px;
      margin-bottom: 12px;
      display: flex;
      gap: 16px;
      flex-wrap: wrap;
    }
    .ax-timeline-desc {
      color: var(--text);
      line-height: 1.65;
      font-size: 15px;
      max-width: 720px;
      margin: 0;
    }

    /* Education */
    .ax-edu-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
    .ax-edu-card {
      padding: 32px;
      position: relative;
    }
    .ax-edu-card.highlight {
      border: 1px solid rgba(27,107,69,0.25);
      background: linear-gradient(135deg, var(--green-xl), var(--bg-white));
    }
    .ax-edu-chip {
      display: inline-flex;
      align-items: center;
      gap: 6px;
      padding: 6px 12px;
      background: var(--green);
      color: #fff;
      border-radius: 100px;
      font-size: 12px;
      font-weight: 700;
      margin-bottom: 18px;
    }
    .ax-edu-program {
      font-family: 'Instrument Serif', serif;
      font-size: 24px;
      color: var(--ink);
      margin: 0 0 8px;
      line-height: 1.2;
      font-weight: 400;
    }
    .ax-edu-institution {
      color: var(--green);
      font-weight: 700;
      font-size: 14px;
      letter-spacing: 0.3px;
    }
    .ax-edu-period {
      font-family: 'JetBrains Mono', monospace;
      font-size: 12px;
      color: var(--text-light);
      margin-top: 12px;
    }
    .ax-edu-note {
      font-size: 13px;
      color: var(--text-light);
      margin-top: 10px;
      font-style: italic;
    }

    /* Contact */
    .ax-contact {
      background: #09090B;
      color: #F4F4F5;
    }
    .ax-contact .ax-h2 { color: #fff; }
    .ax-contact .ax-lead { color: #A1A1AA; }
    .ax-contact-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 64px;
      align-items: start;
    }
    .ax-form {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }
    .ax-input-group { display: flex; flex-direction: column; gap: 8px; }
    .ax-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--green-l);
    }
    .ax-input, .ax-textarea {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 12px;
      padding: 14px 16px;
      color: #F4F4F5;
      font-size: 15px;
      font-family: inherit;
      transition: all 0.2s ease;
      width: 100%;
      outline: none;
    }
    .ax-input:focus, .ax-textarea:focus {
      border-color: var(--green-l);
      background: rgba(255,255,255,0.06);
    }
    .ax-input::placeholder, .ax-textarea::placeholder { color: #52525B; }
    .ax-textarea { resize: vertical; min-height: 130px; }
    .ax-input.is-error, .ax-textarea.is-error {
      border-color: #DC2626;
    }
    .ax-error {
      color: #F87171;
      font-size: 12px;
      font-family: 'JetBrains Mono', monospace;
    }
    .ax-status {
      padding: 14px 16px;
      border-radius: 12px;
      font-size: 14px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .ax-status-ok {
      background: rgba(45,158,106,0.12);
      border: 1px solid rgba(45,158,106,0.3);
      color: var(--green-l);
    }
    .ax-status-err {
      background: rgba(220,38,38,0.1);
      border: 1px solid rgba(220,38,38,0.3);
      color: #F87171;
    }

    .ax-contact-card {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      padding: 32px;
    }
    .ax-contact-links { display: flex; flex-direction: column; gap: 14px; margin-top: 28px; }
    .ax-contact-link {
      display: flex;
      align-items: center;
      gap: 14px;
      padding: 14px 18px;
      border-radius: 12px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.06);
      color: #F4F4F5;
      text-decoration: none;
      transition: all 0.2s ease;
      font-size: 14px;
    }
    .ax-contact-link:hover {
      background: rgba(45,158,106,0.1);
      border-color: rgba(45,158,106,0.3);
      transform: translateX(4px);
    }
    .ax-contact-link-label {
      font-family: 'JetBrains Mono', monospace;
      font-size: 11px;
      letter-spacing: 2px;
      text-transform: uppercase;
      color: var(--green-l);
      display: block;
      margin-bottom: 2px;
    }
    .ax-contact-link-value {
      font-size: 14px;
      color: #F4F4F5;
    }

    /* Footer */
    .ax-footer {
      background: #111113;
      color: #71717A;
      padding: 40px 0;
      border-top: 1px solid rgba(255,255,255,0.06);
    }
    .ax-footer-inner {
      max-width: 1180px;
      margin: 0 auto;
      padding: 0 32px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
      font-size: 13px;
    }
    .ax-footer-logo {
      font-weight: 800;
      color: #F4F4F5;
      display: inline-flex;
      align-items: baseline;
      font-size: 15px;
    }

    /* Responsive */
    @media (max-width: 900px) {
      .ax-about-grid { grid-template-columns: 1fr; gap: 32px; }
      .ax-stats-grid { grid-template-columns: repeat(2, 1fr); }
      .ax-skills-grid { grid-template-columns: 1fr; }
      .ax-projects-grid { grid-template-columns: 1fr; }
      .ax-project-featured { grid-column: span 1; padding: 32px; }
      .ax-project-featured-content { grid-template-columns: 1fr; gap: 20px; }
      .ax-edu-grid { grid-template-columns: 1fr; }
      .ax-contact-grid { grid-template-columns: 1fr; gap: 40px; }
      .ax-stack-group { grid-template-columns: 1fr; gap: 16px; padding: 24px 0; }
    }

    @media (max-width: 700px) {
      .ax-container, .ax-nav-inner, .ax-hero-inner, .ax-footer-inner { padding-left: 20px; padding-right: 20px; }
      .ax-section { padding: 80px 0; }
      .ax-nav-links { display: none; }
      .ax-mobile-toggle { display: inline-flex; }
      .ax-hero-meta { display: none; }
      .ax-hero { padding: 120px 0 60px; min-height: auto; }
      .ax-stats-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
      .ax-stat { padding: 18px 16px; }
      .ax-stat-value { font-size: 32px; }
      .ax-timeline { padding-left: 24px; }
      .ax-timeline-dot { left: -33px; }
    }
  `}</style>
);

/* ============================================================
   HOOKS
   ============================================================ */

const useReveal = () => {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
};

/* ============================================================
   COMPONENTS
   ============================================================ */

const Navbar = ({ activeSection, isDark, onToggleTheme, onScrollTo }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleClick = (id) => {
    setMobileOpen(false);
    onScrollTo(id);
  };

  return (
    <>
      <nav className={`ax-nav ${scrolled || mobileOpen ? 'is-scrolled' : ''}`}>
        <div className="ax-nav-inner">
          <button
            className="ax-nav-logo"
            onClick={() => handleClick('top')}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
            aria-label="Inicio"
          >
            arryxl<span className="ax-logo-dot" />
          </button>

          <div className="ax-nav-links">
            {NAV_LINKS.map((link) => (
              <button
                key={link.id}
                className={`ax-nav-link ${activeSection === link.id ? 'is-active' : ''}`}
                onClick={() => handleClick(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="ax-nav-right">
            <button
              className="ax-icon-btn"
              onClick={onToggleTheme}
              aria-label="Cambiar tema"
              title={isDark ? 'Modo claro' : 'Modo oscuro'}
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <button
              className="ax-btn ax-btn-primary ax-btn-shimmer"
              style={{ padding: '10px 18px', fontSize: 13 }}
              onClick={() => handleClick('contact')}
            >
              Contactar <ArrowRight size={14} />
            </button>
            <button
              className="ax-icon-btn ax-mobile-toggle"
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Menú"
            >
              {mobileOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>
      </nav>
      {mobileOpen && (
        <div className="ax-mobile-menu">
          {NAV_LINKS.map((link) => (
            <button
              key={link.id}
              className={`ax-nav-link ${activeSection === link.id ? 'is-active' : ''}`}
              onClick={() => handleClick(link.id)}
            >
              {link.label}
            </button>
          ))}
          <button
            className="ax-btn ax-btn-primary"
            onClick={() => handleClick('contact')}
            style={{ justifyContent: 'center' }}
          >
            Contactar <ArrowRight size={14} />
          </button>
        </div>
      )}
    </>
  );
};

const HeroSection = ({ onScrollTo }) => (
  <section className="ax-hero" id="top">
    <div className="ax-hero-grid" />
    <div className="ax-hero-glow" />
    <div className="ax-hero-inner">
      <div className="ax-hero-pill">
        <span className="ax-dot" />
        Disponible para oportunidades
      </div>
      <h1 className="ax-hero-name">
        Juan <span className="accent">Reyes</span>
      </h1>
      <p className="ax-hero-title">{PERSONAL.title}</p>
      <p className="ax-hero-bio">{PERSONAL.bio}</p>
      <div className="ax-hero-tags">
        <span className="ax-hero-tag">
          <Briefcase size={13} /> Cofundador · Solucionalo.co
        </span>
        <span className="ax-hero-tag">
          <Bot size={13} /> IA aplicada &amp; agentes
        </span>
        <span className="ax-hero-tag">
          <Code2 size={13} /> Full Stack · TypeScript
        </span>
        <span className="ax-hero-tag">
          <GraduationCap size={13} /> Tecnólogo ADSO · SENA
        </span>
      </div>
      <div className="ax-hero-actions">
        <button className="ax-btn ax-btn-primary" onClick={() => onScrollTo('projects')}>
          Ver proyectos <ArrowRight size={16} />
        </button>
        <button className="ax-btn ax-btn-ghost-dark" onClick={() => onScrollTo('contact')}>
          <Send size={15} /> Contactar
        </button>
      </div>
      <div className="ax-hero-socials">
        <a className="ax-social" href={PERSONAL.github} target="_blank" rel="noreferrer" aria-label="GitHub">
          <GithubIcon size={18} />
        </a>
        <a className="ax-social" href={PERSONAL.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedinIcon size={18} />
        </a>
        <a className="ax-social" href={`mailto:${PERSONAL.email}`} aria-label="Email">
          <Mail size={18} />
        </a>
      </div>
    </div>
    <div className="ax-hero-meta">
      <span>{PERSONAL.location.toUpperCase()}</span>
      <span>v.2026 · {PERSONAL.domain}</span>
    </div>
  </section>
);

const AboutSection = () => {
  const ref = useReveal();
  return (
    <section id="about" className="ax-section">
      <div ref={ref} className="ax-reveal ax-container">
        <span className="ax-section-label">01 — Sobre mí</span>
        <div className="ax-rule" />
        <div className="ax-about-grid">
          <div>
            <div className="ax-avatar" style={{ padding: 0, overflow: 'hidden' }}>
              <img 
                src="/profile.jpg" 
                alt="Juan Reyes" 
                style={{ 
                  width: '100%', 
                  height: '100%', 
                  objectFit: 'cover',
                  borderRadius: '50%',
                  display: 'block'
                }} 
              />
            </div>
            <div className="ax-pill ax-pill-green" style={{ marginBottom: 20 }}>
              <Award size={13} /> Mejor Aprendiz SENA 2024
            </div>
            <div className="ax-about-meta">
              <span className="ax-about-meta-row">
                <MapPin size={14} /> {PERSONAL.location}
              </span>
              <span className="ax-about-meta-row">
                <GraduationCap size={14} /> Tecnólogo en Análisis y Desarrollo de Software
              </span>
              <span className="ax-about-meta-row">
                <Calendar size={14} /> Construyendo desde 2020
              </span>
              <span className="ax-about-meta-row ax-mono" style={{ fontSize: 12 }}>
                {PERSONAL.domain}
              </span>
            </div>
          </div>
          <div>
            <h2 className="ax-h2">
              Transformo ideas en productos <em>funcionales</em>,
              <br />escalables y que <em>resuelven</em> problemas reales.
            </h2>
            <p className="ax-lead">{PERSONAL.shortBio}</p>
            <p className="ax-lead" style={{ marginTop: 16 }}>
              Soy Desarrollador de Software y cofundador de{' '}
              <strong style={{ color: 'var(--green)' }}>Solucionalo.co</strong>, donde construyo
              soluciones que ayudan a empresas y emprendedores a optimizar sus procesos mediante
              aplicaciones web, automatización e <strong style={{ color: 'var(--green)' }}>inteligencia artificial</strong>.
              Vengo de una etapa profesional desarrollando sistemas administrativos, integraciones
              con servicios externos y soluciones de IA —agentes, asistentes inteligentes y búsqueda
              semántica— y acabo de finalizar mi Tecnología en Análisis y Desarrollo de Software en
              el SENA.
            </p>
            <div className="ax-stats-grid">
              {STATS.map((s) => (
                <div key={s.label} className="ax-stat">
                  <div className="ax-stat-value">{s.value}</div>
                  <div className="ax-stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SkillsSection = () => {
  const ref = useReveal();
  return (
    <section id="skills" className="ax-section" style={{ paddingTop: 0 }}>
      <div ref={ref} className="ax-reveal ax-container">
        <span className="ax-section-label">02 — Aptitudes</span>
        <div className="ax-rule" />
        <h2 className="ax-h2">
          En qué puedo <em>aportar</em> desde el primer día.
        </h2>
        <p className="ax-lead">
          Experiencia real en frontend y backend, con foco en soluciones de IA que generan valor
          medible para las organizaciones y sus usuarios.
        </p>
        <div className="ax-skills-grid">
          {SKILLS.map((skill) => {
            const Icon = skill.icon;
            return (
              <article key={skill.title} className="ax-card">
                <div className="ax-skill-icon">
                  <Icon size={20} />
                </div>
                <h3 className="ax-skill-title">{skill.title}</h3>
                <p className="ax-skill-desc">{skill.description}</p>
                <div className="ax-skill-tags">
                  {skill.tags.map((t) => (
                    <span key={t} className="ax-pill-tech">
                      {t}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
        <div className="ax-soft-skills">
          <span className="ax-soft-label">Además</span>
          {SOFT_SKILLS.map((s) => (
            <span key={s} className="ax-pill ax-pill-green">
              <CheckCircle2 size={12} /> {s}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const StackSection = () => {
  const ref = useReveal();
  return (
    <section id="stack" className="ax-section ax-stack-section">
      <div ref={ref} className="ax-reveal ax-container">
        <span className="ax-section-label">03 — Stack</span>
        <div className="ax-rule" />
        <h2 className="ax-h2">
          Tecnologías con las que <em>trabajo</em> a diario.
        </h2>
        <p className="ax-lead" style={{ marginBottom: 32 }}>
          Mi día a día está entre React, NestJS, bases de datos relacionales y modelos de IA.
          Aprendo lo que necesite el problema, no lo que esté de moda.
        </p>
        <div>
          {STACK_GROUPS.map((group) => (
            <div key={group.label} className="ax-stack-group">
              <div className="ax-stack-group-label">{group.label}</div>
              <div className="ax-stack-items">
                {group.items.map((it) => (
                  <span key={it} className="ax-pill-tech ax-pill-tech-dark">
                    {it}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectsSection = () => {
  const ref = useReveal();
  const featured = PROJECTS.find((p) => p.featured);
  const others = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="ax-section">
      <div ref={ref} className="ax-reveal ax-container">
        <span className="ax-section-label">04 — Proyectos</span>
        <div className="ax-rule" />
        <h2 className="ax-h2">
          Algunas cosas que estoy <em>construyendo</em>.
        </h2>
        <p className="ax-lead" style={{ marginBottom: 48 }}>
          Productos propios, soluciones de IA en entorno profesional y proyectos formativos. Aquí lo
          más reciente y relevante.
        </p>
        <div className="ax-projects-grid">
          {featured && (
            <div className="ax-project-featured">
              <div className="ax-project-featured-content">
                <div>
                  <span className="ax-pill ax-pill-tech-light-on-green" style={{ fontFamily: 'inherit' }}>
                    <Sparkles size={12} /> Featured · {featured.status}
                  </span>
                  <h3>{featured.title}</h3>
                  <div className="ax-mono" style={{ fontSize: 12, color: 'rgba(255,255,255,0.7)', letterSpacing: 1, marginBottom: 14 }}>
                    {featured.company}
                  </div>
                  {featured.link && (
                    <a
                      href={featured.link}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: 6,
                        color: '#fff',
                        textDecoration: 'none',
                        fontSize: 13,
                        fontWeight: 600,
                        marginTop: 8,
                        opacity: 0.95,
                      }}
                    >
                      {featured.linkLabel} <ExternalLink size={13} />
                    </a>
                  )}
                </div>
                <div>
                  <p style={{ lineHeight: 1.65, fontSize: 15, color: 'rgba(255,255,255,0.92)', margin: '0 0 20px' }}>
                    {featured.description}
                  </p>
                  <div className="ax-project-stack">
                    {featured.stack.map((s) => (
                      <span key={s} className="ax-pill-tech ax-pill-tech-light-on-green">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          {others.map((p) => (
            <article key={p.id} className="ax-project-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
                <span className="ax-project-company">{p.company}</span>
                <span className={`ax-pill ${p.status === 'Completado' ? 'ax-pill-status-done' : 'ax-pill-status'}`}>
                  {p.status}
                </span>
              </div>
              <h3 className="ax-project-title">{p.title}</h3>
              <p className="ax-project-desc">{p.description}</p>
              {p.period && (
                <div className="ax-mono" style={{ fontSize: 12, color: 'var(--text-light)', letterSpacing: 0.4 }}>
                  {p.period}
                </div>
              )}
              <div className="ax-project-stack">
                {p.stack.map((s) => (
                  <span key={s} className="ax-pill-tech">
                    {s}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = () => {
  const ref = useReveal();
  return (
    <section id="experience" className="ax-section">
      <div ref={ref} className="ax-reveal ax-container">
        <span className="ax-section-label">05 — Experiencia</span>
        <div className="ax-rule" />
        <h2 className="ax-h2">
          Por dónde he <em>pasado</em>.
        </h2>
        <p className="ax-lead" style={{ marginBottom: 56 }}>
          De enseñar programación a estudiantes hasta co-fundar una startup. Cada paso ha sumado a
          la forma en que pienso el producto.
        </p>
        <div className="ax-timeline">
          {EXPERIENCE.map((e, i) => (
            <div key={i} className={`ax-timeline-item ${e.active ? 'is-active' : ''}`}>
              <span className="ax-timeline-dot" />
              <div className="ax-timeline-role">
                <h3>{e.role}</h3>
                {e.badge && <span className="ax-pill ax-pill-green">{e.badge}</span>}
              </div>
              <div className="ax-timeline-company">{e.company}</div>
              <div className="ax-timeline-meta">
                <span>
                  <Calendar size={12} style={{ marginRight: 6, verticalAlign: 'middle' }} />
                  {e.period}
                </span>
                <span>
                  <MapPin size={12} style={{ marginRight: 6, verticalAlign: 'middle' }} />
                  {e.location}
                </span>
              </div>
              <p className="ax-timeline-desc">{e.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationSection = () => {
  const ref = useReveal();
  return (
    <section id="education" className="ax-section">
      <div ref={ref} className="ax-reveal ax-container">
        <span className="ax-section-label">06 — Educación</span>
        <div className="ax-rule" />
        <h2 className="ax-h2">
          Formación <em>formal</em> y autodidacta.
        </h2>
        <div className="ax-edu-grid" style={{ marginTop: 48 }}>
          {EDUCATION.map((edu, i) => (
            <div key={i} className={`ax-card ax-edu-card ${edu.highlight ? 'highlight' : ''}`}>
              {edu.highlight && (
                <div className="ax-edu-chip">
                  <Award size={13} /> {edu.award}
                </div>
              )}
              <div className="ax-edu-institution">
                <GraduationCap size={14} style={{ marginRight: 8, verticalAlign: 'middle' }} />
                {edu.institution}
              </div>
              <h3 className="ax-edu-program" style={{ marginTop: 8 }}>
                {edu.program}
              </h3>
              <div className="ax-edu-period">{edu.period}</div>
              {edu.note && <div className="ax-edu-note">{edu.note}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const ref = useReveal();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [statusMessage, setStatusMessage] = useState('');
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    const e = {};
    if (form.name.trim().length < 2) e.name = 'Mínimo 2 caracteres';
    if (!emailRegex.test(form.email.trim())) e.email = 'Email no válido';
    if (form.message.trim().length < 10) e.message = 'Mínimo 10 caracteres';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const getInitials = (fullName) => {
    const parts = fullName.trim().split(/\s+/);
    const first = parts[0]?.[0] || '';
    const last = parts.length > 1 ? parts[parts.length - 1][0] : '';
    return (first + last).toUpperCase();
  };

  const onSubmit = async (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    if (!window.emailjs) {
      setStatus('error');
      setStatusMessage('EmailJS aún no está cargado. Intenta de nuevo en un momento.');
      return;
    }
    setStatus('sending');
    setStatusMessage('');
    try {
      const initials = getInitials(form.name);
      await window.emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name.trim(),
          from_email: form.email.trim(),
          message: form.message.trim(),
          initials,
        }
      );
      setStatus('success');
      setStatusMessage('¡Mensaje enviado! Te respondo en menos de 24h.');
      setForm({ name: '', email: '', message: '' });
      setErrors({});
      setTimeout(() => {
        setStatus('idle');
        setStatusMessage('');
      }, 4000);
    } catch (err) {
      setStatus('error');
      setStatusMessage('No se pudo enviar. Escríbeme directo a ' + PERSONAL.email);
    }
  };

  return (
    <section id="contact" className="ax-section ax-contact">
      <div ref={ref} className="ax-reveal ax-container">
        <span className="ax-section-label">07 — Contacto</span>
        <div className="ax-rule" />
        <h2 className="ax-h2">
          ¿Tienes una idea? <em>Hablemos</em>.
        </h2>
        <p className="ax-lead" style={{ marginBottom: 56 }}>
          Estoy abierto a oportunidades, colaboraciones y proyectos interesantes. Cuéntame qué
          tienes en mente.
        </p>
        <div className="ax-contact-grid">
          <form className="ax-form" onSubmit={onSubmit} noValidate>
            <div className="ax-input-group">
              <label className="ax-label" htmlFor="ax-name">Nombre</label>
              <input
                id="ax-name"
                className={`ax-input ${errors.name ? 'is-error' : ''}`}
                type="text"
                placeholder="Tu nombre"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                disabled={status === 'sending'}
              />
              {errors.name && <span className="ax-error">{errors.name}</span>}
            </div>
            <div className="ax-input-group">
              <label className="ax-label" htmlFor="ax-email">Email</label>
              <input
                id="ax-email"
                className={`ax-input ${errors.email ? 'is-error' : ''}`}
                type="email"
                placeholder="tu@correo.com"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                disabled={status === 'sending'}
              />
              {errors.email && <span className="ax-error">{errors.email}</span>}
            </div>
            <div className="ax-input-group">
              <label className="ax-label" htmlFor="ax-message">Mensaje</label>
              <textarea
                id="ax-message"
                className={`ax-textarea ${errors.message ? 'is-error' : ''}`}
                placeholder="Cuéntame sobre tu proyecto..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                disabled={status === 'sending'}
              />
              {errors.message && <span className="ax-error">{errors.message}</span>}
            </div>

            {status === 'success' && (
              <div className="ax-status ax-status-ok">
                <CheckCircle2 size={16} /> {statusMessage}
              </div>
            )}
            {status === 'error' && (
              <div className="ax-status ax-status-err">
                <AlertCircle size={16} /> {statusMessage}
              </div>
            )}

            <button
              type="submit"
              className="ax-btn ax-btn-primary"
              disabled={status === 'sending'}
              style={{ alignSelf: 'flex-start', marginTop: 8 }}
            >
              {status === 'sending' ? 'Enviando...' : (<>Enviar mensaje <Send size={14} /></>)}
            </button>
          </form>

          <div className="ax-contact-card">
            <h3 style={{ fontFamily: 'Instrument Serif, serif', fontSize: 28, color: '#fff', margin: '0 0 12px', fontWeight: 400, lineHeight: 1.2 }}>
              También puedes encontrarme aquí.
            </h3>
            <p style={{ color: '#A1A1AA', lineHeight: 1.6, margin: 0, fontSize: 15 }}>
              Si prefieres un canal directo, escríbeme por email o LinkedIn. Suelo responder el
              mismo día.
            </p>
            <div className="ax-contact-links">
              <a className="ax-contact-link" href={`mailto:${PERSONAL.email}`}>
                <Mail size={20} />
                <div>
                  <span className="ax-contact-link-label">Email</span>
                  <span className="ax-contact-link-value">{PERSONAL.email}</span>
                </div>
              </a>
              <a className="ax-contact-link" href={PERSONAL.github} target="_blank" rel="noreferrer">
                <GithubIcon size={20} />
                <div>
                  <span className="ax-contact-link-label">GitHub</span>
                  <span className="ax-contact-link-value">{PERSONAL.githubLabel}</span>
                </div>
              </a>
              <a className="ax-contact-link" href={PERSONAL.linkedin} target="_blank" rel="noreferrer">
                <LinkedinIcon size={20} />
                <div>
                  <span className="ax-contact-link-label">LinkedIn</span>
                  <span className="ax-contact-link-value">{PERSONAL.linkedinLabel}</span>
                </div>
              </a>
              <a className="ax-contact-link" href={PERSONAL.whatsapp} target="_blank" rel="noreferrer">
                <MessageCircle size={20} />
                <div>
                  <span className="ax-contact-link-label">WhatsApp</span>
                  <span className="ax-contact-link-value">Chat directo</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => (
  <footer className="ax-footer">
    <div className="ax-footer-inner">
      <div className="ax-footer-logo">
        arryxl<span className="ax-logo-dot" style={{ background: 'var(--green-l)', width: 5, height: 5, borderRadius: '50%', marginLeft: 1, display: 'inline-block' }} />
      </div>
      <div className="ax-mono" style={{ fontSize: 12, letterSpacing: 1 }}>
        © {new Date().getFullYear()} · Juan Reyes
      </div>
      <div style={{ fontSize: 13 }}>Hecho con cariño en Ibagué, Colombia.</div>
    </div>
  </footer>
);

/* ============================================================
   APP
   ============================================================ */

export default function App() {
  const [isDark, setIsDark] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  // Initial theme based on system preference
  useEffect(() => {
  if (typeof window !== 'undefined' && window.matchMedia) {
    const prefersDark = false;
    setIsDark(prefersDark);
  }
  }, []);

  // Apply theme to document root
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', isDark ? 'dark' : 'light');
    }
  }, [isDark]);

  // Load EmailJS
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (window.emailjs) return;
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js';
    script.async = true;
    script.onload = () => {
      if (window.emailjs) {
        window.emailjs.init({ publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY });
      }
    };
    document.body.appendChild(script);
    return () => {
      // keep script for the session
    };
  }, []);

  // IntersectionObserver for active nav link
  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.id).concat(['contact']);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  const onScrollTo = useCallback((id) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <div className="ax-root">
      <GlobalStyles />
      <Navbar
        activeSection={activeSection}
        isDark={isDark}
        onToggleTheme={() => setIsDark((v) => !v)}
        onScrollTo={onScrollTo}
      />
      <HeroSection onScrollTo={onScrollTo} />
      <AboutSection />
      <SkillsSection />
      <StackSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
