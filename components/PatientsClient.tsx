'use client'
import { useEffect, useState } from 'react'
import {
  Container,
  Box,
  Typography,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
} from './ui'
import { allPatients, Patient, getAge } from '../data/patients'

export default function PatientsClient() {
  const [patients] = useState<Patient[]>(allPatients)
  const [presentedIds, setPresented]  = useState<string[]>([])
  const [completedIds, setCompleted]  = useState<string[]>([])
  // hydrate from sessionStorage
  useEffect(() => {
    const pP = sessionStorage.getItem('presentedPatients')
    const cP = sessionStorage.getItem('completedPatients')
    if (pP) setPresented(JSON.parse(pP))
    if (cP) setCompleted(JSON.parse(cP))
  }, [])

  // persist on change
  useEffect(() => {
    sessionStorage.setItem('presentedPatients', JSON.stringify(presentedIds))
    sessionStorage.setItem('completedPatients', JSON.stringify(completedIds))
  }, [presentedIds, completedIds])

  const toggle = (id: string) => {
    if (presentedIds.includes(id)) {
      setPresented(presentedIds.filter(x => x !== id))
    } else {
      setPresented([...presentedIds, id])
      window.open(`/patients/${id}`, '_blank', 'noopener')
    }
  }

  const visiblePatients = patients.filter(p => !completedIds.includes(p.id))

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', padding: '32px 0' }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Patients to Present
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {visiblePatients.length === 0 ? (
            <Typography align="center">All patients presented!</Typography>
          ) : (
            visiblePatients.map((p) => {
              const done = presentedIds.includes(p.id)
              return (
                <Card
                  key={p.id}
                  sx={{ backgroundColor: done ? 'grey.50' : 'background.paper', opacity: done ? 0.6 : 1 }}
                >
                  <CardContent>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                      <Box>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Typography variant="h6">
                            {p.name}
                          </Typography>
                          {p.status === 'private' && (
                            <Chip label="NSP" color="primary" />
                          )}
                        </Stack>
                        <Typography color="text.secondary" sx={{ marginTop: 4 }}>
                          DOB: {p.dob} &nbsp;|&nbsp; Age: {getAge(p.dob)}
                        </Typography>
                        <Typography sx={{ marginTop: 8 }}>
                          <strong>Referring:</strong> {p.referring}
                        </Typography>
                        <Typography>
                          <strong>Consulting:</strong> {p.consulting}
                        </Typography>
                      </Box>
                      <Button
                        variant={done ? 'contained' : 'outlined'}
                        onClick={() => toggle(p.id)}
                        sx={{ minWidth: 120 }}
                      >
                        {done ? 'Presented' : 'Present'}
                      </Button>
                    </Stack>
                  </CardContent>
                </Card>
              )
            })
          )}
        </Box>
      </Container>
    </Box>
  )
}
