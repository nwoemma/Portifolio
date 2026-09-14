import Reveal from "../components/Reveal";
import { Eyebrow } from "../components/ui";
import { CONTACT, SECTION_COPY } from "../data/portfolioData";

// Shortened labels for compact display, derived from the real CONTACT.availableFor
// values rather than inventing new categories.
const AVAILABILITY_SHORT = ["Remote", "Full-time", "Contract", "Freelance"];

function formatWhatsApp(waLink) {
  const digits = waLink.replace(/\D/g, "");

  // Nigerian number: 234 (country code) + 10 digits, grouped 3-3-4 for readability.
  const country = digits.slice(0, 3);
  const rest = digits.slice(3);

  return `+${country} ${rest.slice(0, 3)} ${rest.slice(3, 6)} ${rest.slice(6)}`;
}

const CHANNELS = [
  { label: "Email", value: CONTACT.email, href: `mailto:${CONTACT.email}` },
  { label: "GitHub", value: CONTACT.githubLabel, href: CONTACT.github },
  { label: "LinkedIn", value: CONTACT.linkedinLabel, href: CONTACT.linkedin },
  {
    label: "WhatsApp",
    value: formatWhatsApp(CONTACT.whatsapp),
    href: CONTACT.whatsapp,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 max-w-6xl mx-auto px-6">
      <Reveal>
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <Eyebrow className="mb-4">
              {SECTION_COPY.contact.eyebrow}
            </Eyebrow>

            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#171717] tracking-tight leading-tight">
              {SECTION_COPY.contact.heading}
            </h2>

            <div className="flex items-center gap-2 text-sm text-[#68665F] mt-5">
              <span className="w-2 h-2 rounded-full bg-[#D94A3A]" />
              {AVAILABILITY_SHORT.join(" · ")}
            </div>
          </div>

          <div>
            {CHANNELS.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  c.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="flex items-center justify-between py-4 border-b border-[#D5D1C6] group"
              >
                <span className="font-mono text-xs uppercase tracking-widest text-[#68665F]">
                  {c.label}
                </span>

                <span className="flex items-center gap-2 text-[#171717] group-hover:text-[#D94A3A] transition-colors">
                  {c.value}
                  <span aria-hidden="true">↗</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}