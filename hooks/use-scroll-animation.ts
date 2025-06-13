"use client"

import { useRef, type RefObject, useEffect, useState } from "react"
import { useInView } from "framer-motion"

type ScrollAnimationOptions = {
  threshold?: number
  once?: boolean
  amount?: "some" | "all" | number
}

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  options: ScrollAnimationOptions = {},
): [RefObject<T>, boolean] {
  const ref = useRef<T>(null)
  const inView = useInView(ref, {
    once: options.once ?? true,
    amount: options.amount ?? 0.3,
  })

  return [ref, inView]
}

export function useParallaxScroll(speed: number = 0.5) {
  const [offset, setOffset] = useState(0)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!elementRef.current) return
      
      const rect = elementRef.current.getBoundingClientRect()
      const scrolled = window.pageYOffset
      const newOffset = scrolled * speed
      
      setOffset(newOffset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed])

  return {
    elementRef,
    offset,
    style: {
      transform: `translateY(${offset}px)`,
    },
  }
}

export function useMouseMove() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!elementRef.current) return
      
      const rect = elementRef.current.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
      const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
      
      setPosition({ x, y })
    }

    const element = elementRef.current
    if (!element) return

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseleave", () => setPosition({ x: 0, y: 0 }))

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseleave", () => setPosition({ x: 0, y: 0 }))
    }
  }, [])

  return {
    elementRef,
    position,
    style: {
      transform: `translate(${position.x * 10}px, ${position.y * 10}px)`,
    },
  }
}
