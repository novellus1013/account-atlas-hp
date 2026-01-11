import type { ReactNode } from "react"
import { cn } from "@/lib/utils"

interface SectionProps {
  id?: string
  className?: string
  children: ReactNode
  background?: "default" | "muted"
}

export function Section({ id, className, children, background = "default" }: SectionProps) {
  return (
    <section id={id} className={cn("py-16 sm:py-20 lg:py-24", background === "muted" && "bg-muted/30", className)}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  )
}
