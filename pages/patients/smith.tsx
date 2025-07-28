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
  Button,
} from '../../components/ui'
import PatientLayout from '../../components/PatientLayout'
import { useRouter } from 'next/router'
import { PdfIcon } from '../../components/ui'

const sectionTitleSx = {
  color: 'primary.main',
  fontWeight: 600,
  fontSize: 18,
  mb: 1,
}

// Smith PDF map
const pdfMap: Record<string, string[]> = {
  ct: [
    'Smith CT TAVI aortic.pdf',
    'Smith CT TAVI.pdf',
    'Smith.P Medtronic.pdf',
  ],
  tte: ['Smith Wyong TTE.pdf'],
  angio: ['Smith.P angio.pdf'],
  referral: ['Smith referral.pdf', 'Smith.P referral to Dr Bassin.pdf'],
  correspond: [
    'Smith.P Dr Bassin.pdf',
    'Smith.P Dr Ranavadivel 2.6.25.pdf',
    'Smith.P ECG.pdf',
  ],
  mdt: ['Smith.P MDT.docx'],
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

const MDT_KEY = 'smith_mdt_notes'
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

export default function SmithPatientPage() {

  // Static Smith data
  const patient = {
    name: 'Peter Smith',
    dob: '07/01/1951',
    mrn: '0446530',
    referralDate: '16/4/25',
    structuralPhysician: 'Dr Hansen',
    referrer: 'Dr Kull',
    contact: '0418 225 187',
    email: 'Dean SIL 0410 703 720, deano121185@hotmail',
    background: [
      'HFrEF + new AF',
      'Incidental pulmonary nodule (CTPA:13mm, FU CT in 6 months)',
      'Hyperlipidaemia',
      'Gout',
      'Multiple MVAs and digit amputations',
    ],
    medications: [
      'Apixaban 5mg BD',
      'Atorvastatin 40mg daily',
      'Bisoprolol 2.5mg morning',
      'Dapagliflozin 10mg morning',
      'Spironolactone 12.5mg night',
    ],
    socialStatus: (
      <>
        Lives at home alone (steps x3).<br />
        Supportive children close by.<br />
        Retired tiler, independent ADLs.<br />
        Uses walking stick for long distance.<br />
        Ex-smoker; stopped alcohol early 2025.<br />
        Drives short distances.<br />
        Admission Feb 2025 for SOB, orthopnea, palpitations; started on heart failure regimen.<br />
        Ongoing SOBOE on hills/stairs; no chest pain.<br />
        Sleeps with 2–3 pillows; no PND/orthopnea.<br />
      </>
    ),
    tteData: {
      'LV EF': '',
      AVA: '',
      AVAi: '',
      'Peak Gradient': '',
      'Mean Gradient': '',
      SVI: '',
      'Peak AV': '',
      MR: '',
      Comments: '',
    },
    angio: 'Mild coronary artery disease',
    ecg: 'AF',
    ctIncidentals:
      'Irregular cavitated lesion RUL suspicious of neoplasm; no spread',
    bloods: {
      MOCA: '',
      Hb: '163',
      Plts: '221',
      Cre: '107',
      eGFR: '59',
      Albumin: '',
    },
    otherConsults: {
      'Aged Care': '',
      'Cardiothoracic Surgeon': '',
    },
  }

  const router = useRouter()

  return (
    <PatientLayout title={patient.name}>

          {/* Demographics */}
          <Grid container spacing={2} sx={{ mb: 3 }}>
            {[
              ['DOB', patient.dob],
              ['MRN', patient.mrn],
              ['Referral Date', patient.referralDate],
            ].map(([label, value]) => (
              <Grid xs={6} sm={3} key={label as string}>
                <Typography variant="subtitle2">{label}</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Typography>{value}</Typography>
                  {label === 'Referral Date' && <PdfIcons files={pdfMap.referral} />}
                </Box>
              </Grid>
            ))}
            <Grid xs={6} sm={3}>
              <Typography variant="subtitle2">Structural Physician</Typography>
              <Typography>{patient.structuralPhysician}</Typography>
            </Grid>
            <Grid xs={6} sm={3}>
              <Typography variant="subtitle2">Referrer</Typography>
              <Typography>{patient.referrer}</Typography>
            </Grid>
            <Grid xs={6} sm={3}>
              <Typography variant="subtitle2">Contact</Typography>
              <Typography>{patient.contact}</Typography>
            </Grid>
            <Grid xs={6} sm={3}>
              <Typography variant="subtitle2">Email/Alt Contact</Typography>
              <Typography>{patient.email}</Typography>
            </Grid>
          </Grid>

          {/* Background & Medications */}
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Typography sx={sectionTitleSx}>Background</Typography>
              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={4}>
                <Box>
                  <Typography fontWeight={600}>History:</Typography>
                  <ul>
                    {patient.background.map((item) => (<li key={item}>{item}</li>))}
                  </ul>
                </Box>
                <Box>
                  <Typography fontWeight={600}>Medications:</Typography>
                  <ul>
                    {patient.medications.map((med) => (<li key={med}>{med}</li>))}
                  </ul>
                </Box>
              </Stack>
            </CardContent>
          </Card>

          {/* Social & Functional Status */}
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Typography sx={sectionTitleSx}>Social & Functional Status</Typography>
              <Typography>{patient.socialStatus}</Typography>
            </CardContent>
          </Card>

          {/* TTE */}
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={sectionTitleSx}>TTE</Typography>
                <PdfIcons files={pdfMap.tte} />
              </Box>
              <Grid container spacing={1} sx={{ mt: 1 }}>
                {Object.entries(patient.tteData).map(([label, value]) => (
                  <Grid xs={6} key={label}>
                    <Typography variant="body2"><strong>{label}:</strong> {value}</Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          {/* Angio / ECG */}
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
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
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={sectionTitleSx}>CT TAVI / Access / Valve</Typography>
                <PdfIcons files={pdfMap.ct} />
              </Box>
              <Typography><strong>Incidentals:</strong> {patient.ctIncidentals}</Typography>
            </CardContent>
          </Card>

          {/* Bloods */}
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={sectionTitleSx}>Bloods</Typography>
                <PdfIcons files={pdfMap.bloods} />
              </Box>
              <Grid container spacing={1} sx={{ mt: 1 }}>
                {Object.entries(patient.bloods).map(([label, value]) => (
                  <Grid xs={6} key={label}>
                    <Typography variant="body2"><strong>{label}:</strong> {value}</Typography>
                  </Grid>
                ))}
              </Grid>
            </CardContent>
          </Card>

          {/* Other Consults */}
          <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography sx={sectionTitleSx}>Other Consults</Typography>
                <PdfIcons files={pdfMap.correspond} />
              </Box>
              <Grid container spacing={1} sx={{ mt: 1 }}>
                {Object.entries(patient.otherConsults).map(([label, value]) => (
                  <Grid xs={6} key={label}>
                    <Typography variant="body2"><strong>{label}:</strong> {value}</Typography>
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

          <Divider sx={{ my: 3 }} />
          <Button variant="outlined" onClick={() => router.push('/patients')}>&larr; Back to list</Button>
    </PatientLayout>
  )
}
