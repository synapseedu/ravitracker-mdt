'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Layout, List, Card, Button, Typography } from 'antd'
import { allPatients, Patient, getAge } from '../data/patients'

const { Content } = Layout
const { Title, Text } = Typography

export default function PatientsClient() {
  const [patients, setPatients]       = useState<Patient[]>(allPatients)
  const [presentedIds, setPresented]  = useState<string[]>([])
  const router = useRouter()

  // redirect if not logged in
  useEffect(() => {
    if (localStorage.getItem('loggedIn') !== 'true') {
      router.push('/login')
    }
  }, [router])

  // hydrate from sessionStorage
  useEffect(() => {
    const pL = sessionStorage.getItem('patientsList')
    const pP = sessionStorage.getItem('presentedPatients')
    if (pL) setPatients(JSON.parse(pL))
    if (pP) setPresented(JSON.parse(pP))
  }, [])

  // persist on change
  useEffect(() => {
    sessionStorage.setItem('patientsList', JSON.stringify(patients))
    sessionStorage.setItem('presentedPatients', JSON.stringify(presentedIds))
  }, [patients, presentedIds])

  const toggle = (id: string) => {
    if (presentedIds.includes(id)) {
      setPresented(presentedIds.filter(x => x !== id))
    } else {
      setPresented([...presentedIds, id])
      window.open(`/patients/${id}`, '_blank', 'noopener')
    }
  }

  return (
    <Layout style={{ minHeight: '100vh', background: '#f0f2f5' }}>
      <Content style={{ maxWidth: 900, margin: '40px auto', padding: '0 16px' }}>
        <Title level={2} style={{ textAlign: 'center', margin: '24px 0' }}>
          Patients to Present
        </Title>
        <List
          dataSource={patients}
          locale={{ emptyText: 'All patients presented!' }}
          renderItem={p => {
            const done = presentedIds.includes(p.id)
            return (
              <List.Item
                key={p.id}
                style={{ border: 'none', marginBottom: 24, display: 'flex', justifyContent: 'center' }}
              >
                <Card
                  style={{
                    width: '90%',
                    maxWidth: 700,
                    background: done ? '#fafafa' : '#fff',
                    boxShadow: done
                      ? '0 2px 16px rgba(82,196,26,0.10)'
                      : '0 4px 24px rgba(24,144,255,0.13),0 2px 8px rgba(0,0,0,0.03)',
                    borderRadius: 12,
                    opacity: done ? 0.6 : 1,
                    transition: 'box-shadow .2s, opacity .2s',
                  }}
                  bodyStyle={{ padding: 24 }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>
                      <Text strong style={{ fontSize: 20 }}>{p.name}</Text>
                      <div style={{ color: '#888', marginTop: 8 }}>
                        <Text>DOB:</Text> {p.dob} | <Text>Age:</Text> {getAge(p.dob)}
                      </div>
                      <div style={{ marginTop: 12, fontSize: 16 }}>
                        <Text strong>Referring:</Text> {p.referring}<br/>
                        <Text strong>Consulting:</Text> {p.consulting}
                      </div>
                    </div>
                    <Button
                      type={done ? 'default' : 'primary'}
                      style={{
                        minWidth: 110,
                        background: done ? '#52c41a' : undefined,
                        borderColor: done ? '#52c41a' : undefined,
                        color: done ? '#fff' : undefined,
                      }}
                      onClick={() => toggle(p.id)}
                    >
                      {done ? 'Presented' : 'Present'}
                    </Button>
                  </div>
                </Card>
              </List.Item>
            )
          }}
        />
      </Content>
    </Layout>
  )
}
