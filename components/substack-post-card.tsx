"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Clock, Calendar } from "lucide-react"
import { SubstackPost } from "@/app/api/substack/route"

interface SubstackPostCardProps {
  post: SubstackPost
  showTags?: boolean
}

export function SubstackPostCard({ post, showTags = true }: SubstackPostCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <article className="group py-8 border-b border-border/20 last:border-b-0 hover:bg-muted/20 transition-all duration-300">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span>published on substack</span>
          </div>
          <time className="text-sm text-muted-foreground">
            {formatDate(post.publishedDate)}
          </time>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors duration-300 leading-tight">
          {post.title || 'Untitled Post'}
        </h3>

        {/* Excerpt */}
        <p className="text-muted-foreground mb-4 leading-relaxed text-base">
          {post.excerpt}
        </p>

        {/* Tags */}
        {showTags && post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {post.tags.map((tag, index) => (
              <span 
                key={index} 
                className="text-xs text-muted-foreground/70 hover:text-muted-foreground transition-colors duration-200"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Read More Link */}
        <a
          href={post.platformUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-all duration-300 font-medium group/link"
        >
          read more →
        </a>
      </div>
    </article>
  )
} 