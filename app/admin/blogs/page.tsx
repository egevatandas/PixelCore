"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export default function AdminBlogs() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="mb-4">
            <Breadcrumb
              items={[
                { label: "Admin", href: "/admin" },
                { label: "Yazılar" }
              ]}
            />
          </div>
          <h1 className="text-3xl font-bold text-secondary mb-2">Yazılar</h1>
          <p className="text-text-muted">Blog yazılarınızı buradan yönetebilirsiniz.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white">
          <Plus className="h-4 w-4 mr-2" />
          Yeni Yazı
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Yazı Listesi</CardTitle>
          <CardDescription>
            Blog yazılarınızı buradan görüntüleyebilir ve düzenleyebilirsiniz.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-text-muted">Yazı yönetimi yakında eklenecek...</p>
        </CardContent>
      </Card>
    </div>
  )
}

