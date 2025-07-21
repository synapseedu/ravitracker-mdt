// pages/patients/mcmullen.tsx
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
    ct: ['Mcmullen medtronic.pdf'],
    tte: ['Mcmullen TTE.pdf', 'Mcmullen TTE RNSH 16.7.25.pdf'], // Referral removed
    angio: ['Mcmullen angio.pdf'],
    bloods: ['Mcmullen bloods.pdf'],
    correspond: [],
    mdt: ['Mcmullen MDT.docx'],
    referral: ['Mcmullen referral.pdf'], // Referral only here
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

const MDT_KEY = 'mcmullen_mdt_notes'
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

export default function McmullenPatientPage() {

    const patient = {
        name: 'John McMullen',
        dob: '1938-04-05',
        mrn: '2359358',
        referralDate: '16/6/25',
        structuralPhysician: 'Dr Bhindi',
        referrer: 'Dr Armit Michael',
        contact: 'Julie 0433 213 626',
        email: 'juliemcmullen022@gmail.com',
        background: [
            'CABG 2003',
            'COPD',
            'Mild cognitive impairment',
            'Previous CVA',
            'Awaiting cataract surgery (4/7/25)',
            'Some difficulty swallowing, low appetite, weight loss (7kg), awaiting gastro review 11/7/25',
        ],
        medications: [
            'Clopidogrel 75mg',
            'Frusemide 40mg',
            'Perindopril 2.5mg',
            'Atorvastatin 40mg',
            'Metoprolol 25mg daily',
            'Oxybutynin daily',
        ],
        socialStatus: (
            <>
                Lives with son at home (son is carer), supportive daughter close by.<br />
                Independent with pADLs, son does heavy household tasks.<br />
                Independent around the house, uses 4WW for outside, has had some mechanical falls in last 12 months.<br />
                One glass of port at night, occasional ETOH at the club.<br />
                Ex-smoker, quit 30 years ago.
            </>
        ),
        functional: (
            <>
                Progressively worsening SOBOE and fatigue.<br />
                Can walk to the club 500m away but having to slow down.<br />
                Denies chest pain, oedema, syncope, PND.
            </>
        ),
        tteData: {
            'LV EF': '25-30%',
            AVA: '0.7',
            AVAi: '0.4',
            'Peak Gradient': '45',
            'Mean Gradient': '33',
            'Peak AV': '3.4',
            'MR': 'Mild-Moderate',
            'AR': 'Trivial',
            'SVI': '29',
            'DVI': '0.25',
            'Comments': 'Probable bicuspid aortic valve (raphe between the left and right coronary cusps); severe low flow low gradient aortic valve stenosis.',
        },
        angio: 'CTO of native RCA and LCx. LCx supplied via patent SVG, RCA via collaterals. LAD iFR 0.55 (haemodynamically significant).',
        ecg: 'Sinus bradycardia.',
        ctIncidentals: '',
        bloods: {
            Hb: '112',
            Plts: '260',
            Cre: '83',
            eGFR: '73',
        },
        otherConsults: {},
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
                                <strong>Incidentals:</strong> {patient.ctIncidentals || '—'}
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
                            <Typography>
                                {/* No specific consult text in MDT */}
                                —
                            </Typography>
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
