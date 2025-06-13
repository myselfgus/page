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
          ? "py-2 md:py-3 bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5"
          : "py-4 md:py-6 bg-transparent"
      }`}
      style={{
        top: "var(--banner-height, 0)",
        marginTop: "-1px",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-primary font-[300] text-2xl md:text-3xl tracking-[-0.05em] text-white/90 hover:text-white transition-all duration-300">
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
            className={`px-3 py-2 text-sm font-medium relative rounded-lg transition-all duration-300 ${
              activeSection === "home" 
                ? "text-white bg-white/5" 
                : "text-white/70 hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="relative font-[400] tracking-wide">
              Home
            </span>
          </button>
          <button
            onClick={() => {
              scrollToSection("demo")
              setActiveSection("demo")
            }}
            className={`px-3 py-2 text-sm font-medium relative rounded-lg transition-all duration-300 ${
              activeSection === "demo" 
                ? "text-white bg-white/5" 
                : "text-white/70 hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="relative font-[400] tracking-wide">
              Demo
            </span>
          </button>
          <button
            onClick={() => {
              scrollToSection("economic-impact")
              setActiveSection("economic-impact")
            }}
            className={`px-3 py-2 text-sm font-medium relative rounded-lg transition-all duration-300 ${
              activeSection === "economic-impact" 
                ? "text-white bg-white/5" 
                : "text-white/70 hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="relative font-[400] tracking-wide">
              Impact
            </span>
          </button>
          <button
            onClick={() => {
              scrollToSection("contact")
              setActiveSection("contact")
            }}
            className={`px-3 py-2 text-sm font-medium relative rounded-lg transition-all duration-300 ${
              activeSection === "contact" 
                ? "text-white bg-white/5" 
                : "text-white/70 hover:text-white hover:bg-white/5"
            }`}
          >
            <span className="relative font-[400] tracking-wide">
              Contact
            </span>
          </button>
          <div className="ml-2 flex items-center space-x-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  )
}