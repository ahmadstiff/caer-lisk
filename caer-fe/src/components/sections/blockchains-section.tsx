"use client"
import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"

export default function BlockchainsSection() {
  const blockchains = [
    { name: "Ethereum", image: "/eth2.jpg" },
    { name: "Lisk", image: "/lisk-logo.png" },
    { name: "Polygon", image: "/polygon.png" },
    { name: "Base", image: "/base-logo.png" },
    { name: "Pharos", image: "/pharos-logo.jpg" },
    { name: "BNB", image: "/bnb.png" },
    { name: "Arbitrum", image: "/arbitrum-arb-logo.png" },
    { name: "Optimism", image: "/optimism.jpg" },
    { name: "Polkadot", image: "/polkadot.png" },
    { name: "Manta", image: "manta.png" },
  ]

  return (
    <section className="py-20 px-4 md:px-8 max-w-screen bg-white mx-auto ">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge={{ text: "Multichain", className: "bg-[#01ECBE] text-[#07094d] hover:bg-[#01ECBE]/80" }}
          title="Supported Blockchains"
          description="Caer Finance connects multiple blockchains, allowing for seamless asset transfers and lending operations."
        />

        <motion.div
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 md:gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {blockchains.map((chain, index) => (
            <motion.div
              key={index}
              className="bg-white border border-gray-100 shadow-lg rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{
                y: -8,
                transition: { type: "spring", stiffness: 300 },
              }}
            >
              <div className="w-16 h-16 mb-4 rounded-full bg-[#f8f9fa] flex items-center justify-center">
                <img
                  src={`${chain.image}`}
                  alt={chain.name}
                  className="w-12 h-12 object-contain"
                />
              </div>
              <h3 className="text-[#07094d] font-medium text-center">{chain.name}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
