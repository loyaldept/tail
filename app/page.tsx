"use client"

import Image from "next/image"
import Link from "next/link"
import { useTheme } from "next-themes"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { AnimatedCardBackground } from "@/components/animated-card-background"
import { WaitlistForm } from "@/components/waitlist-form"
import { AIMessageBubbles } from "@/components/ai-message-bubbles"

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
        <main className="min-h-screen flex items-center justify-center p-4 pt-24">
          <div className="relative">
            {/* AI Message Bubbles */}
            <AIMessageBubbles />

            {/* The Credit Card Container */}
            <div className="relative w-[800px] h-[500px] max-w-[95vw] max-h-[70vh] bg-gradient-to-br from-slate-800/90 via-purple-800/90 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden">
              {/* Card Content */}
              <div className="relative z-10 h-full flex flex-col items-center justify-center px-8 py-6 text-center">
                <h1 className="text-5xl sm:text-6xl font-bold mb-4 leading-tight tracking-tight text-white animate-in fade-in slide-in-from-bottom-4 duration-1000 max-sm:text-3xl">
                  Forget About Bank
                </h1>

                <p className="text-lg sm:text-xl text-white/80 mb-6 max-w-2xl mx-auto leading-relaxed animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-200 max-sm:text-base max-sm:mb-4">
                  The first ever autonomous financial intelligence to spend, track and improve your credit score.
                </p>

                <div className="w-full max-w-md mx-auto mb-4 animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-400 max-sm:mb-3">
                  <WaitlistForm />
                </div>

                <p className="text-sm text-white/60 animate-in fade-in slide-in-from-bottom-7 duration-1000 delay-500 max-sm:text-xs">
                  Never Guess Expense.
                </p>

                {/* Card chip */}
                <div className="absolute top-6 left-6 max-sm:top-4 max-sm:left-4">
                  <div className="w-10 h-6 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-md shadow-lg max-sm:w-8 max-sm:h-5"></div>
                </div>

                {/* Startup Logo - Top Right */}
                <div className="absolute top-6 right-6 max-sm:top-4 max-sm:right-4">
                  <div className="relative w-20 h-20 max-sm:w-12 max-sm:h-12 opacity-90 hover:opacity-100 transition-opacity">
                    <Image
                      src="/images/tail-logo.png"
                      alt="Tail Logo"
                      fill
                      className="object-contain filter brightness-0 invert"
                      sizes="(max-width: 640px) 48px, 80px"
                    />
                  </div>
                </div>

                {/* Card details */}
                <div className="absolute bottom-6 left-6 text-left max-sm:bottom-4 max-sm:left-4">
                  <div className="text-white/40 text-[10px] mb-1">AI CARD</div>
                  <div className="text-white font-mono text-sm tracking-wider max-sm:text-xs">•••• •••• •••• ••••</div>
                </div>

                <div className="absolute bottom-6 right-6 text-right max-sm:bottom-4 max-sm:right-4">
                  <div className="text-white/40 text-[10px] mb-1">VALID THRU</div>
                  <div className="text-white font-mono text-sm max-sm:text-xs">••/••</div>
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
            <div className="absolute -top-4 -left-4 w-2 h-2 bg-cyan-400 rounded-full animate-ping max-sm:-top-2 max-sm:-left-2 max-sm:w-1 max-sm:h-1"></div>
            <div
              className="absolute -top-4 -right-4 w-2 h-2 bg-pink-400 rounded-full animate-ping max-sm:-top-2 max-sm:-right-2 max-sm:w-1 max-sm:h-1"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute -bottom-4 -left-4 w-2 h-2 bg-yellow-400 rounded-full animate-ping max-sm:-bottom-2 max-sm:-left-2 max-sm:w-1 max-sm:h-1"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute -bottom-4 -right-4 w-2 h-2 bg-green-400 rounded-full animate-ping max-sm:-bottom-2 max-sm:-right-2 max-sm:w-1 max-sm:h-1"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </main>

        {/* Backed by section - outside the card */}
        <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-40 max-sm:bottom-4">
          <div className="text-center">
            <h2 className="text-sm uppercase tracking-widest text-white/60 mb-4 max-sm:text-xs max-sm:mb-2">
              Backed by
            </h2>
            <div className="flex gap-8 items-center justify-center max-sm:gap-4">
              {/* NVIDIA Logo */}
              <div className="relative w-[120px] h-[40px] opacity-60 hover:opacity-100 transition-opacity max-sm:w-[80px] max-sm:h-[25px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/erasebg-transformed-mPCVyEyBbShctH8JsCEUkP6eHl8y2o.webp"
                  alt="NVIDIA Inception Program"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 80px, 120px"
                />
              </div>

              {/* Web Summit Logo */}
              <div className="relative w-[100px] h-[30px] opacity-60 hover:opacity-100 transition-opacity max-sm:w-[70px] max-sm:h-[20px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/web_summit_dark-bC8qZJ5yFDled7DMuy6iqnTXeSEcix.png"
                  alt="Web Summit"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 70px, 100px"
                />
              </div>

              {/* T1 Capital Logo */}
              <div className="relative w-[80px] h-[80px] opacity-60 hover:opacity-100 transition-opacity max-sm:w-[50px] max-sm:h-[50px]">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/AZ-7-removebg-preview%20(1)-lLwGKerUOsEPhaZKnhAvOmRZzMmcU4.png"
                  alt="T1 Capital"
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 50px, 80px"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}
