"use client"

import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { scrollToSection } from "@/utils/enhanced-smooth-scroll"
import { useIsMobile } from "@/hooks/use-mobile"
import { ThemeToggle } from "@/components/theme-toggle"

export default function RestoredHeader() {
  const [activeSection, setActiveSection] = useState("home")
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()
  const isMobile = useIsMobile()

  const sections = ["home", "demo", "economic-impact", "contact"]

  const handleScroll = () => {
    setScrolled(window.scrollY > 50)

    const scrollPosition = window.scrollY

    // Find which section is currently in view
    const sectionElements = sections.map((section) => {
      const element = document.getElementById(section)
      if (!element) return { id: section, top: 0, bottom: 0 }

      const rect = element.getBoundingClientRect()
      return {
        id: section,
        top: rect.top + scrollPosition,
        bottom: rect.bottom + scrollPosition,
      }
    })

    for (const section of sectionElements) {
      if (scrollPosition >= section.top - 200 && scrollPosition < section.bottom - 200) {
        setActiveSection(section.id)
        break
      }
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed left-0 w-full z-50 transition-all duration-500 ease-out ${
        scrolled
          ? "py-2 md:py-3 backdrop-blur-xl border-b border-white/5"
          : "py-4 md:py-6 bg-transparent"
      }`}
      style={{
        top: "var(--banner-height, 0)",
        marginTop: "-1px",
        ...(scrolled ? {background: "rgba(15, 15, 15, 0.9)"} : {})
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span style={{fontFamily: "'Space Grotesk', sans-serif", fontSize: "1.5rem", fontWeight: "700", color: "#ffffff", letterSpacing: "-0.02em", textShadow: "0 0 20px rgba(255, 255, 255, 0.1)", transition: "all 0.3s ease"}}>
              ZeoCare
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <button
            onClick={() => {
              scrollToSection("home")
              setActiveSection("home")
            }}
            className={`px-3 py-2 text-sm relative transition-all duration-300 ${
              activeSection === "home" 
                ? "bg-white/5" 
                : "hover:bg-white/5"
            }`}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: "400",
              color: activeSection === "home" ? "#ffffff" : "rgba(255, 255, 255, 0.7)",
              border: "none",
              borderRadius: "0"
            }}
          >
            Home
          </button>
          <button
            onClick={() => {
              scrollToSection("demo")
              setActiveSection("demo")
            }}
            className={`px-3 py-2 text-sm relative transition-all duration-300 ${
              activeSection === "demo" 
                ? "bg-white/5" 
                : "hover:bg-white/5"
            }`}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: "400",
              color: activeSection === "demo" ? "#ffffff" : "rgba(255, 255, 255, 0.7)",
              border: "none",
              borderRadius: "0"
            }}
          >
            Demo
          </button>
          <button
            onClick={() => {
              scrollToSection("economic-impact")
              setActiveSection("economic-impact")
            }}
            className={`px-3 py-2 text-sm relative transition-all duration-300 ${
              activeSection === "economic-impact" 
                ? "bg-white/5" 
                : "hover:bg-white/5"
            }`}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: "400",
              color: activeSection === "economic-impact" ? "#ffffff" : "rgba(255, 255, 255, 0.7)",
              border: "none",
              borderRadius: "0"
            }}
          >
            Impact
          </button>
          <button
            onClick={() => {
              scrollToSection("contact")
              setActiveSection("contact")
            }}
            className={`px-3 py-2 text-sm relative transition-all duration-300 ${
              activeSection === "contact" 
                ? "bg-white/5" 
                : "hover:bg-white/5"
            }`}
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontWeight: "400",
              color: activeSection === "contact" ? "#ffffff" : "rgba(255, 255, 255, 0.7)",
              border: "none",
              borderRadius: "0"
            }}
          >
            Contact
          </button>
          <div className="ml-2 flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}