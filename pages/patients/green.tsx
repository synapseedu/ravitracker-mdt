import React, { useEffect, useState } from 'react';
import Grid from '@mui/material/GridLegacy'
import {
  Box,
  Paper,
  Card,
  CardHeader,
  CardContent,
  Typography,
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
  ct: ['Green CT TAVI.pdf', 'Green medtronic.pdf'],
  tte: ['Green TTE 2.4.24.pdf', 'Green TTE 13.5.25.pdf'],
  angio: ['Green AVR report 2018.pdf'],
  bloods: ['Green ID notes 2024.pdf'],
  referral: ['GREEN, IAN Referral.pdf', 'Green Dr Coyle correspondence 21.1.25.pdf'],
  mdt: ['Green MDT.docx'],
};

function PdfIcons({ files }: { files: string[] }) {
  return (
    <Box ml={1} display="flex">
      {files.map(filename => (
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

const MDT_MEETING_KEY = 'green_mdt_notes';

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

export default function GreenPatientPage() {
  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 800,
        mx: 'auto',
        mt: 5,
        p: 4,
        borderRadius: 2,
        bgcolor: '#fff',
      }}
    >
      {/* Main Title */}
      <Typography variant="h4" sx={mainTitleSx}>
        Ian Green
      </Typography>

      {/* Patient Details */}
      <Typography variant="h6" sx={sectionTitleSx}>
        Patient Details
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">DOB</Typography>
          <Typography>27/10/1946</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Age</Typography>
          <Typography>78</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">MRN</Typography>
          <Typography>0198323</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Height/Weight</Typography>
          <Typography>1.82m / 97kg</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Structural Physician</Typography>
          <Typography>Dr Hansen</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Referrer</Typography>
          <Typography>Dr Vernon</Typography>
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
                <li>Perimount 25mm Tissue AVR + LAA closure (2018)</li>
                <li>Bioprosthetic mismatch</li>
                <li>Hereditary haemorrhagic telangiectasia</li>
                <li>Gout</li>
                <li>Recurrent CLL (stable)</li>
                <li>Hypogammaglobulinaemia</li>
                <li>Mediastinal lymphadenopathy</li>
                <li>Prostate cancer (2008)</li>
                <li>Septic shoulder (2018)</li>
                <li>Oesophageal perforation (TOE)</li>
                <li>Atrial flutter ablation (2022)</li>
                <li>Lung lesion</li>
                <li>Endocarditis/discitis (2023)</li>
                <li>ORIF fractured hip</li>
              </Box>
            </Grid>
            <Grid xs={6}>
              <Typography fontWeight={600} gutterBottom>Medications:</Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                <li>Tranexamic Acid 1g tds</li>
                <li>Coloxyl</li>
                <li>Valaciclovir 500mg daily</li>
                <li>Allopurinol 300mg</li>
                <li>Iron</li>
                <li>Folate</li>
                <li>Bisoprolol 2.5mg bd</li>
                <li>Amoxicillin 500mg qid</li>
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
            Lives at home alone.<br />
            Supportive son close by.<br />
            Independent mobility.<br />
            Retired builder, still driving.<br />
            Non-smoker, no alcohol.<br />
            SOBOE, difficulty stairs since hip #2024.<br />
            Occasional dizziness, no syncope.<br />
            Denies chest pain, PND, orthopnoea.
          </Typography>
        </CardContent>
      </Card>

      {/* Investigations */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>TTE (13/3/25)</Typography>} action={<PdfIcons files={pdfMap.tte} />} />
        <CardContent>
          <Grid container spacing={2}>
            {/* Fields as Descriptions */}
          </Grid>
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Angio / ECG (5/6/25)</Typography>} action={<PdfIcons files={pdfMap.angio} />} />
        <CardContent>
          {/* ... */}
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>CT TAVI / Access / Valve</Typography>} action={<PdfIcons files={pdfMap.ct} />} />
        <CardContent>
          {/* ... */}
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Bloods (13/5/25)</Typography>} action={<PdfIcons files={pdfMap.bloods} />} />
        <CardContent>
          {/* ... */}
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Other Consults</Typography>} />
        <CardContent>
          {/* ... */}
        </CardContent>
      </Card>

      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>MDT Meeting Notes</Typography>} />
        <CardContent>
          <EditableMDTMeeting />
        </CardContent>
      </Card>
    </Paper>
  );
}
