import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [logoError, setLogoError] = useState(false);

  const handleLogoError = () => {
    setLogoError(true);
  };

  const navigation = [
    { name: 'Home', id: 'home' },
    { name: 'How It Works', id: 'how-it-works' },
    { name: 'About Us', id: 'about' },
    { name: 'Contact', id: 'contact' },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              {!logoError ? (
                <img 
                  src="/horizon_logo.svg" 
                  alt="Horizon Property Investors" 
                  className="h-16 w-auto"
                  loading="eager"
                  width="604"
                  height="278"
                  onError={handleLogoError}
                />
              ) : (
                <span className="text-xl font-bold text-navy-700">
                  Horizon Property Investors
                </span>
              )}
            </button>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`text-sm font-medium transition-colors ${
                  currentPage === item.id
                    ? 'text-navy-700 border-b-2 border-gold-500'
                    : 'text-gray-700 hover:text-navy-700'
                }`}
              >
                {item.name}
              </button>
            ))}
            <button
              onClick={() => onNavigate('contact')}
              className="bg-gold-500 text-white px-6 py-2 rounded-full font-medium hover:bg-gold-600 transition-colors shadow-md"
            >
              Get a Cash Offer
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-navy-700"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left px-4 py-2 text-sm font-medium transition-colors ${
                    currentPage === item.id
                      ? 'text-navy-700 bg-gold-50 rounded'
                      : 'text-gray-700 hover:text-navy-700'
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <button
                onClick={() => {
                  onNavigate('contact');
                  setMobileMenuOpen(false);
                }}
                className="bg-gold-500 text-white px-6 py-3 rounded-full font-medium hover:bg-gold-600 transition-colors shadow-md text-center mx-4"
              >
                Get a Cash Offer
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
