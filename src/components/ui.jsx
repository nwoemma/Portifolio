export function Eyebrow({ children, className = "" }) {
  return (
    <p
      className={`font-mono text-xs uppercase tracking-widest text-[#D94A3A] ${className}`}
    >
      {children}
    </p>
  );
}

export function SectionHeading({
  eyebrow,
  heading,
  subheading,
  className = "",
}) {
  return (
    <div className={`mb-14 ${className}`}>
      <Eyebrow className="mb-4">{eyebrow}</Eyebrow>

      <h2 className="text-3xl sm:text-4xl font-extrabold text-[#171717] tracking-tight leading-tight max-w-3xl">
        {heading}
      </h2>

      {subheading && (
        <p className="text-[#68665F] mt-4 max-w-2xl">
          {subheading}
        </p>
      )}
    </div>
  );
}

export function Button({ label, href, variant = "primary" }) {
  const isExternal = href?.startsWith("http");

  const base =
    "inline-flex items-center gap-1.5 font-semibold rounded-md transition-colors";

  const styles = {
    primary:
      "bg-[#D94A3A] text-white hover:bg-[#A93429] px-6 py-3",

    link:
      "text-[#68665F] hover:text-[#D94A3A] px-0 py-3",
  };

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${base} ${styles[variant]}`}
    >
      {label}

      {variant === "link" && (
        <span aria-hidden="true">↗</span>
      )}
    </a>
  );
}

export function LinkArrow({ label, href, className = "" }) {
  const isExternal = href?.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center gap-1.5 text-sm text-[#171717] hover:text-[#D94A3A] transition-colors ${className}`}
    >
      {label}

      <span aria-hidden="true">↗</span>
    </a>
  );
}

export function Tag({ children }) {
  return (
    <span className="inline-block px-3 py-1.5 mr-2 mb-2 text-sm rounded-full border border-[#D5D1C6] bg-[#E8E5DC] text-[#68665F]">
      {children}
    </span>
  );
}

export function Card({
  children,
  className = "",
  highlight = false,
}) {
  return (
    <div
      className={`rounded-xl border p-6 transition-colors ${
        highlight
          ? "border-[#D94A3A]/40 bg-[#E8E5DC]"
          : "border-[#D5D1C6] bg-[#FAF9F5] hover:border-[#D94A3A]/50"
      } ${className}`}
    >
      {children}
    </div>
  );
}