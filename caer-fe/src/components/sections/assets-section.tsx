"use client"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { motion } from "framer-motion"
import { SectionTitle } from "@/components/ui/section-title"
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card"
import { Badge } from "@/components/ui/badge"

export default function AssetsSection() {
  const assets = [
    { name: "ETH", apy: "4.5%", chain: "Ethereum" },
    { name: "USDC", apy: "8.2%", chain: "Polygon" },
    { name: "BTC", apy: "3.7%", chain: "Ethereum" },
    { name: "SOL", apy: "5.9%", chain: "Solana" },
    { name: "AVAX", apy: "7.1%", chain: "Avalanche" },
    { name: "MATIC", apy: "9.3%", chain: "Polygon" },
    { name: "DOT", apy: "11.2%", chain: "Polkadot" },
    { name: "ATOM", apy: "10.5%", chain: "Cosmos" },
    { name: "NEAR", apy: "8.7%", chain: "NEAR" },
    { name: "BNB", apy: "6.4%", chain: "BSC" },
    { name: "OP", apy: "12.3%", chain: "Optimism" },
    { name: "ARB", apy: "11.8%", chain: "Arbitrum" },
  ]

  return (
    <section className="py-20 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge={{ text: "Diverse Assets", className: "bg-[#141beb] text-white hover:bg-[#141beb]/80" }}
          title="Supported Assets"
          description="Lend and borrow a wide range of digital assets across multiple blockchains."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Tabs defaultValue="lending" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
              <TabsTrigger value="lending" className="text-lg">
                Lending
              </TabsTrigger>
              <TabsTrigger value="borrowing" className="text-lg">
                Borrowing
              </TabsTrigger>
            </TabsList>
            <TabsContent value="lending">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {assets.slice(0, 8).map((asset, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <CardContainer className="w-full">
                      <CardBody className="bg-white border border-gray-100 shadow-md rounded-xl p-4 h-full">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <CardItem
                              translateZ="20"
                              className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center"
                            >
                              <img
                                src={`/placeholder.svg?height=40&width=40&text=${asset.name}`}
                                alt={asset.name}
                                className="w-8 h-8 object-contain"
                              />
                            </CardItem>
                            <CardItem translateZ="30" className="text-lg text-[#07094d] font-bold">
                              {asset.name}
                            </CardItem>
                          </div>
                          <CardItem translateZ="40">
                            <Badge variant="outline" className="bg-[#f8f9fa] text-[#07094d]">
                              {asset.chain}
                            </Badge>
                          </CardItem>
                        </div>
                        <CardItem translateZ="50" className="mt-4">
                          <div className="flex justify-between items-center">
                            <span className="text-[#07094d]/70">APY</span>
                            <span className="text-[#141beb] font-bold">{asset.apy}</span>
                          </div>
                        </CardItem>
                      </CardBody>
                    </CardContainer>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
            <TabsContent value="borrowing">
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ staggerChildren: 0.1 }}
              >
                {assets.slice(4, 12).map((asset, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <CardContainer className="w-full">
                      <CardBody className="bg-white border border-gray-100 shadow-md rounded-xl p-4 h-full">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <CardItem
                              translateZ="20"
                              className="w-10 h-10 rounded-full bg-[#f8f9fa] flex items-center justify-center"
                            >
                              <img
                                src={`/placeholder.svg?height=40&width=40&text=${asset.name}`}
                                alt={asset.name}
                                className="w-8 h-8 object-contain"
                              />
                            </CardItem>
                            <CardItem translateZ="30" className="text-lg text-[#07094d] font-bold">
                              {asset.name}
                            </CardItem>
                          </div>
                          <CardItem translateZ="40">
                            <Badge variant="outline" className="bg-[#f8f9fa] text-[#07094d]">
                              {asset.chain}
                            </Badge>
                          </CardItem>
                        </div>
                        <CardItem translateZ="50" className="mt-4">
                          <div className="flex justify-between items-center">
                            <span className="text-[#07094d]/70">APY</span>
                            <span className="text-[#141beb] font-bold">{asset.apy}</span>
                          </div>
                        </CardItem>
                      </CardBody>
                    </CardContainer>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </section>
  )
}
