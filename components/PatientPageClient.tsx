'use client'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Layout, Card, Descriptions, Button, Typography } from 'antd'
import { allPatients, Patient, getAge } from '../data/patients'

const { Content } = Layout
const { Title } = Typography

export default function PatientPageClient() {
  const { query, push } = useRouter()
  const id = Array.isArray(query.id) ? query.id[0] : query.id
  const patient = typeof id === 'string'
    ? allPatients.find(p => p.id === id) || null
    : null

  if (!patient) {
    return (
      <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
        <Content style={{ maxWidth: 700, margin: '40px auto', padding: 32 }}>
          <Title level={3}>Patient not found</Title>
        </Content>
      </Layout>
    )
  }

  const complete = () => {
    const pres: string[] = JSON.parse(sessionStorage.getItem('presentedPatients')||'[]')
    sessionStorage.setItem(
      'presentedPatients',
      JSON.stringify(pres.filter(x => x !== patient.id))
    )
    const list: Patient[] = JSON.parse(sessionStorage.getItem('patientsList')||'[]')
    sessionStorage.setItem(
      'patientsList',
      JSON.stringify(list.filter(x => x.id !== patient.id))
    )
    window.close()
  }

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Content
        style={{
          maxWidth: 700,
          margin: '40px auto',
          background: '#fff',
          padding: 32,
          borderRadius: 12,
        }}
      >
        <Title level={2}>{patient.name}</Title>
        <Descriptions bordered column={2} size="small">
          <Descriptions.Item label="DOB">{patient.dob}</Descriptions.Item>
          <Descriptions.Item label="Age">{getAge(patient.dob)}</Descriptions.Item>
          <Descriptions.Item label="Referring">{patient.referring}</Descriptions.Item>
          <Descriptions.Item label="Consulting">{patient.consulting}</Descriptions.Item>
        </Descriptions>
        <Button type="primary" block style={{ marginTop: 24 }} onClick={complete}>
          Complete Presentation
        </Button>
      </Content>
    </Layout>
  )
}
