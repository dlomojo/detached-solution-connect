import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Shield, Cloud, Settings, Users, CheckCircle, Phone, Mail, Clock, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ConsultationForm from '@/components/ConsultationForm';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-6 text-blue-700 bg-blue-100">
                <MapPin className="w-4 h-4 mr-2" />
                Professional IT Support
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                Local IT Support That
                <span className="text-blue-600 block">Small Businesses Trust</span>
              </h1>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Detached Solution provides reliable, affordable IT support for small businesses.
                We handle the technology so you can focus on growing your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="border-blue-200 text-blue-700 hover:bg-blue-50 px-8 py-3">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (301) 555-0123
                </Button>
              </div>
              <div className="mt-6 text-sm text-slate-500">
                Proudly serving businesses nationwide
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg shadow-lg">
              <img 
                src="https://images.unsplash.us/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=face"
                alt="Professional business owner working on laptop - IT support"
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-8 text-center">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-600" />
              <span className="text-slate-700">Local Support</span>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="h-5 w-5 text-blue-600" />
              <span className="text-slate-700">24/7 Monitoring</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-purple-600" />
              <span className="text-slate-700">Cybersecurity Experts</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-orange-600" />
              <span className="text-slate-700">50+ Happy Clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Complete IT Solutions for Small Businesses
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              From cybersecurity to cloud services, we provide everything your business needs to stay secure and efficient.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-blue-600">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.us/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop"
                    alt="Managed IT Services - Network and system monitoring"
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
                <Settings className="h-12 w-12 text-blue-600 mb-4" />
                <CardTitle className="text-xl">Managed IT Services</CardTitle>
                <CardDescription>
                  24/7 monitoring and help desk support to keep your systems running smoothly.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-purple-600">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.us/photo-1573164574511-73c773193279?w=400&h=200&fit=crop"
                    alt="Cybersecurity - Protection against digital threats"
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
                <Shield className="h-12 w-12 text-purple-600 mb-4" />
                <CardTitle className="text-xl">Cybersecurity</CardTitle>
                <CardDescription>
                  Comprehensive protection against digital threats and data breaches.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-green-600">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.us/photo-1544197150-b99a580bb7a8?w=400&h=200&fit=crop"
                    alt="Cloud Services - Secure and scalable cloud solutions"
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
                <Cloud className="h-12 w-12 text-green-600 mb-4" />
                <CardTitle className="text-xl">Cloud Services</CardTitle>
                <CardDescription>
                  Secure, scalable cloud solutions for business growth and remote work.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300 border-l-4 border-l-orange-600">
              <CardHeader>
                <div className="mb-4">
                  <img 
                    src="https://images.unsplash.us/photo-1519389950473-47ba0277781c?w=400&h=200&fit=crop"
                    alt="IT Consulting - Strategic technology planning"
                    className="w-full h-32 object-cover rounded"
                  />
                </div>
                <Users className="h-12 w-12 text-orange-600 mb-4" />
                <CardTitle className="text-xl">IT Consulting</CardTitle>
                <CardDescription>
                  Strategic IT planning and virtual CIO services to align technology with your business goals.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Link to="/services">
              <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                View All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
                Why Small Businesses Choose Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Local & Personal</h3>
                    <p className="text-slate-600">We're part of your community. When you call, you'll speak with someone who understands your business challenges.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Affordable & Transparent</h3>
                    <p className="text-slate-600">Fixed monthly pricing with no surprises. Get enterprise-level IT support at small business prices.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Proactive Support</h3>
                    <p className="text-slate-600">We fix problems before they impact your business. Our monitoring catches issues 24/7.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-2">Plain English Communication</h3>
                    <p className="text-slate-600">No confusing tech jargon. We explain everything in terms that make sense for your business.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-slate-100 p-8 rounded-lg">
              <ConsultationForm />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              What Business Owners Say
            </h2>
            <p className="text-xl text-slate-600">
              Don't just take our word for it—hear from business owners we've helped.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.us/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
                    alt="Marcus Johnson - Local restaurant owner"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Before Detached Solution, we were constantly dealing with computer problems at our restaurant. Now everything just works. They've saved us so much time and frustration."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-slate-900">Marcus Johnson</p>
                  <p className="text-sm text-slate-500">Owner, Johnson Family Restaurant</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.us/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
                    alt="David Williams - Auto repair shop manager"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Their cybersecurity training helped us avoid a major phishing attack. The team is always available when we need them, and they speak our language—no tech jargon."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-slate-900">David Williams</p>
                  <p className="text-sm text-slate-500">Manager, Williams Auto Repair</p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-none shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <img 
                    src="https://images.unsplash.us/photo-1494790108755-2616c0763594?w=60&h=60&fit=crop&crop=face"
                    alt="Angela Rodriguez - Insurance agency owner"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                </div>
                <p className="text-slate-600 mb-4 italic">
                  "Moving to the cloud seemed scary, but they made it simple. Our team can now work from anywhere, and our data is more secure than ever."
                </p>
                <div className="border-t pt-4">
                  <p className="font-semibold text-slate-900">Angela Rodriguez</p>
                  <p className="text-sm text-slate-500">Owner, Rodriguez Insurance Agency</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Simplify Your Business IT?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Schedule a free consultation and discover how we can help your business run more efficiently and securely.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3">
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3">
              <Phone className="mr-2 h-5 w-5" />
              Call Now: (301) 555-0123
            </Button>
          </div>
          <div className="mt-6 text-sm text-blue-200">
            Serving businesses nationwide
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;