import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ApproachSection from "@/components/approach-section"
import BenefitsSection from "@/components/benefits-section"
import ContactSection from "@/components/contact-section"
import FAQSection from "@/components/faq-section"
import Footer from "@/components/footer"
import MobileNavigation from "@/components/mobile-navigation"
import MSPartnershipBadge from "@/components/ms-partnership-badge"
import MSRecognitionSection from "@/components/ms-recognition-section"

// JSON-LD para a página inicial
const HomePageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "HEALTH/HEALTH - Reimaginando a Saúde Mental",
  description:
    "Uma revolução dimensional na compreensão da experiência humana. Nossa abordagem dimensional-vetorial oferece um novo paradigma para a saúde mental.",
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

        {/* 2. Microsoft Recognition Section: Validação e Credibilidade Logo de Início */}
        <MSRecognitionSection />

        {/* 3. About Section: Quem Somos e Nossa Missão Detalhada */}
        <AboutSection />

        {/* 4. Approach Section: Nossa Metodologia Única e Inovadora */}
        <ApproachSection />

        {/* 5. Benefits Section: Valor Claro e Tangível para o Cliente/Usuário */}
        <BenefitsSection />

        {/* 6. FAQ Section: Antecipar Dúvidas e Fornecer Respostas Claras */}
        <FAQSection />

        {/* 7. Contact Section: Chamada para Ação Final e Facilidade de Contato */}
        <ContactSection />
      </main>

      <Footer />
      <MSPartnershipBadge />
    </div>
  )
}
