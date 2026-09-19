"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import Link from "next/link";
import { Terminal, Mail, ArrowUp } from "lucide-react";

export function Footer() {
  const { personal } = PORTFOLIO_DATA;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { label: "Sobre Mí", href: "/sobre-mi" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Servicios", href: "/servicios" },
    { label: "Blueprints", href: "/blueprints" },
    { label: "Speaker", href: "/speaker" },
    { label: "Descargar CV", href: "/cv-jose-montenegro.pdf" },
    { label: "Agendar", href: "/agendar" },
  ];

  return (
    <footer className="py-12 bg-[#06070a] border-t border-white/[0.08] text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/[0.06]">
          
          {/* Brand */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <Terminal className="w-4 h-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-white tracking-tight">
                {personal.name}
              </p>
              <p className="text-[11px] text-zinc-400">
                Staff Backend Engineer & AI Systems Architect
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-4 text-xs">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-zinc-400 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {/* LinkedIn SVG */}
            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.25c-.97 0-1.75.79-1.75 1.76s.78 1.76 1.75 1.76 1.75-.79 1.75-1.76-.78-1.76-1.75-1.76Z" />
              </svg>
            </a>

            {/* GitHub SVG */}
            <a
              href={personal.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${personal.email}`}
              className="p-2.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.08] text-zinc-400 hover:text-white transition-colors cursor-pointer"
          >
            <span>Volver arriba</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-zinc-400">
          <p>© {new Date().getFullYear()} jamzdeveloper.com · Todos los derechos reservados.</p>
          <p className="text-[11px] text-zinc-400">
            Diseñado para sistemas de alta concurrencia & pipelines de IA en tiempo real.
          </p>
        </div>
      </div>
    </footer>
  );
}
