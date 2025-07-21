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
  ct: ['SHEPHERD Graham - 88.1623019.pdf'],
  tte: ['SHEPHERD_GRAHAM_TTE WUP _09072025_GS150942.pdf'],
  angio: ['Shepherd Angio Gosford 06.2025.pdf'],
  bloods: [],
  ecg: ['shepherd ecg.pdf'],
  correspond: [
    'shepherd Dr Brereton.pdf',
    'shepherd dr warrier.pdf',
    'Graham Shepherd - Renal plan 03.07.2025 08.58.40 - GR.pdf'
  ],
  mdt: ['Shepherd NSP TAVI Workup + MDT Template v1.docx'],
  referral: ['SHEPHERD Graham - TAVI referral from Tony Kull.pdf'],
  other: ['GS 15.9.42.pdf'],
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

const MDT_KEY = 'shepherd_mdt_notes'
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

export default function ShepherdPatientPage() {

  const patient = {
    name: 'Graham Shepherd',
    dob: '1942-09-15',
    mrn: 'ME00466832',
    referralDate: '02/07/2025',
    structuralPhysician: 'Dr Hansen',
    referrer: 'Dr Tony Kull',
    contact: '4390 8664 / 04037 40003 (wife Julie)',
    weight: '86.2kg',
    height: '166cm',
    background: [
      'Aortic stenosis',
      'Paroxysmal atrial fibrillation',
      '2nd degree heart block with Bisoprolol',
      'CKD (Dr Simon Roger)',
      'Hypertension',
      'Arthritis',
      'Polyarticular gout',
    ],
    allergies: 'Morphine',
    medications: [
      'Allopurinol 100 mg (0.5 tab every ALTERNATE day)',
      'Aspirin (Cartia) 100 mg daily',
      'Atorvastatin 80 mg daily',
      'Dapagliflozin 10mg od',
      'Duodart (dutasteride-tamsulosin) 500mcg/400mcg MR OD',
      'Lactobacillus acidophilus (probiotic) OD',
      'Spironolactone 50mg/d',
      'Irbesartan 300mg oral daily',
      'Thiamine 100mg oral daily',
    ],
    socialStatus: (
      <>
        Retired butcher.<br />
        Drinks 4–6 beers daily for 56 years.<br />
        Non-smoker.<br />
        Lives at home in Budgewoi with wife, independent.<br />
        Mobilises independently (no aids), but wife will purchase 4WW on discharge.
      </>
    ),
    functional: (
      <>
        SOBOE and fatigue.<br />
        NYHA II.
      </>
    ),
    tteData: {
      'LV EF': '60%',
      AVA: '1.1',
      'Peak Gradient': '66',
      'Mean Gradient': '35',
      'SVI': '56',
      'Peak AV': '4.06',
      'MR': 'Mild–moderate',
      'AR': 'Trivial',
      'Comments': 'Markedly restricted valve opening on 2D. Doppler data: peak velocity and AVAi in the severe range. Trivial aortic regurgitation.',
    },
    angio: (
      <>
        Dominance: Right dominant<br />
        Left main: Minor disease<br />
        LAD: Heavily calcified, 60% ostial, 90% mid, severe diagonal disease<br />
        LCx: Mild diffuse, 80% distal<br />
        RCA: 80% calcific ostial, moderate PDA disease<br />
        <b>Conclusion:</b> Severe calcific 3-vessel disease
      </>
    ),
    ecg: 'Sinus rhythm with 1st-degree heart block',
    ctIncidentals: (
      <>
        Gynaecomastia.<br />
        Small hiatal hernia.<br />
        Stranding of mesenteric fat with mildly enlarged node (9mm).<br />
        Diverticular disease, uncomplicated.<br />
        Mild thickening of bladder wall.<br />
        Atelectasis/scarring at lung apices/right middle lobe.
      </>
    ),
    bloods: {
      MOCA: '23/30',
      Hb: '93',
      Plts: '220',
      Cre: '305',
      eGFR: '16',
      Albumin: '34',
      Hematocrit: '0.27',
      WBC: '5.7',
    },
    frailtyScore: '4',
    consults: {
      'Geriatrics': 'Dr Warrier: Appropriate for TAVI.',
      'CT Surgeon': 'Dr Brereton: Suitable for surgical salvage.',
      'Renal': 'Dr Simon Roger: Supported TAVI; stop spironolactone/irbesartan 5 days pre-TAVI/scanning. Acceptable risk for dialysis if needed.'
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
                <Typography sx={sectionTitleSx}>TTE 09/07/2025</Typography>
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
                  <Grid xs={6} key={k}>
                    <Typography variant="body2">
                      <strong>{k}:</strong> {v}
                    </Typography>
                  </Grid>
                ))}
              </Grid>
              <Divider sx={{ my: 2 }} />
              <Typography variant="body2"><strong>MOCA:</strong> 23/30</Typography>
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
