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
  fontWeight: 600,
  fontSize: 18,
  mb: 1,
};

const pdfMap: Record<string, string[]> = {
  ct: ['Rosee CT TAVI.pdf', 'Rosee medtronic.pdf'],
  tte: ['Rosee TTE.pdf', 'Rosee TTE 15.5.25.pdf'],
  angio: ['Rosee CABG report.pdf'],
  bloods: ['Rosee Bloods.pdf'],
  holter: ['Rosee Holter monitor.pdf'],
  referral: ['Rosee Dr Bassin letter.pdf', 'Rosee referral Dr Rogers.pdf'],
  mdt: ['Rosee MDT.docx'],
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

const MDT_MEETING_KEY = 'rosee_mdt_notes';

function EditableMDTMeeting() {
  const [notes, setNotes] = useState<string>('');
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

export default function RoseePatientPage() {
  return (
    <PatientLayout title="Paul Rosee">

      {/* Patient Details */}
      <Typography variant="h6" sx={sectionTitleSx}>
        Patient Details
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">DOB</Typography>
          <Typography>03/09/1943</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Age</Typography>
          <Typography>81</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">MRN</Typography>
          <Typography>0268471</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Referral Date</Typography>
          <Typography>23/6/25</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Structural Physician</Typography>
          <Typography>Dr Hansen</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Referrer</Typography>
          <Typography>Dr Rogers / Dr Bassin</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Contact</Typography>
          <Typography>Dianne 0476 636 512</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Email</Typography>
          <Typography>dro02956@bigpond.net.au</Typography>
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
                <li>Sensorineural deafness - since birth</li>
                <li>Aortic stenosis (known to Dr James Rogers)</li>
                <li>CABG x3 1994</li>
                <li>GORD</li>
                <li>IHD</li>
                <li>PE 2001, 2004</li>
                <li>Perforated oesophagus - open repair 2024</li>
                <li>Falls 2022, 2023</li>
              </Box>
            </Grid>
            <Grid xs={6}>
              <Typography fontWeight={600} gutterBottom>Medications:</Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                <li>Apixaban 5mg BD</li>
                <li>Crestor 40mg nocte</li>
                <li>Ezetrol 10mg</li>
                <li>Imdur 129mg mane</li>
                <li>Ramipril 2.5mg mane</li>
                <li>Vitamin D</li>
                <li>Pantoprazole PRN</li>
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
            Lives with wife (carer for her).<br />
            Lives in retirement village.<br />
            Services for cleaning.<br />
            Mobilises independently.<br />
            Son lives nearby.
          </Typography>
        </CardContent>
      </Card>

      {/* TTE Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>TTE</Typography>} action={<PdfIcons files={pdfMap.tte} />} />
        <CardContent>
          {/* ... fields ... */}
        </CardContent>
      </Card>

      {/* Angio / CABG Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Angio / CABG</Typography>} action={<PdfIcons files={pdfMap.angio} />} />
        <CardContent>
          {/* ... */}
        </CardContent>
      </Card>

      {/* Holter Monitor Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Holter Monitor</Typography>} action={<PdfIcons files={pdfMap.holter} />} />
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
        <CardHeader title={<Typography sx={sectionTitleSx}>Bloods</Typography>} action={<PdfIcons files={pdfMap.bloods} />} />
        <CardContent>
          {/* ... */}
        </CardContent>
      </Card>

      {/* Other Consults Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Other Consults</Typography>} action={<PdfIcons files={pdfMap.referral} />} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography variant="subtitle2" color="textSecondary">Aged Care</Typography>
              <Typography>&nbsp;</Typography>
            </Grid>
            <Grid xs={6}>
              <Typography variant="subtitle2" color="textSecondary">Cardiothoracic</Typography>
              <Typography>&nbsp;</Typography>
            </Grid>
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
