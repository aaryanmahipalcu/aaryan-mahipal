"use client"

import { useState, useEffect } from 'react'

interface TypingAnimationProps {
  texts: string[]
  speed?: number
  className?: string
}

export function TypingAnimation({ 
  texts, 
  speed = 100, 
  className = "" 
}: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayText, setDisplayText] = useState("")

  useEffect(() => {
    const currentText = texts[currentTextIndex]
    
    if (isDeleting) {
      // Deleting effect
      if (currentCharIndex > 0) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(prev => prev - 1)
          setDisplayText(currentText.slice(0, currentCharIndex - 1))
        }, speed / 2)
        return () => clearTimeout(timeout)
      } else {
        // Finished deleting, move to next text
        setIsDeleting(false)
        setCurrentTextIndex(prev => (prev + 1) % texts.length)
        setCurrentCharIndex(0)
      }
    } else {
      // Typing effect
      if (currentCharIndex < currentText.length) {
        const timeout = setTimeout(() => {
          setCurrentCharIndex(prev => prev + 1)
          setDisplayText(currentText.slice(0, currentCharIndex + 1))
        }, speed)
        return () => clearTimeout(timeout)
      } else {
        // Finished typing, wait then start deleting
        const timeout = setTimeout(() => {
          setIsDeleting(true)
        }, 2000) // Wait 2 seconds before deleting
        return () => clearTimeout(timeout)
      }
    }
  }, [currentTextIndex, currentCharIndex, isDeleting, texts, speed])

  return (
    <div className={`text-xl md:text-2xl text-muted-foreground h-12 flex items-center ${className}`}>
      i&apos;m a{" "}
      <span className="ml-2 text-accent font-semibold">
        {displayText}
        <span className="animate-pulse">|</span>
      </span>
    </div>
  )
} 