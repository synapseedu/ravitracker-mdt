'use client'
import React, { useEffect, useState } from 'react'
import { Grid } from '../../components/ui'
import {
  Box,
  Card,
  CardContent,
  Typography,
  Tooltip,
  IconButton,
  TextField,
  Stack,
} from '../../components/ui'
import PatientLayout from '../../components/PatientLayout'
import { PdfIcon } from '../../components/ui'

const sectionTitleSx = {
  color: 'primary.main',
  fontWeight: 600,
  fontSize: 18,
  mb: 1,
};

const pdfMap: Record<string, string[]> = {
  ct: ['Watson CT TAVI.pdf', 'Watson medtronic.pdf'],
  tte: ['Watson TTE 26.3.25.pdf'],
  angio: ['Watson angio.pdf'],
  bloods: ['Watson bloods.pdf'],
  mmse: ['Watson MMSE.pdf'],
  referral: ['Watson Dr Bassin.pdf', 'Watson Dr Rogers referral.pdf'],
  respiratory: ['Watson respiratory Dr.pdf'],
  ecg: ['Watson ECG.pdf'],
  mdt: ['Watson MDT.docx'],
};

function PdfIcons({ files }: { files?: string[] }) {
  if (!Array.isArray(files) || files.length === 0) return null
  return (
    <Stack direction="row" spacing={1} ml={1} alignItems="center">
      {files.map((filename) => (
        <Tooltip title={filename} key={filename}>
          <IconButton
            component="a"
            href={`/pdfs/${encodeURIComponent(filename)}`}
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

const MDT_MEETING_KEY = 'watson_mdt_notes';

function EditableMDTMeeting() {
  const [notes, setNotes] = useState('');
  useEffect(() => {
    const stored = sessionStorage.getItem(MDT_MEETING_KEY);
    if (stored) setNotes(stored);
  }, []);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const val = e.target.value;
    setNotes(val);
    sessionStorage.setItem(MDT_MEETING_KEY, val);
  };

  return (
    <TextField
      fullWidth
      multiline
      minRows={4}
      maxRows={12}
      value={notes}
      placeholder="Type or paste MDT notes and outcomes here. (Edits are saved in your browser for this session only)"
      onChange={handleChange}
      variant="outlined"
    />
  );
}

export default function WatsonPatientPage() {
  return (
    <PatientLayout title="Barry Watson">

      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid xs={6} sm={3}>
          <Typography variant="subtitle2" color="textSecondary">DOB</Typography>
          <Typography>9/12/1952</Typography>
        </Grid>
        <Grid xs={6} sm={3}>
          <Typography variant="subtitle2" color="textSecondary">Age</Typography>
          <Typography>72</Typography>
        </Grid>
        <Grid xs={6} sm={3}>
          <Typography variant="subtitle2" color="textSecondary">MRN</Typography>
          <Typography>0106881</Typography>
        </Grid>
        <Grid xs={6} sm={3}>
          <Typography variant="subtitle2" color="textSecondary">Referral Date</Typography>
          <Typography>&nbsp;</Typography>
        </Grid>
        <Grid xs={6} sm={3}>
          <Typography variant="subtitle2" color="textSecondary">Structural Physician</Typography>
          <Typography>Dr Bhindi</Typography>
        </Grid>
        <Grid xs={6} sm={3}>
          <Typography variant="subtitle2" color="textSecondary">Referrer</Typography>
          <Typography>Dr Rogers</Typography>
        </Grid>
        <Grid xs={6} sm={3}>
          <Typography variant="subtitle2" color="textSecondary">Contact</Typography>
          <Typography>0412 500 375</Typography>
        </Grid>
        <Grid xs={6} sm={3}>
          <Typography variant="subtitle2" color="textSecondary">Email</Typography>
          <Typography>sueandbazz@gmail.com</Typography>
        </Grid>
        <Grid xs={12} sm={3}>
          <Typography variant="subtitle2" color="textSecondary">Weight/Height</Typography>
          <Typography>125kg / 170cm</Typography>
        </Grid>
      </Grid>

      {/* Background */}
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Typography sx={sectionTitleSx}>Background</Typography>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid xs={6}>
              <Typography fontWeight={600} gutterBottom>Past Medical History:</Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                <li>Severe obesity (125kg, was 140kg)</li>
                <li>CKD (creatinine 200)</li>
                <li>Permanent AF</li>
                <li>OSA on CPAP</li>
                <li>HTN</li>
                <li>Gout</li>
                <li>Back pain, lumbar disc disease</li>
                <li>Peripheral neuropathy</li>
                <li>Osteopaenia</li>
              </Box>
            </Grid>
            <Grid xs={6}>
              <Typography fontWeight={600} gutterBottom>Medications:</Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                <li>Apixaban 5mg</li>
                <li>Dapagliflozin 10mg</li>
                <li>Atorvastatin 10mg</li>
                <li>Motilium PRN</li>
                <li>Telmisartan 40mg</li>
                <li>Amlodipine 5mg</li>
                <li>Vitamin D</li>
                <li>Pantoprazole 40mg</li>
                <li>Xalacom eye drops</li>
                <li>Trelegy ellipta</li>
                <li>Fish oil</li>
                <li>Panadol</li>
                <li>Furosemide 40mg mane <i>(new)</i></li>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Social & Functional Status */}
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Typography sx={sectionTitleSx}>Social & Functional Status</Typography>
          <Typography component="div" sx={{ mt: 1 }}>
            Lives at home with wife and sons. Wife has low vision.<br />
            Uses walking stick due to bad back.<br />
            Independent with pADLs, shares household tasks.<br />
            Still drives.<br />
            Quit smoking 34 years ago (15 pack years).<br />
            ETOH 1-2 std mid-strength/day, but has cut down.<br />
            Worsening SOBOE – manages shops slowly, worse with hills/stairs.<br />
            Occasional dizziness, denies syncope.<br />
            Denies chest pain, oedema.<br />
            Occasional poor CPAP tolerance.<br />
          </Typography>
        </CardContent>
      </Card>

      {/* TTE Section */}
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={sectionTitleSx}>TTE</Typography>
            <PdfIcons files={pdfMap.tte} />
          </Box>
          {/* ... */}
        </CardContent>
      </Card>

      {/* Angio / ECG Section */}
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={sectionTitleSx}>Angio / ECG (28/5/25 Gosford)</Typography>
            <Stack direction="row" spacing={1}>
              <PdfIcons files={pdfMap.angio} />
              <PdfIcons files={pdfMap.ecg} />
            </Stack>
          </Box>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid xs={12}>
              <Typography variant="subtitle2" color="textSecondary">Angio</Typography>
              <Typography>Mild non-obstructive CAD</Typography>
            </Grid>
            <Grid xs={12}>
              <Typography variant="subtitle2" color="textSecondary">ECG</Typography>
              <Typography>AF</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* CT TAVI / Access / Valve Section */}
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={sectionTitleSx}>CT TAVI / Access / Valve</Typography>
            <PdfIcons files={pdfMap.ct} />
          </Box>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid xs={12}><Typography variant="subtitle2" color="textSecondary">Incidentals</Typography><Typography>The HRCT chest (11/3/25): no evidence of parenchymal dysfunction</Typography></Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Pulmonary / Respiratory Section */}
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={sectionTitleSx}>Pulmonary / Respiratory</Typography>
            <PdfIcons files={pdfMap.respiratory} />
          </Box>
          <Typography component="div" sx={{ mt: 1 }}>
            Normal pulmonary function; no COPD or asthma – puffers ceased.<br />
            <b>Respiratory consult:</b> Dr Erdstein
          </Typography>
        </CardContent>
      </Card>

      {/* Bloods Section */}
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={sectionTitleSx}>Bloods (30/4/25)</Typography>
            <PdfIcons files={pdfMap.bloods} />
          </Box>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid xs={12}>
              <Typography variant="subtitle2" color="textSecondary">MOCA / MMSE</Typography>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Typography>28/30</Typography>
                <PdfIcons files={pdfMap.mmse} />
              </Box>
            </Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">Hb</Typography><Typography>162</Typography></Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">Plts</Typography><Typography>142</Typography></Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">Cre</Typography><Typography>205</Typography></Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">eGFR</Typography><Typography>27</Typography></Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">Albumin</Typography><Typography>&nbsp;</Typography></Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Other Consults Section */}
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <Typography sx={sectionTitleSx}>Other Consults</Typography>
            <PdfIcons files={pdfMap.referral} />
          </Box>
          <Grid container spacing={2} sx={{ mt: 1 }}>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">Aged Care</Typography><Typography>&nbsp;</Typography></Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">Cardiothoracic Surgeon</Typography><Typography>Dr Bassin</Typography></Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* MDT Meeting Notes Section */}
      <Card variant="outlined" sx={{ mb: 3 }}>
        <CardContent>
          <Typography sx={sectionTitleSx}>MDT Meeting Notes</Typography>
          <EditableMDTMeeting />
        </CardContent>
      </Card>
    </PatientLayout>
  );
}
