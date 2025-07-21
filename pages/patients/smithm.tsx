// pages/patients/smithm.tsx
'use client'
import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/GridLegacy'
import {
    Box,
    Typography,
    Card,
    CardContent,
    Stack,
    IconButton,
    Tooltip,
    TextField,
    Divider,
} from '@mui/material'
import PatientLayout from '../../components/PatientLayout'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf'

const sectionTitleSx = {
  color: 'primary.main',
    fontWeight: 600,
    fontSize: 18,
    mb: 1,
}


const pdfMap: Record<string, string[]> = {
    ct: ['Smith.M CT TAVI.pdf'],
    tte: ['Smith.M TTE RNSH 11.7.25.PDF', 'SmitM TTE 6.2.25.pdf', 'Smith Wyong TTE.pdf'],
    angio: ['Smith.M angio 2023.pdf'],
    bloods: [],
    correspond: ['Smith.M Dr bassin.pdf'],
    mdt: ['Smith.M MDT.docx'],
    referral: ['Smith.M referral.pdf'],
    other: ['Smith.M renal letters.pdf'],
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

const MDT_KEY = 'smithm_mdt_notes'
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

export default function SmithMPatientPage() {

    const patient = {
        name: 'Marilyn Smith',
        dob: '1948-05-13',
        mrn: '0554971',
        referralDate: '', // Not provided in MDT
        structuralPhysician: 'Dr Hansen',
        referrer: 'Dr Tony Kull',
        contact: '0484 871 858',
        weight: '75kg',
        height: '154cm',
        background: [
            'End-stage renal failure (haemodialysis via L arm fistula, Mon/Wed/Fri; known to Prof Roger, 800ml fluid restriction, still makes some urine)',
            'Valvular heart disease (known to Dr Kull)',
            'Type 2 diabetes mellitus',
            'Hypercholesterolaemia',
            'Hypertension',
            'OSA',
            'Previous type 2 NSTEMI',
            'Visual aura without headache',
            'Hysteroscopy + D&C',
            'Chronic cough and runny nose (known to Dr Lee, resp physician; under investigation, not emphysema)',
        ],
        medications: [
            'Carvidilol 3.125mg',
            'Sevelamer',
            'Pariet',
            'Aspirin',
            'Vytorin 10/20mg',
            'Rocaltrol',
            'Sifrol',
            'Progout',
        ],
        socialStatus: (
            <>
                Lives at home alone with cat.<br />
                Son near Byron Bay, granddaughter in Sydney (visit often).<br />
                Independent with ALDs.<br />
                Mobilises independently, 4WW for long distance.<br />
                Services: HCP level 2 (2 hours/week cleaning and shopping).<br />
                Community nurses for lower leg (healed 19/6/25).<br />
                Ex-smoker – 15 pack-year history, quit 30 years ago.<br />
                Occasional ETOH.
            </>
        ),
        functional: (
            <>
                Heaviness in the chest on exertion, occasionally during dialysis.<br />
                Occasional fatigue and breathlessness.<br />
                Dizziness when bending over.
            </>
        ),
        tteData: {
            'LV EF': '55-60%',
            AVA: '0.9',
            AVAi: '0.5',
            'Peak Gradient': '60',
            'Mean Gradient': '33',
            'Peak AV': '3.9',
            'MR': 'Mild',
            'AR': 'Moderate',
            'SVI': '51.4',
            'Comments': 'Trileaflet aortic valve. Moderate calcification of the aortic cusps with moderately restricted excursion. Moderate-severe aortic stenosis.',
        },
        angio: 'Awaiting formal report – ?normal CAD',
        ecg: 'SR, normal PR interval and QRS',
        ctIncidentals: (
            <>
                L coronary slightly low and R SOV just undersized.<br />
                Porcelain aorta on CT chest (see renal letters).
            </>
        ),
        bloods: {
            MOCA: '30/30 (with GP)',
            Hb: '115',
            Plts: '227',
            Cre: '717',
            eGFR: '4',
            Albumin: '37',
        },
        otherConsults: {
            'Cardiothoracic Surgeon': 'Dr Bassin (2023)',
        },
    }

    return (
        <PatientLayout title={patient.name}>

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
                            <Typography variant="subtitle2">Referral Date</Typography>
                            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                                <Typography>{patient.referralDate || '—'}</Typography>
                                <PdfIcons files={pdfMap.referral} />
                            </Box>
                        </Grid>
                        <Grid xs={6} sm={3}>
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
                            <Divider sx={{ my: 2 }} />
                            <Typography fontWeight={600}>Symptoms / Function:</Typography>
                            <Typography>{patient.functional}</Typography>
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
                            <Box sx={{ mt: 2 }}>
                                <PdfIcons files={pdfMap.other} />
                            </Box>
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
                                    <Grid xs={6} key={k}>
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
                            <Typography sx={sectionTitleSx}>Consults</Typography>
                            <Grid container spacing={1} sx={{ mt: 1 }}>
                                {Object.entries(patient.otherConsults).map(([k, v]) => (
                                    <Grid xs={12} key={k}>
                                        <Typography variant="body2">
                                            <strong>{k}:</strong> {v}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                        </CardContent>
                    </Card>

                    {/* MDT Meeting Notes */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography sx={sectionTitleSx}>MDT Meeting Notes</Typography>
                            <EditableMDTMeeting />
                        </CardContent>
                    </Card>
        </PatientLayout>
    )
}
