import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Kariyer - Aramıza Katıl | PixelCore",
  description: "PixelCore ailesine katılın. Yaratıcı, yenilikçi ve tutkulu ekip arkadaşları arıyoruz. Front-End Developer, Back-End Developer, UI/UX Designer ve Sosyal Medya Uzmanı pozisyonları açık.",
  keywords: ["kariyer", "iş ilanları", "pixelcore kariyer", "dijital ajans iş ilanları", "web geliştirici", "tasarımcı"],
  path: "/kariyer"
})

export default function KariyerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}




