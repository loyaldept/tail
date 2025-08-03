"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { ThemeProvider } from "@/components/theme-provider"
import { AnimatedCardBackground } from "@/components/animated-card-background"

export default function AboutPage() {
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
            <Link
              href="/"
              className="flex items-center gap-2 hover:text-primary transition-colors font-medium text-white/80"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main className="min-h-screen flex items-center justify-center p-4 pt-24">
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-br from-slate-800/90 via-purple-800/90 to-slate-800/90 backdrop-blur-xl rounded-3xl border border-white/20 shadow-2xl p-8 sm:p-12">
              <div className="text-white space-y-6">
                {/* Quote */}
                <blockquote className="text-lg italic text-white/80 border-l-4 border-cyan-400 pl-6 mb-8">
                  "If you disagree with something, it's easier to say 'you suck' than to figure out and explain exactly
                  what you disagree with."
                  <footer className="text-sm text-white/60 mt-2">— Paul Graham</footer>
                </blockquote>

                {/* Main Title */}
                <h1 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Forget About Bank
                </h1>

                {/* Content */}
                <div className="space-y-6 text-lg leading-relaxed">
                  <p>
                    In the world of Artificial Intelligence, there's a tendency for many new financial breakthroughs to
                    emerge. One of the most significant developments has been in personal finance, banking, and
                    time-saving through AI-powered solutions.
                  </p>

                  <p>
                    Today, one company offers to improve your credit score, another manages your spending, and a third
                    provides a neobank or mobile banking solution with a sleek credit card design and promising
                    features. However, there's almost nobody bringing it all together in one AI-powered platform.
                  </p>

                  <p>
                    <strong className="text-cyan-400">
                      That's where we introduce Artificial Spending Intelligence (ASI)
                    </strong>{" "}
                    — the first-ever AI-supervised platform where your spending is managed autonomously. You don't track
                    expenses; you spend intelligently while simultaneously improving your credit score.
                  </p>

                  <p>
                    We're introducing the world's first <strong className="text-purple-400">AI Card</strong>. Hold on —
                    we're not a bank (banks are boring). We're also not a neobank (because neobanks are still controlled
                    by people). Only TAIL games, approves transactions, updates compliance, and prevents data attacks —
                    all by itself.
                  </p>

                  <p>
                    <strong>What is TAIL?</strong> It's your AI assistant. You can ask any question by talking or
                    typing, and it handles everything for you. In one word: it's the{" "}
                    <em className="text-cyan-400">future</em>.
                  </p>

                  <p>
                    Why? Because as people increasingly use credit cards and digital financial platforms, more cash flow
                    circulates and spending becomes more complex. The future is where everything happens automatically.
                    You don't need to call when a transaction fails, you don't need to wait 15 minutes on hold to
                    resolve issues — you can solve everything instantly within TAIL.
                  </p>

                  <p>
                    Whether you're someone who needs a better financial future, or you're an immigrant (we truly
                    understand how difficult it is for immigrants to navigate complex processes, get started, and plan
                    for the future, including improving credit scores and managing finances), TAIL is here for you.
                  </p>

                  <p className="text-xl font-semibold text-white">
                    If AMEX offers you a card to make you rich, we're offering an AI Card to make you{" "}
                    <em className="text-purple-400">modern</em>.
                  </p>

                  <p>
                    One thing is certain: while social media evolves and shows how "easy" earning money is, everyone
                    becomes obsessed with making money faster. But the truth is, you need to build something, manage
                    your finances, and follow certain steps. We're offering the "forget about bank" option.
                  </p>

                  <p className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Whether you're a college kid who wants to look cool driving that BMW to class, a fresh immigrant who
                    wants to get ahead in life faster, or a retiree who needs to manage expenses in a modern way —
                    you're in the right place. TAIL AI is here for you.
                  </p>

                  <p className="text-lg">
                    Let's get started. <strong className="text-cyan-400">I promise we don't suck.</strong>
                    <br />
                    <span className="text-purple-400 font-semibold">— Tail</span>
                  </p>
                </div>

                {/* Date */}
                <div className="text-sm text-white/50 text-right mt-8 pt-6 border-t border-white/20">
                  Last updated: July 2025
                </div>

                {/* CTA */}
                <div className="text-center mt-8">
                  <Link
                    href="/"
                    className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 rounded-full text-white font-semibold transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                  >
                    Get Your AI Card
                    <ArrowLeft className="w-4 h-4 rotate-180" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ThemeProvider>
  )
}
