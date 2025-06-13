"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { scrollToSection } from "@/utils/enhanced-smooth-scroll"

export default function SimpleHeader() {
  const [scrolled, setScrolled] = useState(false)

  const handleScroll = () => {
    setScrolled(window.scrollY > 50)
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "py-2 md:py-3 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5"
          : "py-4 md:py-6 bg-transparent"
      }`}
      style={{
        top: "var(--banner-height, 0)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center">
            <span className="font-primary font-[300] text-2xl md:text-3xl tracking-[-0.05em] text-white/90 hover:text-white transition-all duration-300">
              ZEO
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("demo")}
            className="text-white/60 hover:text-white font-[300] text-sm tracking-wide transition-colors duration-300"
          >
            Demo
          </button>
          <button
            className="px-6 py-2 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 
                       text-white/90 hover:text-white font-[300] text-sm tracking-wide
                       rounded-lg backdrop-blur-sm transition-all duration-300
                       hover:scale-105 active:scale-95"
          >
            Get Access
          </button>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button 
            onClick={() => scrollToSection("demo")}
            className="text-white/60 hover:text-white font-[300] text-sm transition-colors duration-300"
          >
            Demo
          </button>
        </div>
      </div>
    </header>
  )
}