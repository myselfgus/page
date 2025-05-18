"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { useIsMobile } from "@/hooks/use-mobile"

export default function MSPartnershipBanner() {
  const [bannerHeight, setBannerHeight] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const isMobile = useIsMobile()

  useEffect(() => {
    setIsMounted(true)
    // Atualiza a variável CSS com a altura do banner após a renderização
    const updateBannerHeight = () => {
      const banner = document.getElementById("ms-banner")
      if (banner) {
        const height = banner.offsetHeight
        setBannerHeight(height)
        document.documentElement.style.setProperty("--banner-height", `${height}px`)
      }
    }

    updateBannerHeight()
    window.addEventListener("resize", updateBannerHeight)

    return () => {
      window.removeEventListener("resize", updateBannerHeight)
    }
  }, [])

  return (
    <div
      id="ms-banner"
      className="w-full bg-black/85 border-b border-white/10 py-1.5 backdrop-blur-sm fixed top-0 left-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-center gap-3 text-white">
        {isMobile ? (
          <>
            <span className="text-xs">Microsoft for Startups</span>
            <Image
              src="https://www.groovypost.com/wp-content/uploads/2017/02/Microsoft-logo.png"
              alt="Microsoft"
              width={16}
              height={16}
            />
            <span className="text-xs">Founders Hub Member</span>
          </>
        ) : (
          <>
            <span className="text-sm font-medium">Microsoft for Startups</span>
            <Image
              src="https://www.groovypost.com/wp-content/uploads/2017/02/Microsoft-logo.png"
              alt="Microsoft"
              width={20}
              height={20}
              className="mr-1"
            />
            <span className="text-sm">Founders Hub Member</span>
          </>
        )}
      </div>
      {isMounted && (
        <style jsx global>{`
          :root {
            --banner-height: ${bannerHeight}px;
          }
          body {
            padding-top: var(--banner-height);
          }
        `}</style>
      )}
    </div>
  )
}
