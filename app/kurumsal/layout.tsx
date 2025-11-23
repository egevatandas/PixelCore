import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Kurumsal - Hakkımızda, Vizyon ve Misyon",
  description: "PixelCore hakkında bilgiler, vizyonumuz, misyonumuz ve ekibimiz. 2015'ten beri dijital dünyada başarı hikayeleri yazıyoruz.",
  keywords: ["kurumsal", "hakkımızda", "vizyon", "misyon", "ekip", "dijital ajans"],
  path: "/kurumsal"
})

export default function KurumsalLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}





