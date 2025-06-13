"use client"

import React from "react"
import { motion } from "framer-motion"
import { useMouseMove } from "@/hooks/use-scroll-animation"

interface ModernButtonProps {
  children: React.ReactNode
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "md" | "lg"
  onClick?: () => void
  href?: string
  className?: string
  disabled?: boolean
  icon?: React.ReactNode
  iconPosition?: "left" | "right"
  ariaLabel?: string
  ariaDescribedBy?: string
}

export default function ModernButton({
  children,
  variant = "primary",
  size = "md",
  onClick,
  href,
  className = "",
  disabled = false,
  icon,
  iconPosition = "right",
  ariaLabel,
  ariaDescribedBy,
}: ModernButtonProps) {
  const { elementRef, position, style } = useMouseMove()

  const baseStyles = "relative overflow-hidden font-secondary font-[500] tracking-wide transition-all duration-300 ease-out transform-gpu"
  
  const variants = {
    primary: "bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white/90 hover:text-white shadow-glow-white-sm hover:shadow-glow-white-md",
    secondary: "bg-transparent hover:bg-white/5 border border-white/20 hover:border-white/30 text-white/70 hover:text-white/90",
    ghost: "bg-transparent hover:bg-white/5 text-white/60 hover:text-white/80 border-0"
  }
  
  const sizes = {
    sm: "px-4 py-2 text-sm rounded-lg",
    md: "px-6 py-3 md:px-8 md:py-4 text-sm md:text-base rounded-lg",
    lg: "px-8 py-4 md:px-10 md:py-5 text-base md:text-lg rounded-xl"
  }
  
  const hoverEffects = "hover:scale-105 active:scale-95 hover:-translate-y-0.5"
  const focusStyles = "focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-black"
  const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
  
  const buttonClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${hoverEffects} ${focusStyles} ${disabledStyles} ${className}`

  const buttonContent = (
    <>
      {/* Animated background glow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-white/5 via-white/10 to-white/5 opacity-0 transition-opacity duration-300"
        animate={{
          opacity: position.x !== 0 || position.y !== 0 ? 1 : 0,
        }}
        style={{
          transform: `translate(${position.x * 20}px, ${position.y * 20}px)`,
        }}
      />
      
      {/* Shimmer effect */}
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer" />
      </div>
      
      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {icon && iconPosition === "left" && (
          <span className="transition-transform duration-300 group-hover:scale-110">
            {icon}
          </span>
        )}
        {children}
        {icon && iconPosition === "right" && (
          <span className="transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </>
  )

  if (href) {
    return (
      <motion.a
        ref={elementRef as any}
        href={href}
        className={`inline-flex items-center justify-center group ${buttonClasses}`}
        whileHover={{ scale: disabled ? 1 : 1.05 }}
        whileTap={{ scale: disabled ? 1 : 0.95 }}
        style={style}
        aria-label={ariaLabel}
        aria-describedby={ariaDescribedBy}
        tabIndex={disabled ? -1 : 0}
      >
        {buttonContent}
      </motion.a>
    )
  }

  return (
    <motion.button
      ref={elementRef as any}
      onClick={onClick}
      disabled={disabled}
      className={`inline-flex items-center justify-center group ${buttonClasses}`}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      style={style}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      type="button"
    >
      {buttonContent}
    </motion.button>
  )
}