import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/GridLegacy'
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Tooltip,
  IconButton,
  TextField,
} from '@mui/material';
import PatientLayout from '../../components/PatientLayout'
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

const sectionTitleSx = {
  color: 'primary.main',
  color: '#1677ff',
  fontWeight: 600,
  fontSize: 18,
  mb: 1,
};

  color: '#1677ff',

const pdfMap: Record<string, string[]> = {
  ct: ['Riggs CT TAVI.pdf', 'Riggs medtronic.pdf'],
  tte: ['Riggs TTE 6.6.25.pdf', 'Riggs TTE 2024.pdf', 'Riggs TTE RNSH.pdf'],
  dse: ['Riggs DSE RNSH 15.7.25.pdf'], // Dobutamine Stress Echo
  angio: ['Riggs angio report.pdf'],
  bloods: ['Riggs bloods.pdf'],
  holter: ['Riggs Holter.pdf'],
  avr: ['Riggs AVR op report.pdf'],
  referral: ['Kevin Riggs Dr Hill 24.03.2025.pdf', 'Kevin Riggs Dr Hill referral.pdf'],
  mdt: ['Riggs MDT.docx'],
};

function PdfIcons({ files }: { files: string[] }) {
  if (!files?.length) return null;
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

const MDT_MEETING_KEY = 'riggs_mdt_notes';

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

export default function RiggsPatientPage() {
  return (
    <PatientLayout title="Kevin Riggs">

      {/* Patient Details */}
      <Typography variant="h6" sx={sectionTitleSx}>
        Patient Details
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">DOB</Typography>
          <Typography>14/07/1945</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Age</Typography>
          <Typography>79</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">MRN</Typography>
          <Typography>0346148</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Referral Date</Typography>
          <Box display="flex" alignItems="center">
            <Typography>15/6/25</Typography>
            <PdfIcons files={pdfMap.referral} />
          </Box>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Structural Physician</Typography>
          <Typography>Dr Hansen</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Referrer</Typography>
          <Typography>Dr Hill</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Contact</Typography>
          <Typography>0417 883 916</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Weight</Typography>
          <Typography>96 kg</Typography>
        </Grid>
      </Grid>

      {/* Background */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Background</Typography>} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography fontWeight={600} gutterBottom>Background:</Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                <li>IHD</li>
                <li>HG TCC</li>
                <li>Partial left nephrectomy</li>
                <li>Ongoing BHCG and chemotherapy</li>
                <li>SAVR (hemi sternotomy) 25mm Perimount — Dr Spratt, St Vincents</li>
                <li>HTN</li>
                <li>Dyslipidaemia</li>
                <li>Rheumatoid arthritis</li>
              </Box>
            </Grid>
            <Grid xs={6}>
              <Typography fontWeight={600} gutterBottom>Medications:</Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                <li>Apixaban 5mg bd</li>
                <li>Metoprolol 25mg bd</li>
                <li>Atorvastatin 40mg mane</li>
                <li>Spiractin 12.5mg mane</li>
                <li>Dapagliflozin 10mg mane</li>
                <li>Frusemide 40mg mane</li>
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
            Lives at home on property with flatmate (mini horses and dogs).<br />
            Independent ADLs and mobility.<br />
            Retired; managed timber yard.<br />
            Plays lawn bowls ×4/week, still driving.<br />
            Ex-smoker 30 years; 1–2 stds ETOH/night.<br />
            SOBOE, now struggling with hills/stairs and walking dogs.<br />
            Occasional chest tightness on exertion.<br />
            Denies syncope, oedema, PND or orthopnoea.
          </Typography>
        </CardContent>
      </Card>

      {/* TTE Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>TTE 20/6/25</Typography>} action={<PdfIcons files={pdfMap.tte} />} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">LV EF</Typography><Typography>30%</Typography></Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">AVA</Typography><Typography>0.8</Typography></Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">AVAi</Typography><Typography>0.4</Typography></Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">Peak Gradient</Typography><Typography>54</Typography></Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">Mean Gradient</Typography><Typography>33</Typography></Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">SVI</Typography><Typography>38.2</Typography></Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">Peak AV</Typography><Typography>3.7</Typography></Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">MR</Typography><Typography>Mild</Typography></Grid>
            <Grid xs={12}><Typography variant="subtitle2" color="textSecondary">Comments</Typography><Typography>Bioprosthetic aortic valve in situ. Turbulent flow and increased velocities through prosthesis (moderate-severe stenosis).</Typography></Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Dobutamine Stress Echo Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Dobutamine Stress Echo 15/7/25</Typography>} action={<PdfIcons files={pdfMap.dse} />} />
        <CardContent>
          {/* Optionally add summary/findings here if available */}
        </CardContent>
      </Card>

      {/* Angio & ECG Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Angio & ECG</Typography>} action={<PdfIcons files={pdfMap.angio} />} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={12}><Typography variant="subtitle2" color="textSecondary">Angio</Typography><Typography>Mild coronary artery disease</Typography></Grid>
            <Grid xs={12}><Typography variant="subtitle2" color="textSecondary">ECG</Typography><Typography>Sinus rhythm 38–92, avg 65 bpm, LBBB pattern</Typography></Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Holter Monitor Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Holter Monitor</Typography>} action={<PdfIcons files={pdfMap.holter} />} />
        <CardContent>
          {/* Findings if any */}
        </CardContent>
      </Card>

      {/* CT TAVI / Access / Valve Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>CT TAVI / Access / Valve</Typography>} action={<PdfIcons files={pdfMap.ct} />} />
        <CardContent>
          <Typography variant="subtitle2" color="textSecondary">Incidentals</Typography>
          <Typography>Non-specific 7mm nodule in right adrenal gland</Typography>
        </CardContent>
      </Card>

      {/* Bloods Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Bloods 3/6/25</Typography>} action={<PdfIcons files={pdfMap.bloods} />} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={12}><Typography variant="subtitle2" color="textSecondary">MOCA</Typography><Typography>29/30 (with GP)</Typography></Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">Hb</Typography><Typography>145</Typography></Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">Plts</Typography><Typography>189</Typography></Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">Cre</Typography><Typography>85</Typography></Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">eGFR</Typography><Typography>75</Typography></Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">Albumin</Typography><Typography>38</Typography></Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* AVR Operation Report Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>AVR Operation Report</Typography>} action={<PdfIcons files={pdfMap.avr} />} />
        <CardContent>
          {/* Operation notes if needed */}
        </CardContent>
      </Card>

      {/* Other Consults Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Other Consults</Typography>} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">CTSx</Typography><Typography>Dr Bassin</Typography></Grid>
            <Grid xs={6}><Typography variant="subtitle2" color="textSecondary">Aged Care</Typography><Typography>N/A</Typography></Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* MDT Meeting Notes */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>MDT Meeting Notes</Typography>} />
        <CardContent>
          <EditableMDTMeeting />
        </CardContent>
      </Card>
    </PatientLayout>
  );
}
