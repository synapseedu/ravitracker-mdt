import React, { useEffect, useState } from 'react';
// import { Grid } from '@mui/material';
import {
  Box,
  Paper,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Tooltip,
  IconButton,
  TextField,
} from '@mui/material';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const sectionTitleSx = {
  color: '#1677ff',
  fontWeight: 600,
  fontSize: 18,
  mb: 1,
};

const mainTitleSx = {
  color: '#1677ff',
  fontWeight: 700,
  mb: 2,
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

function PdfIcons({ files }: { files: string[] }) {
  return (
    <Box ml={1} display="flex">
      {files.map((filename) => (
        <Tooltip title={filename} key={filename}>
          <IconButton
            component="a"
            href={`/pdfs/${encodeURIComponent(filename)}`}
            target="_blank"
            rel="noopener noreferrer"
            size="small"
            sx={{ p: 0, mr: 1 }}
          >
            <PictureAsPdfIcon />
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
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
    <Paper
      elevation={3}
      sx={{ maxWidth: 800, mx: 'auto', mt: 5, p: 4, borderRadius: 2, bgcolor: '#fff' }}
    >
      {/* Main Title */}
      <Typography variant="h4" sx={mainTitleSx}>
        Barry Watson
      </Typography>

      {/* Patient Details */}
      <Typography variant="h6" sx={sectionTitleSx}>
        Patient Details
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary">DOB</Typography>
          <Typography>9/12/1952</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Age</Typography>
          <Typography>72</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary">MRN</Typography>
          <Typography>0106881</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Referral Date</Typography>
          <Typography>&nbsp;</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Structural Physician</Typography>
          <Typography>Dr Bhindi</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Referrer</Typography>
          <Typography>Dr Rogers</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Contact</Typography>
          <Typography>0412 500 375</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Email</Typography>
          <Typography>sueandbazz@gmail.com</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" color="textSecondary">Weight/Height</Typography>
          <Typography>125kg / 170cm</Typography>
        </Grid>
      </Grid>

      {/* Background */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Background</Typography>} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
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
            <Grid item xs={6}>
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
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Social & Functional Status</Typography>} />
        <CardContent>
          <Typography component="div">
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
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>TTE</Typography>} action={<PdfIcons files={pdfMap.tte} />} />
        <CardContent>
          {/* ... */}
        </CardContent>
      </Card>

      {/* Angio / ECG Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader
          title={<Typography sx={sectionTitleSx}>Angio / ECG (28/5/25 Gosford)</Typography>}
          action={<><PdfIcons files={pdfMap.angio} /><PdfIcons files={pdfMap.ecg} /></>}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="textSecondary">Angio</Typography>
              <Typography>Mild non-obstructive CAD</Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="textSecondary">ECG</Typography>
              <Typography>AF</Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* CT TAVI / Access / Valve Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>CT TAVI / Access / Valve</Typography>} action={<PdfIcons files={pdfMap.ct} />} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}><Typography variant="subtitle2" color="textSecondary">Incidentals</Typography><Typography>The HRCT chest (11/3/25): no evidence of parenchymal dysfunction</Typography></Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Pulmonary / Respiratory Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Pulmonary / Respiratory</Typography>} action={<PdfIcons files={pdfMap.respiratory} />} />
        <CardContent>
          <Typography component="div">
            Normal pulmonary function; no COPD or asthma – puffers ceased.<br />
            <b>Respiratory consult:</b> Dr Erdstein
          </Typography>
        </CardContent>
      </Card>

      {/* Bloods Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Bloods (30/4/25)</Typography>} action={<PdfIcons files={pdfMap.bloods} />} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="subtitle2" color="textSecondary">MOCA / MMSE</Typography>
              <Typography>28/30 <IconButton size="small" sx={{ p: 0 }}>{<PictureAsPdfIcon />}</IconButton></Typography>
            </Grid>
            <Grid item xs={6}><Typography variant="subtitle2" color="textSecondary">Hb</Typography><Typography>162</Typography></Grid>
            <Grid item xs={6}><Typography variant="subtitle2" color="textSecondary">Plts</Typography><Typography>142</Typography></Grid>
            <Grid item xs={6}><Typography variant="subtitle2" color="textSecondary">Cre</Typography><Typography>205</Typography></Grid>
            <Grid item xs={6}><Typography variant="subtitle2" color="textSecondary">eGFR</Typography><Typography>27</Typography></Grid>
            <Grid item xs={6}><Typography variant="subtitle2" color="textSecondary">Albumin</Typography><Typography>&nbsp;</Typography></Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Other Consults Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Other Consults</Typography>} action={<PdfIcons files={pdfMap.referral} />} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}><Typography variant="subtitle2" color="textSecondary">Aged Care</Typography><Typography>&nbsp;</Typography></Grid>
            <Grid item xs={6}><Typography variant="subtitle2" color="textSecondary">Cardiothoracic Surgeon</Typography><Typography>Dr Bassin</Typography></Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* MDT Meeting Notes Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>MDT Meeting Notes</Typography>} />
        <CardContent>
          <EditableMDTMeeting />
        </CardContent>
      </Card>
    </Paper>
  );
}
