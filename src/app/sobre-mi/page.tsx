import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { AboutMeSection } from "@/components/AboutMeSection";
import { CareerTimeline } from "@/components/CareerTimeline";
import { TeachingSection } from "@/components/TeachingSection";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Sobre Mí | José Montenegro Zelada (jamzdeveloper)",
  description: "Conoce la historia, pasiones y trayectoria de José Montenegro: Ingeniero de Software, Tech Lead, docente en Idat y cofundador de NuriPoint. De Trujillo, Perú para el mundo.",
  openGraph: {
    title: "Sobre Mí | José Montenegro Zelada",
    description: "Conoce a la persona detrás del código: pasiones, historia, docencia y visión tecnológica.",
    url: "https://jamzdeveloper.com/sobre-mi",
  },
};

export default function SobreMiPage() {
  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 flex flex-col bg-grid-pattern relative selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <main className="flex-grow">
        <AboutMeSection isFullPage={true} />
        <CareerTimeline />
        <TeachingSection />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
