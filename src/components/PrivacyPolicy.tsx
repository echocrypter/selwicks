import React from 'react';
import { LegalDocument } from './LegalDocument';
import { privacyPolicy } from '../content/privacyPolicy';

export const PrivacyPolicy: React.FC = () => (
  <LegalDocument document={privacyPolicy} pdfFilename="Selwicks-Privacy-Policy.pdf" />
);
