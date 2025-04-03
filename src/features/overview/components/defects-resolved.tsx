import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription
} from '@/components/ui/card';

export function DefectsResolved() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Defects Status</CardTitle>
        <CardDescription>You had 150 defects this month.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className='space-y-4'>
          <div className='group flex items-center'>
            <span className='h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10 dark:bg-emerald-400 dark:ring-emerald-400/10' />
            <div className='ml-3 flex-1'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium text-foreground'>
                    Micro-cracks
                  </p>
                  <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                    <span>Panel-246</span>
                    <span className='text-muted-foreground/50'>•</span>
                    <span>Jaquiline</span>
                  </div>
                </div>
                <span className='text-sm text-muted-foreground'>03:20</span>
              </div>
            </div>
          </div>
          <div className='group flex items-center'>
            <span className='h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10 dark:bg-emerald-400 dark:ring-emerald-400/10' />
            <div className='ml-3 flex-1'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium text-foreground'>
                    Corrosion
                  </p>
                  <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                    <span>Panel-197</span>
                    <span className='text-muted-foreground/50'>•</span>
                    <span>Firoz</span>
                  </div>
                </div>
                <span className='text-sm text-muted-foreground'>01:48</span>
              </div>
            </div>
          </div>
          <div className='group flex items-center'>
            <span className='h-2 w-2 rounded-full bg-red-500 ring-4 ring-red-500/10 dark:bg-red-400 dark:ring-red-400/10' />
            <div className='ml-3 flex-1'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium text-foreground'>
                    Dust Cleanup
                  </p>
                  <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                    <span>Panel-46</span>
                    <span className='text-muted-foreground/50'>•</span>
                    <span>William</span>
                  </div>
                </div>
                <span className='text-sm text-muted-foreground'>11:36</span>
              </div>
            </div>
          </div>
          <div className='group flex items-center'>
            <span className='h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10 dark:bg-emerald-400 dark:ring-emerald-400/10' />
            <div className='ml-3 flex-1'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium text-foreground'>
                    Delamination
                  </p>
                  <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                    <span>Panel-648</span>
                    <span className='text-muted-foreground/50'>•</span>
                    <span>Jaquiline</span>
                  </div>
                </div>
                <span className='text-sm text-muted-foreground'>09:15</span>
              </div>
            </div>
          </div>
          <div className='group flex items-center'>
            <span className='h-2 w-2 rounded-full bg-red-500 ring-4 ring-emerald-500/10 dark:bg-red-400 dark:ring-emerald-400/10' />
            <div className='ml-3 flex-1'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium text-foreground'>
                    Head Mutilator
                  </p>
                  <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                    <span>Panel-248</span>
                    <span className='text-muted-foreground/50'>•</span>
                    <span>Brandon</span>
                  </div>
                </div>
                <span className='text-sm text-muted-foreground'>09:15</span>
              </div>
            </div>
          </div>
          <div className='group flex items-center'>
            <span className='h-2 w-2 rounded-full bg-emerald-500 ring-4 ring-emerald-500/10 dark:bg-emerald-400 dark:ring-emerald-400/10' />
            <div className='ml-3 flex-1'>
              <div className='flex items-center justify-between'>
                <div>
                  <p className='text-sm font-medium text-foreground'>
                    Circuit Box
                  </p>
                  <div className='flex items-center gap-1 text-sm text-muted-foreground'>
                    <span>Panel-673</span>
                    <span className='text-muted-foreground/50'>•</span>
                    <span>Maria</span>
                  </div>
                </div>
                <span className='text-sm text-muted-foreground'>09:15</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
