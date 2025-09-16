"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function EssaysPage() {
  const [selectedEssay, setSelectedEssay] = useState<number | null>(null)
  const [readingProgress, setReadingProgress] = useState(0)

  const essays = [
    {
      id: 1,
      title: "Why Do We Write?",
      slug: "whywritingmatter",
      excerpt: "A personal journey from struggling with writing to understanding its true purpose...",
      content: `I never had great writing skills. My handwriting was awful, and writing essays always felt like a struggle. I couldn't understand long academic papers, sometimes 12 pages filled with complex words and confusing structure. In college, many students now use tools like Large Language Models (LLMs) to generate these kinds of papers.

But things changed for me in my junior year when I started reading Paul Graham's essays (paulgraham.com/articles.html). His writing was clear, simple, and surprisingly easy to follow. That's when I asked myself a deep question: why do we write at all?

At first, the answer seemed simple. We write to remember things. We write to express emotions. But over time, I realized something more important — writing is one of the best ways to let others understand what's happening inside your mind.

When we take notes, we usually don't write full sentences. Instead, we jot down keywords. And when we read them later, our brain fills in the meaning automatically. This shows how writing helps us organize and recall ideas.

When we try to communicate a message or share an idea, the clearest way to do it is through simple writing. If the writing is easy to read, the idea is easier to understand.

## Simple Language is Powerful

Take the example of the abbreviation "LLM." If I only wrote that without explaining it, many people might not know what it means. That's why clear explanations are so important. Writing isn't just about putting words on paper — it's about making ideas easy to grasp.

This skill is useful everywhere. Whether you're a startup founder, an intern, or a manager, you'll often need to explain things — to investors, to your team, or even to customers. Being able to describe your product or idea in just a few simple words is a powerful writing skill that comes from practice and reflection.

## Write What Matters to You

The best kind of writing often comes from personal reflection. When you write about what you've experienced or thought deeply about, your writing becomes more honest and more engaging.

One last thing I've learned: spending time re-reading your work is more valuable than simply writing a long essay. Editing helps you think more clearly and communicate more effectively. Writing improves when you go back, look at your words again, and shape them with care.

## Final Thoughts

We write to remember.
We write to express.
We write to connect.

Writing doesn't need to be complicated. What matters most is that it's clear, personal, and meaningful.`,
      readTime: "4 min read",
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      if (selectedEssay !== null) {
        const scrolled = window.scrollY
        const maxHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = (scrolled / maxHeight) * 100
        setReadingProgress(Math.min(progress, 100))
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [selectedEssay])

  if (selectedEssay !== null) {
    const essay = essays.find((e) => e.id === selectedEssay)
    if (!essay) return null

    return (
      <div className="min-h-screen bg-background font-mono">
        {/* Reading Progress Bar */}
        <div className="fixed top-0 left-0 w-full h-1 bg-muted z-50">
          <div className="h-full bg-primary transition-all duration-150" style={{ width: `${readingProgress}%` }}></div>
        </div>

        <div className="max-w-3xl mx-auto p-6 lg:p-12">
          <Button onClick={() => setSelectedEssay(null)} variant="outline" className="mb-8">
            ← Back to Essays
          </Button>

          <article className="prose prose-lg max-w-none">
            <div className="mb-8">
              <h1 className="text-3xl lg:text-4xl font-bold mb-4">{essay.title}</h1>
              <p className="text-muted-foreground">{essay.readTime}</p>
            </div>

            <div className="space-y-6 text-base lg:text-lg leading-relaxed whitespace-pre-line">{essay.content}</div>
          </article>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background font-mono">
      <div className="p-6 lg:p-12 max-w-4xl mx-auto">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-3xl lg:text-4xl font-bold mb-4">Essays</h1>
            <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
            <p className="text-muted-foreground mt-4">Thoughts on code, products, and life</p>
          </div>

          <div className="grid gap-6">
            {essays.map((essay) => (
              <Card
                key={essay.id}
                className="p-6 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => setSelectedEssay(essay.id)}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primary group-hover:text-accent transition-colors">
                    {essay.title}
                  </h3>
                  <span className="text-sm text-muted-foreground">{essay.readTime}</span>
                </div>
                <p className="text-muted-foreground">{essay.excerpt}</p>
                <div className="mt-4 text-primary font-semibold">Read more →</div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
