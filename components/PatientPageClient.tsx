'use client'
import { useRouter } from 'next/router'
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Button,
} from '@mui/material'
import { allPatients, Patient, getAge } from '../data/patients'

export default function PatientPageClient() {
  const { query } = useRouter()
  const id = Array.isArray(query.id) ? query.id[0] : query.id
  const patient = typeof id === 'string'
    ? allPatients.find(p => p.id === id) || null
    : null

  if (!patient) {
    return (
      <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
        <Container maxWidth="sm">
          <Typography variant="h6">Patient not found</Typography>
        </Container>
      </Box>
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
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', py: 4 }}>
      <Container maxWidth="sm">
        <Paper sx={{ p: 3 }}>
          <Typography variant="h4" gutterBottom>
            {patient.name}
          </Typography>
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={6}>
              <Typography variant="subtitle2">DOB</Typography>
              <Typography>{patient.dob}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Age</Typography>
              <Typography>{getAge(patient.dob)}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Referring</Typography>
              <Typography>{patient.referring}</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2">Consulting</Typography>
              <Typography>{patient.consulting}</Typography>
            </Grid>
          </Grid>
          <Button variant="contained" fullWidth sx={{ mt: 3 }} onClick={complete}>
            Complete Presentation
          </Button>
        </Paper>
      </Container>
    </Box>
  )
}
