'use client';
import { Space, Button, Tooltip } from 'antd';
import { FilePdfOutlined } from '@ant-design/icons';
import { iconBtnStyle } from './theme';

/** When `onBlue` is true we paint the icon white for a blue header. */
export default function PdfIcons({
  files,
  onBlue = false,
}: {
  files?: string[];
  onBlue?: boolean;
}) {
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
            style={onBlue ? iconBtnStyle : undefined}
          />
        </Tooltip>
      ))}
    </Space>
  );
}
