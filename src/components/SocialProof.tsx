

const testimonials = [
  {
    quote:
      "Detached Solution translates tech into plain language. Our attorneys finally feel comfortable opening tickets and we see issues resolved the same day.",
    name: "Office Manager, 35-person law firm",
  },
  {
    quote:
      "They migrated us to Microsoft 365 without downtime and now handle security reviews with our auditors each quarter.",
    name: "Director of Operations, non-profit organization",
  },
  {
    quote:
      "From POS outages to Wi-Fi upgrades, they keep our stores running and share clear reports every month.",
    name: "Regional Manager, multi-location retailer",
  },
];

const logos = [
  "Southern Maryland Dental",
  "Capital Legal Group",
  "Community Outreach Network",
  "Harborview Hospitality"
];

const SocialProof = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">Clients we support</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900 md:text-4xl">People-first partnerships</h2>
          <p className="mt-4 text-base text-slate-600">
            We work with organizations that depend on technology but don’t have time to manage it themselves.
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {testimonials.map((item) => (
            <figure key={item.name} className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-slate-50/70 p-6 text-left shadow-sm">
              <blockquote className="text-sm text-slate-700">“{item.quote}”</blockquote>
              <figcaption className="mt-6 text-sm font-semibold text-slate-900">{item.name}</figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold uppercase tracking-wide text-slate-400">
          {logos.map((logo) => (
            <span key={logo} className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-slate-500">
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;