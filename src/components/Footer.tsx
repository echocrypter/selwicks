import React from 'react';
import { Mail } from 'lucide-react';
import { normalizePathname } from '../utils/normalizePathname';

export const Footer: React.FC = () => {
  const isHomePage = normalizePathname(window.location.pathname) === '/';
  const sectionHref = (section: string) => `${isHomePage ? '' : '/'}#${section}`;

  return (
    <footer className="w-full bg-palette-navy-900 border-t border-white/10 mt-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-16 lg:pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img
                src="/loggod.png"
                alt="Selwicks logo"
                className="h-11 w-auto rounded-xl object-contain shadow-sm"
              />
              <span className="font-headline-sm text-[22px] font-bold text-slate-900 tracking-tight">
                Selwicks
              </span>
            </div>

            <p className="font-body-sm text-body-sm text-slate-600 max-w-sm leading-relaxed">
              Selwicks designs and builds websites, mobile apps, and AI agents that help businesses work smarter and scale faster.
            </p>
          </div>

          {/* Column 1: Services */}
          <div>
            <h4 className="font-label-lg text-label-lg text-slate-900 font-bold mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-slate-600">
              <li>
                <a href={sectionHref('services')} className="hover:text-slate-900 transition-colors">
                  Website Development
                </a>
              </li>
              <li>
                <a href={sectionHref('services')} className="hover:text-slate-900 transition-colors">
                  Desktop &amp; Web App Development
                </a>
              </li>
              <li>
                <a href={sectionHref('services')} className="hover:text-slate-900 transition-colors">
                  Mobile App Development
                </a>
              </li>
              <li>
                <a href={sectionHref('services')} className="hover:text-slate-900 transition-colors">
                  DevOps Engineering
                </a>
              </li>
              <li>
                <a href={sectionHref('services')} className="hover:text-slate-900 transition-colors">
                  AI &amp; Data Science
                </a>
              </li>
              <li>
                <a href={sectionHref('services')} className="hover:text-slate-900 transition-colors">
                  AI Automation &amp; AI Agents
                </a>
              </li>
              <li>
                <a href={sectionHref('services')} className="hover:text-slate-900 transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href={sectionHref('services')} className="hover:text-slate-900 transition-colors">
                  UGC Ads
                </a>
              </li>
            </ul>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="font-label-lg text-label-lg text-slate-900 font-bold mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-slate-600">
              <li>
                <a href="/about" className="hover:text-slate-900 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="/why-choose-us" className="hover:text-slate-900 transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="/blog" className="hover:text-slate-900 transition-colors">
                  Blogs / Insights
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="hover:text-slate-900 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms-of-service" className="hover:text-slate-900 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="font-label-lg text-label-lg text-slate-900 font-bold mb-4">
              Contact
            </h4>
            <ul className="flex flex-col gap-2.5 font-body-sm text-body-sm text-slate-600">
              <li>
                <a
                  href="mailto:selwicks@outlook.com"
                  className="inline-flex items-center gap-2 hover:text-slate-900 transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  Outlook
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/923265933029"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-slate-900 transition-colors"
                >
                  <img
                    src="https://cdn.simpleicons.org/whatsapp/10b981"
                    alt=""
                    aria-hidden="true"
                    className="w-4 h-4"
                  />
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 py-5 border-t border-slate-200 flex items-center justify-center font-body-sm text-body-sm text-slate-500 text-center">
          <p>© 2026 Selwicks Software Inc. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
