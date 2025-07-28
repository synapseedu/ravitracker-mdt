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
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Patients to Present
        </Typography>
        <Box display="flex" flexDirection="column" gap={3}>
          {visiblePatients.length === 0 ? (
            <Typography align="center">All patients presented!</Typography>
          ) : (
            visiblePatients.map((p) => {
              const done = presentedIds.includes(p.id)
              return (
                <Card
                  key={p.id}
                  elevation={done ? 1 : 3}
                  sx={{ bgcolor: done ? 'grey.50' : 'background.paper', opacity: done ? 0.6 : 1 }}
                >
                  <CardContent>
                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                      <Box>
                        <Stack direction="row" alignItems="center" spacing={1}>
                          <Typography variant="h6" component="div">
                            {p.name}
                          </Typography>
                          {p.status === 'private' && (
                            <Chip label="NSP" color="primary" size="small" />
                          )}
                        </Stack>
                        <Typography variant="body2" color="text.secondary" mt={0.5}>
                          DOB: {p.dob} &nbsp;|&nbsp; Age: {getAge(p.dob)}
                        </Typography>
                        <Typography variant="body2" sx={{ mt: 1 }}>
                          <strong>Referring:</strong> {p.referring}
                        </Typography>
                        <Typography variant="body2">
                          <strong>Consulting:</strong> {p.consulting}
                        </Typography>
                      </Box>
                      <Button
                        variant={done ? 'contained' : 'outlined'}
                        color={done ? 'success' : 'primary'}
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
