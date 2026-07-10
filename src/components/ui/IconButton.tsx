import type React from "react";

interface IconButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

const IconButton: React.FC<IconButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
}) => {
  const variantClasses =
    variant === "primary"
      ? "bg-primary text-on-primary"
      : "bg-surface-container-low text-on-surface border border-outline-variant";

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center rounded-full px-6 py-3 font-label text-sm font-semibold transition-colors ${variantClasses} ${className}`}
    >
      {children}
    </button>
  );
};

export default IconButton;
