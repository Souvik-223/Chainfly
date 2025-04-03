'use client';

import { TrendingUp } from 'lucide-react';
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
const chartData = [
  { month: 'Solar Panels', ideal: 186, actual: 160 },
  { month: 'Battery Storage', ideal: 185, actual: 170 },
  { month: 'Power Conditioning Units', ideal: 207, actual: 180 },
  { month: 'Structure', ideal: 173, actual: 160 }
];

const chartConfig = {
  ideal: {
    label: 'ideal',
    color: 'hsl(var(--chart-1))'
  },
  actual: {
    label: 'actual',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export default function SystemHealth() {
  return (
    <Card>
      <CardHeader className='items-center pb-4'>
        <CardTitle>System Health Insights</CardTitle>
        <CardDescription>
          Showing total visitors for the last 6 months
        </CardDescription>
      </CardHeader>
      <CardContent className='pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-video max-h-[250px]'
        >
          <RadarChart data={chartData}>
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='line' />}
            />
            <PolarAngleAxis dataKey='month' />
            <PolarGrid radialLines={false} />
            <Radar
              dataKey='ideal'
              fill='var(--color-ideal)'
              fillOpacity={0}
              stroke='var(--color-ideal)'
              strokeWidth={2}
            />
            <Radar
              dataKey='actual'
              fill='var(--color-actual)'
              fillOpacity={0}
              stroke='var(--color-actual)'
              strokeWidth={2}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <div className='flex items-center gap-2 font-medium leading-none'>
          Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
        </div>
        <div className='flex items-center gap-2 leading-none text-muted-foreground'>
          January - June 2024
        </div>
      </CardFooter>
    </Card>
  );
}
