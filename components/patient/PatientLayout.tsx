// components/PatientLayout.tsx
'use client'
import { Layout, Typography, Card } from 'antd'
import { ReactNode } from 'react'
import { PRIMARY } from './theme'

const { Content } = Layout
const { Title } = Typography

export default function PatientLayout({
    title,
    children,
}: {
    title: ReactNode
    children: ReactNode
}) {
    return (
        <Layout style={{ background: '#fff', minHeight: '100vh' }}>
            {/* centred column */}
            <Content
                style={{
                    padding: '0 24px 48px',
                    maxWidth: 960,          // same width as list page
                    margin: '0 auto',
                }}
            >
                {/* outer card */}
                <Card bodyStyle={{ padding: 24 }} bordered style={{ borderRadius: 8 }}>
                    {/* title now lives INSIDE the card */}
                    <Title
                        level={3}
                        style={{
                            color: PRIMARY,
                            margin: 0,
                            marginBottom: 24,
                        }}
                    >
                        {title}
                    </Title>

                    {children}
                </Card>
            </Content>
        </Layout>
    )
}
