import React from "react";
import { openCalendlyPopup } from './CalendlyWidget';

export default function CTA() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-16 text-center md:px-8">
      <h2 className="text-2xl font-bold md:text-3xl">Ready to simplify your IT?</h2>
      <p className="mx-auto mt-3 max-w-2xl text-slate-600">
        Tell us about your stack and pain points—we'll propose a right-sized plan and timeline.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <a
          href="mailto:info@detachedsolution.com"
          className="rounded-2xl bg-blue-600 px-5 py-3 text-sm font-medium text-white shadow transition hover:bg-blue-700"
        >
          Email us
        </a>
        <button
          onClick={openCalendlyPopup}
          className="rounded-2xl border border-slate-300 px-5 py-3 text-sm font-medium transition hover:bg-slate-50"
        >
          Book a 15-min call
        </button>
      </div>
    </section>
  );
}