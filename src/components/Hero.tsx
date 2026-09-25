import Image from "next/image";
import { LinkedinLogo, ArrowDown, MapPin, Buildings } from "@phosphor-icons/react/dist/ssr";

export default function Hero() {
  return (
    <section
      id="hero"
      className="min-h-[100dvh] flex flex-col justify-center pt-16 pb-12 px-6"
    >
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Content */}
        <div className="order-2 lg:order-1">
          {/* Pill badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold-500/40 bg-gold-500/8 text-gold-400 text-xs font-semibold tracking-wide mb-6">
            <span className="w-2 h-2 rounded-full bg-gold-400 shadow-[0_0_6px_rgba(234,179,8,0.8)]" />
            Licensed Professional Engineer · IIT Madras Alumnus
          </div>

          <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl text-slate-100 tracking-tight leading-[1.1] mb-5">
            Turning{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brandCyan-400 via-blue-400 to-gold-400">
              Geotechnical Risk
            </span>{" "}
            into Winning Bids.
          </h1>

          <p className="text-slate-400 text-lg leading-relaxed max-w-xl mb-8">
            Senior Techno-Commercial &amp; Geotechnical Manager with{" "}
            <strong className="text-slate-300 font-semibold">19+ years</strong> of international
            leadership across Saudi Arabia, India, Malaysia, and Bahrain. Delivering proposal
            excellence and engineering rigor for NEOM, Saudi Aramco, and Red Sea Global.
          </p>

          {/* Meta tags */}
          <div className="flex flex-wrap gap-4 mb-10 text-sm text-slate-400">
            <span className="flex items-center gap-1.5">
              <MapPin size={16} className="text-brandCyan-400" weight="fill" />
              Dammam, Saudi Arabia
            </span>
            <span className="flex items-center gap-1.5">
              <Buildings size={16} className="text-brandCyan-400" weight="fill" />
              Fugro Suhaimi Ltd.
            </span>
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brandCyan-600 hover:bg-brandCyan-500 text-white text-sm font-semibold transition-all hover:-translate-y-[1px] shadow-[0_4px_20px_rgba(2,132,199,0.35)]"
            >
              View Key Projects
            </a>
            <a
              href="https://www.linkedin.com/in/maniraj-sidanathan-16406916"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-slate-700 hover:border-slate-500 bg-slate-800/30 hover:bg-slate-800/60 text-slate-200 text-sm font-semibold transition-all"
            >
              <LinkedinLogo size={18} weight="fill" className="text-[#0A66C2]" />
              LinkedIn Profile
            </a>
          </div>
        </div>

        {/* Right: Profile Card */}
        <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
          <div className="glass-card rounded-2xl p-8 w-full max-w-sm text-center shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            {/* Profile Photo */}
            <div className="relative w-32 h-32 mx-auto mb-5">
              <Image
                src="/profile.png"
                alt="Maniraj Sidanathan"
                width={128}
                height={128}
                className="w-32 h-32 rounded-full object-cover border-2 border-gold-500/70 shadow-[0_0_24px_rgba(234,179,8,0.2)]"
                priority
              />
              {/* Online indicator */}
              <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-titanium-900 shadow-[0_0_6px_#34d399]" />
            </div>

            <h2 className="font-heading font-bold text-xl text-slate-100 mb-1">
              Maniraj Sidanathan
            </h2>
            <p className="text-brandCyan-400 font-semibold text-sm mb-1">
              Department Manager – Proposals
            </p>
            <p className="text-slate-500 text-xs mb-5">Fugro Suhaimi Ltd. · Saudi Arabia</p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 mb-5">
              {[
                { val: "19+", label: "Years Experience" },
                { val: "11+", label: "Years at Fugro" },
                { val: "4", label: "Giga Frameworks" },
                { val: "71/71", label: "Delivery Orders" },
              ].map((s) => (
                <div
                  key={s.label}
                  className="bg-titanium-900/60 border border-slate-800/60 rounded-xl p-3"
                >
                  <div className="font-heading font-bold text-xl text-slate-100">{s.val}</div>
                  <div className="text-xs text-slate-500 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>

            <a
              href="mailto:maniraj.ss@gmail.com"
              className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-brandCyan-600/40 bg-brandCyan-600/10 text-brandCyan-400 hover:bg-brandCyan-600/20 transition-colors text-sm font-medium"
            >
              maniraj.ss@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="max-w-7xl mx-auto w-full mt-12 flex justify-center">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="flex flex-col items-center gap-2 text-slate-600 hover:text-slate-400 transition-colors animate-bounce"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ArrowDown size={18} />
        </a>
      </div>
    </section>
  );
}
