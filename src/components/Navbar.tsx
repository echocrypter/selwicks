import React, { useEffect, useRef, useState } from 'react';
import {
  Building2,
  ChevronDown,
  FileText,
  Menu,
  Newspaper,
  PhoneCall,
  ShieldCheck,
  Star,
  X,
  type LucideIcon,
} from 'lucide-react';
import './Navbar.css';

const companyMenuItems: {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
  iconClass: string;
}[] = [
  {
    title: 'About Us',
    description: 'Meet the team behind Selwicks and the story of how we build software, apps, and automations.',
    href: '/about.html',
    icon: Building2,
    iconClass: 'company-menu-item__icon--success',
  },
  {
    title: 'Why Choose Us',
    description: 'Dedicated engineers, transparent communication, and delivery that stays on schedule.',
    href: '/why-choose-us/index.html',
    icon: Star,
    iconClass: 'company-menu-item__icon--primary',
  },
  {
    title: 'Privacy Policy',
    description: 'How we collect, use, and protect your data.',
    href: '/privacy-policy.html',
    icon: ShieldCheck,
    iconClass: 'company-menu-item__icon--primary',
  },
  {
    title: 'Terms of Service',
    description: 'The rules and agreements that guide how we work together.',
    href: '/terms-of-service/index.html',
    icon: FileText,
    iconClass: 'company-menu-item__icon--primary',
  },
  {
    title: 'Blog / Insights',
    description: 'Articles on software, AI automation, and building products that scale.',
    href: '/blog/index.html',
    icon: Newspaper,
    iconClass: 'company-menu-item__icon--warning',
  },
];

const scheduleCallUrl = 'https://wa.me/923265933029';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const isProjectsPage = window.location.pathname.endsWith('/projects.html');
  const isHomePage = window.location.pathname === '/' || window.location.pathname === '/index.html';
  const sectionHref = (section: string) => `${isHomePage ? '' : '/'}#${section}`;
  const desktopCompanyButtonRef = useRef<HTMLButtonElement>(null);
  const mobileCompanyButtonRef = useRef<HTMLButtonElement>(null);
  const desktopMenuRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const focusTimerRef = useRef<number | null>(null);

  const closeCompanyMenu = () => {
    if (focusTimerRef.current !== null) {
      window.clearTimeout(focusTimerRef.current);
      focusTimerRef.current = null;
    }
    setCompanyOpen(false);
  };

  const toggleCompanyMenu = (isMobile: boolean) => {
    if (companyOpen) {
      closeCompanyMenu();
      return;
    }

    setCompanyOpen(true);
    focusTimerRef.current = window.setTimeout(() => {
      const menu = isMobile ? mobileMenuRef.current : desktopMenuRef.current;
      const firstLink = isMobile
        ? menu?.querySelector<HTMLAnchorElement>('a')
        : menu?.querySelector<HTMLAnchorElement>('.company-menu-grid a');
      firstLink?.focus();
      focusTimerRef.current = null;
    }, 75);
  };

  useEffect(() => {
    if (!companyOpen) return;

    const isMobile = window.matchMedia('(max-width: 899px)').matches;

    const handleOutsidePointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;

      const insideCompanyMenu = [
        desktopCompanyButtonRef.current,
        mobileCompanyButtonRef.current,
        desktopMenuRef.current,
        mobileMenuRef.current,
      ].some((element) => element?.contains(target));

      if (!insideCompanyMenu) closeCompanyMenu();
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key !== 'Escape') return;
      closeCompanyMenu();
      (isMobile ? mobileCompanyButtonRef.current : desktopCompanyButtonRef.current)?.focus();
    };

    document.addEventListener('pointerdown', handleOutsidePointerDown);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('pointerdown', handleOutsidePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [companyOpen]);

  const closeMenus = () => {
    closeCompanyMenu();
    setMobileMenuOpen(false);
  };

  const renderCompanyItems = (mobile = false) => companyMenuItems.map((item) => {
    const Icon = item.icon;
    return (
      <a
        key={item.href}
        href={item.href}
        onClick={closeMenus}
        className={`company-menu-item ${mobile ? 'company-menu-item--mobile' : ''}`}
      >
        <Icon className={`company-menu-item__icon ${item.iconClass}`} aria-hidden="true" />
        <span className="company-menu-item__copy">
          <span className="company-menu-item__title">{item.title}</span>
          <span className="company-menu-item__description">{item.description}</span>
        </span>
      </a>
    );
  });

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-3 sm:pt-4">
        <div className="navbar-pill h-18 sm:h-20 px-5 sm:px-6 rounded-full bg-white/80 backdrop-blur-xl shadow-[var(--shadow-soft)] border border-white/60 flex items-center justify-between transition-all duration-300">
          <a href="/" className="flex items-center gap-3 group">
            <img
              src="/loggod.png"
              alt="Selwicks logo"
              className="h-10 w-auto rounded-xl object-contain shadow-md group-hover:scale-105 transition-transform"
            />
            <span className="font-headline-sm text-[20px] font-bold text-slate-900 tracking-tight">
              Selwicks
            </span>
          </a>

          <nav aria-label="Primary navigation" className="desktop-navbar items-center gap-1 bg-slate-100/60 p-1.5 rounded-full border border-slate-200/50">
            <a
              href={sectionHref('services')}
              className="px-4 py-2 rounded-full font-label-md text-label-md text-slate-700 hover:text-slate-950 hover:bg-white/90 transition-all duration-200 font-medium"
            >
              Services
            </a>
            <a
              href={sectionHref('technologies')}
              className="px-4 py-2 rounded-full font-label-md text-label-md text-slate-700 hover:text-slate-950 hover:bg-white/90 transition-all duration-200 font-medium"
            >
              Technologies
            </a>
            <a
              href="/projects.html"
              aria-current={isProjectsPage ? 'page' : undefined}
              className={`px-4 py-2 rounded-full font-label-md text-label-md transition-all duration-200 font-medium ${
                isProjectsPage
                  ? 'bg-palette-primary-soft text-palette-primary shadow-sm'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-white/90'
              }`}
            >
              Projects
            </a>
            <button
              ref={desktopCompanyButtonRef}
              type="button"
              onClick={() => toggleCompanyMenu(false)}
              aria-expanded={companyOpen}
              aria-controls="company-mega-menu"
              className={`inline-flex items-center gap-1 px-4 py-2 rounded-full font-label-md text-label-md transition-all duration-200 font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palette-primary ${
                companyOpen
                  ? 'bg-palette-primary-soft text-palette-primary'
                  : 'text-slate-700 hover:text-slate-950 hover:bg-white/90'
              }`}
            >
              Company
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 ${companyOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            <a
              href={sectionHref('faq')}
              className="px-4 py-2 rounded-full font-label-md text-label-md text-slate-700 hover:text-slate-950 hover:bg-white/90 transition-all duration-200 font-medium"
            >
              FAQ
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={scheduleCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 justify-center px-6 py-2.5 rounded-full bg-palette-primary text-white font-label-md text-label-md font-semibold hover:bg-palette-primary-hover transition-all duration-200 shadow-[var(--shadow-primary)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Schedule a Call</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen((open) => !open);
                closeCompanyMenu();
              }}
              className="mobile-navigation-toggle p-2 rounded-full text-palette-text-muted hover:bg-slate-100/80 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palette-primary"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        <div
          ref={desktopMenuRef}
          id="company-mega-menu"
          role="region"
          aria-label="Company menu"
          aria-hidden={!companyOpen}
          inert={!companyOpen}
          className={`company-menu-panel ${companyOpen ? 'is-open' : ''}`}
        >
          <div className="company-menu-intro">
            <h2>
              Learn more about
              <span>Selwicks.</span>
            </h2>
            <a href={scheduleCallUrl} target="_blank" rel="noopener noreferrer" onClick={closeCompanyMenu}>
              Schedule a call <span aria-hidden="true">→</span>
            </a>
          </div>
          <div className="company-menu-content">
            <h3>Company</h3>
            <div className="company-menu-grid">
              {renderCompanyItems()}
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div
            id="mobile-navigation"
            className="mobile-navigation mt-2 w-full p-5 bg-white/95 backdrop-blur-2xl rounded-3xl shadow-xl border border-slate-200/60 flex flex-col gap-3 animate-in fade-in slide-in-from-top-2 duration-200 text-slate-900"
          >
            <a
              href={sectionHref('services')}
              onClick={closeMenus}
              className="px-4 py-2.5 rounded-xl font-label-md text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Services
            </a>
            <a
              href={sectionHref('technologies')}
              onClick={closeMenus}
              className="px-4 py-2.5 rounded-xl font-label-md text-slate-700 hover:bg-slate-100 transition-colors"
            >
              Technologies
            </a>
            <a
              href="/projects.html"
              onClick={closeMenus}
              aria-current={isProjectsPage ? 'page' : undefined}
              className={`px-4 py-2.5 rounded-xl font-label-md transition-colors ${
                isProjectsPage
                  ? 'bg-palette-primary-soft text-palette-primary font-semibold'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              Projects
            </a>
            <button
              ref={mobileCompanyButtonRef}
              type="button"
              onClick={() => toggleCompanyMenu(true)}
              aria-expanded={companyOpen}
              aria-controls="company-mobile-accordion"
              className={`flex w-full items-center justify-between px-4 py-2.5 rounded-xl font-label-md transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-palette-primary ${
                companyOpen
                  ? 'bg-palette-primary-soft text-palette-primary font-semibold'
                  : 'text-slate-700 hover:bg-slate-100'
              }`}
            >
              <span>Company</span>
              <ChevronDown
                className={`w-4 h-4 transition-transform duration-200 ${companyOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>
            <div
              ref={mobileMenuRef}
              id="company-mobile-accordion"
              aria-hidden={!companyOpen}
              inert={!companyOpen}
              className={`company-mobile-accordion ${companyOpen ? 'is-open' : ''}`}
            >
              <div className="company-mobile-accordion__inner">
                <div className="flex flex-col gap-1">
                  {renderCompanyItems(true)}
                </div>
                <a
                  href={scheduleCallUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMenus}
                  className="company-mobile-schedule"
                >
                  Schedule a call <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
            <a
              href={sectionHref('faq')}
              onClick={closeMenus}
              className="px-4 py-2.5 rounded-xl font-label-md text-slate-700 hover:bg-slate-100 transition-colors"
            >
              FAQ
            </a>
            <a
              href={scheduleCallUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={closeMenus}
              className="mt-2 w-full flex items-center justify-center gap-2 py-3 rounded-full bg-palette-primary text-white font-label-md font-semibold shadow-[var(--shadow-primary)]"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Schedule a Call</span>
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
