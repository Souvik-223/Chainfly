'use client';

import { Pie, PieChart } from 'recharts';

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent
} from '@/components/ui/chart';
const chartData = [
  {
    browser: 'solarRadiation',
    visitors: 275,
    fill: 'var(--color-solarRadiation)'
  },
  { browser: 'weather', visitors: 200, fill: 'var(--color-weather)' },
  { browser: 'vegetation', visitors: 187, fill: 'var(--color-vegetation)' },
  { browser: 'shading', visitors: 173, fill: 'var(--color-shading)' }
];

const chartConfig = {
  visitors: {
    label: 'Visitors'
  },
  solarRadiation: {
    label: 'solarRadiation',
    color: 'hsl(var(--chart-1))'
  },
  weather: {
    label: 'weather',
    color: 'hsl(var(--chart-2))'
  },
  vegetation: {
    label: 'vegetation',
    color: 'hsl(var(--chart-3))'
  },
  shading: {
    label: 'shading',
    color: 'hsl(var(--chart-4))'
  },
  other: {
    label: 'Other',
    color: 'hsl(var(--chart-5))'
  }
} satisfies ChartConfig;

export default function DefectAnalysis() {
  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>GIS Data</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[300px]'
        >
          <PieChart>
            <Pie data={chartData} dataKey='visitors' />
            <ChartLegend
              content={<ChartLegendContent nameKey='browser' />}
              className='-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center'
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
