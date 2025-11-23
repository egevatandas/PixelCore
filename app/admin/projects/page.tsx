"use client"

import { useState } from "react"
import { Plus, Edit, Trash2, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Breadcrumb } from "@/components/ui/breadcrumb"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { projects as initialProjects } from "@/data/projects"

export default function AdminProjects() {
  const [projects, setProjects] = useState(initialProjects)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingProject, setEditingProject] = useState<any>(null)

  const handleDelete = (id: number) => {
    if (confirm("Bu projeyi silmek istediğinize emin misiniz?")) {
      setProjects(projects.filter(p => p.id !== id))
    }
  }

  const handleEdit = (project: any) => {
    setEditingProject(project)
    setIsModalOpen(true)
  }

  const handleAddNew = () => {
    setEditingProject(null)
    setIsModalOpen(true)
  }

  const handleSave = (projectData: any) => {
    if (editingProject) {
      // Update existing
      setProjects(projects.map(p => p.id === editingProject.id ? { ...p, ...projectData } : p))
    } else {
      // Add new
      const newProject = {
        ...projectData,
        id: Math.max(...projects.map(p => p.id)) + 1,
        createdAt: new Date().toISOString().split('T')[0],
        updatedAt: new Date().toISOString().split('T')[0]
      }
      setProjects([...projects, newProject])
    }
    setIsModalOpen(false)
    setEditingProject(null)
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <div className="mb-4">
            <Breadcrumb
              items={[
                { label: "Admin", href: "/admin" },
                { label: "Projeler" }
              ]}
            />
          </div>
          <h1 className="text-3xl font-bold text-secondary mb-2">Projeler</h1>
          <p className="text-text-muted">Tüm projelerinizi buradan yönetebilirsiniz.</p>
        </div>
        <Button
          onClick={handleAddNew}
          className="bg-primary hover:bg-primary/90 text-white"
        >
          <Plus className="h-4 w-4 mr-2" />
          Yeni Ekle
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Proje Listesi</CardTitle>
          <CardDescription>
            Toplam {projects.length} proje bulunmaktadır.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>ID</TableHead>
                <TableHead>Başlık</TableHead>
                <TableHead>Kategori</TableHead>
                <TableHead>Müşteri</TableHead>
                <TableHead>Durum</TableHead>
                <TableHead>Tarih</TableHead>
                <TableHead className="text-right">İşlemler</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell className="font-medium">{project.id}</TableCell>
                  <TableCell className="font-medium">{project.title}</TableCell>
                  <TableCell>{project.category}</TableCell>
                  <TableCell>{project.client}</TableCell>
                  <TableCell>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      project.status === "published"
                        ? "bg-green-100 text-green-700"
                        : "bg-gray-100 text-gray-700"
                    }`}>
                      {project.status === "published" ? "Yayında" : "Taslak"}
                    </span>
                  </TableCell>
                  <TableCell>{new Date(project.createdAt).toLocaleDateString("tr-TR")}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => window.open(`/referanslarimiz`, '_blank')}
                        className="h-8 w-8 p-0"
                      >
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(project)}
                        className="h-8 w-8 p-0"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(project.id)}
                        className="h-8 w-8 p-0 text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      {/* Modal for Add/Edit */}
      {isModalOpen && (
        <ProjectModal
          project={editingProject}
          onSave={handleSave}
          onClose={() => {
            setIsModalOpen(false)
            setEditingProject(null)
          }}
        />
      )}
    </div>
  )
}

// Project Modal Component
function ProjectModal({ project, onSave, onClose }: any) {
  const [formData, setFormData] = useState(
    project || {
      title: "",
      category: "",
      description: "",
      client: "",
      year: new Date().getFullYear(),
      status: "draft",
      technologies: [],
      image: ""
    }
  )

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSave(formData)
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader>
          <CardTitle>{project ? "Proje Düzenle" : "Yeni Proje Ekle"}</CardTitle>
          <CardDescription>
            {project ? "Proje bilgilerini güncelleyin" : "Yeni bir proje ekleyin"}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Başlık *
              </label>
              <input
                type="text"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Kategori *
                </label>
                <select
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="">Seçiniz</option>
                  <option value="Web Tasarım">Web Tasarım</option>
                  <option value="E-ticaret">E-ticaret</option>
                  <option value="Dijital Pazarlama">Dijital Pazarlama</option>
                  <option value="UI/UX Tasarım">UI/UX Tasarım</option>
                  <option value="SEO">SEO</option>
                  <option value="Prodüksiyon">Prodüksiyon</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Durum *
                </label>
                <select
                  value={formData.status}
                  onChange={(e) => setFormData({ ...formData, status: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                >
                  <option value="draft">Taslak</option>
                  <option value="published">Yayında</option>
                </select>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Açıklama *
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={4}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Müşteri *
                </label>
                <input
                  type="text"
                  value={formData.client}
                  onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  Yıl *
                </label>
                <input
                  type="number"
                  value={formData.year}
                  onChange={(e) => setFormData({ ...formData, year: parseInt(e.target.value) })}
                  className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-secondary mb-2">
                Görsel URL
              </label>
              <input
                type="url"
                value={formData.image}
                onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                className="w-full px-4 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="https://images.unsplash.com/..."
              />
            </div>
            <div className="flex justify-end space-x-4 pt-4">
              <Button type="button" variant="outline" onClick={onClose}>
                İptal
              </Button>
              <Button type="submit" className="bg-primary hover:bg-primary/90 text-white">
                {project ? "Güncelle" : "Ekle"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

