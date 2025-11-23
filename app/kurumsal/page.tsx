"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function KurumsalPage() {
  const router = useRouter()

  useEffect(() => {
    // Eski /kurumsal rotasını yeni /hakkimizda/pixelcore'a yönlendir
    router.replace("/hakkimizda/pixelcore")
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-text-muted">Yönlendiriliyor...</div>
    </div>
  )
}
