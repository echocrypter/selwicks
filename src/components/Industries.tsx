import React from 'react';
import {
  Building2,
  GraduationCap,
  Factory,
  HeartPulse,
  ShoppingBag,
  Landmark,
  Truck,
  Hotel,
  Hammer,
  Wrench,
  Users2,
  Sprout,
} from 'lucide-react';

interface IndustryItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const industries: IndustryItem[] = [
  {
    icon: <Building2 className="w-6 h-6" />,
    title: 'Real Estate',
    description: 'PropTech automation, tenant portals, MLS integrations, and asset workflows.',
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: 'Education',
    description: 'Modern LMS platforms, adaptive testing engines, and campus portals.',
  },
  {
    icon: <Factory className="w-6 h-6" />,
    title: 'Manufacturing',
    description: 'Shop-floor IoT telemetry, supply chain digital twins, and QA analytics.',
  },
  {
    icon: <HeartPulse className="w-6 h-6" />,
    title: 'Healthcare',
    description: 'HIPAA-compliant telehealth platforms, EHR/EMR bridging, and patient records.',
  },
  {
    icon: <ShoppingBag className="w-6 h-6" />,
    title: 'Retail & E-Commerce',
    description: 'Headless commerce, automated inventory reconciliation, and cart optimization.',
  },
  {
    icon: <Landmark className="w-6 h-6" />,
    title: 'Finance & FinTech',
    description: 'High-frequency ledger architectures, payment gateway pipelines, and risk engines.',
  },
  {
    icon: <Truck className="w-6 h-6" />,
    title: 'Logistics & Transport',
    description: 'Fleet telematics, dispatch routing, multimodal tracking, and warehouse systems.',
  },
  {
    icon: <Hotel className="w-6 h-6" />,
    title: 'Hospitality & Travel',
    description: 'Booking engines, concierge mobility apps, dynamic room rate engines.',
  },
  {
    icon: <Hammer className="w-6 h-6" />,
    title: 'Construction',
    description: 'Jobsite task scheduling, blueprint markup tools, and subcontractor billing.',
  },
  {
    icon: <Wrench className="w-6 h-6" />,
    title: 'Home Services',
    description: 'Field technician dispatch, quoting calculators, and customer automated SMS.',
  },
  {
    icon: <Users2 className="w-6 h-6" />,
    title: 'HR & Business Ops',
    description: 'Global payroll automation, employee self-service hubs, and onboarding workflows.',
  },
  {
    icon: <Sprout className="w-6 h-6" />,
    title: 'Agriculture',
    description: 'Smart crop monitoring, drone field mapping, and yield prediction models.',
  },
];

export const Industries: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-palette-bg" id="industries">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-14">
          <span className="font-label-md text-label-md text-palette-primary font-bold uppercase tracking-wider mb-2 block">
            Specialized Verticals
          </span>
          <h2 className="font-headline-xl text-headline-xl text-slate-900 tracking-tight mb-3">
            Our Industry Expertise
          </h2>
          <p className="font-body-md text-body-md text-slate-600">
            Deep domain knowledge translated into high-impact software across 12 key enterprise verticals.
          </p>
        </div>

        {/* 12 Industry Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full">
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="bg-white rounded-2xl p-6 shadow-sm border border-slate-200/60 hover:shadow-md hover:border-palette-primary/30 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-3 group"
            >
              <div className="w-12 h-12 rounded-xl bg-palette-primary-soft text-palette-primary flex items-center justify-center group-hover:bg-palette-primary group-hover:text-white transition-colors duration-300">
                {ind.icon}
              </div>
              <h3 className="font-headline-sm text-[18px] font-bold text-slate-900 group-hover:text-palette-primary transition-colors">
                {ind.title}
              </h3>
              <p className="font-body-sm text-body-sm text-slate-600 leading-relaxed">
                {ind.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

