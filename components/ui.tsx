import React, { CSSProperties, HTMLAttributes, ReactNode } from 'react';
import {
  Row,
  Col,
  Space,
  Button as AntButton,
  Card as AntCard,
  Typography as AntTypography,
  Tooltip as AntTooltip,
  Tag,
  Input,
  Divider as AntDivider,
} from 'antd';
import { FilePdfOutlined } from '@ant-design/icons';

interface StyledProps {
  sx?: CSSProperties;
  style?: CSSProperties;
}

export interface BoxProps extends HTMLAttributes<HTMLDivElement>, StyledProps {}

export interface ContainerProps extends BoxProps {
  maxWidth?: keyof typeof maxWidthMap;
}

export interface TypographyProps
  extends HTMLAttributes<HTMLElement>, StyledProps {
  variant?: 'h4' | 'h6' | 'subtitle2';
  gutterBottom?: boolean;
  align?: 'left' | 'right' | 'center' | 'justify';
}

export interface UICardProps extends React.ComponentProps<typeof AntCard>, StyledProps {}

export interface ButtonProps extends Omit<React.ComponentProps<typeof AntButton>, 'type' | 'variant'>, StyledProps {
  variant?: 'contained' | 'text' | 'outlined';
  fullWidth?: boolean;
}

export interface ChipProps extends React.ComponentProps<typeof Tag> {
  label: ReactNode;
  color?: string;
}

export interface StackProps extends StyledProps {
  direction?: 'row' | 'column';
  spacing?: number;
  justifyContent?: string;
  alignItems?: string;
  children?: ReactNode;
}

export interface GridProps extends StyledProps {
  container?: boolean;
  spacing?: number;
  xs?: number;
  sm?: number;
  children?: ReactNode;
}


export interface TextFieldProps extends React.ComponentProps<typeof Input> {
  multiline?: boolean;
  minRows?: number;
  maxRows?: number;
  fullWidth?: boolean;
  sx?: CSSProperties;
  style?: CSSProperties;
}

export interface PaperProps extends React.ComponentProps<typeof AntCard>, StyledProps {}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement>, StyledProps {
  heading: ReactNode;
  action?: ReactNode;
}

export const PdfIcon = FilePdfOutlined;

export function Box({ sx, style, ...props }: BoxProps) {
  return <div style={{ ...(sx || {}), ...(style || {}) }} {...props} />;
}

const maxWidthMap: Record<string, number> = { sm: 600, md: 960, lg: 1280 };
export function Container({ sx, style, maxWidth = 'md', ...props }: ContainerProps) {
  return (
    <div
      style={{ margin: '0 auto', width: '100%', maxWidth: maxWidthMap[maxWidth] || maxWidthMap.md, padding: '0 16px', ...(sx || {}), ...(style || {}) }}
      {...props}
    />
  );
}

const { Title, Text } = AntTypography;
export function Typography({ variant, sx, style, gutterBottom, align, ...props }: TypographyProps) {
  const combined = { marginBottom: gutterBottom ? '0.35em' : undefined, textAlign: align, ...(sx || {}), ...(style || {}) };
  const children = props.children;
  if (variant === 'h4') return <Title level={4} style={combined} {...props}>{children}</Title>;
  if (variant === 'h6') return <Title level={5} style={combined} {...props}>{children}</Title>;
  if (variant === 'subtitle2') return <Text strong style={combined} {...props}>{children}</Text>;
  return <Text style={combined} {...props}>{children}</Text>;
}

export function Card({ sx, style, ...props }: UICardProps) {
  return <AntCard style={{ ...(sx || {}), ...(style || {}) }} {...props} />;
}

export function CardContent(props: HTMLAttributes<HTMLDivElement>) {
  return <div {...props} />;
}

export function Button({ variant, fullWidth, sx, style, ...props }: ButtonProps) {
  const typeValue: 'primary' | 'link' | 'default' | undefined =
    variant === 'contained' ? 'primary' : variant === 'text' ? 'link' : 'default';
  const ghost = variant === 'outlined';
  return (
    <AntButton
      type={typeValue}
      ghost={ghost}
      style={{ width: fullWidth ? '100%' : undefined, ...(sx || {}), ...(style || {}) }}
      {...props}
    />
  );
}

export function Chip({ label, color, ...rest }: ChipProps) {
  return <Tag color={color === 'primary' ? 'blue' : color} {...rest}>{label}</Tag>;
}

export function Stack({ direction = 'column', spacing = 1, justifyContent, alignItems, sx, style, children, ...rest }: StackProps) {
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

export function Grid({ container, spacing, xs, sm, sx, style, children, ...rest }: GridProps) {
  if (container) {
    return <Row gutter={spacing ? spacing * 8 : 0} style={{ ...(sx || {}), ...(style || {}) }} {...rest}>{children}</Row>;
  }
  return <Col xs={xs ? xs * 2 : undefined} sm={sm ? sm * 2 : undefined} style={{ ...(sx || {}), ...(style || {}) }} {...rest}>{children}</Col>;
}

export function IconButton(props: React.ComponentProps<typeof AntButton>) {
  return <AntButton shape="circle" {...props} />;
}

export const Tooltip = AntTooltip;
export function TextField({ multiline, minRows, maxRows, fullWidth, sx, style, ...props }: TextFieldProps) {
  if (multiline) {
    return (
      <Input.TextArea
        autoSize={{ minRows, maxRows }}
        style={{ width: fullWidth ? '100%' : undefined, ...(sx || {}), ...(style || {}) }}
        {...props}
      />
    );
  }
  return <Input style={{ width: fullWidth ? '100%' : undefined, ...(sx || {}), ...(style || {}) }} {...props} />;
}

export const Divider = AntDivider;

export function Paper({ sx, style, ...props }: PaperProps) {
  return <AntCard bordered style={{ ...(sx || {}), ...(style || {}) }} {...props} />;
}

export function CardHeader({ heading, action, sx, style, ...rest }: CardHeaderProps) {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px', ...(sx || {}), ...(style || {}) }} {...rest}>
      <div>{heading}</div>
      {action}
    </div>
  );
}
