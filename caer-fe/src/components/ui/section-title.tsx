"use client"

import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface SectionTitleProps {
  badge: {
    text: string
    className: string
  }
  title: string
  description: string
}

export function SectionTitle({ badge, title, description }: SectionTitleProps) {
  return (
    <motion.div
      className="text-center mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Badge className={`mb-4 ${badge.className}`}>{badge.text}</Badge>
      </motion.div>
      <motion.h2
        className="text-3xl md:text-5xl font-bold text-[#07094d] mb-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="text-lg text-[#07094d]/80 max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {description}
      </motion.p>
    </motion.div>
  )
}
