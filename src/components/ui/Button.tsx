import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  onClick,
}: ButtonProps) {
  const variantClasses = {
    primary: "bg-primary text-on-primary hover:bg-primary/90",
    secondary:
      "bg-surface-container-low text-on-surface border border-outline-variant hover:bg-surface-container",
    outline:
      "bg-transparent text-on-surface border border-outline-variant hover:bg-surface-container-low",
  };

  const sizeClasses = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-3 text-sm",
  };

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-md font-label font-semibold transition-colors ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
    >
      {children}
    </button>
  );
}
