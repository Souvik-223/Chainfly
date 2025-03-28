import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export interface DetectionResult {
  processedImage: string;
  counts: Record<string, number>;
  summary: string;
}

interface ResultsProps {
  results: DetectionResult;
  type: 'hotspot' | 'dust' | 'electricFault';
}

export function DetectionResults({ results, type }: ResultsProps) {
  const getDetailedSummary = () => {
    switch (type) {
      case 'hotspot':
        return (
          <div>
            <p>
              <strong>PID Detection:</strong> {results.counts.PID || 0}{' '}
              instances detected
            </p>
            <p>
              <strong>PV Modules:</strong> {results.counts.PV || 0} detected
            </p>
            <p>
              <strong>Hotspots:</strong> {results.counts.hotspot || 0}{' '}
              identified
            </p>
          </div>
        );
      case 'dust':
        return (
          <div>
            <p>
              <strong>Dust Particles:</strong>{' '}
              {results.counts.dust_particle || 0} detected
            </p>
            <p>
              <strong>Bird Droppings:</strong>{' '}
              {results.counts.bird_dropping || 0} found
            </p>
            <p>
              <strong>Dry Debris:</strong> Leaves:{' '}
              {results.counts.dry_leaf || 0}, Seed Husks:{' '}
              {results.counts.dry_seed_husk || 0}
            </p>
          </div>
        );
      case 'electricFault':
        return (
          <div>
            <p>
              <strong>Anomalies:</strong> {results.counts.ABD || 0} detected
            </p>
            <p>
              <strong>Cell Components:</strong> {results.counts.Cell || 0}{' '}
              identified
            </p>
            <p>
              <strong>Hotspots:</strong> SCHT1: {results.counts.SCHT1 || 0},
              SCHT2: {results.counts.SCHT2 || 0}
            </p>
          </div>
        );
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>
          {type.charAt(0).toUpperCase() + type.slice(1)} Detection Results
        </CardTitle>
      </CardHeader>
      <CardContent className='space-y-4'>
        {results.processedImage && (
          <div className='flex justify-center'>
            <img
              src={`data:image/jpeg;base64,${results.processedImage}`}
              alt={`${type} detection result`}
              className='h-auto max-w-full rounded border-2'
            />
          </div>
        )}
        <div className='text-sm'>
          <strong>Detection Summary:</strong> {results.summary}
        </div>
        {getDetailedSummary()}
      </CardContent>
    </Card>
  );
}
