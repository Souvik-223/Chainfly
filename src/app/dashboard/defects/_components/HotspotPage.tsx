'use client';
import React, { useState } from 'react';
import { HotspotImageData } from '@/constants/data';
import { hotspotDefectsData } from '@/constants/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Image from 'next/image';

export default function HotspotPage() {
  const [isZoomed, setIsZoomed] = useState(false);

  const toggleZoom = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className='scrollbarHide h-[75vh] w-[40vw] overflow-scroll overflow-x-hidden scrollbar-hide'>
      <Card className=''>
        <CardHeader>
          <CardTitle>Defects and Hotspots</CardTitle>
          <CardDescription>Images for the Hotspot Defects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-2 gap-4'>
            <div>
              {HotspotImageData.map((image, index) => (
                <div
                  className={`image-container my-4 flex h-64 items-center justify-center rounded-xl border-2 ${isZoomed ? 'zoomed' : ''}`}
                  onClick={toggleZoom}
                  key={index}
                >
                  <Image
                    key={index}
                    src={image.src}
                    alt={image.alt}
                    width={300}
                    height={200}
                  />
                </div>
              ))}
            </div>
            <div>
              {hotspotDefectsData.map((panel) => (
                <Card className='my-4 h-64' key={panel.id}>
                  <CardHeader>
                    <CardTitle>Panel ID: {panel.id}</CardTitle>
                  </CardHeader>
                  <CardContent className='space-y-2'>
                    <div>
                      <p>PID Detection: {panel.HotspotDetection?.PID}</p>
                      <p>PID2 Detection: {panel.HotspotDetection?.PID2}</p>
                      <p>PV Modules: {panel.HotspotDetection?.PV}</p>
                      <p>
                        Hotspot Detection: {panel.HotspotDetection?.Hotspots}
                      </p>
                    </div>
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
