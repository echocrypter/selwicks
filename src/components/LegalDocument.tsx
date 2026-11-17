import React, { useEffect, useState } from 'react';
import { Download } from 'lucide-react';
import type { LegalDocumentData, LegalInlineContent } from '../content/legalDocument';
import { downloadLegalDocument } from '../utils/downloadLegalDocument';
import { ContactCTA } from './ContactCTA';
import './LegalDocument.css';

interface LegalDocumentProps {
  document: LegalDocumentData;
  pdfFilename: string;
}

const renderInlineContent = (content: LegalInlineContent[], keyPrefix: string) =>
  content.map((part, index) => {
    const key = `${keyPrefix}-${index}`;
    if (typeof part === 'string') return <React.Fragment key={key}>{part}</React.Fragment>;

    const text = part.bold ? <strong>{part.text}</strong> : part.text;
    return part.href ? (
      <a key={key} href={part.href}>
        {text}
      </a>
    ) : (
      <React.Fragment key={key}>{text}</React.Fragment>
    );
  });

export const LegalDocument: React.FC<LegalDocumentProps> = ({ document, pdfFilename }) => {
  const [activeSection, setActiveSection] = useState(document.sections[0].id);

  useEffect(() => {
    const sectionElements = document.sections
      .map((section) => window.document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-18% 0px -68% 0px', threshold: 0 },
    );

    sectionElements.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [document]);

  return (
    <div className="legal-page">
      <header className="legal-hero">
        <div className="legal-container">
          <span className="legal-eyebrow">Legal</span>
          <h1>{document.title}</h1>
          <p>
            <strong>{document.organization}</strong>
            <span aria-hidden="true"> · </span>
            Effective date: {document.effectiveDate}
            <span aria-hidden="true"> · </span>
            Last updated: {document.lastUpdated}
          </p>
        </div>
      </header>

      <div className="legal-container legal-layout">
        <nav className="legal-toc" aria-label={`${document.title} table of contents`}>
          <h2>On this page</h2>
          <ol>
            {document.sections.map((section) => (
              <li key={section.id}>
                <a
                  href={`#${section.id}`}
                  aria-current={activeSection === section.id ? 'location' : undefined}
                  className={activeSection === section.id ? 'is-active' : undefined}
                >
                  {section.title}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <article className="legal-content" aria-label={document.title}>
          {document.sections.map((section) => (
            <section
              className="legal-section"
              id={section.id}
              key={section.id}
              aria-labelledby={`${section.id}-heading`}
            >
              <h2 id={`${section.id}-heading`}>{section.title}</h2>
              {section.blocks.map((block, blockIndex) => {
                const blockKey = `${section.id}-block-${blockIndex}`;
                if (block.type === 'subheading') return <h3 key={blockKey}>{block.text}</h3>;
                if (block.type === 'paragraph') {
                  return (
                    <p key={blockKey}>
                      {renderInlineContent(block.content, blockKey)}
                    </p>
                  );
                }
                return (
                  <ul key={blockKey}>
                    {block.items.map((item, itemIndex) => (
                      <li key={`${blockKey}-item-${itemIndex}`}>
                        {renderInlineContent(item, `${blockKey}-item-${itemIndex}`)}
                      </li>
                    ))}
                  </ul>
                );
              })}
            </section>
          ))}
          <div className="legal-download">
            <button
              type="button"
              onClick={() => downloadLegalDocument(document, pdfFilename)}
              aria-label={`Download the complete Selwicks ${document.title} as a PDF`}
              className="inline-flex items-center gap-2 justify-center px-6 py-3 rounded-full bg-palette-primary text-white font-label-md text-label-md font-semibold hover:bg-palette-primary-hover transition-all duration-200 shadow-[var(--shadow-primary)] hover:-translate-y-0.5 active:translate-y-0"
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              Download PDF
            </button>
          </div>
        </article>
      </div>
      <ContactCTA />
    </div>
  );
};
