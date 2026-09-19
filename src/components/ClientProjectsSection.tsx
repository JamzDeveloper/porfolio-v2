"use client";

import React, { useState } from "react";
import Image from "next/image";
import { PORTFOLIO_DATA, ClientProject } from "@/data/portfolio";
import { 
  FolderKanban, 
  ExternalLink, 
  CheckCircle2, 
  Cpu, 
  Layers, 
  ArrowUpRight, 
  Calendar,
  Sparkles,
  ShieldCheck,
  Building,
  Maximize2,
  X,
  Globe,
  Lock
} from "lucide-react";

export function ClientProjectsSection() {
  const { clientProjects } = PORTFOLIO_DATA;
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [activeModalProject, setActiveModalProject] = useState<ClientProject | null>(null);

  const categories = [
    { id: "all", label: "Todos los Proyectos" },
    { id: "saas", label: "SaaS & Agentes IA" },
    { id: "web", label: "Plataformas Web & CMS" },
    { id: "ecommerce", label: "E-commerce & Catálogos" },
  ];

  const filteredProjects = clientProjects.filter(p => {
    if (selectedFilter === "all") return true;
    if (selectedFilter === "saas") return p.category.includes("SaaS") || p.category.includes("IA");
    if (selectedFilter === "web") return p.category.includes("Web") || p.category.includes("Comercial");
    if (selectedFilter === "ecommerce") return p.category.includes("Commerce") || p.category.includes("Catálogo");
    return true;
  });

  return (
    <section id="proyectos-clientes" className="py-24 relative overflow-hidden bg-[#08090e] border-t border-white/[0.08]">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <FolderKanban className="w-3.5 h-3.5 text-emerald-400" />
            <span>Desarrollo End-to-End & Pruebas en Vivo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Proyectos & Soluciones Construidas para Clientes
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Capturas reales de plataformas desplegadas en producción para empresas de EE.UU. y Latinoamérica. Arquitecturas probadas con interfaces de alta conversión.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  selectedFilter === cat.id
                    ? "bg-emerald-500 text-black font-bold shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                    : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-white/[0.08] bg-[#0c0e17] overflow-hidden flex flex-col justify-between hover:border-emerald-500/30 hover:bg-[#0f111c] transition-all duration-300 shadow-2xl group"
            >
              {/* Browser Window Mockup Frame */}
              <div className="border-b border-white/[0.08] bg-[#11131e] px-4 py-2.5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
                </div>
                
                {/* Fake URL Bar */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-md bg-[#08090e] border border-white/[0.06] text-[11px] font-mono text-zinc-400 max-w-[260px] sm:max-w-[320px] truncate">
                  <Lock className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span className="truncate">
                    {project.liveUrl ? project.liveUrl.replace(/^https?:\/\//, "") : project.client}
                  </span>
                </div>

                <button
                  onClick={() => setActiveModalProject(project)}
                  className="p-1 text-zinc-400 hover:text-white transition-colors"
                  title="Ampliar captura"
                >
                  <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Screenshot Container */}
              <div 
                onClick={() => setActiveModalProject(project)}
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#0a0b12] cursor-pointer group/img"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e17] via-transparent to-transparent opacity-80" />
                
                {/* Overlay Badge */}
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                    {project.badge}
                  </span>
                  <span className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-black/70 backdrop-blur-md text-zinc-300 border border-white/10 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center gap-1">
                    <Maximize2 className="w-3 h-3 text-emerald-400" />
                    Ampliar
                  </span>
                </div>
              </div>

              {/* Card Details */}
              <div className="p-7 sm:p-8 space-y-6 flex-grow flex flex-col justify-between">
                <div className="space-y-4">
                  {/* Title & Client */}
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-xs font-mono text-zinc-500">
                        {project.year} · {project.role}
                      </span>
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-mono text-emerald-400 hover:text-emerald-300"
                        >
                          <span>Visitar Web</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight mt-1.5 group-hover:text-emerald-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-1 flex items-center gap-1.5">
                      <Building className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{project.client}</span>
                    </p>
                  </div>

                  {/* Tagline & Description */}
                  <div className="space-y-1.5">
                    <p className="text-xs font-mono text-emerald-300 font-medium">
                      {project.tagline}
                    </p>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      Entregables de Ingeniería:
                    </span>
                    <ul className="space-y-1.5">
                      {project.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Stack Badges */}
                  <div className="pt-2">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                      Stack Tecnológico:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {project.stack.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-mono px-2.5 py-1 rounded bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Action */}
                <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-500">
                    {project.category}
                  </span>
                  <a
                    href="#agendar"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors"
                  >
                    <span>Cotizar proyecto similar</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>

              </div>

            </div>
          ))}
        </div>

        {/* Banner CTA */}
        <div className="mt-16 rounded-2xl border border-white/[0.08] bg-[#0b0d16] p-8 text-center space-y-4">
          <h3 className="text-xl font-bold text-white font-mono">
            ¿Tienes un proyecto, plataforma web o desarrollo a medida en mente?
          </h3>
          <p className="text-sm text-zinc-300 max-w-2xl mx-auto">
            Desde la arquitectura técnica de bases de datos y APIs hasta la interfaz en Next.js y el despliegue cloud en AWS. Conversemos para estructurar una propuesta técnica precisa.
          </p>
          <div className="pt-2">
            <a
              href="#agendar"
              className="inline-flex items-center gap-2 bg-emerald-500 text-black px-6 py-3 rounded-xl font-mono text-xs font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Reunión de Proyecto</span>
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Full Screenshot View */}
      {activeModalProject && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setActiveModalProject(null)}
        >
          <div 
            className="relative max-w-5xl w-full max-h-[90vh] bg-[#0d0f18] rounded-2xl border border-white/20 overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-5 py-3.5 bg-[#121422] border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <span className="text-sm font-mono font-bold text-white">
                  {activeModalProject.title}
                </span>
                <span className="text-xs font-mono text-emerald-400">
                  ({activeModalProject.client})
                </span>
              </div>
              <div className="flex items-center gap-3">
                {activeModalProject.liveUrl && (
                  <a
                    href={activeModalProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-xs font-mono text-emerald-400 hover:underline"
                  >
                    <span>Ir al sitio</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}
                <button
                  onClick={() => setActiveModalProject(null)}
                  className="p-1 rounded-lg bg-white/10 text-zinc-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Image */}
            <div className="overflow-auto flex-grow p-4 bg-[#08090e]">
              <img
                src={activeModalProject.image}
                alt={activeModalProject.title}
                className="w-full h-auto rounded-lg border border-white/10 shadow-lg"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
