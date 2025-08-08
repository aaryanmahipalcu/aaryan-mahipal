"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatePresence, motion } from "framer-motion"

interface ContentWithImagesProps {
  content: string
  images: string[]
  className?: string
}

export function ContentWithImages({ content, images, className = "" }: ContentWithImagesProps) {
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null)

  // Extract images from content
  const imgRegex = /<img[^>]+src="([^"]+)"/gi
  const extractedImages: string[] = []
  let match
  while ((match = imgRegex.exec(content)) !== null) {
    extractedImages.push(match[1])
  }

  // Combine extracted images with passed images
  const allImages = [...new Set([...extractedImages, ...images])]

  // Split content by image tags
  const contentParts = content.split(/(<img[^>]+>)/)

  return (
    <div className={`${className}`}>
      {contentParts.map((part, index) => {
        if (part.startsWith('<img')) {
          // Extract image src
          const imgMatch = part.match(/src="([^"]+)"/)
          if (imgMatch) {
            const imgSrc = imgMatch[1]
            return (
              <div key={index} className="my-6">
                <img
                  src={imgSrc}
                  alt={`Content image ${index}`}
                  className="w-full h-auto rounded-lg cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => setFullscreenImage(imgSrc)}
                />
              </div>
            )
          }
        } else if (part.trim()) {
          // Regular text content
          return (
            <div key={index} className="mb-4">
              <p className="text-base text-muted-foreground leading-relaxed">
                {part.trim()}
              </p>
            </div>
          )
        }
        return null
      })}

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {fullscreenImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={() => setFullscreenImage(null)}
          >
            <div className="relative max-w-7xl max-h-full p-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setFullscreenImage(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              >
                <X className="w-6 h-6" />
              </Button>
              
              <motion.img
                src={fullscreenImage}
                alt="Fullscreen image"
                className="max-w-full max-h-[90vh] object-contain"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 