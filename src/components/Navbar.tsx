import { Menu, Phone, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About Us', href: '#about' },
    { name: 'Featured Properties', href: '#portfolio' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <a href="#home" className="flex items-center gap-2">
              <img src="logo.png" alt="Nandi Real Estate" className="h-12 w-auto object-contain fallback-text" onError={(e) => {
                e.currentTarget.style.display = 'none';
                e.currentTarget.nextElementSibling?.classList.remove('hidden');
              }} />
              <div className="hidden flex items-center gap-2">
                <div className="w-10 h-10 bg-blue-900 rounded-lg flex items-center justify-center text-white font-bold text-xl">
                  NR
                </div>
                <div>
                  <h1 className="font-bold text-xl text-gray-900 leading-tight">Nandi</h1>
                  <p className="text-sm text-blue-600 font-semibold leading-tight">Real Estate</p>
                </div>
              </div>
            </a>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-blue-600 font-medium transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:09004450055"
              className="flex items-center gap-2 bg-blue-900 text-white px-5 py-2.5 rounded-full font-medium hover:bg-blue-800 transition-colors"
            >
              <Phone size={18} />
              090044 50055
            </a>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-4 pt-2 pb-6 space-y-1 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
              >
                {link.name}
              </a>
            ))}
            <a
              href="tel:09004450055"
              className="mt-4 flex items-center justify-center gap-2 w-full bg-blue-900 text-white px-5 py-3 rounded-md font-medium hover:bg-blue-800"
            >
              <Phone size={18} />
              Call 090044 50055
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
