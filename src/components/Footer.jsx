import { Github, Linkedin, Mail } from "lucide-react";
import { CONTACT } from "../data/content";

export default function Footer() {
  return (
    <footer className="py-6 bg-slate-950/80 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">© 2024 Emmanuel Chizaram Nwosu. All rights reserved.</p>
        <div className="flex gap-4">
          <a href={CONTACT.github} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400">
            <Github size={20} />
          </a>
          <a href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400">
            <Linkedin size={20} />
          </a>
          <a href={`mailto:${CONTACT.email}`} className="text-slate-400 hover:text-blue-400">
            <Mail size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
