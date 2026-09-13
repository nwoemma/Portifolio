import { Code2, Server } from "lucide-react";
import Reveal from "./Reveal";
import { SkillBadge, SkillBar, SectionTitle } from "./ui";
import { FRONTEND_SKILLS, BACKEND_SKILLS, ALL_SKILLS } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionTitle>Technical Skills</SectionTitle>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-6">
          <Reveal>
            <div className="bg-slate-800/70 backdrop-blur border border-white/10 rounded-2xl p-6 h-full">
              <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
                <Code2 className="text-blue-400" size={20} /> Frontend Development
              </h4>
              {FRONTEND_SKILLS.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} color="bg-blue-500" />
              ))}
            </div>
          </Reveal>
          <Reveal>
            <div className="bg-slate-800/70 backdrop-blur border border-white/10 rounded-2xl p-6 h-full">
              <h4 className="text-white font-semibold mb-5 flex items-center gap-2">
                <Server className="text-blue-400" size={20} /> Backend & DevOps
              </h4>
              {BACKEND_SKILLS.map((s) => (
                <SkillBar key={s.name} name={s.name} level={s.level} color="bg-purple-500" />
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-6">
          <div className="bg-slate-800/70 backdrop-blur border border-white/10 rounded-2xl p-6">
            <h4 className="text-white font-semibold mb-4">All Skills & Technologies</h4>
            <div className="flex flex-wrap">
              {ALL_SKILLS.map((skill) => (
                <SkillBadge key={skill}>{skill}</SkillBadge>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
