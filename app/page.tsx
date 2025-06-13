import SimpleHeader from "@/components/simple-header"
import HeroSection from "@/components/hero-section"
import SimpleDemoSection from "@/components/simple-demo-section"
import SimpleFooter from "@/components/simple-footer"

// JSON-LD para a página inicial
const HomePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "ZEO Care - AI Clinical Assistant",
  description:
    "Modern AI clinical assistant for transcription and documentation. Streamlining healthcare workflows with intelligent automation and seamless MCP integration.",
  url: "https://www.zeocare.com",
  mainEntity: {
    "@type": "Organization",
    name: "ZEO Care",
    url: "https://www.zeocare.com",
    logo: "https://www.zeocare.com/logo.png",
  },
}

export default function Home() {
  return (
    <div className="app bg-[#0a0a0a] min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HomePageJsonLd) }} />
      <SimpleHeader />

      <main>
        <HeroSection />
        <SimpleDemoSection />
      </main>

      <SimpleFooter />
    </div>
  )
}
