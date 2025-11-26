import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Bosh sahifa', href: '/' },
    { name: 'Xizmatlar', href: '/xizmatlar' },
    { name: 'Biz haqimizda', href: '/biz-haqimizda' },
    { name: 'Xodimlar', href: '/staff' },
    { name: 'Portfolio', href: '/portfolio' },
    { name: 'Galerya', href: '/gallery' },
    { name: 'Aloqa', href: '/aloqa' },
  ];

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-3 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 text-start">
            <div className="h-20 w-20">
              <img className='bg-cover bg-center' src='/logo.png'/>
            </div>
            <div className="hidden sm:block">
              <span className="text-lg font-bold text-gray-900">TRK MCHJ</span>
              <p className="text-xs text-gray-600 leading-tight">Topografiya va Kadastr</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={cn(
                  'text-sm font-medium transition-colors hover:text-green-600',
                  location.pathname === item.href
                    ? 'text-green-600 border-b-2 border-green-600 pb-1'
                    : 'text-gray-700'
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <Button
            variant="outline"
            size="sm"
            className="md:hidden bg-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-white absolute left-0 right-0 shadow-lg">
            <div className="px-4 py-2 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    'block px-3 py-2 text-sm font-medium rounded-md transition-colors',
                    location.pathname === item.href
                      ? 'text-green-600 bg-green-50'
                      : 'text-gray-700 hover:text-green-600 hover:bg-gray-50'
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}