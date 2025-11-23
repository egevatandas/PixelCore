"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export default function AdminMessages() {
  return (
    <div>
      <div className="mb-8">
        <div className="mb-4">
          <Breadcrumb
            items={[
              { label: "Admin", href: "/admin" },
              { label: "Mesajlar" }
            ]}
          />
        </div>
        <h1 className="text-3xl font-bold text-secondary mb-2">Mesajlar</h1>
        <p className="text-text-muted">İletişim formundan gelen mesajları buradan görüntüleyebilirsiniz.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Mesaj Listesi</CardTitle>
          <CardDescription>
            Tüm mesajlarınız burada görüntülenecek.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-text-muted">Mesaj yönetimi yakında eklenecek...</p>
        </CardContent>
      </Card>
    </div>
  )
}

