"use client"

import Link from "next/link"
import { ArrowLeft, Mail, Calendar, MessageSquare, Users } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatedCardBackground } from "@/components/animated-card-background"

export default function ContactPage() {
  return (
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
      <div className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <AnimatedCardBackground />

        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-background/20">
          <nav className="container mx-auto px-4 py-2 sm:py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl sm:text-3xl font-bold tracking-tighter hover:text-primary transition-colors text-white"
            >
              Tail
            </Link>
            <div className="flex items-center gap-3 sm:gap-8 text-sm sm:text-base">
              <Link href="/about" className="hover:text-primary transition-colors font-medium text-white/80">
                About
              </Link>
              <Link
                href="/"
                className="flex items-center gap-2 hover:text-primary transition-colors font-medium text-white/80"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Link>
            </div>
          </nav>
        </header>

        {/* Main Content */}
        <main className="min-h-screen flex items-center justify-center p-4 pt-24">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-slate-800/90 via-purple-800/90 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 sm:p-12">
              <div className="text-white">
                {/* Header */}
                <div className="text-center mb-12">
                  <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Contact Us
                  </h1>
                  <p className="text-lg text-white/80 max-w-2xl mx-auto">
                    Ready to revolutionize your financial future? Get in touch with the TAIL team.
                  </p>
                </div>

                {/* Contact Options Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  {/* Schedule Demo */}
                  <div className="bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Calendar className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">Schedule a Demo</h3>
                        <p className="text-white/60 text-sm">15-minute call with our CEO</p>
                      </div>
                    </div>
                    <p className="text-white/80 mb-6">
                      Book a quick call to see TAIL AI in action and learn how it can transform your financial life.
                    </p>
                    <a
                      href="https://cal.com/ceo-zuha/15min"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                    >
                      <Calendar className="w-4 h-4" />
                      Book Demo Call
                    </a>
                  </div>

                  {/* Direct Contact */}
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-400/20 hover:border-purple-400/40 transition-all duration-300 group">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <MessageSquare className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">Direct Contact</h3>
                        <p className="text-white/60 text-sm">Reach out directly via email</p>
                      </div>
                    </div>
                    <p className="text-white/80 mb-6">
                      Have questions, feedback, or want to partner with us? Send us an email and we'll get back to you.
                    </p>
                    <div className="space-y-3">
                      <a
                        href="mailto:ceo@itstail.com"
                        className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group/email"
                      >
                        <Mail className="w-4 h-4 text-purple-400" />
                        <div>
                          <div className="text-white font-medium group-hover/email:text-purple-400 transition-colors">
                            CEO & Founder
                          </div>
                          <div className="text-white/60 text-sm">ceo@itstail.com</div>
                        </div>
                      </a>
                      <a
                        href="mailto:erkebai@itstail.com"
                        className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors group/email"
                      >
                        <Mail className="w-4 h-4 text-purple-400" />
                        <div>
                          <div className="text-white font-medium group-hover/email:text-purple-400 transition-colors">
                            Co-Founder
                          </div>
                          <div className="text-white/60 text-sm">erkebai@itstail.com</div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                    <Users className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">Partnership Inquiries</h4>
                    <p className="text-white/60 text-sm">
                      Interested in partnering with TAIL? Let's discuss opportunities.
                    </p>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                    <MessageSquare className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">Media & Press</h4>
                    <p className="text-white/60 text-sm">Press inquiries and media requests welcome.</p>
                  </div>
                  <div className="text-center p-6 bg-white/5 rounded-xl border border-white/10">
                    <Mail className="w-8 h-8 text-pink-400 mx-auto mb-3" />
                    <h4 className="font-semibold text-white mb-2">General Support</h4>
                    <p className="text-white/60 text-sm">Questions about TAIL AI? We're here to help.</p>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl p-8 border border-white/10">
                  <h3 className="text-2xl font-bold text-white mb-4">Ready to Get Your AI Card?</h3>
                  <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                    Don't wait for the future of finance. Join thousands of others who are already waitlisted for their
                    TAIL AI Card.
                  </p>
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Get Waitlisted Now
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </div>

                {/* Footer Note */}
                <div className="text-center mt-8 pt-6 border-t border-white/20">
                  <p className="text-white/50 text-sm">
                    We typically respond within 24 hours. For urgent matters, please schedule a demo call.
                  </p>
                  <p className="text-purple-400 font-semibold text-sm mt-2">— Tail</p>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}
