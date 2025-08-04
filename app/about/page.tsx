import { Breadcrumb } from "@/components/breadcrumb"
import { EnhancedProfile } from "@/components/enhanced-profile"
import { ExperienceCard } from "@/components/experience-card"
import { AnimatedSection } from "@/components/animated-section"
import { LiquidGlassShortcuts } from "@/components/liquid-glass-shortcuts"
import { Card, CardContent } from "@/components/ui/card"
import { BriefcaseIcon } from "lucide-react"
import { getExperienceInfo } from "@/lib/data"

export default function AboutPage() {
  const experienceInfo = getExperienceInfo()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Breadcrumb currentPage="About" />

      <div className="container mx-auto px-4 pt-20 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <div className="lg:sticky lg:top-24 self-start">
            <AnimatedSection animation="slide-right">
              <EnhancedProfile />
            </AnimatedSection>
          </div>

          {/* Experience Section */}
          <div className="lg:col-span-2">
            <AnimatedSection animation="fade-up">
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <BriefcaseIcon className="w-5 h-5 mr-2 text-primary" />
                    <h1 className="text-2xl font-bold">Experience</h1>
                  </div>

                  <div className="space-y-8">
                    {experienceInfo.map((experience, index) => (
                      <AnimatedSection key={index} animation="fade-up" delay={100 * (index + 1)}>
                        <ExperienceCard
                          title={experience.title}
                          company={experience.company}
                          period={experience.period}
                          description={experience.description}
                          achievements={experience.achievements}
                          technologies={experience.technologies}
                        />
                      </AnimatedSection>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </div>

      {/* Liquid Glass Shortcuts */}
      <LiquidGlassShortcuts />
    </main>
  )
}
