import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2 text-start">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-blue-600 rounded-lg flex items-center justify-center">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-lg font-bold">TRK MCHJ</span>
                <p className="text-sm text-gray-300">Topografiya va Raqamli Kadastr</p>
              </div>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Biz professional geodeziya, topografiya va raqamli kadastr xizmatlarini taklif etamiz.
              Yuqori sifat va tajribali mutaxassislar bilan ishlaymiz.
            </p>
          </div>

          {/* Quick Links */}
          <div className='text-start'>
            <h3 className="text-lg font-semibold mb-4">Tez havolalar</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Bosh sahifa
                </Link>
              </li>
              <li>
                <Link to="/xizmatlar" className="text-gray-300 hover:text-white transition-colors">
                  Xizmatlar
                </Link>
              </li>
              <li>
                <Link to="/biz-haqimizda" className="text-gray-300 hover:text-white transition-colors">
                  Biz haqimizda
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className='text-start'>
            <h3 className="text-lg font-semibold mb-4">Aloqa</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-green-500" />
                <span className="text-gray-300">+998 99 035 91 92</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-green-500" />
                <span className="text-gray-300">fayziyevshohrux91@gmail.com</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-green-500" />
                <span className="text-gray-300">Qashqadaryo, Uzbekiston</span>
              </li>
              <li className="flex items-center space-x-2">
                <Clock className="w-4 h-4 text-green-500" />
                <span className="text-gray-300">Dush-Juma: 9:00-18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <a
            href="/litsenziya.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-300 hover:text-white underline block mb-2"
          >
            Ruxsatnoma va litsenziya faylini ko‘rish (PDF)
          </a>
          <p className="text-gray-400">
            © 2025 Topografiya va Raqamli Kadastr TRK MCHJ. Barcha huquqlar himoyalangan.
          </p>
        </div>

      </div>
    </footer>
  );
}