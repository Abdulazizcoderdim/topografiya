import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin,  Users } from 'lucide-react';

export function Portfolio() {
  const [activeFilter, setActiveFilter] = useState('all');

  const categories = [
    { id: 'all', name: 'Barcha loyihalar' },
    { id: 'topography', name: 'Topografiya' },
    { id: 'geodesy', name: 'Geodeziya' },
    { id: 'cadastre', name: 'Kadastr' },
  ];

  const projects = [
    {
      id: 1,
      title: 'Toshkent shahri turar-joy majmuasi',
      category: 'topography',
      categoryName: 'Topografiya',
      description: 'Yangi turar-joy majmuasi uchun topografik o\'lchash va rejalashtirish ishlari',
      image: 'https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Toshkent, Chilonzor tumani',
      date: '2024 yil mart',
      client: 'Toshkent Qurilish MCHJ',
      area: '15 gektar',
      features: ['Topografik o\'lchash', 'Komunikatsiyalar xaritasi', '3D modellashtirish'],
    },
    {
      id: 2,
      title: 'Samarqand viloyati geodezik tarmoq',
      category: 'geodesy',
      categoryName: 'Geodeziya',
      description: 'Viloyat bo\'ylab geodezik bazaviy punktlar tarmog\'ini yaratish',
      image: 'https://images.pexels.com/photos/8728378/pexels-photo-8728378.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Samarqand viloyati',
      date: '2023 yil dekabr',
      client: 'Davlat kadastr xizmati',
      area: '500 km²',
      features: ['GPS punktlari', 'Koordinatalar tizimi', 'Bazaviy tarmoq'],
    },
    {
      id: 3,
      title: 'Farg\'ona vohasida yer kadastr ishlari',
      category: 'cadastre',
      categoryName: 'Kadastr',
      description: 'Qishloq xo\'jaligi erlarini kadastriga olish va chegaralash',
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Farg\'ona viloyati',
      date: '2024 yil yanvar',
      client: 'Viloyat hokimligi',
      area: '2000 gektar',
      features: ['Yer kadastri', 'Chegaralash', 'Huquqiy hujjatlar'],
    },
    {
      id: 4,
      title: 'Andijon shahrida infrastruktura loyiha',
      category: 'topography',
      categoryName: 'Topografiya',
      description: 'Shahar infratuzilmasini rivojlantirish uchun topografik tadqiqot',
      image: 'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Andijon shahri',
      date: '2023 yil noyabr',
      client: 'Andijon shahar hokimligi',
      area: '50 gektar',
      features: ['Shaharsozlik', 'Yo\'llar loyihalash', 'Inzhener tarmoqlari'],
    },
    {
      id: 5,
      title: 'Buxoro viloyatida sanoat zonasi',
      category: 'geodesy',
      categoryName: 'Geodeziya',
      description: 'Yangi sanoat zonasi uchun geodezik asosiy ishlar',
      image: 'https://images.pexels.com/photos/1486974/pexels-photo-1486974.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Buxoro viloyati',
      date: '2024 yil fevral',
      client: 'Buxoro sanoat zonasi',
      area: '100 gektar',
      features: ['Sanoat geodeziyasi', 'Koordinatalar', 'Inshoot geometriyasi'],
    },
    {
      id: 6,
      title: 'Navoiy shahri raqamli kadastr',
      category: 'cadastre',
      categoryName: 'Kadastr',
      description: 'Shahar hududining to\'liq raqamli kadastriga olish ishları',
      image: 'https://images.pexels.com/photos/955793/pexels-photo-955793.jpeg?auto=compress&cs=tinysrgb&w=800',
      location: 'Navoiy shahri',
      date: '2023 yil oktabr',
      client: 'Navoiy shahar hokimligi',
      area: '80 km²',
      features: ['Raqamli kadastr', 'GIS tizimi', 'Onlayn xizmatlar'],
    },
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <div className="py-16 space-y-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Bizning Portfolio
          </h1>
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
            <div className="text-4xl font-bold text-green-600 mb-2">50,000+</div>
            <div className="text-gray-600">Gektar o'lchangan</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15</div>
            <div className="text-gray-600">Viloyatlarda</div>
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
              className={activeFilter === category.id ? 
                "bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700" : 
                "hover:bg-green-50"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card key={project.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-md overflow-hidden">
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{project.categoryName}</Badge>
                  <span className="text-sm text-gray-500">{project.date}</span>
                </div>
                <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {project.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {project.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    {project.client}
                  </div>
                </div>

                <div className="border-t pt-4">
                  <div className="text-sm font-medium text-gray-900 mb-2">
                    Hudud: {project.area}
                  </div>
                  <div className="flex flex-wrap gap-1">
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
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">Bu kategoriyada loyihalar topilmadi.</p>
          </div>
        )}
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            Sizning loyihangiz keyingisi bo'lsin
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Professional xizmatlarimiz bilan loyihangizni muvaffaqiyatli amalga oshiring
          </p>
          <Button size="lg" variant="secondary" asChild>
            <a href="/aloqa">
              Loyihani boshlash
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}