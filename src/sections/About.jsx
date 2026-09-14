import { Check } from "lucide-react";
import Reveal from "../components/Reveal";
import { Eyebrow } from "../components/ui";
import { ABOUT, SECTION_COPY } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="py-24 bg-[#E8E5DC]">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <div className="grid lg:grid-cols-2 gap-10 items-start mb-14">
            <div>
              <Eyebrow className="mb-4">
                {SECTION_COPY.about.eyebrow}
              </Eyebrow>

              <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight leading-tight">
                {SECTION_COPY.about.heading}
              </h2>
            </div>

            <div className="space-y-4 text-[#68665F] leading-relaxed">
              {ABOUT.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal>
          <div className="rounded-xl border border-[#D5D1C6] bg-[#FAF9F5] p-6">
            <h3 className="text-[#171717] font-semibold mb-4">
              My Principles
            </h3>

            <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
              {ABOUT.principles.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-[#68665F]"
                >
                  <Check
                    size={16}
                    className="text-[#D94A3A] mt-0.5 flex-shrink-0"
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}