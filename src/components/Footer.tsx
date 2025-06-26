
import React from 'react';
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DS</span>
              </div>
              <span className="font-bold text-xl">Detached Solution</span>
            </div>
            <p className="text-slate-300 leading-relaxed">
              Local IT support for small businesses. We keep your technology running smoothly so you can focus on growing your business.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/services" className="text-slate-300 hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/about" className="text-slate-300 hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/resources" className="text-slate-300 hover:text-blue-400 transition-colors">Resources</Link></li>
              <li><Link to="/contact" className="text-slate-300 hover:text-blue-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Services</h3>
            <ul className="space-y-2">
              <li><span className="text-slate-300">Managed IT Services</span></li>
              <li><span className="text-slate-300">Cybersecurity</span></li>
              <li><span className="text-slate-300">Cloud Services</span></li>
              <li><span className="text-slate-300">IT Consulting</span></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">info@detachedsolution.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="h-5 w-5 text-blue-400" />
                <span className="text-slate-300">24/7 Support Available</span>
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700">
              Schedule Consultation
            </Button>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-slate-400 text-sm">
              © 2024 Detached Solution. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-slate-400 hover:text-blue-400 text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
