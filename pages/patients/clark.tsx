// pages/patients/clark.tsx
'use client'
import React, { useEffect, useState } from 'react'
import { Grid } from '../../components/ui'
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


const pdfMap: Record<string, string[]> = {
  ct: [],
  tte: [
    'Clark RNSH TTE 2.7.25.pdf',
    'Clark TTE 7.5.25.pdf',
    'Clark referral.pdf',
  ],
  angio: ['Clark angio.PDF'],
  bloods: [],
  correspond: [
    'Clarke Dr Bassin.pdf',
    'Dr Karthik Kumar 20.05.25.pdf',
  ],
  mdt: ['Clark.S MDT.docx'],
  referral: ['Clark referral.pdf'],
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

const MDT_KEY = 'clark_mdt_notes'
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

export default function ClarkPatientPage() {

  const patient = {
    name: 'Sandra Clark',
    dob: '29/10/1948',
    mrn: '1135610',
    referralDate: '28/5/25',
    structuralPhysician: 'Dr Bhindi',
    referrer: 'Dr F. Touma',
    contact: '0419 018 928',
    email: 'sandiht57@gmail.com',
    weight: '115kg',
    height: '173cm',
    background: [
      'Type 2 diabetes mellitus',
      'Hypertension',
      'Hypercholesterolaemia',
      'Protein C deficiency with previous PE/DVT (warfarin)',
      'Left sided hearing loss',
      'OSA (does not tolerate CPAP)',
      'Vestibular issues (balance)',
    ],
    medications: [
      'Optisulin 16u BD',
      'Jardiance 10mg mane',
      'Levothyroxine',
      'Warfarin',
      'Pravastatin',
      'Telmisartan/amlodipine 80/5 mane',
    ],
    socialStatus: (
      <>
        Lives at home in retirement village (independent living).<br />
        2 daughters (not close by).<br />
        Independent ADLs.<br />
        Mobilises with 4WW outside the home, issues with balance.<br />
        Non-smoker, no alcohol.<br />
        Domestic cleaning once a month, level 2 HCP.
      </>
    ),
    functional: (
      <>
        Progressively SOBOE and fatigue over last few months, more difficult to do day to day tasks.<br />
        Occasional chest tightness on exertion, one episode at rest.<br />
        Has hospital bed, sleeps at 60°, has been doing so for long time (?OSA).<br />
        Denies oedema, syncope, PND, orthopnoea.
      </>
    ),
    tteData: {
      'LV EF': '60%',
      AVA: '1.0',
      AVAi: '0.4',
      'Peak Gradient': '72',
      'Mean Gradient': '36',
      'Peak AV': '4.3',
      'MR': 'Mild',
      'AR': 'Nil',
      'SVI': '44.6',
      'Comments': 'Trileaflet aortic valve. Markedly calcified leaflets with severely restricted excursion. Doppler data consistent with severe stenosis based on peak velocity and valve area index.',
    },
    angio: 'Haemodynamically significant proximal LAD disease (70%, iFR 0.88), severe LCx (80%) and OM2 disease (80%).',
    ecg: 'SR w/ prolonged PR interval (235). Normal QRS',
    ctIncidentals: '',
    bloods: {
      MMSE: '30/30',
      Hb: '140',
      Plts: '184',
    },
    otherConsults: {
      'Cardiothoracic Surgeon': 'Dr Bassin',
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
              <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography sx={sectionTitleSx}>Consults</Typography>
                <PdfIcons files={pdfMap.correspond} />
              </Box>
              <Grid container spacing={1} sx={{ mt: 1 }}>
                {Object.entries(patient.otherConsults).map(([k, v]) => (
                  <Grid xs={6} key={k}>
                    <Typography variant="body2">
                      <strong>{k}:</strong> {v || '—'}
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
