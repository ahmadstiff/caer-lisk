"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

interface AssetCardProps {
  name: string
  apy: string
  chain: string
}

export default function AssetCard({ name, apy, chain }: AssetCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: 1.03,
        transition: { duration: 0.2 },
      }}
    >
      <Card className="bg-gradient-to-br from-[#141beb]/5 to-[#01ECBE]/10 backdrop-blur-sm border-none shadow-md hover:shadow-lg transition-all duration-300">
        <CardHeader className="pb-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <motion.div
                className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              >
                <img
                  src={`/placeholder.svg?height=40&width=40&text=${name}`}
                  alt={name}
                  className="w-8 h-8 object-contain"
                />
              </motion.div>
              <CardTitle className="text-lg text-[#07094d]">{name}</CardTitle>
            </div>
            <Badge variant="outline" className="bg-[#f8f9fa] text-[#07094d]">
              {chain}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex justify-between items-center">
            <span className="text-[#07094d]/70">APY</span>
            <motion.span
              className="text-[#141beb] font-bold"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {apy}
            </motion.span>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}
