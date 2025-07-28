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
    tte: ['MOONEY_GRAHAME TTE _25.06.2025_GM311242.pdf'],
    angio: ['Mooney Angio.pdf'],
    bloods: [],
    ecg: ['Mooney ecg.pdf'],
    agedcare: ['Mooney aged care.pdf'],
    correspond: [
        'Graham Rogers 03.07.25 re grahame mooney.pdf',
        'Grahame Mooney dr rogers.pdf'
    ],
    mdt: ['Mooney NSP TAVI Workup + MDT Template v1.docx'],
    referral: [],
    other: ['GM 13.12.42.pdf', 'Mooney diagnostics.pdf'],
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

const MDT_KEY = 'mooney_mdt_notes'
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

export default function MooneyPatientPage() {

    const patient = {
        name: 'Grahame Mooney',
        dob: '1942-12-31',
        mrn: 'ME00465771',
        referralDate: '',
        structuralPhysician: 'Dr Bhindi',
        referrer: 'Dr James Rogers',
        contact: '0438 247 099',
        weight: '80kg',
        height: '175cm',
        background: [
            'Severe symptomatic AS',
            'Cervical myelopathy (AW laminectomy, Dr Jonathan Parkinson)',
            'Anxiety re numbness',
            'Prostectomy',
        ],
        medications: [
            'Aspirin',
            'Amlodipine',
            'Ezetimibe/rosuvastatin',
            'Pregablin',
        ],
        allergies: '',
        socialStatus: (
            <>
                Lives with wife.<br />
                Retired building designer.<br />
                No carers or cleaners (gardener for lawn only).<br />
                Still drives.
            </>
        ),
        functional: (
            <>
                SOBOE.<br />
                ET 500m flat.<br />
                Struggles with inclines.<br />
                Low energy, exertional fatigue.<br />
                Also limited by hip pain, unsteady gait (cervical myelopathy).
            </>
        ),
        tteData: {
            'LV EF': '65%',
            AVA: '0.82',
            'Peak Gradient': '45',
            'Mean Gradient': '25',
            'SVI': '32',
            'Peak AV': '334 cm/s',
            'MR': 'Trivial',
            'AR': 'Mild',
            'Comments': 'Tri-leaflet valve. Markedly thickened/calcified leaflets. Markedly restricted valve opening. Paradoxical severe AS (low flow, low gradient, normal LVEF). SVI 32 ml/m2, DVI 0.23. Mild AR.'
        },
        angio: 'Unobstructed coronaries (see PDF for detail)',
        ecg: 'Atrial paced rhythm',
        bloods: {
            MOCA: '19/30',
            Hb: '165',
            Plts: '196',
            Cre: '82',
            eGFR: '76',
            Albumin: '45',
            INR: '1.0'
        },
        frailtyScore: '3',
        agedCare: 'Registered with Aged Care ID AC25519885 – Not currently receiving support but awaiting. No barrier to TAVI from geri POV.',
        consults: {
            'Neurosurgery': 'AW laminectomy planned 28th July (Dr Jonathan Parkinson).',
            'Anaesthesia': 'Andrew Limburg (SNNS).'
        }
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
                                <Typography sx={sectionTitleSx}>TTE 25/06/2025</Typography>
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
                            <Typography variant="body2"><strong>MOCA:</strong> 19/30</Typography>
                            <Typography variant="body2"><strong>Frailty Score:</strong> 3</Typography>
                        </CardContent>
                    </Card>

                    {/* Aged Care */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography sx={sectionTitleSx}>Aged Care</Typography>
                            <Typography>{patient.agedCare}</Typography>
                        </CardContent>
                    </Card>

                    {/* Consults */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography sx={sectionTitleSx}>Consults</Typography>
                            <Typography sx={{ mt: 1 }}>
                                {Object.entries(patient.consults).map(([k, v]) => (
                                    <span key={k}><strong>{k}:</strong> {v}<br /></span>
                                ))}
                            </Typography>
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
        </PatientLayout>
    )
}
