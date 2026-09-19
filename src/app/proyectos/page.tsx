import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ClientProjectsSection } from "@/components/ClientProjectsSection";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Proyectos & Soluciones Entregadas a Clientes | José Montenegro",
  description: "Explora los proyectos reales desarrollados para empresas en EE.UU. y Latinoamérica: ZPR Roofing, Rugerios Roofing, Nexfy App, EVOX 3D y NuriPoint.",
  openGraph: {
    title: "Proyectos & Soluciones de Clientes | José Montenegro",
    description: "Plataformas web, paneles administrativos y SaaS entregados a producción con arquitecturas modernas.",
    url: "https://jamzdeveloper.com/proyectos",
  },
};

export default function ProyectosPage() {
  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 flex flex-col bg-grid-pattern relative selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <main className="flex-grow pt-24">
        <ClientProjectsSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
