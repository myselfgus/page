import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, Manrope } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import MSPartnershipBanner from "@/components/ms-partnership-banner"
import ChatBot from "@/components/chat-bot"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-primary",
  display: "swap",
  preload: true,
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-secondary",
  display: "swap",
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: "ZeoCare - AI Clinical Assistant",
    template: "%s | ZeoCare",
  },
  description:
    "Revolutionary AI-powered clinical assistant that transforms audio transcriptions into dimensional mental health insights. ZeoCare provides 100% automated documentation with professional quality assurance.",
  keywords: [
    "AI clinical assistant",
    "medical transcription",
    "healthcare automation",
    "MCP architecture",
    "clinical documentation",
    "AI healthcare",
    "medical AI",
  ],
  authors: [{ name: "ZeoCare", url: "https://zeocare.com" }],
  creator: "ZeoCare",
  publisher: "ZeoCare",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "ZeoCare - AI Clinical Assistant",
    description:
      "Revolutionary AI-powered clinical assistant that transforms audio transcriptions into dimensional mental health insights with 100% automated documentation.",
    url: "https://zeocare.com",
    siteName: "ZeoCare",
    images: [
      {
        url: "https://www.zeocare.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "ZeoCare - Revolutionary AI Clinical Assistant",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZeoCare - AI Clinical Assistant",
    description: "Revolutionary AI clinical assistant with dimensional mental health insights. 100% automated documentation. #AI #Healthcare #MedTech",
    site: "@zeocare",
    creator: "@zeocare",
    images: ["https://zeocare.com/twitter-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://zeocare.com",
    languages: {
      "en-US": "https://zeocare.com",
      "pt-BR": "https://zeocare.com/pt",
    },
  },
  generator: "v0.dev",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-US" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ZeoCare",
              url: "https://zeocare.com",
              logo: "https://zeocare.com/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-XXXX-XXXX",
                contactType: "Customer Service",
              },
              sameAs: ["https://www.linkedin.com/company/zeocare", "https://twitter.com/zeocare"],
            }),
          }}
        />
      </head>
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme"
        >
          <MSPartnershipBanner />
          <div>
            <Toaster richColors position="top-right" />
            {children}
            <ChatBot />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
