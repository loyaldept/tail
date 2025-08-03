"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Users, Sparkles } from "lucide-react"

export function WaitlistForm() {
  const [email, setEmail] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [waitlistCount, setWaitlistCount] = useState(4766)
  const { toast } = useToast()

  // Simulate live counter updates
  useEffect(() => {
    const interval = setInterval(
      () => {
        // Randomly add 1-3 users every 30-60 seconds
        if (Math.random() > 0.7) {
          setWaitlistCount((prev) => prev + Math.floor(Math.random() * 3) + 1)
        }
      },
      Math.random() * 30000 + 30000,
    )

    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter your email address",
        variant: "destructive",
      })
      return
    }

    if (!email.includes("@")) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address",
        variant: "destructive",
      })
      return
    }

    setIsLoading(true)

    try {
      // Submit to Formspree
      const response = await fetch("https://formspree.io/f/mjkoeedo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          message: "New waitlist signup for TAIL AI Card",
          source: "TAIL Landing Page",
          timestamp: new Date().toISOString(),
        }),
      })

      if (response.ok) {
        // Update counter on successful submission
        setWaitlistCount((prev) => prev + 1)

        toast({
          title: "You're now waitlisted! 🚀",
          description: "Welcome to the future of AI-powered finance.",
        })

        setEmail("")
      } else {
        throw new Error("Failed to submit")
      }
    } catch (error) {
      console.error("Submission error:", error)
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4 max-sm:space-y-3">
      {/* Live Counter */}
      <div className="flex items-center justify-center gap-2 text-sm text-white/70 animate-pulse max-sm:text-xs max-sm:gap-1">
        <Users className="w-4 h-4 max-sm:w-3 max-sm:h-3" />
        <span className="font-medium">
          <span className="text-cyan-400 font-bold text-base max-sm:text-sm">{waitlistCount.toLocaleString()}</span>{" "}
          waiting for their AI Card
        </span>
        <Sparkles className="w-4 h-4 text-cyan-400 max-sm:w-3 max-sm:h-3" />
      </div>

      {/* Waitlist Form */}
      <form onSubmit={handleSubmit} className="space-y-3 max-sm:space-y-2">
        <div className="relative group">
          <Input
            type="email"
            name="email"
            placeholder="Enter your email to get your first AI Card"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-12 text-base px-5 rounded-full border-2 border-white/20 focus:border-cyan-400 transition-all duration-300 bg-white/10 backdrop-blur-sm group-hover:border-cyan-400/50 text-white placeholder:text-white/50 max-sm:h-10 max-sm:text-sm max-sm:px-4"
            disabled={isLoading}
            required
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-400/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isLoading}
          className="w-full h-12 text-base rounded-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/25 text-white border-0 max-sm:h-10 max-sm:text-sm"
        >
          {isLoading ? (
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin max-sm:w-3 max-sm:h-3" />
              Joining Waitlist...
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 max-sm:w-3 max-sm:h-3" />
              Get Waitlisted
            </div>
          )}
        </Button>
      </form>

      <p className="text-xs text-white/50 text-center max-sm:text-[10px]">
        Be among the first to get your autonomous AI financial card
      </p>
    </div>
  )
}
