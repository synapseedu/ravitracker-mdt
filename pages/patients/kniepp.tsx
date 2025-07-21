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
  ct: ['Kniepp CT TAVI.pdf', 'Kniepp medtronic.pdf'],
  tte: ['Kniepp RNSH TTE 12.6.25.pdf', 'Kniepp TTE 30.4.24.pdf'],
  angio: [],
  bloods: [],
  agedcare: ['Kniepp aged care.pdf'],
  consults: ['Kniepp structural consult.pdf'],
  ctsx: ['Kniepp CTSX.pdf'],
  ecg: ['Kniepp ECG.pdf'],
  mdt: ['Kniepp MDT.docx'],
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

const MDT_MEETING_KEY = 'kniepp_mdt_notes';

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

export default function KnieppPatientPage() {
  return (
    <Paper
      elevation={3}
      sx={{ maxWidth: 800, mx: 'auto', mt: 5, p: 4, borderRadius: 2, bgcolor: '#fff' }}
    >
      {/* Main Title */}
      <Typography variant="h4" sx={mainTitleSx}>
        John Kniepp
      </Typography>

      {/* Patient Details */}
      <Typography variant="h6" sx={sectionTitleSx}>
        Patient Details
      </Typography>
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary">DOB</Typography>
          <Typography>7/12/1950</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Age</Typography>
          <Typography>74</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary">MRN</Typography>
          <Typography>2029741</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Referral Date</Typography>
          <Typography>12/6/25</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Structural Physician</Typography>
          <Typography>Dr Hansen</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Referrer</Typography>
          <Typography>Dr Chung (Renal)</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="subtitle2" color="textSecondary">Contact</Typography>
          <Typography>9346 1300</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" color="textSecondary">Weight/Height</Typography>
          <Typography>65kg / 160cm</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle2" color="textSecondary">Comments</Typography>
          <Typography>Intellectual disability; public Guardian</Typography>
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
                <li>Intellectual disability (public guardianship)</li>
                <li>ESKD secondary to hypertension (HD MWF)</li>
                <li>Schizoaffective disorder</li>
              </Box>
            </Grid>
            <Grid item xs={6}>
              <Typography fontWeight={600} gutterBottom>Medications:</Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                <li>Calcitriol 0.25mcg</li>
                <li>Calcium carbonate 600mg TDS</li>
                <li>Aranesp</li>
                <li>Docusate-senna</li>
                <li>Escitalopram 10mg mane</li>
                <li>Hydralazine variations</li>
                <li>Lercanidipine 10mg BD</li>
                <li>Topical lidocaine-prilocaine</li>
                <li>Methyldopa 250mg TDS</li>
                <li>Olanzapine 15mg nocte</li>
                <li>Paracetamol</li>
                <li>Sevelamer 800mg TDS</li>
                <li>Aspirin 100mg <b>new</b></li>
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
            Lives in RACF (Cooinda Court).<br />
            Independent with ADLs; occasional assistance.<br />
            Requires help with toweling and shaving.<br />
            Supported by public guardian & brother.<br />
          </Typography>
        </CardContent>
      </Card>

      {/* TTE Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>TTE: 12/6/25</Typography>} action={<PdfIcons files={pdfMap.tte} />} />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}><Typography variant="subtitle2" color="textSecondary">LV EF</Typography><Typography>55-60%</Typography></Grid>
            <Grid item xs={6}><Typography variant="subtitle2" color="textSecondary">AVA</Typography><Typography>0.9</Typography></Grid>
            <Grid item xs={6}><Typography variant="subtitle2" color="textSecondary">AVAi</Typography><Typography>0.5</Typography></Grid>
            <Grid item xs={6}><Typography variant="subtitle2" color="textSecondary">Peak Gradient</Typography><Typography>80.6</Typography></Grid>
            <Grid item xs={6}><Typography variant="subtitle2" color="textSecondary">Mean Gradient</Typography><Typography>47</Typography></Grid>
            <Grid item xs={6}><Typography variant="subtitle2" color="textSecondary">Peak AV</Typography><Typography>4.5</Typography></Grid>
            <Grid item xs={12}><Typography variant="subtitle2" color="textSecondary">Comments</Typography><Typography>Severe AS, trileaflet valve; echo density in LA</Typography></Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Angio / ECG Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Angio / ECG</Typography>} action={<PdfIcons files={pdfMap.ecg} />} />
        <CardContent>
          <Typography variant="subtitle2" color="textSecondary">Angio</Typography>
          <Typography>Not completed; CT shows non-obstructive calcium</Typography>
          <Typography variant="subtitle2" color="textSecondary" sx={{ mt: 1 }}>ECG</Typography>
          <Typography>SR, LVH</Typography>
        </CardContent>
      </Card>

      {/* CT TAVI / Access / Valve Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>CT TAVI / Access / Valve</Typography>} action={<PdfIcons files={pdfMap.ct} />} />
        <CardContent>
          <Typography variant="subtitle2" color="textSecondary">Incidentals</Typography>
          <Typography>Nil</Typography>
        </CardContent>
      </Card>

      {/* Aged Care Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader title={<Typography sx={sectionTitleSx}>Aged Care</Typography>} action={<PdfIcons files={pdfMap.agedcare} />} />
        <CardContent>
          <Typography>Dr Ogle</Typography>
        </CardContent>
      </Card>

      {/* Cardiothoracic / Structural Consults */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader
          title={<Typography sx={sectionTitleSx}>Cardiothoracic / Structural Consults</Typography>}
          action={
            <>
              <PdfIcons files={pdfMap.consults} />
              <PdfIcons files={pdfMap.ctsx} />
            </>
          }
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="subtitle2" color="textSecondary">Cardiothoracic Surgeon</Typography>
              <Typography>Dr Sherrah</Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="subtitle2" color="textSecondary">Structural Consult</Typography>
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
    </Paper>
  );
}
