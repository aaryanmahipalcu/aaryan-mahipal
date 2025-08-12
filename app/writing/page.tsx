"use client"

import { useState, useEffect } from "react"

import { AnimatedSection } from "@/components/animated-section"
import { LiquidGlassShortcuts } from "@/components/liquid-glass-shortcuts"
import { SubstackPostCard } from "@/components/substack-post-card"
import { Button } from "@/components/ui/button"
import { RefreshCw } from "lucide-react"
import { SubstackPost } from "@/app/api/substack/route"

export default function WritingPage() {
  const [posts, setPosts] = useState<SubstackPost[]>([])
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null)

  useEffect(() => {
    loadPosts()
    
    // Set up automatic refresh every 5 minutes
    const interval = setInterval(() => {
      loadPosts(true) // Silent refresh
    }, 5 * 60 * 1000)
    
    return () => clearInterval(interval)
  }, [])

  const loadPosts = async (silent = false) => {
    if (!silent) setLoading(true)
    try {
      // Add timestamp to prevent caching
      const timestamp = new Date().getTime()
      const response = await fetch(`/api/substack?t=${timestamp}`, {
        cache: 'no-store',
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache'
        }
      })
      const data = await response.json()
      setPosts(data)
      setLastUpdated(new Date())
    } catch (error) {
      console.error('Error loading posts:', error)
      if (!silent) setPosts([])
    }
    if (!silent) setLoading(false)
  }

  const refreshPosts = async () => {
    setRefreshing(true)
    await loadPosts()
    setRefreshing(false)
  }

  return (
    <main className="min-h-screen bg-background text-foreground">


      <div className="container mx-auto px-4 pt-20 pb-12">
        {/* Header */}
        <AnimatedSection animation="fade-up">
          <div className="mb-16">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-5xl font-bold">/writing</h1>
                {lastUpdated && (
                  <p className="text-sm text-muted-foreground mt-2">
                    Last updated: {lastUpdated.toLocaleTimeString()}
                  </p>
                )}
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
              </div>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">
              thoughts, insights, and stories from my substack
            </p>
          </div>
        </AnimatedSection>

        {/* Blog Posts */}
        <AnimatedSection animation="fade-up">
          {loading ? (
            <div className="text-center py-12">
              <div className="flex items-center justify-center gap-2 mb-4">
                <RefreshCw className="w-6 h-6 animate-spin text-primary" />
                <p className="text-muted-foreground">Loading posts...</p>
              </div>
            </div>
          ) : posts.length > 0 ? (
            <div className="max-w-4xl">
              {posts.map((post, index) => (
                <div key={post.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
                  <SubstackPostCard post={post} />
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">
                No posts available at the moment.
              </p>
              <Button onClick={refreshPosts} variant="outline">
                Try Again
              </Button>
            </div>
          )}
        </AnimatedSection>
      </div>

      {/* Liquid Glass Shortcuts */}
      <LiquidGlassShortcuts />
    </main>
  )
}
