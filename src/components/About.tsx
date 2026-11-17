import React, { useEffect } from 'react';
import {
  Brain,
  Cloud,
  Clapperboard,
  Globe,
  Layers,
  Megaphone,
  Monitor,
  Smartphone,
} from 'lucide-react';
import { ContactCTA } from './ContactCTA';
import './About.css';

const services = [
  { title: 'Web Development', description: 'fast, modern, conversion-focused websites', icon: Globe },
  { title: 'Web & Desktop Apps', description: 'custom business tools, dashboards, and cross-platform software', icon: Monitor },
  { title: 'Mobile App Development', description: 'polished iOS and Android apps', icon: Smartphone },
  { title: 'SaaS Applications', description: 'scalable products built for subscriptions and growth', icon: Layers },
  { title: 'DevOps Engineering', description: 'reliable deployments, CI/CD, and cloud infrastructure', icon: Cloud },
  { title: 'AI & Data Science', description: 'AI agents, automation, analytics, and machine learning', icon: Brain },
  { title: 'Digital Marketing', description: 'SEO, paid campaigns, and growth strategy', icon: Megaphone },
  { title: 'UGC Ads', description: 'authentic, scroll-stopping creative that sells', icon: Clapperboard },
];

const values = [
  { title: 'Transparency', description: 'clear updates and no surprises' },
  { title: 'Quality', description: 'clean code, thoughtful design, tested delivery' },
  { title: 'Ownership', description: 'we treat your product like our own' },
  { title: 'Results', description: 'we measure success by your growth, not our hours' },
];

export const About: React.FC = () => {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('.about-page [data-reveal]');

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries, currentObserver) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-visible');
          currentObserver.unobserve(entry.target);
        });
      },
      { threshold: 0.12 },
    );

    revealItems.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="about-page">
      <section className="about-hero" data-reveal>
        <div className="about-container">
          <span className="about-eyebrow">About Selwicks</span>
          <h1>We build software that moves businesses forward.</h1>
          <p>
            Selwicks is a full-service software house turning ideas into websites, apps, and intelligent
            automations that work as hard as you do.
          </p>
        </div>
      </section>

      <section className="about-section about-founder" aria-labelledby="about-founder-title">
        <div className="about-container about-founder__layout" data-reveal>
          <div className="about-founder__image-wrap">
            <img
              src="/founder.jpeg"
              alt="Hammad Ahmad, Founder of Selwicks"
              className="about-founder__image"
            />
          </div>
          <div className="about-founder__copy">
            <span className="about-eyebrow">Meet the Founder</span>
            <h2 id="about-founder-title">Hammad Ahmad</h2>
            <p className="about-founder__title">Founder &amp; CEO, Selwicks</p>
            <div className="about-prose">
              <p>
                Before I wrote code for a living, I worked in business development. I spent years as a
                Business Development Executive with several large firms, running national and
                international campaigns and projects. That taught me how businesses win clients, where
                they lose time, and what they need from the technology behind them.
              </p>
              <p>
                Web development started as a side hobby. I enjoyed building things, and the more I built,
                the more I saw how much good software could change a business. That hobby became my
                career, and eventually it became Selwicks.
              </p>
              <p>
                I started this company to bring both sides together: the discipline of a business
                developer and the craft of an engineer. We don’t just build what’s asked. We ask what
                the business actually needs, then build that, on time and with clear communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-story" aria-labelledby="about-story-title">
        <div className="about-container about-story__content" data-reveal>
          <span className="about-eyebrow">Our Story</span>
          <h2 id="about-story-title">Built around what businesses really need.</h2>
          <p>
            Selwicks began as one developer’s passion project and grew into a team of dedicated
            engineers, designers, and marketers. Today we are a software house that takes a product
            from the first idea to launch and keeps supporting it afterward. We work with startups,
            growing businesses, and established companies across the world.
          </p>
        </div>
      </section>

      <section className="about-section about-services" aria-labelledby="about-services-title">
        <div className="about-container">
          <div className="about-section-heading" data-reveal>
            <span className="about-eyebrow">What We Do</span>
            <h2 id="about-services-title">Everything you need to move forward.</h2>
          </div>
          <div className="about-service-grid">
            {services.map(({ title, description, icon: Icon }, index) => (
              <article
                className="about-service-card"
                data-reveal
                key={title}
                style={{ transitionDelay: `${Math.min(index % 4, 3) * 70}ms` }}
              >
                <span className="about-service-card__icon">
                  <Icon aria-hidden="true" />
                </span>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="about-section about-mission" aria-labelledby="about-mission-title">
        <div className="about-container about-mission__layout" data-reveal>
          <div className="about-mission__intro">
            <span className="about-eyebrow">Our Mission</span>
            <h2 id="about-mission-title">Technology should open doors for every business.</h2>
            <p>
              To give businesses of every size access to world-class software and automation,
              delivered with honesty, speed, and care.
            </p>
          </div>
          <div className="about-values">
            <span className="about-eyebrow">Our Values</span>
            <div className="about-values__grid">
              {values.map((value) => (
                <article className="about-value-card" key={value.title}>
                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-why" id="why-work-with-us" aria-labelledby="about-why-title">
        <div className="about-container about-why__content" data-reveal>
          <span className="about-eyebrow">Why Work With Us</span>
          <h2 id="about-why-title">A team that’s with you from idea to growth.</h2>
          <p>
            Dedicated engineers, direct communication with the founder, delivery that stays on
            schedule, and one team for your whole digital journey, from development to marketing.
          </p>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};
