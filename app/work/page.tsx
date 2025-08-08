"use client"

import { Breadcrumb } from "@/components/breadcrumb"
import { ProjectCard } from "@/components/project-card"
import { AnimatedSection } from "@/components/animated-section"
import { LiquidGlassShortcuts } from "@/components/liquid-glass-shortcuts"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Briefcase, X } from "lucide-react"
import { getAllProjects, getAllCategories } from "@/lib/projects"
import { useState, useMemo } from "react"
import { motion, AnimatePresence, LayoutGroup } from "framer-motion"

export default function WorkPage() {
  const projects = getAllProjects()
  const allCategories = getAllCategories()
  
  const [selectedCategory, setSelectedCategory] = useState<string>("all")

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projects
    
    return projects.filter((project) => project.category === selectedCategory)
  }, [projects, selectedCategory])

  const clearFilters = () => {
    setSelectedCategory("all")
  }

  const hasActiveFilters = selectedCategory !== "all"

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <Breadcrumb currentPage="Work" />

      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="mb-12">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">/work</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              exploring the intersection of design, technology, and human-centered solutions
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Category Filters */}
        <AnimatedSection animation="fade-up" delay={200}>
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-sm font-medium text-muted-foreground">Filter by:</span>
              
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  onClick={clearFilters}
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                >
                  <X className="w-4 h-4" />
                  Clear filters
                </Button>
              )}
            </div>

            {/* Category Filter Options */}
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedCategory === "all" ? "default" : "outline"}
                className={`cursor-pointer transition-all ${
                  selectedCategory === "all"
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-primary/10 hover:text-primary"
                }`}
                onClick={() => setSelectedCategory("all")}
              >
                All Projects
              </Badge>
              {allCategories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer transition-all ${
                    selectedCategory === category
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-primary/10 hover:text-primary"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Results Count */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Display */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <LayoutGroup>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -50 }}
                      transition={{ 
                        duration: 0.5, 
                        delay: index * 0.1,
                        type: "spring",
                        stiffness: 100
                      }}
                      whileHover={{ 
                        y: -8,
                        transition: { duration: 0.2 }
                      }}
                    >
                      <ProjectCard
                        title={project.title}
                        category={project.category}
                        image={project.coverImage}
                        slug={project.slug}
                        tags={project.tags}
                        duration={project.duration}
                        role={project.role}
                        shortDescription={project.shortDescription}
                      />
                    </motion.div>
                  ))}
                </div>
              </LayoutGroup>
            </motion.div>
          ) : (
            <AnimatedSection animation="fade-up">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-12 text-center">
                  <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your filter criteria
                  </p>
                  <Button onClick={clearFilters} variant="outline">
                    Clear all filters
                  </Button>
                </CardContent>
              </Card>
            </AnimatedSection>
          )}
        </AnimatePresence>
      </div>

      {/* Liquid Glass Shortcuts */}
      <LiquidGlassShortcuts />
    </main>
  )
}
