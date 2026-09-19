"use client";

import React from "react";
import Link from "next/link";
import { 
  Sparkles, 
  ArrowRight, 
  CheckCircle2, 
  MessageSquare, 
  ShieldCheck, 
  TrendingUp, 
  FileText, 
  Calendar 
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function HomeAboutTeaser() {
  const { personal } = PORTFOLIO_DATA;

  const workPrinciples = [
    {
      icon: MessageSquare,
      title: "Cero Humo & Comunicación Directa",
      desc: "Hablo en tu mismo idioma sin jerga innecesaria. Si una solución simple y económica resuelve tu problema mejor que una arquitectura compleja, te lo diré con total honestidad."
    },
    {
      icon: ShieldCheck,
      title: "Sistemas para Dormir Tranquilo",
      desc: "Aplico estándares de ingeniería estricta (pruebas automatizadas, observabilidad y resiliencia) para que tu plataforma opere 24/7 sin caídas inesperadas ni pérdidas de datos."
    },
    {
      icon: TrendingUp,
      title: "Diseñado para Crecer sin Rehacer",
      desc: "Construyo código ordenado, desacoplado y documentado pensando en el futuro. Tu software escalará de 100 a cientos de miles de usuarios sin colapsar."
    }
  ];

  return (
    <section className="py-20 bg-[#090a11] border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/[0.08] bg-[#0c0d16] p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Column: Human Value Proposition & Principles */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                <Sparkles className="w-3.5 h-3.5" />
                <span>¿Cómo trabajo con mis clientes?</span>
              </div>

              <div className="space-y-3">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug">
                  Ingeniería de Software con <br className="hidden sm:inline" />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-300">
                    Sentido de Negocio
                  </span>{" "}
                  y Trato Directo
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Muchos desarrolladores se enfocan solo en el código. Mi prioridad es entender la meta de tu negocio: reducir costos operativos, aumentar tus conversiones o garantizar que tus usuarios nunca experimenten una pantalla de error.
                </p>
              </div>

              {/* 3 Work Principles */}
              <div className="space-y-3.5 pt-1">
                {workPrinciples.map((item, idx) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={idx} 
                      className="p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] flex items-start gap-3.5 hover:border-emerald-500/20 hover:bg-white/[0.03] transition-all"
                    >
                      <div className="w-8 h-8 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-sm font-bold text-white tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-xs text-zinc-400 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="pt-2">
                <Link
                  href="/sobre-mi"
                  className="inline-flex items-center gap-2 text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors font-semibold group"
                >
                  <span>Conoce mi historia completa, raíces en Trujillo y pasiones personales</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Quote & Quick Action Card */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-7 rounded-2xl bg-[#10121e] border border-white/[0.08] space-y-5 shadow-xl">
                <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
                  <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
                    Filosofía Técnica
                  </span>
                  <span className="text-[11px] font-mono text-zinc-500">
                    José Montenegro
                  </span>
                </div>
                
                <blockquote className="text-sm sm:text-base text-zinc-200 leading-relaxed italic border-l-2 border-emerald-500/50 pl-4 my-2">
                  "El mejor software no es el que usa la tecnología más de moda, sino el que resuelve el problema real del usuario y nunca se cae."
                </blockquote>

                <div className="space-y-2.5 pt-2">
                  <Link
                    href="/sobre-mi#trayectoria"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-xs font-mono text-zinc-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-emerald-400" />
                      <span>Ver Trayectoria &amp; Experiencia (11 empresas)</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-zinc-500" />
                  </Link>

                  <a
                    href="/cv-jose-montenegro.pdf"
                    download="CV-Jose-Montenegro-Senior-Engineer.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-3 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-xs font-mono text-zinc-300 hover:text-white transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <FileText className="w-4 h-4 text-amber-400" />
                      <span>Descargar CV Oficial en PDF</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-zinc-500" />
                  </a>

                  <Link
                    href="/agendar"
                    className="flex items-center justify-between p-3 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 text-xs font-mono text-emerald-300 font-semibold transition-all group"
                  >
                    <div className="flex items-center gap-2.5">
                      <Calendar className="w-4 h-4 text-emerald-400" />
                      <span>Agendar Conversación Técnica</span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-emerald-400" />
                  </Link>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex items-center justify-between text-xs font-mono text-zinc-400">
                <span>📍 Trujillo, Perú · Remoto LatAm &amp; Global</span>
                <span className="text-emerald-400">● Disponible</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
