import { NextResponse } from 'next/server';

interface DetectionApiResponse {
  outputs?: {
    output_image?: { value: string };
    predictions?: { predictions: Array<{ class: string }> };
  }[];
}

interface ProcessedDetectionResult {
  processedImage: string;
  counts: Record<string, number>;
  summary: string;
}

export async function POST(request: Request) {
  try {
    const { imageType, imageValue, detectionType } = await request.json();

    // Define API endpoints and keys
    const apiEndpoints = {
      hotspot: {
        url: 'https://detect.roboflow.com/infer/workflows/project-jxvu8/detect-count-and-visualize-3',
        apiKey: '4Gdqy3MPPMplaXVVr1yG'
      },
      dust: {
        url: 'https://detect.roboflow.com/infer/workflows/project-jxvu8/detect-count-and-visualize-4',
        apiKey: '4Gdqy3MPPMplaXVVr1yG'
      },
      electricFault: {
        url: 'https://detect.roboflow.com/infer/workflows/electric-johbc/detect-count-and-visualize',
        apiKey: 'PmLftczzLlUvKQFczx50'
      }
    };

    const selectedEndpoint =
      apiEndpoints[detectionType as keyof typeof apiEndpoints];

    if (!selectedEndpoint) {
      return NextResponse.json(
        { error: 'Invalid detection type' },
        { status: 400 }
      );
    }

    // Make API call to Roboflow
    const response = await fetch(selectedEndpoint.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: selectedEndpoint.apiKey,
        inputs: { image: { type: imageType, value: imageValue } }
      })
    });

    const result: DetectionApiResponse = await response.json();

    // Process detection results
    const processedResult = processDetectionResult(result, detectionType);

    return NextResponse.json(processedResult);
  } catch (error) {
    console.error('Detection API error:', error);
    return NextResponse.json(
      { error: 'Failed to process image' },
      { status: 500 }
    );
  }
}

function processDetectionResult(
  result: DetectionApiResponse,
  type: string
): ProcessedDetectionResult {
  const processedImage = result.outputs?.[0]?.output_image?.value || '';

  const counts =
    result.outputs?.[0]?.predictions?.predictions?.reduce(
      (acc: any, pred: any) => {
        acc[pred.class] = (acc[pred.class] || 0) + 1;
        return acc;
      },
      {}
    ) || {};

  let summary = '';
  switch (type) {
    case 'hotspot':
      summary = `PID: ${counts.PID || 0}, PID2: ${counts.PID2 || 0}, PV: ${counts.PV || 0}, Hotspots: ${counts.hotspot || 0}`;
      break;
    case 'dust':
      summary = `Dust Particles: ${counts.dust_particle || 0}, Bird Droppings: ${counts.bird_dropping || 0}, Dry Leaves: ${counts.dry_leaf || 0}`;
      break;
    case 'electricFault':
      summary = `Anomalies: ${counts.ABD || 0}, Cells: ${counts.Cell || 0}, Hotspots: ${(counts.SCHT1 || 0) + (counts.SCHT2 || 0)}`;
      break;
  }

  return { processedImage, counts, summary };
}
