import type { ElementType } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { BarChart3, Link2, SlidersHorizontal, HelpCircle } from "lucide-react"

interface Feature {
  icon: string
  title: string
  bullets: string[]
}

interface FeaturesGridProps {
  features: Feature[]
  iconMap?: Record<string, ElementType> // ✅ optional
}

const defaultIconMap: Record<string, ElementType> = {
  home: BarChart3,
  link: Link2,
  filter: SlidersHorizontal,
}

export function FeaturesGrid({ features, iconMap }: FeaturesGridProps) {
  const mergedIconMap = { ...defaultIconMap, ...(iconMap ?? {}) }

  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {features.map((feature, index) => {
        const IconComponent = mergedIconMap[feature.icon] ?? HelpCircle

        return (
          <Card key={index} className="border-border bg-background transition-shadow hover:shadow-lg">
            <CardContent className="p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <IconComponent className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>

              <h4 className="mt-4 text-lg font-semibold text-foreground">{feature.title}</h4>

              <ul className="mt-3 space-y-2">
                {feature.bullets.map((bullet, bulletIndex) => (
                  <li key={bulletIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" aria-hidden="true" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}

