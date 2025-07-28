// ────────────────────────────────────────────────────────────────────────────
// components/StatusCard.tsx
// ────────────────────────────────────────────────────────────────────────────
'use client';
import { Row, Col, Typography } from 'antd';
import { subHeadingStyle } from './theme';

const { Title, Text } = Typography;

interface Props {
  history: string[];
  medications: string[];
  social: string;
  functional: string;
}

export default function StatusCard({ history, medications, social, functional }: Props) {
  return (
    <>
      <Row gutter={16}>
        <Col xs={24} md={12}>
          <Title level={5} style={subHeadingStyle}>Past Medical History</Title>
          <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
            {history.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </Col>
        <Col xs={24} md={12}>
          <Title level={5} style={subHeadingStyle}>Medications</Title>
          <ul style={{ paddingLeft: 20, marginBottom: 0 }}>
            {medications.map((m) => (
              <li key={m}>{m}</li>
            ))}
          </ul>
        </Col>
      </Row>

      <Row gutter={16} style={{ marginTop: 16 }}>
        <Col xs={24} md={12}>
          <Title level={5} style={subHeadingStyle}>Social Status</Title>
          <Text>{social}</Text>
        </Col>
        <Col xs={24} md={12}>
          <Title level={5} style={subHeadingStyle}>Functional Status</Title>
          <Text>{functional}</Text>
        </Col>
      </Row>
    </>
  );
}


