import Link from "next/link"
import { siteConfig } from "@/lib/content"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-lg font-semibold text-foreground">{siteConfig.appName}</p>
            <p className="mt-1 text-sm text-muted-foreground">{siteConfig.copyright}</p>
          </div>

          <nav className="flex flex-wrap items-center justify-center gap-4 md:gap-6" aria-label="Footer navigation">
            <Link
              href="/privacy"
              className="text-sm text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:underline"
            >
              Terms & Conditions
            </Link>
            <a
              href={`mailto:${siteConfig.contactEmail}`}
              className="text-sm text-muted-foreground transition-colors hover:text-primary focus:outline-none focus:underline"
            >
              {siteConfig.contactEmail}
            </a>
          </nav>
        </div>
      </div>
    </footer>
  )
}
