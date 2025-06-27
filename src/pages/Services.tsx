import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Ruler,
  MapPin,
  Database,
  Compass,
  Map,
  Building,
  Camera,
  Drill,
  FlaskConical,
  Mountain,
  Waves,
  Search,
  FileText,
} from "lucide-react"
import type {
  MainService,
  GeologicalService,
  AdditionalService,
  SpecializedService,
  ProcessStep,
  ServicesProps,
} from "../lib/types"

export function Services({ className }: ServicesProps) {
  const mainServices: MainService[] = [
    {
      icon: Ruler,
      category: "Topografiya",
      title: "Topografik o'lchashlar",
      description: "Yuqori aniqlikdagi topografik o'lchash va yer sirtini xaritalash",
      features: [
        "Yer sirtining detalli o'lchashi",
        "Topografik rejalar tayyorlash",
        "Tashqi kommunikatsiyalar joylashuvini aniqlash",
        "Inshoot va binolar topografiyasi",
        "GPS/GNSS texnologiyalari yordamida o'lchash",
      ],
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz3JomjMcnH-1JWayp-XGElUmz1GiksVy-XA&s",
    },
    {
      icon: MapPin,
      category: "Geodeziya",
      title: "Geodeziya xizmatlari",
      description: "Professional geodezik o'lchashlar va koordinatalar tizimini yaratish",
      features: [
        "Geodezik tarmoq qurilishi",
        "Koordinatalar aniqlash",
        "Chegara belgilarini o'rnatish",
        "Inshoot geometriyasini nazorat qilish",
        "Deformatsiyani monitoring",
      ],
      image: "https://images.pexels.com/photos/8728382/pexels-photo-8728382.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
      icon: Database,
      category: "Raqamli kadastr",
      title: "Raqamli kadastr xizmatlari",
      description: "Zamonaviy raqamli texnologiyalar asosida kadastr ishlari",
      features: [
        "Yer uchastkalarini kadastriga olish",
        "Mulkchilik huquqlarini rasmiylashtirish",
        "Kadastr xaritalarini tayyorlash",
        "Yer uchastkalarini o'lchash va chegaralash",
        "Raqamli kadastr ma'lumotlar bazasi",
      ],
      image: "https://kadastr.uz/medias/article/1886/1657689977.jpg",
    },
  ]

  const geologicalServices: GeologicalService[] = [
    {
      icon: Drill,
      category: "Geologiya",
      title: "Geologik tadqiqotlar",
      description: "To'liq spektrdagi geologik tadqiqot va qazib olish ishlari",
      features: [
        "Geologik ob'ektlarni o'rganish va baholash",
        "Burg'ulash ishlari va namuna olish",
        "Geologik xaritalar tayyorlash",
        "Foydali qazilmalar qidirish",
        "Geologik hisobotlar tayyorlash",
      ],
      scales: ["500K", "200K", "100K", "50K", "25K", "10K"],
    },
    {
      icon: FlaskConical,
      category: "Laboratoriya",
      title: "Laboratoriya tahlillari",
      description: "Geologik namunalarni professional tahlil qilish",
      features: [
        "Tog' jinslarini mineralogik tahlili",
        "Kimyoviy tarkibni aniqlash",
        "Fizik-mexanik xossalarni o'rganish",
        "Suvning kimyoviy tahlili",
        "Tuproq va cho'kindi jinslarni tahlil",
      ],
      capacity: "1500-15000 namuna/yil",
    },
    {
      icon: Mountain,
      category: "Muhandislik geologiyasi",
      title: "Muhandislik geologiyasi",
      description: "Qurilish va muhandislik loyihalari uchun geologik tadqiqotlar",
      features: [
        "Qurilish maydonchasini geologik o'rganish",
        "Grunt suvlarini tadqiq qilish",
        "Yer ostidagi kommunikatsiyalarni aniqlash",
        "Deformatsiya jarayonlarini monitoring",
        "Ekologik geologik baholash",
      ],
      depths: "10-100 metr chuqurlik",
    },
  ]

  const additionalServices: AdditionalService[] = [
    { icon: Compass, title: "Marksheyderlik", description: "Kon sanoatida o'lchash ishlari" },
    { icon: Map, title: "GIS xizmatlari", description: "Geografik ma'lumotlar tizimi" },
    { icon: Building, title: "Arxitektura", description: "Bino va inshootlar loyihalashi" },
    { icon: Camera, title: "Aerofotosurat", description: "Havodan fotografiya va xaritalash" },
    { icon: Waves, title: "Gidrogeologiya", description: "Yer osti suvlarini tadqiq qilish" },
    { icon: Search, title: "Geofizika", description: "Geofizik tadqiqot usullari" },
    { icon: FileText, title: "Kartografiya", description: "Maxsus xaritalar tayyorlash" },
    { icon: Mountain, title: "Ekologiya", description: "Atrof-muhitni baholash" },
  ]

  const specializedServices: SpecializedService[] = [
    {
      title: "Geologik xaritalash",
      description: "Turli masshtablarda geologik xaritalar tayyorlash",
      scales: ["500K", "200K", "100K", "50K"],
      icon: Map,
    },
    {
      title: "Qazib olish ishlari",
      description: "Professional burg'ulash va namuna olish",
      capacity: "1500-15000 namuna",
      icon: Drill,
    },
    {
      title: "Laboratoriya tahlillari",
      description: "Geologik materiallarni to'liq tahlil qilish",
      services: ["Mineralogik", "Kimyoviy", "Fizik-mexanik"],
      icon: FlaskConical,
    },
  ]

  const processSteps: ProcessStep[] = [
    {
      step: "01",
      title: "Maslahat",
      description: "Loyihangizni muhokama qilamiz va texnik vazifani aniqlaymiz",
    },
    {
      step: "02",
      title: "Rejalashtirish",
      description: "Ishlar rejasini tuzamiz va uskunalarni tayyorlaymiz",
    },
    {
      step: "03",
      title: "Bajarish",
      description: "Professional uskunalar yordamida tadqiqot ishlarini olib boramiz",
    },
    {
      step: "04",
      title: "Taslim",
      description: "Tayyor hujjatlarni taqdim etamiz va tushuntirishlar beramiz",
    },
  ]

  const allServices = [...mainServices, ...geologicalServices]

  return (
    <div className={`py-16 space-y-16 ${className || ""}`}>
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Bizning Xizmatlarimiz</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Professional geodeziya, topografiya, geologiya va raqamli kadastr sohasida to'liq spektrdagi xizmatlar.
            Yuqori sifat va tajribali mutaxassislar kafolati.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
        <div className="space-y-16">
          {allServices.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <Badge variant="secondary" className="mb-4">
                  {service.category}
                </Badge>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">{service.title}</h2>
                <p className="text-lg text-gray-600 mb-6">{service.description}</p>

                {/* Features */}
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature: string, featureIndex: number) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* Additional Info */}
                <div className="space-y-3">
                  {"scales" in service && (service as any).scales && (
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm font-medium text-gray-600">Masshtablar:</span>
                      {"scales" in service && Array.isArray(service.scales) && (
                        <div className="flex flex-wrap gap-2">
                          <span className="text-sm font-medium text-gray-600">Masshtablar:</span>
                          {service.scales.map((scale: string, scaleIndex: number) => (
                            <Badge key={scaleIndex} variant="outline" className="text-xs">
                              {scale}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  {"capacity" in service && service.capacity && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-600">Quvvat:</span>
                      <Badge variant="outline" className="text-xs">
                        {service.capacity as string}
                      </Badge>
                    </div>
                  )}
                  {"depths" in service && service.depths && (
                    <div className="flex items-center space-x-2">
                      <span className="text-sm font-medium text-gray-600">Chuqurlik:</span>
                      <Badge variant="outline" className="text-xs">
                        {service.depths as string}
                      </Badge>
                    </div>
                  )}
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""}>
                <div className="relative">
                  {service.image ? (
                    <img
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="rounded-2xl shadow-lg w-full"
                    />
                  ) : (
                    <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-2xl shadow-lg w-full h-80 flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-green-600" />
                    </div>
                  )}
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-lg shadow-md flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-green-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Additional Services */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Qo'shimcha Xizmatlar</h2>
            <p className="text-lg text-gray-600">Biz bilan birga sizning barcha ehtiyojlaringizni qondiramiz</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialized Services Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Maxsus Geologik Xizmatlar</h2>
          <p className="text-lg text-gray-600">Turli masshtablarda geologik tadqiqotlar va professional tahlillar</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {specializedServices.map((item, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
                <CardDescription>{item.description}</CardDescription>
              </CardHeader>
              <CardContent>
                {item.scales && (
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">Masshtablar:</span>
                    <div className="flex flex-wrap gap-1">
                      {item.scales.map((scale: string, scaleIndex: number) => (
                        <Badge key={scaleIndex} variant="outline" className="text-xs">
                          {scale}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
                {item.capacity && (
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">Quvvat:</span>
                    <Badge variant="outline">{item.capacity}</Badge>
                  </div>
                )}
                {item.services && (
                  <div className="space-y-2">
                    <span className="text-sm font-medium text-gray-600">Xizmatlar:</span>
                    <div className="flex flex-wrap gap-1">
                      {item.services.map((service: string, serviceIndex: number) => (
                        <Badge key={serviceIndex} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Process Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Qanday Ishlaymiz</h2>
          <p className="text-lg text-gray-600">Loyihangizni amalga oshirish jarayoni</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {processSteps.map((item, index) => (
            <div key={index} className="text-center">
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 text-white rounded-full flex items-center justify-center mx-auto text-xl font-bold">
                  {item.step}
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2"></div>
                )}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
