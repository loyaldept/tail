"use client"

import { useState, useEffect, useRef } from "react"
import { Moon, Sun, Mail, User, FileText, Rocket, MessageCircle, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Link from "next/link"

export default function Portfolio() {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [currentPage, setCurrentPage] = useState("home")
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const cursorTrailRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })

      if (cursorTrailRef.current) {
        cursorTrailRef.current.style.left = `${e.clientX - 10}px`
        cursorTrailRef.current.style.top = `${e.clientY - 10}px`
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const navItems = [
    { id: "home", name: "Home", icon: Mail, href: "/" },
    { id: "me", name: "Who am I?", icon: User },
    { id: "experience", name: "Experience", icon: FileText },
    { id: "essays", name: "Essays", icon: FileText, href: "/essays" },
    { id: "startup", name: "Start-up", icon: Rocket },
    { id: "contact", name: "Contact Me", icon: MessageCircle },
  ]

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <HomePage />
      case "me":
        return <MePage />
      case "experience":
        return <ExperiencePage />
      case "essays":
        return <EssaysPage />
      case "startup":
        return <StartupPage />
      case "contact":
        return <ContactPage />
      default:
        return <HomePage />
    }
  }

  return (
    <div className={isDarkMode ? "dark" : ""}>
      <div className="cursor-trail" ref={cursorTrailRef}></div>

      <main className="min-h-screen bg-background text-foreground transition-all duration-500 font-mono">
        {/* Theme Toggle */}
        <Button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="fixed top-6 right-6 z-50 p-3 rounded-full glow-animation"
          variant="outline"
          size="icon"
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>

        {/* Mobile Menu Button */}
        <Button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="fixed top-6 left-6 z-50 p-3 rounded-full lg:hidden"
          variant="outline"
          size="icon"
        >
          {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        <div className="flex min-h-screen">
          {/* Fixed Sidebar - Updated for mobile */}
          <nav
            className={`w-80 shrink-0 bg-sidebar border-r border-sidebar-border p-6 fixed h-full overflow-y-auto z-40 transition-transform duration-300 lg:translate-x-0 ${
              isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="space-y-6 h-full flex flex-col">
              {/* Logo/Name */}
              <div className="text-center mb-8">
                <h1 className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent float-animation">
                  {"<Zuhayr />"}
                </h1>
                <p className="text-xs text-muted-foreground mt-1 opacity-70">you ain't me</p>
                <p className="text-sm text-muted-foreground mt-2">Developer • Entrepreneur</p>
              </div>

              {/* Navigation */}
              <div className="space-y-2 flex-1">
                {navItems.map((item) => {
                  const Icon = item.icon
                  if (item.href) {
                    return (
                      <Link key={item.id} href={item.href}>
                        <button
                          className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground ${
                            currentPage === item.id
                              ? "bg-sidebar-primary text-sidebar-primary-foreground"
                              : "text-sidebar-foreground"
                          }`}
                        >
                          <Icon className="h-5 w-5" />
                          {item.name}
                        </button>
                      </Link>
                    )
                  }
                  return (
                    <button
                      key={item.id}
                      onClick={() => {
                        setCurrentPage(item.id)
                        setIsMobileMenuOpen(false) // Close mobile menu on selection
                      }}
                      className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-left transition-all duration-200 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground ${
                        currentPage === item.id
                          ? "bg-sidebar-primary text-sidebar-primary-foreground"
                          : "text-sidebar-foreground"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                      {item.name}
                    </button>
                  )
                })}
              </div>

              {/* Encrypted Message Design */}
              <div className="mt-auto pt-8">
                <div className="text-center p-4 bg-muted/30 rounded-lg border border-dashed border-border">
                  <div className="text-xs text-muted-foreground mb-2">🔐 Decrypt this:</div>
                  <div className="text-xs font-mono text-primary break-all">TJ5LexCmHWWzIiTJyMQiCg==</div>
                </div>
                <p className="text-xs text-muted-foreground text-center mt-4">© 2024 Zuhayr</p>
              </div>
            </div>
          </nav>

          {/* Main Content - Updated for mobile responsiveness */}
          <div className="flex-1 lg:ml-80 min-h-screen">{renderPage()}</div>
        </div>

        {/* Mobile Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 z-30 lg:hidden" onClick={() => setIsMobileMenuOpen(false)} />
        )}
      </main>
    </div>
  )
}

// Home Page Component (Email Style)
function HomePage() {
  const visitorNumber = Math.floor(Math.random() * 10000) + 1000

  return (
    <div className="p-6 lg:p-12 max-w-4xl mx-auto">
      <Card className="p-6 lg:p-8 bg-card border-2 border-dashed border-border">
        {/* Updated email header */}
        <div className="border-b border-border pb-4 mb-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-2">
            <div>
              <p className="text-sm text-muted-foreground">From: yourmajestyzuha@gmail.com</p>
              <p className="text-sm text-muted-foreground">To: visitor{visitorNumber}@web.com</p>
              <p className="text-sm text-muted-foreground">Subject: Welcome</p>
            </div>
            <div className="text-sm text-muted-foreground">{new Date().toLocaleDateString()}</div>
          </div>
        </div>

        {/* Updated email content */}
        <div className="space-y-6 text-base lg:text-lg leading-relaxed">
          <p>Portfolio websites always felt boring and similar whenever I came across them.</p>

          <p>
            And if you are a recruiter, co-founder, or just here out of curiosity, you should know that your time is
            priceless and limited.
          </p>

          <p>That's why the solution was simple: be clear and efficient.</p>

          <p>This is a very simple and minimalistic website.</p>

          <p>
            The coolest programmer is not the one who designs the most visually appealing website, nor the writer who
            writes the most books.
          </p>

          <p className="font-semibold text-primary">
            It's all about delivering your idea in the simplest and most efficient way.
          </p>

          <div className="pt-6">
            <p className="text-lg lg:text-xl">— All the best,</p>
            <p className="text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Zuhayr Abdullazhanov
            </p>
          </div>
        </div>
      </Card>
    </div>
  )
}

// Me Page Component
function MePage() {
  return (
    <div className="p-6 lg:p-12 max-w-4xl mx-auto">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Who am I?</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <Card className="p-6 lg:p-8">
          <div className="space-y-6 text-base lg:text-lg leading-relaxed">
            <p>I build, I learn, and I write when I feel something worth saying.</p>

            <p>
              For the past 4 years, I've been obsessively curious—starting from hardware design and von Neumann
              architectures, running through differential equations, and diving deep into quantitative trading systems.
              I've worked for people and with people. I've said no to titles so I could say yes to building.
            </p>

            <p>
              I turned down Caltech, chose the craziest university in Asia, and then jumped into one of the most liberal
              colleges in New York. I didn't chase prestige. I chased experience.
            </p>

            <p>
              Internships? I picked them to learn things I needed for my product. Projects? I started them, shipped
              them, failed some, learned a lot. Marketing? Psychology? Yeah—I study how humans think too. It all
              connects.
            </p>

            <p>
              I've seen the best parts of being in top places. But I've also seen the value of being underground,
              unknown, underestimated. That's where real growth happens. That's where entrepreneurs are forged.
            </p>

            <p className="font-semibold text-primary">
              Why me? Because I don't stop at one identity.
              <br />
              Because I'm always learning. Because I've already walked roads most people only read about.
              <br />
              Because I am a damn entrepreneur.
            </p>

            <p className="text-sm text-muted-foreground italic mt-8">
              Also, shoutout to Paul Graham. He made me write this.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}

// Experience Page Component
function ExperiencePage() {
  const [selectedExperience, setSelectedExperience] = useState<number | null>(null)
  const [comments, setComments] = useState<{ [key: number]: string[] }>({})
  const [newComment, setNewComment] = useState("")

  const education = [
    {
      id: 1,
      institution: "University of Hong Kong",
      degree: "Computer Engineering and Science",
      period: "September 2022 - December 2023",
      details: "QS ranked #11 in the world, Got Fully-Funded Scholarship; GPA - 3.8",
      accomplishments: ["QS World Ranking #11", "Fully-Funded Scholarship", "GPA: 3.8/4.0"],
    },
    {
      id: 2,
      institution: "Bard College",
      degree: "Computer Science & Finance",
      period: "January 2024 - June 2026",
      details: "Dual Degree, Global Citizen Scholarship, GPA 3.7",
      accomplishments: ["Dual Degree Program", "Global Citizen Scholarship", "GPA: 3.7/4.0"],
    },
  ]

  const experiences = [
    {
      id: 3,
      title: "Data Scientist and Researcher",
      company: "Columbia University-IBM Research Centre",
      location: "New York, NY",
      period: "2024",
      description: "Advanced research in quantitative trading and statistical modeling optimization.",
      accomplishments: [
        "Debugged 2000 lines of code resulting in 50% optimization of statistical model",
        "Organized two quantitative trading workshops on Algorithm Development and Backtesting",
        "Analyzed data from 10 trading firms using R, Pandas, and Matplotlib",
        "Optimized 50% of code to reduce length by 1,000 lines",
      ],
    },
    {
      id: 4,
      title: "Software Engineer",
      company: "Deloitte",
      location: "Hong Kong, HK",
      period: "June 2024 - August 2024",
      description: "Contributed to Operations and Investment department developing internal generative AI platform.",
      accomplishments: [
        "Contributed 10K lines of code to internal generative AI platform 'MyAssist'",
        "Integrated RNN, FNN, CNN, IBM Watson and TensorFlow",
        "Conducted data analysis of 10 family offices in US, UK and Singapore using Java and APEX",
        "Trained 2 machine learning models using PyTorch and Linear Regression on 400 start-ups data",
        "Enhanced 63% prediction accuracy and 99% data insights within 30 days",
      ],
    },
    {
      id: 5,
      title: "Full Stack Developer",
      company: "Foundation for Shared Impact",
      location: "Hong Kong, HK",
      period: "June 2023 - August 2023",
      description: "Led development of GuideFong, a comprehensive map of enterprises in Hong Kong.",
      accomplishments: [
        "Assisted in 90% development of 'GuideFong' project using Next.js, Node.js, React, Python Django",
        "Completed data analysis of 12 business enterprises on Hong Kong Island",
        "Integrated NumPy, Pandas, Scikit-Learn and MySQL for data processing",
        "Cooperated with team of 5 members using Google Maps API, Mapbox API and Gemini API",
        "Increased optimization speed by 50% in development of guidefong.com",
      ],
    },
  ]

  const addComment = (experienceId: number) => {
    if (newComment.trim()) {
      setComments((prev) => ({
        ...prev,
        [experienceId]: [...(prev[experienceId] || []), newComment.trim()],
      }))
      setNewComment("")
    }
  }

  return (
    <div className="p-6 lg:p-12 max-w-4xl mx-auto">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Experience</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">Education</h2>
          {education.map((edu) => (
            <Card key={edu.id} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{edu.institution}</h3>
                  <p className="text-lg text-muted-foreground">{edu.degree}</p>
                  <p className="text-sm text-muted-foreground">{edu.period}</p>
                </div>
                <Button
                  onClick={() => setSelectedExperience(selectedExperience === edu.id ? null : edu.id)}
                  variant="outline"
                  size="sm"
                >
                  {selectedExperience === edu.id ? "Hide Details" : "View Details"}
                </Button>
              </div>

              <p className="text-foreground mb-4">{edu.details}</p>

              {selectedExperience === edu.id && (
                <div className="space-y-4 border-t border-border pt-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {edu.accomplishments.map((acc, idx) => (
                        <li key={idx} className="text-muted-foreground">
                          {acc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Comments:</h4>
                    <div className="space-y-2 mb-4">
                      {comments[edu.id]?.map((comment, idx) => (
                        <div key={idx} className="bg-muted p-3 rounded-lg text-sm">
                          {comment}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="flex-1 px-3 py-2 bg-input border border-border rounded-lg text-sm"
                        onKeyPress={(e) => e.key === "Enter" && addComment(edu.id)}
                      />
                      <Button onClick={() => addComment(edu.id)} size="sm">
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-primary border-b border-border pb-2">Work Experience</h2>
          {experiences.map((exp) => (
            <Card key={exp.id} className="p-6 hover:shadow-lg transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                  <p className="text-lg text-muted-foreground">{exp.company}</p>
                  <p className="text-sm text-muted-foreground">
                    {exp.location} • {exp.period}
                  </p>
                </div>
                <Button
                  onClick={() => setSelectedExperience(selectedExperience === exp.id ? null : exp.id)}
                  variant="outline"
                  size="sm"
                >
                  {selectedExperience === exp.id ? "Hide Details" : "View Details"}
                </Button>
              </div>

              <p className="text-foreground mb-4">{exp.description}</p>

              {selectedExperience === exp.id && (
                <div className="space-y-4 border-t border-border pt-4">
                  <div>
                    <h4 className="font-semibold text-primary mb-2">Accomplishments:</h4>
                    <ul className="list-disc list-inside space-y-1">
                      {exp.accomplishments.map((acc, idx) => (
                        <li key={idx} className="text-muted-foreground">
                          {acc}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-2">Comments:</h4>
                    <div className="space-y-2 mb-4">
                      {comments[exp.id]?.map((comment, idx) => (
                        <div key={idx} className="bg-muted p-3 rounded-lg text-sm">
                          {comment}
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        placeholder="Add a comment..."
                        className="flex-1 px-3 py-2 bg-input border border-border rounded-lg text-sm"
                        onKeyPress={(e) => e.key === "Enter" && addComment(exp.id)}
                      />
                      <Button onClick={() => addComment(exp.id)} size="sm">
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

// Essays Page Component
function EssaysPage() {
  const [selectedEssay, setSelectedEssay] = useState<number | null>(null)
  const [readingProgress, setReadingProgress] = useState(0)

  const essays = [
    {
      id: 1,
      title: "Why Do We Write?",
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
    {
      id: 2,
      title: "The Art of Simple Code",
      excerpt: "Why complexity is the enemy of maintainability...",
      content: `# The Art of Simple Code

Complexity is the enemy of maintainability. Every line of code we write is a liability that future developers (including ourselves) will have to understand, modify, and debug.

## The Problem with Clever Code

We've all seen it - code that's so clever, so optimized, so "elegant" that it takes 10 minutes to understand what it does. The author was probably proud of their ingenuity, but they've created a maintenance nightmare.

## Principles of Simple Code

1. **Clarity over cleverness** - Write code that tells a story
2. **Consistency over optimization** - Consistent patterns are easier to follow
3. **Explicitness over brevity** - Don't make readers guess your intent

## Conclusion

Simple code is not about being simplistic. It's about being thoughtful, clear, and considerate of the humans who will interact with your code in the future.`,
      readTime: "5 min read",
    },
    {
      id: 3,
      title: "Building Products That Matter",
      excerpt: "The intersection of technology and human needs...",
      content: `# Building Products That Matter

Technology for technology's sake is just noise. The products that truly matter are those that solve real human problems in elegant, accessible ways.

## Understanding Real Problems

Before writing a single line of code, we must understand the problem we're solving. Not the problem we think exists, but the one that actually keeps people up at night.

## The Human Element

Every feature, every interface decision, every line of code should be evaluated through the lens of human experience. Does this make someone's life better? Easier? More meaningful?

## Sustainable Impact

Building products that matter means thinking beyond the initial launch. How will this scale? How will it evolve? How will it continue to serve people as their needs change?`,
      readTime: "7 min read",
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
      <div className="min-h-screen bg-background">
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
  )
}

// Startup Page Component
function StartupPage() {
  const projects = [
    {
      id: 1,
      name: "Tail AI",
      description: "AI assistant that tracks your expense and give insights based on your purchases.",
      demoLink: "https://www.itstail.com/",
      daysCompleted: 365,
      usersTested: 1900,
      lessons: [
        "AI is not future banking, but it is part of financial revolution. (Paul Graham reviewed)",
        "There is a market gap for automation",
        "It's heavily regulated and approvals take time for launch",
      ],
      accomplishments: ["NVIDIA Inception Program", "WebSummit Vancouver 2025 Partner"],
      status: "Active",
      tech: [
        "ChatGPT-5",
        "Claude-4",
        "PostgreSQL",
        "React",
        "Marqeta",
        "Stripe Issuing",
        "Visa/Mastercard APIs",
        "Node.js",
        "Google Cloud Vision OCR",
        "Python (Django/Flask)",
        "Plaid",
        "MX",
        "Jumio",
        "Onfido",
        "AWS",
        "Google Cloud",
        "Docker",
        "Kubernetes",
        "Flask",
        "Vault",
        "Sentry",
        "Datadog",
        "Claude Sonnet API",
        "Experian API",
        "TensorFlow",
        "OAuth",
        "NVIDIA Megatron",
        "NVIDIA Triton Inference Server",
        "FAISS",
      ],
    },
    {
      id: 2,
      name: "Tesseract",
      description: "Smartest Search Engine for Founders to Find Accelerators and connect them. LinkedIn for Start-ups.",
      demoLink: "",
      daysCompleted: 180,
      usersTested: 1200,
      lessons: [
        "Founder-accelerator matching requires deep understanding of both sides",
        "Network effects are crucial for platform success",
        "Quality over quantity in connections matters most",
      ],
      accomplishments: ["1200 waitlisted users", "10k fellowship fund from Tim Draper"],
      status: "Beta",
      tech: [],
    },
  ]

  return (
    <div className="p-6 lg:p-12 max-w-6xl mx-auto">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Start-up Projects</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
          <p className="text-muted-foreground mt-4">Building the future, one project at a time</p>
        </div>

        <div className="grid gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-2xl font-bold text-primary">{project.name}</h3>
                    {project.demoLink && (
                      <Button variant="outline" size="sm" asChild>
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                  <p className="text-lg text-muted-foreground mb-4">{project.description}</p>
                  {project.tech.length > 0 && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.slice(0, 8).map((tech) => (
                        <span key={tech} className="px-3 py-1 bg-muted text-sm rounded-full">
                          {tech}
                        </span>
                      ))}
                      {project.tech.length > 8 && (
                        <span className="px-3 py-1 bg-muted text-sm rounded-full text-muted-foreground">
                          +{project.tech.length - 8} more
                        </span>
                      )}
                    </div>
                  )}
                </div>
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    project.status === "Active" ? "bg-green-100 text-green-800" : "bg-blue-100 text-blue-800"
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {project.accomplishments && project.accomplishments.length > 0 && (
                <div className="mb-6">
                  <h4 className="font-semibold text-primary mb-3">Accomplishments:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.accomplishments.map((accomplishment, idx) => (
                      <span key={idx} className="px-3 py-1 bg-accent/20 text-accent text-sm rounded-full">
                        {accomplishment}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <Button variant="outline" className="p-4 h-auto flex flex-col items-center bg-transparent">
                  <div className="text-3xl font-bold text-primary">{project.daysCompleted}</div>
                  <div className="text-sm text-muted-foreground">Days Completed</div>
                </Button>
                <Button variant="outline" className="p-4 h-auto flex flex-col items-center bg-transparent">
                  <div className="text-3xl font-bold text-accent">{project.usersTested}</div>
                  <div className="text-sm text-muted-foreground">Users Tested</div>
                </Button>
                <Button variant="outline" className="p-4 h-auto flex flex-col items-center bg-transparent">
                  <div className="text-3xl font-bold text-secondary">{project.lessons.length}</div>
                  <div className="text-sm text-muted-foreground">Lessons</div>
                </Button>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-3">Key Lessons:</h4>
                <ul className="space-y-2">
                  {project.lessons.map((lesson, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-muted-foreground">{lesson}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}

// Contact Page Component
function ContactPage() {
  return (
    <div className="p-6 lg:p-12 max-w-4xl mx-auto">
      <div className="space-y-8">
        <div className="text-center">
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Contact Me</h1>
          <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        <Card className="p-6 lg:p-8 text-center">
          <div className="space-y-6">
            <div className="text-4xl lg:text-6xl">📧</div>
            <div>
              <h3 className="text-lg lg:text-xl font-bold mb-2">Email Me</h3>
              <p className="text-muted-foreground mb-4 text-sm lg:text-base">
                Email is best to get reach to me. I typically respond within 24 hrs. Short emails more better. Ps dont
                spam. I'd really appreciate.
              </p>
              <Button className="text-base lg:text-lg px-6 lg:px-8 py-2 lg:py-3">yourmajestyzuha@gmail.com</Button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
