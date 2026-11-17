import React from 'react';
import { ArrowRight, PhoneCall } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
      <section className="home-hero relative w-full min-h-[92vh] lg:min-h-screen overflow-hidden flex flex-col items-center justify-center rounded-b-[48px] lg:rounded-b-[72px] shadow-[var(--shadow-hero)] pt-32 pb-32 lg:pt-36 lg:pb-36">
        
        {/* Full-width & Full-height Edge-to-Edge Background Video (Sharp, Vibrant, Unblurred) */}
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover z-0 pointer-events-none"
        />

        {/* Subtle Dark Navy Gradient Overlay (~15-25% opacity, slightly stronger behind text, lighter on right) */}
        <div className="absolute inset-0 bg-gradient-to-r from-palette-navy-900/35 via-palette-navy-900/20 to-palette-primary/10 z-10 pointer-events-none" />
        
        {/* Soft bottom edge transition gradient */}
        <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-palette-navy-900/25 to-transparent z-10 pointer-events-none" />

        {/* Hero Content Container */}
        <div className="home-hero__content relative z-20 max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <div className="home-hero__stack max-w-3xl mx-auto w-full flex flex-col items-center justify-center gap-6 lg:gap-8 text-center">
            
            {/* Main Headline */}
            <h1 className="font-display text-display text-white tracking-tight leading-[1.08] drop-shadow-[var(--shadow-text)]">
              Turning Bold Ideas Into Powerful Digital Solutions.
            </h1>

            {/* Body Copy */}
            <p className="home-hero__copy font-body-lg text-body-lg text-white leading-relaxed font-normal max-w-2xl drop-shadow-[var(--shadow-text-subtle)]">
              At <span className="font-bold text-white">SELWICKS</span>, we believe great technology starts with understanding your vision. We design and develop intelligent digital solutions that help businesses work smarter, grow faster, and stay ahead. From custom software to AI-powered innovation, we bring ideas to life through purposeful engineering.
            </p>

            {/* Action Buttons */}
            <div className="home-hero__actions flex flex-wrap items-center justify-center gap-4 pt-2">
              <a
                className="inline-flex items-center gap-2.5 justify-center px-8 py-4 rounded-full bg-palette-primary text-white font-label-lg text-label-lg font-semibold hover:bg-palette-primary-hover transition-all duration-200 shadow-[var(--shadow-primary)] hover:shadow-[var(--shadow-primary)] hover:-translate-y-0.5 active:translate-y-0"
                href="https://wa.me/923265933029"
                target="_blank"
                rel="noopener noreferrer"
              >
                <PhoneCall className="w-4 h-4" />
                <span>SCHEDULE A CALL</span>
              </a>

              <a
                href="/projects.html"
                className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-palette-navy-800/80 hover:bg-palette-navy-900/90 text-white font-label-lg text-label-lg backdrop-blur-md border border-white/30 transition-all duration-200 shadow-md hover:-translate-y-0.5"
              >
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                <span>See our work</span>
              </a>
            </div>

          </div>
        </div>

      </section>
  );
};
