import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Referanslarımız - Başarılı Projelerimiz",
  description: "PixelCore'un başarılı projeleri ve müşteri hikayeleri. Web tasarım, e-ticaret, dijital pazarlama ve daha fazlası.",
  keywords: ["referanslar", "projeler", "başarı hikayeleri", "web tasarım projeleri", "portfolyo"],
  path: "/referanslarimiz"
})

export default function PortfolyoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}


