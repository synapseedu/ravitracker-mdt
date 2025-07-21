'use client'
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/GridLegacy'
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
    Divider,
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
    tte: [
        'GAFFNEY_MARIAN_ sev as tte _08072025_MG180743.pdf',
        'TTE GAFFNEY_MARIAN_18071943_11022025_MG180743 (1).pdf',
    ],
    angio: ['Gaffney Angio.pdf'],
    bloods: [],
    correspond: [
        'gaffney dr warrier.pdf',
        'gaffney endorine.pdf',
        'Gaffney Garrick Don rv.pdf',
        'gaffney gastro.pdf'
    ],
    mdt: ['Gaffney NSP TAVI Workup + MDT Template v1.docx'],
    other: ['MG 18.7.43.pdf'],
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

const MDT_KEY = 'gaffney_mdt_notes'
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

export default function GaffneyPatientPage() {
    const patient = {
        name: 'Marian Gaffney',
        dob: '1943-07-18',
        mrn: 'ME00143507',
        referralDate: '',
        structuralPhysician: '',
        referrer: 'Dr Usaid Allahwala',
        contact: '02 9877 0498',
        weight: '73kg',
        height: '155cm',
        background: [
            'T2DM',
            'CLL (Dr. Raymond McKinley)',
            'Multinodular goitre (mild hyperthyroidism)',
            'Acromegaly (Dr Rory Clifton-Bligh)',
            'Pituitary tumour resected Sep 2023 (Dr Little)',
            'Hypertension',
            'Colonic polyps',
            'Ventricular ectopy',
            'Hypercholesterolaemia',
            'GORD'
        ],
        medications: [
            'Azopt 1% eye drops 1 drop BD b/l',
            'Metoprolol 50mg BD',
            'Rosuvastatin 5mg ON',
            'Metformin XR 1g ON',
            'Ferrograd C (iron/vit C) 325mg:500mg 1 tab 2x/week',
            'Magnesium 500mg OD',
            'Clopidogrel 75mg OD',
            'Poly gel 0.3% eye gel OD PRN',
            'Pantoprazole 40mg BD'
        ],
        allergies: 'NKDA',
        socialStatus: (
            <>
                Lives alone.<br />
                Retired secretary.<br />
                Mobilises with stick.<br />
                Non-smoker.<br />
                Very occasional alcohol.
            </>
        ),
        functional: (
            <>
                NYHA III.<br />
                Worsening SOBOE (6–12 months).<br />
                ET 100m.
            </>
        ),
        tteData: {
            'LV EF': '65%',
            'Peak Gradient': '64',
            'Mean Gradient': '38',
            'SVI': '38 mL/m2',
            'Peak AV': '400 cm/s',
            'MR': 'Mild',
            'AR': 'Trivial',
            'Comments': 'Trileaflet aortic valve. Markedly thickened and calcified leaflets. Severe stenosis. Marked posterior mitral annular calcification. Mild mitral stenosis and regurgitation.',
        },
        angio: (
            <>
                Patent stent in LCx, mild disease elsewhere.
            </>
        ),
        ecg: 'SR, 1st degree PR, ventricular ectopics',
        bloods: {
            MOCA: '27/30',
            Hb: '135',
            Plts: '143',
            Cre: '49',
            eGFR: '88',
            Albumin: '40',
            WBC: '11.1',
        },
        frailtyScore: '4',
        agedCare: 'Likely appropriate for TAVI. May need rehab post-TAVI due to functional decline related to SOB.',
        consults: {},
    }

    return (
        <Box sx={{ bgcolor: 'background.paper', py: 4, minHeight: '100vh' }}>
            <Container maxWidth="md">
                <Box sx={{ background: '#fff', p: 3, borderRadius: 2, boxShadow: 2 }}>
                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                        <Typography variant="h4" sx={mainTitleSx}>
                            {patient.name}
                        </Typography>
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
                            }}
                        >
                            NSP
                        </Box>
                    </Box>

                    {/* Demographics */}
                    <Grid container spacing={2} sx={{ mb: 3 }}>
                        <Grid xs={6} sm={3}>
                            <Typography variant="subtitle2">DOB</Typography>
                            <Typography>{patient.dob}</Typography>
                        </Grid>
                        <Grid xs={6} sm={3}>
                            <Typography variant="subtitle2">MRN</Typography>
                            <Typography>{patient.mrn}</Typography>
                        </Grid>
                        <Grid xs={6} sm={3}>
                            <Typography variant="subtitle2">Contact</Typography>
                            <Typography>{patient.contact}</Typography>
                        </Grid>
                        <Grid xs={6} sm={3}>
                            <Typography variant="subtitle2">Referrer</Typography>
                            <Typography>{patient.referrer}</Typography>
                        </Grid>
                    </Grid>

                    {/* Social & Functional */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography sx={sectionTitleSx}>Social & Functional</Typography>
                            <Typography>{patient.socialStatus}</Typography>
                            <Divider sx={{ my: 2 }} />
                            <Typography fontWeight={600}>Current Symptoms / Function:</Typography>
                            <Typography>{patient.functional}</Typography>
                        </CardContent>
                    </Card>

                    {/* Background & Medications */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                                <Box>
                                    <Typography fontWeight={600}>Background:</Typography>
                                    <ul>
                                        {patient.background.map((b) => (
                                            <li key={b}>{b}</li>
                                        ))}
                                    </ul>
                                </Box>
                                <Box>
                                    <Typography fontWeight={600}>Medications:</Typography>
                                    <ul>
                                        {patient.medications.map((m) => (
                                            <li key={m}>{m}</li>
                                        ))}
                                    </ul>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>

                    {/* TTE */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography sx={sectionTitleSx}>TTE 08/07/2025</Typography>
                                <PdfIcons files={pdfMap.tte} />
                            </Box>
                            <Grid container spacing={1} sx={{ mt: 1 }}>
                                {Object.entries(patient.tteData).map(([k, v]) => (
                                    <Grid xs={6} key={k}>
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
                            <Typography sx={{ mt: 1 }}>{patient.angio}</Typography>
                            <Typography>
                                <strong>ECG:</strong> {patient.ecg}
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Bloods */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography sx={sectionTitleSx}>Bloods</Typography>
                            <Grid container spacing={1} sx={{ mt: 1 }}>
                                {Object.entries(patient.bloods).map(([k, v]) => (
                                    <Grid xs={6} key={k}>
                                        <Typography variant="body2">
                                            <strong>{k}:</strong> {v}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="body2"><strong>MOCA:</strong> 27/30</Typography>
                            <Typography variant="body2"><strong>Frailty Score:</strong> 4</Typography>
                        </CardContent>
                    </Card>

                    {/* Aged Care */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography sx={sectionTitleSx}>Aged Care</Typography>
                            <Typography>{patient.agedCare}</Typography>
                        </CardContent>
                    </Card>

                    {/* Correspondence */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography sx={sectionTitleSx}>Correspondence</Typography>
                                <PdfIcons files={pdfMap.correspond} />
                            </Box>
                        </CardContent>
                    </Card>

                    {/* MDT Meeting Notes */}
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
