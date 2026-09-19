import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustBar } from "@/components/TrustBar";
import { HomeAboutTeaser } from "@/components/HomeAboutTeaser";
import { HomeProjectsTeaser } from "@/components/HomeProjectsTeaser";
import { HomeBlueprintsTeaser } from "@/components/HomeBlueprintsTeaser";
import { HomeServicesTeaser } from "@/components/HomeServicesTeaser";
import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#08090d] text-zinc-100 flex flex-col bg-grid-pattern relative selection:bg-emerald-500 selection:text-black">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <HomeAboutTeaser />
        <HomeProjectsTeaser />
        <HomeBlueprintsTeaser />
        <HomeServicesTeaser />
        <BookingSection />
      </main>
      <Footer />
    </div>
  );
}
