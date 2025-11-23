"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ExternalLink } from "lucide-react"
import Image from "next/image"
import PageHeader from "@/components/page-header"
import { cn } from "@/lib/utils"

// Kategoriler
const categories = ["Tümü", "Web Tasarım", "Sosyal Medya", "SEO", "Mobil Uygulama", "Prodüksiyon"]

// Mock Proje Verileri
const projects = [
  {
    id: 1,
    title: "E-Ticaret Platformu",
    category: "Web Tasarım",
    image: "/hero.jpg",
    link: "#",
    description: "Modern ve kullanıcı dostu e-ticaret platformu tasarımı"
  },
  {
    id: 2,
    title: "Kurumsal Web Sitesi",
    category: "Web Tasarım",
    image: "/team.jpg",
    link: "#",
    description: "Profesyonel kurumsal kimlik ve web sitesi tasarımı"
  },
  {
    id: 3,
    title: "Restoran Web Sitesi",
    category: "Web Tasarım",
    image: "/hero.jpg",
    link: "#",
    description: "Responsive ve modern restoran web sitesi"
  },
  {
    id: 4,
    title: "Instagram Pazarlama Kampanyası",
    category: "Sosyal Medya",
    image: "/team.jpg",
    link: "#",
    description: "Başarılı Instagram pazarlama ve içerik stratejisi"
  },
  {
    id: 5,
    title: "Facebook Reklam Yönetimi",
    category: "Sosyal Medya",
    image: "/hero.jpg",
    link: "#",
    description: "Hedef kitleye ulaşan Facebook reklam kampanyaları"
  },
  {
    id: 6,
    title: "LinkedIn Kurumsal Profil",
    category: "Sosyal Medya",
    image: "/team.jpg",
    link: "#",
    description: "Kurumsal LinkedIn profil optimizasyonu ve içerik yönetimi"
  },
  {
    id: 7,
    title: "SEO Optimizasyon Projesi",
    category: "SEO",
    image: "/hero.jpg",
    link: "#",
    description: "Google'da ilk sayfaya çıkma başarısı"
  },
  {
    id: 8,
    title: "Yerel SEO Çalışması",
    category: "SEO",
    image: "/team.jpg",
    link: "#",
    description: "Yerel arama motoru optimizasyonu ve Google My Business yönetimi"
  },
  {
    id: 9,
    title: "iOS Mobil Uygulama",
    category: "Mobil Uygulama",
    image: "/hero.jpg",
    link: "#",
    description: "Kullanıcı dostu iOS mobil uygulama geliştirme"
  },
  {
    id: 10,
    title: "Android E-Ticaret Uygulaması",
    category: "Mobil Uygulama",
    image: "/team.jpg",
    link: "#",
    description: "Android platformu için e-ticaret uygulaması"
  },
  {
    id: 11,
    title: "Kurumsal Tanıtım Videosu",
    category: "Prodüksiyon",
    image: "/hero.jpg",
    link: "#",
    description: "Profesyonel kurumsal tanıtım video çekimi ve kurgusu"
  },
  {
    id: 12,
    title: "Drone Çekim Projesi",
    category: "Prodüksiyon",
    image: "/team.jpg",
    link: "#",
    description: "Hava çekimi ile etkileyici görsel içerik üretimi"
  }
]

export default function ReferanslarimizPage() {
  const [selectedCategory, setSelectedCategory] = useState("Tümü")

  // Filtreleme mantığı
  const filteredProjects = selectedCategory === "Tümü"
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  return (
    <>
      <PageHeader
        title="Referanslarımız"
        breadcrumbs={[
          { label: "Anasayfa", href: "/" },
          { label: "Referanslarımız" }
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        {/* Kategori Filtreleme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex flex-wrap items-center justify-center gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "relative px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300",
                  selectedCategory === category
                    ? "text-white"
                    : "text-gray-700 border border-gray-300 hover:border-primary hover:text-primary"
                )}
              >
                {selectedCategory === category && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute inset-0 bg-primary rounded-full -z-10"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30
                    }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Proje Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.05
                }}
                className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                {/* Görsel */}
                <div className="relative aspect-video overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  {/* İncele Butonu - Hover'da görünür */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a
                      href={project.link}
                      className="flex items-center space-x-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-semibold"
                    >
                      <span>İncele</span>
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </div>
                </div>

                {/* İçerik */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-secondary mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-500 mb-3">
                    {project.category}
                  </p>
                  <p className="text-text-muted text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Boş Durum */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-text-muted text-lg">
              Bu kategoride henüz proje bulunmamaktadır.
            </p>
          </motion.div>
        )}
      </div>
    </>
  )
}
