'use client';
import React, { useState } from 'react';
import { PanelImageData } from '@/constants/data';
import { panelDefectsData } from '@/constants/data';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Image from 'next/image';

export default function PanelDefects() {
  const [detectionType, setDetectionType] = React.useState<
    'dust' | 'electricFault'
  >('dust');

  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className='scrollbarHide h-[75vh] w-[40vw] overflow-x-hidden overflow-y-scroll scrollbar-hide'>
      <Card className=''>
        <CardHeader>
          <CardTitle>Solar Panel Defects</CardTitle>
          <CardDescription>Images for the panel Defects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='mb-4'>
            <Tabs
              defaultValue={detectionType}
              onValueChange={(value) =>
                setDetectionType(value as 'dust' | 'electricFault')
              }
            >
              <TabsList className='grid w-full grid-cols-2'>
                <TabsTrigger value='dust'>Dust Detection</TabsTrigger>
                <TabsTrigger value='electricFault'>
                  Electrical Fault Detection
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              {PanelImageData.map((image, index) => (
                <div
                  className={`image-container my-4 flex h-64 items-center justify-center rounded-xl border-2 ${isZoomed ? 'zoomed' : ''}`}
                  onClick={toggleZoom}
                  key={index}
                >
                  {detectionType === 'dust' ? (
                    <Image
                      className='object-contain'
                      key={index}
                      src={image.src}
                      alt={image.alt}
                      width={200}
                      height={100}
                    />
                  ) : detectionType === 'electricFault' ? (
                    <Image
                      className='object-contain'
                      key={index}
                      src={image.url}
                      alt={image.alt}
                      width={200}
                      height={100}
                    />
                  ) : null}
                </div>
              ))}
            </div>
            <div>
              {panelDefectsData.map((panel) => (
                <Card className='my-4 h-64' key={panel.id}>
                  <CardHeader>
                    <CardTitle>Panel ID: {panel.id}</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-2'>
                    {detectionType === 'dust' ? (
                      <div>
                        <p>
                          Dust Particles: {panel.DustDetection?.DustParticles}
                        </p>
                        <p>
                          Bird Droppings: {panel.DustDetection?.BirdDroppings}
                        </p>
                        <p>Dry Leaves: {panel.DustDetection?.DryLeaves}</p>
                        {panel.DustDetection?.DryDebris && (
                          <div className='ml-4'>
                            <p>
                              Leaves: {panel.DustDetection.DryDebris.Leaves}
                            </p>
                            <p>
                              Seed Husks:{' '}
                              {panel.DustDetection.DryDebris.SeedHusks}
                            </p>
                          </div>
                        )}
                      </div>
                    ) : detectionType === 'electricFault' ? (
                      <div>
                        <p>
                          Anomalies: {panel.electricalFaultDetection?.Anomalies}
                        </p>
                        <p>
                          Cell Components:{' '}
                          {panel.electricalFaultDetection?.CellComponents}
                        </p>
                        {panel.electricalFaultDetection?.Hotspots && (
                          <div className='ml-4'>
                            <p>
                              SCHT1:{' '}
                              {panel.electricalFaultDetection.Hotspots.SCHT1}
                            </p>
                            <p>
                              SCHT2:{' '}
                              {panel.electricalFaultDetection.Hotspots.SCHT2}
                            </p>
                          </div>
                        )}
                      </div>
                    ) : null}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
