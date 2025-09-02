import React from "react";

export default function PhotoShowcase() {
  const shots = [
    { src: "/images/helpdesk.jpg", alt: "Help desk support" },
    { src: "/images/project-1.jpg", alt: "IT project implementation" },
    { src: "/images/project-3.jpg", alt: "Network infrastructure" },
  ];

  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
        <h2 className="mb-6 text-2xl font-bold md:text-3xl">Recent work</h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {shots.map((s) => (
            <figure key={s.src} className="overflow-hidden rounded-xl">
              <img
                src={s.src}
                alt={s.alt}
                loading="lazy"
                className="h-56 w-full object-cover transition duration-300 hover:scale-[1.02]"
              />
              <figcaption className="sr-only">{s.alt}</figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}