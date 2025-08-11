import { Typography } from 'antd';
import PdfIcons from './PdfIcons';
import type { Consults } from '../../data/patients/types';

const { Text } = Typography;

interface Props {
  consults: Consults;
}

export default function ConsultsList({ consults }: Props) {
  if (Array.isArray(consults)) {
    return (
      <>
        {consults.map((c, idx) => (
          <div key={idx} style={{ marginBottom: 8 }}>
            <Text strong>
              {c.date} {c.clinician}:
            </Text>{' '}
            {c.outcome}{' '}
            <PdfIcons files={c.source} />
          </div>
        ))}
      </>
    );
  }
  return (
    <>
      {Object.entries(consults).map(([key, c]) => (
        <div key={key} style={{ marginBottom: 8 }}>
          <Text strong>{c.clinician}:</Text>{' '}
          {c.recommendation}
        </div>
      ))}
    </>
  );
}

