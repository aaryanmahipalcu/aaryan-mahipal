import { Breadcrumb } from "@/components/breadcrumb"
import { ProjectCard } from "@/components/project-card"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Briefcase } from "lucide-react"
import { getAllProjects } from "@/lib/data"

export default function WorkPage() {
  const projects = getAllProjects()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Breadcrumb currentPage="Work" />

      <div className="container mx-auto px-4 pt-20 pb-12">
        <AnimatedSection animation="fade-up">
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Briefcase className="w-5 h-5 mr-2 text-primary" />
                <h1 className="text-2xl font-bold">Work</h1>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, index) => (
                  <AnimatedSection key={project.id} animation="zoom-in" delay={100 * (index + 1)}>
                    <ProjectCard
                      title={project.title}
                      category={project.category}
                      image={project.thumbnailImage}
                      slug={project.slug}
                    />
                  </AnimatedSection>
                ))}
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </main>
  )
}
