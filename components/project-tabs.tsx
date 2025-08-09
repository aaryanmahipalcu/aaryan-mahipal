"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { ProjectGalleryImage } from "@/lib/projects"

interface ProjectTabsProps {
  description: string[]
  features: string[]
  recognition?: string[]
  images: ProjectGalleryImage[]
  technologies: string[]
  tools: string[]
  tags: string[]
  teammates?: string[]
}

export function ProjectTabs({ description, features, recognition, images, technologies, tools, tags, teammates }: ProjectTabsProps) {
  const [activeTab, setActiveTab] = useState<'description' | 'gallery'>('description')
  const [selectedImage, setSelectedImage] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    if (selectedImage !== null) {
      setCurrentImageIndex((prev) => (prev + 1) % images.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
    }
  }

  const openImage = (index: number) => {
    setSelectedImage(index)
    setCurrentImageIndex(index)
  }

  const closeImage = () => {
    setSelectedImage(null)
  }

  // Keyboard navigation
  useEffect(() => {
    if (selectedImage === null) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeImage()
      } else if (e.key === 'ArrowLeft') {
        prevImage()
      } else if (e.key === 'ArrowRight') {
        nextImage()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [selectedImage, images.length])

  return (
    <div className="space-y-8">
      {/* Tab Navigation */}
      <div className="flex border-b border-border/50">
        <button
          onClick={() => setActiveTab('description')}
          className={`px-6 py-3 font-medium transition-all duration-300 ${
            activeTab === 'description'
              ? 'text-primary border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab('gallery')}
          className={`px-6 py-3 font-medium transition-all duration-300 ${
            activeTab === 'gallery'
              ? 'text-primary border-b-2 border-primary'
              : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Gallery
        </button>
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        {activeTab === 'description' && (
          <motion.div
            key="description"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {/* Project Overview */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                {description.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>

            {/* Technologies and Tools */}
            <section>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Technologies */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Tools */}
                <div>
                  <h3 className="text-lg font-bold mb-4">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {tools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="border-border/50">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </section>

            {/* Key Features */}
            <section>
              <h2 className="text-2xl font-bold mb-6">Key Features</h2>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Recognition */}
            {recognition && recognition.length > 0 && (
              <section>
                <h2 className="text-2xl font-bold mb-6">Recognition</h2>
                <ul className="space-y-3">
                  {recognition.map((recognition, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-muted-foreground">{recognition}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            {/* Tags */}
            <section>
              <h3 className="text-lg font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-primary/30 text-primary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </section>
          </motion.div>
        )}

        {activeTab === 'gallery' && (
          <motion.div
            key="gallery"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="space-y-12"
          >
            {images.length === 0 ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 mx-auto mb-4 bg-muted rounded-full flex items-center justify-center">
                  <span className="text-2xl">📷</span>
                </div>
                <p className="text-muted-foreground">No images available for this project</p>
              </div>
            ) : (
              images.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="space-y-4"
                >
                  {/* Media Container */}
                  <div className="bg-white dark:bg-gray-900 rounded-xl shadow-lg border border-border/50 overflow-hidden">
                    <div className="p-2">
                      {image.url.endsWith('.mov') || image.url.endsWith('.mp4') || image.url.endsWith('.webm') ? (
                        <video
                          src={image.url}
                          controls
                          className="w-full h-auto rounded-lg"
                          preload="metadata"
                        >
                          Your browser does not support the video tag.
                        </video>
                      ) : (
                        <img
                          src={image.url}
                          alt={image.caption || `Gallery image ${index + 1}`}
                          className="w-full h-auto object-contain rounded-lg cursor-pointer hover:scale-[1.02] transition-transform duration-300"
                          onClick={() => openImage(index)}
                        />
                      )}
                    </div>
                  </div>
                  
                  {/* Caption */}
                  {image.caption && (
                    <div className="bg-muted/30 rounded-lg p-4 border border-border/30">
                      <p className="text-foreground leading-relaxed font-medium">
                        {image.caption}
                      </p>
                      <div className="mt-3 pt-3 border-t border-border/20">
                        <span className="text-xs text-muted-foreground">
                          Image {index + 1} of {images.length}
                        </span>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-white/95 backdrop-blur-md"
            onClick={closeImage}
          >
            {/* Close Button - Fixed Position */}
            <Button
              variant="ghost"
              size="icon"
              onClick={closeImage}
              className="absolute top-4 right-4 z-20 bg-gray-100/80 hover:bg-gray-200/80 text-gray-700 backdrop-blur-sm shadow-sm"
            >
              <X className="w-5 h-5" />
            </Button>

            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute top-4 left-4 z-20 bg-gray-100/80 text-gray-700 text-sm px-3 py-1 rounded-full backdrop-blur-sm shadow-sm">
                {currentImageIndex + 1} of {images.length}
              </div>
            )}

            {/* Main Content Container */}
            <div className="h-full flex flex-col p-4 md:p-8">
              {/* Media Container - Dynamic sizing */}
              <div className="flex-1 flex items-center justify-center min-h-0">
                <motion.div
                  key={currentImageIndex}
                  className="relative max-w-full max-h-full"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  {images[currentImageIndex].url.endsWith('.mov') || images[currentImageIndex].url.endsWith('.mp4') || images[currentImageIndex].url.endsWith('.webm') ? (
                    <video
                      src={images[currentImageIndex].url}
                      controls
                      className="max-w-[95vw] max-h-[85vh] shadow-2xl rounded-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={images[currentImageIndex].url}
                      alt={images[currentImageIndex].caption || `Gallery image ${currentImageIndex + 1}`}
                      className="max-w-[95vw] max-h-[85vh] object-contain shadow-2xl rounded-lg"
                      onClick={(e) => e.stopPropagation()}
                    />
                  )}
                  
                  {/* Navigation Arrows on Media */}
                  {images.length > 1 && (
                    <>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation()
                          prevImage()
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 shadow-lg backdrop-blur-sm"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={(e) => {
                          e.stopPropagation()
                          nextImage()
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-700 shadow-lg backdrop-blur-sm"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </Button>
                    </>
                  )}
                </motion.div>
              </div>

              {/* Caption Bar */}
              {images[currentImageIndex].caption && (
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="mt-6 bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg border border-gray-200/50"
                >
                  <p className="text-gray-800 text-center font-medium leading-relaxed">
                    {images[currentImageIndex].caption}
                  </p>
                  {images.length > 1 && (
                    <p className="text-gray-500 text-xs text-center mt-2">
                      Use arrow keys or click arrows to navigate
                    </p>
                  )}
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 