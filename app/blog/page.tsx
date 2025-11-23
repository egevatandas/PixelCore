"use client"

import { motion } from "framer-motion"
import { Calendar, User, Tag, ArrowRight } from "lucide-react"
import { blogs } from "@/data/blogs"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import PageHeader from "@/components/page-header"

export default function BlogPage() {
  const publishedBlogs = blogs.filter(b => b.status === "published")

  return (
    <>
      <PageHeader
        title="Blog"
        breadcrumbs={[
          { label: "Blog" }
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
              Dijital pazarlama, web tasarımı, SEO ve daha fazlası hakkında 
              güncel içerikler ve ipuçları.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {publishedBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white border-2 border-gray-200 rounded-lg overflow-hidden hover:border-primary hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={blog.image}
                    alt={blog.title}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-300"
                    loading="lazy"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {blog.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center space-x-4 text-sm text-text-muted mb-3">
                    <div className="flex items-center space-x-1">
                      <User className="h-4 w-4" />
                      <span>{blog.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>{new Date(blog.publishedAt).toLocaleDateString("tr-TR")}</span>
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-secondary mb-3">
                    {blog.title}
                  </h2>
                  <p className="text-text-muted text-sm mb-4 line-clamp-3">
                    {blog.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {blog.tags.slice(0, 2).map((tag, idx) => (
                      <span
                        key={idx}
                        className="text-xs bg-background-alt text-text-muted px-2 py-1 rounded flex items-center space-x-1"
                      >
                        <Tag className="h-3 w-3" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                  <Button
                    asChild
                    variant="outline"
                    className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                  >
                    <Link href={`/blog/${blog.slug}`}>
                      Devamını Oku
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

