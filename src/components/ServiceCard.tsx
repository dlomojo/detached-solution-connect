import React from "react";
import { Link } from 'react-router-dom';

type Props = {
  image: string;
  title: string;
  blurb: string;
};

export default function ServiceCard({ image, title, blurb }: Props) {
  return (
    <div className="group overflow-hidden rounded-2xl border bg-background/60 shadow-sm transition hover:shadow-md">
      <div className="relative aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-300 group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition group-hover:opacity-100" />
      </div>
      <div className="space-y-2 p-5">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{blurb}</p>
        <div className="pt-2">
          <Link to="/services" className="text-sm font-medium text-blue-600 hover:underline">
            Learn more →
          </Link>
        </div>
      </div>
    </div>
  );
}