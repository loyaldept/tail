"use client"

import { useEffect, useRef } from "react"

export function AIFintechBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationFrameId: number
    let time = 0

    // Multiple particle systems for layered effects
    const floatingOrbs: FloatingOrb[] = []
    const energyWaves: EnergyWave[] = []
    const digitalRain: DigitalDrop[] = []
    const geometricShapes: GeometricShape[] = []
    const glitchLines: GlitchLine[] = []
    const holographicGrid: GridLine[] = []

    // Initialize floating orbs with different sizes and colors
    for (let i = 0; i < 25; i++) {
      floatingOrbs.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        size: Math.random() * 60 + 20,
        opacity: Math.random() * 0.6 + 0.3,
        hue: Math.random() * 60 + 220, // Blue to violet range
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: Math.random() * 0.02 + 0.01,
      })
    }

    // Initialize energy waves
    for (let i = 0; i < 8; i++) {
      energyWaves.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: 0,
        maxRadius: Math.random() * 300 + 200,
        speed: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.2,
        hue: Math.random() * 40 + 240,
      })
    }

    // Initialize digital rain
    for (let i = 0; i < 100; i++) {
      digitalRain.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        speed: Math.random() * 3 + 2,
        length: Math.random() * 20 + 10,
        opacity: Math.random() * 0.8 + 0.3,
      })
    }

    // Initialize geometric shapes
    for (let i = 0; i < 15; i++) {
      geometricShapes.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1,
        vy: (Math.random() - 0.5) * 1,
        size: Math.random() * 40 + 20,
        rotation: Math.random() * Math.PI * 2,
        rotationSpeed: (Math.random() - 0.5) * 0.02,
        sides: Math.floor(Math.random() * 4) + 3,
        hue: Math.random() * 60 + 200,
      })
    }

    // Initialize glitch lines
    for (let i = 0; i < 20; i++) {
      glitchLines.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        width: Math.random() * 200 + 50,
        height: Math.random() * 3 + 1,
        opacity: 0,
        glitchTimer: Math.random() * 100,
      })
    }

    // Initialize holographic grid
    for (let i = 0; i < 30; i++) {
      holographicGrid.push({
        x1: Math.random() * canvas.width,
        y1: Math.random() * canvas.height,
        x2: Math.random() * canvas.width,
        y2: Math.random() * canvas.height,
        opacity: Math.random() * 0.3 + 0.1,
        pulse: Math.random() * Math.PI * 2,
      })
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    const animate = () => {
      // Create vibrant dynamic gradient background
      const bgGradient = ctx.createRadialGradient(
        canvas.width / 2 + Math.sin(time * 0.5) * 200,
        canvas.height / 2 + Math.cos(time * 0.3) * 200,
        0,
        canvas.width / 2,
        canvas.height / 2,
        Math.max(canvas.width, canvas.height) * 0.8,
      )

      // Much more vibrant colors
      bgGradient.addColorStop(0, `hsl(${240 + Math.sin(time * 0.1) * 20}, 80%, 15%)`) // Deep blue
      bgGradient.addColorStop(0.3, `hsl(${260 + Math.cos(time * 0.15) * 15}, 70%, 12%)`) // Purple
      bgGradient.addColorStop(0.6, `hsl(${220 + Math.sin(time * 0.2) * 25}, 85%, 8%)`) // Dark blue
      bgGradient.addColorStop(1, `hsl(${280 + Math.cos(time * 0.1) * 20}, 60%, 5%)`) // Deep violet

      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add animated overlay gradients
      const overlayGradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
      overlayGradient.addColorStop(0, `hsla(200, 100%, 50%, ${0.05 + Math.sin(time * 0.3) * 0.03})`)
      overlayGradient.addColorStop(0.5, `hsla(280, 100%, 50%, ${0.03 + Math.cos(time * 0.4) * 0.02})`)
      overlayGradient.addColorStop(1, `hsla(240, 100%, 50%, ${0.04 + Math.sin(time * 0.2) * 0.02})`)

      ctx.fillStyle = overlayGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      time += 0.016

      // Draw holographic grid with more visibility
      holographicGrid.forEach((line) => {
        line.pulse += 0.03
        const opacity = line.opacity * (0.5 + Math.sin(line.pulse) * 0.5)

        ctx.strokeStyle = `hsla(180, 100%, 60%, ${opacity})`
        ctx.lineWidth = 1
        ctx.setLineDash([8, 15])
        ctx.beginPath()
        ctx.moveTo(line.x1, line.y1)
        ctx.lineTo(line.x2, line.y2)
        ctx.stroke()
        ctx.setLineDash([])

        // Add glow effect
        ctx.strokeStyle = `hsla(180, 100%, 80%, ${opacity * 0.3})`
        ctx.lineWidth = 3
        ctx.stroke()
      })

      // Draw and update floating orbs with more vibrant colors
      floatingOrbs.forEach((orb) => {
        orb.x += orb.vx
        orb.y += orb.vy
        orb.pulse += orb.pulseSpeed

        // Bounce off edges
        if (orb.x < -orb.size || orb.x > canvas.width + orb.size) orb.vx *= -1
        if (orb.y < -orb.size || orb.y > canvas.height + orb.size) orb.vy *= -1

        const pulseFactor = 1 + Math.sin(orb.pulse) * 0.4
        const currentSize = orb.size * pulseFactor
        const currentOpacity = orb.opacity * (0.7 + Math.sin(orb.pulse * 2) * 0.3)

        // Create multiple gradient layers for depth with brighter colors
        for (let layer = 4; layer >= 1; layer--) {
          const layerSize = currentSize * layer * 0.6
          const layerOpacity = currentOpacity / layer

          const orbGradient = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, layerSize)

          orbGradient.addColorStop(0, `hsla(${orb.hue}, 100%, 80%, ${layerOpacity})`)
          orbGradient.addColorStop(0.3, `hsla(${orb.hue + 30}, 90%, 70%, ${layerOpacity * 0.8})`)
          orbGradient.addColorStop(0.7, `hsla(${orb.hue - 30}, 80%, 60%, ${layerOpacity * 0.4})`)
          orbGradient.addColorStop(1, `hsla(${orb.hue}, 70%, 50%, 0)`)

          ctx.fillStyle = orbGradient
          ctx.beginPath()
          ctx.arc(orb.x, orb.y, layerSize, 0, Math.PI * 2)
          ctx.fill()
        }
      })

      // Draw and update energy waves with brighter colors
      energyWaves.forEach((wave, index) => {
        wave.radius += wave.speed

        if (wave.radius > wave.maxRadius) {
          wave.radius = 0
          wave.x = Math.random() * canvas.width
          wave.y = Math.random() * canvas.height
        }

        const waveOpacity = wave.opacity * (1 - wave.radius / wave.maxRadius)

        // Outer wave
        ctx.strokeStyle = `hsla(${wave.hue}, 100%, 70%, ${waveOpacity})`
        ctx.lineWidth = 3
        ctx.beginPath()
        ctx.arc(wave.x, wave.y, wave.radius, 0, Math.PI * 2)
        ctx.stroke()

        // Middle wave
        ctx.strokeStyle = `hsla(${wave.hue + 20}, 100%, 80%, ${waveOpacity * 0.7})`
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.arc(wave.x, wave.y, wave.radius * 0.7, 0, Math.PI * 2)
        ctx.stroke()

        // Inner wave
        ctx.strokeStyle = `hsla(${wave.hue + 40}, 100%, 90%, ${waveOpacity * 0.5})`
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(wave.x, wave.y, wave.radius * 0.4, 0, Math.PI * 2)
        ctx.stroke()
      })

      // Draw digital rain with cyan/green colors
      digitalRain.forEach((drop) => {
        drop.y += drop.speed

        if (drop.y > canvas.height + drop.length) {
          drop.y = -drop.length
          drop.x = Math.random() * canvas.width
        }

        const rainGradient = ctx.createLinearGradient(drop.x, drop.y - drop.length, drop.x, drop.y)
        rainGradient.addColorStop(0, `hsla(180, 100%, 50%, 0)`)
        rainGradient.addColorStop(0.3, `hsla(160, 100%, 60%, ${drop.opacity * 0.8})`)
        rainGradient.addColorStop(0.7, `hsla(140, 100%, 70%, ${drop.opacity})`)
        rainGradient.addColorStop(1, `hsla(120, 100%, 80%, ${drop.opacity * 0.6})`)

        ctx.strokeStyle = rainGradient
        ctx.lineWidth = 2
        ctx.beginPath()
        ctx.moveTo(drop.x, drop.y - drop.length)
        ctx.lineTo(drop.x, drop.y)
        ctx.stroke()

        // Add glow
        ctx.strokeStyle = `hsla(160, 100%, 80%, ${drop.opacity * 0.3})`
        ctx.lineWidth = 4
        ctx.stroke()
      })

      // Draw geometric shapes with bright colors
      geometricShapes.forEach((shape) => {
        shape.x += shape.vx
        shape.y += shape.vy
        shape.rotation += shape.rotationSpeed

        // Bounce off edges
        if (shape.x < 0 || shape.x > canvas.width) shape.vx *= -1
        if (shape.y < 0 || shape.y > canvas.height) shape.vy *= -1

        ctx.save()
        ctx.translate(shape.x, shape.y)
        ctx.rotate(shape.rotation)

        // Draw shape with bright glow
        const shapeGradient = ctx.createRadialGradient(0, 0, 0, 0, 0, shape.size * 1.5)
        shapeGradient.addColorStop(0, `hsla(${shape.hue}, 100%, 70%, 0.8)`)
        shapeGradient.addColorStop(0.5, `hsla(${shape.hue + 30}, 90%, 60%, 0.4)`)
        shapeGradient.addColorStop(1, `hsla(${shape.hue - 30}, 80%, 50%, 0)`)

        ctx.fillStyle = shapeGradient
        ctx.beginPath()
        for (let i = 0; i < shape.sides; i++) {
          const angle = (i / shape.sides) * Math.PI * 2
          const x = Math.cos(angle) * shape.size
          const y = Math.sin(angle) * shape.size
          if (i === 0) ctx.moveTo(x, y)
          else ctx.lineTo(x, y)
        }
        ctx.closePath()
        ctx.fill()

        // Draw bright outline
        ctx.strokeStyle = `hsla(${shape.hue}, 100%, 80%, 0.9)`
        ctx.lineWidth = 2
        ctx.stroke()

        // Add outer glow
        ctx.strokeStyle = `hsla(${shape.hue}, 100%, 90%, 0.3)`
        ctx.lineWidth = 6
        ctx.stroke()

        ctx.restore()
      })

      // Draw glitch effects with bright colors
      glitchLines.forEach((glitch) => {
        glitch.glitchTimer += 1

        if (glitch.glitchTimer > 100 && Math.random() > 0.98) {
          glitch.opacity = Math.random() * 0.9 + 0.3
          glitch.glitchTimer = 0
          glitch.x = Math.random() * canvas.width
          glitch.y = Math.random() * canvas.height
        } else if (glitch.glitchTimer < 8) {
          glitch.opacity *= 0.9
        } else {
          glitch.opacity = 0
        }

        if (glitch.opacity > 0) {
          // Bright glitch rectangles
          ctx.fillStyle = `hsla(${Math.random() * 60 + 300}, 100%, 80%, ${glitch.opacity})`
          ctx.fillRect(glitch.x, glitch.y, glitch.width, glitch.height)

          // Add scan line effect
          ctx.fillStyle = `hsla(180, 100%, 90%, ${glitch.opacity * 0.5})`
          ctx.fillRect(0, glitch.y, canvas.width, 2)
        }
      })

      // Add particle explosions with bright colors
      if (Math.random() > 0.995) {
        const explosionX = Math.random() * canvas.width
        const explosionY = Math.random() * canvas.height

        for (let i = 0; i < 30; i++) {
          const angle = (i / 30) * Math.PI * 2
          const distance = Math.random() * 80 + 30
          const x = explosionX + Math.cos(angle) * distance
          const y = explosionY + Math.sin(angle) * distance

          const sparkGradient = ctx.createRadialGradient(x, y, 0, x, y, 8)
          sparkGradient.addColorStop(0, `hsla(${Math.random() * 60 + 200}, 100%, 90%, 1)`)
          sparkGradient.addColorStop(0.5, `hsla(${Math.random() * 60 + 200}, 100%, 70%, 0.6)`)
          sparkGradient.addColorStop(1, `hsla(${Math.random() * 60 + 200}, 100%, 50%, 0)`)

          ctx.fillStyle = sparkGradient
          ctx.beginPath()
          ctx.arc(x, y, 5, 0, Math.PI * 2)
          ctx.fill()
        }
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

interface FloatingOrb {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  opacity: number
  hue: number
  pulse: number
  pulseSpeed: number
}

interface EnergyWave {
  x: number
  y: number
  radius: number
  maxRadius: number
  speed: number
  opacity: number
  hue: number
}

interface DigitalDrop {
  x: number
  y: number
  speed: number
  length: number
  opacity: number
}

interface GeometricShape {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  rotation: number
  rotationSpeed: number
  sides: number
  hue: number
}

interface GlitchLine {
  x: number
  y: number
  width: number
  height: number
  opacity: number
  glitchTimer: number
}

interface GridLine {
  x1: number
  y1: number
  x2: number
  y2: number
  opacity: number
  pulse: number
}
