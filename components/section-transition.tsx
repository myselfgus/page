"use client"

import { type ReactNode, useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { useIsMobile } from "@/hooks/use-mobile"

interface SectionTransitionProps {
  children: ReactNode
  className?: string
  transitionType?: "fade" | "slide" | "scale" | "rotate"
  delay?: number
  duration?: number
}

export default function SectionTransition({
  children,
  className = "",
  transitionType = "fade",
  delay = 0,
  duration = 0.6,
}: SectionTransitionProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "start 0.25"],
  })

  // Se for mobile, não aplicar animações
  if (isMobile) {
    return <div className={className}>{children}</div>
  }

  // Different animation variants based on transition type
  const getAnimationProps = () => {
    switch (transitionType) {
      case "fade":
        return {
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
        }
      case "slide":
        return {
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
          x: useTransform(scrollYProgress, [0, 1], [-100, 0]),
        }
      case "scale":
        return {
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
          scale: useTransform(scrollYProgress, [0, 1], [0.8, 1]),
        }
      case "rotate":
        return {
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
          rotateY: useTransform(scrollYProgress, [0, 1], [45, 0]),
        }
      default:
        return {
          opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
        }
    }
  }

  return (
    <motion.div ref={ref} style={getAnimationProps()} transition={{ duration, delay }} className={className}>
      {children}
    </motion.div>
  )
}
