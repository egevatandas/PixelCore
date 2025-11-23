"use client"

import { motion } from "framer-motion"
import {
    Globe,
    Share2,
    Search,
    Video,
    TrendingUp,
    Sparkles,
    ShoppingCart,
    BarChart3,
    Mail,
    Camera,
    Code,
    Palette
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import PageHeader from "@/components/page-header"

const services = [
    {
        icon: Globe,
        title: "Web Tasarım & Geliştirme",
        description: "Modern, responsive ve kullanıcı dostu web siteleri tasarlıyoruz. Next.js, React gibi güncel teknolojilerle performanslı ve SEO uyumlu web çözümleri sunuyoruz.",
        features: ["Responsive Tasarım", "SEO Optimizasyonu", "E-ticaret Çözümleri", "CMS Entegrasyonu"]
    },
    {
        icon: Share2,
        title: "Sosyal Medya Yönetimi",
        description: "Markanızın dijital kimliğini güçlendiren sosyal medya stratejileri. İçerik üretimi, topluluk yönetimi ve reklam kampanyaları ile hedef kitlenize etkili şekilde ulaşın.",
        features: ["İçerik Üretimi", "Topluluk Yönetimi", "Reklam Kampanyaları", "Analitik Raporlama"]
    },
    {
        icon: Search,
        title: "SEO & Arama Motoru Optimizasyonu",
        description: "Arama motorlarında üst sıralarda yer almanızı sağlıyoruz. Teknik SEO, içerik optimizasyonu ve link building stratejileri ile organik trafiğinizi artırıyoruz.",
        features: ["Teknik SEO", "İçerik Optimizasyonu", "Link Building", "Yerel SEO"]
    },
    {
        icon: Video,
        title: "Video Prodüksiyon & Görsel Tasarım",
        description: "Profesyonel video içerik üretimi ve görsel tasarım hizmetleri. Tanıtım videoları, animasyonlar, infografikler ve marka kimliği tasarımları.",
        features: ["Tanıtım Videoları", "Animasyon", "Infografik Tasarım", "Marka Kimliği"]
    },
    {
        icon: TrendingUp,
        title: "Dijital Pazarlama",
        description: "Hedef kitlenize ulaşmanızı sağlayan kapsamlı pazarlama çözümleri. Google Ads, Facebook Ads, e-posta pazarlama ve influencer iş birlikleri.",
        features: ["Google Ads", "Facebook/Instagram Ads", "E-posta Pazarlama", "Influencer Pazarlama"]
    },
    {
        icon: Sparkles,
        title: "Marka Kimliği & Logo Tasarımı",
        description: "Markanızın benzersiz hikayesini anlatan yaratıcı tasarımlar. Logo tasarımı, kurumsal kimlik, ambalaj tasarımı ve marka rehberi oluşturma.",
        features: ["Logo Tasarımı", "Kurumsal Kimlik", "Ambalaj Tasarımı", "Marka Rehberi"]
    },
    {
        icon: ShoppingCart,
        title: "E-ticaret Çözümleri",
        description: "Online satış platformunuzu kuruyor ve yönetiyoruz. Ürün yönetimi, ödeme entegrasyonları, kargo çözümleri ve müşteri deneyimi optimizasyonu.",
        features: ["Platform Kurulumu", "Ödeme Entegrasyonu", "Ürün Yönetimi", "Kargo Entegrasyonu"]
    },
    {
        icon: BarChart3,
        title: "Analitik & Raporlama",
        description: "Dijital performansınızı ölçüyor ve raporluyoruz. Google Analytics, sosyal medya metrikleri ve özel dashboard çözümleri ile veri odaklı kararlar alın.",
        features: ["Google Analytics", "Sosyal Medya Metrikleri", "Özel Dashboard", "Aylık Raporlar"]
    },
    {
        icon: Mail,
        title: "E-posta Pazarlama",
        description: "Hedef kitlenize doğrudan ulaşın. E-posta kampanyaları, otomasyon, A/B testleri ve segmentasyon stratejileri ile dönüşüm oranlarınızı artırın.",
        features: ["Kampanya Tasarımı", "Otomasyon", "A/B Testleri", "Segmentasyon"]
    },
    {
        icon: Camera,
        title: "Fotoğraf & Video Çekimi",
        description: "Profesyonel ürün fotoğrafları, kurumsal video çekimleri ve etkinlik kapsamı. Stüdyo ve lokasyon çekimleri ile markanızı en iyi şekilde yansıtıyoruz.",
        features: ["Ürün Fotoğrafçılığı", "Kurumsal Video", "Etkinlik Kapsamı", "Stüdyo Çekimi"]
    },
    {
        icon: Code,
        title: "Yazılım Geliştirme",
        description: "Özel yazılım çözümleri geliştiriyoruz. Web uygulamaları, mobil uygulamalar ve API entegrasyonları ile iş süreçlerinizi dijitalleştiriyoruz.",
        features: ["Web Uygulamaları", "Mobil Uygulamalar", "API Geliştirme", "Sistem Entegrasyonu"]
    },
    {
        icon: Palette,
        title: "UI/UX Tasarım",
        description: "Kullanıcı deneyimini ön planda tutan arayüz tasarımları. Kullanıcı araştırması, wireframe, prototipleme ve test süreçleri ile kullanıcı dostu çözümler.",
        features: ["Kullanıcı Araştırması", "Wireframe & Prototip", "Arayüz Tasarımı", "Kullanılabilirlik Testi"]
    }
]

export default function HizmetlerPage() {
    return (
        <>
            <PageHeader
                title="Hizmetlerimiz"
                breadcrumbs={[
                    { label: "Hizmetlerimiz" }
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
                            Dijital dünyada ihtiyacınız olan tüm hizmetleri tek çatı altında sunuyoruz.
                            Her projede mükemmelliği hedefliyoruz.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Services Image Section */}
            <section className="py-12 bg-white">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="max-w-5xl mx-auto"
                    >
                        <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
                            <Image
                                src="/service-web.jpg"
                                alt="Web Tasarım ve Geliştirme Hizmetleri"
                                fill
                                className="object-cover"
                                loading="lazy"
                                sizes="(max-width: 768px) 100vw, 1024px"
                            />
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => {
                            const Icon = service.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.05 }}
                                    className="group bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-xl hover:shadow-primary/10"
                                >
                                    <div className="mb-4">
                                        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                            <Icon className="h-7 w-7 text-primary group-hover:text-white group-hover:rotate-3 transition-all duration-300" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-text-muted leading-relaxed mb-4">
                                        {service.description}
                                    </p>
                                    <ul className="space-y-2 mb-6">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start text-sm text-text-muted">
                                                <span className="text-primary mr-2">•</span>
                                                {feature}
                                            </li>
                                        ))}
                                    </ul>
                                    <Button
                                        asChild
                                        variant="outline"
                                        className="w-full border-primary text-primary hover:bg-primary hover:text-white"
                                    >
                                        <Link href="/iletisim">Detaylı Bilgi</Link>
                                    </Button>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-background-alt">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-4xl font-bold text-secondary mb-4">
                            Projeniz İçin Hemen Teklif Alın
                        </h2>
                        <p className="text-xl text-text-muted mb-8">
                            Size özel çözümlerimiz hakkında detaylı bilgi almak için bizimle iletişime geçin.
                        </p>
                        <Button
                            asChild
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
                        >
                            <Link href="/iletisim">İletişime Geçin</Link>
                        </Button>
                    </motion.div>
                </div>
            </section>
        </>
    )
}

