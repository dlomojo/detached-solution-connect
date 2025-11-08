import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  image?: string;
  rating: number;
  text: string;
  industry?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Owner",
    company: "Johnson & Associates Law Firm",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
    rating: 5,
    text: "Detached Solution transformed our IT infrastructure. We went from constant frustration with system crashes to smooth operations. Their proactive monitoring catches issues before they affect our staff. Worth every penny.",
    industry: "Legal"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Practice Manager",
    company: "Riverside Medical Group",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
    rating: 5,
    text: "The migration to cloud services was seamless. They handled everything professionally, trained our staff, and ensured HIPAA compliance throughout. Our data has never been more secure, and we can now access patient records from anywhere.",
    industry: "Healthcare"
  },
  {
    id: 3,
    name: "Jennifer Martinez",
    role: "CFO",
    company: "BuildRight Construction",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
    rating: 5,
    text: "Best IT decision we ever made. Fixed monthly pricing lets us budget accurately, and their response time is incredible. When our server went down at 7 PM, they had us back up in 30 minutes. That's the kind of support we needed.",
    industry: "Construction"
  },
  {
    id: 4,
    name: "David Park",
    role: "Executive Director",
    company: "Community Arts Foundation",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
    rating: 5,
    text: "As a non-profit, we need to maximize every dollar. Detached Solution gave us enterprise-level IT capabilities at a price we can afford. They even helped us get grant funding for our technology upgrades. True partners in our mission.",
    industry: "Non-Profit"
  },
  {
    id: 5,
    name: "Lisa Anderson",
    role: "Owner",
    company: "The Gourmet Kitchen",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
    rating: 5,
    text: "Our POS system and online ordering platform need to work 100% of the time. Their monitoring ensures we never lose orders or sales. They also saved us thousands by negotiating better rates with our software vendors.",
    industry: "Restaurant"
  },
  {
    id: 6,
    name: "Robert Williams",
    role: "Managing Partner",
    company: "Summit Financial Advisors",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
    rating: 5,
    text: "Security and compliance are critical in our industry. They implemented multi-factor authentication, encrypted backups, and regular security audits. Our clients trust us with their financial future, and we trust Detached Solution with our technology.",
    industry: "Finance"
  }
];

const TestimonialsCarousel = () => {
  return (
    <section className="py-16 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="bg-yellow-500 text-slate-900 mb-4">Client Success Stories</Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Real feedback from businesses we've helped transform through reliable IT support
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-2 md:-ml-4">
              {testimonials.map((testimonial) => (
                <CarouselItem key={testimonial.id} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6 flex flex-col h-full">
                      {/* Quote Icon */}
                      <Quote className="h-8 w-8 text-blue-200 mb-4" />

                      {/* Rating */}
                      <div className="flex gap-1 mb-4">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Testimonial Text */}
                      <p className="text-slate-700 leading-relaxed mb-6 flex-grow">
                        "{testimonial.text}"
                      </p>

                      {/* Author Info */}
                      <div className="flex items-center gap-3 pt-4 border-t">
                        <Avatar className="h-12 w-12">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} />
                          <AvatarFallback>
                            {testimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="flex-grow">
                          <div className="font-semibold text-slate-900">{testimonial.name}</div>
                          <div className="text-sm text-slate-600">
                            {testimonial.role}, {testimonial.company}
                          </div>
                          {testimonial.industry && (
                            <Badge variant="secondary" className="mt-1 text-xs">
                              {testimonial.industry}
                            </Badge>
                          )}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex" />
            <CarouselNext className="hidden md:flex" />
          </Carousel>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 text-center">
          <p className="text-slate-600 mb-4">Trusted by 150+ small businesses across multiple industries</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-500">
            <span className="flex items-center gap-2">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              4.9/5 Average Rating
            </span>
            <span>•</span>
            <span>98% Client Retention Rate</span>
            <span>•</span>
            <span>15-Minute Average Response Time</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;
