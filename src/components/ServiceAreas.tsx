
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Phone, Clock } from 'lucide-react';

const ServiceAreas = () => {
  const serviceAreas = [
    {
      area: "Waldorf, MD",
      description: "Our primary service area with fastest response times",
      highlights: ["Same-day onsite visits", "Local relationship focus", "Community involvement"]
    },
    {
      area: "Charles County",
      description: "Complete coverage throughout Charles County",
      highlights: ["La Plata", "Indian Head", "Port Tobacco", "Bryans Road"]
    },
    {
      area: "Prince George's County",
      description: "Extended service area in PG County",
      highlights: ["Clinton", "Fort Washington", "Oxon Hill", "Temple Hills"]
    },
    {
      area: "Southern Maryland",
      description: "Broader DMV area coverage",
      highlights: ["Calvert County", "St. Mary's County", "Anne Arundel County"]
    }
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Service Areas Throughout the DMV
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Proudly serving small businesses throughout Waldorf, Charles County, and the greater DMV area.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {serviceAreas.map((area, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <MapPin className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <CardTitle className="text-xl">{area.area}</CardTitle>
                <CardDescription>{area.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-1 text-sm text-slate-600">
                  {area.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 flex-shrink-0"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-blue-600 text-white p-8 rounded-lg text-center">
          <h3 className="text-2xl font-bold mb-4">Local Response Times</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center justify-center space-x-2">
              <Clock className="h-6 w-6" />
              <div>
                <div className="font-semibold">Waldorf Area</div>
                <div className="text-blue-100">Same day service</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Phone className="h-6 w-6" />
              <div>
                <div className="font-semibold">Emergency Support</div>
                <div className="text-blue-100">1-4 hour response</div>
              </div>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="h-6 w-6" />
              <div>
                <div className="font-semibold">Onsite Visits</div>
                <div className="text-blue-100">Throughout DMV area</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
