"use client"

import { useState } from "react"
import { useRouter, usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Globe } from "lucide-react"
import { useClickAway } from "react-use"
import { useRef } from "react"

type Language = {
  code: string
  name: string
  flag: string
}

const languages: Language[] = [
  { code: "pt", name: "Português", flag: "🇧🇷" },
  { code: "en", name: "English", flag: "🇺🇸" },
]

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()
  const ref = useRef(null)

  // Determine current language from URL or default to Portuguese
  const currentLang = pathname?.startsWith("/en") ? "en" : "pt"
  const currentLanguage = languages.find((lang) => lang.code === currentLang) || languages[0]

  useClickAway(ref, () => {
    setIsOpen(false)
  })

  const switchLanguage = (langCode: string) => {
    if (langCode === currentLang) return

    // Navigate to the equivalent page in the selected language
    if (langCode === "en") {
      // If switching to English from Portuguese root
      if (pathname === "/") {
        router.push("/en")
      } else {
        // Add /en prefix to current path
        router.push(`/en${pathname}`)
      }
    } else {
      // If switching to Portuguese from English
      if (pathname === "/en") {
        router.push("/")
      } else {
        // Remove /en prefix from current path
        router.push(pathname.replace(/^\/en/, ""))
      }
    }

    setIsOpen(false)
  }

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 px-3 py-1.5 rounded-md bg-gray-light/20 text-white hover:bg-gray-light/30 transition-colors"
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <Globe className="w-4 h-4 mr-1" />
        <span className="mr-1">{currentLanguage.flag}</span>
        <span className="hidden sm:inline">{currentLanguage.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-1 w-40 bg-white rounded-md shadow-lg z-50"
            role="listbox"
          >
            {languages.map((language) => (
              <button
                key={language.code}
                className={`w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-gray-light/20 transition-colors ${
                  language.code === currentLang
                    ? "bg-emotional-light/10 text-emotional-dark font-medium"
                    : "text-gray-dark"
                }`}
                onClick={() => switchLanguage(language.code)}
                role="option"
                aria-selected={language.code === currentLang}
              >
                <span>{language.flag}</span>
                <span>{language.name}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
