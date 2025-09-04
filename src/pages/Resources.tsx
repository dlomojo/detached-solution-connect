
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { FileText, Shield, Cloud, Settings, Users, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import PageHeader from '@/components/PageHeader';
import TrustBadges from '@/components/TrustBadges';
import { openCalendlyPopup } from '@/components/CalendlyWidget';

const Resources = () => {
  const guides = [
    {
      icon: Shield,
      title: "Cybersecurity Essentials",
      description: "Protect your business from cyber threats with these fundamental security practices.",
      category: "Security",
      file: "/document/cybersecurity-essentials.pdf"
    },
    {
      icon: Cloud,
      title: "Moving to the Cloud",
      description: "A beginner's guide to understanding cloud services and their benefits for small business.",
      category: "Cloud Computing",
      file: "/document/moving-to-cloud.pdf"
    },
    {
      icon: Settings,
      title: "IT Budget Planning",
      description: "How to plan and budget for technology investments that support business growth.",
      category: "Planning",
      file: "/document/it-budget-planning.pdf"
    },
    {
      icon: Users,
      title: "Remote Work Setup",
      description: "Essential tools and practices for setting up secure and productive remote work.",
      category: "Remote Work",
      file: "/document/remote-work-setup.pdf"
    }
  ];

  const faqs = [
    {
      question: "How much does managed IT support cost?",
      answer: "Our managed IT services typically range from $75-150 per user per month, depending on the services included. We offer transparent, fixed-price packages with no hidden fees. Every business receives a customized quote based on their specific needs and current infrastructure."
    },
    {
      question: "Do you provide 24/7 support?",
      answer: "Yes! While our standard business hours are Monday-Friday 8AM-6PM, we provide 24/7 monitoring for all managed services clients and emergency support for critical issues. Our monitoring systems work around the clock to catch and resolve issues before they impact your business."
    },
    {
      question: "Can you help us move to the cloud?",
      answer: "Absolutely! We specialize in cloud migrations for small businesses. We can help you move to Microsoft 365, Google Workspace, or other cloud platforms. Our process includes planning, data migration, security setup, and training your team on the new systems."
    },
    {
      question: "What if we already have an IT person?",
      answer: "We can work alongside your existing IT staff to provide additional expertise and support. Many of our clients use us to supplement their internal resources, especially for specialized areas like cybersecurity, cloud services, or after-hours monitoring."
    },
    {
      question: "How quickly can you respond to IT emergencies?",
      answer: "For managed services clients, we guarantee a response within 1 hour for critical issues during business hours, and within 4 hours for after-hours emergencies. For urgent issues that affect business operations, we often respond much faster."
    },
    {
      question: "Do you work with specific industries?",
      answer: "We work with businesses across many industries including professional services, retail, restaurants, healthcare practices, legal firms, and more. We understand that each industry has unique technology needs and compliance requirements."
    },
    {
      question: "What's included in your cybersecurity services?",
      answer: "Our cybersecurity services include endpoint protection (antivirus/EDR), managed firewalls, email security, security awareness training, regular security assessments, backup solutions, and incident response planning. We tailor the security stack to your business's risk profile and budget."
    },
    {
      question: "Can you help with compliance requirements?",
      answer: "Yes, we help businesses meet various compliance requirements including HIPAA for healthcare, PCI-DSS for businesses that process credit cards, and other industry-specific regulations. We can assess your current compliance status and implement necessary controls."
    }
  ];

  const tips = [
    {
      title: "Regular Password Updates",
      description: "Change passwords every 90 days and use unique passwords for each account."
    },
    {
      title: "Software Updates",
      description: "Keep all software updated with the latest security patches and features."
    },
    {
      title: "Data Backups",
      description: "Implement automated backups with both local and cloud storage options."
    },
    {
      title: "Employee Training",
      description: "Regular cybersecurity training helps prevent phishing and social engineering attacks."
    },
    {
      title: "Network Security",
      description: "Use business-grade firewalls and secure Wi-Fi configurations."
    },
    {
      title: "Access Control",
      description: "Implement role-based access to limit data exposure and improve security."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <PageHeader title="Resources" subtitle="Helpful guides and FAQs" />
      <TrustBadges />

      {/* Quick IT Tips */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Quick IT Tips for Small Business
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Simple practices that can make a big difference in your technology security and efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tips.map((tip, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <CardTitle className="text-lg">{tip.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{tip.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Helpful Guides */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Helpful IT Guides
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              In-depth guides to help you understand and implement important IT concepts for your business.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guides.map((guide, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300 border-t-4 border-t-blue-600">
                <CardHeader className="text-center">
                  <div className="mx-auto mb-4 w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <guide.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <Badge variant="secondary" className="mb-2 text-xs">{guide.category}</Badge>
                  <CardTitle className="text-lg">{guide.title}</CardTitle>
                  <CardDescription>{guide.description}</CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="w-full"
                    onClick={() => window.open(guide.file, '_blank')}
                  >
                    <FileText className="h-4 w-4 mr-2" />
                    Read Guide
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-slate-600 mb-4">
              Want a personalized IT assessment for your business?
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700" onClick={openCalendlyPopup}>
              Schedule Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Common questions from small business owners about IT support and managed services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border border-slate-200 rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-semibold text-slate-900">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-slate-600 leading-relaxed pt-2">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-16 bg-red-50 border-t-4 border-t-red-500">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <Shield className="h-8 w-8 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Need Immediate Help?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              If you're experiencing a technology emergency that's affecting your business operations, 
              don't wait—contact us immediately.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white">
                Emergency Support: (555) 123-4567
              </Button>
              <Button size="lg" variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                Email: emergency@detachedsolution.us
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Resources;
