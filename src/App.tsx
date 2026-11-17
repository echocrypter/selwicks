import { useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Technologies } from './components/Technologies';
import { OffshoreStaffing } from './components/OffshoreStaffing';
import { Industries } from './components/Industries';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { Projects } from './components/Projects';
import { About } from './components/About';
import { PrivacyPolicy } from './components/PrivacyPolicy';
import { TermsOfService } from './components/TermsOfService';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Blog } from './components/Blog';

export function App() {
  const pathname = window.location.pathname.replace(/\/+$/, '') || '/';
  const isProjectsPage = pathname.endsWith('/projects.html');
  const isAboutPage = pathname.endsWith('/about.html');
  const isPrivacyPolicyPage = pathname.endsWith('/privacy-policy.html');
  const isTermsOfServicePage = pathname === '/terms-of-service'
    || pathname === '/terms-of-service/index.html';
  const isWhyChooseUsPage = pathname === '/why-choose-us'
    || pathname === '/why-choose-us/index.html';
  const isBlogPage = pathname === '/blog'
    || pathname === '/blog/index.html'
    || pathname.startsWith('/blog/');

  useEffect(() => {
    const sectionId = window.location.hash.slice(1);
    if (!sectionId) return;

    document.getElementById(sectionId)?.scrollIntoView({ block: 'start' });
  }, []);

  return (
    <div className="min-h-screen bg-palette-bg text-palette-text flex flex-col font-sans selection:bg-palette-primary selection:text-palette-surface">
      <Navbar />
      {isAboutPage ? (
        <main className="flex-1">
          <About />
        </main>
      ) : isPrivacyPolicyPage ? (
        <main className="flex-1">
          <PrivacyPolicy />
        </main>
      ) : isTermsOfServicePage ? (
        <main className="flex-1">
          <TermsOfService />
        </main>
      ) : isWhyChooseUsPage ? (
        <main className="flex-1">
          <WhyChooseUs />
        </main>
      ) : isBlogPage ? (
        <main className="flex-1">
          <Blog />
        </main>
      ) : isProjectsPage ? (
        <main className="flex-1 pt-28 sm:pt-32">
          <Projects />
          <OffshoreStaffing />
        </main>
      ) : (
        <main className="flex-1">
          <Hero />
          <Services />
          <Technologies />
          <Industries />
          <Testimonials />
          <FAQ />
          <OffshoreStaffing />
        </main>
      )}
      <Footer />
    </div>
  );
}

export default App;
