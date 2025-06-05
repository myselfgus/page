import Header from "@/components/header"
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
  name: "HEALTH/HEALTH - A IA que Humaniza a Saúde Mental",
  description:
    "Inteligência dimensional-vetorial que compreende pacientes como médicos. Automatizamos 90% da documentação clínica, liberando tempo para o vínculo terapêutico.",
  url: "https://www.healthhealth.com",
  mainEntity: {
    "@type": "Organization",
    name: "HEALTH/HEALTH",
    url: "https://www.healthhealth.com",
    logo: "https://www.healthhealth.com/logo.png",
  },
}

export default function Home() {
  return (
    <div className="app">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(HomePageJsonLd) }} />
      <MobileNavigation />
      <Header />

      <main>
        {/* 1. Hero Section: Impacto Imediato */}
        <HeroSection />

        {/* 2. Demo Section: Experiência Interativa */}
        <DemoSection />

        {/* 3. Microsoft Recognition Section: Validação e Credibilidade */}
        <MSRecognitionSection />

        {/* 4. Impacto Econômico, Segurança e Privacidade */}
        <EconomicImpactSection />

        {/* 5. About / Founders Hub Section */}
        <AboutSection />

        {/* 6. Contact & FAQ Section: Combinados para simplificar */}
        <ContactFAQSection />
      </main>

      <Footer />
      <ScrollToTop />
      <MSPartnershipBadge />
    </div>
  )
}
