import { Metadata } from "next"

const siteConfig = {
  name: "PixelCore",
  title: "PixelCore | Dijital Dönüşüm ve Yazılım Ajansı",
  description: "Markanızı dijital dünyada zirveye taşıyoruz. Web tasarım, yazılım, SEO ve mobil uygulama çözümleriyle PixelCore yanınızda.",
  url: "https://pixelcore-demo.netlify.app",
  ogImage: "/opengraph-image.png",
  twitterImage: "/opengraph-image.png", // Twitter için de aynı görseli kullanıyoruz
  keywords: [
    "Web Tasarım",
    "Dijital Ajans",
    "SEO",
    "Mobil Uygulama",
    "İstanbul Yazılım Firması"
  ],
  author: "PixelCore",
  locale: "tr_TR",
}

export function generateMetadata({
  title,
  description,
  keywords,
  image,
  path = "",
}: {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  path?: string
}): Metadata {
  const pageTitle = title
    ? `${title} | ${siteConfig.name}`
    : siteConfig.title
  const pageDescription = description || siteConfig.description
  const pageKeywords = keywords || siteConfig.keywords
  const pageImage = image || siteConfig.ogImage
  const pageTwitterImage = image || siteConfig.twitterImage
  const pageUrl = `${siteConfig.url}${path}`

  return {
    title: {
      default: pageTitle,
      template: `%s | PixelCore`
    },
    description: pageDescription,
    keywords: pageKeywords,
    authors: [{ name: siteConfig.author }],
    creator: siteConfig.author,
    publisher: siteConfig.author,
    metadataBase: new URL(siteConfig.url),
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "website",
      locale: siteConfig.locale,
      url: pageUrl,
      title: pageTitle,
      description: pageDescription,
      siteName: siteConfig.name,
      images: [
        {
          url: pageImage,
          width: 1200,
          height: 630,
          alt: "PixelCore Dijital Ajans Tanıtım Görseli",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description: pageDescription,
      images: [
        {
          url: pageTwitterImage,
          width: 1200,
          height: 630,
          alt: "PixelCore Dijital Ajans Tanıtım Görseli",
        },
      ],
    },
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
    manifest: "/manifest.json",
  }
}

export const siteMetadata = siteConfig



