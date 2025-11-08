import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { openCalendlyPopup } from '@/components/CalendlyWidget';
import ScrollProgress from '@/components/ScrollProgress';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Blog', href: '/blog' },
    { name: 'FAQ', href: '/faq' },
    { name: 'Contact', href: '/contact' }
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 relative">
      <div className="container mx-auto px-4">
        <div className="flex items-center h-16">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-400 uppercase tracking-wide ${
                  isActive(item.href) 
                    ? 'text-blue-400 border-b-2 border-blue-400 pb-1' 
                    : 'text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <div className="flex flex-1 justify-center md:flex-initial">
            <Link to="/" className="flex items-center">
              <img 
                src="/images/DS banner.png" 
                alt="Detached Solution" 
                className="h-10 w-auto"
              />
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center space-x-4 flex-1 justify-end">
            <Button variant="ghost" size="sm" className="text-white hover:text-blue-400">
              <Phone className="h-4 w-4 mr-2" />
              (301) 555-0123
            </Button>
            <Button size="sm" className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-semibold" onClick={openCalendlyPopup}>
              Free Consultation
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden ml-auto">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
              <div className="flex flex-col space-y-6 mt-8">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                      isActive(item.href) 
                        ? 'text-blue-600' 
                        : 'text-slate-700'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-6 border-t border-slate-200 space-y-4">
                  <Button variant="ghost" className="w-full justify-start text-slate-700">
                    <Phone className="h-4 w-4 mr-2" />
                    (301) 555-0123
                  </Button>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={openCalendlyPopup}>
                    Free Consultation
                  </Button>
                </div>
              </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
      <ScrollProgress />
    </nav>
  );
};

export default Navigation;