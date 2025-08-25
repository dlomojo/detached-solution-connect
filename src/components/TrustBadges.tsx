import { Shield, Award, Users, Clock } from 'lucide-react';

const TrustBadges = () => {
  return (
    <section className="py-8 bg-white border-y">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="flex flex-col items-center">
            <Shield className="h-8 w-8 text-blue-600 mb-2" />
            <span className="text-sm font-semibold text-slate-900">Certified Technicians</span>
            <span className="text-xs text-slate-600">CompTIA & Microsoft</span>
          </div>
          <div className="flex flex-col items-center">
            <Clock className="h-8 w-8 text-green-600 mb-2" />
            <span className="text-sm font-semibold text-slate-900">Same-Day Response</span>
            <span className="text-xs text-slate-600">Emergency Support</span>
          </div>
          <div className="flex flex-col items-center">
            <Award className="h-8 w-8 text-purple-600 mb-2" />
            <span className="text-sm font-semibold text-slate-900">5+ Years Experience</span>
            <span className="text-xs text-slate-600">Local Business Focus</span>
          </div>
          <div className="flex flex-col items-center">
            <Users className="h-8 w-8 text-orange-600 mb-2" />
            <span className="text-sm font-semibold text-slate-900">100% Satisfaction</span>
            <span className="text-xs text-slate-600">Money-Back Guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;