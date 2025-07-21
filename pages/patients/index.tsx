// pages/patients/index.tsx
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
} from '@mui/material'
import { allPatients, Patient, getAge } from '../../data/patients'

export default function Patients() {
    const [patients, setPatients] = useState<Patient[]>(allPatients)
    const [presentedIds, setPresentedIds] = useState<string[]>([])
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
                            <Card
                                key={patient.id}
                                elevation={isPresented ? 1 : 3}
                                sx={{ bgcolor: isPresented ? 'grey.50' : 'background.paper', opacity: isPresented ? 0.6 : 1 }}
                            >
                                <CardContent>
                                    <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
                                        <Box>
                                            <Stack direction="row" alignItems="center" spacing={1}>
                                                <Typography variant="h6" component="div">
                                                    {patient.name}
                                                </Typography>
                                                {patient.status === 'private' && (
                                                    <Chip label="NSP" color="primary" size="small" />
                                                )}
                                            </Stack>
                                            <Typography variant="body2" color="text.secondary" mt={0.5}>
                                                DOB: {patient.dob} &nbsp;|&nbsp; Age: {getAge(patient.dob)}
                                            </Typography>
                                            <Typography variant="body2" sx={{ mt: 1 }}>
                                                <strong>Referring:</strong> {patient.referring}
                                            </Typography>
                                            <Typography variant="body2">
                                                <strong>Consulting:</strong> {patient.consulting}
                                            </Typography>
                                        </Box>
                                        <Button
                                            variant={isPresented ? 'contained' : 'outlined'}
                                            color={isPresented ? 'success' : 'primary'}
                                            onClick={() => togglePresent(patient.id)}
                                            sx={{ minWidth: 120 }}
                                        >
                                            {isPresented ? 'Presented' : 'Present'}
                                        </Button>
                                    </Stack>
                                </CardContent>
                            </Card>
                        )
                    })
                )}
            </Box>
        </Container>
    )
}
