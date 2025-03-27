import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { DustToPanel } from './DustToPanel';
import { MicroCracks } from './MicroCracks';

export default function DefectsStats() {
  return (
    <div className='flex flex-1 flex-col space-y-2'>
      <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-4'>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              No. of Panels Affected
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>145</div>
            <p className='text-xs text-muted-foreground'>
              +20.1% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total no. of Hotspots Detected
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>180</div>
            <p className='text-xs text-muted-foreground'>+12.1% from last month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Total No. of Defects Detected
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-2xl font-bold'>200 this month</div>
            <p className='text-xs text-muted-foreground'>
              +19% from last month
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
            <CardTitle className='text-sm font-medium'>
              Energy output Capacity
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className='text-xl font-bold'>
              82% of max capacity <Progress value={92} />
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4'>
        <DustToPanel />
        <MicroCracks/>
      </div>
    </div>
  );
}
