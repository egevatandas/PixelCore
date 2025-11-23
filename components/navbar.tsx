"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Menu, X, Mail, Phone, ChevronDown, Building2, Users } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuLink,
    navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import { services } from "@/data/services"
import { cn } from "@/lib/utils"

const navLinks = [
    { name: "Hizmetlerimiz", href: "/hizmetler", hasDropdown: true },
    { name: "Hakkımızda", href: "/hakkimizda/pixelcore", hasDropdown: true },
    { name: "Referanslarımız", href: "/referanslarimiz" },
    { name: "Kariyer", href: "/kariyer" },
    { name: "İletişim", href: "/iletisim" },
]

export default function Navbar() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false)
    const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false)

    // Check if a path is active
    const isActive = (href: string) => {
        if (href === "/") {
            return pathname === "/"
        }
        return pathname.startsWith(href)
    }

    // Check if any service page is active
    const isServiceActive = () => {
        return pathname.startsWith("/hizmetler")
    }

    // Check if any about page is active
    const isAboutActive = () => {
        return pathname.startsWith("/hakkimizda")
    }

    const aboutLinks = [
        {
            title: "PixelCore",
            href: "/hakkimizda/pixelcore",
            description: "Kurumsal kimliğimiz, vizyonumuz ve 2015'ten bugüne hikayemiz.",
            icon: Building2
        },
        {
            title: "Ekibimiz",
            href: "/hakkimizda/ekibimiz",
            description: "Projelerin arkasındaki yaratıcı ve profesyonel kadromuzla tanışın.",
            icon: Users
        }
    ]

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    return (
        <>
            {/* Top Bar - İletişim Bilgileri */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-200">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between py-3">
                        {/* Logo */}
                        <Link href="/" className="flex items-center">
                            <div className="relative w-64 h-12">
                                <Image
                                    src="/logo.png"
                                    alt="PixelCore Logo"
                                    fill
                                    className="object-contain object-left"
                                    priority
                                />
                            </div>
                        </Link>

                        {/* İletişim Bilgileri - Desktop */}
                        <div className="hidden lg:flex items-center space-x-8">
                            {/* Email */}
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Mail className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-text-muted">Email:</p>
                                    <a
                                        href="mailto:info@pixelcore.com"
                                        className="text-sm font-semibold text-secondary hover:text-primary transition-colors"
                                    >
                                        info@pixelcore.com
                                    </a>
                                </div>
                            </div>

                            {/* Telefon */}
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                    <Phone className="h-5 w-5 text-primary" />
                                </div>
                                <div>
                                    <p className="text-xs text-text-muted">İletişim Numaramız:</p>
                                    <a
                                        href="tel:+905551234567"
                                        className="text-sm font-semibold text-secondary hover:text-primary transition-colors"
                                    >
                                        +90 (555) 123 45 67
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:block">
                            <Button
                                asChild
                                variant="outline"
                                className="border-gray-300 text-text hover:bg-background-alt"
                            >
                                <Link href="/iletisim">Hızlı Teklif Al</Link>
                            </Button>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="lg:hidden text-secondary focus:outline-none"
                            onClick={() => setIsOpen(!isOpen)}
                            aria-label="Toggle menu"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Navigation Bar - Kırmızı Arka Plan */}
            <nav
                className={`fixed top-[73px] left-0 right-0 z-50 bg-primary transition-all duration-300 ${scrolled ? "shadow-lg" : ""
                    }`}
            >
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between">
                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center space-x-1">
                            <NavigationMenu>
                                <NavigationMenuList>
                                    {navLinks.map((link) => (
                                        <NavigationMenuItem key={link.href}>
                                            {link.name === "Hizmetlerimiz" ? (
                                                <>
                                                    <NavigationMenuTrigger className={cn(
                                                        "px-4 py-4 font-medium text-sm transition-colors",
                                                        isServiceActive()
                                                            ? "bg-white text-primary rounded-md"
                                                            : "bg-transparent text-white hover:bg-primary/80 data-[state=open]:bg-primary/80"
                                                    )}>
                                                        {link.name}
                                                    </NavigationMenuTrigger>
                                                    <NavigationMenuContent className="bg-white shadow-xl border border-gray-100 rounded-xl z-50">
                                                        <div className="w-[600px] p-6 rounded-xl">
                                                            <div className="grid grid-cols-2 gap-4">
                                                                {services.map((service) => {
                                                                    const Icon = service.icon
                                                                    return (
                                                                        <Link
                                                                            key={service.slug}
                                                                            href={`/hizmetler/${service.slug}`}
                                                                            className="group flex items-start space-x-3 p-4 rounded-lg hover:bg-red-50 transition-colors"
                                                                        >
                                                                            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                                                                <Icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                                                                            </div>
                                                                            <div className="flex-1">
                                                                                <h3 className="font-bold text-gray-800 mb-1 group-hover:text-red-600 transition-colors">
                                                                                    {service.title}
                                                                                </h3>
                                                                                <p className="text-sm text-gray-600 line-clamp-2">
                                                                                    {service.description}
                                                                                </p>
                                                                            </div>
                                                                        </Link>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                    </NavigationMenuContent>
                                                </>
                                            ) : link.name === "Hakkımızda" ? (
                                                <>
                                                    <NavigationMenuTrigger className={cn(
                                                        "px-4 py-4 font-medium text-sm transition-colors",
                                                        isAboutActive()
                                                            ? "bg-white text-primary rounded-md"
                                                            : "bg-transparent text-white hover:bg-primary/80 data-[state=open]:bg-primary/80"
                                                    )}>
                                                        {link.name}
                                                    </NavigationMenuTrigger>
                                                    <NavigationMenuContent className="bg-white shadow-xl border border-gray-100 rounded-xl z-50">
                                                        <div className="w-[400px] p-6 rounded-xl">
                                                            <div className="space-y-2">
                                                                {aboutLinks.map((aboutLink) => {
                                                                    const Icon = aboutLink.icon
                                                                    return (
                                                                        <NavigationMenuLink key={aboutLink.href} asChild>
                                                                            <Link
                                                                                href={aboutLink.href}
                                                                                className="group flex items-start space-x-3 p-4 rounded-lg hover:bg-red-50 transition-colors"
                                                                            >
                                                                                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors">
                                                                                    <Icon className="h-5 w-5 text-primary group-hover:text-white transition-colors" />
                                                                                </div>
                                                                                <div className="flex-1">
                                                                                    <h3 className="font-bold text-gray-800 mb-1 group-hover:text-red-600 transition-colors">
                                                                                        {aboutLink.title}
                                                                                    </h3>
                                                                                    <p className="text-sm text-gray-600 line-clamp-2">
                                                                                        {aboutLink.description}
                                                                                    </p>
                                                                                </div>
                                                                            </Link>
                                                                        </NavigationMenuLink>
                                                                    )
                                                                })}
                                                            </div>
                                                        </div>
                                                    </NavigationMenuContent>
                                                </>
                                            ) : link.hasDropdown ? (
                                                <>
                                                    <Link
                                                        href={link.href}
                                                        className="flex items-center space-x-1 px-4 py-4 text-white hover:bg-primary/80 transition-colors duration-200 font-medium text-sm"
                                                        onMouseEnter={() => setDropdownOpen(true)}
                                                        onMouseLeave={() => setDropdownOpen(false)}
                                                    >
                                                        <span>{link.name}</span>
                                                        <ChevronDown className="h-4 w-4" />
                                                    </Link>
                                                    <AnimatePresence>
                                                        {dropdownOpen && (
                                                            <motion.div
                                                                initial={{ opacity: 0, y: -10 }}
                                                                animate={{ opacity: 1, y: 0 }}
                                                                exit={{ opacity: 0, y: -10 }}
                                                                transition={{ duration: 0.2 }}
                                                                className="absolute top-full left-0 bg-white shadow-xl border border-gray-100 rounded-xl min-w-[200px] py-2 mt-1 z-50"
                                                                onMouseEnter={() => setDropdownOpen(true)}
                                                                onMouseLeave={() => setDropdownOpen(false)}
                                                            >
                                                                <Link
                                                                    href="/hakkimizda/pixelcore"
                                                                    className="block px-4 py-2 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors"
                                                                >
                                                                    PixelCore
                                                                </Link>
                                                                <Link
                                                                    href="/hakkimizda/ekibimiz"
                                                                    className="block px-4 py-2 text-gray-800 hover:bg-red-50 hover:text-red-600 transition-colors"
                                                                >
                                                                    Ekibimiz
                                                                </Link>
                                                            </motion.div>
                                                        )}
                                                    </AnimatePresence>
                                                </>
                                            ) : (
                                                <Link
                                                    href={link.href}
                                                    className={cn(
                                                        "flex items-center space-x-1 px-4 py-4 font-medium text-sm transition-colors duration-200 rounded-md",
                                                        isActive(link.href)
                                                            ? "bg-white text-primary"
                                                            : "text-white hover:bg-primary/80"
                                                    )}
                                                >
                                                    <span>{link.name}</span>
                                                </Link>
                                            )}
                                        </NavigationMenuItem>
                                    ))}
                                </NavigationMenuList>
                            </NavigationMenu>
                        </div>

                        {/* Mobile Navigation Toggle */}
                        <div className="lg:hidden w-full">
                            <button
                                className="w-full flex items-center justify-between py-4 text-white"
                                onClick={() => setIsOpen(!isOpen)}
                            >
                                <span className="font-medium">Menü</span>
                                {isOpen ? (
                                    <X className="h-5 w-5" />
                                ) : (
                                    <Menu className="h-5 w-5" />
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed top-[73px] left-0 right-0 z-40 bg-white border-t border-gray-200 lg:hidden"
                    >
                        <div className="container mx-auto px-4 py-4 space-y-2">
                            {/* Mobile İletişim Bilgileri */}
                            <div className="lg:hidden space-y-3 pb-4 border-b border-gray-200">
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Mail className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-muted">Email:</p>
                                        <a
                                            href="mailto:info@pixelcore.com"
                                            className="text-sm font-semibold text-secondary"
                                        >
                                            info@pixelcore.com
                                        </a>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Phone className="h-5 w-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="text-xs text-text-muted">Telefon:</p>
                                        <a
                                            href="tel:+905551234567"
                                            className="text-sm font-semibold text-secondary"
                                        >
                                            +90 (555) 123 45 67
                                        </a>
                                    </div>
                                </div>
                            </div>

                            {/* Mobile Navigation Links */}
                            {navLinks.map((link) => (
                                <div key={link.href}>
                                    {link.name === "Hizmetlerimiz" ? (
                                        <div>
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className={cn(
                                                    "block py-3 transition-colors duration-200 font-medium border-b border-gray-100 rounded-md px-2",
                                                    isServiceActive()
                                                        ? "bg-primary/10 text-primary"
                                                        : "text-secondary hover:text-primary"
                                                )}
                                            >
                                                {link.name}
                                            </Link>
                                            <div className="pl-4 space-y-1 border-b border-gray-100">
                                                {services.map((service) => (
                                                    <Link
                                                        key={service.slug}
                                                        href={`/hizmetler/${service.slug}`}
                                                        onClick={() => setIsOpen(false)}
                                                        className={cn(
                                                            "block py-2 transition-colors duration-200 text-sm rounded-md px-2",
                                                            pathname === `/hizmetler/${service.slug}`
                                                                ? "bg-primary/10 text-primary font-medium"
                                                                : "text-text-muted hover:text-primary"
                                                        )}
                                                    >
                                                        {service.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : link.name === "Hakkımızda" ? (
                                        <div>
                                            <Link
                                                href={link.href}
                                                onClick={() => setIsOpen(false)}
                                                className={cn(
                                                    "block py-3 transition-colors duration-200 font-medium border-b border-gray-100 rounded-md px-2",
                                                    isAboutActive()
                                                        ? "bg-primary/10 text-primary"
                                                        : "text-secondary hover:text-primary"
                                                )}
                                            >
                                                {link.name}
                                            </Link>
                                            <div className="pl-4 space-y-1 border-b border-gray-100">
                                                {aboutLinks.map((aboutLink) => (
                                                    <Link
                                                        key={aboutLink.href}
                                                        href={aboutLink.href}
                                                        onClick={() => setIsOpen(false)}
                                                        className={cn(
                                                            "block py-2 transition-colors duration-200 text-sm rounded-md px-2",
                                                            pathname === aboutLink.href
                                                                ? "bg-primary/10 text-primary font-medium"
                                                                : "text-text-muted hover:text-primary"
                                                        )}
                                                    >
                                                        {aboutLink.title}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className={cn(
                                                "block py-3 transition-colors duration-200 font-medium border-b border-gray-100 rounded-md px-2",
                                                isActive(link.href)
                                                    ? "bg-primary/10 text-primary"
                                                    : "text-secondary hover:text-primary"
                                            )}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Button
                                asChild
                                className="w-full bg-primary hover:bg-primary/90 text-white py-3 rounded-md font-semibold mt-4"
                            >
                                <Link href="/iletisim" onClick={() => setIsOpen(false)}>
                                    Hızlı Teklif Al
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
