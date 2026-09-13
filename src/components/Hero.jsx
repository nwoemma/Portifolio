import { Code2, Eye, Send, Download, Atom, Terminal, Database } from "lucide-react";
import Reveal from "./Reveal";
import { LinkButton } from "./ui";
import { CONTACT } from "../data/content";

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-16 max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <Reveal>
          <h6 className="text-blue-400 mb-3 flex items-center gap-2 font-medium">
            <Code2 size={18} /> FULL STACK DEVELOPER
          </h6>
          <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Emmanuel Nwosu
            </span>
          </h1>
          <p className="text-lg mb-4 text-slate-300">
            I build production-ready web applications with modern technologies. Specializing in{" "}
            <span className="text-blue-400 font-semibold">React</span> for responsive frontends and{" "}
            <span className="text-blue-400 font-semibold">Django</span> for robust backends.
          </p>
          <p className="mb-8 text-slate-400">
            I design scalable architectures, implement CI/CD pipelines, and deploy containerized applications
            for reliable performance.
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            <LinkButton label="View Projects" href="#projects" icon={Eye} />
            <LinkButton label="Contact Me" href="#contact" icon={Send} variant="outline" />
            <LinkButton label="Download CV" href={CONTACT.cv} icon={Download} variant="outline" />
          </div>

          <div className="flex gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                15+
              </h3>
              <p className="text-slate-400 text-sm">Projects</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                3+
              </h3>
              <p className="text-slate-400 text-sm">Years Experience</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                100%
              </h3>
              <p className="text-slate-400 text-sm">Client Satisfaction</p>
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <div className="bg-slate-950 rounded-2xl p-12 min-h-[380px] flex items-center justify-center text-center border border-white/10">
              <div>
                <Code2 size={64} className="text-blue-500 mx-auto mb-4" />
                <h4 className="text-white text-xl font-semibold">Full Stack Developer</h4>
                <p className="text-slate-400 mt-1">React • Django • DevOps</p>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
              <Atom size={24} className="text-white" />
            </div>
            <div className="absolute -top-4 -right-4 w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center shadow-lg">
              <Terminal size={24} className="text-white" />
            </div>
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
              <Database size={24} className="text-white" />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
