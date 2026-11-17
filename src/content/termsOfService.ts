import type { LegalDocumentData } from './legalDocument';

export const termsOfService: LegalDocumentData = {
  title: 'Terms of Service',
  organization: 'Selwicks',
  effectiveDate: 'November 17, 2026',
  lastUpdated: 'November 17, 2026',
  sections: [
    {
      id: 'agreement-to-these-terms',
      title: '1. Agreement to These Terms',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'These Terms of Service (“Terms”) govern your use of the Selwicks website and the services we provide. By using our website, requesting a quote, or engaging us for a project, you agree to these Terms. If you are accepting on behalf of a company, you confirm you have authority to bind that company. If a signed project agreement conflicts with these Terms, the signed agreement takes priority.',
          ],
        },
      ],
    },
    {
      id: 'our-services',
      title: '2. Our Services',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'Selwicks is a software house offering web development, web and desktop apps, mobile apps, SaaS apps, DevOps engineering, AI and data science, digital marketing, and UGC ads. The scope, deliverables, timeline, and price of each project are set out in a written proposal, quotation, or statement of work (“Project Agreement”) agreed by both parties.',
          ],
        },
      ],
    },
    {
      id: 'project-scope-and-changes',
      title: '3. Project Scope and Changes',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'Work is limited to what is described in the Project Agreement. Requests that go beyond the agreed scope are treated as change requests. We will tell you how they affect cost and timeline, and work on them begins only after you approve.',
          ],
        },
      ],
    },
    {
      id: 'client-responsibilities',
      title: '4. Client Responsibilities',
      blocks: [
        { type: 'paragraph', content: ['To deliver on time, you agree to:'] },
        {
          type: 'list',
          items: [
            ['Provide accurate requirements, content, assets, and access in a timely manner'],
            ['Give feedback and approvals within the agreed timeframes'],
            ['Appoint a point of contact who can make decisions'],
            ['Ensure that materials you supply (text, images, logos, data) do not infringe anyone else’s rights'],
          ],
        },
        { type: 'paragraph', content: ['Delays caused by missing inputs or late feedback may move delivery dates.'] },
      ],
    },
    {
      id: 'payments',
      title: '5. Payments',
      blocks: [
        {
          type: 'list',
          items: [
            ['Fees, milestones, and payment schedules are stated in the Project Agreement.'],
            ['Invoices are due by the date shown on the invoice.'],
            ['We may pause work or delay delivery on overdue invoices.'],
            ['Third-party costs such as domains, hosting, licenses, APIs, ad spend, and stock assets are not included unless stated, and are billed to you or paid directly by you.'],
            ['Payments already made for completed work are non-refundable unless the Project Agreement says otherwise.'],
          ],
        },
      ],
    },
    {
      id: 'timelines',
      title: '6. Timelines',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'We commit to the timelines in the Project Agreement and will communicate openly about any risks to them. Dates depend on timely client input and are estimates where they rely on third parties such as app store reviews or ad platform approvals.',
          ],
        },
      ],
    },
    {
      id: 'revisions-and-acceptance',
      title: '7. Revisions and Acceptance',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'Each Project Agreement includes a defined number of revision rounds. Deliverables are considered accepted when you approve them in writing, or when you have not reported material issues within 7 days of delivery. After acceptance, further changes are treated as new work.',
          ],
        },
      ],
    },
    {
      id: 'intellectual-property',
      title: '8. Intellectual Property',
      blocks: [
        {
          type: 'list',
          items: [
            [{ text: 'Your materials:', bold: true }, ' You keep ownership of all content, data, and assets you provide.'],
            [{ text: 'Our deliverables:', bold: true }, ' Once full payment is received, ownership of the custom deliverables created specifically for you transfers to you, as described in the Project Agreement.'],
            [{ text: 'Our tools:', bold: true }, ' We keep ownership of our pre-existing code, frameworks, libraries, templates, and know-how, and grant you a non-exclusive, perpetual license to use them as part of your deliverables.'],
            [{ text: 'Third-party and open-source components', bold: true }, ' remain subject to their own licenses.'],
            [{ text: 'Portfolio:', bold: true }, ' Unless you ask us not to, we may display completed work in our portfolio and case studies. We will not disclose confidential information.'],
          ],
        },
      ],
    },
    {
      id: 'confidentiality',
      title: '9. Confidentiality',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'Each party agrees to keep the other’s non-public business, technical, and financial information confidential and to use it only for the project. This does not apply to information that is public, already known to the receiving party, or required to be disclosed by law. We will sign a separate Non-Disclosure Agreement on request.',
          ],
        },
      ],
    },
    {
      id: 'third-party-services',
      title: '10. Third-Party Services',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'Our work may rely on third-party platforms such as hosting providers, payment gateways, AI model providers, app stores, and ad networks. We do not control these services, and their availability, pricing, and policies may change. You are responsible for complying with their terms.',
          ],
        },
      ],
    },
    {
      id: 'ai-and-automation-services',
      title: '11. AI and Automation Services',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'AI-powered systems can produce inaccurate or unexpected output. You are responsible for reviewing AI-generated results before relying on them, and for ensuring your use of AI and automation complies with the laws that apply to your business, including rules on calls, messaging, consent, and data protection.',
          ],
        },
      ],
    },
    {
      id: 'digital-marketing-and-ugc-ads',
      title: '12. Digital Marketing and UGC Ads',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'We will do our best to deliver strong campaigns, but we cannot guarantee specific results such as rankings, traffic, leads, sales, or ad performance, which depend on factors outside our control. You are responsible for approving ad claims and ensuring that products and offers comply with advertising rules and platform policies.',
          ],
        },
      ],
    },
    {
      id: 'warranties-and-disclaimer',
      title: '13. Warranties and Disclaimer',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'We will perform our services with reasonable skill and care. Unless the Project Agreement says otherwise, we provide a 30-day period after delivery in which we will fix defects in the agreed scope at no charge. Except as stated here, our services and website are provided “as is” and “as available,” and we disclaim all other warranties, express or implied, including fitness for a particular purpose and uninterrupted or error-free operation.',
          ],
        },
      ],
    },
    {
      id: 'limitation-of-liability',
      title: '14. Limitation of Liability',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'To the fullest extent permitted by law, Selwicks will not be liable for indirect, incidental, special, or consequential damages, including lost profits, lost revenue, lost data, or business interruption. Our total liability for any claim related to a project is limited to the amount you paid us for that project in the three months before the claim arose.',
          ],
        },
      ],
    },
    {
      id: 'indemnification',
      title: '15. Indemnification',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'You agree to defend and compensate Selwicks against claims arising from materials you provide, your use of the deliverables in violation of law or these Terms, or your breach of these Terms.',
          ],
        },
      ],
    },
    {
      id: 'termination',
      title: '16. Termination',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'Either party may end a project with written notice if the other party materially breaches these Terms and does not fix the breach within 14 days of notice. You may also end a project for convenience with written notice. In either case you will pay for work completed and costs incurred up to the termination date. Sections that by their nature should survive termination, including payment, intellectual property, confidentiality, and liability, will continue to apply.',
          ],
        },
      ],
    },
    {
      id: 'acceptable-use-of-our-website',
      title: '17. Acceptable Use of Our Website',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'You agree not to misuse our website, including attempting unauthorized access, interfering with its operation, scraping it at scale, or using it for unlawful purposes.',
          ],
        },
      ],
    },
    {
      id: 'governing-law-and-disputes',
      title: '18. Governing Law and Disputes',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'These Terms are governed by the laws of Pakistan. We encourage you to contact us first so we can try to resolve any dispute informally. If that fails, disputes will be handled by the competent courts of Pakistan, unless the Project Agreement provides otherwise.',
          ],
        },
      ],
    },
    {
      id: 'changes-to-these-terms',
      title: '19. Changes to These Terms',
      blocks: [
        {
          type: 'paragraph',
          content: [
            'We may update these Terms from time to time. The “Last updated” date shows the latest version. Changes do not affect Project Agreements already signed unless both parties agree.',
          ],
        },
      ],
    },
    {
      id: 'contact-us',
      title: '20. Contact Us',
      blocks: [
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
