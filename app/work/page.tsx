"use client"

import { Breadcrumb } from "@/components/breadcrumb"
import { ProjectCard } from "@/components/project-card"
import { AnimatedSection } from "@/components/animated-section"
import { LiquidGlassShortcuts } from "@/components/liquid-glass-shortcuts"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Briefcase, Search, Filter, X } from "lucide-react"
import { getAllProjects, getAllTags, getAllCategories } from "@/lib/projects"
import { useState, useMemo } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function WorkPage() {
  const projects = getAllProjects()
  const allTags = getAllTags()
  const allCategories = getAllCategories()
  
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [showFilters, setShowFilters] = useState(false)

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      
      const matchesCategory = selectedCategory === "all" || project.category === selectedCategory
      
      const matchesTags = selectedTags.length === 0 || 
                         selectedTags.some(tag => project.tags.includes(tag))
      
      return matchesSearch && matchesCategory && matchesTags
    })
  }, [projects, searchTerm, selectedCategory, selectedTags])

  const toggleTag = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    )
  }

  const clearFilters = () => {
    setSearchTerm("")
    setSelectedCategory("all")
    setSelectedTags([])
  }

  const hasActiveFilters = searchTerm || selectedCategory !== "all" || selectedTags.length > 0

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
          <div className="mb-12 text-center">
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">/work</span>
            </motion.h1>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              exploring the intersection of design, technology, and human-centered solutions
            </motion.p>
          </div>
        </AnimatedSection>

        {/* Search and Filters */}
        <AnimatedSection animation="fade-up" delay={200}>
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm mb-8">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-4 items-center">
                {/* Search */}
                <div className="relative flex-1 w-full lg:w-auto">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                  <Input
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>

                {/* Category Filter */}
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full lg:w-48">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {allCategories.map((category) => (
                      <SelectItem key={category} value={category}>
                        {category}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>

                {/* Filter Toggle */}
                <Button
                  variant="outline"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>

                {/* Clear Filters */}
                {hasActiveFilters && (
                  <Button
                    variant="ghost"
                    onClick={clearFilters}
                    className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4" />
                    Clear
                  </Button>
                )}
              </div>

              {/* Tags Filter */}
              <AnimatePresence>
                {showFilters && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pt-6 border-t border-border/50"
                  >
                    <div className="flex flex-wrap gap-2">
                      {allTags.map((tag) => (
                        <Badge
                          key={tag}
                          variant={selectedTags.includes(tag) ? "default" : "outline"}
                          className={`cursor-pointer transition-all ${
                            selectedTags.includes(tag)
                              ? "bg-primary text-primary-foreground"
                              : "hover:bg-primary/10 hover:text-primary"
                          }`}
                          onClick={() => toggleTag(tag)}
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </CardContent>
          </Card>
        </AnimatedSection>

        {/* Results Count */}
        <AnimatedSection animation="fade-up" delay={300}>
          <div className="mb-6">
            <p className="text-muted-foreground">
              Showing {filteredProjects.length} of {projects.length} projects
            </p>
          </div>
        </AnimatedSection>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          {filteredProjects.length > 0 ? (
            <motion.div
              key={`${searchTerm}-${selectedCategory}-${selectedTags.join(',')}`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <AnimatedSection 
                  key={project.id} 
                  animation="fade-up" 
                  delay={index * 100}
                >
                  <ProjectCard
                    title={project.title}
                    category={project.category}
                    image={project.thumbnailImage}
                    slug={project.slug}
                    tags={project.tags}
                    duration={project.duration}
                    role={project.role}
                    shortDescription={project.shortDescription}
                  />
                </AnimatedSection>
              ))}
            </motion.div>
          ) : (
            <AnimatedSection animation="fade-up">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-12 text-center">
                  <Briefcase className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">No projects found</h3>
                  <p className="text-muted-foreground mb-4">
                    Try adjusting your search or filter criteria
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
