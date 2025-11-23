"use client"

import { motion } from "framer-motion"
import { Target, Eye, Award, Lightbulb, Heart } from "lucide-react"
import PageHeader from "@/components/page-header"

const AboutSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="prose prose-lg max-w-none text-text-muted leading-relaxed space-y-6">
            <p className="text-xl">
              PixelCore olarak, 2015 yılından bu yana dijital dünyada markaların 
              başarı hikayelerini yazıyoruz. Türkiye'nin önde gelen dijital ajanslarından 
              biri olarak, müşterilerimize kapsamlı dijital çözümler sunuyoruz.
            </p>
            <p>
              Ekibimiz, yaratıcı tasarımcılar, deneyimli geliştiriciler, stratejistler 
              ve dijital pazarlama uzmanlarından oluşuyor. Her projede, müşterilerimizin 
              hedeflerine ulaşması için en iyi çözümleri üretmeyi hedefliyoruz.
            </p>
            <p>
              Teknoloji ve yaratıcılığı bir araya getirerek, markaların dijital 
              dönüşüm yolculuklarında güvenilir bir partner olmaktan gurur duyuyoruz.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const VisionMissionSection = () => {
  return (
    <section className="py-20 bg-background-alt">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Vizyon */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-secondary">Vizyonumuz</h2>
            </div>
            <p className="text-text-muted leading-relaxed text-lg">
              Türkiye'nin en yenilikçi ve güvenilir dijital ajansı olmak. Dijital 
              dünyada markaların başarısına katkı sağlayarak, sektörde öncü bir 
              konumda yer almak ve global pazarda da adımızdan söz ettirmek.
            </p>
          </motion.div>

          {/* Misyon */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 group"
          >
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                <Target className="h-6 w-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-secondary">Misyonumuz</h2>
            </div>
            <p className="text-text-muted leading-relaxed text-lg">
              Müşterilerimizin dijital hedeflerine ulaşmaları için en kaliteli, 
              yenilikçi ve etkili çözümleri sunmak. Yaratıcılık, teknoloji ve 
              stratejiyi birleştirerek, her projede mükemmelliği hedeflemek ve 
              müşteri memnuniyetini en üst seviyede tutmak.
            </p>
          </motion.div>
        </div>

        {/* Değerlerimiz */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-secondary text-center mb-12">
            Değerlerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Lightbulb, title: "Yenilikçilik", desc: "Sürekli gelişim ve yeni fikirler" },
              { icon: Heart, title: "Müşteri Odaklılık", desc: "Müşteri memnuniyeti önceliğimiz" },
              { icon: Award, title: "Kalite", desc: "Her projede mükemmellik hedefi" },
              { icon: Target, title: "Hedef Odaklılık", desc: "Net hedefler ve stratejik planlama" },
            ].map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-6 bg-white rounded-lg shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-secondary mb-2">
                    {value.title}
                  </h3>
                  <p className="text-text-muted text-sm">
                    {value.desc}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default function PixelCorePage() {
  return (
    <>
      <PageHeader
        title="PixelCore"
        breadcrumbs={[
          { label: "Hakkımızda", href: "/hakkimizda/pixelcore" },
          { label: "PixelCore" }
        ]}
      />
      <AboutSection />
      <VisionMissionSection />
    </>
  )
}

