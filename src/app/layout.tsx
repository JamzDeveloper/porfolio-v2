import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "José Montenegro Zelada | Senior Backend Engineer, Tech Lead & AI Architect",
  description: "Senior Backend Engineer & Tech Lead especializado en sistemas distribuidos de alta concurrencia (Yape, Bancolombia, KasNet), arquitecturas serverless en AWS y orquestación de Agentes de IA en tiempo real (AgenteCore). Consultoría técnica y mentoría.",
  keywords: [
    "José Montenegro",
    "jamzdeveloper",
    "Senior Backend Engineer",
    "Tech Lead",
    "Cloud Architect",
    "AI Agents",
    "Agentes de IA",
    "Yape",
    "Bancolombia",
    "KasNet",
    "NestJS",
    "Arquitectura Hexagonal",
    "CQRS",
    "Kafka",
    "AWS Serverless",
    "Consultoría de Software",
    "Docente Idat"
  ],
  authors: [{ name: "José Montenegro Zelada", url: "https://jamzdeveloper.com" }],
  creator: "José Montenegro Zelada",
  openGraph: {
    title: "José Montenegro | Staff Backend Engineer, Tech Lead & AI Architect",
    description: "Diseño y escalabilidad de sistemas distribuidos críticos e ingeniería de Agentes de IA en tiempo real. Asesorías técnicas y consultoría de arquitectura.",
    url: "https://jamzdeveloper.com",
    siteName: "jamzdeveloper.com",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "José Montenegro | Staff Backend Engineer & AI Architect",
    description: "Sistemas distribuidos de alta concurrencia y Agentes de IA en tiempo real. Asesorías y consultoría.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body 
        className="bg-[#08090d] text-zinc-100 antialiased selection:bg-emerald-500 selection:text-black font-sans"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "Person",
                  "@id": "https://jamzdeveloper.com/#person",
                  name: "José Montenegro Zelada",
                  alternateName: ["jamzdeveloper", "Jose Montenegro"],
                  url: "https://jamzdeveloper.com",
                  image: "https://jamzdeveloper.com/profile.jpg",
                  jobTitle: "Senior Backend Engineer & Software Architect",
                  worksFor: [
                    { "@type": "Organization", name: "Arkano (Cliente: Yape)" },
                    { "@type": "Organization", name: "NuriPoint" },
                    { "@type": "EducationalOrganization", name: "Idat" }
                  ],
                  sameAs: [
                    "https://www.linkedin.com/in/jamzdeveloper",
                    "https://github.com/jamzdeveloper"
                  ],
                  knowsAbout: [
                    "Backend Architecture",
                    "Distributed Systems",
                    "Event-Driven Architecture",
                    "AI Agents",
                    "NestJS",
                    "AWS Cloud",
                    "Apache Kafka",
                    "Next.js",
                    "TypeScript"
                  ]
                },
                {
                  "@type": "WebSite",
                  "@id": "https://jamzdeveloper.com/#website",
                  url: "https://jamzdeveloper.com",
                  name: "José Montenegro Zelada | Senior Backend Engineer & AI Architect",
                  publisher: { "@id": "https://jamzdeveloper.com/#person" }
                }
              ]
            })
          }}
        />
        {children}
      </body>
    </html>
  );
}
