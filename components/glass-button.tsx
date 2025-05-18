"use client"

import type React from "react"

interface GlassButtonProps {
  children: React.ReactNode
  onClick?: () => void
  className?: string
  variant?: "primary" | "secondary" | "accent"
}

export function GlassButton({ children, onClick, className = "", variant = "primary" }: GlassButtonProps) {
  const variantClasses = {
    primary: "bg-emotional-light/20 hover:bg-emotional-light/30",
    secondary: "bg-cognitive-light/20 hover:bg-cognitive-light/30",
    accent: "bg-autonomy-light/20 hover:bg-autonomy-light/30",
  }

  return (
    <div className="buttonWrap">
      <button onClick={onClick} className={`glassButton ${variantClasses[variant]} ${className}`}>
        <span>{children}</span>
      </button>
      <div className="buttonShadow"></div>
    </div>
  )
}

export default GlassButton
