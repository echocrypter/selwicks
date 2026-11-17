import React, { useEffect } from 'react';
import { ArrowRight, Check, PhoneCall } from 'lucide-react';
import { ContactCTA } from './ContactCTA';
import './WhyChooseUs.css';

const scheduleCallUrl = 'https://wa.me/923265933029';

const reasons = [
  {
    title: 'Engineers who think like business owners',
    description:
      'Our founder spent years in business development before writing code for a living. We don’t just ask “what should we build?” We ask “what will make you money, save you time, or win you customers?” Then we build exactly that.',
  },
  {
    title: 'Dedicated engineers, not a rotating cast',
    description:
      'You get a team that learns your product, remembers your decisions, and stays with you from kickoff to launch and beyond. No handoffs to strangers and no starting over every week.',
  },
  {
    title: 'Transparent communication, always',
    description:
      'Clear updates, honest timelines, and direct access to the founder. You’ll never have to chase us for news. If something is at risk, you’ll hear it from us first, along with a plan.',
  },
  {
    title: 'Delivery that stays on schedule',
    description:
      'We plan in milestones, track them openly, and commit to dates we can keep. Deadlines matter because your launch, your campaign, and your customers depend on them.',
  },
  {
    title: 'One team for your whole digital journey',
    description:
      'Website, web app, mobile app, SaaS platform, DevOps, AI automation, marketing, and UGC ads all live under one roof. You get a single partner who makes every piece work together, instead of juggling five agencies.',
  },
  {
    title: 'AI-ready from day one',
    description:
      'We build automation and AI into products where it truly helps, such as smart workflows, AI agents, and data-driven insights. Your software works harder and your team spends less time on repetitive tasks.',
  },
  {
    title: 'Built to scale',
    description:
      'Clean architecture, secure infrastructure, and reliable deployments mean your product handles growth instead of breaking under it.',
  },
  {
    title: 'Your idea stays yours',
    description:
      'Your code, data, and business plans are confidential. We sign an NDA on request, and you own your custom deliverables once the project is paid for.',
  },
];

const workSteps = [
  { title: 'Discover:', description: 'We listen, study your business, and define the goal.' },
  { title: 'Plan:', description: 'Scope, milestones, timeline, and a clear proposal.' },
  { title: 'Build:', description: 'Agile sprints with regular demos and open feedback.' },
  { title: 'Launch:', description: 'Careful testing, smooth deployment, no surprises.' },
  { title: 'Grow:', description: 'Ongoing support, improvements, and marketing to keep momentum.' },
];

const comparisons = [
  ['Who you talk to', 'Account managers', 'Engineers and the founder'],
  ['Updates', 'When you ask', 'Proactive and regular'],
  ['Scope', 'Rigid and hard to change', 'Clear, with a simple change process'],
  ['Services', 'One specialty', 'Development, DevOps, AI, and marketing together'],
  ['After launch', 'Gone', 'Ongoing support and growth'],
];

const expectations = [
  'A clear proposal before any work begins',
  'Regular progress updates and demos',
  'Honest advice, even when it means saying “you don’t need that”',
  'Clean, documented, maintainable code',
  'Support after launch',
];

export const WhyChooseUs: React.FC = () => {
  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('.why-page [data-reveal]');

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
    <div className="why-page">
      <section className="why-hero">
        <div className="why-container why-hero__content" data-reveal>
          <h1>Great software is built by people who care.</h1>
          <p>
            Plenty of teams can write code. Few will treat your product like their own. Here’s why
            businesses choose Selwicks, and why they stay.
          </p>
          <div className="why-hero__actions">
            <a
              href={scheduleCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 justify-center px-6 py-2.5 rounded-full bg-palette-primary text-white font-label-md text-label-md font-semibold hover:bg-palette-primary-hover transition-all duration-200 shadow-[var(--shadow-primary)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <PhoneCall className="w-4 h-4" aria-hidden="true" />
              Schedule a Call
            </a>
            <a
              href="/projects.html"
              className="why-secondary-button"
            >
              See Our Projects
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
          </div>
        </div>
      </section>

      <section className="why-section why-reasons" aria-label="Reasons businesses choose Selwicks">
        <div className="why-container why-reasons__grid">
          {reasons.map((reason, index) => (
            <article
              className="why-reason-card"
              data-reveal
              key={reason.title}
              style={{ transitionDelay: `${(index % 3) * 70}ms` }}
            >
              <span className="why-reason-card__number" aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h2>{reason.title}</h2>
              <p>{reason.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="why-section why-work" aria-labelledby="why-work-title">
        <div className="why-container">
          <div className="why-section-heading" data-reveal>
            <h2 id="why-work-title">How We Work</h2>
          </div>
          <ol className="why-timeline">
            {workSteps.map((step, index) => (
              <li
                className="why-step"
                data-reveal
                key={step.title}
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <span className="why-step__number" aria-hidden="true">
                  {index + 1}
                </span>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="why-section why-difference" aria-labelledby="why-difference-title">
        <div className="why-container">
          <div className="why-section-heading" data-reveal>
            <h2 id="why-difference-title">The Selwicks Difference</h2>
          </div>
          <div className="why-comparison-scroll" tabIndex={0} aria-label="Agency and Selwicks comparison table">
            <table className="why-comparison-table">
              <thead>
                <tr>
                  <th scope="col">
                    <span className="sr-only">Comparison</span>
                  </th>
                  <th scope="col">Typical agency</th>
                  <th scope="col">Selwicks</th>
                </tr>
              </thead>
              <tbody>
                {comparisons.map(([topic, agency, selwicks]) => (
                  <tr key={topic}>
                    <th scope="row">{topic}</th>
                    <td>{agency}</td>
                    <td>{selwicks}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="why-section why-expect" aria-labelledby="why-expect-title">
        <div className="why-container">
          <div className="why-section-heading" data-reveal>
            <h2 id="why-expect-title">What You Can Expect From Us</h2>
          </div>
          <ul className="why-expect__list">
            {expectations.map((expectation, index) => (
              <li
                className="why-expect__item"
                data-reveal
                key={expectation}
                style={{ transitionDelay: `${(index % 2) * 70}ms` }}
              >
                <span className="why-expect__check">
                  <Check aria-hidden="true" />
                </span>
                <span>{expectation}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ContactCTA />
    </div>
  );
};
