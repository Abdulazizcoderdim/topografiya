import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const formSchema = z.object({
  name: z.string().min(2, 'Ism kamida 2 ta belgi bo\'lishi kerak'),
  phone: z.string().min(5, 'Telefon raqami to\'g\'ri formatda bo\'lishi kerak'),
  message: z.string().min(5, 'Xabar kamida 10 ta belgi bo\'lishi kerak'),
});

type FormData = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      message: '',
    },
  });

  const onSubmit = async (data: FormData) => {
    try {
    setIsSubmitting(true);
    const url = `https://api.telegram.org/bot${import.meta.env.VITE_PUBLIC_TOKEN}/sendMessage`

    const obj = {
      chat_id: import.meta.env.VITE_PUBLIC_CHAT_ID,
      text: `
Ismi: ${data.name}
Telefon: ${data.phone}
Xabar: ${data.message}
      `
    }

    await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(obj)
    })

    toast.success('Xabaringiz muvaffaqiyatli yuborildi! Tez orada javob beramiz.');

    form.reset();
    } catch (error) {
      console.log(error)
      toast.error("Xatolik chiqdi, qayta urinib ko'ring!")
    }finally{
      setIsSubmitting(false)
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      details: ['+998 99 035 91 92'],
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['fayziyevshohrux91@gmail.com'],
    },
    {
      icon: MapPin,
      title: 'Manzil',
      details: ['Manzil Qarshi shaxar Navo maxallasi', '12/49'],
    },
    {
      icon: Clock,
      title: 'Ish vaqti',
      details: ['Dushanba - Juma: 9:00 - 18:00', 'Shanba: 9:00 - 13:00'],
    },
  ];

  const services = [
    'Topografik o\'lchashlar',
    'Geodeziya xizmatlari',
    'Raqamli kadastr',
    'Marksheyderlik ishlar',
    'GIS xizmatlari',
    'Maslahat xizmatlari',
  ];

  return (
    <div className="py-16 space-y-16">
      {/* Header */}
      <section className="bg-gradient-to-br from-green-50 via-blue-50 to-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Biz Bilan Bog'laning
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Loyihangizni muhokama qilish yoki savollaringizga javob olish uchun bizga murojaat qiling
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader>
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-lg">{info.title}</CardTitle>
              </CardHeader>
              <CardContent>
                {info.details.map((detail, detailIndex) => (
                  <p key={detailIndex} className="text-gray-600 text-sm mb-1">
                    {detail}
                  </p>
                ))}
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Contact Form & Services */}
      <section className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Xabar Yuborish</CardTitle>
                <CardDescription>
                  Quyidagi formani to'ldiring va biz siz bilan tez orada bog'lanamiz
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-start">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Ism va Familiya *</FormLabel>
                            <FormControl>
                              <Input placeholder="Ismingizni kiriting" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Telefon raqami *</FormLabel>
                            <FormControl>
                              <Input placeholder="+998 90 123 45 67" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    <FormField
                      control={form.control}
                      name="message"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Xabar *</FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Loyihangiz haqida yoki savollaringizni yozing..."
                              className="min-h-[120px]"
                              {...field}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <Button
                      type="submit"
                      size="lg"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700"
                    >
                      {isSubmitting ? (
                        'Yuborilmoqda...'
                      ) : (
                        <>
                          Xabar yuborish
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>

          {/* Services List */}
          <div className="space-y-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl">Bizning Xizmatlar</CardTitle>
                <CardDescription>
                  Quyidagi xizmatlarni taklif etamiz
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-blue-50">
              <CardHeader>
                <CardTitle className="text-xl">Tez Javob</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-4">
                  Odatda xabarlaringizga 24 soat ichida javob beramiz. Shoshilinch holatlar uchun
                  to'g'ridan-to'g'ri qo'ng'iroq qiling.
                </p>
                <Button size="sm" variant="outline" asChild>
                  <a href="tel:+998711234567">
                    <Phone className="w-4 h-4 mr-2" />
                    +998 99 035 91 92
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
        <Card className="border-0 shadow-lg overflow-hidden">
          <CardHeader>
            <CardTitle className="text-2xl">Bizning Joylashuvimiz</CardTitle>
            <CardDescription>
              Ofisimizga tashrif buyurishingiz mumkin
            </CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <div className="aspect-video bg-gray-100 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">
                  Google Maps bu yerda joylashtiriladi
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  Toshkent shahri, Yunusobod tumani, Bobur ko'chasi, 12-uy
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}