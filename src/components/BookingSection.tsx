"use client";

import React, { useState } from "react";
import { PORTFOLIO_DATA } from "@/data/portfolio";
import { 
  Calendar, 
  Clock, 
  MessageSquare, 
  Mail, 
  CheckCircle, 
  ArrowRight,
  ShieldCheck,
  Send
} from "lucide-react";

export function BookingSection() {
  const { personal } = PORTFOLIO_DATA;
  const [sessionType, setSessionType] = useState<"audit" | "mentor" | "enterprise">("audit");
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });

  const sessionOptions = [
    {
      id: "audit",
      name: "Diagnóstico de Arquitectura",
      duration: "30 min",
      target: "CTOs & Startups",
      desc: "Revisión rápida de cuellos de botella, latencias o dudas sobre migración a Serverless/Event-Driven."
    },
    {
      id: "mentor",
      name: "Mentoría Técnica 1-a-1",
      duration: "60 min",
      target: "Ingenieros & Tech Leads",
      desc: "Code review en vivo, diseño de microservicios en NestJS, preparación para entrevistas Senior."
    },
    {
      id: "enterprise",
      name: "Consultoría de Agentes de IA",
      duration: "A medida",
      target: "Empresas & Fintechs",
      desc: "Diseño e implementación de pipelines en tiempo real con AgenteCore y LLMs en producción."
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mailto fallback or custom action
    const mailto = `mailto:${personal.email}?subject=Solicitud de Asesoría: ${sessionType.toUpperCase()} - ${formData.name}&body=Nombre: ${formData.name}%0D%0AEmpresa: ${formData.company}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMensaje:%0D%0A${encodeURIComponent(formData.message)}`;
    window.location.href = mailto;
    setFormSent(true);
  };

  return (
    <section id="agendar" className="py-24 relative overflow-hidden bg-[#090a11] border-t border-white/[0.08]">
      {/* Background glow */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[400px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
            <Calendar className="w-3.5 h-3.5 text-emerald-400" />
            <span>Agendamiento Directo</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Agenda una Asesoría Técnica o Consulta de Arquitectura
          </h2>
          <p className="text-zinc-300 text-base sm:text-lg leading-relaxed">
            Conversemos sobre tu infraestructura, la implementación de agentes de IA en tu empresa o tu camino profesional en ingeniería backend.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left: Session Picker & Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-3">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                1. Selecciona el Tipo de Sesión:
              </span>
              <div className="space-y-3">
                {sessionOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSessionType(opt.id as any)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${
                      sessionType === opt.id
                        ? "bg-emerald-950/30 border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.2)]"
                        : "bg-[#0e1019] border-white/[0.08] hover:border-white/20"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-bold text-white font-mono">
                        {opt.name}
                      </p>
                      <span className="text-xs font-mono text-emerald-400 px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20">
                        {opt.duration}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 mt-1">
                      {opt.desc}
                    </p>
                    <p className="text-[11px] font-mono text-zinc-500 mt-2">
                      Dirigido a: <span className="text-zinc-300">{opt.target}</span>
                    </p>
                  </button>
                ))}
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="p-6 rounded-2xl bg-[#0c0e17] border border-white/[0.08] space-y-4">
              <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider block">
                Canales Directos:
              </span>
              <div className="space-y-3 text-sm font-mono">
                <a
                  href={`mailto:${personal.email}`}
                  className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors"
                >
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>{personal.email}</span>
                </a>
                <a
                  href={personal.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-zinc-300 hover:text-white transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>linkedin.com/in/jamzdeveloper</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Interactive Direct Request Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/[0.1] bg-[#0c0d16] p-7 sm:p-9 shadow-2xl space-y-6">
              <div className="border-b border-white/[0.08] pb-4">
                <h3 className="text-xl font-bold text-white font-mono">
                  Enviar Solicitud de Asesoría
                </h3>
                <p className="text-xs text-zinc-400 font-mono mt-1">
                  Tipo de sesión seleccionada:{" "}
                  <span className="text-emerald-400 font-bold uppercase">
                    {sessionType}
                  </span>
                </p>
              </div>

              {formSent ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-white">
                    ¡Solicitud Preparada!
                  </h4>
                  <p className="text-sm text-zinc-300 max-w-md mx-auto">
                    Se ha abierto tu cliente de correo para enviar la solicitud directa a José Montenegro. Te responderé en menos de 24 horas.
                  </p>
                  <button
                    onClick={() => setFormSent(false)}
                    className="text-xs font-mono text-emerald-400 hover:underline"
                  >
                    ← Enviar otra solicitud
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300 block">
                        Tu Nombre Completo *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Carlos Mendoza"
                        className="w-full bg-[#121420] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 font-mono"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-mono text-zinc-300 block">
                        Correo Corporativo o Personal *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="carlos@empresa.com"
                        className="w-full bg-[#121420] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 font-mono"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300 block">
                      Empresa o Proyecto (Opcional)
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Ej. Fintech XYZ / Freelance"
                      className="w-full bg-[#121420] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 font-mono"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-300 block">
                      Cuéntame sobre tu objetivo o desafío técnico *
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Ej. Necesitamos optimizar un servicio de alta concurrencia en NestJS / Queremos integrar un agente de IA con voz / Busco mentoría para pasar de Mid a Senior..."
                      className="w-full bg-[#121420] border border-white/[0.08] rounded-xl px-4 py-2.5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-500 font-mono resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2.5 bg-emerald-500 text-black py-3.5 rounded-xl font-mono text-sm font-semibold hover:bg-emerald-400 transition-all shadow-[0_0_25px_rgba(16,185,129,0.3)] active:scale-98"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitud de Asesoría Directa</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] font-mono text-zinc-400 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Respuesta garantizada en menos de 24 horas hábiles.</span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
