import React from 'react';
import { HotspotImageData } from '@/constants/data';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import Image from 'next/image';

export default function HotspotPage() {
  return (
    <div className='scrollbarHide h-[75vh] w-[40vw] overflow-scroll overflow-x-hidden scrollbar-hide'>
      <Card className=''>
        <CardHeader>
          <CardTitle>Defects and Hotspots</CardTitle>
          <CardDescription>Images for the Hotspot Defects</CardDescription>
        </CardHeader>
        <CardContent>
          <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3'>
            {HotspotImageData.map((image, index) => (
              <Image
                key={index}
                src={image.src}
                alt={image.alt}
                width={300}
                height={200}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
