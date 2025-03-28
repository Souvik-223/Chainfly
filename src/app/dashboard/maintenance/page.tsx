import PageContainer from '@/components/layout/page-container';
import { buttonVariants } from '@/components/ui/button';
import { Heading } from '@/components/ui/heading';
import { Separator } from '@/components/ui/separator';
import { searchParamsCache, serialize } from '@/lib/searchparams';
import { cn } from '@/lib/utils';
import { Plus } from 'lucide-react';
import Link from 'next/link';
import { SearchParams } from 'nuqs/server';
import RoiRepairs from './_components/RoiRepairs';
import EnergyLossEstimation from './_components/EnergyLossEsitimation';
import SystemHealth from './_components/SystemHealth';
import UvRadiationGraph from './_components/UVRadiationGraph';
import Hotspots from './_components/Hotspots';
import DefectAnalysis from './_components/DefectAnalysis';

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
          <Link
            href='/dashboard/maintainance/download'
            className={cn(buttonVariants(), 'text-xs md:text-sm')}
          >
            <Plus className='mr-2 h-4 w-4' /> Download Reports
          </Link>
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
