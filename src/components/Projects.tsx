import { Buildings, Train, Factory } from "@phosphor-icons/react/dist/ssr";

const projects = [
  {
    badge: "Vision 2030 · Giga",
    icon: Buildings,
    title: "NEOM & Red Sea Global (TRSDC)",
    client: "NEOM · Red Sea Global · PIF",
    description:
      "Held and renewed multi-year framework agreements. Accountable for technical quality and commercial viability across geotechnical proposals, ground investigations, and value engineering consultancy for two of Saudi Arabia's most ambitious giga-developments.",
    tags: ["Framework Agreement", "Offshore & Onshore", "Value Engineering"],
    highlight: "cyan",
  },
  {
    badge: "Vision 2030 · Entertainment",
    icon: Buildings,
    title: "Qiddiya & Riyadh Expo 2030",
    client: "Qiddiya Investment Co. · Riyadh Expo",
    description:
      "Opened the Riyadh market with a Vision 2030 flagship win and converted it into repeat work on Riyadh Expo 2030 and Qiddiya. Secured a dedicated 4-party framework, diversifying the company's regional revenue base.",
    tags: ["Market Expansion", "Flagship Win", "Framework Contract"],
    highlight: "gold",
  },
  {
    badge: "Energy & Industrial Major",
    icon: Factory,
    title: "Saudi Aramco & Royal Commission",
    client: "Saudi Aramco · Royal Commission for Jubail & Yanbu",
    description:
      "Single-point ownership of a 5-year Royal Commission framework — managed and closed all 71 of 71 delivery orders. Delivered onshore, nearshore, and offshore geotechnical services for Aramco, SEC, SWCC, and SABIC.",
    tags: ["71/71 Delivery Orders", "Nearshore & Offshore", "IKTVA Compliance"],
    highlight: "cyan",
  },
  {
    badge: "Urban Transit",
    icon: Train,
    title: "Kochi Metro Rail (Packages KC 04 & KC 05)",
    client: "Kochi Metro Rail Limited",
    description:
      "Served as Technical Authority on behalf of the metro authority. Coordinated design review, compliance, programme, and reporting with principal contractors ITD-Cementation, Simplex, and Keller for two major metro packages.",
    tags: ["Technical Authority", "Metro Alignment", "Design Review"],
    highlight: "gold",
  },
  {
    badge: "Refineries & Heavy Industry",
    icon: Factory,
    title: "Energy Megaprojects (IOCL, HPCL, BPCL, NTPC)",
    client: "IOCL Paradip · HPCL & BPCL Ennore · NTPC Visakhapatnam",
    description:
      "Bid lead and geotechnical design engineer for ground improvement and deep-foundation packages on major oil refineries, ports (Pipavav Shipyard), and power plant developments across India.",
    tags: ["Ground Improvement", "Refineries & Ports", "Deep Foundations"],
    highlight: "cyan",
  },
  {
    badge: "Metro & National Rail",
    icon: Train,
    title: "Delhi & Bangalore Metros · Railway Gauge Conversion",
    client: "DMRC · BMRC · Southern Railway (Tata Projects)",
    description:
      "Delivered earth-retention systems for underground metro stations in Delhi and Bangalore. Earlier served as Project Engineer on the 40 km Villupuram–Mayiladuthurai Railway Gauge Conversion Project.",
    tags: ["Earth Retention", "Underground Stations", "Railway Engineering"],
    highlight: "gold",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-100 tracking-tight mb-3">
            Key Accounts &amp; Projects
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Direct commercial and engineering involvement on landmark giga-programs, metro rail, and
            energy infrastructure across Saudi Arabia and India.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((p, i) => {
            const Icon = p.icon;
            const isCyan = p.highlight === "cyan";
            return (
              <div
                key={i}
                className="glass-card rounded-2xl p-6 flex flex-col h-full hover:border-slate-700 transition-all"
              >
                {/* Badge */}
                <div
                  className={`inline-flex self-start px-3 py-1 rounded-md text-xs font-bold uppercase tracking-wider mb-4 ${
                    isCyan
                      ? "bg-brandCyan-600/10 border border-brandCyan-600/30 text-brandCyan-400"
                      : "bg-gold-500/10 border border-gold-500/30 text-gold-400"
                  }`}
                >
                  {p.badge}
                </div>

                <div className="flex items-start gap-3 mb-3">
                  <div
                    className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                      isCyan
                        ? "bg-brandCyan-600/15 border border-brandCyan-600/30"
                        : "bg-gold-500/15 border border-gold-500/30"
                    }`}
                  >
                    <Icon
                      size={18}
                      weight="fill"
                      className={isCyan ? "text-brandCyan-400" : "text-gold-400"}
                    />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-slate-100 text-base leading-snug">
                      {p.title}
                    </h3>
                    <p className={`text-xs font-medium mt-0.5 ${isCyan ? "text-brandCyan-400" : "text-gold-400"}`}>
                      {p.client}
                    </p>
                  </div>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed flex-1 mb-4">
                  {p.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md bg-slate-800/60 border border-slate-700/50 text-slate-400 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
