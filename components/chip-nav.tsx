"use client"

import type React from "react"

import Link from "next/link"
import { cn } from "@/lib/utils"

interface NavItem {
  label: string
  href: string
}

interface ChipNavProps {
  items: NavItem[]
  className?: string
}

export function ChipNav({ items, className }: ChipNavProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === "#top") {
      e.preventDefault()
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <ul className={cn("flex items-center gap-2", className)}>
      {items.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className="inline-flex items-center rounded-full border border-primary/20 bg-background px-4 py-1.5 text-sm font-medium text-foreground transition-all hover:bg-primary hover:text-primary-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  )
}
