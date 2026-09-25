const skillGroups = [
  {
    category: "Commercial & Proposals",
    color: "cyan",
    skills: [
      "RFP & Tender Leadership",
      "Framework Agreements",
      "Market Intelligence",
      "Consultative Selling",
      "Bid Strategy & Pricing",
      "IKTVA & Saudization Compliance",
      "Business Development",
      "Client Relationship Management",
    ],
  },
  {
    category: "Geotechnical Engineering",
    color: "gold",
    skills: [
      "Onshore & Offshore Investigations",
      "Deep & Shallow Foundations",
      "Ground Improvement",
      "Earth Retention Systems",
      "Vibro Stone Columns",
      "Dynamic Compaction",
      "Marine Geotechnics",
      "Geotechnical Modeling",
    ],
  },
  {
    category: "Leadership & Operations",
    color: "emerald",
    skills: [
      "Multidisciplinary Team Leadership",
      "Value Engineering",
      "Project Governance",
      "Budget & Billing Management",
      "Quality Assurance",
      "Digital Transformation",
      "KPI Reporting",
      "Risk Management",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-titanium-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="font-heading font-bold text-3xl md:text-4xl text-slate-100 tracking-tight mb-3">
            Core Competencies
          </h2>
          <p className="text-slate-400 text-lg">
            A fusion of technical depth, bid governance, and executive leadership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skillGroups.map((group) => {
            const isCyan = group.color === "cyan";
            const isGold = group.color === "gold";
            const headerClass = isCyan
              ? "text-brandCyan-400 bg-brandCyan-600/10 border-brandCyan-600/30"
              : isGold
              ? "text-gold-400 bg-gold-500/10 border-gold-500/30"
              : "text-emerald-400 bg-emerald-500/10 border-emerald-500/30";
            const dotClass = isCyan
              ? "bg-brandCyan-400"
              : isGold
              ? "bg-gold-400"
              : "bg-emerald-400";

            return (
              <div key={group.category} className="glass-card rounded-2xl p-6 flex flex-col">
                <div className={`inline-flex self-start px-3 py-1.5 rounded-xl border text-xs font-bold uppercase tracking-wider mb-5 ${headerClass}`}>
                  {group.category}
                </div>
                <ul className="space-y-2.5 flex-1">
                  {group.skills.map((skill) => (
                    <li key={skill} className="flex items-center gap-2.5 text-slate-300 text-sm">
                      <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${dotClass}`} />
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
