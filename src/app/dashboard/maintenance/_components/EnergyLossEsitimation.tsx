'use client';

import { TrendingDown } from 'lucide-react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

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
  { month: 'January', ideal: 186, actual: 80 },
  { month: 'February', ideal: 305, actual: 200 },
  { month: 'March', ideal: 237, actual: 120 },
  { month: 'April', ideal: 73, actual: 190 },
  { month: 'May', ideal: 209, actual: 130 },
  { month: 'June', ideal: 214, actual: 140 }
];

const chartConfig = {
  ideal: {
    label: 'ideal ',
    color: 'hsl(var(--chart-1))'
  },
  actual: {
    label: 'actual',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export default function EnergyLossEstimation() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Energy Loss Estimation</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='dashed' />}
            />
            <Bar dataKey='ideal' fill='var(--color-ideal )' radius={4} />
            <Bar dataKey='actual' fill='var(--color-actual)' radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 font-medium leading-none'>
          Energy loss lowered by 5.2% this month{' '}
          <TrendingDown className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>
          Showingth difference of Expected vs Ideal Energy loss.
        </div>
      </CardFooter>
    </Card>
  );
}
