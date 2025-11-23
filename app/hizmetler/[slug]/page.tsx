"use client"

import { useEffect, useState } from "react"
import { useParams, useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import Image from "next/image"
import PageHeader from "@/components/page-header"
import { getServiceBySlug, getAllServiceSlugs } from "@/data/services"
import GetOfferForm from "@/components/ui/GetOfferForm"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function ServiceDetailPage() {
  const params = useParams()
  const router = useRouter()
  const slug = params.slug as string
  const [service, setService] = useState(getServiceBySlug(slug))

  useEffect(() => {
    const foundService = getServiceBySlug(slug)
    if (!foundService) {
      router.push("/hizmetler")
    } else {
      setService(foundService)
    }
  }, [slug, router])

  const handleFormSubmit = (data: any) => {
    console.log("Form Gönderildi:", { ...data, service: service?.title })
    alert("Teşekkürler! Formunuz başarıyla gönderildi. En kısa sürede size dönüş yapacağız.")
  }

  if (!service) {
    return (
      <>
        <PageHeader
          title="Hizmet Bulunamadı"
          breadcrumbs={[
            { label: "Hizmetlerimiz", href: "/hizmetler" },
            { label: "Hizmet Bulunamadı" }
          ]}
        />
        <div className="container mx-auto px-4 py-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-secondary mb-4">
              Aradığınız Hizmet Bulunamadı
            </h2>
            <p className="text-text-muted mb-8">
              Üzgünüz, aradığınız hizmet sayfası mevcut değil. Lütfen hizmetler sayfamıza dönün.
            </p>
            <Button
              onClick={() => router.push("/hizmetler")}
              className="bg-primary text-white hover:bg-primary/90"
            >
              Hizmetler Sayfasına Dön
            </Button>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <PageHeader
        title={service.title}
        breadcrumbs={[
          { label: "Hizmetlerimiz", href: "/hizmetler" },
          { label: service.title }
        ]}
      />

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Sol Taraf - İçerik (col-span-2) */}
          <div className="lg:col-span-2 space-y-8">
            {/* Hizmet Görseli */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg"
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 1024px) 100vw, 66vw"
              />
            </motion.div>

            {/* H1 Başlık */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold text-secondary"
            >
              {service.title}
            </motion.h1>

            {/* Detaylı Açıklama */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: service.content }}
            />

            {/* Başarı Hikayesi Kartı */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="border-2 border-primary/20 shadow-xl bg-gradient-to-br from-white to-background-alt">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-6">
                    {/* Avatar */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                        <Image
                          src={service.testimonial.avatar}
                          alt={service.testimonial.clientName}
                          width={80}
                          height={80}
                          className="object-cover"
                        />
                      </div>
                    </div>

                    {/* İçerik */}
                    <div className="flex-1">
                      <div className="flex items-center mb-3">
                        <Quote className="h-6 w-6 text-primary mr-2" />
                        <h3 className="text-2xl font-bold text-secondary">
                          Başarı Hikayesi
                        </h3>
                      </div>

                      <div className="mb-4">
                        <p className="text-lg font-semibold text-secondary mb-1">
                          {service.testimonial.companyName}
                        </p>
                        <p className="text-sm text-text-muted">
                          {service.testimonial.clientName}
                        </p>
                      </div>

                      <div className="flex items-center mb-4">
                        {[...Array(service.testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                        ))}
                      </div>

                      <p className="text-lg text-text-muted leading-relaxed italic border-l-4 border-primary pl-4">
                        &quot;{service.testimonial.comment}&quot;
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sağ Taraf - Sticky Sidebar (col-span-1) */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <GetOfferForm
                title="Hemen Teklif Al"
                buttonText="Teklif İste"
                onSubmit={handleFormSubmit}
                sticky={true}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
