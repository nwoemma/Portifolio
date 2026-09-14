import Reveal from "../components/Reveal";
import { Button, Eyebrow } from "../components/ui";
import { HERO, SECTION_COPY } from "../data/portfolioData";

function FocusPanel() {
  const { panelFileName, panelItems } = SECTION_COPY.hero;
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] overflow-hidden">
      <div className="px-5 py-3 border-b border-white/10">
        <span className="font-mono text-xs text-slate-500">{panelFileName}</span>
      </div>
      <div className="px-5">
        {panelItems.map((item, i) => (
          <div
            key={item}
            className={`flex items-center gap-4 py-4 ${
              i !== panelItems.length - 1 ? "border-b border-white/10" : ""
            }`}
          >
            <span className="font-mono text-sm text-indigo-400">{String(i + 1).padStart(2, "0")}</span>
            <span className="text-white font-semibold">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 max-w-6xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-14 items-start">
        <Reveal>
          <Eyebrow className="mb-5">{SECTION_COPY.hero.eyebrow}</Eyebrow>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.1]">
            {HERO.headline}
          </h1>
          <p className="text-slate-400 mt-6 leading-relaxed max-w-lg">{HERO.supporting}</p>

          <div className="flex items-center gap-2 text-sm text-slate-500 mt-5">
            <span>
              {HERO.location} · {HERO.availability}
            </span>
          </div>

          <div className="flex items-baseline gap-2 border-l-2 border-indigo-500 pl-4 mt-6">
            <span className="text-2xl font-bold text-white">{HERO.stat.value}</span>
            <span className="text-slate-400 text-sm">{HERO.stat.label}</span>
          </div>

          <div className="flex flex-wrap items-center gap-2 mt-8">
            <Button label={HERO.primaryCta.label} href={HERO.primaryCta.href} variant="primary" />
            <Button label={HERO.secondaryCta.label} href={HERO.secondaryCta.href} variant="link" />
          </div>
        </Reveal>

        <Reveal>
          <FocusPanel />
        </Reveal>
      </div>
    </section>
  );
}
