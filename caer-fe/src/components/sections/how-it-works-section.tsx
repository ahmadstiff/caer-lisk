"use client";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";

export default function HowItWorksSection() {
  const steps = [
    {
      title: "Connect Wallet",
      description:
        "Connect your preferred wallet to access the Caer Finance platform.",
    },
    {
      title: "Select Asset",
      description:
        "Choose which asset you want to lend or borrow across supported chains.",
    },
    {
      title: "Set Terms",
      description:
        "Define your lending or borrowing parameters including amount and duration.",
    },
    {
      title: "Confirm Transaction",
      description:
        "Review and confirm your transaction to complete the process.",
    },
  ];

  return (
    <section className="py-20 px-4 md:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          badge={{
            text: "Simple Process",
            className: "bg-[#141beb] text-white hover:bg-[#141beb]/80",
          }}
          title="How Caer Finance Works"
          description="Our innovative protocol makes crosschain lending and borrowing accessible to everyone."
        />

        <motion.div
          className="grid grid-cols-1 md:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                type: "spring",
                stiffness: 100,
              }}
            >
                <div className="h-full flex flex-col">
                  <div className="w-12 h-12 bg-[#141beb]/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-[#141beb] font-bold text-xl">
                      {index + 1}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-[#07094d] mb-2">
                    {step.title}
                  </h3>
                  <p className="text-[#07094d]/70 flex-grow">
                    {step.description}
                  </p>
                </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{
                      repeat: Number.POSITIVE_INFINITY,
                      duration: 1.5,
                    }}
                  >
                    <ArrowRight className="w-6 h-6 text-[#141beb]" />
                  </motion.div>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
