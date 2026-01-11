import type { ElementType } from "react"
import { CheckCircle2, BarChart3, Link2, SlidersHorizontal } from "lucide-react"
import { Section } from "./section"
import { aboutContent, features } from "@/lib/content"
import { FeaturesGrid } from "./features-grid"
import { TestimonialsSection } from "./testimonials-section"
import { FaqAccordion } from "./faq-accordion"

const iconMap: Record<string, ElementType> = {
  home: BarChart3,
  link: Link2,
  filter: SlidersHorizontal,
}

export function AboutSection() {
  return (
    <Section id="about" background="muted">
      {/* Introduction */}
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          {aboutContent.intro.title}
        </h2>

        {/* ✅ 설명: 가운데 정렬 + 읽기 좋은 폭 */}
        <div className="mx-auto mt-6 max-w-[68ch] space-y-4 text-lg leading-8 text-muted-foreground">
          {aboutContent.intro.description.map((p, i) => (
            <p key={i} className="text-balance">
              {p}
            </p>
          ))}
        </div>

        {/* ✅ Highlights: w-fit 블록을 가운데로 배치해서 ‘왼쪽 쏠림’ 제거 */}
        <div className="mx-auto mt-10 w-fit">
          <ul className="space-y-4 text-left">
            {aboutContent.intro.highlights.map((highlight, index) => (
              <li key={index} className="flex items-center gap-3">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                {/* ✅ 글자 크기 키우기 */}
                <span className="text-base font-semibold text-foreground sm:text-lg">
                  {highlight}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Features */}
      <div className="mt-20">
        <h3 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Key Features</h3>
        <FeaturesGrid features={features} iconMap={iconMap} />
      </div>

      {/* Testimonials */}
      <div className="mt-20">
        <h3 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          What Our Users Say
        </h3>
        <TestimonialsSection />
      </div>

      {/* FAQ */}
      <div className="mt-20">
        <h3 className="text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Frequently Asked Questions
        </h3>
        <div className="mx-auto mt-10 max-w-3xl">
          <FaqAccordion />
        </div>
      </div>
    </Section>
  )
}

