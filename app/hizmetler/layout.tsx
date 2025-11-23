import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Hizmetlerimiz - Web Tasarım, SEO, Dijital Pazarlama",
  description: "Web tasarım, SEO, dijital pazarlama, sosyal medya yönetimi, e-ticaret çözümleri ve daha fazlası. Dijital dünyada ihtiyacınız olan tüm hizmetler.",
  keywords: ["hizmetler", "web tasarım", "SEO", "dijital pazarlama", "sosyal medya", "e-ticaret"],
  path: "/hizmetler"
})

export default function HizmetlerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}





