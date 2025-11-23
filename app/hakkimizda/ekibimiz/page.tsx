"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import PageHeader from "@/components/page-header"

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Berk Y***",
      role: "Backend Developer",
      description: "Veritabanlarına fısıldayan adam. Bizim 'bitti' dediğimiz projeye o 'daha optimize edilebilir' der. Uykusunda API yazar.",
      gender: "male"
    },
    {
      name: "Selin K***",
      role: "Frontend Developer",
      description: "Piksel mükemmeliyetçisi. Bir buton 1 piksel kayarsa morali bozulur. Tasarımı koda dökerken büyü yapıyor olabilir.",
      gender: "female"
    },
    {
      name: "Caner D***",
      role: "Mobile App Developer",
      description: "iOS ve Android onun oyun alanı. 'Bunun uygulaması yok mu?' sorusunun cevabı. Klavyeden çok kahve tüketir.",
      gender: "male"
    },
    {
      name: "Elif Ş***",
      role: "SEO Uzmanı",
      description: "Google ile arası bizden daha iyi. Algoritmalar onu görünce selam durur. Sitenizi aramalarda zirveye taşımaya yeminli.",
      gender: "female"
    },
    {
      name: "Mert Ö***",
      role: "Full Stack Lead",
      description: "Hata ayıklama (Debug) şerifi. Kodun hem önünü hem arkasını görür. 'Çalışmıyor' kelimesini lügatından sildi.",
      gender: "male"
    },
    {
      name: "Ayşe Y***",
      role: "UI/UX Designer",
      description: "Kullanıcıların aklını okur. Figma'da çizdiği hayalleri biz gerçeğe dönüştürürken terleriz. Renklerin efendisi.",
      gender: "female"
    }
  ]

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
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Alanında uzman, deneyimli ve tutkulu ekibimizle tanışın.
          </p>
        </motion.div>

        {/* Team Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 max-w-4xl mx-auto"
        >
          <div className="relative w-full h-64 md:h-96 rounded-lg overflow-hidden shadow-lg">
            <Image
              src="/team.jpg"
              alt="PixelCore Ekibi"
              fill
              className="object-cover"
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 896px"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 group"
            >
              {/* Avatar */}
              <div className="flex justify-center mb-6">
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 shadow-md group-hover:border-primary/30 transition-colors duration-300">
                  <Image
                    src={member.gender === "male" ? "/avatar-male.png" : "/avatar-female.png"}
                    alt={member.name}
                    fill
                    className="object-cover"
                    sizes="128px"
                  />
                </div>
              </div>

              {/* İsim - Kalın ve Büyük */}
              <h3 className="text-2xl font-bold text-secondary mb-3">
                {member.name}
              </h3>

              {/* Unvan - Kırmızı ve Belirgin */}
              <p className="text-primary font-semibold text-lg mb-4">
                {member.role}
              </p>

              {/* Açıklama - Gri Tonlarda ve Ortalanmış */}
              <p className="text-text-muted text-sm leading-relaxed">
                {member.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function EkibimizPage() {
  return (
    <>
      <PageHeader
        title="Ekibimiz"
        breadcrumbs={[
          { label: "Hakkımızda", href: "/hakkimizda/pixelcore" },
          { label: "Ekibimiz" }
        ]}
      />
      <TeamSection />
    </>
  )
}

