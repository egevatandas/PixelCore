"use client"

import { motion } from "framer-motion"
import {
    Globe,
    Share2,
    Search,
    Video,
    Sparkles,
    TrendingUp,
    Users,
    Award,
    ArrowRight,
    Quote,
    Star
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { services } from "@/data/services"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

// Hero Section
const HeroSection = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
            {/* Hero Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero.jpg"
                    alt="PixelCore Hero"
                    fill
                    className="object-cover object-center"
                    priority
                    quality={90}
                />
            </div>

            {/* Multi-layer Overlay for better text readability and brand consistency */}
            {/* Base dark overlay - daha koyu */}
            <div className="absolute inset-0 bg-black/85 z-10"></div>
            {/* Brand-colored gradient overlay - hafif kırmızı ton (marka kimliği) */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-black/50 z-10"></div>
            {/* Kenarlardan koyulaştırma - görseli yumuşatır */}
            <div
                className="absolute inset-0 z-10"
                style={{
                    background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.4) 100%)'
                }}
            ></div>

            <div className="container mx-auto px-4 relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                        Markanızı Dijital Dünyada{" "}
                        <span className="text-primary font-extrabold">Zirveye Taşıyoruz</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed">
                        Yaratıcı tasarımlar, güçlü stratejiler ve yenilikçi çözümlerle
                        dijital varlığınızı bir üst seviyeye çıkarıyoruz.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="border-2 border-white text-gray-900 bg-white/90 hover:bg-white hover:text-secondary text-lg px-8 py-6 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] transition-all"
                        >
                            <Link href="/hizmetler">Hizmetlerimiz</Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            className="bg-primary hover:bg-primary/90 text-white text-lg px-8 py-6 shadow-2xl hover:shadow-[0_25px_50px_-12px_rgba(211,47,47,0.5)] transition-all"
                        >
                            <Link href="/iletisim">Hemen Başlayalım</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// Brands/References Section
const BrandsSection = () => {
    // Logo boyutları object-contain olmalı
    const brands = [
        { name: "Defne Lashing", logo: "/ref1.png" },
        { name: "Polatoğlu", logo: "/ref2.png" },
        { name: "Görel", logo: "/ref3.png" },
        { name: "Alas Turizm", logo: "/ref4.png" },
        { name: "Transyol", logo: "/ref5.png" },
        { name: "Kılavuz", logo: "/ref6.png" },
        { name: "Atlas", logo: "/ref7.png" },
        { name: "RKN Ahşap", logo: "/ref8.png" }
    ]

    return (
        <section className="py-16 bg-background-alt">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl font-bold text-secondary mb-4">
                        Bize Güvenenler
                    </h2>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={brand.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            className="group bg-white border border-gray-100 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex items-center justify-center h-32 p-4"
                        >
                            <div className="relative w-full h-full flex items-center justify-center">
                                <Image
                                    src={brand.logo}
                                    alt={brand.name}
                                    width={200}
                                    height={80}
                                    className="object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                                />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}

// Services Section
const ServicesSection = () => {

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                        Hizmetlerimiz
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        Dijital dünyada ihtiyacınız olan tüm hizmetleri tek çatı altında sunuyoruz.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <Link
                                key={service.slug}
                                href={`/hizmetler/${service.slug}`}
                            >
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="group relative bg-white border-2 border-gray-200 rounded-lg p-8 hover:border-primary hover:-translate-y-2 transition-all duration-300 cursor-pointer shadow-sm hover:shadow-lg h-full"
                                >
                                    <div className="mb-4">
                                        <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                                            <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors duration-300" />
                                        </div>
                                    </div>
                                    <h3 className="text-xl font-bold text-secondary mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-text-muted leading-relaxed">
                                        {service.description}
                                    </p>
                                </motion.div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

// Customer Reviews Section
const CustomerReviewsSection = () => {
    const reviews = [
        {
            name: "Cengiz Arpacı",
            company: "Otomotiv Sektörü",
            comment: "PixelCore ekibiyle çalışmak harikaydı. Web sitemizin yapımı bittikten sonra bile anında her adımda destek alabildiğim için kendilerinden çok memnunum.",
        },
        {
            name: "Alihan Ata",
            company: "İnşaat Projesi",
            comment: "Biz orta segment bir firma olarak farklı farklı ajanslarla çalıştık ancak iş bitirme yeteneğini sadece sizde bulduk. Revizyonlarımızı dediğimiz gün içinde yapıp teslim ettiler.",
        },
        {
            name: "Rabia Taştan",
            company: "E-Ticaret",
            comment: "Sitenin her aşamasında birlikte ilerledik. Bu imkanı sunan başka bir firma yok. Tam istediğimi ortaya çıkarttılar, süreç çok şeffaftı.",
        },
    ]

    return (
        <section className="py-20 bg-gray-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-4">
                        Müşterilerimiz Ne Diyor?
                    </h2>
                    <p className="text-xl text-text-muted max-w-2xl mx-auto">
                        İş ortaklarımızla kurduğumuz güçlü bağlar, en büyük referansımızdır.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        className="w-full max-w-5xl mx-auto"
                    >
                        <CarouselContent>
                            {reviews.map((review, index) => (
                                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                                    <div className="relative bg-white rounded-2xl shadow-md p-8 h-full flex flex-col">
                                        {/* Quote Icon - Sağ üst köşede silik kırmızı */}
                                        <Quote className="absolute top-4 right-4 h-16 w-16 text-primary/10" />

                                        {/* Yıldızlar */}
                                        <div className="flex gap-1 mb-4">
                                            {[...Array(5)].map((_, i) => (
                                                <Star
                                                    key={i}
                                                    className="h-5 w-5 fill-primary text-primary"
                                                />
                                            ))}
                                        </div>

                                        {/* Yorum */}
                                        <p className="text-text-muted leading-relaxed mb-6 flex-grow">
                                            &quot;{review.comment}&quot;
                                        </p>

                                        {/* Müşteri Bilgisi */}
                                        <div className="border-t border-gray-100 pt-4">
                                            <p className="font-semibold text-secondary">
                                                {review.name}
                                            </p>
                                            <p className="text-sm text-text-muted">
                                                {review.company}
                                            </p>
                                        </div>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious className="hidden md:flex -left-4 lg:-left-12" />
                        <CarouselNext className="hidden md:flex -right-4 lg:-right-12" />
                    </Carousel>
                </motion.div>
            </div>
        </section>
    )
}

// Why Us Section
const WhyUsSection = () => {
    const features = [
        {
            icon: Sparkles,
            title: "Kreatif Çözümler",
            description: "Her projeye özel, yenilikçi ve yaratıcı yaklaşımlar sunuyoruz."
        },
        {
            icon: TrendingUp,
            title: "Veri Odaklı Strateji",
            description: "Analitik verilerle desteklenen, ölçülebilir sonuçlar üretiyoruz."
        },
        {
            icon: Users,
            title: "Uzman Ekip",
            description: "Alanında deneyimli profesyonellerden oluşan dinamik ekibimiz."
        },
        {
            icon: Award,
            title: "Kanıtlanmış Başarı",
            description: "Yüzlerce başarılı proje ve mutlu müşteri referansımız."
        }
    ]

    return (
        <section className="py-20 bg-background-alt">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-6">
                            Neden Biz?
                        </h2>
                        <p className="text-xl text-text-muted mb-8 leading-relaxed">
                            Dijital dünyada fark yaratmak için sadece teknoloji değil,
                            strateji ve yaratıcılık da gerekiyor. İşte bizim farkımız.
                        </p>
                        <div className="space-y-6">
                            {features.map((feature, index) => {
                                const Icon = feature.icon
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className="flex items-start space-x-4"
                                    >
                                        <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                                            <Icon className="h-6 w-6 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-secondary mb-2">
                                                {feature.title}
                                            </h3>
                                            <p className="text-text-muted">
                                                {feature.description}
                                            </p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        {/* --- RESİMLİ 500+ ALANI --- */}
                        <div className="relative h-full min-h-[400px] w-full rounded-2xl overflow-hidden flex items-center justify-center">
                            {/* 1. Arka Plan Resmi (Public'e attığın resim) */}
                            <Image
                                src="/success-projects.png"
                                alt="500+ Başarılı Proje"
                                fill
                                className="object-cover"
                            />

                            {/* 2. Siyah Perde (Yazılar okunsun diye) */}
                            <div className="absolute inset-0 bg-black/75"></div>

                            {/* 3. Yazılar */}
                            <div className="relative z-10 text-center p-8">
                                <div className="text-7xl font-bold text-primary mb-4 drop-shadow-md">500+</div>
                                <div className="text-3xl font-semibold text-white mb-4">Başarılı Proje</div>
                                <div className="text-gray-200 text-lg max-w-xs mx-auto">
                                    Müşterilerimizin dijital dönüşüm yolculuğunda yanlarındayız
                                </div>
                            </div>
                        </div>
                        {/* --- BİTİŞ --- */}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

// CTA Section
const CTASection = () => {
    return (
        <section className="py-20 bg-primary relative overflow-hidden">
            {/* Sade Çizgi Desenleri - Minimal ve dikkat çekici */}
            {/* Yatay ince çizgiler */}
            <div className="absolute inset-0 opacity-8 z-0">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(
                        0deg,
                        transparent,
                        transparent 2px,
                        rgba(255, 255, 255, 0.08) 2px,
                        rgba(255, 255, 255, 0.08) 4px
                    )`,
                }}></div>
            </div>

            {/* Dikey ince çizgiler */}
            <div className="absolute inset-0 opacity-8 z-0">
                <div className="absolute inset-0" style={{
                    backgroundImage: `repeating-linear-gradient(
                        90deg,
                        transparent,
                        transparent 2px,
                        rgba(255, 255, 255, 0.08) 2px,
                        rgba(255, 255, 255, 0.08) 4px
                    )`,
                }}></div>
            </div>

            {/* Üst kenar çizgisi */}
            <div className="absolute top-0 left-0 right-0 h-px bg-white/15 z-0"></div>

            {/* Alt kenar çizgisi */}
            <div className="absolute bottom-0 left-0 right-0 h-px bg-white/15 z-0"></div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-center max-w-3xl mx-auto"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
                        Projenizi Hayata Geçirmeye Hazır mısınız?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Dijital dünyada fark yaratmak için bugün bizimle iletişime geçin.
                        Ücretsiz danışmanlık için hemen başlayalım.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <Button
                            asChild
                            size="lg"
                            variant="secondary"
                            className="bg-white text-primary hover:bg-gray-100 text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all font-semibold"
                        >
                            <Link href="/iletisim">
                                Hemen İletişime Geçin
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            className="bg-white/95 text-primary hover:bg-white border-2 border-white text-lg px-8 py-6 shadow-lg hover:shadow-xl transition-all font-semibold backdrop-blur-sm"
                        >
                            <Link href="/referanslarimiz">Referanslarımızı İnceleyin</Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

// Main Page Component
export default function Home() {
    return (
        <>
            <HeroSection />
            <BrandsSection />
            <ServicesSection />
            <CustomerReviewsSection />
            <WhyUsSection />
            <CTASection />
        </>
    )
}
