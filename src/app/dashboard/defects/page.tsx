import React from 'react'
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import PanelDefects from './_components/PanelDefects';
import HotspotPage from './_components/HotspotPage';
import Link from 'next/link';
import { buttonVariants } from '@/components/ui/button';
import { Plus } from 'lucide-react';
import { cn } from '@/lib/utils';
import DefectsStats from './_components/DefectsStats';

export default function Defects() {
  return (
    <PageContainer>
    <div className='flex flex-1 flex-col space-y-4'>
      <div className='flex items-start justify-between'>
        <Heading
          title='Defects and Issues'
          description='View Defect analysis over the panels and resolve issues.'
        />
        <Link
            href='/dashboard/defects/test-defect'
            className={cn(buttonVariants(), 'text-xs md:text-sm')}
          >
            <Plus className='mr-2 h-4 w-4' /> Test Your Image
          </Link>
      </div>
      <Separator />
      <DefectsStats/>
      <div className='flex flex-row space-x-4'>
      <PanelDefects/>
      <HotspotPage/>
      </div>

    </div>
    </PageContainer>
  )
}
