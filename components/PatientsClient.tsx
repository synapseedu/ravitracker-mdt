'use client'
import { useEffect, useState } from 'react'
import {
  Container,
  Box,
  Typography,
  Paper,
  Button,
} from '@mui/material'
import { allPatients, Patient, getAge } from '../data/patients'

export default function PatientsClient() {
  const [patients, setPatients]       = useState<Patient[]>(allPatients)
  const [presentedIds, setPresented]  = useState<string[]>([])
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
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="md">
        <Typography variant="h4" align="center" gutterBottom>
          Patients to Present
        </Typography>
        <Box display="flex" flexDirection="column" gap={3}>
          {patients.length === 0 ? (
            <Typography align="center">All patients presented!</Typography>
          ) : (
            patients.map((p) => {
              const done = presentedIds.includes(p.id)
              return (
                <Paper
                  key={p.id}
                  elevation={done ? 1 : 3}
                  sx={{
                    p: 3,
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    bgcolor: done ? 'grey.50' : 'background.paper',
                    opacity: done ? 0.6 : 1,
                    borderRadius: 2,
                  }}
                >
                  <Box>
                    <Typography variant="h6" component="div">
                      {p.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      DOB: {p.dob} &nbsp;|&nbsp; Age: {getAge(p.dob)}
                    </Typography>
                    <Box mt={1}>
                      <Typography variant="body1" component="span" fontWeight={600}>
                        Referring:
                      </Typography>{' '}
                      {p.referring}
                      <br />
                      <Typography variant="body1" component="span" fontWeight={600}>
                        Consulting:
                      </Typography>{' '}
                      {p.consulting}
                    </Box>
                  </Box>
                  <Button
                    variant={done ? 'contained' : 'outlined'}
                    color={done ? 'success' : 'primary'}
                    onClick={() => toggle(p.id)}
                    sx={{ minWidth: 120 }}
                  >
                    {done ? 'Presented' : 'Present'}
                  </Button>
                </Paper>
              )
            })
          )}
        </Box>
      </Container>
    </Box>
  )
}
