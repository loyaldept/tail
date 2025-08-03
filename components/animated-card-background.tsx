"use client"

import { useEffect, useRef } from "react"

export function AnimatedCardBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    const particles: LaserParticle[] = []

    // Initialize laser particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 2,
        vy: (Math.random() - 0.5) * 2,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        hue: Math.random() * 360,
      })
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    const animate = () => {
      // Clear with subtle gradient
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2,
        canvas.height / 2,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) / 2,
      )

      bgGradient.addColorStop(0, "rgba(15, 23, 42, 0.8)")
      bgGradient.addColorStop(0.5, "rgba(88, 28, 135, 0.4)")
      bgGradient.addColorStop(1, "rgba(15, 23, 42, 0.9)")

      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.02

      // Draw subtle floating particles
      particles.forEach((particle) => {
        particle.x += particle.vx
        particle.y += particle.vy

        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1

        // Add floating motion
        particle.x += Math.sin(time + particle.x * 0.01) * 0.5
        particle.y += Math.cos(time + particle.y * 0.01) * 0.5

        // Draw particle with glow
        const glowGradient = ctx.createRadialGradient(
          particle.x,
          particle.y,
          0,
          particle.x,
          particle.y,
          particle.size * 4,
        )

        glowGradient.addColorStop(0, `hsla(${particle.hue}, 100%, 70%, ${particle.opacity})`)
        glowGradient.addColorStop(1, "transparent")

        ctx.fillStyle = glowGradient
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 4, 0, Math.PI * 2)
        ctx.fill()
      })

      // Add subtle laser beams crossing the screen
      if (Math.random() > 0.98) {
        const startX = Math.random() * canvas.width
        const startY = Math.random() * canvas.height
        const endX = Math.random() * canvas.width
        const endY = Math.random() * canvas.height

        const laserGradient = ctx.createLinearGradient(startX, startY, endX, endY)
        laserGradient.addColorStop(0, "transparent")
        laserGradient.addColorStop(0.5, `hsla(${Math.random() * 360}, 100%, 70%, 0.3)`)
        laserGradient.addColorStop(1, "transparent")

        ctx.strokeStyle = laserGradient
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.moveTo(startX, startY)
        ctx.lineTo(endX, endY)
        ctx.stroke()
      }

      animationFrameId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 -z-10" />
}

interface LaserParticle {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  hue: number
}
