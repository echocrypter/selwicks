import React from 'react';
import { Mail } from 'lucide-react';

export const OffshoreStaffing: React.FC = () => {
  return (
    <section className="w-full pb-8 lg:pb-10 bg-palette-bg">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-palette-navy-900 via-palette-navy-800 to-palette-primary text-white px-8 py-16 lg:py-20 text-center shadow-[var(--shadow-primary)]">
          {/* Golden Accent Orb */}
          <div className="absolute -top-16 right-16 w-52 h-52 rounded-full bg-palette-primary-soft blur-xl pointer-events-none opacity-70" />
          <div className="absolute -bottom-20 -left-12 w-64 h-64 rounded-full bg-palette-primary-soft/30 blur-2xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center gap-5">
            <span className="font-label-md text-label-md text-palette-warning font-bold uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-full border border-palette-warning/30">
              GET IN TOUCH
            </span>

            <h2 className="font-headline-xl text-headline-xl text-white font-extrabold tracking-tight">
              Let&apos;s Build Something Together
            </h2>

            <p className="font-body-md text-body-md text-white/90 max-w-xl leading-relaxed">
              Reach out to us on WhatsApp or email and we&apos;ll get back to you quickly.
            </p>

            <div className="flex w-full flex-col items-center justify-center gap-4 pt-2 sm:w-auto sm:flex-row">
              <a
                className="inline-flex w-full items-center justify-center gap-2 px-9 py-4 rounded-full bg-white text-palette-primary font-label-lg text-label-lg font-bold hover:bg-slate-100 transition-all duration-200 shadow-lg hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
                href="https://wa.me/923265933029"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn.simpleicons.org/whatsapp/10b981"
                  alt=""
                  aria-hidden="true"
                  className="w-5 h-5"
                />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                className="inline-flex w-full items-center justify-center gap-2 px-9 py-4 rounded-full border border-white/70 bg-transparent text-white font-label-lg text-label-lg font-bold hover:bg-white/10 transition-all duration-200 shadow-lg hover:-translate-y-0.5 active:translate-y-0 sm:w-auto"
                href="mailto:selwicks@outlook.com"
              >
                <Mail className="w-5 h-5" aria-hidden="true" />
                <span>selwicks@outlook.com</span>
              </a>
            </div>

            <div className="flex flex-col items-center gap-x-6 gap-y-2 pt-2 text-sm text-white/90 sm:flex-row">
              <span>WhatsApp: +92 326 5933029</span>
              <span>Email: selwicks@outlook.com</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
