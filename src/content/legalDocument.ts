export type LegalInlineContent = string | {
  text: string;
  bold?: boolean;
  href?: string;
};

export type LegalBlock =
  | { type: 'paragraph'; content: LegalInlineContent[] }
  | { type: 'subheading'; text: string }
  | { type: 'list'; items: LegalInlineContent[][] };

export interface LegalSection {
  id: string;
  title: string;
  blocks: LegalBlock[];
}

export interface LegalDocumentData {
  title: string;
  organization: string;
  effectiveDate: string;
  lastUpdated: string;
  sections: LegalSection[];
}
