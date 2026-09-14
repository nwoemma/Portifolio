import Reveal from "../components/Reveal";
import { Eyebrow } from "../components/ui";
import { SERVICES, SECTION_COPY } from "../data/portfolioData";

export default function Services() {
  return (
    <section id="services" className="py-24 max-w-6xl mx-auto px-6">
      <Reveal>
        <div className="rounded-xl border border-white/10 bg-white/[0.02] p-8 sm:p-10">
          <div className="grid lg:grid-cols-2 gap-10">
            <div>
              <Eyebrow className="mb-4">{SECTION_COPY.services.eyebrow}</Eyebrow>
              <h2 className="text-3xl font-extrabold text-white tracking-tight leading-tight">
                {SECTION_COPY.services.heading}
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-x-8">
              {SERVICES.map((service) => (
                <div key={service.title} className="py-3.5 border-b border-white/10">
                  <p className="text-white font-medium text-sm">{service.title}</p>
                  <p className="text-slate-500 text-xs mt-1">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
