// ────────────────────────────────────────────────────────────────────────────
// components/PdfIcons.tsx
// ────────────────────────────────────────────────────────────────────────────
'use client';
import { Space, Button, Tooltip } from 'antd';
import { FilePdfOutlined } from '@ant-design/icons';
import { iconBtnStyle } from './theme';

export default function PdfIcons({ files }: { files?: string[] }) {
  if (!files?.length) return null;
  return (
    <Space>
      {files.map((f) => (
        <Tooltip title={f} key={f}>
          <Button
            type="text"
            size="small"
            href={`/pdfs/${encodeURIComponent(f)}`}
            target="_blank"
            icon={<FilePdfOutlined />}
            style={iconBtnStyle}
          />
        </Tooltip>
      ))}
    </Space>
  );
}

