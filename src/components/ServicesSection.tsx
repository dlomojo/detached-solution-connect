import React from "react";
import ServiceCard from "./ServiceCard";
import { Button } from "@/components/ui/button";
import { openCalendlyPopup } from "./CalendlyWidget";

const items = [
  {
    image: "/images/helpdesk.jpg",
    title: "Managed Helpdesk",
    blurb:
      "Friendly technicians available by phone, email, or remote session to keep your team productive.",
    highlights: ["Onboarding & offboarding", "Device lifecycle care", "Documentation & training"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?w=800&h=600&fit=crop",
    title: "Secure Networks",
    blurb:
      "Wired and wireless networks built for coverage, security, and visibility across every location.",
    highlights: ["Site surveys & design", "Firewall management", "24/7 performance monitoring"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1523475472560-d2df97ec485c?w=800&h=600&fit=crop",
    title: "Cloud & Collaboration",
    blurb:
      "Microsoft 365 and Google Workspace migrations, identity, and governance tailored to your workflows.",
    highlights: ["Tenant migrations", "Security & compliance", "User enablement"],
  },
  {
    image:
      "https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?w=800&h=600&fit=crop",
    title: "Cybersecurity",
    blurb:
      "Layered protection with EDR, MFA, backups, and incident planning so you can sleep at night.",
    highlights: ["Security stack rollout", "Awareness training", "Incident response playbooks"],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="relative overflow-hidden bg-white py-20">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      <div className="container mx-auto max-w-6xl px-6 md:px-8">
        <div className="flex flex-col gap-6 pb-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Services</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">
              Support that meets you where you are today — and where you’re going.
            </h2>
            <p className="mt-3 max-w-xl text-base text-slate-600">
              Pick the mix of managed IT, cybersecurity, and cloud services that fit your team. We build roadmaps that keep pace with business goals, budgets, and compliance needs.
            </p>
          </div>
          <div>
            <Button
              variant="outline"
              className="border-slate-300 text-slate-900 hover:bg-slate-100"
              onClick={openCalendlyPopup}
            >
              Talk through your environment
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item) => (
            <ServiceCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}