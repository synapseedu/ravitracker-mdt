import React from 'react';

export interface Patient {
  id: string;
  name: string;
  dob: string;
  referring: string;
  consulting: string;
  mrn?: string;
  referralDate?: string;
  contact?: string;
  email?: string;
  weight?: string;
  weightKg?: number;
  height?: string;
  heightCm?: number;
  pdfs?: Record<string, string[]>;
  history?: string[];
  background?: string[];
  medications?: string[];
  social?: string;
  functional?: string;
  tteSummary?: string[];
  tteData?: Record<string, string>;
  toeSummary?: string[];
  toeData?: Record<string, string>;
  rhc?: React.ReactNode;
  angioSummary?: string;
  angio?: string;
  ecgSummary?: string;
  ecg?: string;
  ctIncidentals?: string;
  respiratorySummary?: string;
  ctsSummary?: string;
  bloods?: Record<string, string | number | null>;
  agedCare?: string;
  agedCareNote?: string;
  moca?: string;
  frailtyScore?: string;
  consultTexts?: Record<string, string>;
  pelvicReport?: React.ReactNode;
  /** public = MDT list; private = NSP list */
  status?: 'public' | 'private';
  /** optional badges to flag special cohorts (e.g. MitraClip, TAVI) */
  badges?: string[];
}
