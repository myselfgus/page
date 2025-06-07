"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const percent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
      setProgress(percent)
    }

    updateProgress()
    window.addEventListener("scroll", updateProgress)
    window.addEventListener("resize", updateProgress)
    return () => {
      window.removeEventListener("scroll", updateProgress)
      window.removeEventListener("resize", updateProgress)
    }
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 h-1 bg-brand-primary z-[60] origin-left"
      style={{ width: `${progress}%` }}
      transition={{ ease: "linear", duration: 0.1 }}
    />
  )
}
