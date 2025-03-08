import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function DefectSkeleton() {
  return (
    <Card>
      <CardHeader>
        <div className='flex justify-between'>
          <div>
          <Skeleton className='h-6 w-[140px]' /> {/* CardTitle */}
          <Skeleton className='h-4 w-[180px]' /> {/* CardDescription */}
          </div>
          <Skeleton className='h-10 w-[120px]' />
        </div>
      </CardHeader>
      <CardContent>
        <div className='space-y-8'>
          {Array.from({ length: 5 }).map((_, i) => (
            <div key={i} className='flex items-center'>
              <Skeleton className='h-9 w-9 rounded-full' /> {/* Avatar */}
              <div className='ml-4 space-y-1'>
                <Skeleton className='h-4 w-[120px]' /> {/* Name */}
                <Skeleton className='h-4 w-[160px]' /> {/* Email */}
              </div>
              <Skeleton className='ml-auto h-4 w-[80px]' /> {/* Amount */}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
