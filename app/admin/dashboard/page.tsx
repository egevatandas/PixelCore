"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { FolderKanban, FileText, Mail, TrendingUp } from "lucide-react"
import { projects } from "@/data/projects"
import { blogs } from "@/data/blogs"
import { Breadcrumb } from "@/components/ui/breadcrumb"

export default function AdminDashboard() {
  const totalProjects = projects.length
  const publishedProjects = projects.filter(p => p.status === "published").length
  const totalBlogs = blogs.length
  const publishedBlogs = blogs.filter(b => b.status === "published").length

  const stats = [
    {
      title: "Toplam Proje",
      value: totalProjects,
      description: `${publishedProjects} yayında`,
      icon: FolderKanban,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Toplam Yazı",
      value: totalBlogs,
      description: `${publishedBlogs} yayında`,
      icon: FileText,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Bekleyen Mesajlar",
      value: 12,
      description: "Son 7 gün",
      icon: Mail,
      color: "text-yellow-600",
      bgColor: "bg-yellow-50"
    },
    {
      title: "Büyüme Oranı",
      value: "+24%",
      description: "Bu ay",
      icon: TrendingUp,
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ]

  return (
    <div>
      <div className="mb-8">
        <div className="mb-4">
          <Breadcrumb
            items={[
              { label: "Admin", href: "/admin" },
              { label: "Dashboard" }
            ]}
          />
        </div>
        <h1 className="text-3xl font-bold text-secondary mb-2">Dashboard</h1>
        <p className="text-text-muted">Hoş geldiniz! İşte genel bakış.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card key={index}>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-text-muted">
                  {stat.title}
                </CardTitle>
                <div className={`${stat.bgColor} p-2 rounded-lg`}>
                  <Icon className={`h-4 w-4 ${stat.color}`} />
                </div>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-secondary">{stat.value}</div>
                <p className="text-xs text-text-muted mt-1">{stat.description}</p>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Son Projeler</CardTitle>
            <CardDescription>En son eklenen projeler</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {projects.slice(0, 5).map((project) => (
                <div key={project.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                  <div>
                    <p className="font-medium text-secondary">{project.title}</p>
                    <p className="text-sm text-text-muted">{project.category}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    project.status === "published"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}>
                    {project.status === "published" ? "Yayında" : "Taslak"}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Son Yazılar</CardTitle>
            <CardDescription>En son eklenen blog yazıları</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {blogs.slice(0, 5).map((blog) => (
                <div key={blog.id} className="flex items-center justify-between border-b pb-4 last:border-0">
                  <div>
                    <p className="font-medium text-secondary">{blog.title}</p>
                    <p className="text-sm text-text-muted">{blog.category}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    blog.status === "published"
                      ? "bg-green-100 text-green-700"
                      : "bg-gray-100 text-gray-700"
                  }`}>
                    {blog.status === "published" ? "Yayında" : "Taslak"}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

