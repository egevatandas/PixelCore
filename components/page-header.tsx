"use client"

import Link from "next/link"
import { Home, ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface PageHeaderProps {
  title: string
  breadcrumbs: BreadcrumbItem[]
}

export default function PageHeader({ title, breadcrumbs }: PageHeaderProps) {
  return (
    <div 
      className="bg-primary text-white relative" 
      style={{ 
        marginTop: 0,
        zIndex: 40
      }}
    >
      <div className="container mx-auto px-4 pt-[129px] pb-12 md:pb-16">
        <div className="max-w-4xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center space-x-2 flex-wrap">
              <li>
                <Link
                  href="/"
                  className="text-white/80 hover:text-white transition-colors flex items-center"
                >
                  <Home className="h-4 w-4" />
                  <span className="sr-only">Ana Sayfa</span>
                </Link>
              </li>
              {breadcrumbs.map((item, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <ChevronRight className="h-4 w-4 text-white/60" />
                  {item.href && index < breadcrumbs.length - 1 ? (
                    <Link
                      href={item.href}
                      className="text-white/80 hover:text-white transition-colors text-sm md:text-base"
                    >
                      {item.label}
                    </Link>
                  ) : (
                    <span className="text-white font-medium text-sm md:text-base">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </nav>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {title}
          </h1>
        </div>
      </div>
    </div>
  )
}

