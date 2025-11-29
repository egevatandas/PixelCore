"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"

interface GetOfferFormProps {
  title?: string
  buttonText?: string
  onSubmit?: (data: any) => void
  fields?: {
    name?: boolean
    surname?: boolean
    phone?: boolean
    email?: boolean
    message?: boolean
    [key: string]: any
  }
  sticky?: boolean
  className?: string
}

export default function GetOfferForm({
  title = "Hemen Teklif Al",
  buttonText = "Teklif İste",
  onSubmit,
  fields = {
    name: true,
    surname: true,
    phone: true,
    email: true,
    message: false
  },
  sticky = false,
  className = ""
}: GetOfferFormProps) {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    phone: "",
    email: "",
    message: ""
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (onSubmit) {
      onSubmit(formData)
    } else {
      console.log("Form Gönderildi:", formData)
      alert("Teşekkürler! Formunuz başarıyla gönderildi. En kısa sürede size dönüş yapacağız.")
    }
    
    setFormData({
      name: "",
      surname: "",
      phone: "",
      email: "",
      message: ""
    })
  }

  const containerClass = sticky 
    ? `sticky top-36 space-y-6 z-40 ${className}`
    : `space-y-6 ${className}`

  return (
    <div className={containerClass}>
      <Card className="shadow-xl border-2 border-primary/10 relative z-40">
        <CardContent className="p-6">
          <h2 className="text-2xl font-bold text-primary mb-6">
            {title}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {fields.name && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-secondary mb-2">
                  Ad
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Adınız"
                />
              </div>
            )}

            {fields.surname && (
              <div>
                <label htmlFor="surname" className="block text-sm font-medium text-secondary mb-2">
                  Soyad
                </label>
                <Input
                  id="surname"
                  name="surname"
                  type="text"
                  value={formData.surname}
                  onChange={handleInputChange}
                  required
                  className="focus:ring-2 focus:ring-primary focus:border-primary"
                  placeholder="Soyadınız"
                />
              </div>
            )}

            {fields.phone && (
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
            )}

            {fields.email && (
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-secondary mb-2">
                  E-posta
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
            )}

            {fields.message && (
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-secondary mb-2">
                  Mesaj
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required={fields.message}
                  rows={4}
                  className="focus:ring-2 focus:ring-primary focus:border-primary resize-none"
                  placeholder="Mesajınızı buraya yazın..."
                />
              </div>
            )}

            <Button
              type="submit"
              className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-semibold"
            >
              {buttonText}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}





