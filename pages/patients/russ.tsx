'use client'
import React, { useEffect, useState } from 'react'
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
    Divider,
    Grid
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
    ct: ['Gary Russ CT NSR Report.pdf', 'GR 10.7.46 Highly calcified valve with some annular and LVOT calcification. High R femoral bifurcation..pdf'],
    tte: ['RUSS_GARY_ TTE 26.06.2025_GR100746.pdf'],
    angio: ['Russ angio.pdf'],
    bloods: [],
    ecg: ['Russ ECG.pdf'],
    agedcare: ['Russ Aged care.pdf'],
    oncology: ['Gary Oncology 10.2024.pdf'],
    neuro: ['Russ G Neuro 26Jun25.pdf'],
    correspond: [
        'Russ Surgical rv.pdf'
    ],
    mdt: ['Russ NSP TAVI Workup + MDT Template v1.docx'],
    referral: [],
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

const MDT_KEY = 'russ_mdt_notes'
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

export default function RussPatientPage() {
    const router = useRouter()
    useEffect(() => {
        if (typeof window !== 'undefined' && localStorage.getItem('loggedIn') !== 'true') {
            router.replace('/login')
        }
    }, [router])

    const patient = {
        name: 'Gary Russ',
        dob: '1946-07-10',
        mrn: 'ME00465605',
        referralDate: '', // not specified in MDT
        structuralPhysician: 'Dr Bhindi',
        referrer: 'Dr Helestrand',
        contact: '04 0419 5268',
        weight: '73.2kg',
        height: '168cm',
        background: [
            'Aortic stenosis',
            'Metastatic melanoma (on immunotherapy, finishing Aug 2025)',
            'Parkinson’s disease (2016, Prof Aggarwal)',
            'CVA Aug 2023 (mild R hemiparesis)',
            'Prostate cancer',
            'Hypercholesterolaemia',
            'GORD',
        ],
        allergies: 'NKDA',
        medications: [
            'Aspirin 100mg od',
            'Metoprolol 25mg bd',
            'Rosuvastatin 20mg od',
            'Maxolon',
            'Melatonin',
            'Stalevo',
            'Sinemet',
            'Zoladex',
        ],
        socialStatus: (
            <>
                Lives in Hornsby with daughter (carer).<br />
                32 steps at home.<br />
                iADL’s + meal prep.<br />
                Ex-smoker (stopped 2003).<br />
                Does not drive.<br />
                Mobilises mainly with 4WW and walking stick when up to it.<br />
                Able to do washing but needs assistance otherwise; house modified.<br />
                SOBOE.<br />
                NYHA II.
            </>
        ),
        tteData: {
            'LV EF': '65%',
            AVA: '0.9',
            'Peak Gradient': '76',
            'Mean Gradient': '47',
            'SVI': '51',
            'Peak AV': '4.3',
            'MR': 'Trivial',
            'AR': 'Mild',
            'Comments': 'Markedly calcified aortic-mitral curtain. Trileaflet aortic valve, moderately thickened and calcified leaflets. Markedly restricted valve opening. Severe stenosis. Mild AR.',
        },
        angio: (
            <>
                Unobstructed coronaries.<br />
                <b>See PDF for details.</b>
            </>
        ),
        ecg: 'NSR',
        ctIncidentals: (
            <>
                Highly calcified valve with some annular and LVOT calcification.<br />
                High right femoral bifurcation.<br />
                No other significant findings.
            </>
        ),
        bloods: {
            MOCA: '24/30',
            Hb: '141',
            Plts: '212',
            Cre: '86',
            eGFR: '74',
            Albumin: '43',
        },
        frailtyScore: '4',
        agedCare: 'No barrier to TAVI from Geri perspective. Should have clearance from regular neurologist.',
        consults: {
            'Oncology': 'Immunotherapy can be paused/rescheduled. Wait until completion of treatment in July.',
            'CT Surgeon': 'Dr Brereton: Suitable for all forms of surgical salvage.',
            'Neurology': 'Prof Aggarwal: Parkinson’s well-controlled, happy to proceed with TAVI under conscious sedation. MMSE 28/30 in July 2024.',
        },
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
                        <Grid item xs={6} sm={3}>
                            <Typography variant="subtitle2">DOB</Typography>
                            <Typography>{patient.dob}</Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Typography variant="subtitle2">MRN</Typography>
                            <Typography>{patient.mrn}</Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Typography variant="subtitle2">Contact</Typography>
                            <Typography>{patient.contact}</Typography>
                        </Grid>
                        <Grid item xs={6} sm={3}>
                            <Typography variant="subtitle2">Referrer</Typography>
                            <Typography>{patient.referrer}</Typography>
                        </Grid>
                    </Grid>

                    {/* Social & Functional */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography sx={sectionTitleSx}>Social & Functional</Typography>
                            <Typography>{patient.socialStatus}</Typography>
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
                                    <Typography fontWeight={600} mt={2}>Allergies:</Typography>
                                    <Typography>{patient.allergies}</Typography>
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
                                <Typography sx={sectionTitleSx}>TTE 26/06/2025</Typography>
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
                            <Typography sx={{ mt: 1 }}>{patient.angio}</Typography>
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
                            <Typography sx={{ mt: 1 }}>{patient.ctIncidentals}</Typography>
                        </CardContent>
                    </Card>

                    {/* Bloods */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography sx={sectionTitleSx}>Bloods</Typography>
                            <Grid container spacing={1} sx={{ mt: 1 }}>
                                {Object.entries(patient.bloods).map(([k, v]) => (
                                    <Grid item xs={6} key={k}>
                                        <Typography variant="body2">
                                            <strong>{k}:</strong> {v}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="body2"><strong>MOCA:</strong> 24/30</Typography>
                            <Typography variant="body2"><strong>Frailty Score:</strong> 4</Typography>
                        </CardContent>
                    </Card>

                    {/* Consults */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography sx={sectionTitleSx}>Consults</Typography>
                                <PdfIcons files={pdfMap.correspond} />
                            </Box>
                            <Typography sx={{ mt: 1 }}>
                                {Object.entries(patient.consults).map(([k, v]) => (
                                    <span key={k}><strong>{k}:</strong> {v}<br /></span>
                                ))}
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Aged Care / Oncology / Neuro */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography sx={sectionTitleSx}>Aged Care, Oncology & Neurology</Typography>
                                <PdfIcons files={[...pdfMap.agedcare, ...pdfMap.oncology, ...pdfMap.neuro]} />
                            </Box>
                            <Typography sx={{ mt: 1 }}>{patient.agedCare}</Typography>
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
