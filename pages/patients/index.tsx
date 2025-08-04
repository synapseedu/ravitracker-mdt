'use client'

import { useState } from 'react'
import { List, Card, Button, Tag, Typography } from 'antd'
import { allPatients, Patient, getAge } from '../../data/patients'

export default function Patients() {
    /* keep only runtime state */
    const [presentedIds, setPresentedIds] = useState<string[]>([])

    const togglePresent = (id: string) => {
        setPresentedIds((prev) =>
            prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
        )
        // open patient page on first present
        if (!presentedIds.includes(id)) {
            window.open(`/patients/${id}`, '_blank', 'noopener')
        }
    }

    return (
        <Card
            heading={<Typography.Title level={3}>Patients to Present</Typography.Title>}
            bordered={false}
            style={{ maxWidth: 800, margin: '32px auto' }}
        >
            {allPatients.length === 0 ? (
                <Typography.Text>All patients presented!</Typography.Text>
            ) : (
                <List
                    itemLayout="vertical"
                    dataSource={allPatients}
                    renderItem={(patient: Patient) => {
                        const presented = presentedIds.includes(patient.id)
                        return (
                            <List.Item key={patient.id} style={{ opacity: presented ? 0.6 : 1 }}>
                                <Card
                                    size="small"
                                    bordered={presented}
                                    style={{ background: presented ? '#fafafa' : undefined }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            justifyContent: 'space-between',
                                            alignItems: 'center',
                                            marginBottom: 4,
                                        }}
                                    >
                                        <Typography.Title level={5} style={{ margin: 0 }}>
                                            {patient.name}{' '}
                                            {patient.status === 'private' && (
                                                <Tag color="blue">NSP</Tag>
                                            )}
                                            {patient.badges?.map((badge) => (
                                                <Tag key={badge} color="purple">
                                                    {badge}
                                                </Tag>
                                            ))}
                                        </Typography.Title>

                                        <Button
                                            type={presented ? 'default' : 'primary'}
                                            onClick={() => togglePresent(patient.id)}
                                        >
                                            {presented ? 'Presented' : 'Present'}
                                        </Button>
                                    </div>

                                    <Typography.Text type="secondary">
                                        DOB: {patient.dob} | Age: {getAge(patient.dob)}
                                    </Typography.Text>
                                    <br />
                                    <Typography.Text>
                                        <strong>Referring:</strong> {patient.referring}
                                    </Typography.Text>
                                    <br />
                                    <Typography.Text>
                                        <strong>Consulting:</strong> {patient.consulting || '—'}
                                    </Typography.Text>
                                </Card>
                            </List.Item>
                        )
                    }}
                />
            )}
        </Card>
    )
}
