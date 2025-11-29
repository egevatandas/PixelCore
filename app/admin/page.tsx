"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"

export default function AdminPage() {
  const router = useRouter()

  useEffect(() => {
    // Check if authenticated, redirect to dashboard or login
    const auth = localStorage.getItem("adminAuth")
    if (auth) {
      router.push("/admin/dashboard")
    } else {
      router.push("/admin/login")
    }
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-text-muted">Yönlendiriliyor...</div>
    </div>
  )
}







