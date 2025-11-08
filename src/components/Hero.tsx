import React from "react";
import { Link } from "react-router-dom";
import { ShieldCheck, Clock, Headset, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openCalendlyPopup } from "@/components/CalendlyWidget";

const highlights = [
  "Locally based support team with same-day response",
  "Flat-rate plans that scale with your company",
  "Security-first mindset with proactive monitoring",
];

export default function Hero() {
  return (
    <section className="relative bg-white">
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-slate-50" aria-hidden />
      <div className="container mx-auto px-6 py-24 md:py-28">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="space-y-3">
              <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-sm font-semibold text-blue-700">
                Managed IT for small & mid-sized teams
              </span>
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
                Reliable IT support that feels like an in-house team.
              </h1>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed">
                Detached Solution keeps your technology running smoothly with proactive monitoring, clear communication, and people who know your business by name.
              </p>
            </div>

            <ul className="space-y-3">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3 text-slate-700">
                  <ShieldCheck className="mt-1 h-5 w-5 text-blue-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                onClick={openCalendlyPopup}
              >
                Book a consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-slate-300 text-slate-900 hover:bg-slate-100"
                asChild
              >
                <Link to="/services">Explore services</Link>
              </Button>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative rounded-2xl border border-slate-200 bg-white shadow-lg">
              <div className="grid gap-6 p-8">
                <div>
                  <p className="text-sm font-semibold text-blue-600 uppercase tracking-wide">
                    What you can expect
                  </p>
                  <h2 className="text-2xl font-semibold text-slate-900 mt-2">
                    A steady partner focused on uptime, security, and clarity.
                  </h2>
                </div>

                <div className="grid gap-4">
                  <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                    <Clock className="h-10 w-10 text-blue-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                        Response time
                      </p>
                      <p className="text-lg font-semibold text-slate-900">
                        Under 30 minutes for priority tickets
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 rounded-xl border border-slate-100 bg-slate-50/60 p-4">
                    <Headset className="h-10 w-10 text-blue-600" />
                    <div>
                      <p className="text-sm font-semibold text-slate-700 uppercase tracking-wide">
                        Coverage
                      </p>
                      <p className="text-lg font-semibold text-slate-900">
                        24/7 monitoring with live US-based support
                      </p>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl border border-blue-100 bg-blue-50/70 p-6">
                  <p className="text-sm font-semibold text-blue-700 uppercase tracking-wide">
                    Client snapshot
                  </p>
                  <p className="mt-2 text-lg text-slate-700">
                    “Detached Solution keeps our 45-person firm running. They catch issues before we notice them and explain every change in plain language.”
                  </p>
                  <p className="mt-3 text-sm font-medium text-blue-700">
                    Operations Director, Southern Maryland practice
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}