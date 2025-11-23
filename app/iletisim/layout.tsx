import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "İletişim - Bizimle İletişime Geçin",
  description: "PixelCore ile iletişime geçin. Projeleriniz için ücretsiz danışmanlık alın. İstanbul, Türkiye.",
  keywords: ["iletişim", "iletişim formu", "adres", "telefon", "e-posta"],
  path: "/iletisim"
})

export default function IletisimLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}





