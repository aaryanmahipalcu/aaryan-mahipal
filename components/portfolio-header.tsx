"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { getNavItems, getPersonalInfo } from "@/lib/data"
import { ThemeToggle } from "@/components/theme-toggle"
import { usePathname } from "next/navigation"

export function PortfolioHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()

  const navItems = getNavItems()
  const personalInfo = getPersonalInfo()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const isActiveRoute = (href: string) => {
    if (href === "/") {
      return pathname === "/"
    }
    return pathname === href
  }

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4",
        scrolled ? "bg-background/80 backdrop-blur-md shadow-sm border-b border-border/50 py-2" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo/Name */}
        <Link href="/" className="flex items-center group">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary font-bold text-xl relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
            {personalInfo.name}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary transition-all duration-300 group-hover:w-full"></span>
          </div>
          <span className="text-muted-foreground text-sm ml-2 hidden sm:inline-block transition-all duration-300 group-hover:text-foreground">
            / {personalInfo.title}
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => {
            const isActive = isActiveRoute(item.href)

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-3 py-2 text-sm relative group transition-all duration-300 rounded-md",
                  isActive
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent",
                )}
              >
                <span className="relative z-10">{item.label}</span>
              </Link>
            )
          })}
          <ThemeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-muted-foreground hover:text-foreground transition-colors duration-300 relative overflow-hidden group"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span className="relative z-10">{mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}</span>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col pt-20 px-4 md:hidden transition-all duration-500",
          mobileMenuOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full pointer-events-none",
        )}
      >
        <nav className="flex flex-col space-y-4">
          {navItems.map((item, index) => {
            const isActive = isActiveRoute(item.href)

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-3 py-4 text-lg border-b border-border relative group transition-all duration-300 rounded-md",
                  isActive
                    ? "text-primary bg-primary/10 border-primary/30"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent",
                )}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  transform: mobileMenuOpen ? "translateX(0)" : "translateX(20px)",
                  opacity: mobileMenuOpen ? 1 : 0,
                }}
              >
                <span className="relative z-10">{item.label}</span>
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
