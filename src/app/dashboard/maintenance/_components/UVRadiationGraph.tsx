'use client';

import { TrendingUp } from 'lucide-react';
import { CartesianGrid, LabelList, Line, LineChart, XAxis } from 'recharts';

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
  { month: 'January', radiationlevel: 186, mobile: 80 },
  { month: 'February', radiationlevel: 305, mobile: 200 },
  { month: 'March', radiationlevel: 237, mobile: 120 },
  { month: 'April', radiationlevel: 73, mobile: 190 },
  { month: 'May', radiationlevel: 209, mobile: 130 },
  { month: 'June', radiationlevel: 214, mobile: 140 }
];

const chartConfig = {
  radiationlevel: {
    label: 'radiationlevel',
    color: 'hsl(var(--chart-1))'
  },
  mobile: {
    label: 'Mobile',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export default function UvRadiationGraph() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>UV Radaton Graph</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='month'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='line' />}
            />
            <Line
              dataKey='radiationlevel'
              type='natural'
              stroke='var(--color-radiationlevel)'
              strokeWidth={2}
              dot={{
                fill: 'var(--color-radiationlevel)'
              }}
              activeDot={{
                r: 6
              }}
            >
              <LabelList
                position='top'
                offset={12}
                className='fill-foreground'
                fontSize={12}
              />
            </Line>
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
        <div className='flex gap-2 font-medium leading-none'>
          Up by 8.2% this month <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>
          Showing Current UV radiationlevels for the location for the last 6
          months
        </div>
      </CardFooter>
    </Card>
  );
}
