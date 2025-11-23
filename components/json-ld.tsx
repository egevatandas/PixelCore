export function JsonLd() {
  const professionalServiceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "PixelCore",
    url: "https://pixelcore.com",
    logo: "https://pixelcore.com/logo.png",
    description: "Markanızı dijital dünyada zirveye taşıyoruz. Web tasarım, yazılım, SEO ve mobil uygulama çözümleriyle PixelCore yanınızda.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Şişli, Büyükdere Caddesi No:123",
      addressLocality: "İstanbul",
      addressRegion: "İstanbul",
      addressCountry: "TR"
    },
    telephone: "+90 555 123 45 67",
    email: "info@pixelcore.com",
    sameAs: [
      "https://www.instagram.com/pixelcore",
      "https://www.linkedin.com/company/pixelcore",
      "https://twitter.com/pixelcore"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
    />
  )
}



