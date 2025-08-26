import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Heart, Shield, CheckCircle, Award, Clock, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import { openCalendlyPopup } from '@/components/CalendlyWidget';

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Local Community Focus",
      description: "We're deeply rooted in our community and committed to helping local businesses thrive through reliable technology."
    },
    {
      icon: Shield,
      title: "Trust & Transparency",
      description: "Honest communication, transparent pricing, and ethical business practices are the foundation of everything we do."
    },
    {
      icon: Users,
      title: "Personal Relationships",
      description: "We build lasting partnerships with our clients, taking time to understand their unique needs and challenges."
    },
    {
      icon: Clock,
      title: "Proactive Approach",
      description: "We prevent problems before they happen, keeping your business running smoothly with minimal disruption."
    }
  ];

  const certifications = [
    "Microsoft Certified Partner",
    "CompTIA Security+ Certified",
    "Cisco Certified Network Associate",
    "Google Cloud Partner",
    "AWS Certified Solutions Architect",
    "ITIL Foundation Certified"
  ];

  const stats = [
    { number: "50+", label: "Happy Clients" },
    { number: "99.7%", label: "Uptime Guarantee" },
    { number: "24/7", label: "Support Available" },
    { number: "10+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20">
        <Hero />
        <TrustBadges />
      </div>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Story</h2>
              <div className="prose max-w-none text-slate-600">
                <p>
                  Detached Solution was founded in 2020 by a team of IT professionals who recognized 
                  that small businesses weren't getting the IT support they deserved. Too often, they 
                  were forced to choose between overpriced enterprise solutions or unreliable break-fix services.
                </p>
                <p>
                  Our founders saw an opportunity to provide something different: enterprise-grade IT 
                  services scaled and priced for small businesses, delivered with a personal touch and 
                  a deep understanding of our clients' needs.
                </p>
                <p>
                  We understand that every business is unique, and we take the time to learn about your specific 
                  needs and challenges.
                </p>
                <p>
                  Today, we're proud to serve over 50 small businesses, from family restaurants to professional 
                  services firms, helping them leverage technology to grow and succeed in an increasingly digital world.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-6">Why Small Businesses Choose Us</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">Local & Accessible</div>
                    <div className="text-sm text-slate-600">We're part of your community, not a distant call center</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">No Tech Jargon</div>
                    <div className="text-sm text-slate-600">We explain everything in plain English</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">Predictable Costs</div>
                    <div className="text-sm text-slate-600">Fixed monthly pricing with no hidden fees</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                  <div>
                    <div className="font-semibold text-slate-900">Proactive Support</div>
                    <div className="text-sm text-slate-600">We fix problems before they impact your business</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every service we provide.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="mx-auto mb-4 w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-4">
              <Award className="h-8 w-8 text-yellow-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Certified & Qualified
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Our team maintains industry certifications to ensure we're always using best practices and latest technologies.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <Award className="h-5 w-5 text-yellow-600 flex-shrink-0" />
                <span className="text-slate-700">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Partner With Us?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Let's discuss how we can support your business goals with reliable, affordable IT services.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3" onClick={openCalendlyPopup}>
            Schedule Free Consultation
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;