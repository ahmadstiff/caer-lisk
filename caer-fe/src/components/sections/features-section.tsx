"use client"
import { Globe, Shield, Wallet } from "lucide-react"
import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"

export default function FeaturesSection() {
  const features = [
    {
      icon: Globe,
      title: "Crosschain Compatibility",
      description:
        "Seamlessly lend and borrow assets across multiple blockchains without complicated bridges or swaps.",
    },
    {
      icon: Shield,
      title: "Enhanced Security",
      description:
        "Our protocol is built with security-first architecture and undergoes regular audits to ensure your assets are safe.",
    },
    {
      icon: Wallet,
      title: "Competitive Yields",
      description: "Earn higher yields by accessing liquidity pools across multiple chains in a single platform.",
    },
  ]

  return (
    <div className="py-20 px-4 md:px-8 max-w-screen bg-white mx-auto">
      <section className="max-w-7xl mx-auto">
        <SectionTitle
          badge={{ text: "Revolutionary", className: "bg-[#01ECBE] text-[#07094d] hover:bg-[#01ECBE]/80" }}
          title="Unlock the Power of Crosschain DeFi"
          description="Caer Finance bridges the gap between different blockchains, enabling seamless lending and borrowing across multiple networks."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.5,
            staggerChildren: 0.1,
            delayChildren: 0.2,
          }}
        >
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <CardContainer className="w-full max-w-7xl">
                  <CardBody className="bg-white backdrop-blur-sm border border-[#141beb]/10 relative group/card  rounded-xl p-6 h-full">
                    <CardItem
                      translateZ="50"
                      className="w-12 h-12 bg-[#141beb]/10 rounded-full flex items-center justify-center mb-4"
                    >
                      <Icon className="h-6 w-6 text-[#141beb]" />
                    </CardItem>
                    <CardItem translateZ="60" className="text-xl font-bold text-[#07094d] mb-2">
                      {feature.title}
                    </CardItem>
                    <CardItem translateZ="80" className="text-[#07094d]/70">
                      {feature.description}
                    </CardItem>
                  </CardBody>
                </CardContainer>
              </motion.div>
            )
          })}
        </motion.div>
      </section>
    </div>
  )
}
