"use client"

import Image from "next/image"
import { ExternalLink, Github, Calendar, Clock, User, ArrowLeft, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getProjectBySlug } from "@/lib/projects"
import { notFound } from "next/navigation"
import { EnhancedScrollIndicator } from "@/components/enhanced-scroll-indicator"
import { AnimatedSection } from "@/components/animated-section"
import { LiquidGlassShortcuts } from "@/components/liquid-glass-shortcuts"
import { Breadcrumb } from "@/components/breadcrumb"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!project) {
    notFound()
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project.images.length - 1 ? 0 : prev + 1
    )
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project.images.length - 1 : prev - 1
    )
  }

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <Breadcrumb currentPage={project.title} />

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        {/* Project Header */}
        <AnimatedSection animation="fade-up" className="mb-12">
          <div className="text-center mb-8">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {project.title}
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {project.shortDescription}
            </motion.p>
          </div>

          {/* Project Meta */}
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm mb-8">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Role</p>
                    <p className="font-semibold">{project.role}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-semibold">{project.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Calendar className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Timeline</p>
                    <p className="font-semibold">{project.timeline}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Project Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Carousel */}
            {project.images.length > 0 && (
              <AnimatedSection animation="fade-up" delay={100}>
                <Card className="bg-card/50 border-border/50 backdrop-blur-sm overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative h-96 md:h-[500px] w-full">
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={currentImageIndex}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                          className="relative h-full w-full"
                        >
                          <Image
                            src={project.images[currentImageIndex].url}
                            alt={project.images[currentImageIndex].caption || project.title}
                            fill
                            className="object-cover"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                          
                          {/* Image Caption */}
                          {project.images[currentImageIndex].caption && (
                            <div className="absolute bottom-4 left-4 right-4">
                              <p className="text-white text-sm font-medium">
                                {project.images[currentImageIndex].caption}
                              </p>
                            </div>
                          )}
                        </motion.div>
                      </AnimatePresence>

                      {/* Navigation Arrows */}
                      {project.images.length > 1 && (
                        <>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={prevImage}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-0"
                          >
                            <ArrowLeft className="w-4 h-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={nextImage}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/20 hover:bg-black/40 text-white border-0"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </Button>
                        </>
                      )}
                    </div>

                    {/* Image Thumbnails */}
                    {project.images.length > 1 && (
                      <div className="p-4 bg-background/50">
                        <div className="flex gap-2 overflow-x-auto">
                          {project.images.map((image, index) => (
                            <button
                              key={index}
                              onClick={() => goToImage(index)}
                              className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                                index === currentImageIndex
                                  ? "border-primary"
                                  : "border-border hover:border-primary/50"
                              }`}
                            >
                              <Image
                                src={image.url}
                                alt={image.caption || `Image ${index + 1}`}
                                width={64}
                                height={64}
                                className="object-cover w-full h-full"
                              />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </AnimatedSection>
            )}

            {/* Project Overview */}
            <AnimatedSection animation="fade-up" delay={200}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Project Overview</h2>
                  <div className="space-y-4 text-muted-foreground leading-relaxed">
                    {project.description.map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Key Features */}
            <AnimatedSection animation="fade-up" delay={300}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold mb-6">Key Features</h2>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Technologies */}
            <AnimatedSection animation="fade-up" delay={400}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="secondary" className="bg-primary/10 text-primary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Tools */}
            <AnimatedSection animation="fade-up" delay={500}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, index) => (
                      <Badge key={index} variant="outline" className="border-border/50">
                        {tool}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Tags */}
            <AnimatedSection animation="fade-up" delay={600}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <Badge key={index} variant="outline" className="border-primary/30 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Project Links */}
            <AnimatedSection animation="fade-up" delay={700}>
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold mb-4">Project Links</h3>
                  <div className="space-y-3">
                    {project.liveUrl && (
                      <Button asChild className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90">
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Live Project
                        </a>
                      </Button>
                    )}
                    {project.githubUrl && (
                      <Button asChild variant="outline" className="w-full">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" />
                          View Source Code
                        </a>
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Back to Projects */}
            <AnimatedSection animation="fade-up" delay={800}>
              <Button asChild variant="ghost" className="w-full">
                <Link href="/work">
                  ← Back to Projects
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Liquid Glass Shortcuts */}
      <LiquidGlassShortcuts />
    </main>
  )
}
