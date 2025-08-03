import { getAllProjects } from "@/lib/data"
import { EnhancedScrollIndicator } from "@/components/enhanced-scroll-indicator"
import { HeroSection } from "@/components/hero-section"
import { VinylPlayer } from "@/components/vinyl-player"
import { getExperienceInfo, getTechnicalSkillsInfo } from "@/lib/data"

export default function Home() {
  const projects = getAllProjects()
  const experienceInfo = getExperienceInfo()
  const technicalSkills = getTechnicalSkillsInfo()

  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Vinyl Music Player */}
      <VinylPlayer />

      {/* Hero Section with Chat */}
      <HeroSection />

      {/* Scroll to Top Button */}
      <EnhancedScrollIndicator />

      {/* Simple Footer */}
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/50">
        <div className="container mx-auto px-4">
          <p>© {new Date().getFullYear()} jane doe. all rights reserved.</p>
        </div>
      </footer>
    </main>
  )
}
