import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2 } from "lucide-react";

type Props = {
  image: string;
  title: string;
  blurb: string;
  highlights?: string[];
};

export default function ServiceCard({ image, title, blurb, highlights }: Props) {
  return (
    <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      <div className="relative aspect-[16/10] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="space-y-2">
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
          <p className="text-sm text-slate-600">{blurb}</p>
        </div>

        {highlights && highlights.length > 0 && (
          <ul className="space-y-2 text-sm text-slate-600">
            {highlights.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-blue-600" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-auto pt-2">
          <Link
            to="/services"
            className="inline-flex items-center text-sm font-medium text-blue-600 transition hover:text-blue-700"
          >
            Learn more
            <span aria-hidden className="ml-1">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}