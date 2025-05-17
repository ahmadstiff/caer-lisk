"use client"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string
  className?: string
}) => {
  const [renderedText, setRenderedText] = useState("")
  const [isComplete, setIsComplete] = useState(false)
  const [key, setKey] = useState(0)

  useEffect(() => {
    setRenderedText("")
    setIsComplete(false)
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex <= words.length) {
        setRenderedText(words.slice(0, currentIndex))
        currentIndex++
      } else {
        clearInterval(interval)
        setIsComplete(true)
      }
    }, 30)

    return () => clearInterval(interval)
  }, [words, key])

  const handleReplay = () => {
    setKey((prev) => prev + 1)
  }

  return (
    <div className="relative" key={key}>
      <motion.div
        className={cn("text-[#07094d]/80", className)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {renderedText}
        {!isComplete && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
            className="ml-1 inline-block h-4 w-1 bg-[#141beb]"
          />
        )}
      </motion.div>
    </div>
  )
}
