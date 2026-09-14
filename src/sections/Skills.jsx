import Reveal from "../components/Reveal";
import { SectionHeading, Card, Tag, Eyebrow } from "../components/ui";
import { SKILLS, SECTION_COPY } from "../data/portfolioData";

export default function Skills() {
  const backend = SKILLS.find((s) => s.emphasis);
  const rest = SKILLS.filter((s) => !s.emphasis);

  return (
    <section id="skills" className="py-24 max-w-6xl mx-auto px-6">
      <Reveal>
        <SectionHeading {...SECTION_COPY.skills} />
      </Reveal>

      <Reveal>
        <Card highlight className="mb-6">
          <Eyebrow className="mb-4">{backend.category} · Primary</Eyebrow>
          <div className="flex flex-wrap">
            {backend.items.map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
          </div>
        </Card>
      </Reveal>

      <div className="grid sm:grid-cols-2 gap-6">
        {rest.map((group) => (
          <Reveal key={group.category}>
            <Card>
              <p className="font-mono text-xs uppercase tracking-widest text-slate-500 mb-4">
                {group.category}
              </p>
              <div className="flex flex-wrap">
                {group.items.map((item) => (
                  <Tag key={item}>{item}</Tag>
                ))}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
