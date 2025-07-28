// components/patient/PatientSection.tsx
'use client';

import { Card, Space } from 'antd';
import { ReactNode } from 'react';
import PdfIcons from './PdfIcons';
import { headStyle } from './theme';

/**
 * Generic blue-header card used across all patient pages.
 *
 * @param title      Card title (blue header)
 * @param pdfs       Main list of PDFs for this section
 * @param extraPdfs  Optional array-of-arrays for any additional PDF groups
 * @param children   Section body
 */
interface Props {
  title: string;
  pdfs?: string[];
  extraPdfs?: string[][];
  children?: ReactNode;
}

export default function PatientSection({
  title,
  pdfs,
  extraPdfs = [],
  children,
}: Props) {
  return (
    <Card
      title={title}
      headStyle={headStyle}
      extra={
        <Space>
          <PdfIcons files={pdfs} onBlue />
          {extraPdfs.map((arr, idx) => (
            <PdfIcons key={idx} files={arr} onBlue />
          ))}
        </Space>
      }
      style={{ marginBottom: 24 }}
    >
      {children}
    </Card>
  );
}
