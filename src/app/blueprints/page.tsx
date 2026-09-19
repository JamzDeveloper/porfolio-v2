import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { BlueprintsSection } from "@/components/BlueprintsSection";
import { AgenteCoreShowcase } from "@/components/AgenteCoreShowcase";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "System Design Blueprints & Casos de Arquitectura | José Montenegro",
  description: "Especificaciones y diagramas de arquitectura técnica: Event-Driven con Kafka, Arquitectura Hexagonal y DDD en NestJS, y Agentes de IA en tiempo real.",
  openGraph: {
    title: "System Design Blueprints | José Montenegro",
    description: "Diagramas técnicos de Draw.io y decisiones de arquitectura para sistemas distribuidos de alta concurrencia.",
    url: "https://jamzdeveloper.com/blueprints",
  },
};

export default function BlueprintsPage() {
  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 flex flex-col bg-grid-pattern relative selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <main className="flex-grow pt-24">
        <BlueprintsSection />
        <AgenteCoreShowcase />
        <CaseStudiesSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
