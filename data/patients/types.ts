import React from 'react';

export interface InvestigationDetail {
  date: string;
  summary: string;
  source: string[];
}

export interface ConsultRecord {
  date: string;
  clinician: string;
  outcome: string;
  source: string[];
}

export interface SimpleConsult {
  clinician: string;
  recommendation: string;
}

export type Consults = ConsultRecord[] | Record<string, SimpleConsult>;

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
  allergies?: string[];
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
  cognitive?: Record<string, string | number | null>;
  bloods?: Record<string, string | number | null>;
  investigationSummary?: Record<string, string | string[] | InvestigationDetail[]>;
  agedCare?: string;
  agedCareNote?: string;
  consultTexts?: Record<string, string>;
  consults?: Consults;
  pelvicReport?: React.ReactNode;
  /** public = MDT list; private = NSP list */
  status?: 'public' | 'private';
  /** optional badges to flag special cohorts (e.g. MitraClip, TAVI) */
  badges?: string[];
}
