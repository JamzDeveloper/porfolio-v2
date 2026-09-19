"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, ArchitectureBlueprint } from "@/data/portfolio";
import { 
  Network, 
  Maximize2, 
  X, 
  CheckCircle2, 
  ArrowRight, 
  Scale, 
  Cpu, 
  Layers, 
  ExternalLink,
  GitPullRequest,
  Lightbulb
} from "lucide-react";

export function BlueprintsSection() {
  const { architectureBlueprints } = PORTFOLIO_DATA;
  const [selectedId, setSelectedId] = useState<string>(architectureBlueprints[0].id);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activeBlueprint = architectureBlueprints.find(b => b.id === selectedId) || architectureBlueprints[0];

  return (
    <section id="blueprints" className="py-24 relative overflow-hidden bg-[#0a0b12] border-t border-white/[0.08]">
      {/* Background glow */}
      <div className="absolute top-1/3 right-1/4 w-[700px] h-[350px] bg-indigo-500/5 rounded-full blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
            <Network className="w-3.5 h-3.5 text-indigo-400" />
            <span>System Design &amp; Architecture Blueprints</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Diagramas de Arquitectura &amp; Decisiones de Diseño
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Patrones de alta concurrencia, resiliencia y desacoplamiento de servicios. Especificaciones visuales creadas para bancos, plataformas de streaming y productos con IA.
          </p>

          {/* Simple explanation for non-tech users & recruiters */}
          <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] max-w-2xl mx-auto text-left flex items-start gap-3">
            <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
              <strong className="text-white font-semibold">¿Qué son estos diagramas?</strong> Piensa en ellos como los <span className="text-amber-300 font-medium">planos de un rascacielos</span>: antes de construir, diseñamos cómo se conectan las bases de datos y los servidores para que tu aplicación soporte millones de clientes sin caerse ni volverse lenta.
            </p>
          </div>

          {/* Blueprint Selector Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
            {architectureBlueprints.map((b) => (
              <button
                key={b.id}
                onClick={() => setSelectedId(b.id)}
                className={`px-4 py-2.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  selectedId === b.id
                    ? "bg-indigo-600 text-white font-bold shadow-[0_0_20px_rgba(99,102,241,0.4)] border border-indigo-400"
                    : "bg-white/[0.04] text-zinc-400 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
                }`}
              >
                {b.title}
              </button>
            ))}
          </div>
        </div>

        {/* Blueprint Visual Showcase Box */}
        <div className="rounded-2xl border border-white/[0.1] bg-[#0c0d16] overflow-hidden shadow-2xl space-y-8 p-6 sm:p-10">
          
          {/* Header Metadata */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-widest block">
                {activeBlueprint.topic}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeBlueprint.title}
              </h3>
              <p className="text-sm font-mono text-zinc-300 mt-1">
                {activeBlueprint.tagline}
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] text-xs font-mono text-white transition-all self-start md:self-auto cursor-pointer"
            >
              <Maximize2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>Ver en Pantalla Completa</span>
            </button>
          </div>

          {/* SVG Diagram Canvas */}
          <div 
            onClick={() => setIsModalOpen(true)}
            className="relative rounded-xl border border-white/[0.08] bg-[#08090e] p-2 sm:p-4 overflow-hidden group cursor-pointer"
          >
            <img
              src={activeBlueprint.diagramImage}
              alt={activeBlueprint.title}
              className="w-full h-auto rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
            />
            
            <div className="absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md text-xs font-mono text-white border border-white/20 flex items-center gap-2 shadow-2xl">
                <Maximize2 className="w-4 h-4 text-indigo-400" />
                Haz clic para ampliar y explorar diagrama Draw.io
              </span>
            </div>
          </div>

          {/* Deep Breakdown Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
            
            {/* Left Column: Problem & Architecture Highlights */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-5 rounded-xl bg-indigo-950/20 border border-indigo-500/20 space-y-2">
                <h4 className="text-xs font-mono text-indigo-400 uppercase tracking-wider flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  Desafío de Arquitectura / Problem Statement:
                </h4>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {activeBlueprint.problemStatement}
                </p>
              </div>

              <div className="space-y-3">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Patrones &amp; Principios Clave:
                </h4>
                <ul className="space-y-2">
                  {activeBlueprint.architectureHighlights.map((h, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-indigo-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Components & Tradeoffs */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-3">
                <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                  Componentes del Sistema:
                </h4>
                <div className="space-y-2">
                  {activeBlueprint.components.map((c, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-lg bg-white/[0.02] border border-white/[0.06] flex items-start justify-between gap-3 text-xs font-mono"
                    >
                      <span className="text-white font-bold">{c.name}:</span>
                      <span className="text-zinc-400 text-right">{c.role}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-1.5">
                <h4 className="text-xs font-mono text-amber-400 uppercase tracking-wider flex items-center gap-1.5">
                  <Scale className="w-3.5 h-3.5 text-amber-400" />
                  Trade-offs de Ingeniería:
                </h4>
                <p className="text-xs text-zinc-300 leading-relaxed">
                  {activeBlueprint.tradeoffs}
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Lightbox Modal for Full Screen Architecture Diagram */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setIsModalOpen(false)}
        >
          <div 
            className="relative max-w-6xl w-full max-h-[92vh] bg-[#0d0f18] rounded-2xl border border-white/20 overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#121422] border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-mono font-bold text-white">
                  {activeBlueprint.title}
                </h3>
                <span className="text-xs text-indigo-400 font-mono">
                  {activeBlueprint.topic} // Especificación Técnica Draw.io
                </span>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-lg bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Image */}
            <div className="overflow-auto flex-grow p-6 bg-[#08090e] flex items-center justify-center">
              <img
                src={activeBlueprint.diagramImage}
                alt={activeBlueprint.title}
                className="w-full h-auto max-h-[75vh] object-contain rounded-lg border border-white/10 shadow-2xl"
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
