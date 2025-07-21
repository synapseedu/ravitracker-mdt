// pages/patients/ross.tsx
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
    ct: ['Ross CT TAVI.pdf'],
    tte: ['Ross TTE.pdf', 'Ross referral.pdf'],
    angio: ['Ross angio.pdf'],
    bloods: ['Ross Bloods.pdf'],
    correspond: [],
    mdt: ['Ross MDT.docx'],
    other: ['Ross pelvic ultrasound.pdf'],
    referral: ['Ross referral.pdf'],
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

const MDT_KEY = 'ross_mdt_notes'
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

export default function RossPatientPage() {

    const patient = {
        name: 'Wendy Ross',
        dob: '1942-06-11',
        mrn: '0068643',
        referralDate: '18/6/25',
        structuralPhysician: 'Dr Hansen',
        referrer: 'Dr Wang',
        contact: '0435 023 246',
        weight: '58kg',
        height: '147cm',
        background: [
            'Myocardial infarction >20 years ago (no stents)',
            'Aortic root dilatation',
            'Hypertension',
            'Hypercholesterolaemia',
            'Osteoarthritis',
            'Bilateral total knee replacements',
            'Osteopenia',
        ],
        medications: [
            'Catapress 100mcg nocte',
            'Lipitor 40mg OD',
            'Telmisartan 80mg OD',
            'Dothiepin 75mg OD',
        ],
        socialStatus: (
            <>
                Lives at home in unit.<br />
                Supportive children close by.<br />
                Independent ADLs and mobility.<br />
                Non-smoker, drinks 2–3 champagne on Fridays at the club.<br />
                Does not drive, uses public transport.<br />
                Retired seamstress.
            </>
        ),
        functional: (
            <>
                Occasional dizziness and chest discomfort at night (uses GTN once a month, denies syncope).<br />
                Minimal SOBOE, can walk unrestricted on the flat (3 blocks, mainly limited by pain).<br />
                Main complaint is high blood pressure.<br />
                Denies oedema, chest pain, PND, orthopnoea.
            </>
        ),
        tteData: {
            'LV EF': '55%',
            AVA: '0.9',
            'Peak Gradient': '74',
            'Mean Gradient': '51',
            'Peak AV': '4.29',
            'MR': 'None',
            'AR': 'Mild',
            'Comments': 'Severe aortic stenosis with mild regurgitation.',
        },
        angio: 'Mild to moderate coronary artery disease: 40% pro LAD, 90% OM4 (small calibre), 90% (well collateralised), 40-50% prox RCA.',
        ecg: 'Sinus rhythm.',
        ctIncidentals: (
            <>
                Dilated ascending thoracic aorta and proximal arch.<br />
                Subpleural nodule left lower lobe (CT follow up in 12 months).<br />
                Thickening of endometrial complex in the uterus (pelvic ultrasound recommended).
            </>
        ),
        bloods: {
            MOCA: '27/30',
            Hb: '136',
            Plts: '234',
            Cre: '72',
            eGFR: '67',
            Albumin: '43',
        },
        otherConsults: {
            'Aged Care': 'N/A',
            'Cardiothoracic': 'N/A',
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
                                <Typography>{patient.referralDate}</Typography>
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
                </Box>
            </Container>
        </Box>
    )
}
