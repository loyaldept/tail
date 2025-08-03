"use client"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedCardBackground } from "@/components/animated-card-background"
import { WaitlistForm } from "@/components/waitlist-form"
import { AIMessageBubbles } from "@/components/ai-message-bubbles"
import { MobileAIShowcase } from "@/components/mobile-ai-showcase"

export default function Home() {
  const { theme } = useTheme()
  const isDark = theme === "dark"

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
              <Link href="/contact" className="hover:text-primary transition-colors font-medium text-white/80">
                Contact Us
              </Link>
              <ThemeToggle />
            </div>
          </nav>
        </header>

        {/* Main Content - Inside the Animated Card */}
        <main className="min-h-screen flex flex-col items-center justify-center p-4 pt-24">
          <div className="relative">
            {/* AI Message Bubbles - Desktop Only */}
            <AIMessageBubbles />

            {/* The Credit Card Container */}
            <div className="relative w-[800px] h-[500px] max-w-[95vw] max-h-[60vh] lg:max-h-[70vh] bg-gradient-to-br from-slate-800/90 via-purple-800/90 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
              {/* Card Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center px-4 sm:px-8 py-4 sm:py-6 text-center">
                <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight tracking-tight text-white animate-in fade-in slide-in-from-bottom-4 duration-1000">
                  Forget About Bank
                </h1>

                <p className="text-sm sm:text-lg lg:text-xl text-white/80 mb-4 sm:mb-6 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200">
                  The first ever autonomous financial intelligence to spend, track and improve your credit score.
                </p>

                <div className="w-full max-w-md mx-auto mb-3 sm:mb-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-400">
                  <WaitlistForm />
                </div>

                <p className="text-xs sm:text-sm text-white/60 animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-500">
                  Never Guess Expense.
                </p>

                {/* Card chip */}
                <div className="absolute top-4 sm:top-6 left-4 sm:left-6">
                  <div className="w-8 h-5 sm:w-10 sm:h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md shadow-lg"></div>
                </div>

                {/* Startup Logo - Top Right */}
                <div className="absolute top-4 sm:top-6 right-4 sm:right-6">
                  <div className="relative w-10 h-10 sm:w-20 sm:h-20 opacity-90 hover:opacity-100 transition-opacity">
                    <Image
                      src="/images/tail-logo.png"
                      alt="Tail Logo"
                      fill
                      className="object-contain filter brightness-0 invert"
                      sizes="(max-width: 640px) 40px, 80px"
                    />
                  </div>
                </div>

                {/* Card details */}
                <div className="absolute bottom-4 sm:bottom-6 left-4 sm:left-6 text-left">
                  <div className="text-white/40 text-[8px] sm:text-[10px] mb-1">AI CARD</div>
                  <div className="text-white font-mono text-xs sm:text-sm tracking-wider">•••• •••• •••• ••••</div>
                </div>

                <div className="absolute bottom-4 sm:bottom-6 right-4 sm:right-6 text-right">
                  <div className="text-white/40 text-[8px] sm:text-[10px] mb-1">VALID THRU</div>
                  <div className="text-white font-mono text-xs sm:text-sm">••/••</div>
                </div>
              </div>

              {/* Laser Drawing Animation */}
              <div className="absolute inset-0 pointer-events-none">
                <svg className="w-full h-full" viewBox="0 0 800 500">
                  {/* Animated border being drawn */}
                  <rect
                    x="2"
                    y="2"
                    width="796"
                    height="496"
                    rx="24"
                    fill="none"
                    stroke="url(#laserGradient)"
                    strokeWidth="2"
                    strokeDasharray="3000"
                    strokeDashoffset="3000"
                    className="animate-draw-border"
                  />

                  {/* Corner accents */}
                  <circle cx="50" cy="50" r="3" fill="#00ffff" className="animate-pulse" />
                  <circle
                    cx="750"
                    cy="50"
                    r="3"
                    fill="#ff00ff"
                    className="animate-pulse"
                    style={{ animationDelay: "0.5s" }}
                  />
                  <circle
                    cx="50"
                    cy="450"
                    r="3"
                    fill="#ffff00"
                    className="animate-pulse"
                    style={{ animationDelay: "1s" }}
                  />
                  <circle
                    cx="750"
                    cy="450"
                    r="3"
                    fill="#00ff00"
                    className="animate-pulse"
                    style={{ animationDelay: "1.5s" }}
                  />

                  {/* Scanning lines */}
                  <line
                    x1="0"
                    y1="100"
                    x2="800"
                    y2="100"
                    stroke="url(#scanGradient)"
                    strokeWidth="1"
                    opacity="0.6"
                    className="animate-scan-horizontal"
                  />
                  <line
                    x1="0"
                    y1="400"
                    x2="800"
                    y2="400"
                    stroke="url(#scanGradient)"
                    strokeWidth="1"
                    opacity="0.6"
                    className="animate-scan-horizontal-reverse"
                  />

                  <defs>
                    <linearGradient id="laserGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00ffff" />
                      <stop offset="25%" stopColor="#ff00ff" />
                      <stop offset="50%" stopColor="#ffff00" />
                      <stop offset="75%" stopColor="#00ff00" />
                      <stop offset="100%" stopColor="#00ffff" />
                    </linearGradient>

                    <linearGradient id="scanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="50%" stopColor="#00ffff" />
                      <stop offset="100%" stopColor="transparent" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>

            {/* Floating laser points around the card */}
            <div className="absolute -top-2 sm:-top-4 -left-2 sm:-left-4 w-1 h-1 sm:w-2 sm:h-2 bg-cyan-400 rounded-full animate-ping"></div>
            <div
              className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-1 h-1 sm:w-2 sm:h-2 bg-pink-400 rounded-full animate-ping"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-1 h-1 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-ping"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute -bottom-2 sm:-bottom-4 -right-2 sm:-right-4 w-1 h-1 sm:w-2 sm:h-2 bg-green-400 rounded-full animate-ping"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>

          {/* Mobile AI Showcase - Below the card */}
          <MobileAIShowcase />
        </main>

        {/* Backed by section - outside the card */}
        <div className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-40">
          <div className="text-center">
            <h2 className="text-xs sm:text-sm uppercase tracking-widest text-white/60 mb-2 sm:mb-4">Backed by</h2>
            <div className="flex gap-4 sm:gap-8 items-center justify-center">
              {/* NVIDIA Logo */}
              <div className="relative w-[60px] h-[20px] sm:w-[120px] sm:h-[40px] opacity-60 hover:opacity-100 transition-opacity">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/erasebg-transformed-mPCVyEyBbShctH8JsCEUkP6eHl8y2o.webp"
                  alt="NVIDIA Inception Program"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 60px, 120px"
                />
              </div>

              {/* Web Summit Logo */}
              <div className="relative w-[50px] h-[15px] sm:w-[100px] sm:h-[30px] opacity-60 hover:opacity-100 transition-opacity">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web_summit_dark-bC8qZJ5yFDled7DMuy6iqnTXeSEcix.png"
                  alt="Web Summit"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50px, 100px"
                />
              </div>

              {/* T1 Capital Logo */}
              <div className="relative w-[40px] h-[40px] sm:w-[80px] sm:h-[80px] opacity-60 hover:opacity-100 transition-opacity">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AZ-7-removebg-preview%20(1)-lLwGKerUOsEPhaZKnhAvOmRZzMmcU4.png"
                  alt="T1 Capital"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 40px, 80px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
