import { 
  Monitor, 
  Megaphone, 
  Palette, 
  TrendingUp, 
  Globe, 
  Camera, 
  Smartphone, 
  Settings 
} from "lucide-react"

export interface Testimonial {
  companyName: string
  clientName: string
  comment: string
  rating: number
  avatar: string
}

export interface Service {
  slug: string
  title: string
  description: string
  content: string
  features: string[]
  icon: typeof Monitor
  image: string
  testimonial: Testimonial
}

export const services: Service[] = [
  {
    slug: "web-tasarim-ve-yazilim",
    title: "Web Tasarım ve Yazılım",
    description: "İhtiyacınıza özel, kullanıcı dostu ve modern arayüzlerle donatılmış web siteleri tasarlıyor, gelişmiş yazılım çözümleri sunuyoruz.",
    content: `
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        PixelCore olarak, işletmenizin dijital varlığını güçlendiren modern web tasarım ve yazılım çözümleri sunuyoruz. 
        Next.js, React, Node.js gibi güncel teknolojilerle, kullanıcı deneyimini ön planda tutan, 
        performanslı ve SEO uyumlu web siteleri geliştiriyoruz.
      </p>
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Her projede, müşterilerimizin ihtiyaçlarına özel çözümler üretiyoruz. Responsive tasarımdan 
        e-ticaret entegrasyonlarına, özel panel geliştirmelerinden API entegrasyonlarına kadar 
        geniş bir yelpazede hizmet veriyoruz.
      </p>
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Teknik ekibimiz, sürekli gelişen teknolojileri takip ederek, projelerinizi en güncel 
        standartlarda hayata geçiriyor. Kod kalitesi, güvenlik ve performans konularında 
        hiçbir ödün vermiyoruz.
      </p>
    `,
    features: [
      "Modern ve responsive web tasarımları",
      "Next.js ve React ile gelişmiş yazılım çözümleri",
      "Kullanıcı dostu arayüzler ve UX optimizasyonu",
      "SEO uyumlu ve hızlı yükleme süreleri",
      "Özel panel ve yönetim sistemleri",
      "API entegrasyonları ve üçüncü parti servisler"
    ],
    icon: Monitor,
    image: "/hero.jpg",
    testimonial: {
      companyName: "Global Lojistik A.Ş.",
      clientName: "Ahmet Yılmaz - CEO",
      comment: "PixelCore ile çalışmak harika bir deneyimdi. Web sitemiz sayesinde online görünürlüğümüz %400 arttı ve müşteri portföyümüz genişledi. Profesyonel ekibi sayesinde projemiz zamanında ve bütçe dahilinde tamamlandı.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ahmet"
    }
  },
  {
    slug: "sosyal-medya-yonetimi",
    title: "Sosyal Medya Yönetimi",
    description: "Markanızı sosyal medya platformlarında en etkili şekilde temsil ediyor, içerik üretimi ve reklam yönetimi sağlıyoruz.",
    content: `
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Sosyal medya, markanızın müşterilerinizle doğrudan iletişim kurabileceği en güçlü 
        platformlardan biri. Profesyonel sosyal medya yönetimi hizmetimizle, markanızı 
        sosyal medya platformlarında en etkili şekilde temsil ediyoruz.
      </p>
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        İçerik üretiminden topluluk yönetimine, reklam kampanyalarından analitik raporlamaya 
        kadar geniş bir hizmet yelpazesi sunuyoruz. Her platform için özel stratejiler geliştirerek, 
        hedef kitlenize etkili şekilde ulaşıyoruz.
      </p>
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Yaratıcı içerikler, etkileşim odaklı yaklaşım ve veri bazlı kararlarla, sosyal medya 
        hesaplarınızı büyütüyor ve marka bilinirliğinizi artırıyoruz.
      </p>
    `,
    features: [
      "İçerik üretimi ve planlama",
      "Topluluk yönetimi ve müşteri hizmetleri",
      "Reklam kampanyaları ve yönetimi",
      "Influencer işbirlikleri",
      "Analitik raporlama ve performans takibi",
      "Kriz yönetimi ve itibar koruma"
    ],
    icon: Megaphone,
    image: "/hero.jpg",
    testimonial: {
      companyName: "Digital Solutions",
      clientName: "Ayşe Demir - Pazarlama Müdürü",
      comment: "Sosyal medya yönetimi hizmeti sayesinde Instagram ve Facebook hesaplarımızda takipçi sayımız 3 katına çıktı. İçerik kalitesi ve etkileşim oranlarımız çok arttı. PixelCore ekibine teşekkürler!",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ayse"
    }
  },
  {
    slug: "grafik-tasarim-hizmetleri",
    title: "Grafik Tasarım Hizmetleri",
    description: "Kurumsal kimliğinizle uyumlu özgün grafik tasarımlar üretiyor, profesyonel ve yaratıcı görsel çözümler sunuyoruz.",
    content: `
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Markanızın görsel kimliği, müşterilerinizle kurduğunuz ilk bağlantıdır. Profesyonel 
        grafik tasarım hizmetlerimizle, kurumsal kimliğinizle uyumlu özgün tasarımlar üretiyoruz.
      </p>
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Logo tasarımından kurumsal kimlik çalışmalarına, broşür ve katalog tasarımlarından 
        dijital görsel içeriklere kadar geniş bir hizmet yelpazesi sunuyoruz. Her tasarımda, 
        markanızın hikayesini anlatan yaratıcı çözümler üretiyoruz.
      </p>
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Yaratıcı ekibimiz, güncel tasarım trendlerini takip ederek, markanızı öne çıkaracak 
        profesyonel ve etkileyici görsel çözümler sunuyor.
      </p>
    `,
    features: [
      "Logo ve kurumsal kimlik tasarımı",
      "Broşür, katalog ve basılı materyal tasarımları",
      "Dijital görsel içerik üretimi",
      "Sosyal medya görsel tasarımları",
      "Infografik ve sunum tasarımları",
      "Ambalaj ve etiket tasarımları"
    ],
    icon: Palette,
    image: "/hero.jpg",
    testimonial: {
      companyName: "Kreatif Ajans",
      clientName: "Mehmet Kaya - Kurucu",
      comment: "Grafik tasarım hizmetleri ile marka kimliğimiz tamamen yenilendi. Logo ve kurumsal kimlik çalışmaları müşterilerimizden çok olumlu geri dönüşler aldı. Yaratıcı ve profesyonel bir ekiple çalıştık.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Mehmet"
    }
  },
  {
    slug: "web-site-yonetimi-seo",
    title: "Web Site Yönetimi / SEO",
    description: "Web sitenizin güncel kalmasını sağlarken SEO uyumlu içeriklerle arama motorlarında üst sıralara çıkmanızı sağlıyoruz.",
    content: `
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Web sitenizin sürekli güncel kalması ve arama motorlarında üst sıralarda yer alması, 
        dijital başarınız için kritik öneme sahip. Web site yönetimi ve SEO hizmetlerimizle, 
        sitenizin her zaman güncel ve optimize olmasını sağlıyoruz.
      </p>
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Teknik SEO'dan içerik optimizasyonuna, düzenli güncellemelerden güvenlik yönetimine kadar 
        kapsamlı bir hizmet sunuyoruz. Her adımda, Google'ın güncel algoritmalarını takip ederek 
        en etkili yöntemleri uyguluyoruz.
      </p>
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Düzenli içerik güncellemeleri, teknik bakım ve SEO optimizasyonlarıyla, web sitenizin 
        performansını sürekli iyileştiriyoruz.
      </p>
    `,
    features: [
      "Teknik SEO analizi ve optimizasyonu",
      "İçerik yönetimi ve güncellemeleri",
      "Düzenli site bakımı ve güvenlik",
      "Yerel SEO ve Google My Business yönetimi",
      "Performans izleme ve raporlama",
      "Rakip analizi ve benchmarking"
    ],
    icon: TrendingUp,
    image: "/hero.jpg",
    testimonial: {
      companyName: "E-Ticaret Pro",
      clientName: "Zeynep Arslan - Dijital Pazarlama Uzmanı",
      comment: "SEO çalışmaları sonucunda organik trafiğimiz %300 arttı ve Google'da ilk sayfada yer almaya başladık. Web site yönetimi ve düzenli güncellemeler sayesinde sitemiz her zaman güncel kalıyor.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Zeynep"
    }
  },
  {
    slug: "dijital-pazarlama-hizmetleri",
    title: "Dijital Pazarlama Hizmetleri",
    description: "Hedef kitlenize ulaşmanızı sağlayan dijital reklam stratejileriyle markanızın bilinirliğini artırıyoruz.",
    content: `
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Dijital pazarlama, markanızın hedef kitlenize ulaşması için en etkili yöntemlerden biri. 
        Kapsamlı dijital pazarlama hizmetlerimizle, markanızın bilinirliğini artırıyor ve 
        satışlarınızı yükseltiyoruz.
      </p>
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Google Ads, Facebook Ads, Instagram reklamları ve diğer dijital reklam platformlarında 
        stratejik kampanyalar yönetiyoruz. Her kampanyada, hedef kitlenizi doğru şekilde 
        hedefleyerek, bütçenizi en verimli şekilde kullanmanızı sağlıyoruz.
      </p>
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Veri odaklı yaklaşımımızla, kampanya performanslarını sürekli izliyor ve optimize 
        ediyoruz. Dönüşüm oranlarınızı artırmak için A/B testleri ve stratejik iyileştirmeler 
        yapıyoruz.
      </p>
    `,
    features: [
      "Google Ads ve arama motoru reklamları",
      "Sosyal medya reklam kampanyaları",
      "E-posta pazarlama stratejileri",
      "İçerik pazarlama ve blog yönetimi",
      "Dönüşüm optimizasyonu ve A/B testleri",
      "Kapsamlı analitik raporlama"
    ],
    icon: Globe,
    image: "/hero.jpg",
    testimonial: {
      companyName: "TechStart İnovasyon",
      clientName: "Can Özdemir - Genel Müdür",
      comment: "Dijital pazarlama kampanyalarımız sayesinde online satışlarımız 5 katına çıktı. Google Ads ve sosyal medya reklamları ile hedef kitlemize çok etkili şekilde ulaştık. ROI oranlarımız beklentilerimizi aştı.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Can"
    }
  },
  {
    slug: "fotograf-drone-video-cekimleri",
    title: "Fotoğraf Drone-Video Çekimleri",
    description: "Profesyonel kamera ve drone ekipmanlarıyla işletmenizin tanıtımı için etkileyici görsel içerikler üretiyoruz.",
    content: `
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Görsel içerik, markanızın hikayesini anlatmanın en etkili yollarından biri. Profesyonel 
        fotoğraf ve video çekim hizmetlerimizle, işletmenizin tanıtımı için etkileyici görsel 
        içerikler üretiyoruz.
      </p>
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Profesyonel kamera ekipmanları ve drone teknolojisiyle, ürün fotoğraflarından tanıtım 
        videolarına, kurumsal çekimlerden etkinlik görüntülemelerine kadar geniş bir hizmet 
        yelpazesi sunuyoruz.
      </p>
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Yaratıcı ekibimiz, her çekimde markanızın hikayesini en etkili şekilde anlatacak 
        görsel içerikler üretiyor. Post-prodüksiyon hizmetlerimizle, çekilen görselleri 
        profesyonel standartlarda işliyoruz.
      </p>
    `,
    features: [
      "Profesyonel ürün fotoğrafçılığı",
      "Kurumsal tanıtım videoları",
      "Drone ile hava çekimleri",
      "Etkinlik görüntüleme",
      "Post-prodüksiyon ve kurgu",
      "Sosyal medya için optimize edilmiş içerikler"
    ],
    icon: Camera,
    image: "/hero.jpg",
    testimonial: {
      companyName: "Lüks Otel Zinciri",
      clientName: "Elif Şahin - Pazarlama Direktörü",
      comment: "Profesyonel fotoğraf ve drone çekimleri ile otellerimizin tanıtımı için muhteşem görsel içerikler elde ettik. Sosyal medyada paylaştığımız içerikler çok beğenildi ve rezervasyonlarımız arttı.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Elif"
    }
  },
  {
    slug: "mobil-uygulama-yazilimlari",
    title: "Mobil Uygulama Yazılımları",
    description: "İhtiyacınıza yönelik iOS ve Android tabanlı mobil uygulamalar geliştiriyor, kullanıcı deneyimini mobil cihazlara taşıyoruz.",
    content: `
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Mobil uygulamalar, müşterilerinizle iletişim kurmanın en etkili yollarından biri. 
        iOS ve Android tabanlı mobil uygulama geliştirme hizmetlerimizle, kullanıcı deneyimini 
        mobil cihazlara taşıyoruz.
      </p>
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Native ve cross-platform teknolojilerle, ihtiyacınıza yönelik özel mobil uygulamalar 
        geliştiriyoruz. Her uygulamada, kullanıcı deneyimini ön planda tutarak, performanslı 
        ve kullanıcı dostu çözümler sunuyoruz.
      </p>
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        App Store ve Google Play Store'a yükleme süreçlerinden, güncelleme yönetimine kadar 
        kapsamlı bir hizmet sunuyoruz. Mobil uygulamanızın sürekli gelişmesini sağlıyoruz.
      </p>
    `,
    features: [
      "iOS ve Android native uygulamalar",
      "Cross-platform mobil uygulama geliştirme",
      "Kullanıcı dostu arayüz tasarımları",
      "App Store ve Google Play yükleme",
      "Push notification entegrasyonları",
      "Sürekli güncelleme ve bakım hizmetleri"
    ],
    icon: Smartphone,
    image: "/hero.jpg",
    testimonial: {
      companyName: "Fitness App",
      clientName: "Burak Yıldız - Ürün Müdürü",
      comment: "Mobil uygulamamız iOS ve Android platformlarında başarıyla yayınlandı. Kullanıcı deneyimi çok akıcı ve performanslı. App Store ve Google Play'de 4.8 puan alarak kullanıcılarımızdan çok olumlu geri dönüşler aldık.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Burak"
    }
  },
  {
    slug: "yazilim-hizmetleri",
    title: "Yazılım Hizmetleri",
    description: "İşletmenizin ihtiyaçlarına özel masaüstü, web ve mobil tabanlı yazılım çözümleri geliştiriyoruz.",
    content: `
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        İşletmenizin ihtiyaçlarına özel yazılım çözümleri, operasyonel verimliliğinizi artırmanın 
        en etkili yollarından biri. Kapsamlı yazılım hizmetlerimizle, masaüstü, web ve mobil 
        tabanlı özel yazılım çözümleri geliştiriyoruz.
      </p>
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        ERP sistemlerinden CRM çözümlerine, özel panel geliştirmelerinden API entegrasyonlarına 
        kadar geniş bir hizmet yelpazesi sunuyoruz. Her projede, işletmenizin ihtiyaçlarını 
        analiz ederek, en uygun çözümleri üretiyoruz.
      </p>
      <p class="text-lg text-text-muted leading-relaxed mb-6">
        Teknik ekibimiz, güncel teknolojileri kullanarak, ölçeklenebilir ve güvenli yazılım 
        çözümleri geliştiriyor. Sürekli destek ve güncelleme hizmetlerimizle, yazılımlarınızın 
        her zaman güncel kalmasını sağlıyoruz.
      </p>
    `,
    features: [
      "Özel masaüstü uygulamaları",
      "Web tabanlı yazılım çözümleri",
      "Mobil uygulama geliştirme",
      "ERP ve CRM sistemleri",
      "API entegrasyonları",
      "Sürekli destek ve bakım hizmetleri"
    ],
    icon: Settings,
    image: "/hero.jpg",
    testimonial: {
      companyName: "Üretim Firması",
      clientName: "Serkan Aydın - IT Müdürü",
      comment: "Özel yazılım çözümleri ile üretim süreçlerimizi dijitalleştirdik. ERP entegrasyonu sayesinde verimliliğimiz %250 arttı. PixelCore ekibi, ihtiyaçlarımızı çok iyi anladı ve mükemmel bir çözüm sundu.",
      rating: 5,
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Serkan"
    }
  }
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(service => service.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map(service => service.slug)
}

