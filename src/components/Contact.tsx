"use client";

import { useState } from "react";
import {
  EnvelopeSimple,
  Phone,
  LinkedinLogo,
  MapPin,
  Copy,
  Check,
} from "@phosphor-icons/react";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("maniraj.ss@gmail.com").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    });
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-100 tracking-tight mb-3">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Available for strategic techno-commercial leadership discussions, proposal partnerships,
            and geotechnical consultancy across the GCC and India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Email */}
          <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-brandCyan-600/15 border border-brandCyan-600/30 flex items-center justify-center flex-shrink-0">
              <EnvelopeSimple size={22} weight="fill" className="text-brandCyan-400" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Email</p>
              <a
                href="mailto:maniraj.ss@gmail.com"
                className="text-slate-200 font-medium hover:text-brandCyan-400 transition-colors text-sm break-all"
              >
                maniraj.ss@gmail.com
              </a>
              <button
                onClick={handleCopy}
                className="mt-2 flex items-center gap-1.5 text-xs text-slate-500 hover:text-slate-300 transition-colors"
                aria-label="Copy email to clipboard"
              >
                {copied ? (
                  <>
                    <Check size={13} className="text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy size={13} />
                    Copy email
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Phone */}
          <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
              <Phone size={22} weight="fill" className="text-gold-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Phone / WhatsApp</p>
              <a
                href="tel:+966503404616"
                className="text-slate-200 font-medium hover:text-gold-400 transition-colors text-sm"
              >
                +966 50 340 4616
              </a>
            </div>
          </div>

          {/* LinkedIn */}
          <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-[#0A66C2]/15 border border-[#0A66C2]/30 flex items-center justify-center flex-shrink-0">
              <LinkedinLogo size={22} weight="fill" className="text-[#0A66C2]" />
            </div>
            <div className="min-w-0">
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">LinkedIn</p>
              <a
                href="https://www.linkedin.com/in/maniraj-sidanathan-16406916"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 font-medium hover:text-brandCyan-400 transition-colors text-sm break-all"
              >
                linkedin.com/in/maniraj-sidanathan-16406916
              </a>
            </div>
          </div>

          {/* Location */}
          <div className="glass-card rounded-2xl p-6 flex items-start gap-4">
            <div className="w-11 h-11 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
              <MapPin size={22} weight="fill" className="text-emerald-400" />
            </div>
            <div>
              <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Location</p>
              <p className="text-slate-200 font-medium text-sm">Dammam, Eastern Province</p>
              <p className="text-slate-500 text-xs">Saudi Arabia</p>
            </div>
          </div>
        </div>

        {/* Direct Mail Form */}
        <div className="glass-card rounded-2xl p-8">
          <h3 className="font-heading font-bold text-xl text-slate-100 mb-1">Send a Message</h3>
          <p className="text-slate-500 text-sm mb-6">
            This will open your email app with the details pre-filled.
          </p>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const form = e.currentTarget;
              const name = (form.elements.namedItem("name") as HTMLInputElement).value;
              const email = (form.elements.namedItem("email") as HTMLInputElement).value;
              const subject = (form.elements.namedItem("subject") as HTMLInputElement).value;
              const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;
              window.location.href = `mailto:maniraj.ss@gmail.com?subject=${encodeURIComponent(
                `[Portfolio] ${subject} – from ${name}`
              )}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-5"
          >
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="text-xs font-medium text-slate-300">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="Jane Doe"
                className="w-full px-4 py-3 rounded-xl bg-titanium-950/80 border border-slate-700/60 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-brandCyan-500 focus:ring-1 focus:ring-brandCyan-500/30 transition-colors"
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="text-xs font-medium text-slate-300">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="jane@company.com"
                className="w-full px-4 py-3 rounded-xl bg-titanium-950/80 border border-slate-700/60 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-brandCyan-500 focus:ring-1 focus:ring-brandCyan-500/30 transition-colors"
              />
            </div>
            <div className="md:col-span-2 flex flex-col gap-1.5">
              <label htmlFor="subject" className="text-xs font-medium text-slate-300">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Geotechnical Consultancy / Proposal Partnership"
                className="w-full px-4 py-3 rounded-xl bg-titanium-950/80 border border-slate-700/60 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-brandCyan-500 focus:ring-1 focus:ring-brandCyan-500/30 transition-colors"
              />
            </div>
            <div className="md:col-span-2 flex flex-col gap-1.5">
              <label htmlFor="message" className="text-xs font-medium text-slate-300">Message</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                placeholder="Brief description of your project or inquiry..."
                className="w-full px-4 py-3 rounded-xl bg-titanium-950/80 border border-slate-700/60 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-brandCyan-500 focus:ring-1 focus:ring-brandCyan-500/30 transition-colors resize-none"
              />
            </div>
            <div className="md:col-span-2">
              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-brandCyan-600 hover:bg-brandCyan-500 text-white font-semibold text-sm transition-all hover:-translate-y-[1px] shadow-[0_4px_20px_rgba(2,132,199,0.35)] active:scale-[0.99]"
              >
                Send via Email
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
