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
    ct: ['NAS Arnold - CT 88.1598294.pdf'],
    tte: [],
    angio: ['Arnold NAS Angio.pdf'],
    toe: ['Nas TOE workup.pdf', 'Royal North Shore Hospital TOE review for TriClip suitability Arnold Nas.pdf'],
    rhc: ['Nas RHC Workup.pdf'],
    ecg: ['Nas ECG.pdf'],
    bloods: [],
    summary: ['Nas Tricuspid patient summary.docx'],
    referral: ['Nas Arnold 03.10.2024 Dr Fernandes symptom history.pdf'],
    correspond: ['Nas Dr Mathur rv.pdf'],
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

const MDT_KEY = 'nas_mdt_notes'
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

export default function NasPatientPage() {

    const patient = {
        name: 'Arnold Nas',
        dob: '1947-07-30',
        mrn: 'ME00463006',
        referralDate: '',
        structuralPhysician: 'Dr Bhindi',
        referrer: 'Dr Clyne Fernandes',
        contact: '0412 036 125',
        weight: '88kg',
        height: '188cm',
        allergies: 'NKDA',
        background: [
            'Severe atrial functional tricuspid regurgitation (TR) with regurgitant jet close to the septum',
            'Atrial fibrillation',
            'Sleep apnoea (CPAP)',
            'HFpEF',
            'BPH',
        ],
        familyHistory: [
            'Mother & Father: CVAs in 70s',
            'Brother: HBP; Prostate cancer (father 70s, brother 58)',
        ],
        medications: [
            'Pradaxa (Dabigatran etexilate)',
            'Entresto 24/26mg nocte',
        ],
        socialStatus: (
            <>
                Retired aircraft engineer.<br />
                Lives with wife (who has dementia; Arnold is her carer).<br />
                4 children, one daughter lives nearby.<br />
                Independent of all ADLs.<br />
                Nil stairs at home.
            </>
        ),
        functional: (
            <>
                Increased shortness of breath.<br />
                Exercise tolerance reduced to 100 meters.<br />
                Takes inclines slowly with regular breaks.<br />
                Fluctuating fatigue.<br />
                Nil dizziness, orthopnoea, or PND.
            </>
        ),
        bloods: {
            'Date': '28/03/2025',
            'Hb': '154',
            'Plts': '249',
            'Creatinine': '90',
            'eGFR': '72',
        },
        rhc: (
            <>
                <strong>PASP:</strong> 44/20 (29)<br />
                <strong>PCWP:</strong> 19/20 (19)
            </>
        ),
        angio: (
            <>
                LAD: 40% stenosis<br />
                Otherwise only minor irregularities
            </>
        ),
        toeSummary: (
            <>
                Trileaflet tricuspid valve (Type I).<br />
                Moderate to severe secondary tricuspid regurgitation.<br />
                RV: Markedly dilated, moderate hypokinesis.<br />
                LA/RA: Dilated.<br />
                Atrial fibrillation.<br />
                Mild secondary mitral regurgitation.<br />
                Aortic sclerosis without obstruction.<br />
                GLIDE score 2.<br />
                TEER will be difficult if septal-anterior clipping is required.<br />
                Tricuspid valve anatomy suitable for TriClip.
            </>
        ),
        consults: {
            'Cardiothoracic Surgeon': 'Dr Mathur: Low risk for surgery. Patient prefers TriClip, but open to best option.',
        },
    }

    return (
        <PatientLayout title={patient.name}>
                    <Box display="flex" alignItems="center" gap={2} mb={2}>
                        <Box
                            sx={{
                                px: 1.2,
                                py: 0.2,
                                bgcolor: '#1976d2',
                                color: '#fff',
                                borderRadius: 1,
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
                            <Typography>ME00463006</Typography>
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

                    {/* Background & Family History */}
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
                                    <Typography fontWeight={600}>Family History:</Typography>
                                    <ul>
                                        {patient.familyHistory.map((fh) => (
                                            <li key={fh}>{fh}</li>
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
                                    <Typography fontWeight={600}>Allergies:</Typography>
                                    <Typography>NKDA</Typography>
                                </Box>
                            </Stack>
                        </CardContent>
                    </Card>

                    {/* ECG */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Typography sx={sectionTitleSx}>ECG</Typography>
                                <PdfIcons files={pdfMap.ecg} />
                            </Box>
                            <Typography variant="body2">Atrial fibrillation, RBBB</Typography>
                        </CardContent>
                    </Card>

                    {/* Bloods */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Typography sx={sectionTitleSx}>Recent Bloods</Typography>
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

                    {/* Right Heart Catheter */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Typography sx={sectionTitleSx}>Right Heart Catheter</Typography>
                                <PdfIcons files={pdfMap.rhc} />
                            </Box>
                            <Typography sx={{ mt: 1 }}>{patient.rhc}</Typography>
                        </CardContent>
                    </Card>

                    {/* Angio */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Typography sx={sectionTitleSx}>Angiogram</Typography>
                                <PdfIcons files={pdfMap.angio} />
                            </Box>
                            <Typography sx={{ mt: 1 }}>{patient.angio}</Typography>
                        </CardContent>
                    </Card>

                    {/* CT */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Typography sx={sectionTitleSx}>CT</Typography>
                                <PdfIcons files={pdfMap.ct} />
                            </Box>
                            <Typography sx={{ mt: 1 }}>4D CT Cardiac: Right atrial enlargement, reflux into hepatic veins (possible right heart dysfunction), possible early hepatic fibrosis.</Typography>
                        </CardContent>
                    </Card>

                    {/* TOE */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
                                <Typography sx={sectionTitleSx}>TOE / Tricuspid Anatomy</Typography>
                                <PdfIcons files={pdfMap.toe} />
                            </Box>
                            <Typography sx={{ mt: 1 }}>{patient.toeSummary}</Typography>
                        </CardContent>
                    </Card>

                    {/* Consults */}
                    <Card variant="outlined" sx={{ mb: 3 }}>
                        <CardContent>
                            <Box display="flex" alignItems="center" justifyContent="space-between">
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
