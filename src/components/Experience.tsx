import { Briefcase } from "@phosphor-icons/react/dist/ssr";

const experience = [
  {
    company: "Fugro Suhaimi Ltd.",
    location: "Dammam, Saudi Arabia",
    period: "Jan 2015 – Present",
    totalYears: "11+ Years",
    roles: [
      {
        title: "Department Manager – Proposals / Senior Proposal Manager",
        period: "April 2025 – Present",
        bullets: [
          "Leads a 9-person bid and commercial team across four divisions, reporting to the Commercial Director.",
          "Shapes business development and bidding strategy for the Kingdom, presenting to senior leadership.",
          "Holds framework agreements with Aramco, Ma'aden, NEOM, Red Sea Global, AlUla, Qiddiya, ACWA Power, CPPA, and Mace.",
        ],
      },
      {
        title: "Proposal Manager / Geotechnical Proposal Manager",
        period: "Jan 2023 – Mar 2025",
        bullets: [
          "Opened the Riyadh market with a Vision 2030 flagship win, converting it into repeat awards on Riyadh Expo 2030 and Qiddiya.",
          "Secured 4 framework agreements (NEOM, Qiddiya, CPPA, Mace) shifting revenue base to contracted, recurring pipeline.",
          "Led Saudi Aramco and giga-project prequalifications against IKTVA and Saudization requirements.",
        ],
      },
      {
        title: "Geo Data Team Lead / Engineering Manager",
        period: "Oct 2019 – Dec 2022",
        bullets: [
          "Discipline lead for 20 engineers, technicians, drafters, and laboratory staff.",
          "Accountable for technical quality and commercial viability across 9 major accounts including NEOM, TRSDC, Ma'aden, and Bechtel.",
        ],
      },
      {
        title: "Senior Geotechnical Engineer",
        period: "Jan 2015 – Dec 2019",
        bullets: [
          "Single-point ownership of a 5-year Royal Commission framework – successfully managed and closed all 71 of 71 delivery orders.",
          "Delivered onshore, nearshore, and offshore geotechnical services for Aramco, Royal Commission, SEC, SWCC, and SABIC.",
        ],
      },
    ],
  },
  {
    company: "Kochi Metro Rail Ltd. / Soma Enterprise Ltd.",
    location: "Kochi, India",
    period: "Mar 2014 – Dec 2014",
    totalYears: "10 Months",
    roles: [
      {
        title: "Geotechnical Expert / Senior Geotechnical Engineer",
        period: "Mar 2014 – Dec 2014",
        bullets: [
          "Technical authority for metro packages KC 04 and KC 05.",
          "Coordinated design review, compliance, programme, and reporting with ITD-Cementation, Simplex, and Keller.",
        ],
      },
    ],
  },
  {
    company: "Keller Ground Engineering India Pvt. Ltd.",
    location: "Chennai, India",
    period: "Jul 2010 – Feb 2014",
    totalYears: "3 Yrs 8 Mo",
    roles: [
      {
        title: "Senior Geotechnical Engineer & Design Engineer",
        period: "Jul 2010 – Feb 2014",
        bullets: [
          "Technical marketing and business development of ground-improvement and deep-foundation solutions.",
          "Bid lead for oil & gas, power, port, highway, and metro packages (IOCL Paradip, HPCL/BPCL Ennore, NTPC, Pipavav Shipyard).",
        ],
      },
    ],
  },
  {
    company: "IIT Madras · Tata Projects Limited",
    location: "India",
    period: "2007 – 2010",
    totalYears: "3 Years",
    roles: [
      {
        title: "Project Associate (IIT Madras) & Project Engineer (Tata Projects)",
        period: "2007 – 2010",
        bullets: [
          "Project Associate at IIT Madras: consultancy design, geotechnical modelling, and quality control.",
          "Project Engineer at Tata Projects: managed a 40 km stretch of the Villupuram–Mayiladuthurai Railway Gauge Conversion Project.",
        ],
      },
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-titanium-900/30">
      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-100 tracking-tight mb-3">
            Work Experience
          </h2>
          <p className="text-slate-400 text-lg">
            19+ years of progressive leadership in geotechnical engineering and techno-commercial management.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-brandCyan-500 via-slate-700 to-transparent" />

          <div className="space-y-10">
            {experience.map((exp, i) => (
              <div key={i} className="pl-14 relative">
                {/* Dot */}
                <div className="absolute left-[13px] top-5 w-5 h-5 rounded-full bg-titanium-950 border-2 border-brandCyan-400 shadow-[0_0_10px_rgba(56,189,248,0.4)]" />

                {/* Company header */}
                <div className="glass-card rounded-2xl p-6">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-1">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-brandCyan-600/15 border border-brandCyan-600/30 flex items-center justify-center flex-shrink-0">
                        <Briefcase size={18} weight="fill" className="text-brandCyan-400" />
                      </div>
                      <div>
                        <h3 className="font-heading font-bold text-slate-100 text-lg leading-snug">
                          {exp.company}
                        </h3>
                        <p className="text-slate-500 text-xs">{exp.location}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="inline-block px-3 py-1 rounded-full bg-gold-500/10 border border-gold-500/30 text-gold-400 text-xs font-semibold">
                        {exp.totalYears}
                      </span>
                      <p className="text-slate-500 text-xs mt-1">{exp.period}</p>
                    </div>
                  </div>

                  {/* Roles */}
                  <div className="mt-5 space-y-5 divide-y divide-slate-800/60">
                    {exp.roles.map((role, j) => (
                      <div key={j} className={j > 0 ? "pt-5" : ""}>
                        <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                          <h4 className="font-semibold text-slate-200 text-sm leading-snug">
                            {role.title}
                          </h4>
                          <span className="text-slate-500 text-xs whitespace-nowrap">{role.period}</span>
                        </div>
                        <ul className="space-y-2">
                          {role.bullets.map((b, k) => (
                            <li key={k} className="flex items-start gap-2.5 text-slate-400 text-sm leading-relaxed">
                              <span className="w-1.5 h-1.5 rounded-full bg-brandCyan-400 flex-shrink-0 mt-[0.45rem]" />
                              {b}
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
