"use client"

import { motion } from "framer-motion"
import { Check, Star, Quote } from "lucide-react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import QuoteForm from "@/components/quote-form"
import TestimonialsSidebar from "@/components/testimonials-sidebar"
import { Service } from "@/data/services"

interface ServiceContentProps {
  service: Service
}

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    company: "TechCorp",
    text: "PixelCore ile çalışmak harika bir deneyimdi. Profesyonel ekibi sayesinde web sitemiz çok başarılı oldu.",
    rating: 5
  }
]

export default function ServiceContent({ service }: ServiceContentProps) {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Sol Taraf - İçerik */}
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
              loading="eager"
              sizes="(max-width: 1024px) 100vw, 66vw"
            />
          </motion.div>

          {/* İçerik */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: service.content }}
          />

          {/* Neden Bu Hizmet? */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-background-alt rounded-lg p-8 border border-gray-100"
          >
            <h2 className="text-3xl font-bold text-secondary mb-6">
              Neden {service.title}?
            </h2>
            <ul className="space-y-4">
              {service.features.map((feature, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-text-muted text-lg">{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Müşteri Yorumu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Quote className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonials[0].rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-text-muted italic mb-4 text-lg leading-relaxed">
                      "{testimonials[0].text}"
                    </p>
                    <div>
                      <p className="font-semibold text-secondary">{testimonials[0].name}</p>
                      <p className="text-sm text-text-muted">{testimonials[0].company}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Sağ Taraf - Sticky Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-[200px] space-y-6">
            {/* Teklif Formu */}
            <QuoteForm />

            {/* Mutlu Müşteriler */}
            <TestimonialsSidebar />
          </div>
        </div>
      </div>
    </div>
  )
}





