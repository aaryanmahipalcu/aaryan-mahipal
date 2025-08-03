import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ProjectNotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex items-center justify-center">
      <div className="text-center space-y-6 p-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-muted flex items-center justify-center">
          <span className="text-4xl">🔍</span>
        </div>
        <h1 className="text-3xl font-bold">Project Not Found</h1>
        <p className="text-muted-foreground max-w-md mx-auto">
          The project you're looking for doesn't exist or has been moved.
        </p>
        <Button
          asChild
          className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90"
        >
          <Link href="/">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Portfolio
          </Link>
        </Button>
      </div>
    </div>
  )
}
