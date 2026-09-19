"use client";

import React from "react";
import Link from "next/link";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { FolderKanban, ExternalLink, ArrowRight, Lock, CheckCircle2, Building } from "lucide-react";

export function HomeProjectsTeaser() {
  const { clientProjects } = PORTFOLIO_DATA;
  // Pick top 3 for the homepage
  const featured = clientProjects.slice(0, 3);

  return (
    <section className="py-20 bg-[#08090e] border-t border-white/[0.08] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <FolderKanban className="w-3.5 h-3.5" />
              <span>Trabajo en Producción</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Proyectos Destacados de Clientes
            </h2>
            <p className="text-zinc-300 text-sm leading-relaxed">
              Software real desplegado para empresas en EE.UU. y Latinoamérica con interfaces rápidas y arquitecturas robustas.
            </p>
          </div>

          <Link
            href="/proyectos"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-all shrink-0 self-start sm:self-auto"
          >
            <span>Ver los {clientProjects.length} proyectos completos</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3 Featured Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featured.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl border border-white/[0.08] bg-[#0c0e17] overflow-hidden flex flex-col justify-between hover:border-emerald-500/30 hover:bg-[#0f111c] transition-all duration-300 shadow-xl group"
            >
              {/* Browser mockup header */}
              <div className="border-b border-white/[0.08] bg-[#11131e] px-3.5 py-2 flex items-center justify-between">
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-red-500/70" />
                  <span className="w-2 h-2 rounded-full bg-yellow-500/70" />
                  <span className="w-2 h-2 rounded-full bg-green-500/70" />
                </div>
                <div className="flex items-center gap-1 text-[10px] font-mono text-zinc-400 truncate max-w-[170px]">
                  <Lock className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                  <span className="truncate">{project.client}</span>
                </div>
                <div className="w-2" />
              </div>

              {/* Screenshot Preview */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#08090e]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e17] via-transparent to-transparent opacity-70" />
                <span className="absolute bottom-2.5 left-2.5 text-[10px] font-mono px-2 py-0.5 rounded bg-black/70 backdrop-blur-md text-emerald-400 border border-emerald-500/30">
                  {project.badge}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
                <div className="space-y-1.5">
                  <h3 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                    <Building className="w-3 h-3 text-emerald-400" />
                    <span>{project.client}</span>
                  </p>
                  <p className="text-xs text-zinc-300 leading-relaxed line-clamp-2 pt-1">
                    {project.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono">
                  {project.liveUrl ? (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:underline flex items-center gap-1"
                    >
                      <span>Visitar web</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  ) : (
                    <span className="text-zinc-500">{project.category}</span>
                  )}
                  <Link href="/proyectos" className="text-zinc-400 hover:text-white">
                    Detalles →
                  </Link>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
