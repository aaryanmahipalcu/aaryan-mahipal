"use client"

import { useState } from "react"
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
          >
            {/* Instagram-style Gallery */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {images.map((image, index) => (
                <motion.div
                  key={index}
                  className="group relative aspect-square overflow-hidden rounded-lg bg-muted cursor-pointer"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => openImage(index)}
                >
                  <img
                    src={image.url}
                    alt={image.caption || `Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />
                  
                  {/* Caption */}
                  {image.caption && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <p className="text-white text-sm font-medium">{image.caption}</p>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
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
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
            onClick={closeImage}
          >
            <div className="relative max-w-7xl max-h-full p-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={closeImage}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white"
              >
                <X className="w-6 h-6" />
              </Button>
              
              <motion.img
                key={currentImageIndex}
                src={images[currentImageIndex].url}
                alt={images[currentImageIndex].caption || `Gallery image ${currentImageIndex + 1}`}
                className="max-w-full max-h-[90vh] object-contain"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Image Caption */}
              {images[currentImageIndex].caption && (
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <p className="text-white text-lg font-medium bg-black/50 px-4 py-2 rounded-lg">
                    {images[currentImageIndex].caption}
                  </p>
                </div>
              )}
              
              {/* Navigation Arrows */}
              {images.length > 1 && (
                <>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      prevImage()
                    }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  >
                    <ChevronLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={(e) => {
                      e.stopPropagation()
                      nextImage()
                    }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white"
                  >
                    <ChevronRight className="w-6 h-6" />
                  </Button>
                </>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 