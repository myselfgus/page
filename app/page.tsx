import RestoredHeader from "@/components/restored-header"
import HeroSection from "@/components/hero-section"
import DemoSection from "@/components/demo-section"
import MSRecognitionSection from "@/components/ms-recognition-section"
import EconomicImpactSection from "@/components/economic-impact-section"
import AboutSection from "@/components/about-section"
import ContactFAQSection from "@/components/contact-faq-section"
import Footer from "@/components/footer"
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
      <RestoredHeader />

      <main>
        {/* 1. Hero Section: Impacto Imediato */}
        <HeroSection />

        {/* 2. Demo Section: Experiência Interativa com Visualização Dimensional */}
        <DemoSection />

        {/* 3. Microsoft Recognition Section: Validação e Credibilidade */}
        <MSRecognitionSection />

        {/* 4. Impacto Econômico, Automação e Qualidade de Documentação */}
        <EconomicImpactSection />

        {/* 5. About / Founders Hub Section */}
        <AboutSection />

        {/* 6. Contact & FAQ Section */}
        <ContactFAQSection />
      </main>

      <Footer />
      <ScrollToTop />
      <MSPartnershipBadge />
    </div>
  )
}
