import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, Shield, Cloud, Users, Phone, CheckCircle, ArrowRight, MapPin } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Link } from 'react-router-dom';

const Services = () => {
  const serviceCategories = [
    {
      icon: Settings,
      title: "Managed IT Services", 
      color: "blue",
      services: [
        {
          name: "24/7 Remote Monitoring & Management",
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

  const getColorClasses = (color: string) => {
    const colors = {
      blue: "border-l-blue-600 text-blue-600",
      purple: "border-l-purple-600 text-purple-600",
      green: "border-l-green-600 text-green-600",
      orange: "border-l-orange-600 text-orange-600"
    };
    return colors[color as keyof typeof colors] || colors.blue;
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 bg-gradient-to-br from-blue-50 to-slate-100">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-blue-700 bg-blue-100">
              <MapPin className="w-4 h-4 mr-2" />
              Complete IT Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              IT Services Designed for
              <span className="text-blue-600 block">Small Business Success</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              From proactive monitoring to strategic planning, we provide comprehensive IT services 
              that keep your business running smoothly and securely.
            </p>
          </div>
        </div>
      </section>

      {/* Service Categories */}
      {serviceCategories.map((category, categoryIndex) => (
        <section key={categoryIndex} className={`py-16 ${categoryIndex % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}>
          <div className="container mx-auto px-4">
            <div className="flex items-center space-x-4 mb-8">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-${category.color}-100`}>
                <category.icon className={`h-6 w-6 text-${category.color}-600`} />
              </div>
              <h2 className="text-3xl font-bold text-slate-900">{category.title}</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <Card key={serviceIndex} className="border-l-4 hover:shadow-lg transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-xl">{service.name}</CardTitle>
                    <CardDescription className="text-base">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Additional Services */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              We offer a wide range of supplementary services to support your growing business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {addOnServices.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-slate-50 p-4 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                <span className="text-slate-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Simplify Your IT?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Contact us today for a free assessment of your current technology and discover how 
            we can help your business become more efficient and secure.
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
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;