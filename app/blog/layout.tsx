import { generateMetadata } from "@/lib/metadata"

export const metadata = generateMetadata({
  title: "Blog - Dijital Pazarlama ve Web Tasarım İpuçları",
  description: "Dijital pazarlama, web tasarımı, SEO, sosyal medya ve dijital dönüşüm hakkında güncel içerikler, ipuçları ve rehberler.",
  keywords: ["blog", "dijital pazarlama", "SEO", "web tasarım", "dijital pazarlama ipuçları", "SEO rehberi"],
  path: "/blog"
})

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}





