import Image from 'next/image';
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Icons } from '@/components/icons';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';

export default function page() {
  return (
    <div className='container grid grid-cols-[80%_20%] gap-2'>
      <div className='relative w-[70vw] h-[80vh] container border-2 rounded-xl border-green-700 overflow-hidden items-center justify-center  mx-auto'>
        <Image
          className='object-contain h-full w-full'
          src='/gis-image.png'
          alt='GIS Map'
          width={1000}
          height={1000}
        />
      </div>
      <Card className='h-fit'>
        <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
          <CardTitle className='text-xl font-medium'>Map Options</CardTitle>
          <Icons.Map className='h-4 w-4 text-muted-foreground' />
        </CardHeader>
        <CardContent>
          <p className='text-xs text-muted-foreground'>Customize</p>
          <Separator />
          <ul className='py-2 text-sm font-bold'>
            <li className='py-1'>
              <Button variant={'outline'} className='w-full text-start'>
                <Icons.warning className=' text-red-700 mx-2 h-4 w-4 text-muted-foreground' />{' '}
                Locate Faults
              </Button>
            </li>
            <li className='py-1'>
              <Button variant={'outline'} className='w-full text-start'>
                <Icons.employee className='mx-2 h-4 w-4 text-muted-foreground' />{' '}
                Contact Team
              </Button>
            </li>
            <li className='py-1'>
              <Button variant={'outline'} className='w-full text-start'>
                <Icons.laptop className='text-yellow-600 mx-2 h-4 w-4 text-muted-foreground' />{' '}
                Panel Numbers
              </Button>
            </li>
            <li className='py-1'>
              <Button variant={'outline'} className='w-full text-start'>
                <Icons.kanban className='text-green-700 mx-2 h-4 w-4 text-muted-foreground' />{' '}
                Satellite view
              </Button>
            </li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
