import React from "react";
import ServiceCard from "./ServiceCard";
import { openCalendlyPopup } from './CalendlyWidget';

const items = [
  {
    image: "https://images.unsplash.us/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
    title: "Managed Helpdesk",
    blurb: "24/7 remote support, device hardening, patching, and onboarding that doesn't slow teams down."
  },
  {
    image: "https://images.unsplash.us/photo-1544197150-b99a580bb7a8?w=400&h=300&fit=crop",
    title: "Networking",
    blurb: "Wi-Fi that actually works, VLANs, SD-WAN, and proactive monitoring to catch issues early."
  },
  {
    image: "https://images.unsplash.us/photo-1573164574511-73c773193279?w=400&h=300&fit=crop",
    title: "Cloud & Migrations",
    blurb: "M365 / Google Workspace setup, Azure/AWS moves, identity, backup, and cost control."
  },
  {
    image: "https://images.unsplash.us/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop",
    title: "Security Operations",
    blurb: "EDR, email security, MFA, and policy—plus incident response if trouble hits."
  }
];

export default function ServicesSection() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-6 py-16 md:px-8">
      <div className="mb-8 flex items-end justify-between">
        <h2 className="text-2xl font-bold md:text-3xl">What we do</h2>
        <button onClick={openCalendlyPopup} className="text-sm text-blue-600 hover:underline">
          Get a quote
        </button>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((it) => (
          <ServiceCard key={it.title} {...it} />
        ))}
      </div>
    </section>
  );
}