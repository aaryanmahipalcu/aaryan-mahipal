"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Clock, User, ArrowUpRight } from "lucide-react"
import { useState } from "react"

interface ProjectCardProps {
  title: string
  category: string
  image: string
  slug: string
  tags: string[]
  duration: string
  role: string
  shortDescription: string
  images?: any[]
  profileImage?: string
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
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/work/${slug}`} className="block h-full">
      <motion.div
        className="h-full group"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ 
          y: -8,
          scale: 1.02,
          transition: { type: "spring", stiffness: 300, damping: 20 }
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <Card className="bg-card/50 border-border/50 overflow-hidden group hover:border-primary/50 transition-all h-full hover:shadow-2xl hover:shadow-primary/10 relative">
          {/* Image Container */}
          <div className="relative h-64 w-full overflow-hidden">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
            
            {/* Hover Overlay */}
            <motion.div
              className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
              animate={{ opacity: isHovered ? 1 : 0 }}
            />
            
            {/* Category Badge */}
            <motion.div 
              className="absolute top-4 left-4 z-10"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30 backdrop-blur-sm">
                {category}
              </Badge>
            </motion.div>

            {/* View Project Button - Top Right */}
            <motion.div
              className="absolute top-4 right-4 z-10"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: isHovered ? 1 : 0, scale: isHovered ? 1 : 0.8 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 bg-primary/20 backdrop-blur-sm rounded-full flex items-center justify-center text-primary border border-primary/30 hover:bg-primary/30 transition-colors">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </motion.div>

            {/* Project Title - Disappears on Hover */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 p-4"
              initial={{ opacity: 1 }}
              animate={{ opacity: isHovered ? 0 : 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="font-bold text-2xl text-white mb-2 group-hover:text-primary transition-colors drop-shadow-lg">
                {title}
              </h3>
            </motion.div>

            {/* Hover Details Overlay */}
            <motion.div 
              className="absolute inset-0 p-6 flex flex-col justify-end"
              initial={{ opacity: 0 }}
              animate={{ opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3 }}
            >
              {/* Description */}
              <motion.p 
                className="text-base text-gray-200 leading-relaxed font-medium drop-shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {shortDescription}
              </motion.p>
            </motion.div>
          </div>
          
          {/* Hover Border Effect */}
          <motion.div
            className="absolute inset-0 border-2 border-primary/0 group-hover:border-primary/30 rounded-lg transition-colors duration-300 pointer-events-none"
            initial={false}
            animate={{ 
              borderColor: isHovered ? "rgba(var(--primary), 0.3)" : "rgba(var(--primary), 0)"
            }}
          />
        </Card>
      </motion.div>
    </Link>
  )
}
