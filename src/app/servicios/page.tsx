import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { ServicesSection } from "@/components/ServicesSection";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Servicios de Consultoría, Arquitectura & Desarrollo | José Montenegro",
  description: "Servicios de auditoría de arquitectura, integración de Agentes de IA en producción, modernización cloud en AWS Serverless y mentoría técnica personalizada.",
  openGraph: {
    title: "Servicios de Consultoría & Asesoría Técnica | José Montenegro",
    description: "Ayudo a empresas a escalar sus plataformas sin fricciones y a crear soluciones con Inteligencia Artificial.",
    url: "https://jamzdeveloper.com/servicios",
  },
};

export default function ServiciosPage() {
  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 flex flex-col bg-grid-pattern relative selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <main className="flex-grow pt-24">
        <ServicesSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
