"use client"

import { ArrowRight, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

import { AnimatedSection } from "@/components/animated-section"
import { ChatInterface } from "@/components/chat/chat-interface"
import { getPersonalInfo } from "@/lib/data"

export function HeroSection() {
  const personalInfo = getPersonalInfo()

  const typingTexts = ["mechanical engineer", "product lead", "data analyst", "operations specialist"]

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
          {/* Left Side - Hero Content */}
          <div className="space-y-8">
            <AnimatedSection animation="fade-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-6">
                <Sparkles className="w-4 h-4" />
                welcome to my digital space
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={200}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                hi, i'm{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                  {personalInfo.name.toLowerCase()}
                </span>
              </h1>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={400}>
              <div className="text-xl md:text-2xl text-muted-foreground h-12 flex items-center">
                i'm a{" "}
                <span className="ml-2 text-primary font-semibold">
                  mechanical engineer
                </span>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={600}>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                i create meaningful digital experiences that solve real problems and delight users. chat with my ai
                assistant to explore my work and learn about my journey.
              </p>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={800}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-8 py-3 text-lg"
                  onClick={() => {
                    const chatInput = document.querySelector('input[placeholder*="ask about"]') as HTMLInputElement
                    if (chatInput) {
                      chatInput.focus()
                    }
                  }}
                >
                  start chatting
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fade-up" delay={1000}>
              <div className="text-sm text-muted-foreground">
                <p className="mb-2">try these commands:</p>
                <div className="flex flex-wrap gap-2">
                  {["/about", "/work", "/writing", "/contact"].map((command) => (
                    <code
                      key={command}
                      className="px-2 py-1 bg-muted rounded text-xs font-mono"
                    >
                      {command}
                    </code>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>

          {/* Right Side - Chat Interface */}
          <div className="lg:pl-8">
            <AnimatedSection animation="slide-left" delay={600}>
              <ChatInterface />
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
