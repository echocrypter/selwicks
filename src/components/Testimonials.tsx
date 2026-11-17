import React from 'react';
import { Star, Quote } from 'lucide-react';

interface TestimonialItem {
  name: string;
  role: string;
  initials: string;
  quote: string;
  rating: number;
}

const testimonials: TestimonialItem[] = [
  {
    name: 'Marcus Reynolds',
    role: 'CTO, FinEdge Payments',
    initials: 'MR',
    quote:
      'Selwicks delivered our distributed financial engine 3 weeks ahead of schedule. Their dedicated pod integrated into our team instantly with zero onboarding friction.',
    rating: 5,
  },
  {
    name: 'Elena Lawson',
    role: 'Head of Product, Veloce Health',
    initials: 'EL',
    quote:
      'The UI/UX craftsmanship and microservice architecture engineered by Selwicks drove a 140% surge in our user engagement within the first quarter.',
    rating: 5,
  },
  {
    name: 'David Kim',
    role: 'VP Engineering, CloudScale Ops',
    initials: 'DK',
    quote:
      'Their offshore staffing pods are truly senior tier. Flawless communication, modern CI/CD discipline, and high-velocity code reviews from day one.',
    rating: 5,
  },
];

export const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-palette-bg" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-14">
          <span className="font-label-md text-label-md text-palette-primary font-bold uppercase tracking-wider mb-2 block">
            Proven Client Success
          </span>
          <h2 className="font-headline-xl text-headline-xl text-slate-900 tracking-tight mb-3">
            What Our Partners Say
          </h2>
          <p className="font-body-md text-body-md text-slate-600">
            Trusted by global founders, technical directors, and enterprise scaleups.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl p-8 shadow-sm border border-slate-200/60 flex flex-col justify-between hover:shadow-md hover:border-palette-primary/25 hover:-translate-y-1 transition-all duration-300 relative group"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-palette-warning">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-palette-warning text-palette-warning" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-200 group-hover:text-palette-primary/30 transition-colors" />
                </div>
                <p className="font-body-md text-slate-700 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              <div className="flex items-center gap-3.5 pt-6 mt-6 border-t border-slate-100">
                <div className="w-11 h-11 rounded-full bg-gradient-to-tr from-palette-primary to-palette-primary-hover text-white font-bold flex items-center justify-center text-sm shadow-xs">
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-slate-900 font-bold">
                    {item.name}
                  </h4>
                  <p className="font-body-sm text-body-sm text-slate-500">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

