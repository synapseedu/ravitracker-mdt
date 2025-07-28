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
    ct: ['Stephen McGuire CT TAVI Report.pdf'],
    tte: ['MCGUIRE_STEPHEN_TTE 31.03.2025 _SM220753.pdf'],
    stress: ['MCGUIRE_STEPHEN_ STRESS ECHO _08042025_SM220753.pdf'],
    angio: ['McGure angio.pdf'],
    bloods: [],
    correspond: ['McGuire Manu letter.pdf'],
    mdt: ['McGuireNSP TAVI Workup + MDT Template v1.docx'],
    referral: ['McGuire Figtree Referral.pdf'],
    other: ['McGuire Edwards report.pdf', 'SM 22.7.53.pdf', 'SM220753 Edwards BT0 ABC - NSW.pdf'],
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

const MDT_KEY = 'mcguire_mdt_notes'
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

export default function McGuirePatientPage() {

    const patient = {
        name: 'Stephen McGuire',
        dob: '1953-07-22',
        mrn: 'ME00252119',
        referralDate: '', // not specified in MDT
        structuralPhysician: 'Dr Bhindi',
        referrer: 'Dr Gemma Figtree',
        contact: '0413 382 919',
        weight: '90kg',
        background: [
            'STEMI (2012) — stenting to mid Cx and RCA',
            'Hypertension',
            'Hypercholesterolemia',
            'Asthma',
        ],
        medications: [
            'Clopidogrel',
            'Candesartan',
            'Rosuvastatin',
            'Ezetimibe',
        ],
        socialStatus: (
            <>
                Independent.<br />
                Lives at home with wife.
            </>
        ),
        functional: (
            <>
                SOBOE<br />
                1 x syncopal event<br />
                NYHA II
            </>
        ),
        tteData: {
            'LV EF': '60%',
            AVA: '0.9',
            'Peak Gradient': '65',
            'Mean Gradient': '40',
            'SVI': '34.3',
            'Peak AV': '4.16',
            'MR': 'Mild - Moderate',
            'AR': 'Nil',
            'Comments': 'Severely calcified aortic valve with restrictive opening. Severe aortic stenosis.',
        },
        stressEcho: (
            <>
                Moderate exercise capacity (mid Stage III), limited by breathlessness and 6/10 chest tightness.<br />
                Negative stress ECG.<br />
                Resting echocardiogram: normal LV chamber, inferolateral and inferior hypokinesis, normal EF.<br />
                Severe aortic stenosis. Mild/moderate aortic root dilation. Positive stress echo for myocardial ischaemia.
            </>
        ),
        angio: 'Mild to moderate CAD (2012 stents mid Cx, RCA).',
        ecg: 'Sinus rhythm.',
        ctIncidentals: (
            <>
                Appears Sievers Type 0/I bicuspid with anomalous aortic arch.<br />
                Extensive aortic valve calcification (calcium score 3990). No subannular calcification.
            </>
        ),
        bloods: {
            Hb: '151',
            Plts: '201',
            Cre: '90',
            eGFR: '76',
            Albumin: '44',
        },
        frailtyScore: '3',
        otherConsults: {
            'Cardiothoracic Surgeon': 'Dr Manu Mathur (see letter PDF)',
        },
    }

    return (
        <PatientLayout title={patient.name}>
                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                        <Typography variant="h6">{patient.name}</Typography>
                        <Box
                            sx={{
                                px: 1.2,
                                py: 0.2,
                                bgcolor: '#1976d2',
                                color: '#fff',
                                borderRadius: 1,
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
                                <Typography sx={sectionTitleSx}>TTE 31/03/2025</Typography>
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

                    {/* Stress Echo */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography sx={sectionTitleSx}>Stress Echo</Typography>
                                <PdfIcons files={pdfMap.stress} />
                            </Box>
                            <Typography sx={{ mt: 1 }}>{patient.stressEcho}</Typography>
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
                                    <Grid xs={6} key={k}>
                                        <Typography variant="body2">
                                            <strong>{k}:</strong> {v}
                                        </Typography>
                                    </Grid>
                                ))}
                            </Grid>
                            <Divider sx={{ my: 2 }} />
                            <Typography variant="body2"><strong>Frailty Score:</strong> {patient.frailtyScore}</Typography>
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
