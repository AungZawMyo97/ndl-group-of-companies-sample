interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  badge?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  title,
  subtitle,
  badge,
  align = "left",
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col gap-2 ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      {badge && (
        <span className="rounded-full bg-tertiary-container px-3 py-1 text-xs font-label font-medium uppercase tracking-wider text-on-tertiary-container">
          {badge}
        </span>
      )}
      <h2
        className="max-w-4xl font-headline text-4xl font-bold text-on-surface md:text-5xl"
      >
        {title}
      </h2>
      {subtitle && (
        <p className="font-body mt-4 max-w-3xl text-base leading-7 text-on-surface-variant md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
}
