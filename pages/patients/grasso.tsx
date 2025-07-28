import React, { useEffect, useState } from 'react';
import { Grid } from '../../components/ui'
import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Typography,
  Tooltip,
  IconButton,
  TextField,
} from '../../components/ui';
import PatientLayout from '../../components/PatientLayout'
import { PdfIcon } from '../../components/ui';

const sectionTitleSx = {
  color: 'primary.main',
  fontWeight: 600,
  fontSize: 18,
  mb: 1,
};

const pdfMap: Record<string, string[]> = {
  ct: [
    'Grasso CT TAVI.pdf',
    'Grasso medtronic femorals only.pdf',
    'Grasso medtronic no femorals.pdf',
  ],
  tte: ['Grasso RNSH TTE.pdf', 'Grasso TTE 2.4.25.pdf'],
  angio: ['Grasso angio.pdf'],
  bloods: ['Grasso Bloods.pdf'],
  summary: ['Grasso GP health summary.pdf'],
  referral: ['Grasso Dr Bassin.pdf'],
  mdt: ['Grasso MDT.docx'],
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
            <PdfIcon />
          </IconButton>
        </Tooltip>
      ))}
    </Box>
  );
}

const MDT_MEETING_KEY = 'grasso_mdt_notes';

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

export default function GrassoPatientPage() {
  return (
    <PatientLayout title="Angela Grasso">

      {/* Patient Details */}
      <Typography variant="h6" sx={sectionTitleSx}>
        Patient Details
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">DOB</Typography>
          <Typography>19/12/1938</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Age</Typography>
          <Typography>86</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">MRN</Typography>
          <Typography>0274378</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Referral Date</Typography>
          <Typography>30/5/25</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Structural Physician</Typography>
          <Typography>Dr Bhindi</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Referrer</Typography>
          <Typography>Dr Bassin / Dr Rogers</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Contact</Typography>
          <Typography>0400 233 289</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Email/Alt Contact</Typography>
          <Typography>Grace 0408 478 007</Typography>
        </Grid>
      </Grid>

      {/* Background */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Background</Typography>} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography fontWeight={600} gutterBottom>Past Medical History:</Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                <li>Atrial fibrillation</li>
                <li>Hypertension</li>
                <li>Depression / anxiety</li>
                <li>CVA 2020</li>
                <li>Hypothyroidism</li>
                <li>Osteoarthritis</li>
                <li>Reflux</li>
                <li>Gout</li>
                <li>Bakers cyst</li>
              </Box>
            </Grid>
            <Grid xs={6}>
              <Typography fontWeight={600} gutterBottom>Medications:</Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                <li>Amitriptyline 10mg</li>
                <li>Atenolol 50mg</li>
                <li>Eliquis 2.5mg BD</li>
                <li>Oroxine 50mcg</li>
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
            Lives alone at home.<br />
            Supportive daughter and grandchildren nearby.<br />
            Independent with ADLs, uses walking stick for long distances.<br />
            Still drives short distances.<br />
            Retired factory worker.<br />
            Non-smoker, minimal ETOH.<br />
            Increasing SOBOE, unable to do line dancing.<br />
            Denies chest pain, oedema, syncope, PND or orthopnoea.<br />
          </Typography>
        </CardContent>
      </Card>

      {/* TTE Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>TTE: RNSH 27/6 – Dr Choong</Typography>} action={<PdfIcons files={pdfMap.tte} />} />
        <CardContent>
          {/* ... fields ... */}
        </CardContent>
      </Card>

      {/* Angio / ECG Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Angio / ECG</Typography>} action={<PdfIcons files={pdfMap.angio} />} />
        <CardContent>
          {/* ... */}
        </CardContent>
      </Card>

      {/* CT TAVI / Access / Valve Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>CT TAVI / Access / Valve</Typography>} action={<PdfIcons files={pdfMap.ct} />} />
        <CardContent>
          {/* ... */}
        </CardContent>
      </Card>

      {/* Bloods Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Bloods (25/1/25)</Typography>} action={<PdfIcons files={pdfMap.bloods} />} />
        <CardContent>
          {/* ... */}
        </CardContent>
      </Card>

      {/* Other Consults Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Other Consults</Typography>} action={<PdfIcons files={pdfMap.summary} />} />
        <CardContent>
          {/* ... */}
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
