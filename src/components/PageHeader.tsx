import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

export default function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <section className="pt-24 pb-12 bg-slate-100 border-b border-slate-200 text-center">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900">{title}</h1>
        {subtitle && (
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto">{subtitle}</p>
        )}
      </div>
    </section>
  );
}
