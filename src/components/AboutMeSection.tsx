"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { 
  Heart, 
  Compass, 
  GraduationCap, 
  Cpu, 
  Coffee, 
  MapPin, 
  Sparkles, 
  ArrowRight,
  Smile,
  ShieldCheck,
  CheckCircle2,
  Calendar
} from "lucide-react";
import { PORTFOLIO_DATA } from "@/data/portfolio";

export function AboutMeSection({ isFullPage = false }: { isFullPage?: boolean }) {
  const { personal } = PORTFOLIO_DATA;

  const interests = [
    {
      icon: Compass,
      title: "Turismo Outdoor & Naturaleza",
      desc: "Me apasiona salir a la montaña, viajar y explorar rutas. De esta pasión nació NuriPoint, para ayudar a senderistas a navegar seguros sin conexión."
    },
    {
      icon: GraduationCap,
      title: "Docencia & Ayudar a Otros",
      desc: "Enseñar es mi vocación. Ver a mis alumnos de Idat conseguir su primer empleo en tecnología o dar el salto a Senior es lo más gratificante."
    },
    {
      icon: Cpu,
      title: "Inteligencia Artificial Práctica",
      desc: "No me gustan los prototipos de juguete. Me fascina construir agentes con voz humana en tiempo real que resuelvan problemas de negocio reales."
    },
    {
      icon: Coffee,
      title: "Café, Buenas Charlas & Código Limpio",
      desc: "Creo en la comunicación transparente, la empatía en los equipos y en escribir código que cualquier persona pueda leer y mantener con gusto."
    }
  ];

  return (
    <section id="sobre-mi" className={`py-20 relative overflow-hidden ${isFullPage ? "pt-32" : "bg-[#090a11] border-t border-white/[0.08]"}`}>
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-emerald-500/5 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Smile className="w-3.5 h-3.5 text-emerald-400" />
            <span>Detrás del Código</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            ¿Quién soy yo y qué me apasiona?
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Más allá de los títulos de ingeniería y las tecnologías, soy una persona curiosa que cree que el mejor software es aquel que mejora la vida de las personas.
          </p>
        </div>

        {/* Main Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Personal Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="rounded-2xl border border-white/[0.08] bg-[#0c0d16] p-7 sm:p-9 space-y-5 shadow-xl">
              
              <div className="flex items-center gap-4 border-b border-white/[0.08] pb-4">
                <div className="relative w-16 h-16 rounded-2xl overflow-hidden border border-emerald-500/40 shadow-[0_0_25px_rgba(16,185,129,0.25)] shrink-0 bg-[#161924]">
                  <Image
                    src="/profile.jpg"
                    alt={personal.name}
                    width={64}
                    height={64}
                    className="object-cover w-full h-full"
                    priority
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">
                    José Montenegro Zelada
                  </h3>
                  <p className="text-xs font-mono text-zinc-400 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Nacido y radicado en Trujillo, Perú · Trabajo remoto para el mundo</span>
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-sm sm:text-base text-zinc-300 leading-relaxed">
                <p>
                  ¡Hola! Soy José. Estudié Informática en la <strong className="text-white">Universidad Nacional de Trujillo (UNT)</strong>, donde descubrí que lo mío no era solo hacer cosas que se vieran bien en la pantalla, sino entender a fondo <strong className="text-emerald-400">el motor detrás de los sistemas</strong>: cómo viajan los datos en milisegundos, cómo se protegen las transacciones financieras y cómo se construyen plataformas que no se caigan cuando millones de personas las usan a la vez.
                </p>

                <p>
                  A lo largo de mis más de 6 años de carrera he aportado en plataformas críticas de escala masiva: optimizando microservicios transaccionales para <strong className="text-white">Yape</strong> (asignado vía Arkano), modernizando arquitecturas serverless bancarias en <strong className="text-white">Bancolombia</strong> (asignado vía PRAGMA), y diseñando soluciones event-driven con Kafka para la red nacional de pagos <strong className="text-white">KasNet</strong> (asignado vía QDS), además de liderar ingeniería directa en startups, consultoría y plataformas internacionales en EE.UU.
                </p>

                <p>
                  Pero si me preguntas qué es lo que más me llena de orgullo en el día a día, son dos cosas:
                </p>

                <ul className="space-y-3 pl-2">
                  <li className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <span>
                      <strong className="text-white">Compartir conocimiento:</strong> Llevar más de 3 años enseñando en <strong>Idat</strong> como Docente Titular, donde he formado a más de 1,500 jóvenes en programación backend, bases de datos y buenas prácticas.
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-1" />
                    <span>
                      <strong className="text-white">Emprender con propósito:</strong> Cofundar <strong>NuriPoint</strong> y desarrollar <strong>AgenteCore</strong>, uniendo mi pasión por la naturaleza y la montaña con la Inteligencia Artificial para que nadie se pierda en una ruta al aire libre.
                    </span>
                  </li>
                </ul>

                <p className="pt-2 text-zinc-400 text-xs sm:text-sm italic">
                  "Mi filosofía es sencilla: no me gusta complicar las cosas con tecnicismos innecesarios. Me gusta escuchar el problema, entender el negocio y entregar una solución sólida que funcione sin dolores de cabeza."
                </p>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center gap-4">
                <a
                  href="#agendar"
                  className="inline-flex items-center gap-2 bg-emerald-500 text-black px-5 py-2.5 rounded-xl font-mono text-xs font-bold hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                >
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Conversemos un café virtual</span>
                </a>

                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-300 hover:text-white px-4 py-2.5 rounded-xl bg-white/[0.04] border border-white/[0.08] transition-colors"
                >
                  <span>Conectar en LinkedIn</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>
          </div>

          {/* Right Column: Personal Interests & What I Value */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
              Mis Pasiones &amp; Estilo de Vida:
            </span>

            <div className="space-y-4">
              {interests.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl border border-white/[0.08] bg-[#0c0e17] hover:border-emerald-500/30 transition-all space-y-2 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-base font-bold text-white group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed pl-1">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Quick Summary Pill Box */}
            <div className="p-5 rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#10121d] to-[#0c0d16] space-y-3">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest block font-semibold">
                Valores en el Trabajo:
              </span>
              <div className="grid grid-cols-2 gap-2 text-xs font-mono text-zinc-300">
                <span className="p-2 rounded bg-white/[0.03] border border-white/[0.06]">✔ Honestidad técnica</span>
                <span className="p-2 rounded bg-white/[0.03] border border-white/[0.06]">✔ Puntualidad</span>
                <span className="p-2 rounded bg-white/[0.03] border border-white/[0.06]">✔ Lenguaje claro</span>
                <span className="p-2 rounded bg-white/[0.03] border border-white/[0.06]">✔ Cero humo</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
