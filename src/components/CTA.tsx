import React from "react";
import { Button } from "@/components/ui/button";
import { openCalendlyPopup } from "./CalendlyWidget";

export default function CTA() {
  return (
    <section id="contact" className="bg-blue-600 py-16 text-white">
      <div className="container mx-auto flex flex-col items-center gap-6 px-6 text-center md:flex-row md:justify-between md:text-left">
        <div className="max-w-2xl space-y-3">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-100">Let’s get started</p>
          <h2 className="text-3xl font-semibold md:text-4xl">Ready to lighten the load on your internal team?</h2>
          <p className="text-base text-blue-100">
            Share your current setup, short-term pain points, and where you want to be a year from now. We’ll come prepared with recommendations and clear next steps.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <Button
            size="lg"
            variant="secondary"
            className="bg-white text-blue-700 hover:bg-blue-50"
            onClick={openCalendlyPopup}
          >
            Schedule a 30-min call
          </Button>
          <Button
            size="lg"
            variant="ghost"
            className="text-white hover:bg-blue-500 hover:text-white"
            asChild
          >
            <a href="mailto:info@detachedsolution.com">Email the team</a>
          </Button>
        </div>
      </div>
    </section>
  );
}