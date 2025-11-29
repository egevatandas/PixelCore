"use client"

import { MessageCircle } from "lucide-react"
import Link from "next/link"

export default function WhatsAppButton() {
  const phoneNumber = "905551234567" // WhatsApp numarası (90 ile başlamalı, + işareti olmadan)
  const message = "Merhaba, PixelCore hizmetleriniz hakkında bilgi almak istiyorum."

  return (
    <Link
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BA5A] text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 md:hidden group"
      aria-label="WhatsApp ile iletişime geç"
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute -top-2 -right-2 bg-primary text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
        1
      </span>
    </Link>
  )
}







