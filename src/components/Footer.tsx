import { Mail, Phone } from 'lucide-react';
import { useState } from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [logoError, setLogoError] = useState(false);

  const handleLogoError = () => {
    setLogoError(true);
  };

  return (
    <footer className="bg-navy-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            {!logoError ? (
              <img 
                src="/horizon_property_investors_image.png" 
                alt="Horizon Property Investors" 
                className="h-12 w-auto mb-4 brightness-0 invert opacity-90"
                onError={handleLogoError}
              />
            ) : (
              <h3 className="text-xl font-bold mb-4 text-gold-400">
                Horizon Property Investors
              </h3>
            )}
            <p className="text-gray-300 text-sm">
              Helping homeowners find real solutions with honesty, clarity, and compassion.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold-400">Quick Links</h4>
            <div className="flex flex-col space-y-2">
              <button
                onClick={() => onNavigate('home')}
                className="text-gray-300 hover:text-gold-400 transition-colors text-left text-sm"
              >
                Home
              </button>
              <button
                onClick={() => onNavigate('how-it-works')}
                className="text-gray-300 hover:text-gold-400 transition-colors text-left text-sm"
              >
                How It Works
              </button>
              <button
                onClick={() => onNavigate('about')}
                className="text-gray-300 hover:text-gold-400 transition-colors text-left text-sm"
              >
                About Us
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="text-gray-300 hover:text-gold-400 transition-colors text-left text-sm"
              >
                Contact
              </button>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-gold-400">Contact Us</h4>
            <div className="flex flex-col space-y-3">
              <a
                href="tel:+15551234567"
                className="flex items-center text-gray-300 hover:text-gold-400 transition-colors text-sm"
              >
                <Phone size={16} className="mr-2" />
                (555) 123-4567
              </a>
              <a
                href="mailto:info@horizonpropertyinvestors.com"
                className="flex items-center text-gray-300 hover:text-gold-400 transition-colors text-sm"
              >
                <Mail size={16} className="mr-2" />
                info@horizonpropertyinvestors.com
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-navy-700 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Horizon Property Investors. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
