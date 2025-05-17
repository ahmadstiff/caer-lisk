"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { LucideIcon } from "lucide-react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
}

export default function FeatureCard({ icon: Icon, title, description }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
    >
      <Card className="bg-gradient-to-br from-[#141beb]/5 to-[#01ECBE]/5 backdrop-blur-sm border-none shadow-lg hover:shadow-xl transition-all duration-300">
        <CardHeader>
          <motion.div
            className="w-12 h-12 bg-[#141beb]/10 rounded-full flex items-center justify-center mb-4"
            whileHover={{ rotate: 5, scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Icon className="h-6 w-6 text-[#141beb]" />
          </motion.div>
          <CardTitle className="text-xl text-[#07094d]">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-[#07094d]/70">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  )
}
