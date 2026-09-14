import { HERO, CONTACT } from "../data/portfolioData";
import { Button } from "./ui";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="font-semibold text-white">{HERO.name}</p>
        <p className="text-slate-400 text-sm text-center">
          {HERO.eyebrow} · {HERO.role} · {HERO.location}
        </p>
        <Button label="Download CV" href={CONTACT.cv} variant="primary" />
      </div>
    </footer>
  );
}
