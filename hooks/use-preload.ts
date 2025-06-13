"use client"

import { useEffect, useCallback } from "react"

interface PreloadOptions {
  priority?: "high" | "low"
  as?: "script" | "style" | "image" | "font" | "fetch"
  crossOrigin?: "anonymous" | "use-credentials"
  type?: string
}

export function usePreload() {
  const preloadResource = useCallback((
    href: string, 
    options: PreloadOptions = {}
  ) => {
    const { 
      priority = "low", 
      as = "fetch", 
      crossOrigin,
      type 
    } = options

    // Check if already preloaded
    const existing = document.querySelector(`link[href="${href}"]`)
    if (existing) return

    const link = document.createElement("link")
    link.rel = "preload"
    link.href = href
    link.as = as
    
    if (crossOrigin) {
      link.crossOrigin = crossOrigin
    }
    
    if (type) {
      link.type = type
    }

    // Add fetchpriority for supported browsers
    if ("fetchPriority" in link) {
      (link as any).fetchPriority = priority
    }

    document.head.appendChild(link)
  }, [])

  const preloadImage = useCallback((src: string, priority: "high" | "low" = "low") => {
    return new Promise<HTMLImageElement>((resolve, reject) => {
      const img = new Image()
      
      // Set fetchPriority if supported
      if ("fetchPriority" in img) {
        (img as any).fetchPriority = priority
      }
      
      img.onload = () => resolve(img)
      img.onerror = reject
      img.src = src
    })
  }, [])

  const preloadFont = useCallback((
    href: string, 
    type: string = "font/woff2"
  ) => {
    preloadResource(href, {
      as: "font",
      type,
      crossOrigin: "anonymous",
      priority: "high"
    })
  }, [preloadResource])

  const preloadCriticalImages = useCallback((images: string[]) => {
    images.forEach((src, index) => {
      // Preload first few images with high priority
      const priority = index < 2 ? "high" : "low"
      preloadImage(src, priority)
    })
  }, [preloadImage])

  return {
    preloadResource,
    preloadImage,
    preloadFont,
    preloadCriticalImages,
  }
}

export function useResourceHints() {
  useEffect(() => {
    // DNS prefetch for external domains
    const prefetchDomains = [
      "fonts.googleapis.com",
      "fonts.gstatic.com",
      "cdnjs.cloudflare.com"
    ]

    prefetchDomains.forEach(domain => {
      const existing = document.querySelector(`link[href="//${domain}"]`)
      if (!existing) {
        const link = document.createElement("link")
        link.rel = "dns-prefetch"
        link.href = `//${domain}`
        document.head.appendChild(link)
      }
    })

    // Preconnect to critical origins
    const preconnectDomains = [
      "https://fonts.googleapis.com",
      "https://fonts.gstatic.com"
    ]

    preconnectDomains.forEach(url => {
      const existing = document.querySelector(`link[href="${url}"]`)
      if (!existing) {
        const link = document.createElement("link")
        link.rel = "preconnect"
        link.href = url
        link.crossOrigin = "anonymous"
        document.head.appendChild(link)
      }
    })
  }, [])
}

export function useCriticalResourcePreload() {
  const { preloadFont, preloadCriticalImages } = usePreload()

  useEffect(() => {
    // Preload critical fonts
    preloadFont("https://fonts.gstatic.com/s/spacegrotesk/v15/V8mQoQDjQSkFtoMM3T6r8E7mPbF4C4o.woff2")
    preloadFont("https://fonts.gstatic.com/s/manrope/v15/xn7_YHE41ni1AdIRqAuZuw1Bx9mbZk4.woff2")

    // Preload critical images (if any)
    // preloadCriticalImages(["/hero-bg.jpg", "/logo.svg"])
  }, [preloadFont, preloadCriticalImages])
}