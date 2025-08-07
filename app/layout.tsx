import type React from "react"
import type { Metadata } from "next"
import { JetBrains_Mono } from "next/font/google"
import "./globals.css"
import { ScrollProgressIndicator } from "@/components/scroll-progress-indicator"
import { AnimationProvider } from "@/contexts/animation-context"
import { ThemeProvider } from "@/contexts/theme-context"
import { FloatingChatButton } from "@/components/floating-chat-button"
import { getMetaInfo } from "@/lib/data"

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

const metaInfo = getMetaInfo()

export const metadata: Metadata = {
  title: metaInfo.title,
  description: metaInfo.description,
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${jetbrainsMono.variable} font-mono`}>
        <ThemeProvider>
          <AnimationProvider>
            <ScrollProgressIndicator />
            {children}
            <FloatingChatButton />
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
