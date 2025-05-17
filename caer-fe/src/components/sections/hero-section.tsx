"use client"

import { TextHoverEffect } from "@/components/ui/text-hover-effect"
import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"
import { TextGenerateEffect } from "@/components/ui/text-generate-effect"

export default function HeroSection() {
  const words = [
    {
      text: "Crosschain",
    },
    {
      text: "Lending",
    },
    {
      text: "And",
    },
    {
      text: "Borrowing",
    },
    {
      text: "by",
    },
    {
      text: "LISK.",
      className: "text-[#FE5D26]",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  }

  return (

    <motion.div
      className="flex items-center justify-center w-full flex-col px-4 min-h-screen overflow-hidden relative z-10"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      {/* Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-[150px] ml-4" // ml-4 adds spacing between text and video
      >
        <source src="/lisk.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>
      <motion.h2
        className="bg-clip-text text-center text-[#07094d] bg-gradient-to-b from-[#07094d] to-[#141beb] text-2xl md:text-4xl font-sans relative z-20 font-bold tracking-tight"
        variants={itemVariants}
      >
        <TextHoverEffect text="CAER FINANCE" />
      </motion.h2>

      <motion.div variants={itemVariants} className="flex items-center justify-center">
        {/* Text */}
        <TypewriterEffectSmooth words={words} className="text-center" />

      </motion.div>


      <motion.div variants={itemVariants} className="max-w-xl text-center mt-6 mb-8">
        <TextGenerateEffect
          words="Caer Finance bridges the gap between different blockchains, enabling seamless lending and borrowing across multiple networks."
          className="text-lg"
        />
      </motion.div>

      <motion.div
        className="flex flex-row items-center gap-4 md:gap-6 xl:gap-12 mt-6 md:mt-10 text-center z-30"
        variants={itemVariants}
      >
        <Button
          variant="outline"
          size="lg"
          className="bg-[#141beb] hover:bg-[#074af2] text-white hover:text-white px-6 py-6 text-md rounded-xl cursor-pointer"
          asChild
        >
          <Link href="/earn">Start Earn</Link>
        </Button>

        <Button
          variant="outline"
          size="lg"
          className="border-[#01ECBE] bg-[#ffffff2e] text-[#07094d] hover:bg-[#01ECBE]/10 px-6 py-6 text-md rounded-xl cursor-pointer"
          asChild
        >
          <Link href="https://caer-finance.gitbook.io/caer-finance/" target="_blank" rel="noopener noreferrer">
            View Docs
          </Link>
        </Button>
      </motion.div>
    </motion.div>
  )
}
