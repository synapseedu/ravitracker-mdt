'use client'
import { useRouter } from 'next/router'
import {
  Box,
  Container,
  Typography,
  Card,
  CardContent,
  Button,
  Grid,
} from './ui'
import { allPatients, getAge } from '../data/patients'

export default function PatientPageClient() {
  const { query } = useRouter()
  const id = Array.isArray(query.id) ? query.id[0] : query.id
  const patient = typeof id === 'string'
    ? allPatients.find(p => p.id === id) || null
    : null

  if (!patient) {
    return (
      <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', padding: '32px 0' }}>
        <Container maxWidth="sm">
          <Typography variant="h6">Patient not found</Typography>
        </Container>
      </Box>
    )
  }

  const complete = () => {
    const pres: string[] = JSON.parse(sessionStorage.getItem('presentedPatients') || '[]')
    sessionStorage.setItem(
      'presentedPatients',
      JSON.stringify(pres.filter(x => x !== patient.id))
    )
    const done: string[] = JSON.parse(sessionStorage.getItem('completedPatients') || '[]')
    if (!done.includes(patient.id)) {
      done.push(patient.id)
      sessionStorage.setItem('completedPatients', JSON.stringify(done))
    }
    window.close()
  }

  return (
    <Box sx={{ backgroundColor: 'background.default', minHeight: '100vh', padding: '32px 0' }}>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography variant="h4" gutterBottom>
              {patient.name}
            </Typography>
          <Grid container spacing={2} sx={{ marginBottom: 16 }}>
            <Grid xs={6}>
              <Typography variant="subtitle2">DOB</Typography>
              <Typography>{patient.dob}</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography variant="subtitle2">Age</Typography>
              <Typography>{getAge(patient.dob)}</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography variant="subtitle2">Referring</Typography>
              <Typography>{patient.referring}</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography variant="subtitle2">Consulting</Typography>
              <Typography>{patient.consulting}</Typography>
            </Grid>
          </Grid>
            <Button variant="contained" fullWidth sx={{ marginTop: 24 }} onClick={complete}>
              Complete Presentation
            </Button>
          </CardContent>
        </Card>
      </Container>
    </Box>
  )
}
