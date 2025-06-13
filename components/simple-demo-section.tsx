"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mic, FileText, Zap } from "lucide-react"

export default function SimpleDemoSection() {
  const features = [
    {
      icon: Mic,
      title: "Record",
      description: "Capture clinical audio with precision"
    },
    {
      icon: FileText,
      title: "Transcribe",
      description: "AI-powered speech to text conversion"
    },
    {
      icon: Zap,
      title: "Analyze",
      description: "Extract insights and documentation"
    }
  ]

  return (
    <section 
      id="demo" 
      className="py-24 md:py-32 bg-[#0a0a0a] border-t border-white/5"
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-[300] text-white/90 mb-4 tracking-tight">
              How it works
            </h2>
            <p className="text-lg text-white/50 font-[300]">
              Simple, powerful, efficient
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-white/5 rounded-full flex items-center justify-center 
                               group-hover:bg-white/10 transition-all duration-300">
                  <feature.icon size={24} className="text-white/60 group-hover:text-white/80 transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-[400] text-white/90 mb-3">
                  {feature.title}
                </h3>
                <p className="text-white/50 font-[300] leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <button
              className="group inline-flex items-center px-8 py-4 bg-white/5 hover:bg-white/10 
                         border border-white/10 hover:border-white/20 
                         text-white/90 hover:text-white font-[400] text-base tracking-wide
                         rounded-lg backdrop-blur-sm transition-all duration-300
                         hover:scale-105 active:scale-95
                         focus:outline-none focus:ring-2 focus:ring-white/20"
            >
              <span>Get early access</span>
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-0.5 transition-transform duration-300" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}