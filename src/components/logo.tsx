import { Briefcase } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/dashboard"
      className={cn(
        "flex items-center gap-2 text-foreground transition-colors hover:text-primary",
        className
      )}
    >
      <Briefcase className="h-7 w-7 text-primary" />
      <span className="text-xl font-bold font-headline">
        Reddittasks
      </span>
    </Link>
  );
}
