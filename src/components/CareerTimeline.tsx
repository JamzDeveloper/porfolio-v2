"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, CareerItem } from "@/data/portfolio";
import { 
  Briefcase, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  ExternalLink, 
  Building2, 
  GraduationCap, 
  Rocket, 
  Sparkles,
  Layers,
  Download
} from "lucide-react";

type FilterType = "all" | "consulting" | "direct" | "teaching";

export function CareerTimeline() {
  const { careerTimeline, personal } = PORTFOLIO_DATA;
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filteredTimeline = careerTimeline.filter((item) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "consulting") return item.isConsultingAssignment === true;
    if (activeFilter === "direct") return !item.isConsultingAssignment && item.engagementType !== "Docencia";
    if (activeFilter === "teaching") return item.engagementType === "Docencia";
    return true;
  });

  const filterButtons: { id: FilterType; label: string; count: number; icon: React.ElementType }[] = [
    { 
      id: "all", 
      label: "Todo el Historial", 
      count: careerTimeline.length, 
      icon: Layers 
    },
    { 
      id: "consulting", 
      label: "Consultoría & Clientes Top (Yape, Bancolombia, KasNet)", 
      count: careerTimeline.filter(i => i.isConsultingAssignment).length, 
      icon: Building2 
    },
    { 
      id: "direct", 
      label: "Contratación Directa & Startups", 
      count: careerTimeline.filter(i => !i.isConsultingAssignment && i.engagementType !== "Docencia").length, 
      icon: Rocket 
    },
    { 
      id: "teaching", 
      label: "Docencia & Capacitación", 
      count: careerTimeline.filter(i => i.engagementType === "Docencia").length, 
      icon: GraduationCap 
    },
  ];

  return (
    <section id="trayectoria" className="py-24 relative overflow-hidden bg-[#08090d] border-t border-white/[0.08]">
      {/* Subtle Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[500px] h-[300px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Briefcase className="w-3.5 h-3.5 text-emerald-400" />
            <span>Curriculum Vitae & Experiencia Profesional</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Trayectoria Profesional & Experiencia Real
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Más de <strong className="text-white">6 años de experiencia en ingeniería de software</strong> diseñando sistemas transaccionales para la banca, fintech de alta concurrencia, plataformas SaaS y docencia universitaria.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="/cv-jose-montenegro.pdf"
              download="CV-Jose-Montenegro-Senior-Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-500 text-black font-semibold text-xs font-mono transition-all hover:bg-emerald-400 shadow-[0_0_20px_rgba(16,185,129,0.3)] active:scale-95"
            >
              <Download className="w-4 h-4" />
              <span>Descargar CV Completo (PDF)</span>
            </a>

            <a
              href={personal.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] text-white border border-white/[0.1] text-xs font-mono transition-all"
            >
              <span>Ver Perfil LinkedIn</span>
              <ExternalLink className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-14">
          {filterButtons.map((btn) => {
            const Icon = btn.icon;
            const isActive = activeFilter === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => setActiveFilter(btn.id)}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                  isActive
                    ? "bg-emerald-500 text-black font-semibold shadow-[0_0_15px_rgba(16,185,129,0.3)] scale-[1.02]"
                    : "bg-[#0f111a] text-zinc-300 hover:text-white hover:bg-white/[0.06] border border-white/[0.08]"
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? "text-black" : "text-emerald-400"}`} />
                <span>{btn.label}</span>
                <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold ${
                  isActive ? "bg-black/20 text-black" : "bg-white/[0.08] text-zinc-400"
                }`}>
                  {btn.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Timeline List */}
        <div className="relative border-l border-white/[0.12] ml-4 sm:ml-8 space-y-10">
          {filteredTimeline.map((item, idx) => {
            return (
              <div key={idx} className="relative pl-6 sm:pl-10 group">
                
                {/* Timeline Node Dot */}
                <div className={`absolute -left-[9px] top-1.5 w-4 h-4 rounded-full border-2 transition-all duration-200 ${
                  item.current
                    ? "bg-emerald-500 border-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                    : "bg-[#161924] border-white/20 group-hover:border-emerald-400"
                }`} />

                <div className={`rounded-2xl border p-6 sm:p-7 space-y-4 hover:border-white/20 transition-all shadow-lg ${
                  item.isConsultingAssignment 
                    ? "bg-[#0b0e1a] border-emerald-500/20 hover:border-emerald-500/40" 
                    : item.current 
                    ? "bg-[#0c0e17] border-white/[0.12]" 
                    : "bg-[#0a0b12] border-white/[0.06]"
                }`}>
                  
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-white/[0.06] pb-4">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                        <h3 className="text-xl font-bold text-white font-mono tracking-tight">
                          {item.company}
                        </h3>

                        {/* Consulting Client vs Direct Badge */}
                        {item.isConsultingAssignment ? (
                          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-mono font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                            <span>{item.clientOrContext}</span>
                          </div>
                        ) : item.engagementType === "Startup Propia" ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-mono font-medium">
                            <Rocket className="w-3 h-3 text-purple-400" />
                            <span>{item.clientOrContext}</span>
                          </span>
                        ) : item.engagementType === "Docencia" ? (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono font-medium">
                            <GraduationCap className="w-3 h-3 text-blue-400" />
                            <span>{item.clientOrContext}</span>
                          </span>
                        ) : (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                            <span>{item.clientOrContext || "Contratación Directa"}</span>
                          </span>
                        )}

                        {item.current && (
                          <span className="text-[10px] font-mono font-bold bg-emerald-500 text-black px-2 py-0.5 rounded">
                            ACTUAL
                          </span>
                        )}
                      </div>

                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="font-semibold text-zinc-200">
                          {item.role}
                        </span>
                        <span className="text-zinc-500">•</span>
                        <span className="text-xs font-mono text-zinc-400">
                          {item.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-col sm:items-end text-xs font-mono text-zinc-400 space-y-1 shrink-0">
                      <span className="flex items-center gap-1 text-zinc-300 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-emerald-400" />
                        {item.period}
                      </span>
                      <span className="flex items-center gap-1 text-[11px] text-zinc-400">
                        <MapPin className="w-3 h-3 text-zinc-500" />
                        {item.location}
                      </span>
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 text-sm text-zinc-300 leading-relaxed">
                    {item.bullets.map((b, bIdx) => (
                      <li key={bIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech Chips */}
                  <div className="pt-2 flex flex-wrap gap-1.5">
                    {item.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-[11px] font-mono px-2.5 py-0.5 rounded-md bg-white/[0.03] text-zinc-300 border border-white/[0.06]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
