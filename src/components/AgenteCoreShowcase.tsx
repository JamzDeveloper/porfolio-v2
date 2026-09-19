"use client";

import React, { useState } from "react";
import { 
  Cpu, 
  Mic, 
  Database, 
  Wrench, 
  Volume2, 
  Zap, 
  Activity, 
  CheckCircle2, 
  ArrowRight,
  Radio,
  Sparkles
} from "lucide-react";

export function AgenteCoreShowcase() {
  const [activeStage, setActiveStage] = useState(1);

  const stages = [
    {
      id: 1,
      title: "1. Ingestión & VAD en Streaming",
      badge: "Entrada de Audio",
      icon: Mic,
      description: "Captura continua de audio vía WebRTC o WebSocket con detección de actividad de voz (VAD) en el borde para filtrar silencios y reducir latencia.",
      tech: ["WebRTC", "Silero VAD", "Streaming Whisper", "Audio Chunks"],
      highlight: "Tiempo de transcripción parcial < 180ms"
    },
    {
      id: 2,
      title: "2. Orquestador AgenteCore & Memoria",
      badge: "Núcleo Distribuido",
      icon: Database,
      description: "Motor en NestJS 11 con aislamiento multi-tenant. Recupera la memoria a corto plazo en Redis Streams y embeddings contextuales en Qdrant Vector DB.",
      tech: ["NestJS 11", "Redis Streams", "Qdrant Vector DB", "Multi-Tenancy"],
      highlight: "Aislamiento total por tenant y contexto en < 60ms"
    },
    {
      id: 3,
      title: "3. Ejecución de Herramientas Dinámicas",
      badge: "Tool / Function Calling",
      icon: Wrench,
      description: "El agente evalúa llamadas a APIs externas en tiempo real: telemetría offline de NuriPoint, estado de senderos, rescate y transacciones seguras.",
      tech: ["Gemini 2.5 Pro", "OpenAI Tool Calling", "NuriPoint Telemetry", "Async Executors"],
      highlight: "Ejecución paralela de tools con validación de esquemas Zod"
    },
    {
      id: 4,
      title: "4. Síntesis Neuronal & Streaming de Voz",
      badge: "Salida de Baja Latencia",
      icon: Volume2,
      description: "Generación de voz neural con entrega progresiva en chunks de audio de baja latencia al cliente, garantizando una conversación humana fluida.",
      tech: ["Neural TTS (estilo ElevenLabs)", "PCM/Opus Streaming", "Audio Buffer Queue"],
      highlight: "Time to First Audio (TTFA): < 750ms global"
    }
  ];

  return (
    <section id="agentecore" className="py-24 relative overflow-hidden bg-[#0a0b12] border-b border-white/[0.08]">
      {/* Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-400 text-xs font-mono">
            <Radio className="w-3.5 h-3.5 animate-pulse text-indigo-400" />
            <span>Deep Dive de Arquitectura Propietaria</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            AgenteCore: Motor de Agentes de IA en Tiempo Real
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Una arquitectura de grado de producción inspirada en los pipelines de ultra baja latencia de{" "}
            <span className="text-white font-semibold">ElevenLabs</span> y{" "}
            <span className="text-white font-semibold">Suno</span>, optimizada para orquestación conversacional,
            telemetría outdoor en <span className="text-emerald-400 font-semibold">NuriPoint</span> y entornos multi-inquilino.
          </p>

          {/* Simple explanation for non-tech users */}
          <div className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-500/20 max-w-2xl mx-auto text-left flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-indigo-400 shrink-0 mt-0.5" />
            <p className="text-xs sm:text-sm text-indigo-200 leading-relaxed">
              <strong className="text-white font-semibold">En palabras sencillas:</strong> No es un chatbot básico de texto. Es un asistente inteligente con voz humana natural que entiende instrucciones por audio, consulta datos en tiempo real y ejecuta acciones en menos de 1 segundo.
            </p>
          </div>
        </div>

        {/* Interactive Architecture Flow Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Stage Selector (Left) */}
          <div className="lg:col-span-5 space-y-3">
            <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-2">
              Flujo del Pipeline (Haz clic para inspeccionar):
            </p>
            {stages.map((stage) => {
              const Icon = stage.icon;
              const isSelected = activeStage === stage.id;
              return (
                <button
                  key={stage.id}
                  onClick={() => setActiveStage(stage.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all duration-200 flex items-start gap-4 ${
                    isSelected
                      ? "bg-indigo-950/40 border-indigo-500/50 shadow-[0_0_20px_rgba(99,102,241,0.2)]"
                      : "bg-[#0e1019]/60 border-white/[0.06] hover:bg-white/[0.03] hover:border-white/10"
                  }`}
                >
                  <div className={`p-2.5 rounded-lg shrink-0 ${
                    isSelected ? "bg-indigo-500 text-white shadow-lg" : "bg-white/[0.05] text-zinc-400"
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center justify-between">
                      <span className={`text-xs font-mono ${isSelected ? "text-indigo-300" : "text-zinc-500"}`}>
                        {stage.badge}
                      </span>
                      {isSelected && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                          Activo
                        </span>
                      )}
                    </div>
                    <p className={`text-sm font-bold ${isSelected ? "text-white" : "text-zinc-300"}`}>
                      {stage.title}
                    </p>
                    <p className="text-xs text-zinc-400 line-clamp-2">
                      {stage.description}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep-Dive Stage Inspector (Right) */}
          <div className="lg:col-span-7">
            {(() => {
              const current = stages.find(s => s.id === activeStage) || stages[0];
              const CurrentIcon = current.icon;

              return (
                <div className="rounded-2xl border border-white/[0.12] bg-[#0c0d16] p-6 sm:p-8 space-y-6 shadow-2xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-10 pointer-events-none">
                    <CurrentIcon className="w-48 h-48 text-indigo-400" />
                  </div>

                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                        <CurrentIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white font-mono">
                          {current.title}
                        </h3>
                        <span className="text-xs text-indigo-400 font-mono">
                          Etapa {current.id} de 4 · Pipeline AgenteCore
                        </span>
                      </div>
                    </div>
                    <span className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-mono border border-emerald-500/20">
                      <Activity className="w-3 h-3" />
                      Live in NuriPoint
                    </span>
                  </div>

                  <div className="space-y-4">
                    <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                      {current.description}
                    </p>

                    <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2">
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                        Métrica Clave de Rendimiento:
                      </span>
                      <p className="text-sm font-bold text-emerald-400 font-mono flex items-center gap-2">
                        <Zap className="w-4 h-4 text-emerald-400" />
                        {current.highlight}
                      </p>
                    </div>

                    <div>
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block mb-2">
                        Tecnologías & Componentes del Stack:
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {current.tech.map((t, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 rounded-md bg-white/[0.04] border border-white/[0.08] text-xs font-mono text-zinc-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Architecture comparison box */}
                  <div className="pt-4 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-3 rounded-lg bg-red-950/20 border border-red-500/20 text-zinc-400 space-y-1">
                      <span className="text-red-400 font-semibold block">Chatbot Tradicional / Wrapper:</span>
                      <p>Sincrónico, latencia &gt;3s, sin streaming de voz, pérdida de contexto en multi-tenancy, propenso a alucinaciones.</p>
                    </div>
                    <div className="p-3 rounded-lg bg-emerald-950/20 border border-emerald-500/20 text-zinc-300 space-y-1">
                      <span className="text-emerald-400 font-semibold block">AgenteCore Pipeline:</span>
                      <p>Baja latencia &lt;800ms, streaming de audio neural, memoria transaccional en Redis y ejecución determinista de herramientas.</p>
                    </div>
                  </div>

                </div>
              );
            })()}
          </div>

        </div>

      </div>
    </section>
  );
}
