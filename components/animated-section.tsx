"use client"

import React from "react"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedSectionProps {
  children: React.ReactNode
  className?: string
  animation?: "fadeIn" | "slideUp" | "slideLeft" | "slideRight" | "scale"
  delay?: number
  duration?: number
  id?: string
}

const animations = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  },
  slideUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  slideLeft: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  },
  slideRight: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 }
  }
}

export default function AnimatedSection({
  children,
  className = "",
  animation = "slideUp",
  delay = 0,
  duration = 0.8,
  id
}: AnimatedSectionProps) {
  const [ref, inView] = useScrollAnimation({ 
    once: true, 
    amount: 0.2 
  })

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animations[animation]}
      transition={{
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
    >
      {children}
    </motion.section>
  )
}