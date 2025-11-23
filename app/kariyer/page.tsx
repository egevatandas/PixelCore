"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Upload, FileText } from "lucide-react"
import PageHeader from "@/components/page-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const positions = [
  {
    id: "frontend",
    title: "Front-End Developer",
    description: "Modern web uygulamaları geliştirmek için React, Next.js ve Tailwind CSS konusunda deneyimli bir Front-End Developer arıyoruz.",
    requirements: [
      "React ve Next.js ile en az 2 yıl deneyim",
      "Tailwind CSS ve responsive tasarım bilgisi",
      "TypeScript kullanım deneyimi",
      "Git versiyon kontrolü",
      "API entegrasyonu ve state management",
      "Modern JavaScript (ES6+) bilgisi"
    ]
  },
  {
    id: "backend",
    title: "Back-End Developer",
    description: "Güvenli ve ölçeklenebilir backend sistemleri geliştirmek için Node.js ve PostgreSQL konusunda uzman bir Back-End Developer arıyoruz.",
    requirements: [
      "Node.js ile en az 2 yıl deneyim",
      "PostgreSQL ve veritabanı tasarımı bilgisi",
      "RESTful API ve GraphQL deneyimi",
      "Authentication ve authorization sistemleri",
      "Microservices mimarisi bilgisi",
      "Test yazma ve debugging becerileri"
    ]
  },
  {
    id: "designer",
    title: "UI/UX Designer",
    description: "Kullanıcı deneyimini ön planda tutan, yaratıcı ve modern tasarımlar üretebilen Figma uzmanı bir UI/UX Designer arıyoruz.",
    requirements: [
      "Figma ile ileri seviye kullanım",
      "UI/UX tasarım prensipleri bilgisi",
      "Prototipleme ve wireframing deneyimi",
      "Design system oluşturma becerisi",
      "Kullanıcı araştırması ve test etme",
      "Portfolyo (en az 5 proje)"
    ]
  },
  {
    id: "social",
    title: "Sosyal Medya Uzmanı",
    description: "Markaların dijital varlığını güçlendirmek için içerik üretimi, topluluk yönetimi ve reklam kampanyaları yönetebilen bir Sosyal Medya Uzmanı arıyoruz.",
    requirements: [
      "Sosyal medya platformları (Instagram, Facebook, LinkedIn, Twitter) deneyimi",
      "İçerik üretimi ve planlama",
      "Reklam kampanyası yönetimi (Meta Ads, Google Ads)",
      "Analitik ve raporlama",
      "Kreatif düşünme ve yazma becerileri",
      "En az 1 yıl deneyim"
    ]
  }
]

export default function KariyerPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
    cv: null as File | null
  })
  const [fileName, setFileName] = useState("Dosya Seçilmedi")

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      setFormData(prev => ({
        ...prev,
        cv: file
      }))
      setFileName(file.name)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form Gönderildi:", formData)
    alert("Başvurunuz başarıyla gönderildi! En kısa sürede size dönüş yapacağız.")
    setFormData({
      name: "",
      email: "",
      phone: "",
      position: "",
      coverLetter: "",
      cv: null
    })
    setFileName("Dosya Seçilmedi")
  }

  return (
    <>
      <PageHeader
        title="Aramıza Katıl"
        breadcrumbs={[
          { label: "Anasayfa", href: "/" },
          { label: "Kariyer" }
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Sol Sütun - İş İlanları (col-span-2) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Giriş Yazısı */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="prose prose-lg max-w-none"
            >
              <p className="text-lg text-text-muted leading-relaxed mb-4">
                PixelCore ailesi olarak yaratıcı, yenilikçi ve tutkulu ekip arkadaşları arıyoruz. 
                Dijital dünyada markaların başarı hikayelerini yazmaya katkı sağlayacak, 
                teknoloji ve yaratıcılığı birleştiren profesyonellerle çalışmak istiyoruz.
              </p>
              <p className="text-lg text-text-muted leading-relaxed">
                Eğer siz de dinamik bir ekibin parçası olmak, modern teknolojilerle projeler 
                geliştirmek ve kariyerinizde bir adım öne çıkmak istiyorsanız, başvuru formunu 
                doldurarak bizimle iletişime geçebilirsiniz.
              </p>
            </motion.div>

            {/* Açık Pozisyonlar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h2 className="text-3xl font-bold text-secondary mb-6">
                Açık Pozisyonlar
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-4">
                {positions.map((position) => (
                  <AccordionItem
                    key={position.id}
                    value={position.id}
                    className="bg-white border-2 border-gray-200 rounded-lg px-6 hover:border-primary transition-colors"
                  >
                    <AccordionTrigger className="text-left text-xl font-bold text-secondary hover:text-primary">
                      {position.title}
                    </AccordionTrigger>
                    <AccordionContent className="space-y-4">
                      <p className="text-text-muted leading-relaxed">
                        {position.description}
                      </p>
                      <div>
                        <h4 className="font-semibold text-secondary mb-3">
                          Aranan Nitelikler:
                        </h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <span className="text-primary mt-1">•</span>
                              <span className="text-text-muted">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>

          {/* Sağ Sütun - Başvuru Formu (col-span-1) */}
          <div className="lg:col-span-1">
            <div className="sticky top-32 space-y-6 z-40">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Card className="shadow-xl border-2 border-primary/10 relative z-40">
                  <CardHeader>
                    <CardTitle className="text-2xl font-bold text-primary">
                      İş Başvuru Formu
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-4">
                      {/* Ad Soyad */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                          Ad Soyad
                        </label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="Adınız Soyadınız"
                        />
                      </div>

                      {/* E-Posta */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                          E-Posta
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="ornek@email.com"
                        />
                      </div>

                      {/* Telefon */}
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-secondary mb-2">
                          Telefon
                        </label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="focus:ring-2 focus:ring-primary focus:border-primary"
                          placeholder="+90 (555) 123 45 67"
                        />
                      </div>

                      {/* Pozisyon Seçimi */}
                      <div>
                        <label htmlFor="position" className="block text-sm font-medium text-secondary mb-2">
                          Pozisyon
                        </label>
                        <Select
                          value={formData.position}
                          onValueChange={(value) => setFormData(prev => ({ ...prev, position: value }))}
                          required
                        >
                          <SelectTrigger className="focus:ring-2 focus:ring-primary focus:border-primary">
                            <SelectValue placeholder="Pozisyon seçiniz" />
                          </SelectTrigger>
                          <SelectContent>
                            {positions.map((position) => (
                              <SelectItem key={position.id} value={position.id}>
                                {position.title}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      {/* Kısa Ön Yazı */}
                      <div>
                        <label htmlFor="coverLetter" className="block text-sm font-medium text-secondary mb-2">
                          Kısa Ön Yazı
                        </label>
                        <Textarea
                          id="coverLetter"
                          name="coverLetter"
                          value={formData.coverLetter}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                          placeholder="Kendinizden ve neden bu pozisyonu istediğinizden bahsedin..."
                        />
                      </div>

                      {/* CV Yükleme */}
                      <div>
                        <label className="block text-sm font-medium text-secondary mb-2">
                          CV Yükle
                        </label>
                        <div className="relative">
                          <input
                            type="file"
                            id="cv"
                            accept=".pdf,.doc,.docx"
                            onChange={handleFileChange}
                            required
                            className="hidden"
                          />
                          <label
                            htmlFor="cv"
                            className="flex items-center justify-between p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary transition-colors group"
                          >
                            <div className="flex items-center space-x-3">
                              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors">
                                <FileText className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                              </div>
                              <span className="text-sm text-text-muted group-hover:text-primary transition-colors">
                                {fileName}
                              </span>
                            </div>
                            <div className="flex items-center space-x-2 text-primary font-medium text-sm">
                              <Upload className="h-4 w-4" />
                              <span>Dosya Ekle</span>
                            </div>
                          </label>
                        </div>
                        <p className="text-xs text-text-muted mt-2">
                          PDF, DOC veya DOCX formatında, maksimum 5MB
                        </p>
                      </div>

                      {/* Gönder Butonu */}
                      <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold"
                      >
                        Başvuruyu Gönder
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


