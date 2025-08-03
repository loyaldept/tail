"use client"

import { useEffect, useRef } from "react"

export function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0
    const blobs: Blob[] = []

    // Create initial blobs
    for (let i = 0; i < 5; i++) {
      blobs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 100 + Math.random() * 100,
        xSpeed: (Math.random() - 0.5) * 2,
        ySpeed: (Math.random() - 0.5) * 2,
        hue: Math.random() * 360,
      })
    }

    // Handle resize
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Handle mouse movement
    let mouseX = 0
    let mouseY = 0
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }
    window.addEventListener("mousemove", handleMouseMove)

    // Animation function
    const animate = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.02)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      time += 0.01

      blobs.forEach((blob, i) => {
        // Update position
        blob.x += blob.xSpeed
        blob.y += blob.ySpeed

        // Bounce off walls
        if (blob.x < 0 || blob.x > canvas.width) blob.xSpeed *= -1
        if (blob.y < 0 || blob.y > canvas.height) blob.ySpeed *= -1

        // Mouse interaction
        const dx = mouseX - blob.x
        const dy = mouseY - blob.y
        const dist = Math.sqrt(dx * dx + dy * dy)
        if (dist < 300) {
          blob.x -= (dx / dist) * 2
          blob.y -= (dy / dist) * 2
        }

        // Draw gradient blob
        const gradient = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, blob.radius)

        // Use different colors for light/dark mode
        const isDark = document.documentElement.classList.contains("dark")
        if (isDark) {
          gradient.addColorStop(0, `hsla(${blob.hue}, 100%, 50%, 0.1)`)
          gradient.addColorStop(1, "transparent")
        } else {
          gradient.addColorStop(0, `hsla(${blob.hue}, 100%, 90%, 0.1)`)
          gradient.addColorStop(1, "transparent")
        }

        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(blob.x, blob.y, blob.radius * (1 + Math.sin(time + i) * 0.2), 0, Math.PI * 2)
        ctx.fill()

        // Update hue
        blob.hue = (blob.hue + 0.1) % 360
      })

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" style={{ filter: "blur(50px)" }} />
}

interface Blob {
  x: number
  y: number
  radius: number
  xSpeed: number
  ySpeed: number
  hue: number
}
