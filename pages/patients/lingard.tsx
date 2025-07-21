'use client'
import React, { useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import { useRouter } from 'next/router'
import {
    Box,
    Container,
    Typography,
    Card,
    CardContent,
    Stack,
    IconButton,
    Tooltip,
    TextField,
} from '@mui/material'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'
import { getAge } from '../../data/patients'

const sectionTitleSx = {
    color: 'primary.main',
    fontWeight: 600,
    fontSize: 18,
    mb: 1,
}

const mainTitleSx = {
    color: 'primary.main',
    fontWeight: 700,
    mb: 2,
}

const pdfMap: Record<string, string[]> = {
    ct: ['Lingard CT TAVI.pdf', 'Lingard medtronic.pdf'],
    tte: ['Lingard referral.pdf', 'Lingard TTE march 2025.pdf'],
    angio: ['Lingard angio.pdf'],
    bloods: [],
    correspond: ['Lingard Dr Bassin.pdf', 'Lingard Dr Kumar Jan 2025.pdf'],
    mdt: ['Lingard MDT.docx'],
}

function PdfIcons({ files }: { files?: string[] }) {
    if (!Array.isArray(files) || files.length === 0) return null
    return (
        <Stack direction="row" spacing={1} ml={1}>
            {files.map((file) => (
                <Tooltip title={file} key={file}>
                    <IconButton
                        component="a"
                        href={`/pdfs/${encodeURIComponent(file)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        size="small"
                    >
                        <PictureAsPdfIcon fontSize="small" />
                    </IconButton>
                </Tooltip>
            ))}
        </Stack>
    )
}

const MDT_KEY = 'lingard_mdt_notes'
function EditableMDTMeeting() {
    const [notes, setNotes] = useState('')
    useEffect(() => {
        const stored = sessionStorage.getItem(MDT_KEY)
        if (stored) setNotes(stored)
    }, [])
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const v = e.target.value
        setNotes(v)
        sessionStorage.setItem(MDT_KEY, v)
    }
    return (
        <TextField
            fullWidth
            multiline
            minRows={4}
            maxRows={12}
            value={notes}
            placeholder="Type or paste MDT notes and outcomes here. (Saved in session only)"
            onChange={handleChange}
            variant="outlined"
            sx={{ mt: 1 }}
        />
    )
}

export default function LingardPatientPage() {
    const router = useRouter()
    useEffect(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('loggedIn') !== 'true') {
            router.replace('/login')
        }
    }, [router])

    const patient = {
        name: 'Maggie Lingard',
        dob: '24/09/1958',
        mrn: '0520968',
        referralDate: '17/4/25',
        structuralPhysician: 'Dr Bhindi',
        referrer: 'Dr Wong',
        contact: '0458 476 412',
        background: [
            'Hypertension',
            'Hypercholesterolaemia',
            'Depression',
            'Bladder incontinence',
            'Spinal stenosis with L1 compression',
            'Obstructive sleep apnoea (on CPAP)',
            'CKD stage 3',
        ],
        medications: [
            'Apixaban 5 mg bd',
            'Endep 10 mg nocte',
            'Frusemide 20 mg daily',
            'Ivabradine 5 mg',
            'Atorvastatin 20 mg',
            'Mirtazapine 30 mg mane',
            'Zan-Extra 10/10 mg',
            'Sertraline 100 mg nocte',
        ],
        socialStatus: (
            <>
                Lives at home with dog; son in Sydney/Central Coast.<br />
                Mobilises with 4-wheel walker at home, wheelchair for outdoors.<br />
                Independent with personal ADLs; NDIS supports (physio/OT).<br />
                No driving.<br />
                Non-smoker, nil alcohol.<br />
                <strong>Symptoms (last 12 months):</strong> Progressive SOBOE, fatigue, occasional chest discomfort and dizziness, orthopnoea (sleeps at 45°), occasional oedema, no syncope.
            </>
        ),
        tteData: {
            'LV EF': '55%',
            AVA: '0.6',
            AVAi: '0.3',
            'Peak Gradient': '73',
            'Mean Gradient': '42',
            'Peak AV velocity': '4.2',
            MR: 'Normal',
        },
        angio: 'Minor coronary artery disease.',
        ecg: 'Atrial fibrillation.',
        ctIncidentals: 'Nil incidentals',
        bloods: {
            Hb: '118',
            Creatinine: '110',
            eGFR: '45',
        },
        otherConsults: {
            'Cardiothoracic Surgeon': 'Dr Bassin',
        },
    }

    return (
        <Box sx={{ bgcolor: 'background.paper', py: 4, minHeight: '100vh' }}>
            <Container maxWidth="md">
                <Box sx={{ background: '#fff', p: 3, borderRadius: 2, boxShadow: 2 }}>
                    <Typography variant="h4" sx={mainTitleSx}>
                        {patient.name}
                    </Typography>

                    {/* Demographics */}
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid item xs={6} sm={3}>
                            <Typography variant="subtitle2">DOB</Typography>
                            <Typography>{patient.dob}</Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Typography variant="subtitle2">MRN</Typography>
                            <Typography>{patient.mrn}</Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Typography variant="subtitle2">Referral Date</Typography>
                            <Typography>{patient.referralDate}</Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Typography variant="subtitle2">Contact</Typography>
                            <Typography>{patient.contact}</Typography>
                        </Grid>
                    </Grid>

                    {/* Background & Medications */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography sx={sectionTitleSx}>Background & Medications</Typography>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                                <Box>
                                    <Typography fontWeight={600}>History:</Typography>
                                    <ul>
                                        {patient.background.map((b) => (
                                            <li key={b}>{b}</li>
                                        ))}
                                    </ul>
                                </Box>
                                <Box>
                                    <Typography fontWeight={600}>Meds:</Typography>
                                    <ul>
                                        {patient.medications.map((m) => (
                                            <li key={m}>{m}</li>
                                        ))}
                                    </ul>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>

                    {/* Social / Functional */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography sx={sectionTitleSx}>Social & Functional</Typography>
                            <Typography>{patient.socialStatus}</Typography>
                        </CardContent>
                    </Card>

                    {/* TTE */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography sx={sectionTitleSx}>TTE</Typography>
                                <PdfIcons files={pdfMap.tte} />
                            </Box>
                            <Grid container spacing={1} sx={{ mt: 1 }}>
                                {Object.entries(patient.tteData).map(([k, v]) => (
                                    <Grid item xs={6} key={k}>
                                        <Typography variant="body2">
                                            <strong>{k}:</strong> {v}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </CardContent>
                    </Card>

                    {/* Angio/ECG */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography sx={sectionTitleSx}>Angio / ECG</Typography>
                                <PdfIcons files={pdfMap.angio} />
                            </Box>
                            <Typography>
                                <strong>Angio:</strong> {patient.angio}
                            </Typography>
                            <Typography>
                                <strong>ECG:</strong> {patient.ecg}
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* CT TAVI */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography sx={sectionTitleSx}>CT TAVI</Typography>
                                <PdfIcons files={pdfMap.ct} />
                            </Box>
                            <Typography>
                                <strong>Incidentals:</strong> {patient.ctIncidentals}
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Bloods */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography sx={sectionTitleSx}>Bloods</Typography>
                                <PdfIcons files={pdfMap.bloods} />
                            </Box>
                            <Grid container spacing={1} sx={{ mt: 1 }}>
                                {Object.entries(patient.bloods).map(([k, v]) => (
                                    <Grid item xs={6} key={k}>
                                        <Typography variant="body2">
                                            <strong>{k}:</strong> {v}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </CardContent>
                    </Card>

                    {/* Consults */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography sx={sectionTitleSx}>Consults</Typography>
                                <PdfIcons files={pdfMap.correspond} />
                            </Box>
                            <Grid container spacing={1} sx={{ mt: 1 }}>
                                {Object.entries(patient.otherConsults).map(([k, v]) => (
                                    <Grid item xs={6} key={k}>
                                        <Typography variant="body2">
                                            <strong>{k}:</strong> {v || '—'}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </CardContent>
                    </Card>

                    {/* MDT Notes */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography sx={sectionTitleSx}>MDT Meeting Notes</Typography>
                            <EditableMDTMeeting />
                        </CardContent>
                    </Card>
                </Box>
            </Container>
        </Box>
    )
}
