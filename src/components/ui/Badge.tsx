interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "tertiary";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  const variantClasses =
    variant === "tertiary"
      ? "bg-tertiary-container text-on-tertiary-container"
      : "bg-secondary-container text-on-secondary-container";

  return (
    <span
      className={`inline-flex items-center rounded px-3 py-1 text-xs font-label font-bold uppercase ${variantClasses} ${className}`}
    >
      {children}
    </span>
  );
}
