import Reveal from "./Reveal";
import { LinkButton, SkillBadge, ContactIcon, SectionTitle } from "./ui";
import { FEATURED_PROJECTS, OTHER_PROJECTS } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionTitle>Featured Projects</SectionTitle>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {FEATURED_PROJECTS.map((p) => (
            <Reveal key={p.title}>
              <div className="bg-slate-800/70 backdrop-blur border border-white/10 rounded-2xl overflow-hidden h-full hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-2xl transition-all">
                <div className={`h-48 flex items-center justify-center ${p.iconBg}`}>
                  <p.icon size={64} className="text-white" />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-white text-lg mb-2">{p.title}</h4>
                  <p className="text-slate-400 mb-3 text-sm">{p.description}</p>
                  <div className="mb-4">
                    {p.tags.map((tag) => (
                      <SkillBadge key={tag}>{tag}</SkillBadge>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <LinkButton {...p.primary} small />
                    <LinkButton {...p.secondary} small variant="outline" />
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-14">
          <Reveal>
            <h4 className="text-white text-xl font-semibold mb-6">Other Projects</h4>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {OTHER_PROJECTS.map((p) => (
              <Reveal key={p.title}>
                <div className="bg-slate-800/70 backdrop-blur border border-white/10 rounded-2xl p-6 text-center h-full hover:-translate-y-2 hover:border-blue-500/30 transition-all">
                  <ContactIcon icon={p.icon} />
                  <h5 className="text-white font-semibold mb-1">{p.title}</h5>
                  <p className="text-slate-400 text-sm mb-3">{p.description}</p>
                  <LinkButton label={p.linkLabel} href={p.href} disabled={p.disabled} small variant="outline" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
