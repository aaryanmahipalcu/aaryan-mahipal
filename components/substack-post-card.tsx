"use client"

import { ExternalLink } from "lucide-react"
import { SubstackPost } from "@/app/api/substack/route"

interface SubstackPostCardProps {
  post: SubstackPost
}

export function SubstackPostCard({ post }: SubstackPostCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }

  return (
    <article className="group py-12 border-b border-border/20 last:border-b-0 hover:bg-muted/20 transition-all duration-300">
      <div className="max-w-4xl">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
            <span>published on substack</span>
          </div>
          <time className="text-sm text-muted-foreground">
            {formatDate(post.publishedDate)}
          </time>
        </div>

        {/* Title */}
        <h3 className="text-3xl font-bold mb-2 group-hover:text-primary transition-colors duration-300 leading-tight">
          {post.title || 'Untitled Post'}
        </h3>

        {/* Subtitle */}
        {post.excerpt && (
          <div className="mb-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </div>
        )}

        {/* Preview */}
        {post.preview && (
          <div className="mb-6">
            <p className="text-base text-muted-foreground/80 leading-relaxed">
              {post.preview}
            </p>
          </div>
        )}

        {/* Read More Link */}
        <a
          href={post.platformUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-all duration-300 font-medium group/link text-lg"
        >
          read more →
        </a>
      </div>
    </article>
  )
} 