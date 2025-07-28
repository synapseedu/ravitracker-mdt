'use client'
import React, { useEffect, useState } from 'react'
import { Grid } from '../../components/ui';
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
} from '../../components/ui'
import PatientLayout from '../../components/PatientLayout'
import { PdfIcon } from '../../components/ui'

const sectionTitleSx = {
  color: 'primary.main',
  fontWeight: 600,
  fontSize: 18,
  mb: 1,
}


// Available PDF files for English patient
const pdfMap: Record<string, string[]> = {
  ct: ['English CT TAVI.pdf', 'English medtronic.pdf'],
  tte: ['English referral + echo.pdf'],
  angio: ['English angio.pdf'],
  bloods: ['English bloods.rtf'],
  correspond: ['English Dr Fariguia.pdf'],
  mdt: ['English MDT.docx'],
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
            <PdfIcon fontSize="small" />
          </IconButton>
        </Tooltip>
      ))}
    </Stack>
  )
}

const MDT_KEY = 'english_mdt_notes'
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

export default function EnglishPatientPage() {

  // Static English patient data
  const patient = {
    name: 'Brian English',
    dob: '16/12/1940',
    mrn: '0689362',
    referralDate: '16/5/25',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr Bhatia',
    contact: 'Annie (daughter): 0405 780 048',
    email: 'annierobertson61@yahoo.com.au',
    background: [
      'Overweight',
      'Dyslipidaemia',
      'Hypertension',
      "Alzheimer's (diagnosed 2023) (known to Dr Farrugia)",
    ],
    medications: [
      'Candesartan 32 mg daily',
      'Clopidogrel 75 mg daily',
      'Donepezil 10 mg daily',
      'Rabeprazole 10 mg daily',
      'Amlodipine 5 mg daily (new)',
    ],
    socialStatus: (
      <>
        Lives alone at home.<br />
        Supportive daughters close by and visit often.<br />
        Mobilises independently.<br />
        Active with household tasks.<br />
        Occasional dizziness, no syncope.<br />
        No chest pain or orthopnoea.
      </>
    ),
    tteData: {
      'LV EF': '60%',
      AVA: '0.7',
      AVAi: '0.3',
      'Peak Gradient': '70',
      'Mean Gradient': '48',
      'Peak AV': '4.2',
      MR: 'Trivial',
    },
    angio: 'Severe proximal LAD disease (90%).',
    ecg: 'SR',
    ctIncidentals: 'Nil',
    bloods: {
      MOCA: '22/30',
      Hb: '163',
      Plts: '353',
      Cre: '114',
      eGFR: '51',
      Albumin: '37',
    },
    otherConsults: {
      'Aged Care': 'Dr Farrugia',
      'Cardiothoracic Surgeon': '',
    },
  }

  return (
    <PatientLayout title={patient.name}>

          {/* Demographics */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            {['dob', 'mrn', 'referralDate', 'email'].map((field) => (
              <Grid xs={6} sm={3} key={field}>
                <Typography variant="subtitle2">{field.charAt(0).toUpperCase() + field.slice(1)}</Typography>
                <Typography>{(patient as any)[field]}</Typography>
              </Grid>
            ))}
          </Grid>

          {/* Background & Medications */}
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Typography sx={sectionTitleSx}>Background & Medications</Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                <Box>
                  <Typography fontWeight={600}>History:</Typography>
                  <ul>
                    {patient.background.map((b) => (<li key={b}>{b}</li>))}
                  </ul>
                </Box>
                <Box>
                  <Typography fontWeight={600}>Meds:</Typography>
                  <ul>
                    {patient.medications.map((m) => (<li key={m}>{m}</li>))}
                  </ul>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          {/* Social Status */}
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Typography sx={sectionTitleSx}>Social & Functional</Typography>
              <Typography>{patient.socialStatus}</Typography>
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
                    <Typography variant="body2"><strong>{k}:</strong> {v}</Typography>
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
              <Typography><strong>Angio:</strong> {patient.angio}</Typography>
              <Typography><strong>ECG:</strong> {patient.ecg}</Typography>
            </CardContent>
          </Card>

          {/* CT TAVI */}
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={sectionTitleSx}>CT TAVI</Typography>
                <PdfIcons files={pdfMap.ct} />
              </Box>
              <Typography><strong>Incidentals:</strong> {patient.ctIncidentals}</Typography>
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
                    <Typography variant="body2"><strong>{k}:</strong> {v}</Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          {/* Other Consults */}
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={sectionTitleSx}>Other Consults</Typography>
                <PdfIcons files={pdfMap.correspond} />
              </Box>
              <Grid container spacing={1} sx={{ mt: 1 }}>
                {Object.entries(patient.otherConsults).map(([k, v]) => (
                  <Grid xs={6} key={k}>
                    <Typography variant="body2"><strong>{k}:</strong> {v}</Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          {/* MDT Notes */}
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Typography sx={sectionTitleSx}>MDT Meeting Notes</Typography>
          <EditableMDTMeeting />
        </CardContent>
      </Card>

          {/* --- Removed Back to List Button and Divider --- */}
    </PatientLayout>
  )
}
