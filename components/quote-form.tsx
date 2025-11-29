"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { motion } from "framer-motion"

export default function QuoteForm() {
  const [formData, setFormData] = useState({
    ad: "",
    soyad: "",
    telefon: "",
    mesaj: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Form submission logic here
    setTimeout(() => {
      setIsSubmitting(false)
      setFormData({ ad: "", soyad: "", telefon: "", mesaj: "" })
      alert("Teşekkürler! En kısa sürede size dönüş yapacağız.")
    }, 1000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <Card className="shadow-xl border-2 border-primary/10">
        <CardHeader className="bg-primary text-white rounded-t-lg">
          <CardTitle className="text-2xl font-bold text-white">
            5 Dakikada Teklif Al
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="ad" className="block text-sm font-medium text-secondary mb-2">
                Ad <span className="text-primary">*</span>
              </label>
              <Input
                id="ad"
                name="ad"
                value={formData.ad}
                onChange={handleChange}
                required
                className="focus:border-primary focus:ring-primary"
                placeholder="Adınız"
              />
            </div>
            <div>
              <label htmlFor="soyad" className="block text-sm font-medium text-secondary mb-2">
                Soyad <span className="text-primary">*</span>
              </label>
              <Input
                id="soyad"
                name="soyad"
                value={formData.soyad}
                onChange={handleChange}
                required
                className="focus:border-primary focus:ring-primary"
                placeholder="Soyadınız"
              />
            </div>
            <div>
              <label htmlFor="telefon" className="block text-sm font-medium text-secondary mb-2">
                Telefon <span className="text-primary">*</span>
              </label>
              <Input
                id="telefon"
                name="telefon"
                type="tel"
                value={formData.telefon}
                onChange={handleChange}
                required
                className="focus:border-primary focus:ring-primary"
                placeholder="+90 (555) 123 45 67"
              />
            </div>
            <div>
              <label htmlFor="mesaj" className="block text-sm font-medium text-secondary mb-2">
                Mesaj
              </label>
              <Textarea
                id="mesaj"
                name="mesaj"
                value={formData.mesaj}
                onChange={handleChange}
                rows={4}
                className="focus:border-primary focus:ring-primary"
                placeholder="Projeniz hakkında bilgi verin..."
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Gönderiliyor..." : "Teklif Al"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </motion.div>
  )
}







