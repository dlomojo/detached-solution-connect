import { ShieldCheck, Clock, Users, Building2 } from "lucide-react";

const items = [
  {
    icon: ShieldCheck,
    title: "Certified & insured",
    subtitle: "Microsoft, Cisco, CompTIA"
  },
  {
    icon: Clock,
    title: "27 min avg response",
    subtitle: "Priority tickets in 2025"
  },
  {
    icon: Users,
    title: "4.8 ★ client rating",
    subtitle: "Post-support surveys"
  },
  {
    icon: Building2,
    title: "Serving MD & DC",
    subtitle: "Onsite + remote coverage"
  }
];

const TrustBadges = () => {
  return (
    <section className="border-y bg-slate-50 py-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex items-start gap-3 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
            >
              <item.icon className="h-6 w-6 flex-shrink-0 text-blue-600" />
              <div>
                <p className="text-sm font-semibold text-slate-900">{item.title}</p>
                <p className="text-xs text-slate-500">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;