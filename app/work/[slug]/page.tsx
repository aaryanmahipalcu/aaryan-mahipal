"use client"

import Image from "next/image"
import { ExternalLink, Github, Calendar, Clock, User, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { getProjectBySlug } from "@/lib/projects"
import { notFound } from "next/navigation"
import { AnimatedSection } from "@/components/animated-section"
import { LiquidGlassShortcuts } from "@/components/liquid-glass-shortcuts"
import { Breadcrumb } from "@/components/breadcrumb"
import { ProjectTabs } from "@/components/project-tabs"
import { motion } from "framer-motion"
import Link from "next/link"

interface ProjectPageProps {
  params: {
    slug: string
  }
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = getProjectBySlug(params.slug)

  if (!project) {
    notFound()
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
        </AnimatedSection>

        {/* Cover Image and Action Buttons */}
        <AnimatedSection animation="fade-up" delay={100}>
          <div className="mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
              {/* Cover Image */}
              <div className="lg:col-span-2">
                <div className="relative h-96 md:h-[500px] w-full overflow-hidden rounded-xl">
                  <Image
                    src={project.coverImage}
                    alt={project.title}
                    fill
                    className="object-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                </div>
              </div>

              {/* Action Buttons Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-8 space-y-4">
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
                        {project.documentsUrl && (
                          <Button asChild variant="outline" className="w-full">
                            <a href={project.documentsUrl} target="_blank" rel="noopener noreferrer">
                              <FileText className="w-4 h-4 mr-2" />
                              View Project Document
                            </a>
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>

                  {/* Quick Project Info */}
                  <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-bold mb-4">Project Info</h3>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <User className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Role</p>
                            <p className="font-semibold">{project.role}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <Clock className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Duration</p>
                            <p className="font-semibold">{project.duration}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                            <Calendar className="w-4 h-4 text-primary" />
                          </div>
                          <div>
                            <p className="text-sm text-muted-foreground">Timeline</p>
                            <p className="font-semibold">{project.timeline}</p>
                          </div>
                        </div>
                        {project.teammates && project.teammates.length > 0 && (
                          <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center mt-1">
                              <User className="w-4 h-4 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm text-muted-foreground">Teammates</p>
                              <div className="flex flex-wrap gap-1 mt-1">
                                {project.teammates.map((teammate, index) => (
                                  <span key={index} className="text-xs bg-muted px-2 py-1 rounded-md">
                                    {teammate}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Project Content with Tabs */}
        <div className="max-w-6xl mx-auto">
          <AnimatedSection animation="fade-up" delay={200}>
            <ProjectTabs
              description={project.description}
              features={project.features}
              recognition={project.recognition}
              images={project.images}
              technologies={project.technologies}
              tools={project.tools}
              tags={project.tags}
              teammates={project.teammates}
            />
          </AnimatedSection>
        </div>

        {/* Back to Projects */}
        <AnimatedSection animation="fade-up" delay={400}>
          <div className="mt-8 text-center">
            <Button asChild variant="ghost">
              <Link href="/work">
                ← Back to Projects
              </Link>
            </Button>
          </div>
        </AnimatedSection>
      </div>

      {/* Liquid Glass Shortcuts */}
      <LiquidGlassShortcuts />
    </main>
  )
}
