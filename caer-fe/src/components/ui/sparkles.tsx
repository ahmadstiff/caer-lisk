"use client"
import { useRef, useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { useMousePosition } from "@/hooks/useMousePosition";

interface SparklesProps {
  id?: string
  className?: string
  background?: string
  minSize?: number
  maxSize?: number
  particleDensity?: number
  particleColor?: string
  particleImage?: string
  particleSpeed?: number
  particleDirection?: number
  hoverEffect?: boolean
}

export const SparklesCore = ({
  id,
  className,
  background = "transparent",
  minSize = 0.4,
  maxSize = 1,
  particleDensity = 100,
  particleColor = "#FFF",
  particleImage,
  particleSpeed = 1,
  particleDirection = 0,
  hoverEffect = false,
}: SparklesProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mousePosition = useMousePosition()
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })
  const [particles, setParticles] = useState<any[]>([])
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        const canvas = canvasRef.current
        const width = canvas.offsetWidth
        const height = canvas.offsetHeight
        setDimensions({ width, height })
        canvas.width = width
        canvas.height = height
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const particleCount = Math.min(particleDensity, 1000)
    const newParticles = []

    for (let i = 0; i < particleCount; i++) {
      const x = Math.random() * dimensions.width
      const y = Math.random() * dimensions.height
      const size = Math.random() * (maxSize - minSize) + minSize
      const speedFactor = Math.random() * particleSpeed
      const direction = (Math.random() * 360 * Math.PI) / 180 + particleDirection
      const opacity = Math.random()

      newParticles.push({
        x,
        y,
        size,
        speedFactor,
        direction,
        opacity,
      })
    }

    setParticles(newParticles)
  }, [dimensions, minSize, maxSize, particleDensity, particleSpeed, particleDirection])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const animate = () => {
      ctx.clearRect(0, 0, dimensions.width, dimensions.height)
      ctx.fillStyle = background
      ctx.fillRect(0, 0, dimensions.width, dimensions.height)

      particles.forEach((particle) => {
        const distance = hoverEffect
          ? Math.sqrt(Math.pow(mousePosition.x - particle.x, 2) + Math.pow(mousePosition.y - particle.y, 2))
          : 0
        const hoverOpacity = hoverEffect ? Math.max(0, 1 - distance / 200) : 0

        ctx.globalAlpha = hoverEffect ? Math.min(1, particle.opacity + hoverOpacity) : particle.opacity

        if (particleImage) {
          const img = new Image()
          img.src = particleImage
          ctx.drawImage(img, particle.x, particle.y, particle.size, particle.size)
        } else {
          ctx.fillStyle = particleColor
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
          ctx.fill()
        }

        // Update particle position
        particle.x += Math.cos(particle.direction) * particle.speedFactor
        particle.y += Math.sin(particle.direction) * particle.speedFactor

        // Wrap particles around the screen
        if (particle.x < 0) particle.x = dimensions.width
        if (particle.x > dimensions.width) particle.x = 0
        if (particle.y < 0) particle.y = dimensions.height
        if (particle.y > dimensions.height) particle.y = 0
      })

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [particles, dimensions, background, particleColor, particleImage, mousePosition, hoverEffect])

  return <canvas ref={canvasRef} id={id} className={cn("h-full w-full", className)} />
}
