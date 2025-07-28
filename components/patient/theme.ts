// ────────────────────────────────────────────────────────────────────────────
// components/theme.ts
// ────────────────────────────────────────────────────────────────────────────
export const PRIMARY = '#1d39c4';          // Ant Design blue‑8
export const HEADER_BG = PRIMARY;          // dark blue background for section headers
export const HEADER_TXT = '#ffffff';       // white text / icons on blue

export const headStyle = {
  background: HEADER_BG,
  color: HEADER_TXT,
  fontWeight: 600,
} as const;

export const iconBtnStyle = { color: HEADER_TXT } as const;
export const subHeadingStyle = { color: PRIMARY } as const;
