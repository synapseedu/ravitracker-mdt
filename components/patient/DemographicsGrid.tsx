// ────────────────────────────────────────────────────────────────────────────
// components/DemographicsGrid.tsx
// ────────────────────────────────────────────────────────────────────────────
'use client';
import { Row, Col, Typography } from 'antd';
const { Text } = Typography;

interface Props {
  data: Record<string, string | number>;
}

export default function DemographicsGrid({ data }: Props) {
  return (
    <Row gutter={[16, 8]}>
      {Object.entries(data).map(([key, value]) => (
        <Col xs={12} sm={6} key={key}>
          <Text type="secondary">{key}</Text>
          <br />
          <Text>{value}</Text>
        </Col>
      ))}
    </Row>
  );
}

