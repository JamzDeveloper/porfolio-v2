import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { TeachingSection } from "@/components/TeachingSection";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { 
  Mic, 
  Download, 
  Calendar, 
  MapPin, 
  Users, 
  FileText, 
  ExternalLink,
  Sparkles,
  BookOpen,
  Award,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

export const metadata: Metadata = {
  title: "Speaker, Conferencias & Materiales | José Montenegro",
  description: "Descarga diapositivas, código de ejemplo y materiales de las ponencias y conferencias de José Montenegro sobre Arquitectura de Software, NestJS y Agentes de IA.",
  openGraph: {
    title: "Speaker & Docencia | José Montenegro",
    description: "Diapositivas de conferencias, talleres y capacitaciones corporativas en arquitectura backend.",
    url: "https://jamzdeveloper.com/speaker",
  },
};

export default function SpeakerPage() {
  const { speakerEvents, personal } = PORTFOLIO_DATA;

  const trainingTopics = [
    {
      title: "Bootcamp NestJS Avanzado & Arquitectura Hexagonal",
      audience: "Equipos de desarrollo backend (Mid a Senior)",
      duration: "16 a 24 horas teórico-prácticas",
      topics: [
        "Desacoplamiento de puertos y adaptadores en NestJS 11",
        "Implementación estricta de Domain-Driven Design (DDD)",
        "Estrategia de pruebas automatizadas (TDD con Jest)",
        "Manejo de excepciones con Custom Filters e Interceptors"
      ]
    },
    {
      title: "Microservicios Orientados a Eventos con Apache Kafka",
      audience: "Líderes técnicos, ingenieros cloud y backend",
      duration: "12 a 16 horas con laboratorio en vivo",
      topics: [
        "Patrón Transactional Outbox y resolución del problema dual-write",
        "Diseño de tópicos, particiones y claves de ordenamiento",
        "Garantía de idempotencia y Dead Letter Queues (DLQ)",
        "Observabilidad distribuida y métricas de latencia"
      ]
    },
    {
      title: "Ingeniería de Agentes de IA con Streaming de Voz",
      audience: "Startups, empresas de innovación y desarrolladores",
      duration: "12 horas intensivas",
      topics: [
        "Arquitectura de AgenteCore y pipelines en tiempo real (<800ms)",
        "Detección de voz (Silero VAD) y streaming de transcripción",
        "Memoria contextual en Redis Streams y bases vectoriales (Qdrant)",
        "Function Calling determinista y generación progresiva de voz"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 flex flex-col bg-grid-pattern relative selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <main className="flex-grow pt-24">
        
        {/* Speaker Hero */}
        <section className="py-16 md:py-20 relative overflow-hidden border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center space-y-5">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-mono">
                <Mic className="w-3.5 h-3.5" />
                <span>Conferencias, Ponencias &amp; Capacitación</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
                Compartiendo Ingeniería de Alto Nivel con la Comunidad
              </h1>

              <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
                Docente titular galardonado en Idat y conferencista en congresos universitarios. Aquí encuentras las diapositivas de mis charlas, repositorios con plantillas de código y opciones de capacitación para empresas.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
                <a
                  href="#materiales"
                  className="bg-amber-500 hover:bg-amber-400 text-black px-6 py-3 rounded-xl font-mono text-xs font-bold transition-all shadow-[0_0_20px_rgba(245,158,11,0.3)] flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>Ver Diapositivas &amp; Materiales</span>
                </a>

                <a
                  href="#talleres"
                  className="bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] text-white px-6 py-3 rounded-xl font-mono text-xs font-medium transition-all"
                >
                  <span>Talleres In-Company</span>
                </a>
              </div>

              {/* Speaker Stats */}
              <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/[0.08] max-w-lg mx-auto">
                <div>
                  <p className="text-2xl font-bold text-white font-mono">+1,500</p>
                  <p className="text-[11px] text-zinc-400">Alumnos Formados</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-amber-400 font-mono">Top 1%</p>
                  <p className="text-[11px] text-zinc-400">Docente Destacado Idat</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-emerald-400 font-mono">1er Puesto</p>
                  <p className="text-[11px] text-zinc-400">Expotive UNT Software</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Section: Materiales & Diapositivas (Traffic Magnet) */}
        <section id="materiales" className="py-20 bg-[#08090e] border-b border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono">
                <Download className="w-3.5 h-3.5" />
                <span>Descarga Libre de Recursos</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Diapositivas &amp; Código de Mis Conferencias
              </h2>
              <p className="text-sm text-zinc-300">
                ¿Asististe a una de mis charlas o clases? Aquí tienes el material oficial para que puedas revisar los diagramas y practicar el código en tu máquina.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {speakerEvents.map((evt) => (
                <div
                  key={evt.id}
                  className="rounded-2xl border border-white/[0.08] bg-[#0c0e17] p-6 space-y-5 flex flex-col justify-between hover:border-amber-500/30 transition-all shadow-xl"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs font-mono text-zinc-400">
                      <span>{evt.date}</span>
                      <span className="text-amber-400 font-medium">{evt.badge}</span>
                    </div>

                    <h3 className="text-lg font-bold text-white tracking-tight">
                      {evt.title}
                    </h3>

                    <p className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-emerald-400 shrink-0" />
                      <span>{evt.location}</span>
                    </p>

                    <p className="text-xs text-zinc-300 leading-relaxed pt-1">
                      {evt.materialsNote || evt.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06] space-y-2">
                    <a
                      href={evt.slidesUrl || personal.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-amber-500/10 hover:bg-amber-500 hover:text-black text-amber-300 border border-amber-500/30 text-xs font-mono font-semibold transition-all"
                    >
                      <FileText className="w-3.5 h-3.5" />
                      <span>Ver Diapositivas (Slides)</span>
                    </a>

                    <a
                      href={evt.repoUrl || personal.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.08] text-zinc-300 hover:text-white border border-white/[0.06] text-xs font-mono transition-colors"
                    >
                      <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
                      </svg>
                      <span>Repositorio de Código</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Visual Gallery of Auditoriums & Photos */}
        <TeachingSection />

        {/* Section: Capacitación Corporativa In-Company */}
        <section id="talleres" className="py-20 bg-[#090a11] border-t border-white/[0.08]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-mono">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Para Equipos de Ingeniería &amp; Empresas</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Capacitación In-Company &amp; Masterclasses
              </h2>
              <p className="text-sm text-zinc-300">
                Talleres prácticos diseñados para elevar el nivel técnico de tus desarrolladores, reducir errores en producción y acelerar entregas.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {trainingTopics.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-white/[0.08] bg-[#0c0d16] p-7 space-y-5 flex flex-col justify-between hover:border-indigo-500/40 transition-all shadow-xl"
                >
                  <div className="space-y-4">
                    <span className="text-xs font-mono text-indigo-400 bg-indigo-500/10 px-2.5 py-1 rounded-md border border-indigo-500/20">
                      {item.duration}
                    </span>

                    <h3 className="text-lg font-bold text-white">
                      {item.title}
                    </h3>

                    <p className="text-xs font-mono text-zinc-400">
                      Audiencia: <span className="text-zinc-300">{item.audience}</span>
                    </p>

                    <div className="space-y-2 pt-2 border-t border-white/[0.06]">
                      <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                        Temario Principal:
                      </span>
                      <ul className="space-y-1.5">
                        {item.topics.map((t, tIdx) => (
                          <li key={tIdx} className="flex items-start gap-2 text-xs text-zinc-300">
                            <CheckCircle2 className="w-3.5 h-3.5 text-indigo-400 shrink-0 mt-0.5" />
                            <span>{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/[0.06]">
                    <a
                      href="#agendar"
                      className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-white/[0.04] hover:bg-indigo-600 hover:text-white text-zinc-300 font-mono text-xs font-semibold border border-white/[0.08] transition-all"
                    >
                      <span>Solicitar propuesta para mi equipo</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Contact & Booking Section */}
        <BookingSection />

      </main>
      <Footer />
    </div>
  );
}
