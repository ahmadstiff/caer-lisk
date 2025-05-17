"use client"
import { cn } from "@/lib/utils"
import { useEffect, useRef, useState } from "react"

export const BackgroundBeams = ({
  className,
}: {
  className?: string
}) => {
  const [mousePosition, setMousePosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  })

  const beamsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!beamsRef.current) return
      const rect = beamsRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <div
      ref={beamsRef}
      className={cn("h-full w-full bg-white flex items-center justify-center overflow-hidden rounded-md", className)}
    >
      <svg className="absolute inset-0 z-0 opacity-50" width="100%" height="100%">
        <defs>
          <radialGradient id="gradient" cx="50%" cy="50%" r="50%" fx={mousePosition.x} fy={mousePosition.y}>
            <stop offset="0%" stopColor="#141beb" />
            <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
          </radialGradient>
        </defs>
        <rect x="0" y="0" width="100%" height="100%" fill="url(#gradient)"></rect>
      </svg>
    </div>
  )
}
