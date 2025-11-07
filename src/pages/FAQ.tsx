import React from 'react';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HelpCircle, MessageCircle, Phone, Mail } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { openCalendlyPopup } from '@/components/CalendlyWidget';
import { Helmet } from 'react-helmet-async';

const FAQ = () => {
  const faqCategories = [
    {
      category: "Pricing & Services",
      faqs: [
        {
          question: "How much does managed IT support cost?",
          answer: "Our managed IT services typically range from $75-150 per user per month, depending on the services included. We offer transparent, fixed-price packages with no hidden fees. Every business receives a customized quote based on their specific needs, current infrastructure, and number of users. Contact us for a free assessment and detailed pricing."
        },
        {
          question: "What's included in your managed services package?",
          answer: "Our comprehensive managed services include: 24/7 network monitoring and alerts, help desk support (phone, email, chat), regular maintenance and updates, patch management, backup and disaster recovery, cybersecurity protection, cloud services management, strategic IT planning, and monthly reporting. We also provide access to our team of specialists for complex projects."
        },
        {
          question: "Are there long-term contracts required?",
          answer: "We offer flexible contract terms. While our standard agreements are month-to-month after an initial 90-day period, we also provide discounted rates for annual commitments. We believe in earning your business through excellent service, not locking you in with restrictive contracts."
        }
      ]
    },
    {
      category: "Support & Response Times",
      faqs: [
        {
          question: "Do you provide 24/7 support?",
          answer: "Yes! Our monitoring systems work 24/7/365 to keep watch over your infrastructure. For managed services clients, we provide emergency support for critical issues around the clock. Our standard business hours for non-emergency support are Monday-Friday 8AM-6PM EST, with emergency support available anytime for issues affecting business operations."
        },
        {
          question: "How quickly can you respond to IT emergencies?",
          answer: "For managed services clients, we guarantee a response within 1 hour for critical issues during business hours, and within 4 hours for after-hours emergencies. For issues that severely impact business operations (complete network outage, security breach, etc.), we often respond within 15-30 minutes. Our monitoring systems typically catch and resolve many issues before they impact your team."
        },
        {
          question: "How do I submit a support ticket?",
          answer: "We make it easy to get help: call our support line directly, email support@detachedsolution.us, use our web portal to submit tickets, or access our chat support during business hours. We also provide a mobile app for managed services clients. All requests are automatically tracked and prioritized based on severity."
        }
      ]
    },
    {
      category: "Cloud & Migration",
      faqs: [
        {
          question: "Can you help us move to the cloud?",
          answer: "Absolutely! We specialize in cloud migrations for small businesses. We can help you move to Microsoft 365, Google Workspace, Azure, AWS, or other cloud platforms. Our process includes: comprehensive assessment of your current environment, migration planning with minimal downtime, data migration and verification, security configuration, employee training, and ongoing support. We've successfully migrated hundreds of businesses to the cloud."
        },
        {
          question: "Which cloud platform is best for my business?",
          answer: "The right platform depends on your specific needs. Microsoft 365 is excellent for businesses that rely heavily on Excel, need desktop applications, or have Windows-centric infrastructure. Google Workspace works well for collaboration-focused teams and those wanting simplicity. We'll assess your workflows, existing software, and business requirements to recommend the best fit."
        },
        {
          question: "How long does a cloud migration take?",
          answer: "For most small businesses (5-50 employees), a typical migration takes 2-4 weeks from planning to completion. Larger organizations or complex environments may take 6-12 weeks. We work to minimize disruption by performing migrations in phases and outside of business hours when possible. The exact timeline depends on data volume, number of users, and complexity of your current setup."
        }
      ]
    },
    {
      category: "Security & Compliance",
      faqs: [
        {
          question: "What's included in your cybersecurity services?",
          answer: "Our cybersecurity services include: next-generation endpoint protection (EDR), managed firewall services, email security and spam filtering, multi-factor authentication (MFA) implementation, security awareness training for employees, regular security assessments and vulnerability scans, backup and disaster recovery, dark web monitoring, security incident response, and security policy development. We tailor the security stack to your business's risk profile and budget."
        },
        {
          question: "Can you help with compliance requirements?",
          answer: "Yes, we help businesses meet various compliance requirements including HIPAA for healthcare, PCI-DSS for businesses that process credit cards, SOC 2 for service organizations, GDPR for companies handling EU data, and other industry-specific regulations. We can assess your current compliance status, implement necessary technical controls, provide documentation, and assist with audits."
        },
        {
          question: "How do you protect against ransomware?",
          answer: "We use a multi-layered approach: advanced endpoint protection with behavioral analysis, email filtering to block phishing attempts, regular security awareness training, network segmentation to limit spread, regular patching and updates, immutable backups that can't be encrypted by ransomware, 24/7 monitoring for suspicious activity, and incident response planning. Our clients have successfully avoided or quickly recovered from ransomware attempts using this approach."
        }
      ]
    },
    {
      category: "Working Together",
      faqs: [
        {
          question: "What if we already have an IT person?",
          answer: "We can work alongside your existing IT staff to provide additional expertise and support. Many of our clients use us to supplement their internal resources, especially for specialized areas like cybersecurity, cloud services, strategic planning, or after-hours monitoring. We become an extension of your team, providing enterprise-level capabilities without the cost of hiring multiple full-time specialists."
        },
        {
          question: "Do you work with specific industries?",
          answer: "We work with businesses across many industries including professional services, retail, restaurants and hospitality, healthcare practices, legal firms, non-profits, construction companies, and more. We understand that each industry has unique technology needs, compliance requirements, and business challenges. Our team has experience with industry-specific software, regulations, and best practices."
        },
        {
          question: "Can you work with our existing vendors?",
          answer: "Absolutely. We regularly collaborate with other technology vendors including software providers, telecommunications companies, hardware vendors, and specialized consultants. We believe in building the best solution for your business, whether that means using our preferred partners or working with vendors you already trust. We can serve as your technology coordinator, managing relationships across multiple vendors."
        },
        {
          question: "How do you handle onboarding new clients?",
          answer: "Our onboarding process is thorough but efficient: initial discovery meeting to understand your business and goals, comprehensive IT assessment and network documentation, security audit and risk assessment, creation of customized service plan, deployment of monitoring and management tools, documentation of all systems and passwords, staff training on support processes, and a 30-day check-in to ensure everything is working smoothly. Most clients are fully onboarded within 2-3 weeks."
        }
      ]
    },
    {
      category: "Technical Questions",
      faqs: [
        {
          question: "What types of businesses do you support?",
          answer: "We primarily serve small to medium-sized businesses with 5-100 employees. This includes single-location offices, multi-location organizations, remote-first companies, and hybrid work environments. We're industry-agnostic but have particular expertise in professional services, healthcare, legal, retail, and non-profit sectors."
        },
        {
          question: "Do you support both Mac and PC environments?",
          answer: "Yes! We support mixed environments including Windows PCs, Mac computers, Linux servers, iOS and Android mobile devices, and various network equipment. Our team has expertise across all major platforms and can manage heterogeneous environments seamlessly."
        },
        {
          question: "Can you help with remote work setup?",
          answer: "Definitely. We've helped hundreds of businesses transition to remote and hybrid work. Services include: VPN setup and configuration, cloud application deployment, secure remote access solutions, video conferencing setup (Zoom, Teams, etc.), home network security, endpoint protection for remote devices, collaboration tool implementation, and remote employee onboarding. We ensure your team can work securely and productively from anywhere."
        },
        {
          question: "What happens if our internet goes down?",
          answer: "We help you plan for internet outages with redundant solutions: backup internet connections (cellular failover, secondary ISP), cloud-based phone systems that work on mobile devices, mobile device management for smartphone/tablet access, offline access to critical files, and disaster recovery plans. For managed services clients, we can also help negotiate better SLAs with internet providers and monitor connection quality."
        }
      ]
    }
  ];

  return (
    <>
      <Helmet>
        <title>Frequently Asked Questions | IT Support & Managed Services | Detached Solution</title>
        <meta name="description" content="Get answers to common questions about our IT support services, pricing, security, cloud solutions, and more. Expert answers to help you make informed decisions." />
        <meta name="keywords" content="IT support FAQ, managed services questions, IT pricing, cybersecurity questions, cloud migration FAQ" />
        <link rel="canonical" href="https://detachedsolution.us/faq" />
        <meta property="og:title" content="IT Support FAQ | Detached Solution" />
        <meta property="og:description" content="Common questions about IT support services, pricing, security, and cloud solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://detachedsolution.us/faq" />

        {/* FAQPage Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqCategories.flatMap(category =>
              category.faqs.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            )
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navigation />

        {/* Hero Section */}
        <section className="pt-24 pb-12 bg-gradient-to-br from-slate-900 to-blue-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="h-8 w-8 text-white" />
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Frequently Asked Questions
              </h1>
              <p className="text-xl text-blue-100">
                Common questions from small business owners about IT support and managed services
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto space-y-12">
              {faqCategories.map((category, categoryIndex) => (
                <div key={categoryIndex}>
                  <div className="flex items-center gap-3 mb-6">
                    <Badge className="bg-blue-600 text-white text-sm">{category.category}</Badge>
                    <div className="h-px flex-grow bg-slate-200"></div>
                  </div>

                  <Accordion type="single" collapsible className="space-y-4">
                    {category.faqs.map((faq, faqIndex) => (
                      <AccordionItem
                        key={faqIndex}
                        value={`item-${categoryIndex}-${faqIndex}`}
                        className="border border-slate-200 rounded-lg px-6 hover:border-blue-300 transition-colors"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-slate-600 leading-relaxed pt-2 text-base">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card className="border-2 border-blue-200 bg-blue-50">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MessageCircle className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Still Have Questions?</CardTitle>
                  <CardDescription className="text-base">
                    Can't find the answer you're looking for? Our team is here to help.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-4">
                    <Button
                      variant="default"
                      className="bg-blue-600 hover:bg-blue-700 w-full"
                      onClick={openCalendlyPopup}
                    >
                      <MessageCircle className="h-4 w-4 mr-2" />
                      Schedule Call
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <a href="tel:+13015550123">
                        <Phone className="h-4 w-4 mr-2" />
                        (301) 555-0123
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      className="w-full"
                      asChild
                    >
                      <a href="mailto:info@detachedsolution.us">
                        <Mail className="h-4 w-4 mr-2" />
                        Email Us
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
                Helpful Resources
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">IT Guides</CardTitle>
                    <CardDescription>
                      In-depth guides and best practices for small business IT
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/resources">View Resources</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Blog</CardTitle>
                    <CardDescription>
                      Weekly tips, security alerts, and technology insights
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/blog">Read Blog</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">Services</CardTitle>
                    <CardDescription>
                      Learn about our comprehensive IT support services
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="/services">View Services</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default FAQ;
