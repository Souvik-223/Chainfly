'use client';

import { TrendingUp } from 'lucide-react';
import { LabelList, RadialBar, RadialBarChart } from 'recharts';

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
  { browser: 'Shading', visitors: 275, fill: 'var(--color-Shading)' },
  { browser: 'Dust ', visitors: 200, fill: 'var(--color-Dust )' },
  { browser: 'Temperature', visitors: 187, fill: 'var(--color-Temperature)' },
  {
    browser: 'CellDegradation',
    visitors: 173,
    fill: 'var(--color-CellDegradation)'
  },
  {
    browser: 'PerformanceLoss',
    visitors: 90,
    fill: 'var(--color-PerformanceLoss)'
  }
];

const chartConfig = {
  visitors: {
    label: 'Visitors'
  },
  Shading: {
    label: 'Shading',
    color: 'hsl(var(--chart-1))'
  },
  Dust: {
    label: 'Dust',
    color: 'hsl(var(--chart-2))'
  },
  Temperature: {
    label: 'Temperature',
    color: 'hsl(var(--chart-3))'
  },
  CellDegradation: {
    label: 'CellDegradation',
    color: 'hsl(var(--chart-4))'
  },
  PerformanceLoss: {
    label: 'PerformanceLoss',
    color: 'hsl(var(--chart-5))'
  }
} satisfies ChartConfig;

export default function Hotspots() {
  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Hotspot Energy Chart</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[250px]'
        >
          <RadialBarChart
            data={chartData}
            startAngle={-90}
            endAngle={380}
            innerRadius={30}
            outerRadius={110}
          >
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel nameKey='browser' />}
            />
            <RadialBar dataKey='visitors' background>
              <LabelList
                position='insideStart'
                dataKey='browser'
                className='fill-white capitalize mix-blend-luminosity'
                fontSize={11}
              />
            </RadialBar>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <div className='flex items-center gap-2 font-medium leading-none'>
          Trending up by 18.2% this month <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>
          Showing Hotspot ration graph for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
