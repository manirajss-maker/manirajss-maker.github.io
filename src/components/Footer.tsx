import { LinkedinLogo } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800/60 py-10 px-6 bg-titanium-950/60">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-lg bg-titanium-800 border border-gold-500/50 flex items-center justify-center font-heading font-bold text-gold-400 text-sm">
            MS
          </span>
          <div>
            <p className="font-heading font-semibold text-slate-200 text-sm">Maniraj Sidanathan</p>
            <p className="text-slate-500 text-xs">Senior Techno-Commercial &amp; Geotechnical Manager</p>
          </div>
        </div>

        <div className="flex items-center gap-5 text-sm text-slate-500">
          <a href="#about" className="hover:text-slate-300 transition-colors">About</a>
          <a href="#experience" className="hover:text-slate-300 transition-colors">Experience</a>
          <a href="#projects" className="hover:text-slate-300 transition-colors">Projects</a>
          <a href="#contact" className="hover:text-slate-300 transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/maniraj-sidanathan-16406916"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="w-9 h-9 rounded-lg bg-slate-800/60 border border-slate-700/60 flex items-center justify-center text-slate-400 hover:text-[#0A66C2] hover:border-[#0A66C2]/40 transition-all"
          >
            <LinkedinLogo size={18} weight="fill" />
          </a>
          <p className="text-slate-600 text-xs">
            &copy; {new Date().getFullYear()} Maniraj Sidanathan
          </p>
        </div>
      </div>
    </footer>
  );
}
