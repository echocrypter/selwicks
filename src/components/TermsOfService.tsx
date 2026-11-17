import React from 'react';
import { LegalDocument } from './LegalDocument';
import { termsOfService } from '../content/termsOfService';

export const TermsOfService: React.FC = () => (
  <LegalDocument document={termsOfService} pdfFilename="Selwicks-Terms-of-Service.pdf" />
);
