"use client"

import { useRef, type RefObject } from "react"
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
