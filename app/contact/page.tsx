"use client"


import { AnimatedSection } from "@/components/animated-section"
import { LiquidGlassShortcuts } from "@/components/liquid-glass-shortcuts"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  ExternalLink,
  Github,
  Linkedin,
  Twitter,
  Instagram
} from "lucide-react"
import { getPersonalInfo } from "@/lib/data"
import { motion } from "framer-motion"

export default function ContactPage() {
  const personalInfo = getPersonalInfo()

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Elements - Matching Hero Section */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      


      <div className="container mx-auto px-4 pt-20 pb-12 relative z-10">
        {/* Hero Section */}
        <AnimatedSection animation="fade-up">
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-primary">
                /contact
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mt-6">
              let's build something amazing together. i'm always interested in new projects, collaborations, and opportunities.
            </p>
          </div>
        </AnimatedSection>

        {/* Main Content */}
        <div className="max-w-2xl mx-auto">
          <AnimatedSection animation="fade-up">
            <div className="space-y-8">
              {/* Contact Information Card */}
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <MessageSquare className="w-6 h-6 mr-3 text-primary" />
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="w-5 h-5 mr-3 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium">Email</h4>
                        <a
                          href="mailto:mahipalaaryan@gmail.com"
                          className="text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          mahipalaaryan@gmail.com
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <MapPin className="w-5 h-5 mr-3 text-primary mt-1" />
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-sm text-muted-foreground">{personalInfo.location}</p>
                      </div>
                    </div>


                  </div>
                </CardContent>
              </Card>

              {/* Social Links Card */}
              <Card className="bg-card/50 border-border/50 backdrop-blur-sm">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-6">Connect with me</h3>
                  <p className="text-muted-foreground mb-6">
                    you can find me on the following corners of the internet:
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {personalInfo.social.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 p-4 rounded-lg bg-muted/50 hover:bg-muted/80 transition-all group border border-border/50 hover:border-primary/30"
                      >
                        <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          {social.platform === "GitHub" && <Github className="w-5 h-5 text-primary" />}
                          {social.platform === "LinkedIn" && <Linkedin className="w-5 h-5 text-primary" />}
                          {social.platform === "Twitter" && (
                            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                            </svg>
                          )}
                          {social.platform === "Instagram" && <Instagram className="w-5 h-5 text-primary" />}
                          {social.platform === "Substack" && (
                            <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
                            </svg>
                          )}
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-sm group-hover:text-primary transition-colors">
                            {social.platform === "Twitter" ? "X" : social.platform}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {social.platform === "GitHub" ? "@aaryanmahipalcu" :
                             social.platform === "LinkedIn" ? "@aaryan-mahipal" :
                             social.platform === "Twitter" ? "@aaryanmahipal" :
                             social.platform === "Instagram" ? "@itsaaryanmahipal" :
                             social.platform === "Substack" ? "@aaryanmahipal0" : `@${social.platform.toLowerCase()}`}
                          </p>
                        </div>
                        <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Liquid Glass Shortcuts */}
      <LiquidGlassShortcuts />
    </main>
  )
}
