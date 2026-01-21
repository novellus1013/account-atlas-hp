import Link from "next/link"
import { heroContent } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { ScreenshotGallery } from "./screenshot-gallery"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background py-16 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {heroContent.headline}
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground lg:mx-0">
              {heroContent.subheadline}
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="#download">{heroContent.primaryCta}</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground bg-transparent"
              >
                <Link href="#about">{heroContent.secondaryCta}</Link>
              </Button>
            </div>
          </div>

          {/* Screenshot Gallery */}
          <div className="relative">
            <ScreenshotGallery />
          </div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute -top-40 right-0 -z-10 h-96 w-96 rounded-full bg-primary/5 blur-3xl" aria-hidden="true" />
    </section>
  )
}
