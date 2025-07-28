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
    ct: ['PN 8.11.40 Severely calcified valve with annular and LVOT Ca..pdf'],
    tte: ['Newlands echo 15.5.25.pdf'],
    angio: ['newlands angio.pdf'],
    bloods: ['Newlands Bloods.pdf'],
    ecg: ['Newlands ecg.pdf'],
    agedcare: ['Newlands Aged Care.pdf'],
    summary: ['Newlands NSP TAVI Workup + MDT Template v1.docx'],
    referral: [],
    correspond: ['Newlands RNSH discharge summary.pdf'],
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

const MDT_KEY = 'newlands_mdt_notes'
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

export default function NewlandsPatientPage() {

    const patient = {
        name: 'Patricia Newlands',
        dob: '1940-11-08',
        mrn: 'ME00038341',
        referralDate: '17/6/25',
        structuralPhysician: 'Dr Bhindi',
        referrer: 'Dr Chrishan Nalliah',
        contact: '0424 955 140',
        weight: '70kg',
        height: '172cm',
        background: [
            'AF (new 2025)',
            'PE',
            'HFrEF (LVEF 30%)',
            'Severe aortic stenosis',
            'UTI (K. pneumoniae, completed Keflex)',
            'GORD',
            'Hypothyroidism',
            'Breast cancer (L: 2006, R: 2011, both treated)',
            '1964 severe car accident; multiple plastic surgeries',
        ],
        medications: [
            'Bisoprolol 1.25mg daily',
            'Apixaban 10mg BD',
            'Digoxin 125mcg daily',
            'Frusemide 40mg BD',
            'Atorvastatin 20mg mane',
            'Cholecalciferol 1 cap daily',
            'Levothyroxine 100mcg mane',
            'Macuvision',
            'Magnesium 1g BD',
            'Ocular lubricant',
            'Pantoprazole 40mg daily',
            'Panadol osteo 1 tab TDS',
            'Spironolactone 12.5mg mane',
        ],
        socialStatus: (
            <>
                Non-smoker.<br />
                3–4 gin and tonics/week.<br />
                Lives alone; carers a few times/week and Meals on Wheels.<br />
                Mobilises with 4WW.<br />
                Recent RNSH admission with decompensated heart failure.
            </>
        ),
        functional: (
            <>
                SOBOE.<br />
                Significantly reduced exercise tolerance.<br />
                Fatigue.<br />
                Mild pitting oedema bilaterally to mid-shins.
            </>
        ),
        tteData: {
            'LV EF': '30%',
            AVA: '0.7',
            'Peak Gradient': '51',
            'Mean Gradient': '32',
            'SVI': '26.5',
            'Peak AV': '3.6',
            'MR': 'Severe',
            'AR': 'Trivial',
            'Comments': 'Trileaflet, severely calcified aortic valve; severely reduced excursion on 2D. Low flow, low gradient, severe aortic stenosis. Pseudostenosis unlikely. Trivial aortic regurgitation.',
        },
        angio: 'Unobstructed coronary arteries',
        ecg: 'AF',
        ctIncidentals: (
            <>
                Severely calcified valve with annular and LVOT Ca.
            </>
        ),
        bloods: {
            MOCA: '26/30',
            Hb: '112',
            Plts: '263',
            Cre: '105',
            eGFR: '42',
            Albumin: '34',
        },
        frailtyScore: '4',
        agedCare: 'Nil barrier to TAVI from Geris POV.',
        otherConsults: {},
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
                            <Typography>{patient.referralDate}</Typography>
                        </Grid>
                        <Grid xs={6} sm={3}>
                            <Typography variant="subtitle2">Contact</Typography>
                            <Typography>{patient.contact}</Typography>
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
                                <Typography sx={sectionTitleSx}>TTE 14/5/25</Typography>
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
                            <Typography variant="body2"><strong>MOCA:</strong> 26/30</Typography>
                            <Typography variant="body2"><strong>Frailty Score:</strong> 4</Typography>
                        </CardContent>
                    </Card>

                    {/* Aged Care / Consults */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography sx={sectionTitleSx}>Aged Care</Typography>
                                <PdfIcons files={pdfMap.agedcare} />
                            </Box>
                            <Typography sx={{ mt: 1 }}>
                                {patient.agedCare}
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Discharge / Other Docs */}
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
        </PatientLayout>
    )
}
