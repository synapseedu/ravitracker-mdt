import React from 'react';
import { Row, Col, Space, Button as AntButton, Card as AntCard, Typography as AntTypography, Tooltip as AntTooltip, Tag, Input, Divider as AntDivider } from 'antd';
import { FilePdfOutlined } from '@ant-design/icons';

export const PdfIcon = FilePdfOutlined;

export function Box({ sx, style, ...props }: any) {
  return <div style={{ ...(sx || {}), ...(style || {}) }} {...props} />;
}

const maxWidthMap: Record<string, number> = { sm: 600, md: 960, lg: 1280 };
export function Container({ sx, style, maxWidth = 'md', ...props }: any) {
  return (
    <div
      style={{ margin: '0 auto', width: '100%', maxWidth: maxWidthMap[maxWidth] || maxWidthMap.md, padding: '0 16px', ...(sx || {}), ...(style || {}) }}
      {...props}
    />
  );
}

const { Title, Text } = AntTypography;
export function Typography({ variant, sx, style, gutterBottom, align, ...props }: any) {
  const combined = { marginBottom: gutterBottom ? '0.35em' : undefined, textAlign: align, ...(sx || {}), ...(style || {}) };
  const children = props.children;
  if (variant === 'h4') return <Title level={4} style={combined} {...props}>{children}</Title>;
  if (variant === 'h6') return <Title level={5} style={combined} {...props}>{children}</Title>;
  if (variant === 'subtitle2') return <Text strong style={combined} {...props}>{children}</Text>;
  return <Text style={combined} {...props}>{children}</Text>;
}

export function Card({ variant, elevation, sx, style, ...props }: any) {
  return <AntCard bordered={variant !== 'outlined'} style={{ ...(sx || {}), ...(style || {}) }} {...props} />;
}

export function CardContent(props: any) {
  return <div {...props} />;
}

export function Button({ variant, fullWidth, sx, style, ...props }: any) {
  const type = variant === 'contained' ? 'primary' : variant === 'text' ? 'link' : 'default';
  const ghost = variant === 'outlined';
  return <AntButton type={type as any} ghost={ghost} style={{ width: fullWidth ? '100%' : undefined, ...(sx || {}), ...(style || {}) }} {...props} />;
}

export function Chip({ label, color, ...rest }: any) {
  return <Tag color={color === 'primary' ? 'blue' : color} {...rest}>{label}</Tag>;
}

export function Stack({ direction = 'column', spacing = 1, justifyContent, alignItems, sx, style, children, ...rest }: any) {
  return (
    <Space
      direction={direction === 'row' ? 'horizontal' : 'vertical'}
      size={spacing * 8}
      style={{ display: 'flex', justifyContent, alignItems, ...(sx || {}), ...(style || {}) }}
      {...rest}
    >
      {children}
    </Space>
  );
}

export function Grid({ container, item, spacing, xs, sm, sx, style, children, ...rest }: any) {
  if (container) {
    return <Row gutter={spacing ? spacing * 8 : 0} style={{ ...(sx || {}), ...(style || {}) }} {...rest}>{children}</Row>;
  }
  return <Col xs={xs ? xs * 2 : undefined} sm={sm ? sm * 2 : undefined} style={{ ...(sx || {}), ...(style || {}) }} {...rest}>{children}</Col>;
}

export function IconButton(props: any) {
  return <AntButton shape="circle" {...props} />;
}

export const Tooltip = AntTooltip;
export function TextField({ multiline, minRows, maxRows, fullWidth, sx, style, ...props }: any) {
  if (multiline) {
    return <Input.TextArea autoSize={{ minRows, maxRows }} style={{ width: fullWidth ? '100%' : undefined, ...(sx || {}), ...(style || {}) }} {...props} />;
  }
  return <Input style={{ width: fullWidth ? '100%' : undefined, ...(sx || {}), ...(style || {}) }} {...props} />;
}

export const Divider = AntDivider;

export function Paper({ elevation, sx, style, ...props }: any) {
  return <AntCard bordered style={{ ...(sx || {}), ...(style || {}) }} {...props} />;
}

export function CardHeader({ title, action, sx, style, ...rest }: any) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', ...(sx || {}), ...(style || {}) }} {...rest}>
      <div>{title}</div>
      {action}
    </div>
  );
}
