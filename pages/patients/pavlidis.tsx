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
  ct: ['Pavlidis medtronic.pdf'],
  tte: ['Pavlidis referral + TTE.pdf', 'Pavlidis RNSH TTE 23.5.25.pdf'],
  angio: ['Pavlidis angio.pdf'],
  bloods: ['Pavlidis GP health summary + renal notes.pdf'],
  consults: ['Pavlidis endo consult.pdf'],
  referral: [
    'Pavladis Dr Mathur.pdf',
    'Pavlidis referral to Dr Mathur.pdf',
    'Pavlidis referral to Dr Mathur.pdf.docx',
  ],
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

const MDT_MEETING_KEY = 'pavlidis_mdt_notes';

function EditableMDTMeeting() {
  const [notes, setNotes] = useState<string>('');
  useEffect(() => {
    const stored = sessionStorage.getItem(MDT_MEETING_KEY);
    if (stored) setNotes(stored);
  }, []);
  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
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

export default function PavlidisPatientPage() {
  return (
    <PatientLayout title="Angelo Pavlidis">

      {/* Section Headings */}
      <Typography variant="h6" sx={sectionTitleSx}>
        Patient Details
      </Typography>

      {/* Patient Details Grid */}
      <Grid container spacing={2} sx={{ mb: 3 }}>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">
            DOB
          </Typography>
          <Typography>23/1/1951</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">
            Age
          </Typography>
          <Typography>74</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">
            MRN
          </Typography>
          <Typography>0791463</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">
            Referral Date
          </Typography>
          <Typography>23/5/25</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">
            Structural Physician
          </Typography>
          <Typography>Dr Bhindi</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">
            Referrer
          </Typography>
          <Typography>Dr Yeoh / Dr Ekmijian</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">
            Contact
          </Typography>
          <Typography>Louise (wife): 0415 100 153</Typography>
        </Grid>
        <Grid xs={6}>
          <Typography variant="subtitle2" color="textSecondary">
            Email
          </Typography>
          <Typography>&nbsp;</Typography>
        </Grid>
        <Grid xs={12}>
          <Typography variant="subtitle2" color="textSecondary">
            Special Comments
          </Typography>
          <Typography>&nbsp;</Typography>
        </Grid>
      </Grid>

      {/* Background */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader
          title={<Typography sx={sectionTitleSx}>Background</Typography>}
        />
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={6}>
              <Typography fontWeight={600} gutterBottom>
                Past Medical History:
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                <li>CKD stage IV (Kt Dr Siriwardana, on PD since 2005)</li>
                <li>IHD</li>
                <li>CABG 2006 RPA Dr Wilson</li>
                <li>T2DM on insulin</li>
                <li>PVD - R leg stent</li>
                <li>Dyslipidaemia</li>
                <li>HTN</li>
                <li>Obesity</li>
                <li>OSA</li>
              </Box>
            </Grid>
            <Grid xs={6}>
              <Typography fontWeight={600} gutterBottom>
                Medications:
              </Typography>
              <Box component="ul" sx={{ pl: 2, m: 0 }}>
                <li>Irbesartan 300mg</li>
                <li>Frusimide 40mg mane</li>
                <li>Metoprolol 50mg BD</li>
                <li>Lercanidipine 10mg BD</li>
                <li>ISMN 60mg BD</li>
                <li>Aspirin 100mg</li>
                <li>Ozempic once weekly</li>
                <li>Ryzodeg insulin 16-18U mane, 22U nocte</li>
                <li>Rosuvastatin/Ezetimibe 40/10mg daily</li>
                <li>Pantoprazole 40mg BD</li>
                <li>Duodart 500/400mcg mane</li>
                <li>Betavit mane</li>
                <li>Magnesium nocte</li>
                <li>Cholecalciferol</li>
              </Box>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      {/* Social & Functional Status */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader
          title={<Typography sx={sectionTitleSx}>Social & Functional Status</Typography>}
        />
        <CardContent>
          <Typography component="div">
            Lives West Pymble with wife, 4 daughters and their families.<br />
            Works as a vegetable store owner.<br />
            Independent in ADLs, normally unlimited exercise tolerance.<br />
            Ex-smoker (20 cig/d for 35 years, quit ~age 40).<br />
            Now: worsening SOBOE ~100m on flat; difficult with hills/stairs.<br />
            Occasional chest discomfort (more like reflux).<br />
            Denies oedema, PND, orthopnoea.
          </Typography>
        </CardContent>
      </Card>

      {/* TTE Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader
          title={<Typography sx={sectionTitleSx}>TTE</Typography>}
          action={<PdfIcons files={pdfMap.tte} />}
        />
        <CardContent>
          <Grid container spacing={2}>
            {/* ... fields ... */}
          </Grid>
        </CardContent>
      </Card>

      {/* Angio / ECG Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader
          title={<Typography sx={sectionTitleSx}>Angio / ECG</Typography>}
          action={<PdfIcons files={pdfMap.angio} />}
        />
        <CardContent>
          {/* ... */}
        </CardContent>
      </Card>

      {/* CT TAVI / Access / Valve Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader
          title={<Typography sx={sectionTitleSx}>CT TAVI / Access / Valve</Typography>}
          action={<PdfIcons files={pdfMap.ct} />}
        />
        <CardContent>
          {/* ... */}
        </CardContent>
      </Card>

      {/* Bloods Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader
          title={<Typography sx={sectionTitleSx}>Bloods (29/5/25)</Typography>}
          action={<PdfIcons files={pdfMap.bloods} />}
        />
        <CardContent>
          {/* ... */}
        </CardContent>
      </Card>

      {/* Other Consults Section */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader
          title={<Typography sx={sectionTitleSx}>Other Consults</Typography>}
          action={<PdfIcons files={pdfMap.consults} />}
        />
        <CardContent>
          {/* ... */}
        </CardContent>
      </Card>

      {/* MDT Meeting Notes */}
      <Card variant="outlined" sx={{ mb: 2 }}>
        <CardHeader
          title={<Typography sx={sectionTitleSx}>MDT Meeting Notes</Typography>}
        />
        <CardContent>
          <EditableMDTMeeting />
        </CardContent>
      </Card>
    </PatientLayout>
  );
}
