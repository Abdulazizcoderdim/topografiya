import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Users, Download, FileText, Calendar } from "lucide-react"

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all")

  const categories = [
    { id: "all", name: "Barcha loyihalar" },
    { id: "topography", name: "Topografiya" },
    { id: "geodesy", name: "Geodeziya" },
    { id: "water-infrastructure", name: "Suv infratuzilmasi" },
  ]

  const projects = [
    {
      id: 1,
      title: "1 SON KOMPLEKS LOYIHA QURILISH VA MONTAJ",
      category: "topography",
      categoryName: "Topografiya",
      description: "Xususiy korxonasiga tegishli bo'lgan noturar yer uchastkasini topografik tasvirini yaratish",
      image: "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Toshkent viloyati",
      date: "2024 yil",
      client: "1 SON KOMPLEKS LOYIHA QURILISH VA MONTAJ MCHJ",
      area: "Noturar yer uchastkasi",
      pdfLink: "/w1.pdf",
      features: ["Topografik tasvir", "Yer uchastkasi o'lchash", "Texnik hujjatlar"],
    },
    {
      id: 2,
      title: "Nuroniylar dam olish maskani",
      category: "topography",
      categoryName: "Topografiya",
      description: "Nuroniylar dam olish maskanini topografik tasvirini yaratish",
      image: "https://images.pexels.com/photos/8728378/pexels-photo-8728378.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Dam olish maskani",
      date: "2024 yil",
      client: "Nuroniylar dam olish maskani",
      area: "Dam olish hududi",
      pdfLink: "/w2.pdf",
      features: ["Topografik o'lchash", "Landshaft tahlili", "Rejalashtirish"],
    },
    {
      id: 3,
      title: "O'zbekiston ko'chasi topografiyasi",
      category: "topography",
      categoryName: "Topografiya",
      description: "O'zbekiston kochasini topografik tasvirini yaratish",
      image: "https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "O'zbekiston ko'chasi",
      date: "2024 yil",
      client: "Shahar hokimligi",
      area: "Ko'cha hududi",
      pdfLink: "/w3.pdf",
      features: ["Ko'cha topografiyasi", "Yo'l rejalashtirish", "Infratuzilma"],
    },
    {
      id: 4,
      title: "Qarshi tumani Ravot ko'chasi",
      category: "topography",
      categoryName: "Topografiya",
      description: "Qarshi tumani Ravot ko'chasini topografik tasvirini yaratish",
      image: "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Qarshi tumani, Ravot ko'chasi",
      date: "2024 yil",
      client: "Qarshi tuman hokimligi",
      area: "Ko'cha va atrofi",
      pdfLink: "/w4.pdf",
      features: ["Topografik xaritalash", "Ko'cha geometriyasi", "Texnik loyiha"],
    },
    {
      id: 5,
      title: "Muborak tuman ichimlik suv tarmog'i",
      category: "water-infrastructure",
      categoryName: "Suv infratuzilmasi",
      description:
        "Qashqadaryo viloyati Muborak tuman xududlaridagi ichimlik suv tarmog'idagi geodezik ishlarni nazorat qilish",
      image: "https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Qashqadaryo viloyati, Muborak tumani",
      date: "2024 yil",
      client: "Muborak tuman hokimligi",
      area: "Tuman hududi",
      pdfLink: "/w5.pdf",
      features: ["GPS o'lchashlar", "Suv tarmog'i", "Geodezik nazorat", "Koordinata tizimi"],
    },
    {
      id: 6,
      title: "Chiroqchi tuman oqava suv liniyasi",
      category: "water-infrastructure",
      categoryName: "Suv infratuzilmasi",
      description: "Qashqadaryo viloyati Chiroqchi tuman xududlaridagi magistral oqava suv liniya loyihasi",
      image: "https://images.pexels.com/photos/955793/pexels-photo-955793.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Qashqadaryo viloyati, Chiroqchi tumani",
      date: "2024 yil",
      client: "Chiroqchi tuman hokimligi",
      area: "Magistral liniya",
      pdfLink: "/w6.pdf",
      features: ["Oqava suv tizimi", "GPS texnologiyasi", "Geodezik tadqiqot"],
    },
    {
      id: 7,
      title: "Jizzax shahri oqava suv liniyasi",
      category: "water-infrastructure",
      categoryName: "Suv infratuzilmasi",
      description: "Jizzax viloyati Jizzax shaxri hududlaridagi magistral oqava suv liniya loyihasi",
      image: "https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Jizzax viloyati, Jizzax shahri",
      date: "2024 yil",
      client: "Jizzax shahar hokimligi",
      area: "Shahar hududi",
      pdfLink: "/w7.pdf",
      features: ["Shahar infratuzilmasi", "Suv tizimi", "Geodezik xizmatlar"],
    },
    {
      id: 8,
      title: "Shaxrisabz tuman suv yig'ish inshoti",
      category: "geodesy",
      categoryName: "Geodeziya",
      description:
        "Qashqadaryo viloyati Shaxrisabz tuman Qiyomshayx MFY hududdagi suv yig'ish inshoati qurilishining geodezik ishlari",
      image: "https://images.pexels.com/photos/8728378/pexels-photo-8728378.jpeg?auto=compress&cs=tinysrgb&w=800",
      location: "Qashqadaryo viloyati, Shaxrisabz tumani",
      date: "2024 yil",
      client: "Shaxrisabz tuman hokimligi",
      area: "Qiyomshayx MFY",
      pdfLink: "/w8.pdf",
      features: ["GNSS texnologiyasi", "Qurilish geodeziyasi", "Texnik nazorat", "Koordinata tizimi"],
    },
  ]

  const filteredProjects =
    activeFilter === "all" ? projects : projects.filter((project) => project.category === activeFilter)

  const handleDownloadPDF = (pdfLink: string, projectTitle: string) => {
    const link = document.createElement("a")
    link.href = pdfLink
    link.download = `${projectTitle}.pdf`
    link.target = "_blank"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <div className="py-16 space-y-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Bizning Portfolio</h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Muvaffaqiyatli yakunlangan loyihalar va mijozlarimiz ishonchi
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">1000+</div>
            <div className="text-gray-600">Tugallangan loyihalar</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Mamnun mijozlar</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-600 mb-2">10</div>
            <div className="text-gray-600">Viloyatlarda</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">2024</div>
            <div className="text-gray-600">Faol yil</div>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeFilter === category.id ? "default" : "outline"}
              onClick={() => setActiveFilter(category.id)}
              className={
                activeFilter === category.id
                  ? "bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                  : "hover:bg-green-50"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden"
            >
              <div className="aspect-video overflow-hidden relative">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Button
                    size="sm"
                    variant="secondary"
                    className="bg-white/90 hover:bg-white shadow-md"
                    onClick={() => window.open(project.pdfLink, "_blank")}
                  // handleDownloadPDF(project.pdfLink, project.title)}
                  >
                    <FileText className="w-4 h-4 mr-1" />
                    PDF
                  </Button>
                </div>
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{project.categoryName}</Badge>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {project.date}
                  </div>
                </div>
                <CardTitle className="text-lg group-hover:text-green-600 transition-colors line-clamp-2">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3 text-sm">{project.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="line-clamp-1">{project.location}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                    <span className="line-clamp-1">{project.client}</span>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-sm font-medium text-gray-900 mb-2">Hudud: {project.area}</div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.features.slice(0, 2).map((feature, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                    {project.features.length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.features.length - 2}
                      </Badge>
                    )}
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full bg-transparent"
                    onClick={() => handleDownloadPDF(project.pdfLink, project.title)}
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Loyiha hujjatini yuklab olish
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {
          filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">Bu kategoriyada loyihalar topilmadi.</p>
            </div>
          )
        }
      </section >

      {/* Project Types Summary */}
      < section className="bg-gray-50 py-16" >
        <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Loyiha Turlari</h2>
            <p className="text-lg text-gray-600">Bizning mutaxassislik sohalarimiz</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Topografik Tadqiqotlar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Yer uchastkalarini topografik tasvirini yaratish va ko'chalar topografiyasini o'lchash
                </p>
                <Badge variant="outline">4 ta loyiha</Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Suv Infratuzilmasi</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  Ichimlik suv tarmog'i va oqava suv liniyalari uchun geodezik xizmatlar
                </p>
                <Badge variant="outline">3 ta loyiha</Badge>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl">Geodezik Xizmatlar</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm mb-4">
                  GNSS texnologiyasi va qurilish geodeziyasi bo'yicha professional xizmatlar
                </p>
                <Badge variant="outline">1 ta loyiha</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section >

      {/* CTA Section */}
      < section className="bg-gradient-to-r from-green-600 to-blue-600 py-16" >
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">Sizning loyihangiz keyingisi bo'lsin</h2>
          <p className="text-xl text-green-100 mb-8">
            Professional xizmatlarimiz bilan loyihangizni muvaffaqiyatli amalga oshiring
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/aloqa">Loyihani boshlash</a>
          </Button>
        </div>
      </section >
    </div >
  )
}
