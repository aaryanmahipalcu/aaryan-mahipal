"use client"

import { Breadcrumb } from "@/components/breadcrumb"
import { AnimatedSection } from "@/components/animated-section"
import { LiquidGlassShortcuts } from "@/components/liquid-glass-shortcuts"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Sparkles, 
  Heart, 
  Coffee, 
  Music, 
  BookOpen, 
  Palette, 
  Code, 
  Users,
  ArrowRight,
  MapPin,
  Calendar,
  Award
} from "lucide-react"
import { getPersonalInfo, getAboutInfo, getExperienceInfo } from "@/lib/data"
import Image from "next/image"

export default function AboutPage() {
  const personalInfo = getPersonalInfo()
  const aboutInfo = getAboutInfo()
  const experienceInfo = getExperienceInfo()

  return (
    <main className="min-h-screen bg-background text-foreground relative overflow-hidden">
      {/* Background Elements - Matching Hero Section */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="relative z-10">
        <div className="container mx-auto px-4 pt-20 pb-12">
          {/* Hero Section */}
          <AnimatedSection animation="fade-up">
            <div className="mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  /about
                </span>
              </h1>
            </div>
          </AnimatedSection>

          {/* Personal Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <AnimatedSection animation="slide-right">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  hi, i'm aaryan. i'm a graduate of the cooper union, where i studied mechanical engineering. i grew up in India and moved to the US in pursuit of higher education in 2021. i'm currently based in new york, building and creating to solve real-world problems through technology and human-centered design. you can find me on the following corners of the internet:
                </p>
                
                <div className="flex flex-wrap gap-4">
                  {personalInfo.social.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary/20 transition-colors group"
                    >
                      {social.platform === "Instagram" && (
                        <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                      )}
                      {social.platform === "Twitter" && (
                        <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                        </svg>
                      )}
                      {social.platform === "LinkedIn" && (
                        <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                        </svg>
                      )}
                      {social.platform === "GitHub" && (
                        <svg className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                      )}
                    </a>
                  ))}
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>5+ years experience</span>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-left">
              <div className="relative">
                <div className="relative w-full h-96 rounded-2xl overflow-hidden">
                  <Image
                    src={personalInfo.avatar || "/placeholder.svg"}
                    alt={personalInfo.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                {/* Floating Stats */}
                <div className="absolute -bottom-6 -right-6 bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 shadow-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Award className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Projects Completed</p>
                      <p className="text-xl font-bold">50+</p>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* What I Do Section */}
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">what i do</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                i focus on creating experiences that matter, using design and technology to solve real problems
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {aboutInfo.focus.map((focus, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                      {index === 0 && <Palette className="w-6 h-6 text-primary" />}
                      {index === 1 && <Users className="w-6 h-6 text-primary" />}
                      {index === 2 && <Code className="w-6 h-6 text-primary" />}
                    </div>
                    <p className="text-sm leading-relaxed">{focus}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* My Toolkit Section */}
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">my toolkit</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                the tools and frameworks i use to bring ideas to life
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8 mb-20">
            {/* Product Skills */}
            <AnimatedSection animation="fade-up">
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-center">product & strategy</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {["Product Management", "GTM Strategy", "Market Research", "User Interviews", "Data Analysis", "Competitive Analysis"].map((tool, index) => (
                    <div key={index} className="group">
                      <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:bg-card transition-all duration-300 group-hover:scale-105">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                          <Palette className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-xs font-medium text-center leading-tight">{tool}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Technical Skills */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-center">technical & analysis</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {["Python", "NLP", "ChatterBot", "Excel", "Financial Modeling", "DCF Analysis"].map((tool, index) => (
                    <div key={index} className="group">
                      <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:bg-card transition-all duration-300 group-hover:scale-105">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/20 transition-colors">
                          <Code className="w-6 h-6 text-secondary" />
                        </div>
                        <p className="text-xs font-medium text-center leading-tight">{tool}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Operations Skills */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-center">operations & optimization</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {["Operations Management", "Workflow Optimization", "KPI Tracking", "Budget Management", "Staffing Planning", "Process Automation"].map((tool, index) => (
                    <div key={index} className="group">
                      <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:bg-card transition-all duration-300 group-hover:scale-105">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                          <Users className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-xs font-medium text-center leading-tight">{tool}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Languages Section */}
          <AnimatedSection animation="fade-up">
            <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8 mb-20">
              <h2 className="text-2xl font-bold mb-6 text-center">languages i speak</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutInfo.languages.map((language, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{language.name}</span>
                      <span className="text-sm text-muted-foreground">{language.proficiency}</span>
                    </div>
                    <div className="h-2 bg-muted rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-1000"
                        style={{ width: `${language.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* Experience Highlights */}
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">experience highlights</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                here are some of the key moments in my journey
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-8 mb-20">
            {experienceInfo.map((experience, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 200}>
                <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Award className="w-8 h-8 text-primary" />
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-2 mb-3">
                          <h3 className="text-xl font-bold">{experience.title}</h3>
                          <span className="text-primary font-medium">@ {experience.company}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mb-4">{experience.period}</p>
                        <p className="text-muted-foreground mb-4 leading-relaxed">{experience.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech, techIndex) => (
                            <Badge key={techIndex} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* Personal Interests */}
          <AnimatedSection animation="fade-up">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">when i'm not designing</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                life is about balance—here's what keeps me inspired and energized
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Coffee, label: "coffee enthusiast", color: "text-amber-600" },
              { icon: Music, label: "music lover", color: "text-purple-600" },
              { icon: BookOpen, label: "avid reader", color: "text-blue-600" },
              { icon: Heart, label: "nature walks", color: "text-green-600" }
            ].map((interest, index) => (
              <AnimatedSection key={index} animation="fade-up" delay={index * 100}>
                <Card className="bg-card/50 border-border/50 backdrop-blur-sm hover:bg-card/70 transition-all duration-300 group text-center">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 bg-muted rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/10 transition-colors`}>
                      <interest.icon className={`w-6 h-6 ${interest.color}`} />
                    </div>
                    <p className="text-sm font-medium">{interest.label}</p>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          {/* CTA Section */}
          <AnimatedSection animation="fade-up">
            <div className="text-center bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
              <h2 className="text-2xl font-bold mb-4">ready to work together?</h2>
              <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                let's create something amazing together. i'm always excited to take on new challenges and collaborate with passionate people.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white"
                  onClick={() => {
                    const chatInput = document.querySelector('input[placeholder*="ask about"]') as HTMLInputElement
                    if (chatInput) {
                      chatInput.focus()
                    }
                  }}
                >
                  start a conversation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={() => window.location.href = '/contact'}>
                  get in touch
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>

      {/* Liquid Glass Shortcuts */}
      <LiquidGlassShortcuts />
    </main>
  )
}
