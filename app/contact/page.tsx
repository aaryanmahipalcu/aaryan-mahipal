import { Breadcrumb } from "@/components/breadcrumb"
import { ContactForm } from "@/components/contact-form"
import { AnimatedSection } from "@/components/animated-section"
import { LiquidGlassShortcuts } from "@/components/liquid-glass-shortcuts"
import { Card, CardContent } from "@/components/ui/card"
import { SocialLinks } from "@/components/social-links"
import { UserIcon, Mail, Phone, MapPin, Clock } from "lucide-react"
import { getPersonalInfo } from "@/lib/data"

export default function ContactPage() {
  const personalInfo = getPersonalInfo()

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Breadcrumb currentPage="Contact" />

      <div className="container mx-auto px-4 pt-20 pb-12">
        <AnimatedSection animation="fade-up">
          <Card className="bg-card/50 border-border/50 backdrop-blur-sm overflow-hidden">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Contact Information */}
                <div className="bg-muted/50 p-8">
                  <div className="flex items-center mb-6">
                    <UserIcon className="w-5 h-5 mr-2 text-primary" />
                    <h1 className="text-2xl font-bold">Get in Touch</h1>
                  </div>

                  <div className="space-y-6">
                    <p className="text-muted-foreground">
                      I'm always interested in new projects and opportunities. Feel free to reach out if you want to
                      work together or just say hello!
                    </p>

                    <div className="space-y-4">
                      <div className="flex items-start">
                        <Mail className="w-5 h-5 mr-3 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Email</h4>
                          <a
                            href={`mailto:${personalInfo.email}`}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {personalInfo.email}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Phone className="w-5 h-5 mr-3 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Phone</h4>
                          <a
                            href={`tel:${personalInfo.phone}`}
                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                          >
                            {personalInfo.phone}
                          </a>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <MapPin className="w-5 h-5 mr-3 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Location</h4>
                          <p className="text-sm text-muted-foreground">{personalInfo.location}</p>
                        </div>
                      </div>

                      <div className="flex items-start">
                        <Clock className="w-5 h-5 mr-3 text-primary mt-0.5" />
                        <div>
                          <h4 className="font-medium">Working Hours</h4>
                          <p className="text-sm text-muted-foreground">{personalInfo.workingHours}</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h4 className="font-medium mb-3">Connect with me</h4>
                      <SocialLinks socialLinks={personalInfo.social} />
                    </div>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2 p-8">
                  <h3 className="text-xl font-bold mb-6">Send a Message</h3>
                  <ContactForm />
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedSection>
      </div>

      {/* Liquid Glass Shortcuts */}
      <LiquidGlassShortcuts />
    </main>
  )
}
