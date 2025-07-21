// pages/patients/index.tsx
'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import {
    Container,
    Box,
    Typography,
    Grid,
    Paper,
    Button,
} from '@mui/material'
import { allPatients, Patient, getAge } from '../../data/patients'

export default function Patients() {
    const [patients, setPatients] = useState<Patient[]>(allPatients)
    const [presentedIds, setPresentedIds] = useState<string[]>([])
    const router = useRouter()

    // Redirect to login if not authenticated
    useEffect(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('loggedIn') !== 'true') {
            router.push('/login')
        }
    }, [router])

    // Load from sessionStorage
    useEffect(() => {
        const storedList = sessionStorage.getItem('patientsList')
        const storedPresented = sessionStorage.getItem('presentedPatients')
        if (storedList) setPatients(JSON.parse(storedList))
        if (storedPresented) setPresentedIds(JSON.parse(storedPresented))
    }, [])

    // Save to sessionStorage
    useEffect(() => {
        sessionStorage.setItem('patientsList', JSON.stringify(patients))
        sessionStorage.setItem('presentedPatients', JSON.stringify(presentedIds))
    }, [patients, presentedIds])

    const togglePresent = (id: string) => {
        if (presentedIds.includes(id)) {
            setPresentedIds(presentedIds.filter((pid) => pid !== id))
        } else {
            setPresentedIds([...presentedIds, id])
            window.open(`/patients/${id}`, '_blank', 'noopener')
        }
    }

    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h4" align="center" gutterBottom>
                Patients to Present
            </Typography>
            <Box display="flex" flexDirection="column" gap={3}>
                {patients.length === 0 ? (
                    <Typography align="center">All patients presented!</Typography>
                ) : (
                    patients.map((patient) => {
                        const isPresented = presentedIds.includes(patient.id)
                        return (
                            <Paper
                                key={patient.id}
                                elevation={isPresented ? 1 : 3}
                                sx={{
                                    p: 3,
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    bgcolor: isPresented ? 'grey.50' : 'background.paper',
                                    opacity: isPresented ? 0.6 : 1,
                                    borderRadius: 2,
                                }}
                            >
                                <Box>
                                    <Box display="flex" alignItems="center" gap={1}>
                                        <Typography variant="h6" component="div">
                                            {patient.name}
                                        </Typography>
                                        {patient.status === 'private' && (
                                            <Box
                                                sx={{
                                                    px: 1.2,
                                                    py: 0.2,
                                                    bgcolor: '#1976d2',
                                                    color: '#fff',
                                                    borderRadius: 1,
                                                    fontWeight: 700,
                                                    fontSize: 13,
                                                    letterSpacing: 1,
                                                    ml: 1,
                                                }}
                                            >
                                                NSP
                                            </Box>
                                        )}
                                    </Box>
                                    <Typography variant="body2" color="text.secondary">
                                        DOB: {patient.dob} &nbsp;|&nbsp; Age: {getAge(patient.dob)}
                                    </Typography>
                                    <Box mt={1}>
                                        <Typography variant="body1" component="span" fontWeight={600}>
                                            Referring:
                                        </Typography>{' '}
                                        {patient.referring}
                                        <br />
                                        <Typography variant="body1" component="span" fontWeight={600}>
                                            Consulting:
                                        </Typography>{' '}
                                        {patient.consulting}
                                    </Box>
                                </Box>
                                <Button
                                    variant={isPresented ? 'contained' : 'outlined'}
                                    color={isPresented ? 'success' : 'primary'}
                                    onClick={() => togglePresent(patient.id)}
                                    sx={{ minWidth: 120 }}
                                >
                                    {isPresented ? 'Presented' : 'Present'}
                                </Button>
                            </Paper>
                        )
                    })
                )}
            </Box>
        </Container>
    )
}
