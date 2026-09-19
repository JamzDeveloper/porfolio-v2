"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import Link from "next/link";
import Image from "next/image";
import { 
  Calendar, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  Cpu, 
  Terminal as TerminalIcon,
  Copy,
  Check,
  Briefcase,
  Users,
  Building2,
  Zap,
  Code2,
  FileText,
  Download
} from "lucide-react";

export function Hero() {
  const { personal } = PORTFOLIO_DATA;
  const [viewMode, setViewMode] = useState<"executive" | "technical">("executive");
  const [copied, setCopied] = useState(false);

  const codeSnippet = `// AgenteCore: Realtime Voice & Context Pipeline
@Injectable()
export class AgentOrchestrationEngine {
  constructor(
    private readonly redisStream: RedisStreamService,
    private readonly vectorStore: QdrantVectorService,
    private readonly neuralVoice: RealtimeAudioEngine,
  ) {}

  async processStream(session: AgentSession, audioChunk: Buffer) {
    const vad = await this.detectVoiceActivity(audioChunk);
    if (!vad.isSpeech) return;

    // Sub-second multi-tenant contextual execution
    const context = await this.redisStream.getSlidingMemory(session.tenantId);
    const stream = await this.agentLLM.generateStream({
      history: context,
      tools: [NuriPointTelemetryTool, BankingCoreTool],
    });

    return this.neuralVoice.pipeToLowLatencySpeaker(stream);
  }
}`;

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[380px] bg-emerald-500/10 rounded-full blur-[150px] pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-1/4 w-[450px] h-[300px] bg-indigo-600/10 rounded-full blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Clear Value Proposition for Everyone */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Disponible para Proyectos, Consultoría &amp; Roles Senior</span>
            </div>

            {/* Name & Headline */}
            <div>
              <p className="text-sm font-mono text-zinc-400 tracking-wider uppercase mb-2">
                {personal.name} · Senior Software Engineer &amp; Tech Lead
              </p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.15]">
                Construyo Software <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400">
                  Escalable, Webs
                </span>{" "}
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                  &amp; Agentes de IA
                </span>
              </h1>
            </div>

            {/* Subtitle understandable by EVERY human */}
            <p className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl font-normal">
              Ayudo a <strong className="text-white">empresas, reclutadores y startups</strong> a hacer realidad productos digitales rápidos, seguros y diseñados para crecer. Con experiencia comprobada en equipos de ingeniería para plataformas de misión crítica como <strong className="text-emerald-400">Yape</strong> (vía Arkano), <strong className="text-white">Bancolombia</strong> (vía PRAGMA) y <strong className="text-white">KasNet</strong> (vía QDS).
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 pt-2">
              <Link
                href="/agendar"
                className="flex items-center justify-center gap-2.5 bg-emerald-500 text-black px-5 py-3.5 rounded-xl font-mono text-sm font-semibold hover:bg-emerald-400 transition-all shadow-[0_0_30px_rgba(16,185,129,0.35)] hover:shadow-[0_0_40px_rgba(16,185,129,0.55)] active:scale-95"
              >
                <Calendar className="w-4 h-4" />
                <span>Agendar Reunión</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="/cv-jose-montenegro.pdf"
                download="CV-Jose-Montenegro-Senior-Engineer.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl border border-emerald-500/40 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 font-mono text-sm font-medium transition-all shadow-sm"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Descargar CV (PDF)</span>
              </a>

              <Link
                href="/proyectos"
                className="flex items-center justify-center gap-2 px-4 py-3.5 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/20 text-zinc-300 hover:text-white font-mono text-sm font-medium transition-all"
              >
                <span>Proyectos</span>
              </Link>
            </div>

            {/* Metrics Grid */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
              {personal.metrics.map((m, idx) => (
                <div key={idx} className="space-y-1">
                  <p className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight">
                    {m.value}
                  </p>
                  <p className="text-xs text-zinc-400 font-medium">
                    {m.label}
                  </p>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: Dual-Mode Interactive Card (Executive vs Technical) */}
          <div className="lg:col-span-5">
            <div className="relative rounded-2xl overflow-hidden border border-white/[0.12] bg-[#0c0d14] shadow-2xl">
              
              {/* Tab Selector: Executive (Non-Tech/Recruiters) vs Technical (CTOs/Devs) */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#13151f] border-b border-white/[0.08]">
                <div className="flex items-center gap-1.5 p-1 rounded-lg bg-black/40 border border-white/[0.06]">
                  <button
                    onClick={() => setViewMode("executive")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-all cursor-pointer ${
                      viewMode === "executive"
                        ? "bg-emerald-500 text-black font-bold shadow-md"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    <span>Perfil Ejecutivo</span>
                  </button>
                  <button
                    onClick={() => setViewMode("technical")}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-mono transition-all cursor-pointer ${
                      viewMode === "technical"
                        ? "bg-indigo-600 text-white font-bold shadow-md"
                        : "text-zinc-400 hover:text-white"
                    }`}
                  >
                    <Code2 className="w-3.5 h-3.5" />
                    <span>Vista Código (Dev)</span>
                  </button>
                </div>

                {viewMode === "technical" && (
                  <button
                    onClick={copyCode}
                    className="flex items-center gap-1 text-[11px] font-mono text-zinc-400 hover:text-white px-2 py-1 rounded bg-white/[0.04] hover:bg-white/[0.08] transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copiado</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copiar</span>
                      </>
                    )}
                  </button>
                )}
              </div>

              {/* View 1: Executive Profile (Clear, friendly, perfect for recruiters & business owners) */}
              {viewMode === "executive" ? (
                <div className="p-6 space-y-5">
                  <div className="flex items-center gap-3.5 pb-4 border-b border-white/[0.06]">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden border border-emerald-500/40 shadow-[0_0_20px_rgba(16,185,129,0.25)] shrink-0 bg-[#161924]">
                      <Image
                        src="/profile.jpg"
                        alt={personal.name}
                        width={56}
                        height={56}
                        className="object-cover w-full h-full"
                        priority
                      />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-base font-bold text-white tracking-tight">
                          {personal.name}
                        </h4>
                        <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                      </div>
                      <p className="text-xs font-mono text-emerald-400">
                        Senior Backend &amp; AI Systems Engineer
                      </p>
                      <p className="text-[11px] font-mono text-zinc-400">
                        Trujillo, Perú · Remoto LatAm &amp; Global
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider block">
                      Enfoque de Negocio &amp; Resultados
                    </span>
                    <h3 className="text-lg font-bold text-white">
                      ¿Qué valor aporto a tu empresa o proyecto?
                    </h3>
                  </div>

                  <ul className="space-y-3 text-xs sm:text-sm text-zinc-300">
                    <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Desarrollo de Plataformas y Webs:</strong>
                        <span>Creo sitios rápidos y atractivos que generan ventas (como ZPR Roofing y EVOX 3D).</span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Sistemas que Nunca se Caen:</strong>
                        <span>Experiencia en equipos de ingeniería para Yape, Bancolombia y KasNet garantizando que las apps funcionen 24/7 sin caídas.</span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Automatización con Inteligencia Artificial:</strong>
                        <span>Agentes autónomos y asistentes con voz real que reducen costos de soporte y aceleran ventas.</span>
                      </div>
                    </li>

                    <li className="flex items-start gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-medium">Liderazgo &amp; Comunicación Clara:</strong>
                        <span>Docente premiado en Idat; explico la tecnología en lenguaje humano y guío equipos al éxito.</span>
                      </div>
                    </li>
                  </ul>

                  <div className="pt-2 flex items-center justify-between border-t border-white/[0.06] text-xs font-mono text-zinc-400">
                    <a
                      href="/cv-jose-montenegro.pdf"
                      download="CV-Jose-Montenegro-Senior-Engineer.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1.5 font-semibold"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>Descargar CV (PDF)</span>
                    </a>
                    <a
                      href={personal.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-zinc-400 hover:text-white flex items-center gap-1"
                    >
                      <span>LinkedIn →</span>
                    </a>
                  </div>
                </div>
              ) : (
                /* View 2: Technical Code Display (For CTOs and Engineers) */
                <div>
                  <div className="p-5 font-mono text-xs leading-relaxed overflow-x-auto text-zinc-300">
                    <pre className="text-zinc-400">
                      <span className="text-emerald-400 font-bold">// ⚡ Ultra-Low Latency AI Agent Engine</span>
                      <br />
                      <span className="text-indigo-400">@Injectable</span>()
                      <br />
                      <span className="text-blue-400">export class</span>{" "}
                      <span className="text-yellow-300 font-semibold">AgentOrchestrationEngine</span> {"{"}
                      <br />
                      {"  "}<span className="text-blue-400">constructor</span>(
                      <br />
                      {"    "}<span className="text-purple-300">private readonly</span> redis:{" "}
                      <span className="text-cyan-300">RedisStreams</span>,
                      <br />
                      {"    "}<span className="text-purple-300">private readonly</span> vectors:{" "}
                      <span className="text-cyan-300">QdrantVectorStore</span>,
                      <br />
                      {"    "}<span className="text-purple-300">private readonly</span> voice:{" "}
                      <span className="text-cyan-300">NeuralAudioSynthesizer</span>
                      <br />
                      {"  "}) {"{}"}
                      <br />
                      <br />
                      {"  "}<span className="text-blue-400">async</span>{" "}
                      <span className="text-green-400">processStream</span>(session, audioBuffer) {"{"}
                      <br />
                      {"    "}<span className="text-zinc-500">// Pipeline en tiempo real (&lt;800ms)</span>
                      <br />
                      {"    "}<span className="text-purple-300">const</span> vad ={" "}
                      <span className="text-blue-400">await</span> this.voice.detectVAD(audioBuffer);
                      <br />
                      {"    "}<span className="text-blue-400">if</span> (!vad.isSpeech) <span className="text-purple-300">return</span>;
                      <br />
                      <br />
                      {"    "}<span className="text-purple-300">const</span> memory ={" "}
                      <span className="text-blue-400">await</span> this.redis.getMemory(session.tenantId);
                      <br />
                      {"    "}<span className="text-purple-300">const</span> stream ={" "}
                      <span className="text-blue-400">await</span> this.agentLLM.orchestrate({"{"}
                      <br />
                      {"      "}context: memory,
                      <br />
                      {"      "}tools: [NuriPointTelemetry, BankCoreAPI],
                      <br />
                      {"    "}{"}"});
                      <br />
                      <br />
                      {"    "}<span className="text-purple-300">return</span> this.voice.streamToClient(stream);
                      <br />
                      {"  "}{"}"}
                      <br />
                      {"}"}
                    </pre>
                  </div>

                  <div className="px-4 py-2.5 bg-[#090a0f] border-t border-white/[0.08] flex items-center justify-between text-[11px] font-mono text-zinc-500">
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      NestJS 11 + Event Streaming
                    </span>
                    <span>Latency: ~680ms</span>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
