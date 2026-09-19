"use client";

import React from "react";
import Link from "next/link";
import { Network, ArrowRight, Lightbulb, ShieldCheck, Zap } from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function HomeBlueprintsTeaser() {
  return (
    <section className="py-20 bg-[#0a0b12] border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="rounded-3xl border border-white/[0.08] bg-[#0c0d16] p-8 sm:p-12 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Explanation */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
                <Network className="w-3.5 h-3.5" />
                <span>System Design &amp; Blueprints</span>
              </div>

              <div className="space-y-2">
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  Arquitecturas para Escalar sin Caídas
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Diseño de sistemas distribuidos, microservicios orientados a eventos y pipelines de Inteligencia Artificial en tiempo real.
                </p>
              </div>

              {/* Simple non-tech callout */}
              <div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.08] flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                  <strong className="text-white">Los planos del rascacielos:</strong> Diseñamos cómo se conectan las bases de datos y servidores para que tu aplicación soporte millones de visitas sin volverse lenta ni caerse.
                </p>
              </div>

              <div className="space-y-2 text-xs font-mono text-zinc-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  <span>Transactional Outbox &amp; Apache Kafka (Consistencia Eventual)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-indigo-400" />
                  <span>Arquitectura Hexagonal &amp; DDD en NestJS (Código Desacoplado)</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>AgenteCore: Streaming de Voz &amp; Memoria en Redis (&lt;750ms TTFA)</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/blueprints"
                  className="inline-flex items-center gap-2 bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(99,102,241,0.3)]"
                >
                  <span>Explorar diagramas Draw.io interactivos</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Right: Visual Blueprint Preview */}
            <div className="lg:col-span-6">
              <Link href="/blueprints" className="block group">
                <div className="relative rounded-2xl border border-white/[0.1] bg-[#08090e] p-3 overflow-hidden shadow-2xl group-hover:border-indigo-500/40 transition-all">
                  <img
                    src="/blueprints/blueprint-event-driven-kafka.svg"
                    alt="System Design Blueprint Kafka"
                    className="w-full h-auto rounded-lg group-hover:scale-[1.02] transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="px-4 py-2 rounded-xl bg-black/85 backdrop-blur-md text-xs font-mono text-white border border-white/20 shadow-2xl">
                      Clic para ver en pantalla completa con zoom →
                    </span>
                  </div>
                </div>
              </Link>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
