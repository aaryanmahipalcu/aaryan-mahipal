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
                  Aaryan Mahipal is a mechanical engineer working at the intersection of health, education, and product innovation. He has built AI-powered tools, health tech startups, and renewable energy projects. His vision is to solve real-world problems through technology and create inclusive solutions. Based in New York, he believes in constant experimentation and lifelong learning.
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {personalInfo.badges.map((badge, index) => (
                    <Badge key={index} variant="secondary" className="text-sm px-3 py-1">
                      {badge}
                    </Badge>
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
            {/* Design Tools */}
            <AnimatedSection animation="fade-up">
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-center">design & prototyping</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
                  {["Figma", "Sketch", "Adobe XD", "Illustrator", "Photoshop", "InVision", "Principle", "Framer"].map((tool, index) => (
                    <div key={index} className="group">
                      <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:bg-card transition-all duration-300 group-hover:scale-105">
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary/20 transition-colors">
                          <Palette className="w-6 h-6 text-primary" />
                        </div>
                        <p className="text-xs font-medium text-center">{tool}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* Development Tools */}
            <AnimatedSection animation="fade-up" delay={100}>
              <div className="bg-gradient-to-r from-secondary/5 to-primary/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-center">development & code</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  {["HTML/CSS", "JavaScript", "React", "Tailwind", "SCSS", "Git", "Responsive Design"].map((tool, index) => (
                    <div key={index} className="group">
                      <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-4 hover:bg-card transition-all duration-300 group-hover:scale-105">
                        <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-secondary/20 transition-colors">
                          <Code className="w-6 h-6 text-secondary" />
                        </div>
                        <p className="text-xs font-medium text-center">{tool}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>

            {/* UX Methods */}
            <AnimatedSection animation="fade-up" delay={200}>
              <div className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6 text-center">ux methods & research</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {["User Research", "Usability Testing", "Wireframing", "Prototyping", "Information Architecture", "User Flows"].map((tool, index) => (
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
            {experienceInfo.slice(0, 2).map((experience, index) => (
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
                          {experience.technologies.slice(0, 4).map((tech, techIndex) => (
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
