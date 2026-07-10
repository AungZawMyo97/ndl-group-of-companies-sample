import type { ReactNode } from "react";
import { Card } from "./Card";
import { Badge } from "./Badge";

interface CompanyCardProps {
  icon: ReactNode;
  badge: string;
  badgeVariant?: "default" | "tertiary";
  title: string;
  description: string;
  established: string;
  profileLabel?: string;
  onProfileClick?: () => void;
  className?: string;
}

export function CompanyCard({
  icon,
  badge,
  badgeVariant = "default",
  title,
  description,
  established,
  profileLabel = "Profile \u2192",
  onProfileClick,
  className = "",
}: CompanyCardProps) {
  return (
    <Card hover className={className}>
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-container">
            {icon}
          </div>
          <Badge variant={badgeVariant}>{badge}</Badge>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-headline text-xl font-semibold text-on-surface">
            {title}
          </h3>
          <p className="font-body text-sm leading-6 text-on-surface-variant">{description}</p>
        </div>

        <div className="flex items-center justify-between border-t border-outline-variant pt-4">
          <span className="font-label text-xs text-on-surface-variant">
            Est. {established}
          </span>
          <button
            onClick={onProfileClick}
            className="font-label text-sm font-bold text-primary transition-colors hover:text-on-surface"
          >
            {profileLabel}
          </button>
        </div>
      </div>
    </Card>
  );
}
