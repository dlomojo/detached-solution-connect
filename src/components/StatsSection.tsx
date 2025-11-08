import React from 'react';
import { TrendingUp, Users, ShieldCheck, Laptop } from 'lucide-react';

interface Stat {
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    icon: Users,
    value: "62",
    label: "Managed clients",
    description: "Professional services, healthcare, non-profit, and retail teams." 
  },
  {
    icon: TrendingUp,
    value: "97%",
    label: "Same-day ticket closure",
    description: "Measured across all priority support requests in 2025."
  },
  {
    icon: ShieldCheck,
    value: "12",
    label: "Security assessments / quarter",
    description: "Regular reviews keep policies, backups, and MFA current."
  },
  {
    icon: Laptop,
    value: "4.8/5",
    label: "Customer satisfaction",
    description: "Average rating from quarterly customer check-ins."
  }
];

const StatsSection = () => {
  return (
    <section className="bg-slate-50 py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Proof in the numbers</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">
            A partner accountable to real outcomes
          </h2>
          <p className="mt-4 text-base text-slate-600">
            We monitor the metrics that matter: fast response, predictable delivery, and a support experience your staff actually appreciates.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                  <stat.icon className="h-5 w-5 text-blue-600" />
                </div>
                <span className="text-sm font-semibold uppercase tracking-wide text-slate-600">
                  {stat.label}
                </span>
              </div>
              <div className="text-4xl font-semibold text-slate-900">{stat.value}</div>
              <p className="text-sm text-slate-600">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
