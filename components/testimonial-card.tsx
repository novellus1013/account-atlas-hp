import { Star } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface TestimonialCardProps {
  name: string
  rating: number
  quote: string
}

export function TestimonialCard({ name, rating, quote }: TestimonialCardProps) {
  return (
    <Card className="border-border bg-background">
      <CardContent className="p-6">
        {/* Star rating */}
        <div className="flex gap-0.5" role="img" aria-label={`${rating} out of 5 stars`}>
          {Array.from({ length: 5 }).map((_, index) => (
            <Star
              key={index}
              className={`h-4 w-4 ${index < rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
              aria-hidden="true"
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="mt-4">
          <p className="text-sm leading-relaxed text-muted-foreground">&ldquo;{quote}&rdquo;</p>
        </blockquote>

        {/* Name */}
        <p className="mt-4 text-sm font-semibold text-foreground">{name}</p>
      </CardContent>
    </Card>
  )
}
