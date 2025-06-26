
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Settings, Shield, Cloud, Users, Phone, CheckCircle, ArrowRight } from 'lucide-react';
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
          description: "Advanced antivirus and endpoint detection to protect all devices from malware, ransomware, and threats.",
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
          description: "Reliable cloud and offsite backup solutions with tested disaster recovery procedures to protect your data.",
          features: ["Automated cloud backups", "Local backup solutions", "Disaster recovery testing", "Business continuity planning"]
        }
      ]
    },
    {
      icon: Cloud,
      title: "Cloud Services",
      color: "green",
      services: [
        {
          name: "Microsoft 365 / Google Workspace",
          description: "Complete setup, management, and optimization of cloud productivity suites for seamless collaboration.",
          features: ["Email migration & setup", "User management", "Security configuration", "Training & support"]
        },
        {
          name: "Cloud Storage Solutions",
          description: "Secure, scalable cloud storage with collaboration tools and automatic synchronization across devices.",
          features: ["Secure file sharing", "Automatic sync", "Version control", "Access management"]
        },
        {
          name: "Cloud Migration Consulting",
          description: "Expert guidance for moving from on-premise infrastructure to cloud solutions like AWS and Azure.",
          features: ["Migration planning", "Data transfer", "Application migration", "Cost optimization"]
        }
      ]
    },
    {
      icon: Users,
      title: "Infrastructure & Consulting",
      color: "orange",
      services: [
        {
          name: "Network Design & Implementation",
          description: "Complete network infrastructure setup including routers, switches, Wi-Fi, and structured cabling.",
          features: ["Network design", "Equipment installation", "Wi-Fi optimization", "Cable management"]
        },
        {
          name: "Server & Workstation Management",
          description: "Hardware procurement, setup, and ongoing maintenance for servers and workstations.",
          features: ["Hardware selection", "System configuration", "Performance monitoring", "Lifecycle management"]
        },
        {
          name: "VoIP Phone Systems",
          description: "Modern business phone solutions with installation, configuration, and ongoing support.",
          features: ["System design", "Installation & setup", "User training", "Ongoing support"]
        },
        {
          name: "Virtual CIO Services",
          description: "Strategic IT planning and consulting to align technology decisions with business objectives.",
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
              Complete IT Solutions
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
              Services Designed for
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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          {serviceCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-16">
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-${category.color}-100 mb-4`}>
                  <category.icon className={`h-8 w-8 ${getColorClasses(category.color).split(' ')[1]}`} />
                </div>
                <h2 className="text-3xl font-bold text-slate-900 mb-4">{category.title}</h2>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {category.services.map((service, serviceIndex) => (
                  <Card key={serviceIndex} className={`hover:shadow-lg transition-shadow duration-300 border-l-4 ${getColorClasses(category.color).split(' ')[0]}`}>
                    <CardHeader>
                      <CardTitle className="text-xl">{service.name}</CardTitle>
                      <CardDescription className="text-base">{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                            <span className="text-slate-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Additional Services
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Specialized services to meet your unique business requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {addOnServices.map((service, index) => (
              <div key={index} className="flex items-center space-x-3 bg-white p-4 rounded-lg shadow-sm">
                <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                <span className="text-slate-700">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Approach */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Transparent, Affordable Pricing
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              We believe in honest, predictable pricing that fits small business budgets.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <Card className="border-2 border-blue-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-blue-600">Fixed Monthly Plans</CardTitle>
                  <CardDescription>Predictable costs with no surprises</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-2 border-green-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-green-600">Per-User Pricing</CardTitle>
                  <CardDescription>Scale up or down as your team grows</CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="border-2 border-purple-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-purple-600">Project-Based</CardTitle>
                  <CardDescription>One-time implementations and upgrades</CardDescription>
                </CardHeader>
              </Card>
            </div>

            <div className="bg-blue-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Ready to Get Started?</h3>
              <p className="text-slate-600 mb-6">
                Schedule a free consultation to discuss your needs and get a customized quote.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                    Schedule Free Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Phone className="mr-2 h-5 w-5" />
                  Call (555) 123-4567
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
