"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Terminal, Calendar, Menu, X, ArrowUpRight, Download } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Sobre Mí", href: "/sobre-mi" },
    { label: "Proyectos", href: "/proyectos" },
    { label: "Servicios", href: "/servicios" },
    { label: "Blueprints", href: "/blueprints" },
    { label: "Speaker & Docencia", href: "/speaker" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#08090d]/85 backdrop-blur-xl border-b border-white/[0.08] py-3 shadow-2xl"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:border-emerald-500/50 transition-all">
            <Terminal className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-semibold tracking-tight text-white font-mono flex items-center gap-1.5">
              jamzdeveloper<span className="text-emerald-400">.com</span>
            </span>
            <span className="text-[11px] text-zinc-400 font-mono tracking-wider uppercase">
              José Montenegro
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/[0.06] px-3 py-1.5 rounded-full backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white rounded-full hover:bg-white/[0.06] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-2.5">
          <a
            href="/cv-jose-montenegro.pdf"
            download="CV-Jose-Montenegro-Senior-Engineer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-xs font-medium text-zinc-300 hover:text-white px-3 py-2 rounded-lg font-mono hover:bg-white/[0.06] border border-white/[0.08] transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span>CV</span>
          </a>

          <Link
            href="/agendar"
            className="flex items-center gap-2 text-xs font-medium bg-emerald-500 text-black px-4 py-2 rounded-lg font-mono hover:bg-emerald-400 transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] active:scale-95"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Agendar Reunión</span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-zinc-400 hover:text-white focus:outline-none cursor-pointer"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0b12] border-b border-white/[0.08] px-4 pt-3 pb-6 mt-3 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-sm text-zinc-300 hover:text-white hover:bg-white/[0.05] rounded-md font-medium"
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 space-y-2">
            <a
              href="/cv-jose-montenegro.pdf"
              download="CV-Jose-Montenegro-Senior-Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full text-xs font-medium border border-white/10 bg-white/[0.04] text-white px-4 py-2.5 rounded-lg font-mono hover:bg-white/[0.08] transition-colors"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>Descargar CV (PDF)</span>
            </a>

            <Link
              href="/agendar"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 w-full text-sm font-medium bg-emerald-500 text-black px-4 py-2.5 rounded-lg font-mono hover:bg-emerald-400 transition-all"
            >
              <Calendar className="w-4 h-4" />
              <span>Agendar Reunión</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
