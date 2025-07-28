'use client'

import { useEffect, useState } from 'react'
import {
  Row,
  Col,
  Card,
  Typography,
  Tooltip,
  Button,
  Space,
  Input,
} from 'antd'
import { FilePdfOutlined } from '@ant-design/icons'
import PatientLayout from '../../components/PatientLayout'

const { Title, Text } = Typography

/* ---------- visual helper (dark‑blue header, blue sub‑titles) ---------- */
const PRIMARY = '#1d39c4'       // deeper Ant Design blue‑8
const HEADER_BG = PRIMARY       // dark blue background
const HEADER_TXT = '#ffffff'    // white text

const headStyle = {
  background: HEADER_BG,
  color: HEADER_TXT,
  fontWeight: 600,
} as const
const iconBtnStyle = { color: HEADER_TXT } as const
const subHeadingStyle = { color: PRIMARY } as const

/* ----------------------- Helpers ----------------------- */
const pdfMap: Record<string, string[]> = {
  ct: ['Watson CT TAVI.pdf', 'Watson medtronic.pdf'],
  tte: ['Watson TTE 26.3.25.pdf'],
  angio: ['Watson angio.pdf'],
  ecg: ['Watson ECG.pdf'],
  bloods: ['Watson bloods.pdf'],
  mmse: ['Watson MMSE.pdf'],
  referral: ['Watson Dr Bassin.pdf', 'Watson Dr Rogers referral.pdf'],
  respiratory: ['Watson respiratory Dr.pdf'],
  mdt: ['Watson MDT.docx'],
}

const PdfIcons = ({ files }: { files?: string[] }) => {
  if (!files?.length) return null
  return (
    <Space>
      {files.map((f) => (
        <Tooltip title={f} key={f}>
          <Button
            type="text"
            size="small"
            href={`/pdfs/${encodeURIComponent(f)}`}
            target="_blank"
            icon={<FilePdfOutlined />}
            style={iconBtnStyle}
          />
        </Tooltip>
      ))}
    </Space>
  )
}

/* ------------------- MDT notes textarea ------------------- */
const MDT_KEY = 'watson_mdt_notes'
const EditableMDTMeeting = () => {
  const [notes, setNotes] = useState('')
  useEffect(() => {
    const stored = sessionStorage.getItem(MDT_KEY)
    if (stored) setNotes(stored)
  }, [])
  return (
    <Input.TextArea
      autoSize={{ minRows: 4, maxRows: 12 }}
      placeholder="Type or paste MDT notes and outcomes here (saved in this tab only)"
      value={notes}
      onChange={(e) => {
        const val = e.target.value
        setNotes(val)
        sessionStorage.setItem(MDT_KEY, val)
      }}
    />
  )
}

/* ====================== Page ====================== */
export default function WatsonPatientPage() {
  return (
    <PatientLayout title={<Title level={3} style={{ color: PRIMARY, margin: 0 }}>Barry Watson</Title>}>
      {/* Demographics */}
      <Card bordered={false} style={{ marginBottom: 24 }}>
        <Row gutter={[16, 8]}>
          {[
            ['DOB', '9/12/1952'],
            ['Age', '72'],
            ['MRN', '0106881'],
            ['Referral Date', '—'],
            ['Structural Physician', 'Dr Bhindi'],
            ['Referrer', 'Dr Rogers'],
            ['Contact', '0412 500 375'],
            ['Email', 'sueandbazz@gmail.com'],
            ['Weight / Height', '125 kg / 170 cm'],
          ].map(([label, value]) => (
            <Col xs={12} sm={6} key={label as string}>
              <Text type="secondary">{label}</Text>
              <br />
              <Text>{value}</Text>
            </Col>
          ))}
        </Row>
      </Card>

      {/* Background */}
      <Card title="Background" headStyle={headStyle} style={{ marginBottom: 24 }}>
        <Row gutter={16}>
          <Col xs={24} md={12}>
            <Title level={5} style={subHeadingStyle}>Past Medical History</Title>
            <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
              {[
                'Severe obesity (125 kg, was 140 kg)',
                'CKD (creatinine 200)',
                'Permanent AF',
                'OSA on CPAP',
                'HTN',
                'Gout',
                'Back pain, lumbar disc disease',
                'Peripheral neuropathy',
                'Osteopaenia',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Col>
          <Col xs={24} md={12}>
            <Title level={5} style={subHeadingStyle}>Medications</Title>
            <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
              {[
                'Apixaban 5 mg',
                'Dapagliflozin 10 mg',
                'Atorvastatin 10 mg',
                'Motilium PRN',
                'Telmisartan 40 mg',
                'Amlodipine 5 mg',
                'Vitamin D',
                'Pantoprazole 40 mg',
                'Xalacom eye drops',
                'Trelegy Ellipta',
                'Fish oil',
                'Panadol',
                'Furosemide 40 mg mane (new)',
              ].map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Col>
        </Row>
      </Card>

      {/* Social Status */}
      <Card title="Social Status" headStyle={headStyle} style={{ marginBottom: 24 }}>
        <Text>
          Lives at home with wife and sons. Wife has low vision. Quit smoking 34 years ago (15 pack‑years). Drinks 1–2 mid‑strength beers/day (reduced).
        </Text>
      </Card>

      {/* Functional Status */}
      <Card title="Functional Status" headStyle={headStyle} style={{ marginBottom: 24 }}>
        <Text>
          Uses walking stick due to back pain. Independent with pADLs, shares household tasks. Still drives. Worsening SOBOE—shops slowly, worse with hills/stairs. Occasional dizziness, no syncope, chest pain or oedema. Occasional poor CPAP tolerance.
        </Text>
      </Card>

      {/* Sections with PDFs */}
      {[
        { key: 'tte', title: 'TTE' },
        { key: 'angio', title: 'Angio (28 May 25 Gosford)' },
        { key: 'ecg', title: 'ECG (28 May 25 Gosford)' },
        { key: 'ct', title: 'CT TAVI / Access / Valve' },
        { key: 'respiratory', title: 'Pulmonary / Respiratory' },
        { key: 'bloods', title: 'Bloods' },
        { key: 'referral', title: 'Other Consults' },
      ].map(({ key, title, extra }) => (
        <Card
          key={key}
          title={title}
          headStyle={headStyle}
          extra={
            <Space>
              <PdfIcons files={pdfMap[key]} />
              {extra?.map((k) => (
                <PdfIcons key={k} files={pdfMap[k]} />
              ))}
            </Space>
          }
          style={{ marginBottom: 24 }}
        >
          {key === 'angio' && (
            <Row gutter={16}>
              <Col span={24}>
                <Text type="secondary">Angio:</Text> Mild non-obstructive CAD
              </Col>
            </Row>
          )}
          {key === 'ecg' && (
            <Row gutter={16}>
              <Col span={24}>
                <Text type="secondary">ECG:</Text> AF
              </Col>
            </Row>
          )}
          {key === 'ct' && <Text type="secondary">Incidentals:</Text>}
        </Card>
      ))}

      {/* MDT notes */}
      <Card title="MDT Meeting Notes" headStyle={headStyle} style={{ marginBottom: 24 }}>
        <EditableMDTMeeting />
      </Card>
    </PatientLayout>
  )
}
