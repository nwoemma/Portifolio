export function LinkButton({ label, href, icon: Icon, disabled, variant = "primary", small = false }) {
  const base = `inline-flex items-center justify-center gap-2 font-semibold rounded-lg transition-all ${
    small ? "px-3 py-1.5 text-sm" : "px-7 py-3"
  }`;
  const styles = {
    primary:
      "bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/30",
    outline:
      "border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white hover:-translate-y-0.5",
  };

  if (disabled) {
    return (
      <span
        className={`${base} border-2 border-white/10 text-slate-500 cursor-not-allowed`}
        title="Link not available yet"
      >
        {Icon && <Icon size={small ? 14 : 16} />}
        {label}
      </span>
    );
  }

  return (
    <a
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className={`${base} ${styles[variant]}`}
    >
      {Icon && <Icon size={small ? 14 : 16} />}
      {label}
    </a>
  );
}

export function SkillBadge({ children }) {
  return (
    <span className="inline-block m-1 px-4 py-1.5 rounded-full text-sm border border-blue-500/30 bg-blue-500/10 text-blue-400 hover:bg-blue-500/25 hover:scale-105 transition-all">
      {children}
    </span>
  );
}

export function SkillBar({ name, level, color }) {
  return (
    <div className="mb-4">
      <h6 className="text-white mb-2 text-sm font-medium">{name}</h6>
      <div className="h-2 rounded-full bg-white/10 overflow-hidden">
        <div className={`h-full rounded-full ${color}`} style={{ width: `${level}%` }} />
      </div>
    </div>
  );
}

export function ContactIcon({ icon: Icon }) {
  return (
    <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 text-2xl mb-3 hover:bg-blue-500 hover:text-white hover:-translate-y-1 transition-all">
      <Icon size={24} />
    </div>
  );
}

export function SectionTitle({ children }) {
  return (
    <h2 className="relative inline-block text-3xl font-bold text-white mb-12 after:content-[''] after:absolute after:-bottom-2.5 after:left-0 after:w-14 after:h-1 after:rounded-full after:bg-gradient-to-r after:from-blue-500 after:to-purple-500">
      {children}
    </h2>
  );
}
