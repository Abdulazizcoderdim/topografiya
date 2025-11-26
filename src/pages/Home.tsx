import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Ruler, Database, Users, Award, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export function Home() {
  const services = [
    {
      icon: Ruler,
      title: 'Topografik o\'lchashlar',
      description: 'Yuqori aniqlikdagi topografik o\'lchash va xaritalash xizmatlari',
    },
    {
      icon: MapPin,
      title: 'Geodeziya xizmatlari',
      description: 'Professional geodezik o\'lchashlar va koordinatalar aniqlash',
    },
    {
      icon: Database,
      title: 'Raqamli kadastr',
      description: 'Zamonaviy raqamli kadastr va mulk huquqlari rasmiylashtirish',
    },
  ];

  const stats = [
    { icon: Users, value: '500+', label: 'Mamnun mijozlar' },
    { icon: Award, value: '10+', label: 'Yillik tajriba' },
    { icon: Shield, value: '100%', label: 'Kafolat' },
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 via-blue-50 to-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
          <div className="flex items-center justify-between max-md:flex-col gap-12">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Professional{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">
                  Geodeziya
                </span>{' '}
                va Topografiya Xizmatlari
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Biz yuqori sifatli topografik o'lchashlar, geodeziya va raqamli kadastr xizmatlarini
                taklif etamiz. Tajribali mutaxassislar va zamonaviy uskunalar bilan ishlaymiz.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                  <Link to="/aloqa">
                    Biz bilan bog'laning
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/xizmatlar">Xizmatlarni ko'rish</Link>
                </Button>
              </div>
            </div>
            <div className="relative w-full flex justify-center">
              <img
                src="/ban.jpg"
                alt="Geodeziya va topografiya ishlarini amalga oshiruvchi mutaxassis"
                className="rounded-2xl h-[450px] shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium">Faol loyihalar: 25+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Bizning Xizmatlarimiz
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional geodeziya, topografiya va kadastr sohasida keng qamrovli xizmatlar
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-green-600 transition-colors">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline" asChild>
              <Link to="/xizmatlar">
                Barcha xizmatlarni ko'rish
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center text-white">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8" />
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-xl text-green-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Loyihangizni muhokama qilishga tayyormisiz?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Bizning tajribali mutaxassislar jamoasi sizning barcha savollaringizga javob berishga tayyor
          </p>
          <Button size="lg" asChild className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
            <Link to="/aloqa">
              Bepul maslahat olish
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}