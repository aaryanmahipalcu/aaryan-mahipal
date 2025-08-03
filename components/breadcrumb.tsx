"use client"

import { useEffect } from "react"
import Link from "next/link"
import { useRouter, usePathname } from "next/navigation"
import { ArrowLeft, Home, Keyboard } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"

interface BreadcrumbProps {
  currentPage: string
}

export function Breadcrumb({ currentPage }: BreadcrumbProps) {
  const router = useRouter()
  const pathname = usePathname()

  // Global keyboard shortcut handler
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Cmd+H (Mac) or Ctrl+H (Windows/Linux) to go home
      if ((event.metaKey || event.ctrlKey) && event.key === "h") {
        event.preventDefault()
        router.push("/")
      }

      // Escape key to go back
      if (event.key === "Escape") {
        event.preventDefault()
        router.back()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [router])

  // Don't show breadcrumb on home page
  if (pathname === "/") {
    return null
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
      <div className="container mx-auto px-4 py-3">
        <AnimatedSection animation="fade-in">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {/* Back Button */}
              <button
                onClick={() => router.back()}
                className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors group"
              >
                <ArrowLeft className="w-4 h-4 mr-2 transition-transform group-hover:-translate-x-1" />
                Back
              </button>

              {/* Breadcrumb */}
              <nav className="flex items-center text-sm">
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center"
                >
                  <Home className="w-4 h-4 mr-1" />
                  Home
                </Link>
                <span className="mx-2 text-muted-foreground">/</span>
                <span className="text-foreground font-medium">{currentPage}</span>
              </nav>
            </div>

            {/* Keyboard Shortcuts Hint */}
            <div className="hidden sm:flex items-center gap-4 text-xs text-muted-foreground">
              <div className="flex items-center gap-1">
                <Keyboard className="w-3 h-3" />
                <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">⌘H</kbd>
                <span>Home</span>
              </div>
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs">Esc</kbd>
                <span>Back</span>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  )
}
