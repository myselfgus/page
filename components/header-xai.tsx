"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { scrollToSection } from "@/utils/smooth-scroll"

export default function HeaderXAI() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 w-full z-50 transition-all duration-700 ease-out ${
        scrolled ? "py-4" : "py-8"
      }`}
      style={{
        background: scrolled ? "rgba(15, 15, 15, 0.95)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(120%)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "none"
      }}
    >
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="cursor-pointer"
            onClick={() => scrollToSection("home")}
          >
            <span style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: "1.5rem",
              fontWeight: "300",
              color: "rgba(255, 255, 255, 0.9)",
              letterSpacing: "-0.02em"
            }}>
              ZeoCare
            </span>
          </motion.div>

          {/* Minimal Status Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex items-center space-x-3"
          >
            <div className="w-1.5 h-1.5 bg-white/40 animate-pulse"></div>
            <span style={{
              fontFamily: "'Manrope', sans-serif",
              color: "rgba(255, 255, 255, 0.4)",
              fontSize: "0.75rem",
              fontWeight: "400",
              letterSpacing: "0.1em",
              textTransform: "uppercase"
            }}>
              Dimensional AI
            </span>
          </motion.div>

          {/* Simple Contact */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <button
              onClick={() => scrollToSection("contact")}
              style={{
                fontFamily: "'Manrope', sans-serif",
                color: "rgba(255, 255, 255, 0.6)",
                fontSize: "0.8rem",
                fontWeight: "400",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.3s ease"
              }}
              className="hover:text-white/80"
            >
              Connect
            </button>
          </motion.div>
        </div>
      </div>
    </header>
  )
}