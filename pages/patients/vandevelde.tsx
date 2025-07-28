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
    Divider
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
    tte: ['J VAN DE VELDE TTE.pdf'],
    toe: ['J VAN DE VELDE toe.pdf', 'Royal North Shore Hospital TOE review for MitraClip Janice Van De Velde.pdf'],
    angio: ['Vaqn de Velde angio 26.2.25.pdf'],
    agedcare: ['VanDeVelde Aged Care review.docx'],
    correspond: [
        'Van de Velde Bhindi Rooms.pdf',
        'Van De Velde Garrick Don.pdf',
        'VAN DE VELDE Janice Dr Warrier.pdf',
        'VandeVelde Dr Choong 10.07.25.pdf'
    ],
    mdt: ['Van De VeldeTricuspid patient summary.docx'],
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

const MDT_KEY = 'vandevelde_mdt_notes'
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

export default function VandeVeldePatientPage() {

    const patient = {
        name: 'Janice Van de Velde',
        dob: '1936-06-01',
        mrn: 'ME00225818',
        referralDate: '',
        structuralPhysician: 'Dr Bhindi',
        referrer: 'Dr Choong',
        contact: '0418 440 644',
        daughter: 'Jacqui 0413 301 088',
        mobile: '0417 274 856',
        weight: '59kg',
        height: '157cm',
        background: [
            'AF — Pradaxa 110mg BD',
            'TAVI 10/2020 (Bhindi)',
            'Osteoarthritis',
            'Breast cancer (Prof Elgene Lim & Dr Jeremy Mo)',
            'CKD',
            'Hypertension',
            'Pulmonary fibrosis'
        ],
        allergies: '',
        medications: [
            'Eliquis 2.5mg bd',
            'Metoprolol (Minax) 25mg BD',
            'Entresto 49/51mg BD',
            'Furosemide 20mg OD',
            'Digoxin (Lanoxin) 62.5mcg OD'
        ],
        socialStatus: (
            <>
                Mobilises with 4WW.<br />
                Lives with excellent level of function.<br />
                Support from daughter Jacqui.
            </>
        ),
        functional: (
            <>
                Exercise tolerance 25–50 metres.<br />
                Denies breathlessness, palpitations, chest pain, leg swelling.
            </>
        ),
        tteData: {
            'LV EF': '60%',
            TAPSE: '1.5cm',
            ePASP: '49mmHg',
            'Comments': 'TAVI prosthesis, well seated. Trivial posterior paravalvular regurgitation. Severe secondary tricuspid regurgitation. Mild mitral regurgitation. Structurally normal tricuspid valves. Coaptation gap 5mm. RV: low-normal radial, reduced longitudinal function.'
        },
        rightHeartCath: (
            <>
                <b>Feb 2025 (Dr Choong):</b><br />
                PASP 55/19 (32)<br />
                PCWP 12/11 (11)<br />
                mPAP mildly elevated<br />
                CO 4.3<br />
                PVR 4.9<br />
                TPG 21
            </>
        ),
        bloods: {
            Date: '28/02/25',
            Hb: '127',
            Plts: '181',
            Cre: '128',
            eGFR: '32',
        },
        moca: '26/30',
        agedCare: 'Aged Care Dr Warrier 17/06/25: Happy to support Tricuspid Clip (TriClip) procedure. Warned re risk of postop delirium with GA.',
        consults: {},
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
                                <Typography sx={sectionTitleSx}>TTE 21/02/2025</Typography>
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

                    {/* TOE */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography sx={sectionTitleSx}>TOE / Tricuspid Anatomy</Typography>
                                <PdfIcons files={pdfMap.toe} />
                            </Box>
                            <Typography sx={{ mt: 1 }}>
                                Severe secondary tricuspid regurgitation (central, S-P and S-A). Coaptation gap 5mm. TriClip planned. See MDT for detail.
                            </Typography>
                        </CardContent>
                    </Card>

                    {/* Right Heart Catheter */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography sx={sectionTitleSx}>Right Heart Catheterisation</Typography>
                            <Typography>{patient.rightHeartCath}</Typography>
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
                            <Typography variant="body2"><strong>MOCA:</strong> {patient.moca}</Typography>
                        </CardContent>
                    </Card>

                    {/* Aged Care */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                                <Typography sx={sectionTitleSx}>Aged Care</Typography>
                                <PdfIcons files={pdfMap.agedcare} />
                            </Box>
                            <Typography sx={{ mt: 1 }}>{patient.agedCare}</Typography>
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
