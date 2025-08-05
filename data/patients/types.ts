export interface Patient {
  id: string;
  name: string;
  dob: string;
  referring: string;
  consulting: string;
  /** public = MDT list; private = NSP list */
  status?: 'public' | 'private';
  /* optional extras */
  weightKg?: number;
  heightCm?: number;
  pdfs?: Record<string, string[]>;
  /** optional badges to flag special cohorts (e.g. MitraClip, TAVI) */
  badges?: string[];
}
