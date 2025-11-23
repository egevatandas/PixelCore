import type { Metadata } from "next"
import { Inter, Manrope } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { JsonLd } from "@/components/json-ld"
import { generateMetadata as genMeta } from "@/lib/metadata"
import BackgroundDecorations from "@/components/ui/background-decorations"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
})

export const metadata: Metadata = genMeta({})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${inter.variable} ${manrope.variable}`}>
        <JsonLd />
        <BackgroundDecorations />
        <Navbar />
        <main className="min-h-screen relative z-10 bg-transparent">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

