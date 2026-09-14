import Reveal from "../components/Reveal";
import { SectionHeading } from "../components/ui";
import { EXPERIENCE, SKILLS, SECTION_COPY } from "../data/portfolioData";

function buildSummaryRow() {
  const byCategory = Object.fromEntries(SKILLS.map((s) => [s.category, s.items]));
  const description = `Working across ${byCategory.Backend.join(", ")} for backend engineering, ${byCategory.Frontend.join(
    ", "
  )} on the frontend, plus ${byCategory.Engineering.join(", ").toLowerCase()}. Also ${byCategory.Mobile.join(
    " and "
  )}, and ${byCategory.Additional.join(" and ").toLowerCase()} as additional capabilities.`;

  return {
    label: "2022 — Present",
    dot: "bg-indigo-400",
    title: "Professional software development",
    description,
  };
}

function buildCompanyRow(entry) {
  const title = [entry.company, entry.location].filter(Boolean).join(" · ");
  const roleAndNote = entry.note ? `${entry.title} (${entry.note})` : entry.title;
  const description = `${roleAndNote}. Projects: ${entry.bullets.join(", ")}.`;

  return {
    label: "Experience",
    dot: "bg-violet-400",
    title,
    description,
  };
}

function buildAchievementRow(entry) {
  return {
    label: entry.year,
    dot: "bg-indigo-400",
    title: entry.title,
    description: `${entry.bullets.join(". ")}. Self-directed learning, not professional employment.`,
  };
}

function buildRows() {
  const companyEntries = EXPERIENCE.filter((e) => e.bulletKind === "projects").map(buildCompanyRow);
  const achievementEntries = EXPERIENCE.filter((e) => e.bulletKind === "achievements").map(buildAchievementRow);
  return [buildSummaryRow(), ...companyEntries, ...achievementEntries];
}

export default function Experience() {
  const rows = buildRows();

  return (
    <section id="experience" className="py-24 max-w-6xl mx-auto px-6">
      <Reveal>
        <SectionHeading {...SECTION_COPY.experience} />
      </Reveal>

      <div>
        {rows.map((row, i) => (
          <Reveal key={i}>
            <div className="grid md:grid-cols-[140px_260px_1fr] gap-3 md:gap-8 py-6 border-b border-white/10 items-start">
              <div className="flex items-center gap-2.5">
                <span className={`w-2 h-2 rounded-full ${row.dot} flex-shrink-0`} />
                <span className="font-mono text-xs uppercase tracking-widest text-slate-500">{row.label}</span>
              </div>
              <p className="text-white font-semibold">{row.title}</p>
              <p className="text-slate-400 text-sm leading-relaxed">{row.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
