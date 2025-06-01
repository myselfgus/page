"use client"

import type { ReactNode } from "react"

interface SectionTransitionProps {
  children: ReactNode
  className?: string
  transitionType?: "fade" | "slide" | "scale" | "rotate"
  delay?: number
  duration?: number
}

export default function SectionTransition({ children, className = "" }: SectionTransitionProps) {
  // Simplified - no complex animations
  return <div className={`transition-opacity duration-500 ${className}`}>{children}</div>
}
