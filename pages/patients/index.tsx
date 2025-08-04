'use client'

import { useState } from 'react'
import { List, Card, Button, Tag, Typography, Checkbox, Space } from 'antd'
import { allPatients, Patient, getAge } from '../../data/patients'

export default function Patients() {
    /* keep only runtime state */
    const [presentedIds, setPresentedIds] = useState<string[]>([])
    const [filters, setFilters] = useState({
        Hansen: true,
        Bhindi: true,
        TAVI: true,
        MitraClip: true,
        TriClip: true,
        Presented: true,
        Private: true,
        Public: true,
    })

    const filteredPatients = allPatients.filter((patient) => {
        if (!filters.Hansen && patient.consulting.includes('Hansen')) return false
        if (!filters.Bhindi && patient.consulting.includes('Bhindi')) return false
        if (!filters.TAVI && patient.badges?.includes('TAVI')) return false
        if (!filters.MitraClip && patient.badges?.includes('MitraClip')) return false
        if (!filters.TriClip && patient.badges?.includes('TriClip')) return false
        if (!filters.Private && patient.status === 'private') return false
        if (!filters.Public && patient.status === 'public') return false
        if (!filters.Presented && presentedIds.includes(patient.id)) return false
        return true
    })

    const handleFilterChange = (name: keyof typeof filters) => (e: any) => {
        setFilters((prev) => ({ ...prev, [name]: e.target.checked }))
    }

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
            <Space style={{ marginBottom: 16 }} wrap>
                <Checkbox
                    checked={filters.Hansen}
                    onChange={handleFilterChange('Hansen')}
                >
                    Hansen
                </Checkbox>
                <Checkbox
                    checked={filters.Bhindi}
                    onChange={handleFilterChange('Bhindi')}
                >
                    Bhindi
                </Checkbox>
                <Checkbox
                    checked={filters.TAVI}
                    onChange={handleFilterChange('TAVI')}
                >
                    TAVI
                </Checkbox>
                <Checkbox
                    checked={filters.MitraClip}
                    onChange={handleFilterChange('MitraClip')}
                >
                    MitraClip
                </Checkbox>
                <Checkbox
                    checked={filters.TriClip}
                    onChange={handleFilterChange('TriClip')}
                >
                    TriClip
                </Checkbox>
                <Checkbox
                    checked={filters.Presented}
                    onChange={handleFilterChange('Presented')}
                >
                    Presented
                </Checkbox>
                <Checkbox
                    checked={filters.Private}
                    onChange={handleFilterChange('Private')}
                >
                    Private
                </Checkbox>
                <Checkbox
                    checked={filters.Public}
                    onChange={handleFilterChange('Public')}
                >
                    Public
                </Checkbox>
            </Space>
            {filteredPatients.length === 0 ? (
                <Typography.Text>No patients match filters</Typography.Text>
            ) : (
                <List
                    itemLayout="vertical"
                    dataSource={filteredPatients}
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
