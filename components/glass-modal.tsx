"use client"

import type React from "react"

import { useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { GlassButton } from "./glass-button"

interface GlassModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  children: React.ReactNode
}

export default function GlassModal({ isOpen, onClose, title, children }: GlassModalProps) {
  const modalRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape)
      document.body.style.overflow = "hidden"
    }

    return () => {
      document.removeEventListener("keydown", handleEscape)
      document.body.style.overflow = "auto"
    }
  }, [isOpen, onClose])

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside)
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70"
    >
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.95 }}
        transition={{ duration: 0.2 }}
        className="glass-modal w-full max-w-lg relative overflow-hidden"
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-primary text-xl font-bold text-white m-0">{title}</h3>
            <button onClick={onClose} className="text-white hover:text-emotional-light transition-colors">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="text-white">{children}</div>

          <div className="mt-6 flex justify-end">
            <GlassButton onClick={onClose}>Fechar</GlassButton>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}
