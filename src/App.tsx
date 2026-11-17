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
import { normalizePathname } from './utils/normalizePathname';

export function App() {
  const pathname = normalizePathname(window.location.pathname);
  const isProjectsPage = pathname === '/projects';
  const isAboutPage = pathname === '/about';
  const isPrivacyPolicyPage = pathname === '/privacy-policy';
  const isTermsOfServicePage = pathname === '/terms-of-service';
  const isWhyChooseUsPage = pathname === '/why-choose-us';
  const isBlogPage = pathname === '/blog' || pathname.startsWith('/blog/');

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
