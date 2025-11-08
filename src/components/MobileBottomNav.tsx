import React from 'react';
import { Home, Settings, Users, Phone, FileText } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { openCalendlyPopup } from '@/components/CalendlyWidget';

const MobileBottomNav: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Services', href: '/services', icon: Settings },
    { name: 'About', href: '/about', icon: Users },
    { name: 'Resources', href: '/resources', icon: FileText },
    { name: 'Contact', href: '/contact', icon: Phone }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 px-2 py-2 safe-area-pb">
      <div className="flex justify-around items-center">
        {navItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className={`flex flex-col items-center space-y-1 px-3 py-2 rounded-lg transition-colors ${
              isActive(item.href)
                ? 'text-blue-600 bg-blue-50'
                : 'text-slate-600 hover:text-blue-600'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span className="text-xs font-medium">{item.name}</span>
          </Link>
        ))}
      </div>
      
      {/* Floating CTA Button */}
      <button
        onClick={openCalendlyPopup}
        className="absolute -top-6 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-teal-500 to-blue-600 text-white px-4 py-2 rounded-full shadow-lg text-sm font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
      >
        Book Now
      </button>
    </div>
  );
};

export default MobileBottomNav;