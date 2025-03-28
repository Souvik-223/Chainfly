'use client';

import { useState } from 'react';
import axios from 'axios';
import { toast } from 'sonner';

import { FileUploader } from '@/components/file-uploader';
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import { DetectionResults, DetectionResult } from './_components/Results';

export default function DefectDetectionPage() {
  const [file, setFile] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [detectionResults, setDetectionResults] = useState<{
    hotspot?: DetectionResult;
    dust?: DetectionResult;
    electricFault?: DetectionResult;
  }>({});

  const handleFileUpload = async (files: File[]) => {
    if (files.length > 0) {
      setFile(files[0]);
      setImageUrl('');
      toast.info('File uploaded successfully');
    }
  };

  const processImage = async () => {
    if (!file && !imageUrl) {
      toast.error('Please upload an image or provide a URL');
      return;
    }

    setIsProcessing(true);

    try {
      let imageType = imageUrl ? 'url' : 'base64';
      let imageValue = imageUrl || '';

      if (file) {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        imageValue = await new Promise<string>((resolve) => {
          reader.onloadend = () => {
            imageType = 'base64';
            resolve(reader.result?.toString().split(',')[1] || '');
          };
        });
      }

      // Parallel API calls for different detection types
      const detectionTypes = ['hotspot', 'dust', 'electricFault'] as const;

      const results = await Promise.all(
        detectionTypes.map((type) =>
          axios.post('/api/defect-detection', {
            imageType,
            imageValue,
            detectionType: type
          })
        )
      );

      // Create results object
      const processedResults = detectionTypes.reduce(
        (acc, type, index) => {
          acc[type] = results[index].data;
          return acc;
        },
        {} as typeof detectionResults
      );

      setDetectionResults(processedResults);
      toast.success('Image processed successfully');
    } catch (error) {
      console.error('Error processing image:', error);
      toast.error('Failed to process image');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <PageContainer>
      <div className='flex flex-col gap-5'>
        <div className='mb-8 flex flex-1 flex-col space-y-6'>
          <Heading
            title='Solar Panel Defect Detection'
            description='Upload an image to detect various solar panel defects'
          />
          <Separator />
        </div>

        <div className='flex w-full flex-col justify-center gap-5'>
          <FileUploader
            maxFiles={1}
            maxSize={4 * 1024 * 1024}
            onUpload={handleFileUpload}
          />
          <div className='flex items-center gap-2'>
            <input
              type='text'
              placeholder='Or enter image URL'
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className='flex-1 rounded border p-2'
            />
          </div>
          <Button
            variant='default'
            className='mx-auto w-fit'
            onClick={processImage}
            disabled={isProcessing}
          >
            {isProcessing ? 'Processing...' : 'Process Image'}
          </Button>

          {Object.keys(detectionResults).length > 0 && (
            <Tabs defaultValue='hotspot' className='w-full'>
              <TabsList className='grid w-full grid-cols-3'>
                <TabsTrigger value='hotspot'>Hotspot Detection</TabsTrigger>
                <TabsTrigger value='dust'>Dust Detection</TabsTrigger>
                <TabsTrigger value='electricFault'>
                  Electric Fault Detection
                </TabsTrigger>
              </TabsList>

              {(['hotspot', 'dust', 'electricFault'] as const).map((type) => (
                <TabsContent key={type} value={type}>
                  {detectionResults[type] && (
                    <DetectionResults
                      results={detectionResults[type]!}
                      type={type}
                    />
                  )}
                </TabsContent>
              ))}
            </Tabs>
          )}
        </div>
      </div>
    </PageContainer>
  );
}
