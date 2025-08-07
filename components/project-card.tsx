"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Calendar, Clock, User } from "lucide-react"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  slug: string
  tags: string[]
  duration: string
  role: string
  shortDescription: string
}

export function ProjectCard({ 
  title, 
  category, 
  image, 
  slug, 
  tags, 
  duration, 
  role, 
  shortDescription 
}: ProjectCardProps) {
  return (
    <Link href={`/work/${slug}`} className="block h-full">
      <motion.div
        whileHover={{ y: -8 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="h-full"
      >
        <Card className="bg-card/50 border-border/50 overflow-hidden group hover:border-primary/50 transition-all h-full hover:shadow-xl hover:shadow-primary/10">
          <div className="relative h-48 w-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>
            
            {/* Category Badge */}
            <div className="absolute top-4 left-4">
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                {category}
              </Badge>
            </div>
            
            {/* Project Info Overlay */}
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <h3 className="font-bold text-lg text-white mb-2 group-hover:text-primary transition-colors">
                {title}
              </h3>
              <p className="text-sm text-gray-300 line-clamp-2 mb-3">
                {shortDescription}
              </p>
              
              {/* Project Meta */}
              <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  <span>{role}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  <span>{duration}</span>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tags Section */}
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-1">
              {tags.slice(0, 3).map((tag, index) => (
                <Badge 
                  key={index} 
                  variant="outline" 
                  className="text-xs bg-background/50 border-border/50 text-muted-foreground hover:text-primary transition-colors"
                >
                  {tag}
                </Badge>
              ))}
              {tags.length > 3 && (
                <Badge variant="outline" className="text-xs bg-background/50 border-border/50 text-muted-foreground">
                  +{tags.length - 3} more
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </Link>
  )
}
