import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Award, Target, Zap, Shield, Heart, ImageIcon, Video } from "lucide-react"
import { useState } from "react"

export function About() {
  const [selectedMedia, setSelectedMedia] = useState<{ type: "image" | "video"; src: string; title: string } | null>(
    null,
  )

  const stats = [
    { icon: Users, value: "500+", label: "Mamnun mijozlar" },
    { icon: Award, value: "10+", label: "Yillik tajriba" },
    { icon: Target, value: "1000+", label: "Tugallangan loyihalar" },
    { icon: Zap, value: "24/7", label: "Qo'llab-quvvatlash" },
  ]

  const values = [
    {
      icon: Shield,
      title: "Ishonchlilik",
      description: "Mijozlarimiz bizga ishonishadi, chunki biz har doim va'dalarimizni bajaramiz.",
    },
    {
      icon: Target,
      title: "Aniqlik",
      description: "Yuqori aniqlikdagi o'lchashlar va professional yondashuv bizning ustuvorimizdir.",
    },
    {
      icon: Zap,
      title: "Tezkorlik",
      description: "Loyihalarni belgilangan muddat ichida va sifatli tarzda bajaramiz.",
    },
    {
      icon: Heart,
      title: "Mijoz mamnuniyati",
      description: "Mijozlarimizning mamnuniyati bizning asosiy maqsadimizdir.",
    },
  ]

  const workImages = [
    { src: "/work1.jpg", title: "Geodezik asboblar bilan ishlash" },
    { src: "/work2.jpg", title: "Topografik o'lchash jarayoni" },
    { src: "/work3.jpg", title: "Dala ishlari - GPS o'lchashlar" },
    { src: "/work4.jpg", title: "Yer uchastkasini o'lchash" },
    { src: "/work5.jpg", title: "Kadastr xaritalarini tayyorlash" },
    { src: "/work6.jpg", title: "Kompyuterda ma'lumotlarni qayta ishlash" },
    { src: "/work7.jpg", title: "Texnik hujjatlarni tayyorlash" },
    { src: "/work8.jpg", title: "Sifat nazorati va tekshirish" },
    { src: "/work9.jpg", title: "Mijoz bilan maslahatlashish" },
  ]

  const workVideo = {
    src: "/lavha.mp4",
    title: "Ish jarayoni - To'liq ko'rish",
    thumbnail: "/work1.png", // Using first work image as thumbnail
  }

  return (
    <div className="py-16 space-y-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Biz Haqimizda</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Topografiya va Raqamli Kadastr TRK MCHJ — geodeziya, topografiya va kadastr sohasida 10 yildan ortiq
            tajribaga ega professional kompaniya.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">
              Bizning tariximiz
            </Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Professional Xizmat va Ishonchli Hamkorlik</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                2014 yilda tashkil etilgan kompaniyamiz geodeziya, topografiya va raqamli kadastr sohasida yuqori
                sifatli xizmatlar ko'rsatib kelmoqda. Biz zamonaviy texnologiyalar va professional yondashuvni
                birlashtirgan holda mijozlarimizga eng yaxshi natijalarni taqdim etamiz.
              </p>
              <p>
                Bizning jamoamiz tajribali mutaxassislardan iborat bo'lib, har bir loyihaga individual yondashuv va
                yuqori darajadagi professional mahorat bilan yondashadi. Shu vaqt ichida 1000 dan ortiq loyihalarni
                muvaffaqiyatli yakunladik.
              </p>
              <p>
                Bugungi kunda biz O'zbekistonning turli hududlarida faoliyat olib boramiz va davlat tashkilotlari,
                xususiy korxonalar va jismoniy shaxslar bilan hamkorlik qilamiz.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="/about.jpg"
              alt="Bizning jamoamiz"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-lg">
              <div className="text-2xl font-bold text-green-600">10+</div>
              <div className="text-sm text-gray-600">Yillik tajriba</div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Process Gallery */}
      <section className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            Bizning ishimiz
          </Badge>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ish Jarayoni Lavhalari</h2>
          <p className="text-lg text-gray-600">Professional faoliyatimizning har bir bosqichini ko'ring</p>
        </div>

        {/* Featured Video */}
        <div className="mb-12">
          <Card className="overflow-hidden shadow-lg">
            <div className="relative aspect-video bg-gray-900">
              <video className="w-full h-full object-cover" controls poster={workVideo.thumbnail}>
                <source src={workVideo.src} type="video/mp4" />
                Brauzeringiz video formatini qo'llab-quvvatlamaydi.
              </video>
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 rounded-lg text-sm">
                <Video className="w-4 h-4 inline mr-2" />
                {workVideo.title}
              </div>
            </div>
          </Card>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {workImages.map((image, index) => (
            <Card
              key={index}
              className="group cursor-pointer overflow-hidden hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
              onClick={() => setSelectedMedia({ type: "image", src: image.src, title: image.title })}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-white/90 rounded-full p-3">
                      <ImageIcon className="w-6 h-6 text-gray-700" />
                    </div>
                  </div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-semibold text-sm text-gray-900 line-clamp-2">{image.title}</h3>
                <p className="text-xs text-gray-500 mt-1">Bosqich {index + 1}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Steps */}
        <div className="mt-16 bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Ish Jarayoni Bosqichlari</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Dala ishlari", description: "GPS va geodezik asboblar bilan o'lchashlar" },
              { step: "02", title: "Ma'lumot qayta ishlash", description: "Kompyuterda ma'lumotlarni tahlil qilish" },
              { step: "03", title: "Hujjat tayyorlash", description: "Texnik hujjatlar va xaritalar yaratish" },
              { step: "04", title: "Sifat nazorati", description: "Natijalarni tekshirish va taqdim etish" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                    {item.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-green-300 transform -translate-y-1/2"></div>
                  )}
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h4>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-green-600">Missiyamiz</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Geodeziya, topografiya va kadastr sohasida yuqori sifatli, ishonchli va zamonaviy xizmatlar ko'rsatish
                orqali mijozlarimizning ehtiyojlarini to'liq qondirish. Professional yondashuv va innovatsion
                texnologiyalar yordamida O'zbekistonda sohaning rivojlanishiga hissa qo'shish.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Vazifamiz</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Geodeziya va topografiya sohasida yetakchi kompaniya bo'lib, zamonaviy texnologiyalar va professional
                jamoamiz bilan mijozlarimizga eng yuqori sifatdagi xizmatlar taqdim etish. Har bir loyihada aniqlik,
                tezkorlik va ishonchlilikni ta'minlash.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Bizning Qadriyatlarimiz</h2>
            <p className="text-lg text-gray-600">Biz quyidagi tamoyillar asosida ishlaymiz</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for enlarged images */}
      {selectedMedia && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedMedia(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] w-full">
            <button
              onClick={() => setSelectedMedia(null)}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold"
            >
              ✕ 
            </button>
            <div className="bg-white rounded-lg overflow-hidden">
              <img
                src={selectedMedia.src || "/placeholder.svg"}
                alt={selectedMedia.title}
                className="w-full h-auto max-h-[70vh] object-contain"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900">{selectedMedia.title}</h3>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
