"use client"

import { Star } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"

const testimonials = [
  {
    name: "Ahmet Yılmaz",
    company: "TechCorp",
    text: "PixelCore ile çalışmak harika bir deneyimdi. Profesyonel ekibi sayesinde web sitemiz çok başarılı oldu.",
    rating: 5
  },
  {
    name: "Ayşe Demir",
    company: "Digital Solutions",
    text: "SEO çalışmaları sonucunda organik trafiğimiz %300 arttı. Çok memnunuz!",
    rating: 5
  },
  {
    name: "Mehmet Kaya",
    company: "E-Commerce Pro",
    text: "E-ticaret çözümleri sayesinde online satışlarımız katlandı. Teşekkürler PixelCore!",
    rating: 5
  }
]

export default function TestimonialsSidebar() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
    >
      <Card className="shadow-lg border border-gray-100">
        <CardHeader>
          <CardTitle className="text-xl font-bold text-secondary">
            Mutlu Müşteriler
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="border-l-4 border-primary pl-4 py-2">
              <div className="flex items-center mb-1">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm text-text-muted italic mb-2">
                &quot;{testimonial.text}&quot;
              </p>
              <p className="text-xs font-semibold text-secondary">{testimonial.name}</p>
              <p className="text-xs text-text-muted">{testimonial.company}</p>
            </div>
          ))}
        </CardContent>
      </Card>
    </motion.div>
  )
}





