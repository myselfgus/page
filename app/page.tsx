import HeaderXAI from "@/components/header-xai"
import HeroSectionXAI from "@/components/hero-section-xai"
import DimensionalDemoXAI from "@/components/dimensional-demo-xai"
import MSRecognitionXAI from "@/components/ms-recognition-xai"
import EconomicTransformationXAI from "@/components/economic-transformation-xai"
import AboutXAI from "@/components/about-xai"
import ContactXAI from "@/components/contact-xai"
import FooterXAI from "@/components/footer-xai"
import MobileNavigation from "@/components/mobile-navigation"
import MSPartnershipBadge from "@/components/ms-partnership-badge"
import ScrollToTop from "@/components/scroll-to-top"

// JSON-LD para a página inicial
const HomePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "ZeoCare - AI Clinical Assistant",
  description:
    "Advanced AI clinical assistant for transcription and documentation. Revolutionary dimensional analysis of mental health spaces with 100% automation.",
  url: "https://www.zeocare.com",
  mainEntity: {
    "@type": "Organization",
    name: "ZeoCare",
    url: "https://www.zeocare.com",
    logo: "https://www.zeocare.com/logo.png",
  },
}

export default function Home() {
  return (
    <div className="app min-h-screen" style={{background: "linear-gradient(135deg, #0f0f0f 0%, #1a1a1a 50%, #0f0f0f 100%)"}}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HomePageJsonLd) }} />
      <MobileNavigation />
      <HeaderXAI />

      <main>
        {/* 1. Hero Section: Espaço Dimensional da Mente */}
        <HeroSectionXAI />

        {/* 2. Demo Section: Experiência Dimensional Interativa */}
        <DimensionalDemoXAI />

        {/* 3. Microsoft Recognition Section: Validação e Credibilidade */}
        <MSRecognitionXAI />

        {/* 4. Transformação Econômica: Impacto Real, ROI e Qualidade de Vida */}
        <EconomicTransformationXAI />

        {/* 5. About / Technology Section */}
        <AboutXAI />

        {/* 6. Contact & FAQ Section */}
        <ContactXAI />
      </main>

      <FooterXAI />
      <ScrollToTop />
      <MSPartnershipBadge />
    </div>
  )
}
