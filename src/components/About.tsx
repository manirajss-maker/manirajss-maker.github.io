import { GraduationCap, Certificate, Globe } from "@phosphor-icons/react/dist/ssr";

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-start">
          {/* Left: Narrative (wider) */}
          <div className="lg:col-span-3">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-100 tracking-tight mb-6">
              About Maniraj
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed text-[1.05rem]">
              <p>
                I am a Senior Geotechnical Manager with over{" "}
                <strong className="text-slate-300">19 years of international experience</strong>{" "}
                spanning India, Malaysia, Saudi Arabia, and Bahrain, currently serving as{" "}
                <strong className="text-slate-300">Department Manager – Proposals</strong> at
                Fugro-Suhaimi Ltd. in Dammam, Saudi Arabia.
              </p>
              <p>
                Holding an{" "}
                <strong className="text-slate-300">M.Tech in Geotechnical Engineering from IIT Madras</strong>{" "}
                and a B.E. in Civil Engineering from CEG, Anna University, I bring deep expertise
                across onshore and offshore investigations, ground improvement, deep foundations,
                retaining structures, and structural foundation design.
              </p>
              <p>
                My career has progressed from hands-on field engineering to Kingdom-wide
                techno-commercial leadership — shaping proposal strategy, securing framework
                agreements, and managing multi-disciplinary teams across Saudi Arabia's most
                ambitious developments, including{" "}
                <strong className="text-slate-300">
                  NEOM, Saudi Aramco, Red Sea Global, Qiddiya, and Riyadh Expo 2030
                </strong>
                .
              </p>
              <p>
                A licensed{" "}
                <strong className="text-slate-300">
                  Professional Engineer with the Saudi Council of Engineers
                </strong>{" "}
                and a member of the Indian Geotechnical Society, I am passionate about delivering
                value-engineered geotechnical solutions on complex, large-scale infrastructure
                projects.
              </p>
            </div>
          </div>

          {/* Right: Credentials */}
          <div className="lg:col-span-2 space-y-4">
            {/* Education */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-brandCyan-600/15 border border-brandCyan-600/30 flex items-center justify-center flex-shrink-0">
                  <GraduationCap size={20} weight="fill" className="text-brandCyan-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Education</p>
                  <div className="space-y-3">
                    <div>
                      <p className="font-semibold text-slate-200 text-sm leading-snug">
                        M.Tech – Geotechnical Engineering
                      </p>
                      <p className="text-brandCyan-400 text-xs">IIT Madras · 2008–2010</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-200 text-sm leading-snug">
                        B.E. – Civil Engineering
                      </p>
                      <p className="text-brandCyan-400 text-xs">CEG, Anna University · 2003–2007</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Licenses */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-gold-500/15 border border-gold-500/30 flex items-center justify-center flex-shrink-0">
                  <Certificate size={20} weight="fill" className="text-gold-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Licenses &amp; Affiliations</p>
                  <ul className="space-y-1.5 text-sm text-slate-300">
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                      Licensed Professional Engineer (SCE)
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-400 flex-shrink-0" />
                      Member – Indian Geotechnical Society
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Languages */}
            <div className="glass-card rounded-2xl p-5">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                  <Globe size={20} weight="fill" className="text-emerald-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 uppercase tracking-wider mb-1">Languages</p>
                  <ul className="space-y-1.5 text-sm">
                    <li className="flex items-center justify-between">
                      <span className="text-slate-300">English</span>
                      <span className="text-xs text-slate-500">Professional</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-slate-300">Tamil</span>
                      <span className="text-xs text-slate-500">Full Professional</span>
                    </li>
                    <li className="flex items-center justify-between">
                      <span className="text-slate-300">Telugu</span>
                      <span className="text-xs text-slate-500">Limited Working</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
