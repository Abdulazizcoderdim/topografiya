import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Calendar, FileText, ExternalLink } from "lucide-react"
import type { EmployeesByDepartment, CompanyTeamProps } from "../lib/types"
import { Link } from "react-router-dom"

export function Xodimlar({ className }: CompanyTeamProps) {
  const employees: EmployeesByDepartment = {
    management: [
      {
        id: "1",
        fullName: "Fayziyev Shoxrux Shamsi o'g'li",
        position: "Direktor",
        startDate: "2023-09-09",
        birthDate: "1991-02-19",
        photo: "/xodimlar/fayziyev.png",
        email: "director@topokadastir.uz",
        phone: "+998 99 035 91 92",
        diplomaLink: "/xodimlar/diplom.pdf",
        specialization: ["Geodeziya", "Topografiya", "Raqamli kadastr", "Boshqaruv"],
        experience: "10+ yillik tajribaga ega geodeziya va kartografiya sohasining yetakchi mutaxassisi. 100 dan ortiq ilmiy maqola va 5 ta monografiya muallifi.",
      },
    ],
    specialists: [
      {
        id: "2",
        fullName: "Ashurov Sulaymon Alisher o'g'li",
        position: "Topograf",
        startDate: "2025-01-09",
        photo: "/xodimlar/sulaymon.png",
        email: "topograf@topokadastir.uz",
        phone: "+998 90 638 14 04",
        specialization: ["Topografik o'lchashlar", "Yer sirtini xaritalash", "GPS/GNSS texnologiyalari"],
      },
      {
        id: "3",
        fullName: "Asadov Habibjon Ilyos o'g'li",
        position: "Geodezist",
        startDate: "2024-11-10",
        photo: "/xodimlar/asadov.png",
        email: "geodezist1@topokadastir.uz",
        phone: "+998 91 213 13 74",
        specialization: ["Geodezik o'lchashlar", "Koordinatalar tizimi", "Deformatsiya monitoring"],
      },
      {
        id: "4",
        fullName: "Haydarov Akobir Bekmurod o'g'li",
        position: "Geodezist",
        startDate: "2025-07-13",
        photo: "/xodimlar/akobir.png",
        email: "geodezist2@topokadastir.uz",
        phone: "+998 91 810 99 19 ",
        specialization: ["Geodezik tarmoq qurilishi", "Chegara belgilarini o'rnatish", "Inshoot geometriyasi"],
      },
      {
        id: "5",
        fullName: "Bakirov Asadbek Xosiljon o'g'li",
        position: "Geodezist",
        startDate: "2025-07-13",
        photo: "/xodimlar/asadbek.png",
        email: "geodezist2@topokadastir.uz",
        phone: "+998 93 304 08 31",
        specialization: ["Geodezik tarmoq qurilishi", "Chegara belgilarini o'rnatish", "Inshoot geometriyasi"],
      },
      {
        id: "6",
        fullName: "Jo'rayev Ilhomjon Erkin o'g'li",
        position: "Geodezist",
        startDate: "2025-07-13",
        photo: "/xodimlar/ilhom.png",
        email: "geodezist2@topokadastir.uz",
        phone: "+998 97 070 09 50",
        specialization: ["Geodezik tarmoq qurilishi", "Chegara belgilarini o'rnatish", "Inshoot geometriyasi"],
      },
      {
        id: "7",
        fullName: "Safarov Javohir Bunyod o'g'li",
        position: "Geodezist",
        startDate: "2025-07-13",
        photo: "/xodimlar/jav.png",
        email: "geodezist2@topokadastir.uz",
        phone: "+998 93 482 41 31",
        specialization: ["Geodezik tarmoq qurilishi", "Chegara belgilarini o'rnatish", "Inshoot geometriyasi"],
      },
      // {
      //   id: "8",
      //   fullName: "Savriyev Rustamjon Ravshan o'g'li",
      //   position: "Geodezist",
      //   startDate: "2025-07-13",
      //   photo: "/xodimlar/rus.png",
      //   email: "geodezist2@topokadastir.uz",
      //   phone: "+998 97 308-99-01",
      //   specialization: ["Geodezik tarmoq qurilishi", "Chegara belgilarini o'rnatish", "Inshoot geometriyasi"],
      // },
      // {
      //   id: "9",
      //   fullName: "Yuldoshev Adham Sharof o'g'li",
      //   position: "Geodezist",
      //   startDate: "2025-07-13",
      //   photo: "/xodimlar/ad.png",
      //   email: "geodezist2@topokadastir.uz",
      //   phone: "+998 93 072 44 55",
      //   specialization: ["Geodezik tarmoq qurilishi", "Chegara belgilarini o'rnatish", "Inshoot geometriyasi"],
      // },
    ],
    assistants: [
      {
        id: "10",
        fullName: "Bekmurodov Davron Baxtiyor o'g'li",
        position: "Yordamchi ishchi",
        startDate: "2024-07-25",
        photo: "/placeholder.svg?height=200&width=200",
        email: "assistant@topokadastir.uz",
        phone: "+998 90 567 89 01",
        specialization: ["Dala ishlari", "Uskunalar tayyorlash", "Ma'lumotlar yig'ish"],
      },
    ],
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    return date.toLocaleDateString("uz-UZ", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const calculateExperience = (startDate: string): string => {
    const start = new Date(startDate)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - start.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))
    const years = Math.floor(diffDays / 365)
    const months = Math.floor((diffDays % 365) / 30)

    if (years > 0) {
      return `${years} yil ${months} oy`
    } else {
      return `${months} oy`
    }
  }

  return (
    <div className={`py-16 ${className || ""}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bizning Jamoa</h1>
          <p className="text-xl text-gray-600">"Topografiya va raqamli kadastr" MCHJ ning professional xodimlari</p>
          <div className="mt-4 text-sm text-gray-500">
            Jami xodimlar soni:{" "}
            {employees.management.length + employees.specialists.length + employees.assistants.length} kishi
          </div>
        </div>

        {/* Management */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Rahbariyat</h2>
          {employees.management.map((employee) => (
            <Card key={employee.id} className="mb-6">
              <CardContent className="p-8 text-start ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="aspect-square relative rounded-lg overflow-hidden">
                      <img
                        src={employee.photo || "/placeholder.svg"}
                        alt={employee.fullName}
                        className="object-contain w-full h-full"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <div className="space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{employee.fullName}</h3>
                        <p className="text-lg text-blue-600 font-semibold">{employee.position}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          <Badge variant="secondary">
                            <Calendar className="w-3 h-3 mr-1" />
                            Ishga kirgan: {formatDate(employee.startDate)}
                          </Badge>
                          {employee.birthDate && (
                            <Badge variant="outline">Tug'ilgan: {formatDate(employee.birthDate)}</Badge>
                          )}
                        </div>
                      </div>

                      {employee.experience && <p className="text-gray-700">{employee.experience}</p>}

                      {employee.specialization && (
                        <div>
                          <p className="text-sm font-medium text-gray-600 mb-2">Mutaxassislik:</p>
                          <div className="flex flex-wrap gap-1">
                            {employee.specialization.map((spec, index) => (
                              <Badge key={index} variant="outline" className="text-xs">
                                {spec}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col sm:flex-row gap-2">
                        {employee.email && (
                          <Button variant="outline" size="sm" className="justify-start bg-transparent">
                            <Mail className="h-4 w-4 mr-2" />
                            {employee.email}
                          </Button>
                        )}
                        {employee.phone && (
                          <Button variant="outline" size="sm" className="justify-start bg-transparent">
                            <Phone className="h-4 w-4 mr-2" />
                            {employee.phone}
                          </Button>
                        )}
                        {employee.diplomaLink && (
                          <Button variant="outline" size="sm" className="justify-start bg-transparent">
                            <Link className="text-black flex items-center" to={employee.diplomaLink} target="_blank">
                              <FileText className="h-4 w-4 mr-2" />
                              Diplom
                              <ExternalLink className="h-3 w-3 ml-1" />
                            </Link>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        {/* Specialists */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Mutaxassislar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {employees.specialists.map((employee) => (
              <Card key={employee.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="text-center">
                  <div className="aspect-square relative rounded-lg overflow-hidden mx-auto w-32 h-32 mb-4">
                    <img
                      src={employee.photo || "/placeholder.svg"}
                      alt={employee.fullName}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <CardTitle className="text-lg">{employee.fullName}</CardTitle>
                  <CardDescription className="text-blue-600 font-semibold">{employee.position}</CardDescription>
                  <div className="flex flex-wrap gap-1 justify-center mt-2">
                    <Badge variant="secondary" className="text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(employee.startDate)}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {calculateExperience(employee.startDate)} tajriba
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  {employee.specialization && (
                    <div>
                      <p className="text-xs font-medium text-gray-600 mb-1">Mutaxassislik:</p>
                      <div className="flex flex-wrap gap-1 justify-center">
                        {employee.specialization.map((spec, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="space-y-1">
                    {employee.email && (
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <Mail className="h-4 w-4 mr-2" />
                        {employee.email}
                      </Button>
                    )}
                    {employee.phone && (
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <Phone className="h-4 w-4 mr-2" />
                        {employee.phone}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Assistants */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Yordamchi xodimlar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {employees.assistants.map((employee) => (
              <Card key={employee.id} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-16 h-16 relative rounded-full overflow-hidden">
                      <img
                        src={employee.photo || "/placeholder.svg"}
                        alt={employee.fullName}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{employee.fullName}</CardTitle>
                      <CardDescription className="text-blue-600">{employee.position}</CardDescription>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <Badge variant="secondary" className="text-xs">
                      <Calendar className="w-3 h-3 mr-1" />
                      {formatDate(employee.startDate)}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {calculateExperience(employee.startDate)}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  {employee.specialization && (
                    <div>
                      <p className="text-xs font-medium text-gray-600 mb-1">Vazifalar:</p>
                      <div className="flex flex-wrap gap-1">
                        {employee.specialization.map((spec, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="space-y-1">
                    {employee.email && (
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <Mail className="h-4 w-4 mr-2" />
                        {employee.email}
                      </Button>
                    )}
                    {employee.phone && (
                      <Button variant="outline" size="sm" className="w-full bg-transparent">
                        <Phone className="h-4 w-4 mr-2" />
                        {employee.phone}
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Company Statistics */}
        <section className="bg-gradient-to-br from-green-50 to-blue-50 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Jamoa statistikasi</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">
                {employees.management.length + employees.specialists.length + employees.assistants.length}
              </div>
              <div className="text-sm text-gray-600">Jami xodimlar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">{employees.specialists.length}</div>
              <div className="text-sm text-gray-600">Mutaxassislar</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">{employees.management.length}</div>
              <div className="text-sm text-gray-600">Rahbariyat</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">2024-2025</div>
              <div className="text-sm text-gray-600">Faoliyat yillari</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
