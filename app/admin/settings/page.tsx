"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export default function AdminSettings() {
  return (
    <div>
      <div className="mb-8">
        <div className="mb-4">
          <Breadcrumb
            items={[
              { label: "Admin", href: "/admin" },
              { label: "Ayarlar" }
            ]}
          />
        </div>
        <h1 className="text-3xl font-bold text-secondary mb-2">Ayarlar</h1>
        <p className="text-text-muted">Sistem ayarlarını buradan yönetebilirsiniz.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Genel Ayarlar</CardTitle>
          <CardDescription>
            Site genelinde geçerli ayarları buradan yapabilirsiniz.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-text-muted">Ayarlar sayfası yakında eklenecek...</p>
        </CardContent>
      </Card>
    </div>
  )
}

