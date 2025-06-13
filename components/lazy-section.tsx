"use client"

import React, { useState } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"
import { motion } from "framer-motion"

interface LazySectionProps {
  children: React.ReactNode | (() => React.ReactNode)
  fallback?: React.ReactNode
  threshold?: number
  rootMargin?: string
  className?: string
  id?: string
}

export default function LazySection({
  children,
  fallback,
  threshold = 0.1,
  rootMargin = "100px",
  className = "",
  id
}: LazySectionProps) {
  const [hasLoaded, setHasLoaded] = useState(false)
  const [ref, inView] = useScrollAnimation({ 
    once: true, 
    amount: threshold 
  })

  React.useEffect(() => {
    if (inView && !hasLoaded) {
      // Add small delay to ensure smooth loading
      const timer = setTimeout(() => {
        setHasLoaded(true)
      }, 100)
      
      return () => clearTimeout(timer)
    }
  }, [inView, hasLoaded])

  const renderChildren = () => {
    if (typeof children === "function") {
      return children()
    }
    return children
  }

  const defaultFallback = (
    <div className="w-full h-64 bg-white/3 animate-pulse rounded-lg flex items-center justify-center">
      <motion.div
        className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  )

  return (
    <div ref={ref} className={className} id={id}>
      {hasLoaded ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6,
            ease: [0.4, 0, 0.2, 1]
          }}
        >
          {renderChildren()}
        </motion.div>
      ) : (
        fallback || defaultFallback
      )}
    </div>
  )
}