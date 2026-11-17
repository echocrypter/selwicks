import type { LegalDocumentData } from './legalDocument';

export const privacyPolicy: LegalDocumentData = {
  title: 'Privacy Policy',
  organization: 'Selwicks',
  effectiveDate: 'November 17, 2026',
  lastUpdated: 'November 17, 2026',
  sections: [
    {
      id: 'introduction',
      title: '1. Introduction',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'Selwicks (“we,” “us,” “our”) is a software house offering web development, web and desktop apps, mobile apps, SaaS apps, DevOps, AI and data science, digital marketing, and UGC ad services. This Privacy Policy explains what information we collect, how we use it, and the choices you have. By using our website or services, you agree to the practices described here.',
          ],
        },
      ],
    },
    {
      id: 'information-we-collect',
      title: '2. Information We Collect',
      blocks: [
        { type: 'subheading', text: 'Information you give us' },
        {
          type: 'list',
          items: [
            ['Name, email address, phone or WhatsApp number, and company name'],
            ['Project details, requirements, and messages you send through forms, email, WhatsApp, or scheduled calls'],
            ['Booking details when you use “Schedule a Call”'],
          ],
        },
        { type: 'subheading', text: 'Information collected automatically' },
        {
          type: 'list',
          items: [
            ['Device and browser type, IP address, and approximate location'],
            ['Pages visited, time spent, referring pages, and general usage patterns'],
            ['Cookies and similar technologies (see Section 6)'],
          ],
        },
        { type: 'subheading', text: 'Information from client projects' },
        {
          type: 'paragraph',
          content: [
            'When we build or maintain software for you, we may access your data, such as user records, content, and credentials, only as needed to deliver the work.',
          ],
        },
      ],
    },
    {
      id: 'how-we-use-your-information',
      title: '3. How We Use Your Information',
      blocks: [
        {
          type: 'list',
          items: [
            ['Respond to inquiries and schedule calls'],
            ['Provide, manage, and improve our services'],
            ['Send proposals, invoices, project updates, and support messages'],
            ['Improve our website, content, and user experience'],
            ['Send occasional updates or insights, which you can opt out of at any time'],
            ['Protect against fraud, abuse, and security threats'],
            ['Comply with legal obligations'],
          ],
        },
      ],
    },
    {
      id: 'legal-basis-for-processing',
      title: '4. Legal Basis for Processing',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'Where data protection laws such as the GDPR apply, we process your information based on your consent, the need to perform a contract or take steps before entering one, our legitimate business interests, and legal obligations.',
          ],
        },
      ],
    },
    {
      id: 'how-we-share-information',
      title: '5. How We Share Information',
      blocks: [
        { type: 'paragraph', content: ['We do not sell your personal information. We may share it only with:'] },
        {
          type: 'list',
          items: [
            [
              { text: 'Service providers', bold: true },
              ' who help us operate, such as hosting, analytics, email, scheduling, and communication tools, under confidentiality obligations',
            ],
            [
              { text: 'Professional advisors', bold: true },
              ' such as accountants and legal counsel',
            ],
            [
              { text: 'Authorities', bold: true },
              ', when required by law or to protect our rights and safety',
            ],
            [
              { text: 'A successor entity', bold: true },
              ', in the event of a merger, acquisition, or sale of assets',
            ],
          ],
        },
      ],
    },
    {
      id: 'cookies-and-analytics',
      title: '6. Cookies and Analytics',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'We use cookies and similar technologies to keep the site working, understand how visitors use it, and improve performance. You can control or disable cookies in your browser settings. Disabling some cookies may affect site functionality.',
          ],
        },
      ],
    },
    {
      id: 'data-security',
      title: '7. Data Security',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'We use reasonable technical and organizational safeguards, including encrypted connections (HTTPS), access controls, and secure hosting. No method of transmission or storage is completely secure, so we cannot guarantee absolute security.',
          ],
        },
      ],
    },
    {
      id: 'data-retention',
      title: '8. Data Retention',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'We keep personal information only as long as needed for the purposes in this policy, to meet legal, accounting, or contractual requirements, or to resolve disputes. When it is no longer needed, we delete or anonymize it.',
          ],
        },
      ],
    },
    {
      id: 'confidentiality-of-client-work',
      title: '9. Confidentiality of Client Work',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'Project files, source code, business data, and communications shared with us are treated as confidential. We do not use client data for any purpose other than delivering the agreed services, and we are happy to sign a Non-Disclosure Agreement (NDA) on request.',
          ],
        },
      ],
    },
    {
      id: 'international-data-transfers',
      title: '10. International Data Transfers',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'We operate from Pakistan and work with clients worldwide. Your information may be processed in countries other than your own, which may have different data protection laws. We take steps to protect your information wherever it is processed.',
          ],
        },
      ],
    },
    {
      id: 'your-rights',
      title: '11. Your Rights',
      blocks: [
        { type: 'paragraph', content: ['Depending on where you live, you may have the right to:'] },
        {
          type: 'list',
          items: [
            ['Access the personal data we hold about you'],
            ['Correct inaccurate or incomplete data'],
            ['Request deletion of your data'],
            ['Object to or restrict certain processing'],
            ['Withdraw consent at any time'],
            ['Request a portable copy of your data'],
          ],
        },
        {
          type: 'paragraph',
          content: [
            'To exercise any of these rights, contact us using the details below. We will respond within a reasonable time and in line with applicable law.',
          ],
        },
      ],
    },
    {
      id: 'third-party-links-and-services',
      title: '12. Third-Party Links and Services',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'Our website may link to third-party sites or tools such as social platforms, scheduling tools, or portfolio demos. We are not responsible for their privacy practices and encourage you to review their policies.',
          ],
        },
      ],
    },
    {
      id: 'childrens-privacy',
      title: '13. Children’s Privacy',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'Our services are intended for businesses and adults. We do not knowingly collect personal information from anyone under 18. If you believe a child has provided us with information, contact us and we will delete it.',
          ],
        },
      ],
    },
    {
      id: 'changes-to-this-policy',
      title: '14. Changes to This Policy',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'We may update this policy from time to time. The “Last updated” date at the top shows the latest version. Significant changes will be posted on this page.',
          ],
        },
      ],
    },
    {
      id: 'contact-us',
      title: '15. Contact Us',
      blocks: [
        { type: 'paragraph', content: ['Questions or requests about this policy:'] },
        { type: 'paragraph', content: [{ text: 'Selwicks', bold: true }] },
        {
          type: 'paragraph',
          content: ['Email: ', { text: 'selwicks@outlook.com', href: 'mailto:selwicks@outlook.com' }],
        },
        { type: 'paragraph', content: ['WhatsApp: +92 3265933029'] },
        { type: 'paragraph', content: ['Founder: Hammad Ahmad'] },
      ],
    },
  ],
};
