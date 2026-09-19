"use client";

import React from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { ShieldCheck } from "lucide-react";

export function TrustBar() {
  const { trustLogos } = PORTFOLIO_DATA;

  return (
    <section className="py-10 border-y border-white/[0.07] bg-white/[0.01]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-zinc-400 font-mono text-xs uppercase tracking-widest whitespace-nowrap">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>Sistemas & Clientes de Confianza:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center md:justify-end gap-x-8 gap-y-4">
            {trustLogos.map((item, idx) => (
              <div key={idx} className="flex flex-col items-center md:items-start group cursor-default">
                <span className="text-base sm:text-lg font-bold text-zinc-400 group-hover:text-white transition-colors font-mono tracking-tight">
                  {item.name}
                </span>
                <span className="text-[10px] text-zinc-500 font-mono">
                  {item.category}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
