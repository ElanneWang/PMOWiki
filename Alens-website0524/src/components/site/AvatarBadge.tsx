import { cn } from "@/lib/utils";

interface AvatarBadgeProps {
  name: string;
  className?: string;
}

function getInitials(name: string): string {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}

export function AvatarBadge({ name, className }: AvatarBadgeProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "flex items-center justify-center rounded-full bg-primary/15 text-sm font-semibold text-foreground",
        className,
      )}
    >
      {getInitials(name)}
    </div>
  );
}
