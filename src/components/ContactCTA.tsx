import React, { useEffect, useId, useRef } from 'react';
import { Check, MessageCircle, PhoneCall } from 'lucide-react';
import './ContactCTA.css';

const scheduleCallUrl = 'https://wa.me/923265933029';

export interface ContactCTAProps {
  eyebrow?: string;
  headline?: string;
  subtext?: string;
  primaryButtonLabel?: string;
  secondaryButtonLabel?: string;
}

const trustPoints = ['Free consultation', 'Honest advice', 'NDA on request'];

export const ContactCTA: React.FC<ContactCTAProps> = ({
  eyebrow = "Let's build together",
  headline = 'Ready to work with a team that has your back?',
  subtext = 'Tell us what you’re building. We’ll tell you honestly how we’d do it.',
  primaryButtonLabel = 'Schedule a Call',
  secondaryButtonLabel = 'Chat on WhatsApp',
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const titleId = useId();

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches
      || !('IntersectionObserver' in window)) {
      card.classList.add('is-visible');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        card.classList.add('is-visible');
        observer.disconnect();
      },
      { threshold: 0.12 },
    );
    observer.observe(card);

    return () => observer.disconnect();
  }, []);

  const headlineParts = headline.split(/(has your back)/gi);

  return (
    <section className="contact-cta-section" aria-labelledby={titleId}>
      <div className="contact-cta__card" ref={cardRef}>
        <span className="contact-cta__orb contact-cta__orb--one" aria-hidden="true" />
        <span className="contact-cta__orb contact-cta__orb--two" aria-hidden="true" />
        <div className="contact-cta__pattern" aria-hidden="true" />

        <div className="contact-cta__copy">
          <span className="contact-cta__eyebrow">
            <span className="contact-cta__pulse" aria-hidden="true" />
            {eyebrow}
          </span>
          <h2 id={titleId}>
            {headlineParts.map((part, index) => (
              part.toLowerCase() === 'has your back'
                ? <span className="contact-cta__highlight" key={`highlight-${index}`}>{part}</span>
                : <React.Fragment key={`headline-${index}`}>{part}</React.Fragment>
            ))}
          </h2>
          <p>{subtext}</p>
        </div>

        <div className="contact-cta__actions">
          <div className="contact-cta__buttons">
            <a
              href={scheduleCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta__button contact-cta__button--primary"
            >
              <PhoneCall aria-hidden="true" />
              {primaryButtonLabel}
            </a>
            <a
              href={scheduleCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-cta__button contact-cta__button--secondary"
            >
              <MessageCircle aria-hidden="true" />
              {secondaryButtonLabel}
            </a>
          </div>

          <ul className="contact-cta__trust" aria-label="What to expect">
            {trustPoints.map((point) => (
              <li key={point}>
                <Check aria-hidden="true" />
                {point}
              </li>
            ))}
          </ul>

          <div className="contact-cta__chips" aria-hidden="true">
            <span>Web</span>
            <span>Mobile</span>
            <span>AI</span>
            <span>SaaS</span>
          </div>
        </div>
      </div>
    </section>
  );
};
