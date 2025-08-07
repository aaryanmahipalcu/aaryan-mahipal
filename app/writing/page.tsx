"use client"

import { useState, useEffect } from "react"
import { Breadcrumb } from "@/components/breadcrumb"
import { AnimatedSection } from "@/components/animated-section"
import { LiquidGlassShortcuts } from "@/components/liquid-glass-shortcuts"
import { SubstackPostCard } from "@/components/substack-post-card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { PenTool, Filter, X, RefreshCw } from "lucide-react"
import { SubstackPost } from "@/app/api/substack/route"

export default function WritingPage() {
  const [posts, setPosts] = useState<SubstackPost[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [selectedTag, setSelectedTag] = useState<string | null>(null)
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = async () => {
    setLoading(true)
    try {
      const response = await fetch('/api/substack')
      const data = await response.json()
      setPosts(data)
    } catch (error) {
      console.error('Error loading posts:', error)
      setPosts([])
    }
    setLoading(false)
  }

  const refreshPosts = async () => {
    setRefreshing(true)
    await loadPosts()
    setRefreshing(false)
  }

  // Get all unique tags from posts
  const allTags = Array.from(new Set(posts.flatMap(post => post.tags))).sort()

  // Filter posts by selected tag
  const filteredPosts = selectedTag 
    ? posts.filter(post => post.tags.includes(selectedTag))
    : posts

  const clearFilters = () => {
    setSelectedTag(null)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Breadcrumb currentPage="Writing" />

      <div className="container mx-auto px-4 pt-20 pb-12">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-4xl font-bold">/writing</h1>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={refreshPosts}
                  disabled={refreshing}
                  className="flex items-center gap-2"
                >
                  <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
                  {refreshing ? 'Refreshing...' : 'Refresh'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setShowFilters(!showFilters)}
                  className="flex items-center gap-2"
                >
                  <Filter className="w-4 h-4" />
                  Filters
                </Button>
              </div>
            </div>
            <p className="text-lg text-muted-foreground max-w-2xl">
              thoughts, insights, and stories from my substack
            </p>
          </div>
        </AnimatedSection>

        {/* Filters */}
        {showFilters && (
          <AnimatedSection animation="fade-up">
            <div className="mb-8 p-6 bg-card/50 border border-border/50 rounded-xl backdrop-blur-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold">Filter by topic</h3>
                {selectedTag && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-muted-foreground hover:text-foreground"
                  >
                    <X className="w-4 h-4 mr-1" />
                    Clear
                  </Button>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {allTags.map((tag) => (
                  <Badge
                    key={tag}
                    variant={selectedTag === tag ? "default" : "outline"}
                    className="cursor-pointer hover:bg-primary/10 transition-colors"
                    onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </AnimatedSection>
        )}

        {/* Active Filter Display */}
        {selectedTag && (
          <AnimatedSection animation="fade-up">
            <div className="mb-6 flex items-center gap-2">
              <span className="text-sm text-muted-foreground">Showing:</span>
              <Badge variant="secondary" className="text-sm">
                {selectedTag}
              </Badge>
              <span className="text-sm text-muted-foreground">
                ({filteredPosts.length} of {posts.length} posts)
              </span>
            </div>
          </AnimatedSection>
        )}

        {/* Blog Posts Grid */}
        <AnimatedSection animation="fade-up">
          {loading ? (
            <div className="text-center py-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <RefreshCw className="w-6 h-6 animate-spin text-primary" />
                <p className="text-muted-foreground">Loading posts...</p>
              </div>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="max-w-4xl">
              {filteredPosts.map((post, index) => (
                <div key={post.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <SubstackPostCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                {selectedTag 
                  ? "No posts found with the selected topic."
                  : "No posts available at the moment."
                }
              </p>
              {selectedTag && (
                <Button variant="outline" onClick={clearFilters}>
                  Clear filters
                </Button>
              )}
            </div>
          )}
        </AnimatedSection>
      </div>

      {/* Liquid Glass Shortcuts */}
      <LiquidGlassShortcuts />
    </main>
  )
}
