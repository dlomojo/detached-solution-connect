import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Settings, Shield, Cloud, Users, Phone, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import SwipeableServices from '@/components/SwipeableServices';
import MobileBottomNav from '@/components/MobileBottomNav';
import { openCalendlyPopup } from '@/components/CalendlyWidget';

const Services = () => {
  const serviceCategories = [
    {
      icon: Settings,
      title: "Managed IT Services", 
      color: "blue",
      services: [
        {
          name: "Remote Monitoring & Management",
          description: "Proactive system monitoring with automatic alerts and issue resolution before problems impact your business.",
          features: ["Real-time system monitoring", "Automated patch management", "Performance optimization", "Preventive maintenance"]
        },
        {
          name: "Help Desk & Technical Support",
          description: "Comprehensive technical support via phone, email, and remote access with local onsite visits when needed.",
          features: ["Tier 1-3 technical support", "Remote troubleshooting", "Local onsite visits", "Emergency response"]
        }
      ]
    },
    {
      icon: Shield,
      title: "Cybersecurity Services",
      color: "purple", 
      services: [
        {
          name: "Endpoint Protection & EDR",
          description: "Advanced antivirus and endpoint detection to protect all devices from malware, ransomware, and other threats.",
          features: ["Next-gen antivirus", "Threat detection & response", "Device compliance", "Quarantine management"]
        },
        {
          name: "Firewall & Network Security",
          description: "Managed firewall solutions with intrusion detection and network monitoring for complete perimeter security.",
          features: ["Managed firewall", "Intrusion detection", "Network monitoring", "VPN configuration"]
        },
        {
          name: "Security Awareness Training",
          description: "Regular phishing simulations and cybersecurity training to educate your team on security best practices.",
          features: ["Phishing simulation tests", "Security awareness videos", "Policy development", "Incident response training"]
        },
        {
          name: "Backup & Disaster Recovery",
          description: "Reliable cloud and offsite backup solutions with tested disaster recovery procedures to protect your business data.",
          features: ["Cloud backup", "Automated daily backups", "Rapid recovery testing", "Business continuity planning"]
        }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      color: "green",
      services: [
        {
          name: "Microsoft 365 & Google Workspace",
          description: "Expert implementation, migration, and support for cloud productivity suites to enhance collaboration.",
          features: ["Email setup & migration", "Collaboration tools", "Security hardening", "User training & support"]
        },
        {
          name: "Cloud Migration & Hosting",
          description: "Seamless transition of applications and data to secure cloud environments for greater flexibility and reliability.",
          features: ["Cloud readiness assessment", "Migration planning", "Data transfer", "Ongoing cloud management"]
        },
        {
          name: "Virtual Desktop Infrastructure",
          description: "Secure remote work solutions that allow your team to access their workstations from anywhere.",
          features: ["Remote desktop setup", "Profile management", "Security configuration", "Performance optimization"]
        }
      ]
    },
    {
      icon: Users,
      title: "IT Consulting & Projects",
      color: "orange",
      services: [
        {
          name: "Network Design & Implementation",
          description: "Custom network infrastructure design and deployment for optimal performance and security.",
          features: ["Network assessment", "Wired & wireless design", "Equipment selection", "Installation & configuration"]
        },
        {
          name: "Hardware Lifecycle Management",
          description: "Comprehensive management of your technology assets from procurement to disposal.",
          features: ["Hardware selection", "System configuration", "Performance monitoring", "Lifecycle management"]
        },
        {
          name: "VoIP Phone Systems",
          description: "Modern business phone solutions with installation, configuration, and ongoing support.",
          features: ["System design", "Installation & setup", "User training", "Ongoing support"]
        },
        {
          name: "Virtual CIO Services",
          description: "Strategic IT planning and consulting to align technology decisions with your business objectives.",
          features: ["IT strategy development", "Technology roadmaps", "Budget planning", "Vendor management"]
        }
      ]
    }
  ];

  const addOnServices = [
    "Professional Website Hosting & Management",
    "Domain Registration & DNS Management", 
    "Email System Migrations",
    "CRM/ERP Implementation & Support",
    "Mobile Device Management (MDM)",
    "Compliance Consulting (HIPAA, PCI-DSS)",
    "Technology Audits & Assessments"
  ];

  return (
    <div className="min-h-screen bg-slate-900">
      <Navigation />
      
      <div className="pt-20">
        <Hero />
      </div>

      <TrustBadges />

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-8 md:py-16 ${categoryIndex % 2 === 0 ? 'bg-slate-800/50' : 'bg-slate-700/30'}`}>
          <div className="container mx-auto px-4">
            {/* Desktop View */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-4 mb-8">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-${category.color}-100`}>
                  <category.icon className={`h-6 w-6 text-${category.color}-600`} />
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-white">{category.title}</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className="border-l-4 border-l-blue-500 bg-slate-800/80 backdrop-blur-sm hover:shadow-xl hover:shadow-blue-500/20 transition-all duration-300 hover:scale-[1.02] hover:-translate-y-1 group cursor-pointer">
                    <CardHeader>
                      <CardTitle className="text-2xl md:text-3xl text-white group-hover:text-blue-400 transition-colors duration-300">{service.name}</CardTitle>
                      <CardDescription className="text-lg md:text-xl text-slate-300">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-base md:text-lg text-slate-300">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Mobile Swipeable View */}
            <SwipeableServices 
              services={category.services}
              title={category.title}
              icon={category.icon}
              color={category.color}
            />
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="py-16 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Additional Services
            </h2>
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto">
              We offer a wide range of supplementary services to support your growing business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {addOnServices.map((service, index) => (
              <div key={index} className="group flex items-center space-x-3 bg-slate-700/50 p-4 rounded-lg hover:bg-gradient-to-r hover:from-blue-900/50 hover:to-slate-600/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer border border-slate-600/30">
                <CheckCircle className="h-5 w-5 text-blue-400 flex-shrink-0 group-hover:text-blue-300 transition-colors duration-300" />
                <span className="text-base md:text-lg text-slate-300 group-hover:text-white transition-colors duration-300">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            Ready to Simplify Your IT?
          </h2>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today for a free assessment of your current technology and discover how 
            we can help your business become more efficient and secure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-20 md:mb-0">
            <Button size="lg" variant="secondary" className="group bg-gradient-to-r from-teal-500 to-white text-blue-600 hover:from-teal-400 hover:to-gray-100 px-6 md:px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-xl text-base md:text-lg" onClick={openCalendlyPopup}>
              <span className="hidden sm:inline">Schedule Free Consultation</span>
              <span className="sm:hidden">Book Consultation</span>
              <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="group border-white text-white hover:bg-white hover:text-blue-600 px-6 md:px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-xl text-base md:text-lg">
              <Phone className="mr-2 h-4 w-4 md:h-5 md:w-5 transition-transform group-hover:scale-110" />
              <span className="hidden sm:inline">Call Now: (301) 555-0123</span>
              <span className="sm:hidden">Call Now</span>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <MobileBottomNav />
    </div>
  );
};

export default Services;