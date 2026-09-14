import Reveal from "../components/Reveal";
import { SectionHeading, Tag, LinkArrow } from "../components/ui";
import { PROJECTS, SECTION_COPY } from "../data/portfolioData";

// Featured "Selected Work" set — chosen as the 4 projects with the most complete
// data (description, tech, and live links), matching the Figma's emphasis on
// substantial backend/business-system work. See chat notes for this choice.
const FEATURED_TITLES = ["Weldork", "Obodo Backend", "Billway", "Zimason Business Management System"];

function ProjectCard({ project, featured }) {
  return (
    <div
      className={`rounded-xl border p-7 h-full transition-colors ${
        featured
          ? "border-indigo-500/30 bg-indigo-500/[0.05] hover:border-indigo-500/50"
          : "border-white/10 bg-white/[0.02] hover:border-white/20"
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <p className="font-mono text-xs uppercase tracking-widest text-indigo-400">
          {featured ? "Selected Work" : "Project"}
        </p>
        <span className="text-slate-600" aria-hidden="true">
          ↗
        </span>
      </div>
      <h3 className="text-white font-bold text-xl mb-2.5">{project.title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed mb-4">{project.description}</p>

      {project.tech.length > 0 && (
        <div className="flex flex-wrap mb-4">
          {project.tech.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      )}

      {project.contribution && (
        <p className="text-sm text-slate-300 mb-4">
          <span className="text-slate-500">My contribution: </span>
          {project.contribution}
        </p>
      )}

      {project.links.length > 0 && (
        <div className="flex flex-wrap gap-x-5 gap-y-2 mt-auto pt-1">
          {project.links.map((link) => (
            <LinkArrow key={link.label} label={link.label} href={link.href} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => FEATURED_TITLES.includes(p.title));
  const rest = PROJECTS.filter((p) => !FEATURED_TITLES.includes(p.title));

  return (
    <section id="projects" className="py-24 bg-slate-900/40">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionHeading {...SECTION_COPY.projects} />
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {featured.map((project) => (
            <Reveal key={project.title}>
              <ProjectCard project={project} featured />
            </Reveal>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {rest.map((project) => (
            <Reveal key={project.title}>
              <ProjectCard project={project} featured={false} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
