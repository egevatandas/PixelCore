"use client"

import Link from "next/link"
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"
import { services } from "@/data/services"

const footerLinks = {
    hizliLinkler: services.map(service => ({
        name: service.title,
        href: `/hizmetler/${service.slug}`
    })),
    kurumsal: [
        { name: "PixelCore", href: "/hakkimizda/pixelcore" },
        { name: "Ekibimiz", href: "/hakkimizda/ekibimiz" },
        { name: "Kariyer", href: "/kariyer" },
        { name: "Referanslar", href: "/referanslar" },
    ],
}

const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
]

export default function Footer() {
    const [email, setEmail] = useState("")

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Newsletter subscription logic here
        console.log("Newsletter subscription:", email)
        setEmail("")
    }

    return (
        <footer className="bg-secondary text-white">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Column 1: Logo ve Açıklama */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center space-x-2">
                            <Image
                                src="/logo.png"
                                alt="PixelCore Logo"
                                width={180}
                                height={60}
                                className="h-10 w-auto"
                            />
                        </Link>
                        <p className="text-gray-300 text-sm leading-relaxed">
                            Dijital dünyada markanızı öne çıkarıyoruz. Modern web çözümleri
                            ve yaratıcı tasarımlarla işinizi bir adım öne taşıyoruz.
                        </p>
                        <div className="flex space-x-4 pt-2">
                            {socialLinks.map((social) => {
                                const Icon = social.icon
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        aria-label={social.label}
                                        className="text-gray-300 hover:text-primary transition-colors duration-200"
                                    >
                                        <Icon className="h-5 w-5" />
                                    </a>
                                )
                            })}
                        </div>
                    </div>

                    {/* Column 2: Hızlı Linkler */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Hızlı Linkler</h3>
                        <ul className="space-y-2">
                            {footerLinks.hizliLinkler.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Kurumsal */}
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Kurumsal</h3>
                        <ul className="space-y-2">
                            {footerLinks.kurumsal.map((link) => (
                                <li key={link.href}>
                                    <Link
                                        href={link.href}
                                        className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: İletişim ve E-bülten */}
                    <div className="space-y-4">
                        <div>
                            <h3 className="text-lg font-semibold mb-4">İletişim</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start space-x-3">
                                    <MapPin className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300 text-sm">
                                        İstanbul, Türkiye
                                    </span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                                    <a
                                        href="tel:+905551234567"
                                        className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                                    >
                                        +90 (555) 123 45 67
                                    </a>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                                    <a
                                        href="mailto:info@pixelcore.com"
                                        className="text-gray-300 hover:text-primary transition-colors duration-200 text-sm"
                                    >
                                        info@pixelcore.com
                                    </a>
                                </li>
                            </ul>
                        </div>

                        <div className="pt-4">
                            <h3 className="text-lg font-semibold mb-4">E-bülten</h3>
                            <p className="text-gray-300 text-sm mb-3">
                                Yeniliklerden haberdar olmak için e-bültenimize abone olun.
                            </p>
                            <form onSubmit={handleNewsletterSubmit} className="space-y-2">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="E-posta adresiniz"
                                    required
                                    className="w-full px-4 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-sm"
                                />
                                <Button
                                    type="submit"
                                    className="w-full bg-primary hover:bg-primary/90 text-white py-2 rounded-md font-semibold text-sm"
                                >
                                    Abone Ol
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-8 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-400 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} PixelCore. Tüm hakları saklıdır.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <Link
                                href="/gizlilik-politikasi"
                                className="text-gray-400 hover:text-primary transition-colors duration-200"
                            >
                                Gizlilik Politikası
                            </Link>
                            <Link
                                href="/kullanim-kosullari"
                                className="text-gray-400 hover:text-primary transition-colors duration-200"
                            >
                                Kullanım Koşulları
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

