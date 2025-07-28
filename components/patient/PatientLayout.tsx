// ────────────────────────────────────────────────────────────────────────────
// components/PatientLayout.tsx
// ────────────────────────────────────────────────────────────────────────────
'use client';
import { Layout, Typography } from 'antd';
import { ReactNode } from 'react';
import { PRIMARY } from './theme';

const { Content, Header } = Layout;
const { Title } = Typography;

export default function PatientLayout({ title, children }: { title: ReactNode; children: ReactNode }) {
    return (
        <Layout style={{ background: '#fff', minHeight: '100vh' }}>
            <Header style={{ background: '#fff', padding: 0, marginBottom: 24 }}>
                <Title level={3} style={{ color: PRIMARY, margin: 0, padding: '16px 24px' }}>
                    {title}
                </Title>
            </Header>
            <Content style={{ padding: '0 24px 48px' }}>{children}</Content>
        </Layout>
    );
}

