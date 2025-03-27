import React from 'react'
import PageContainer from '@/components/layout/page-container';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import CommingSoon from './_components/CommingSoon';

export default function SystemHealth() {
  return (
    <PageContainer scrollable={false}>
    <div className='flex flex-1 flex-col space-y-4'>
      <div className='flex items-start justify-between'>
        <Heading
          title='System Health Insights'
          description='View System Health analysis and Resolve issues.'
        />
      </div>
      <Separator />
    </div>
    <CommingSoon/>
    </PageContainer>
  )
}
