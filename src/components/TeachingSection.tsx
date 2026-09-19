"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA, SpeakerEvent } from "@/data/portfolio";
import { 
  Award, 
  GraduationCap, 
  Users, 
  BookOpen, 
  Star, 
  CheckCircle, 
  Mic, 
  Calendar, 
  MapPin, 
  Maximize2, 
  X,
  Sparkles
} from "lucide-react";

export function TeachingSection() {
  const { speakerEvents } = PORTFOLIO_DATA;
  const [selectedPhoto, setSelectedPhoto] = useState<SpeakerEvent | null>(null);

  return (
    <section id="docencia" className="py-24 relative overflow-hidden bg-[#0a0b12] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/30 text-yellow-400 text-xs font-mono">
            <Mic className="w-3.5 h-3.5 text-yellow-400" />
            <span>Docencia, Speaker &amp; Liderazgo Técnico</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Formando a la Próxima Generación de Ingenieros
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            La mejor forma de dominar la arquitectura de software es enseñándola. Más de 3 años como docente titular formando a más de 1,500 estudiantes en backend profesional y ponente en congresos académicos.
          </p>
        </div>

        {/* Teaching Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          
          {/* Card 1: Idat Instructor */}
          <div className="rounded-2xl border border-yellow-500/20 bg-[#0e1019] p-7 space-y-5 shadow-xl relative overflow-hidden">
            <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center text-yellow-400">
              <GraduationCap className="w-6 h-6" />
            </div>
            
            <div className="space-y-1">
              <span className="text-xs font-mono text-yellow-400 uppercase tracking-wider block">
                Educación Superior Tecnológica
              </span>
              <h3 className="text-xl font-bold text-white">
                Docente Titular en Idat
              </h3>
              <p className="text-xs font-mono text-zinc-400">
                Mayo 2023 - Presente · 3+ Años
              </p>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              Cátedras de Backend con Node.js, NestJS, SQL Server y PostgreSQL. Enfocado en Clean Code, diseño de APIs robustas y estándares de la industria.
            </p>

            <div className="p-3 rounded-xl bg-yellow-500/10 border border-yellow-500/20 flex items-center gap-2 text-xs font-mono text-yellow-300">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 shrink-0" />
              <span>Reconocido como "Docente Destacado" por alta calificación estudiantil.</span>
            </div>
          </div>

          {/* Card 2: Cursos & Especializaciones */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0c0d16] p-7 space-y-5 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <BookOpen className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
                Plan de Estudios
              </span>
              <h3 className="text-xl font-bold text-white">
                Materias Impartidas
              </h3>
              <p className="text-xs font-mono text-zinc-400">
                Cursos Teórico-Prácticos
              </p>
            </div>

            <ul className="space-y-2 text-xs font-mono text-zinc-300">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Desarrollo de Servicios Web Backend</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Bases de Datos Relacionales (SQL Server / PG)</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>NestJS: Interceptors, Filters, Guards &amp; Pipes</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400" />
                <span>Arquitectura Hexagonal &amp; Patrón Repositorio</span>
              </li>
            </ul>
          </div>

          {/* Card 3: Formación Universitaria UNT */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0c0d16] p-7 space-y-5 shadow-xl">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
              <Users className="w-6 h-6" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider block">
                Alma Máter &amp; Comunidad
              </span>
              <h3 className="text-xl font-bold text-white">
                Universidad Nacional de Trujillo
              </h3>
              <p className="text-xs font-mono text-zinc-400">
                Informática · 2019 - 2025
              </p>
            </div>

            <p className="text-sm text-zinc-300 leading-relaxed">
              Ponente en congresos académicos (Expotive UNT) y ganador del primer puesto en desarrollo de software. Divulgador activo de buenas prácticas backend.
            </p>

            <div className="pt-2">
              <a
                href={PORTFOLIO_DATA.personal.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                <span>Ver publicaciones técnicas en LinkedIn →</span>
              </a>
            </div>
          </div>

        </div>

        {/* Speaker & Conferences Gallery */}
        <div className="space-y-8 pt-6 border-t border-white/[0.08]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono text-amber-400 uppercase tracking-widest block">
                Social Proof &amp; Oratoria
              </span>
              <h3 className="text-2xl font-bold text-white font-mono">
                Conferencias, Ponencias &amp; Masterclasses
              </h3>
            </div>
            <span className="text-xs font-mono text-zinc-400 bg-white/[0.04] px-3 py-1.5 rounded-lg border border-white/[0.06] self-start sm:self-auto">
              Galería de Eventos &amp; Auditorios
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {speakerEvents.map((evt) => (
              <div
                key={evt.id}
                className="rounded-2xl border border-white/[0.08] bg-[#0c0e17] overflow-hidden group hover:border-amber-500/40 transition-all duration-300 shadow-xl flex flex-col justify-between"
              >
                {/* Visual Image Container */}
                <div 
                  onClick={() => setSelectedPhoto(evt)}
                  className="relative aspect-[16/10] overflow-hidden bg-[#121422] cursor-pointer group/photo"
                >
                  <img
                    src={evt.image}
                    alt={evt.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover/photo:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c0e17] via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-amber-400 border border-amber-500/30">
                      {evt.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-3 right-3 opacity-0 group-hover/photo:opacity-100 transition-opacity">
                    <span className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-black/80 text-white border border-white/20 flex items-center gap-1">
                      <Maximize2 className="w-3 h-3 text-amber-400" />
                      Ver Detalles
                    </span>
                  </div>
                </div>

                {/* Event Description */}
                <div className="p-5 space-y-3 flex-grow flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-amber-400" />
                        {evt.date}
                      </span>
                      <span className="text-zinc-500">{evt.audience}</span>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-amber-400 transition-colors">
                      {evt.title}
                    </h4>

                    <p className="text-xs text-zinc-400 flex items-center gap-1 font-mono">
                      <MapPin className="w-3 h-3 text-zinc-500 shrink-0" />
                      <span>{evt.location}</span>
                    </p>

                    <p className="text-xs text-zinc-300 leading-relaxed pt-1">
                      {evt.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                    <span className="text-[11px] font-mono text-zinc-500">
                      {evt.type}
                    </span>
                    <button
                      onClick={() => setSelectedPhoto(evt)}
                      className="text-xs font-mono text-amber-400 hover:text-amber-300 transition-colors cursor-pointer"
                    >
                      Ampliar foto →
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Lightbox Modal for Speaker Photos */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md p-4 sm:p-8 flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          <div 
            className="relative max-w-4xl w-full bg-[#0d0f18] rounded-2xl border border-white/20 overflow-hidden flex flex-col shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="px-6 py-4 bg-[#121422] border-b border-white/10 flex items-center justify-between">
              <div>
                <h3 className="text-sm sm:text-base font-mono font-bold text-white">
                  {selectedPhoto.title}
                </h3>
                <span className="text-xs text-amber-400 font-mono">
                  {selectedPhoto.eventName} · {selectedPhoto.date}
                </span>
              </div>
              <button
                onClick={() => setSelectedPhoto(null)}
                className="p-1.5 rounded-lg bg-white/10 text-zinc-400 hover:text-white transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 bg-[#08090e] space-y-4">
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-auto rounded-lg border border-white/10"
              />
              <p className="text-sm text-zinc-300">
                {selectedPhoto.description}
              </p>
              <div className="flex items-center gap-4 text-xs font-mono text-zinc-400">
                <span>📍 {selectedPhoto.location}</span>
                <span>👥 {selectedPhoto.audience}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
