import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Cloud, Settings, Users, CheckCircle, Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import ServicesSection from '@/components/ServicesSection';
import PhotoShowcase from '@/components/PhotoShowcase';
import CTA from '@/components/CTA';
import TrustBadges from '@/components/TrustBadges';
import SocialProof from '@/components/SocialProof';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />

      <TrustBadges />
      <ServicesSection />
      <PhotoShowcase />

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-12">
              Why Small Businesses Choose Us
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 text-left">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Local & Personal</h3>
                  <p className="text-slate-600">We're part of your community. When you call, you'll speak with someone who understands your business challenges.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 text-left">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Affordable & Transparent</h3>
                  <p className="text-slate-600">Fixed monthly pricing with no surprises. Get enterprise-level IT support at small business prices.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 text-left">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Proactive Support</h3>
                  <p className="text-slate-600">We fix problems before they impact your business. Our monitoring catches issues around the clock.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 text-left">
                <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Plain English Communication</h3>
                  <p className="text-slate-600">No confusing tech jargon. We explain everything in terms that make sense for your business.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <SocialProof />
      <CTA />

      <Footer />
    </div>
  );
};

export default Index;