import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "PixelCore - Hakkımızda",
  description: "PixelCore hakkında bilgiler, vizyonumuz, misyonumuz ve değerlerimiz. 2015'ten beri dijital dünyada başarı hikayeleri yazıyoruz.",
  keywords: ["hakkımızda", "pixelcore", "vizyon", "misyon", "değerler", "dijital ajans"],
  path: "/hakkimizda/pixelcore"
})

export default function PixelCoreLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}







