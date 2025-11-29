import * as React from "react"
import { ChevronRight, Home } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

export function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("flex items-center space-x-2 text-sm", className)}
    >
      <ol className="flex items-center space-x-2">
        <li>
          <Link
            href="/"
            className="text-text-muted hover:text-primary transition-colors flex items-center"
          >
            <Home className="h-4 w-4" />
            <span className="sr-only">Ana Sayfa</span>
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight className="h-4 w-4 text-text-muted" />
            {item.href && index < items.length - 1 ? (
              <Link
                href={item.href}
                className="text-text-muted hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <span className="text-secondary font-medium">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}







