import Image from "next/image"
import { Section } from "./section"
import { siteConfig } from "@/lib/content"

export function DownloadSection() {
  return (
    <Section id="download">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Download {siteConfig.appName}
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          {siteConfig.availabilityNote}
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          {/* App Store Button */}
          <a
            href={siteConfig.storeLinks.appStore}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full max-w-[260px] rounded-xl border border-border bg-secondary px-6 py-3 transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:max-w-[280px]"
            aria-label="Download on the App Store"
          >
            <Image
              src="/images/appstore.png"
              alt="Download on the App Store"
              width={240}
              height={80}
              className="w-full h-auto"
              priority
            />
          </a>

          {/* Google Play Button */}
          <a
            href={siteConfig.storeLinks.playStore}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full max-w-[260px] rounded-xl border border-border bg-secondary px-6 py-3 transition-all hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 sm:max-w-[280px]"
            aria-label="Get it on Google Play"
          >
            <Image
              src="/images/playstore.png"
              alt="Get it on Google Play"
              width={240}
              height={80}
              className="w-full h-auto"
              priority
            />
          </a>
        </div>
      </div>
    </Section>
  )
}
