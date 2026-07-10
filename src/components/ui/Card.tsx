import { forwardRef } from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ children, className = "", hover = false }, ref) => {
    const baseClasses =
      "bg-surface-container-lowest border border-outline-variant rounded-lg p-6";
    const hoverClasses = hover
      ? "hover:border-primary transition-all duration-300 cursor-pointer group"
      : "";

    return (
      <div ref={ref} className={`${baseClasses} ${hoverClasses} ${className}`}>
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";
