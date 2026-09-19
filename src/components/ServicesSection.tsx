"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { 
  Check, 
  ArrowRight, 
  Calendar, 
  Layers, 
  Cpu, 
  Cloud, 
  Users, 
  Clock, 
  Target 
} from "lucide-react";

export function ServicesSection() {
  const { services } = PORTFOLIO_DATA;

  const iconMap: Record<string, React.ElementType> = {
    "architecture-audit": Layers,
    "ai-agents": Cpu,
    "cloud-serverless": Cloud,
    "mentorship": Users,
  };

  return (
    <section id="servicios" className="py-24 relative overflow-hidden bg-[#08090d]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Target className="w-3.5 h-3.5 text-emerald-400" />
            <span>Servicios de Consultoría &amp; Desarrollo a Medida</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Soluciones Técnicas Claras, Confiables y Sin Dolores de Cabeza
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Ya sea que necesites crear una plataforma web desde cero, automatizar tu atención con Inteligencia Artificial o asegurar que tu sistema soporte millones de clientes sin caídas.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => {
            const Icon = iconMap[service.id] || Layers;
            return (
              <div
                key={service.id}
                className="rounded-2xl border border-white/[0.08] bg-[#0d0e17] p-8 flex flex-col justify-between hover:border-emerald-500/40 hover:bg-[#10121d] transition-all duration-300 shadow-xl group relative overflow-hidden"
              >
                <div className="space-y-6">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono px-3 py-1 rounded-full bg-white/[0.05] text-zinc-400 border border-white/[0.08]">
                      {service.badge}
                    </span>
                  </div>

                  {/* Titles */}
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs font-mono text-emerald-400">
                      {service.tagline}
                    </p>
                    <p className="text-sm text-zinc-300 leading-relaxed pt-1">
                      {service.description}
                    </p>
                  </div>

                  {/* Deliverables */}
                  <div className="space-y-2.5 pt-2">
                    <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                      Entregables & Alcance:
                    </span>
                    <ul className="space-y-2">
                      {service.deliverables.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs text-zinc-300">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Audience & Duration */}
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-zinc-400" />
                      <span>{service.duration}</span>
                    </div>
                    <span className="text-[11px] text-zinc-400">{service.audience}</span>
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="pt-6 mt-6 border-t border-white/[0.08]">
                  <a
                    href="#agendar"
                    className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/[0.04] hover:bg-emerald-500 hover:text-black text-white font-mono text-xs font-semibold border border-white/[0.08] hover:border-emerald-500 transition-all duration-200"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Consultar Disponibilidad</span>
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
