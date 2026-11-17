import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: 'What services does Selwicks offer?',
    answer:
      'Selwicks provides end-to-end digital solutions, including website development, web applications, desktop software, mobile apps, SaaS platforms, digital marketing, and UGC ad creation. We help businesses turn ideas into scalable digital products.',
  },
  {
    question: 'Can you develop custom software according to our business requirements?',
    answer:
      "Absolutely! We build custom software tailored to your business needs, whether it's an internal management system, CRM, ERP, automation tool, or a complete business application.",
  },
  {
    question: 'Do you develop both web and mobile applications?',
    answer:
      'Yes. We develop responsive web applications and mobile apps designed to deliver smooth user experiences across devices. Our solutions are built around your business goals and target audience.',
  },
  {
    question: 'Can you build SaaS products and subscription-based platforms?',
    answer:
      'Yes! We develop SaaS applications with features such as user authentication, subscription management, payment integrations, dashboards, and scalable architecture.',
  },
  {
    question: 'How long does it take to complete a project?',
    answer:
      'Project timelines depend on the complexity, features, and requirements. Smaller websites may take a few weeks, while advanced applications and SaaS platforms may require several months. We establish a clear timeline before development begins.',
  },
  {
    question: 'Do you provide digital marketing services?',
    answer:
      'Yes. We help businesses grow their online presence through digital marketing strategies, social media marketing, advertising campaigns, and performance-focused marketing solutions.',
  },
  {
    question: 'What are UGC ads, and how can they help my business?',
    answer:
      'UGC (User-Generated Content) ads are authentic, creator-style video advertisements designed to connect with audiences. We create engaging UGC-style ad content that helps brands build trust, increase engagement, and promote their products.',
  },
  {
    question: 'Where is Selwicks located, and do you work with international clients?',
    answer:
      'Selwicks is a software house based in Islamabad, Pakistan. We welcome businesses looking for digital solutions and can discuss projects with clients regardless of their location.',
  },
  {
    question: 'How much does it cost to develop a website or application?',
    answer:
      "Pricing depends on the project's scope, functionality, technology, and complexity. We provide customized quotations after understanding your requirements and discussing the best solution.",
  },
  {
    question: 'How can I get started with Selwicks?',
    answer:
      "Getting started is simple! Contact our team through the Schedule a Call option or our contact form. Share your idea, discuss your requirements, and we'll help you plan the right digital solution.",
  },
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full py-16 lg:py-24 bg-palette-bg" id="faq">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl mb-14">
          <span className="font-label-md text-label-md text-palette-primary font-bold uppercase tracking-wider mb-2 block">
            Clear Answers
          </span>
          <h2 className="font-headline-xl text-headline-xl text-slate-900 tracking-tight mb-3">
            Frequently Asked Questions
          </h2>
          <p className="font-body-md text-body-md text-slate-600">
            Everything you need to know about partnering with Selwicks.
          </p>
        </div>

        {/* Accordion */}
        <div className="w-full flex flex-col gap-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-2xl border border-slate-200/70 p-6 shadow-xs hover:border-palette-primary/30 transition-all duration-200"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left font-headline-sm text-[18px] font-bold text-slate-900 flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span>{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center shrink-0 text-palette-primary transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-palette-primary-soft' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <p className="font-body-md text-slate-600 mt-4 leading-relaxed pt-2 border-t border-slate-100 animate-in fade-in duration-200">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

