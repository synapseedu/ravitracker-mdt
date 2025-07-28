/* -------------------------------------------------------------------------
   components/patient/DemographicsGrid.tsx (rewritten)
   -------------------------------------------------------------------------*/
'use client';
import { Row, Col, Typography } from 'antd';
import { ReactNode } from 'react';
const { Text } = Typography;

interface Props {
  data: Record<string, ReactNode | string | number>;
}

export default function DemographicsGrid({ data }: Props) {
  return (
    <Row gutter={[16, 8]}>
      {Object.entries(data).map(([key, value]) => (
        <Col xs={12} sm={6} key={key}>
          <Text type="secondary">{key}</Text>
          <br />
          {typeof value === 'string' || typeof value === 'number' ? (
            <Text>{value}</Text>
          ) : (
            value
          )}
        </Col>
      ))}
    </Row>
  );
}
