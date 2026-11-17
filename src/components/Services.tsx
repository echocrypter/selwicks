import React from 'react';
import {
  ArrowUpRight,
  Bot,
  Brain,
  Clapperboard,
  Cloud,
  Cpu,
  Globe,
  Megaphone,
  Monitor,
  Smartphone,
} from 'lucide-react';

interface ServiceItem {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
}

const services: ServiceItem[] = [
  {
    id: 'web',
    icon: <Globe className="w-8 h-8" />,
    title: 'Website Development',
    description:
      'Our expert team specializes in crafting responsive, high-performance websites and digital storefronts combining creativity with technical excellence.',
  },
  {
    id: 'desktop-web',
    icon: <Monitor className="w-8 h-8" />,
    title: 'Desktop & Web Apps',
    description:
      'Building cross-platform desktop applications and robust, complex web software architectures tailored for demanding enterprise workflows.',
  },
  {
    id: 'mobile',
    icon: <Smartphone className="w-8 h-8" />,
    title: 'Mobile App',
    description:
      'Empower your mobile presence with SELWICKS. Our skilled team excels in crafting dynamic, user-friendly mobile applications ensuring a seamless experience.',
  },
  {
    id: 'saas',
    icon: <Cloud className="w-8 h-8" />,
    title: 'SaaS Apps',
    description:
      'Multi-tenant cloud architectures, scalable subscription platforms, and resilient B2B SaaS engines built to scale smoothly from seed to enterprise.',
  },
  {
    id: 'ai-automation',
    icon: <Cpu className="w-8 h-8" />,
    title: 'AI Automation',
    description:
      'Streamlining repetitive operational workflows and data operations with tailored autonomous workflows, RPA pipelines, and intelligent integrations.',
  },
  {
    id: 'ai-agents',
    icon: <Bot className="w-8 h-8" />,
    title: 'AI Agents',
    description:
      'Autonomous intelligent agents and conversational systems engineered to reason, decide, and execute multi-step logic across complex corporate systems.',
  },
  {
    id: 'ai-data-science',
    icon: <Brain className="w-8 h-8" />,
    title: 'AI Engineering & Data Science',
    description:
      'AI agents, automation, analytics, and machine learning for better decisions.',
  },
  {
    id: 'devops',
    icon: <Cloud className="w-8 h-8" />,
    title: 'DevOps Engineering',
    description:
      'Reliable deployments, CI/CD pipelines, and cloud infrastructure that keep your software secure, stable, and ready to scale.',
  },
  {
    id: 'digital-marketing',
    icon: <Megaphone className="w-8 h-8" />,
    title: 'Digital Marketing',
    description:
      'SEO, paid campaigns, and growth strategy that connect your business with the right customers.',
  },
  {
    id: 'ugc-ads',
    icon: <Clapperboard className="w-8 h-8" />,
    title: 'UGC Ads',
    description:
      'Authentic, scroll-stopping creator content designed to build trust and sell.',
  },
];

export const Services: React.FC = () => {
  return (
    <section className="w-full py-16 lg:py-24 bg-palette-surface" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-14">
          <span className="font-label-md text-label-md text-palette-primary font-bold uppercase tracking-wider mb-2 block">
            End-To-End Engineering
          </span>
          <h2 className="font-headline-xl text-headline-xl text-slate-900 tracking-tight mb-3">
            Software Development Services
          </h2>
          <p className="font-body-md text-body-md text-slate-600">
            Comprehensive digital delivery teams that engineer scalable software architectures for venture-backed and enterprise clients.
          </p>
        </div>

        {/* Service Matrix Grid */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl">
          {services.map((item) => (
            <div
              key={item.id}
              className="service-card group isolate relative rounded-[2rem] p-8 pb-14 flex flex-col justify-between text-slate-900 transition-all duration-300 hover:-translate-y-1 hover:text-white group-has-[:focus-visible]:text-white"
            >
              <div>
                <div
                  className="w-12 h-12 flex items-center justify-center bg-palette-primary-soft text-palette-primary group-hover:bg-palette-primary/10 group-hover:text-white group-has-[:focus-visible]:text-white transition-colors duration-300 mb-6"
                >
                  {item.icon}
                </div>
                <h3
                  className="font-headline-md text-[22px] font-bold mb-3 tracking-tight text-slate-900 group-hover:text-white group-has-[:focus-visible]:text-white transition-colors duration-300"
                >
                  {item.title}
                </h3>
                <p
                  className="font-body-md leading-relaxed text-[15px] text-slate-600 group-hover:text-white group-has-[:focus-visible]:text-white transition-colors duration-300"
                >
                  {item.description}
                </p>
              </div>

              <a
                href="https://wa.me/923265933029"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Explore ${item.title}`}
                className="absolute bottom-[15px] right-[15px] z-10 w-12 h-12 rounded-full bg-palette-navy-900 text-white flex items-center justify-center shadow-md group-hover:scale-105 group-hover:bg-slate-950 transition-all duration-300"
              >
                <ArrowUpRight className="w-5 h-5 stroke-[2.5] rotate-45 transition-transform duration-300 ease-[ease] group-hover:rotate-0 group-has-[:focus-visible]:rotate-0" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

