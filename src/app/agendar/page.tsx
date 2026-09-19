import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Agendar Asesoría o Consulta de Proyecto | José Montenegro",
  description: "Agenda una sesión técnica directa con José Montenegro: diagnóstico de arquitectura, desarrollo de tu plataforma web, agentes de IA o mentoría profesional.",
  openGraph: {
    title: "Contacto & Agendamiento | José Montenegro",
    description: "Conversemos sobre tu infraestructura, proyecto web o consultoría técnica.",
    url: "https://jamzdeveloper.com/agendar",
  },
};

export default function AgendarPage() {
  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 flex flex-col bg-grid-pattern relative selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <main className="flex-grow pt-24">
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
