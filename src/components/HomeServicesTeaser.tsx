"use client";

import React from "react";
import Link from "next/link";
import { Target, ArrowRight, Layers, Cpu, Cloud, Check } from "lucide-react";

export function HomeServicesTeaser() {
  const cards = [
    {
      icon: Layers,
      title: "Desarrollo Web & SaaS a Medida",
      badge: "Llave en Mano",
      desc: "Creación de plataformas web de alta conversión y paneles administrativos rápidos con Next.js, PostgreSQL y AWS S3. Diseñadas para cargar al instante, indexar en Google y convertir visitas en clientes.",
      points: ["Páginas dinámicas por slug", "Carga optimizada en AWS S3", "Diseño responsive moderno"]
    },
    {
      icon: Cpu,
      title: "Agentes de IA en Producción",
      badge: "Alta Especialización",
      desc: "Implementación de asistentes inteligentes y flujos de automatización con voz en tiempo real y conexión a bases de datos y WhatsApp.",
      points: ["Streaming de audio en <800ms", "Tool calling con tus APIs", "Aislamiento multi-empresa"]
    },
    {
      icon: Cloud,
      title: "Consultoría de Arquitectura & Cloud",
      badge: "Alta Concurrencia",
      desc: "Auditoría de sistemas lentos, migración a arquitecturas AWS Serverless y diseño de microservicios tolerantes a fallos para garantizar disponibilidad 24/7 sin caídas.",
      points: ["Desacoplamiento de monolitos", "Optimización de costos en AWS", "Consistencia con Kafka"]
    }
  ];

  return (
    <section className="py-20 bg-[#08090d] border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <Target className="w-3.5 h-3.5" />
              <span>Servicios &amp; Soluciones</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              ¿Cómo puedo ayudarte en tu proyecto?
            </h2>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Desde crear tu producto digital desde cero hasta resolver cuellos de botella de infraestructura.
            </p>
          </div>

          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-all shrink-0 self-start sm:self-auto"
          >
            <span>Ver detalle completo de servicios</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {cards.map((c, idx) => {
            const Icon = c.icon;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-white/[0.08] bg-[#0c0e17] p-7 flex flex-col justify-between hover:border-emerald-500/30 hover:bg-[#0f111c] transition-all duration-300 shadow-xl group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.04] text-zinc-400 border border-white/[0.06]">
                      {c.badge}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {c.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                    {c.desc}
                  </p>

                  <ul className="space-y-1.5 pt-2 border-t border-white/[0.06]">
                    {c.points.map((p, pIdx) => (
                      <li key={pIdx} className="flex items-center gap-2 text-xs text-zinc-400">
                        <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-5 mt-5 border-t border-white/[0.06] flex items-center justify-between">
                  <Link href="/servicios" className="text-xs font-mono text-zinc-400 hover:text-white">
                    Ver alcance →
                  </Link>
                  <Link
                    href="/agendar"
                    className="text-xs font-mono text-emerald-400 hover:underline"
                  >
                    Cotizar
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
