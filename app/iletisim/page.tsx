"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail } from "lucide-react"
import WhatsAppButton from "@/components/whatsapp-button"
import PageHeader from "@/components/page-header"
import GetOfferForm from "@/components/ui/GetOfferForm"

export default function IletisimPage() {
  const handleFormSubmit = (data: any) => {
    console.log("Form submitted:", data)
    alert("Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağız.")
  }

  return (
    <>
      <PageHeader
        title="İletişim"
        breadcrumbs={[
          { label: "İletişim" }
        ]}
      />

      {/* Description Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <p className="text-xl text-text-muted leading-relaxed">
              Projeleriniz için bizimle iletişime geçin. Size en kısa sürede dönüş yapacağız.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Left Side - Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold text-secondary mb-6">
                  İletişim Bilgileri
                </h2>
                <p className="text-text-muted leading-relaxed mb-8">
                  Size yardımcı olmak için buradayız. Sorularınız için bizimle
                  iletişime geçebilirsiniz.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <MapPin className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Adres</h3>
                    <p className="text-text-muted">
                      İstanbul, Türkiye<br />
                      Şişli, Büyükdere Caddesi No:123
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Phone className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">Telefon</h3>
                    <a
                      href="tel:+905551234567"
                      className="text-text-muted hover:text-primary transition-colors"
                    >
                      +90 (555) 123 45 67
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                    <Mail className="h-6 w-6 text-primary group-hover:text-white transition-colors duration-300" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-secondary mb-1">E-posta</h3>
                    <a
                      href="mailto:info@pixelcore.com"
                      className="text-text-muted hover:text-primary transition-colors"
                    >
                      info@pixelcore.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div className="mt-8">
                <h3 className="font-semibold text-secondary mb-4">Konumumuz</h3>
                <div className="w-full h-64 bg-background-alt rounded-lg overflow-hidden border-2 border-gray-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3009.145473776475!2d28.978358315415!3d41.036242979298!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cab9e7a7777c43%3A0x4c76cf3dcc8bdb87!2zU2nFnyBMaXNlc2ksIEJ1eXVrZGVyZSBDZC4sIDM0MzY0IFNpc2xpL8Swc3RhbmJ1bA!5e0!3m2!1str!2str!4v1234567890123!5m2!1str!2str"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full"
                  ></iframe>
                </div>
              </div>
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GetOfferForm
                title="Bize Ulaşın"
                buttonText="Mesaj Gönder"
                onSubmit={handleFormSubmit}
                fields={{
                  name: true,
                  surname: true,
                  phone: true,
                  email: true,
                  message: true
                }}
                sticky={false}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* WhatsApp Button - Only visible on mobile */}
      <WhatsAppButton />
    </>
  )
}

