"use client"

import React, { useState, useRef } from "react"
import { motion } from "framer-motion"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface LazyImageProps {
  src: string
  alt: string
  className?: string
  placeholder?: string
  blurDataURL?: string
  priority?: boolean
  sizes?: string
  fill?: boolean
  width?: number
  height?: number
}

export default function LazyImage({
  src,
  alt,
  className = "",
  placeholder,
  blurDataURL,
  priority = false,
  sizes,
  fill = false,
  width,
  height,
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(priority)
  const [ref, inView] = useScrollAnimation({ once: true, amount: 0.1 })

  React.useEffect(() => {
    if (inView && !isInView) {
      setIsInView(true)
    }
  }, [inView, isInView])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const imageProps = {
    src: isInView ? src : placeholder || "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMSIgaGVpZ2h0PSIxIiB2aWV3Qm94PSIwIDAgMSAxIiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=",
    alt,
    onLoad: handleLoad,
    loading: priority ? "eager" : "lazy",
    decoding: "async",
    sizes,
    width: !fill ? width : undefined,
    height: !fill ? height : undefined,
    style: fill ? { objectFit: "cover" as const } : undefined,
  }

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Placeholder/blur background */}
      {blurDataURL && !isLoaded && (
        <div
          className="absolute inset-0 scale-110"
          style={{
            backgroundImage: `url(${blurDataURL})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "blur(10px)",
          }}
        />
      )}
      
      {/* Loading skeleton */}
      {!isLoaded && !blurDataURL && (
        <div className="absolute inset-0 bg-white/5 animate-pulse" />
      )}
      
      {/* Main image */}
      <motion.img
        {...imageProps}
        className={`w-full h-full transition-opacity duration-500 ${
          isLoaded ? "opacity-100" : "opacity-0"
        } ${fill ? "absolute inset-0 object-cover" : ""}`}
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ 
          opacity: isLoaded ? 1 : 0,
          scale: isLoaded ? 1 : 1.1
        }}
        transition={{ 
          duration: 0.6,
          ease: [0.4, 0, 0.2, 1]
        }}
      />
      
      {/* Loading indicator */}
      {isInView && !isLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            className="w-8 h-8 border-2 border-white/20 border-t-white/60 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}
    </div>
  )
}