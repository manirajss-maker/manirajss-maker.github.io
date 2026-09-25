"use client";

import { useState, useEffect } from "react";
import { List, X } from "@phosphor-icons/react";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 48);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-titanium-950/90 backdrop-blur-xl border-b border-slate-800/60 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 group">
          <span className="w-9 h-9 rounded-lg bg-titanium-800 border border-gold-500/60 flex items-center justify-center font-heading font-bold text-gold-400 text-sm shadow-[0_0_12px_rgba(234,179,8,0.15)] group-hover:shadow-[0_0_18px_rgba(234,179,8,0.3)] transition-all">
            MS
          </span>
          <span className="hidden sm:block font-heading font-semibold text-slate-200 text-sm leading-none">
            Maniraj Sidanathan
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors relative after:absolute after:bottom-[-2px] after:left-0 after:w-0 after:h-[2px] after:bg-brandCyan-400 after:transition-all hover:after:w-full"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-semibold rounded-full bg-brandCyan-600 hover:bg-brandCyan-500 text-white transition-all hover:-translate-y-[1px] shadow-[0_4px_14px_rgba(2,132,199,0.3)]"
        >
          Get in Touch
        </a>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white p-2 rounded-lg hover:bg-slate-800/50 transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} weight="bold" /> : <List size={22} weight="bold" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-titanium-900/95 backdrop-blur-xl border-b border-slate-800/60 px-6 pb-6 pt-2">
          <nav className="flex flex-col gap-1" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="py-3 text-sm font-medium text-slate-400 hover:text-slate-100 border-b border-slate-800/40 last:border-none transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-3 text-center py-3 rounded-full bg-brandCyan-600 hover:bg-brandCyan-500 text-white text-sm font-semibold transition-colors"
            >
              Get in Touch
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
