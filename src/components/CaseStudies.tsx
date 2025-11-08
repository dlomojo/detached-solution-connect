import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, DollarSign, Users } from 'lucide-react';
import { openCalendlyPopup } from './CalendlyWidget';

interface CaseStudy {
  id: number;
  industry: string;
  company: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    icon: React.ElementType;
  }[];
  image: string;
}

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    industry: "Healthcare",
    company: "Regional Medical Practice (25 employees)",
    challenge: "Struggling with outdated servers, no backup system, and HIPAA compliance concerns. Staff complained about slow systems and frequent downtime.",
    solution: "Migrated to cloud-based EMR system, implemented automated HIPAA-compliant backups, deployed cybersecurity suite, and provided ongoing managed services.",
    results: [
      { metric: "Downtime", value: "-95%", icon: TrendingUp },
      { metric: "IT Costs", value: "-40%", icon: DollarSign },
      { metric: "Staff Satisfaction", value: "+85%", icon: Users }
    ],
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&h=600&fit=crop"
  },
  {
    id: 2,
    industry: "Legal",
    company: "Law Firm with Multiple Offices",
    challenge: "Multiple disconnected offices, no centralized document management, security vulnerabilities, and expensive per-incident IT support bills.",
    solution: "Unified network across offices with VPN, implemented Microsoft 365 with SharePoint, enhanced security with MFA and encryption, switched to managed services.",
    results: [
      { metric: "Document Access", value: "100% Remote", icon: TrendingUp },
      { metric: "IT Spending", value: "-$2,400/mo", icon: DollarSign },
      { metric: "Security Score", value: "+90%", icon: Users }
    ],
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=800&h=600&fit=crop"
  },
  {
    id: 3,
    industry: "Retail",
    company: "Multi-Location Retail Chain",
    challenge: "POS system outages causing lost sales, no inventory visibility across locations, frequent credit card processing issues, cybersecurity vulnerabilities.",
    solution: "Deployed redundant network infrastructure, cloud-based POS and inventory system, PCI-compliant security measures, and 24/7 monitoring.",
    results: [
      { metric: "POS Uptime", value: "99.99%", icon: TrendingUp },
      { metric: "Lost Sales", value: "-$50K/year", icon: DollarSign },
      { metric: "Inventory Accuracy", value: "+75%", icon: Users }
    ],
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop"
  }
];

const CaseStudies = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-green-600 text-white mb-4">Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Real Problems, Real Solutions
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            See how we've helped businesses like yours overcome IT challenges and achieve measurable results
          </p>
        </div>

        <div className="space-y-8 max-w-6xl mx-auto">
          {caseStudies.map((study) => (
            <Card key={study.id} className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src={study.image}
                    alt={study.industry}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white text-slate-900">{study.industry}</Badge>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-2xl mb-2">{study.company}</CardTitle>
                  </CardHeader>

                  <CardContent className="p-0 space-y-6">
                    {/* Challenge */}
                    <div>
                      <h4 className="font-semibold text-red-600 mb-2">The Challenge</h4>
                      <p className="text-slate-600 text-sm">{study.challenge}</p>
                    </div>

                    {/* Solution */}
                    <div>
                      <h4 className="font-semibold text-blue-600 mb-2">Our Solution</h4>
                      <p className="text-slate-600 text-sm">{study.solution}</p>
                    </div>

                    {/* Results */}
                    <div>
                      <h4 className="font-semibold text-green-600 mb-3">The Results</h4>
                      <div className="grid grid-cols-3 gap-4">
                        {study.results.map((result, index) => (
                          <div key={index} className="text-center p-3 bg-slate-50 rounded-lg">
                            <result.icon className="h-5 w-5 mx-auto mb-2 text-green-600" />
                            <div className="text-2xl font-bold text-slate-900 mb-1">
                              {result.value}
                            </div>
                            <div className="text-xs text-slate-600">{result.metric}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <Card className="max-w-2xl mx-auto bg-gradient-to-br from-blue-50 to-slate-50 border-blue-200">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-3">
                Ready to Transform Your IT?
              </h3>
              <p className="text-slate-600 mb-6">
                Schedule a free consultation to discuss your challenges and explore solutions tailored to your business.
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={openCalendlyPopup}
              >
                Get Your Free IT Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
