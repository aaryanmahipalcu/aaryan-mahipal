import { Breadcrumb } from "@/components/breadcrumb"
import { AnimatedSection } from "@/components/animated-section"
import { Card, CardContent } from "@/components/ui/card"
import { Gamepad2 } from "lucide-react"

export default function PlayPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Breadcrumb currentPage="Play" />

      <div className="container mx-auto px-4 pt-20 pb-12">
        <AnimatedSection animation="fade-up">
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="flex items-center mb-6">
                <Gamepad2 className="w-5 h-5 mr-2 text-primary" />
                <h1 className="text-2xl font-bold">Play</h1>
              </div>

              <div className="text-center py-12">
                <p className="text-muted-foreground">Coming soon...</p>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>
    </main>
  )
}
