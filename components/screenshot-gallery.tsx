"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { screenshots } from "@/lib/content"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function ScreenshotGallery() {
  const [activeIndex, setActiveIndex] = useState(0)

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? screenshots.length - 1 : prev - 1))
  }

  const goToNext = () => {
    setActiveIndex((prev) => (prev === screenshots.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative">
      {/* Mobile Carousel */}
      <div className="lg:hidden">
        <div className="relative aspect-[9/18] max-w-[280px] mx-auto overflow-hidden rounded-3xl border border-border bg-muted shadow-2xl">
          <Image
            src={screenshots[activeIndex].src || "/placeholder.svg"}
            alt={screenshots[activeIndex].alt}
            fill
            className="object-cover"
            sizes="280px"
            priority
          />
        </div>

        {/* Navigation arrows */}
        <div className="mt-4 flex items-center justify-center gap-4">
          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full bg-transparent"
            onClick={goToPrevious}
            aria-label="Previous screenshot"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>

          {/* Dots indicator */}
          <div className="flex gap-2" role="tablist" aria-label="Screenshot gallery">
            {screenshots.map((_, index) => (
              <button
                key={index}
                role="tab"
                aria-selected={index === activeIndex}
                aria-label={`Go to screenshot ${index + 1}`}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "h-2 w-2 rounded-full transition-all",
                  index === activeIndex ? "bg-primary w-6" : "bg-border hover:bg-muted-foreground",
                )}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="h-10 w-10 rounded-full bg-transparent"
            onClick={goToNext}
            aria-label="Next screenshot"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden lg:grid lg:grid-cols-2 lg:gap-4">
        {screenshots.map((screenshot, index) => (
          <div
            key={index}
            className={cn(
              "relative aspect-[9/18] overflow-hidden rounded-2xl border border-border bg-muted shadow-lg transition-transform hover:scale-[1.02]",
              index === 0 && "lg:col-span-1 lg:row-span-1",
            )}
          >
            <Image
              src={screenshot.src || "/placeholder.svg"}
              alt={screenshot.alt}
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 200px, 280px"
              priority={index < 2}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
