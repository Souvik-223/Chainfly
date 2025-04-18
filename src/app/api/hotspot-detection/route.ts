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
    const { imageType, imageValue } = await request.json();

    // Define API endpoint and key for hotspot
    const apiEndpoint = {
      url: 'https://detect.roboflow.com/infer/workflows/project-jxvu8/detect-count-and-visualize-3',
      apiKey: '4Gdqy3MPPMplaXVVr1yG'
    };

    // Make API call to Roboflow
    const response = await fetch(apiEndpoint.url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        api_key: apiEndpoint.apiKey,
        inputs: { image: { type: imageType, value: imageValue } }
      })
    });

    const result: DetectionApiResponse = await response.json();

    // Process detection results
    const processedResult = processDetectionResult(result);

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
  result: DetectionApiResponse
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

  const summary = `PID: ${counts.PID || 0}, PID2: ${counts.PID2 || 0}, PV: ${counts.PV || 0}, Hotspots: ${counts.hotspot || 0}`;

  return { processedImage, counts, summary };
}
