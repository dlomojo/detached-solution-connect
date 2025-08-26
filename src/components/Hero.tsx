import React from "react";
import { openCalendlyPopup } from '@/components/CalendlyWidget';

export default function Hero() {
  return (
    <section className="relative min-h-[70vh] w-full overflow-hidden">
      <img
        src="https://images.unsplash.us/photo-1581091226825-a6a2a5aee158?w=1200&h=800&fit=crop"
        alt="Professional IT support technician"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-background/90" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-start gap-6 px-6 py-24 text-white md:px-8">
        <span className="rounded-full bg-white/10 px-3 py-1 text-xs backdrop-blur">
          Managed IT • Cyber • Cloud • Support
        </span>
        <h1 className="text-4xl font-bold leading-tight md:text-6xl">
          Reliable IT that grows <span className="text-blue-300">with your business</span>
        </h1>
        <p className="max-w-2xl text-base text-white/90 md:text-lg">
          Detached Solution keeps your systems fast, secure, and always-on. Same-day onboarding, real-time monitoring, and clear SLAs.
        </p>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={openCalendlyPopup}
            className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow-lg transition hover:bg-blue-700"
          >
            Book a consult
          </button>
          <a
            href="#services"
            className="rounded-2xl bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur transition hover:bg-white/20"
          >
            Explore services
          </a>
        </div>
      </div>
    </section>
  );
}