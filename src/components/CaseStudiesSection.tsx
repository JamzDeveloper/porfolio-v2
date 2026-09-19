"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, ArchitectureCase } from "@/data/portfolio";
import { 
  Layers, 
  ExternalLink, 
  CheckCircle, 
  TrendingUp, 
  Cpu, 
  GitBranch, 
  ShieldCheck,
  Zap
} from "lucide-react";

export function CaseStudiesSection() {
  const { caseStudies } = PORTFOLIO_DATA;
  const [selectedCase, setSelectedCase] = useState<string>(caseStudies[0].id);

  const activeCase = caseStudies.find(c => c.id === selectedCase) || caseStudies[0];

  return (
    <section id="arquitectura" className="py-24 relative overflow-hidden bg-[#090a10]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono">
            <GitBranch className="w-3.5 h-3.5 text-cyan-400" />
            <span>Casos de Estudio de Ingeniería</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Arquitecturas Probadas en Producción
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Decisiones técnicas reales, desafíos de alta concurrencia y métricas de impacto para bancos, fintechs y productos propios.
          </p>
        </div>

        {/* Case Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-12">
          {caseStudies.map((item) => (
            <button
              key={item.id}
              onClick={() => setSelectedCase(item.id)}
              className={`px-5 py-2.5 rounded-xl font-mono text-xs transition-all duration-200 flex items-center gap-2 ${
                selectedCase === item.id
                  ? "bg-emerald-500 text-black font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  : "bg-white/[0.03] text-zinc-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.06]"
              }`}
            >
              <span>{item.client}</span>
              {item.highlight && (
                <span className={`w-1.5 h-1.5 rounded-full ${
                  selectedCase === item.id ? "bg-black" : "bg-emerald-400"
                }`} />
              )}
            </button>
          ))}
        </div>

        {/* Active Case Deep Dive Card */}
        <div className="rounded-3xl border border-white/[0.1] bg-[#0c0e18] p-6 sm:p-10 shadow-2xl space-y-8">
          
          {/* Top Metadata */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/[0.08] pb-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block">
                {activeCase.client} · {activeCase.period}
              </span>
              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {activeCase.title}
              </h3>
              <p className="text-xs font-mono text-zinc-400">
                Rol: <span className="text-zinc-200">{activeCase.role}</span>
              </p>
            </div>

            {/* Metrics Chips */}
            <div className="flex flex-wrap items-center gap-3">
              {activeCase.metrics.map((m, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 rounded-xl bg-white/[0.03] border border-white/[0.08] space-y-0.5"
                >
                  <p className="text-xs text-zinc-400 font-mono">{m.label}</p>
                  <p className="text-sm font-bold text-emerald-400 font-mono">{m.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Overview */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Resumen del Proyecto:
            </h4>
            <p className="text-base text-zinc-300 leading-relaxed">
              {activeCase.summary}
            </p>
          </div>

          {/* Challenge vs Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-6 rounded-2xl bg-red-950/10 border border-red-500/20 space-y-2">
              <h4 className="text-xs font-mono text-red-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-red-400" />
                El Desafío Técnico:
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {activeCase.challenge}
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-emerald-950/10 border border-emerald-500/20 space-y-2">
              <h4 className="text-xs font-mono text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                La Solución de Arquitectura:
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed">
                {activeCase.solution}
              </p>
            </div>
          </div>

          {/* Technologies Used */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
              Tecnologías y Patrones Aplicados:
            </h4>
            <div className="flex flex-wrap gap-2">
              {activeCase.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-200 flex items-center gap-1.5"
                >
                  <Cpu className="w-3 h-3 text-emerald-400" />
                  <span>{tech}</span>
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
