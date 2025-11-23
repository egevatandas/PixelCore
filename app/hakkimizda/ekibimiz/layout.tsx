import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Ekibimiz - PixelCore",
  description: "PixelCore'un deneyimli ve tutkulu ekibi. Alanında uzman profesyonellerle tanışın.",
  keywords: ["ekip", "ekibimiz", "takım", "çalışanlar", "profesyoneller"],
  path: "/hakkimizda/ekibimiz"
})

export default function EkibimizLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}





