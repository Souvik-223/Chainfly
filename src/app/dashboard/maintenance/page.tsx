import PageContainer from '@/components/layout/page-container';

import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { searchParamsCache, serialize } from '@/lib/searchparams';

import Link from 'next/link';
import { SearchParams } from 'nuqs/server';
import RoiRepairs from './_components/RoiRepairs';
import EnergyLossEstimation from './_components/EnergyLossEsitimation';
import SystemHealth from './_components/SystemHealth';
import UvRadiationGraph from './_components/UVRadiationGraph';
import Hotspots from './_components/Hotspots';
import DefectAnalysis from './_components/DefectAnalysis';
import { Download } from 'lucide-react';
import Downloadbutton from './_components/Downloadbutton';

export const metadata = {
  title: 'Dashboard: Maintainance'
};

type pageProps = {
  searchParams: Promise<SearchParams>;
};

export default async function Page(props: pageProps) {
  const searchParams = await props.searchParams;
  // Allow nested RSCs to access the search params (in a type-safe way)
  searchParamsCache.parse(searchParams);

  // This key is used for invoke suspense if any of the search params changed (used for filters).
  // const key = serialize({ ...searchParams });

  return (
    <PageContainer scrollable={false}>
      <div className='flex flex-1 flex-col space-y-4'>
        <div className='flex items-start justify-between'>
          <Heading
            title='Maintainance Data'
            description='View Maintainance data over the panels'
          />
          <Downloadbutton />
        </div>
        <Separator />
        <div className='m-4 grid h-[75vh] grid-cols-2 space-x-4 space-y-4 overflow-y-scroll scrollbar-hide lg:grid-cols-3'>
          <UvRadiationGraph />
          <EnergyLossEstimation />
          <Hotspots />
          <RoiRepairs />
          <DefectAnalysis />
          <SystemHealth />
        </div>

        {/* <ProductTableAction />
        <Suspense
          key={key}
          fallback={<DataTableSkeleton columnCount={5} rowCount={10} />}
        >
          <ProductListingPage />
        </Suspense> */}
      </div>
    </PageContainer>
  );
}
