import Reveal from "./Reveal";
import { SectionTitle } from "./ui";
import { TIMELINE, OFFERINGS, AVAILABILITY } from "../data/content";

export default function About() {
  return (
    <section id="about" className="py-20 bg-slate-950/60">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <SectionTitle>About Me</SectionTitle>
        </Reveal>

        <div className="grid lg:grid-cols-2 gap-8">
          <Reveal>
            <div className="bg-slate-800/70 backdrop-blur border border-white/10 rounded-2xl p-8 h-full">
              <h3 className="text-white font-semibold text-xl mb-4">My Development Philosophy</h3>
              <p className="text-slate-400 mb-4 text-sm leading-relaxed">
                I build end-to-end web products: pixel-accurate frontends, robust APIs, and scalable
                deployments. I enjoy collaborating with designers and cross-functional teams, leading
                features from prototype to production, and improving developer experience through
                automation and testing.
              </p>
              <p className="text-slate-400 mb-6 text-sm leading-relaxed">
                My approach combines clean code practices with modern development workflows to deliver
                maintainable and performant applications that provide real value to users.
              </p>

              <div
                className="relative pl-7 border-l-2 space-y-8"
                style={{ borderImage: "linear-gradient(to bottom, #3b82f6, #8b5cf6) 1" }}
              >
                {TIMELINE.map((item) => (
                  <div key={item.title} className="relative">
                    <span className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-blue-500" />
                    <h5 className="text-white font-semibold">{item.title}</h5>
                    <p className="text-blue-400 text-sm mb-1">{item.period}</p>
                    <p className="text-slate-400 text-sm">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal>
            <div className="bg-slate-800/70 backdrop-blur border border-white/10 rounded-2xl p-8 h-full">
              <h3 className="text-white font-semibold text-xl mb-5">What I Offer</h3>
              <div className="space-y-5">
                {OFFERINGS.map((o) => (
                  <div key={o.title} className="flex items-start gap-4">
                    <div className="w-14 h-14 flex-shrink-0 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                      <o.icon size={22} />
                    </div>
                    <div>
                      <h5 className="text-white font-semibold">{o.title}</h5>
                      <p className="text-slate-400 text-sm">{o.text}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/10">
                <h5 className="text-white font-semibold mb-3">Currently Available For:</h5>
                <div className="flex flex-wrap gap-2">
                  {AVAILABILITY.map((item) => (
                    <span key={item.label} className={`px-3 py-1.5 rounded-md text-sm ${item.className}`}>
                      {item.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
