import { reviews } from "@/lib/content"
import { TestimonialCard } from "./testimonial-card"

export function TestimonialsSection() {
  return (
    <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {reviews.map((review, index) => (
        <TestimonialCard key={index} name={review.name} rating={review.rating} quote={review.quote} />
      ))}
    </div>
  )
}
