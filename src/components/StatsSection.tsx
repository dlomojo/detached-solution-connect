import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp, Users, Clock, Shield } from 'lucide-react';

interface Stat {
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    icon: TrendingUp,
    value: "99.9%",
    label: "Uptime Guarantee",
    description: "Industry-leading reliability for your critical systems"
  },
  {
    icon: Users,
    value: "150+",
    label: "Active Clients",
    description: "Small businesses trusting us with their IT"
  },
  {
    icon: Clock,
    value: "<15min",
    label: "Avg Response Time",
    description: "Fast support when you need it most"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Security Coverage",
    description: "Comprehensive protection against cyber threats"
  }
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Proven Results, Measurable Success
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Numbers that demonstrate our commitment to excellence and client satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {stats.map((stat, index) => (
            <Card key={index} className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="w-14 h-14 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-7 w-7 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-lg font-semibold mb-2">{stat.label}</div>
                <div className="text-sm text-blue-100">{stat.description}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-white/20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold mb-1">24/7</div>
              <div className="text-sm text-blue-100">Monitoring</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">98%</div>
              <div className="text-sm text-blue-100">Client Retention</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">12</div>
              <div className="text-sm text-blue-100">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-1">5,000+</div>
              <div className="text-sm text-blue-100">Tickets Resolved</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
