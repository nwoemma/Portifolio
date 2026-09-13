import { Mail, Github, Linkedin, Send, MessageCircle, Download } from "lucide-react";
import Reveal from "./Reveal";
import { LinkButton, ContactIcon, SectionTitle } from "./ui";
import { CONTACT } from "../data/content";

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <SectionTitle>Get In Touch</SectionTitle>
        </Reveal>

        <Reveal>
          <div className="bg-slate-800/70 backdrop-blur border border-white/10 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8 text-center mb-10">
              <div>
                <ContactIcon icon={Mail} />
                <h5 className="text-white font-semibold mt-1">Email</h5>
                <a href={`mailto:${CONTACT.email}`} className="text-slate-400 text-sm hover:text-blue-400">
                  {CONTACT.email}
                </a>
              </div>
              <div>
                <ContactIcon icon={Github} />
                <h5 className="text-white font-semibold mt-1">GitHub</h5>
                <a
                  href={CONTACT.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 text-sm hover:text-blue-400"
                >
                  {CONTACT.githubLabel}
                </a>
              </div>
              <div>
                <ContactIcon icon={Linkedin} />
                <h5 className="text-white font-semibold mt-1">LinkedIn</h5>
                <a
                  href={CONTACT.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 text-sm hover:text-blue-400"
                >
                  {CONTACT.linkedinLabel}
                </a>
              </div>
            </div>

            <div className="text-center">
              <h4 className="text-white font-semibold text-xl mb-3">Ready to Start a Project?</h4>
              <p className="text-slate-400 mb-6 text-sm">
                I'm currently available for freelance work and full-time positions. Let's discuss how we
                can work together!
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                <LinkButton label="Send Email" href={`mailto:${CONTACT.email}`} icon={Send} />
                <LinkButton label="WhatsApp" href={CONTACT.whatsapp} icon={MessageCircle} variant="outline" />
                <LinkButton label="Download CV" href={CONTACT.cv} icon={Download} variant="outline" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
