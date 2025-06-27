import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, Award, Target, Zap, Shield, Heart } from 'lucide-react';

export function About() {
  const stats = [
    { icon: Users, value: '500+', label: 'Mamnun mijozlar' },
    { icon: Award, value: '10+', label: 'Yillik tajriba' },
    { icon: Target, value: '1000+', label: 'Tugallangan loyihalar' },
    { icon: Zap, value: '24/7', label: 'Qo\'llab-quvvatlash' },
  ];

  const values = [
    {
      icon: Shield,
      title: 'Ishonchlilik',
      description: 'Mijozlarimiz bizga ishonishadi, chunki biz har doim va\'dalarimizni bajaramiz.',
    },
    {
      icon: Target,
      title: 'Aniqlik',
      description: 'Yuqori aniqlikdagi o\'lchashlar va professional yondashuv bizning ustuvorimizdir.',
    },
    {
      icon: Zap,
      title: 'Tezkorlik',
      description: 'Loyihalarni belgilangan muddat ichida va sifatli tarzda bajaramiz.',
    },
    {
      icon: Heart,
      title: 'Mijoz mamnuniyati',
      description: 'Mijozlarimizning mamnuniyati bizning asosiy maqsadimizdir.',
    },
  ];

  const team = [
    {
      name: 'Abdulla Karimov',
      position: 'Bosh mutaxassis',
      experience: '15 yil tajriba',
      specialization: 'Geodeziya va topografiya',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Nodira Hasanova',
      position: 'Kadastr mutaxassisi',
      experience: '12 yil tajriba',
      specialization: 'Raqamli kadastr va GIS',
      image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
    {
      name: 'Jamshid Turdiev',
      position: 'Topograf',
      experience: '8 yil tajriba',
      specialization: 'Topografik o\'lchashlar',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400',
    },
  ];

  return (
    <div className="py-16 space-y-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Biz Haqimizda
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Topografiya va Raqamli Kadastr TRK MCHJ — geodeziya, topografiya va kadastr
            sohasida 10 yildan ortiq tajribaga ega professional kompaniya.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Badge variant="secondary" className="mb-4">Bizning tariximiz</Badge>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Professional Xizmat va Ishonchli Hamkorlik
            </h2>
            <div className="space-y-4 text-gray-600">
              <p>
                2014 yilda tashkil etilgan kompaniyamiz geodeziya, topografiya va raqamli kadastr
                sohasida yuqori sifatli xizmatlar ko'rsatib kelmoqda. Biz zamonaviy texnologiyalar
                va professional yondashuvni birlashtirgan holda mijozlarimizga eng yaxshi natijalarni
                taqdim etamiz.
              </p>
              <p>
                Bizning jamoamiz tajribali mutaxassislardan iborat bo'lib, har bir loyihaga
                individual yondashuv va yuqori darajadagi professional mahorat bilan yondashadi.
                Shu vaqt ichida 1000 dan ortiq loyihalarni muvaffaqiyatli yakunladik.
              </p>
              <p>
                Bugungi kunda biz O'zbekistonning turli hududlarida faoliyat olib boramiz va
                davlat tashkilotlari, xususiy korxonalar va jismoniy shaxslar bilan hamkorlik qilamiz.
              </p>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://tift.uz/wp-content/uploads/2024/11/Course-geodesy.jpg"
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
                Geodeziya, topografiya va kadastr sohasida yuqori sifatli, ishonchli va zamonaviy
                xizmatlar ko'rsatish orqali mijozlarimizning ehtiyojlarini to'liq qondirish.
                Professional yondashuv va innovatsion texnologiyalar yordamida O'zbekistonda
                sohaning rivojlanishiga hissa qo'shish.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl text-blue-600">Vazifamiz</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Geodeziya va topografiya sohasida yetakchi kompaniya bo'lib, zamonaviy texnologiyalar
                va professional jamoamiz bilan mijozlarimizga eng yuqori sifatdagi xizmatlar taqdim etish.
                Har bir loyihada aniqlik, tezkorlik va ishonchlilikni ta'minlash.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Bizning Qadriyatlarimiz
            </h2>
            <p className="text-lg text-gray-600">
              Biz quyidagi tamoyillar asosida ishlaymiz
            </p>
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

      {/* Team */}
      {/* <section className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Bizning Jamoamiz
          </h2>
          <p className="text-lg text-gray-600">
            Tajribali va malakali mutaxassislar
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <Card key={index} className="text-center border-0 shadow-lg overflow-hidden">
              <div className="aspect-square overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{member.name}</CardTitle>
                <Badge variant="outline" className="mx-auto">{member.position}</Badge>
              </CardHeader>
              <CardContent className="pb-6">
                <p className="text-sm text-gray-600 mb-2">{member.experience}</p>
                <p className="text-sm text-green-600 font-medium">{member.specialization}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}
    </div>
  );
}