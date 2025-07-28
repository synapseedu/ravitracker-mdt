// ────────────────────────────────────────────────────────────────────────────
// components/PatientSection.tsx
// ────────────────────────────────────────────────────────────────────────────
'use client';
import { Card, Space } from 'antd';
import PdfIcons from './PdfIcons';
import { headStyle } from './theme';

interface Props {
  title: string;
  pdfs?: string[];
  extraPdfs?: string[][]; // array of additional pdf arrays (optional)
  children?: React.ReactNode;
}

export default function PatientSection({ title, pdfs, extraPdfs = [], children }: Props) {
  return (
    <Card
      title={title}
      headStyle={headStyle}
      extra={
        <Space>
          <PdfIcons files={pdfs} />
          {extraPdfs.map((arr, idx) => (
            <PdfIcons key={idx} files={arr} />
          ))}
        </Space>
      }
      style={{ marginBottom: 24 }}
    >
      {children}
    </Card>
  );
}


