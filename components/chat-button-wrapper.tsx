"use client"

import { usePathname } from "next/navigation"
import { FloatingChatButton } from "@/components/floating-chat-button"

export function ChatButtonWrapper() {
  const pathname = usePathname()
  
  // Don't show chat button on home page
  if (pathname === "/") {
    return null
  }
  
  return <FloatingChatButton />
} 