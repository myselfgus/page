import type React from "react"
import type { Metadata } from "next"
import { Inter, Playfair_Display, Source_Sans_3 } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/sonner"
import MSPartnershipBanner from "@/components/ms-partnership-banner"
import ChatBot from "@/components/chat-bot"
import ScrollProgress from "@/components/scroll-progress"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-secondary",
})

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-primary",
})

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: {
    default: "HEALTH/HEALTH - Reimaginando a Saúde Mental",
    template: "%s | HEALTH/HEALTH",
  },
  description:
    "Uma revolução dimensional na compreensão da experiência humana. Nossa abordagem dimensional-vetorial oferece um novo paradigma que honra a complexidade da experiência humana, permitindo avaliações mais precisas e tratamentos personalizados.",
  keywords: [
    "saúde mental",
    "abordagem dimensional",
    "materialismo existencial",
    "diagnóstico dimensional",
    "Microsoft Founders Hub",
    "inovação em saúde",
  ],
  authors: [{ name: "HEALTH/HEALTH", url: "https://healthhealth.io" }],
  creator: "HEALTH/HEALTH",
  publisher: "HEALTH/HEALTH",
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
    title: "HEALTH/HEALTH - Reimaginando a Saúde Mental",
    description:
      "Uma revolução dimensional na compreensão da experiência humana. Descubra nossa abordagem inovadora para a saúde mental.",
    url: "https://healthhealth.io",
    siteName: "HEALTH/HEALTH",
    images: [
      {
        url: "https://www.healthhealth.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "HEALTH/HEALTH - Reimaginando a Saúde Mental",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "HEALTH/HEALTH - Reimaginando a Saúde Mental",
    description: "Uma revolução dimensional na compreensão da experiência humana. #SaúdeMental #Inovação",
    site: "@healthhealth",
    creator: "@healthhealth",
    images: ["https://www.healthhealth.com/twitter-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0f172a" },
  ],
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  alternates: {
    canonical: "https://healthhealth.io",
    languages: {
      "pt-BR": "https://healthhealth.io",
      "en-US": "https://healthhealth.io/en",
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
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "HEALTH/HEALTH",
              url: "https://healthhealth.io",
              logo: "https://healthhealth.io/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+55-11-XXXX-XXXX",
                contactType: "Customer Service",
              },
              sameAs: ["https://www.linkedin.com/company/healthhealth", "https://twitter.com/healthhealth"],
            }),
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${sourceSans.variable} bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          storageKey="theme"
        >
          <ScrollProgress />
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
