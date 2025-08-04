"use client"

import { useState, useEffect } from "react"
import { Info, X } from "lucide-react"

export function LiquidGlassShortcuts() {
  const [isVisible, setIsVisible] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)

  useEffect(() => {
    // Show tips after a brief delay
    const timer = setTimeout(() => setIsVisible(true), 1000)
    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Cmd+H to go home
      if ((event.metaKey || event.ctrlKey) && event.key === "h") {
        event.preventDefault()
        window.location.href = "/"
      }
      // Esc to go back to previous page on the same site
      if (event.key === "Escape") {
        event.preventDefault()
        
        const currentPath = window.location.pathname
        
        // Smart navigation based on current page
        if (currentPath.startsWith('/work/') && currentPath !== '/work/') {
          // If on a project page, go back to work page
          window.location.href = "/work"
        } else if (currentPath !== '/') {
          // If on any other subpage, go back to home
          window.location.href = "/"
        }
        // If already on home, do nothing
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed top-4 right-4 z-50">
      {isCollapsed ? (
        // Collapsed info bubble
        <button
          onClick={() => setIsCollapsed(false)}
          className="w-8 h-8 bg-white/90 backdrop-blur-sm border border-gray-200 rounded-full shadow-sm flex items-center justify-center hover:bg-white transition-colors"
        >
          <Info className="w-4 h-4 text-gray-600" />
        </button>
      ) : (
        // Expanded tips
        <div className="bg-white/90 backdrop-blur-sm border border-gray-200 rounded-lg px-4 py-3 shadow-sm max-w-xs">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-sm font-medium text-gray-800">Navigation Tips</h3>
            <button
              onClick={() => setIsCollapsed(true)}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="space-y-2 text-xs text-gray-600">
            <p>Press <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs font-mono">⌘ + H</kbd> to go home</p>
            <p>Press <kbd className="px-1 py-0.5 bg-gray-100 rounded text-xs font-mono">Esc</kbd> to go back</p>
          </div>
        </div>
      )}
    </div>
  )
} 