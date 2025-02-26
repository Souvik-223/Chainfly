'use client';

import * as React from 'react';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';

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
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';

export const description = 'An interactive bar chart';

const chartData = [
  { date: '2024-04-01', desktop: 30, mobile: 71 },
  { date: '2024-04-02', desktop: 13, mobile: 86 },
  { date: '2024-04-03', desktop: 22, mobile: 57 },
  { date: '2024-04-04', desktop: 32, mobile: 24 },
  { date: '2024-04-05', desktop: 50, mobile: 38 },
  { date: '2024-04-06', desktop: 40, mobile: 62 },
  { date: '2024-04-07', desktop: 33, mobile: 86 },
  { date: '2024-04-08', desktop: 55, mobile: 52 },
  { date: '2024-04-09', desktop: 8, mobile: 52 },
  { date: '2024-04-10', desktop: 35, mobile: 90 },
  { date: '2024-04-11', desktop: 44, mobile: 67 },
  { date: '2024-04-12', desktop: 39, mobile: 100 },
  { date: '2024-04-13', desktop: 46, mobile: 81 },
  { date: '2024-04-14', desktop: 18, mobile: 75 },
  { date: '2024-04-15', desktop: 16, mobile: 81 },
  { date: '2024-04-16', desktop: 19, mobile: 90 },
  { date: '2024-04-17', desktop: 60, mobile: 171 },
  { date: '2024-04-18', desktop: 49, mobile: 95 },
  { date: '2024-04-19', desktop: 33, mobile: 86 },
  { date: '2024-04-20', desktop: 12, mobile: 71 },
  { date: '2024-04-21', desktop: 18, mobile: 95 },
  { date: '2024-04-22', desktop: 30, mobile: 81 },
  { date: '2024-04-23', desktop: 19, mobile: 10 },
  { date: '2024-04-24', desktop: 52, mobile: 38 },
  { date: '2024-04-25', desktop: 29, mobile: 19 },
  { date: '2024-04-26', desktop: 10, mobile: 62 },
  { date: '2024-04-27', desktop: 51, mobile: 60 },
  { date: '2024-04-28', desktop: 16, mobile: 86 },
  { date: '2024-04-29', desktop: 42, mobile: 14 },
  { date: '2024-04-30', desktop: 61, mobile: 81 },
  { date: '2024-05-01', desktop: 22, mobile: 85 },
  { date: '2024-05-02', desktop: 39, mobile: 48 },
  { date: '2024-05-03', desktop: 33, mobile: 90 },
  { date: '2024-05-04', desktop: 52, mobile: 20 },
  { date: '2024-05-05', desktop: 64, mobile: 86 },
  { date: '2024-05-06', desktop: 67, mobile: 48 },
  { date: '2024-05-07', desktop: 52, mobile: 43 },
  { date: '2024-05-08', desktop: 20, mobile: 70 },
  { date: '2024-05-09', desktop: 30, mobile: 86 },
  { date: '2024-05-10', desktop: 39, mobile: 57 },
  { date: '2024-05-11', desktop: 45, mobile: 29 },
  { date: '2024-05-12', desktop: 26, mobile: 14 },
  { date: '2024-05-13', desktop: 26, mobile: 76 },
  { date: '2024-05-14', desktop: 60, mobile: 33 },
  { date: '2024-05-15', desktop: 63, mobile: 81 },
  { date: '2024-05-16', desktop: 45, mobile: 10 },
  { date: '2024-05-17', desktop: 67, mobile: 80 },
  { date: '2024-05-18', desktop: 42, mobile: 167 },
  { date: '2024-05-19', desktop: 32, mobile: 86 },
  { date: '2024-05-20', desktop: 24, mobile: 110 },
  { date: '2024-05-21', desktop: 11, mobile: 67 },
  { date: '2024-05-22', desktop: 11, mobile: 57 },
  { date: '2024-05-23', desktop: 34, mobile: 138 },
  { date: '2024-05-24', desktop: 39, mobile: 105 },
  { date: '2024-05-25', desktop: 27, mobile: 19 },
  { date: '2024-05-26', desktop: 29, mobile: 81 },
  { date: '2024-05-27', desktop: 56, mobile: 19 },
  { date: '2024-05-28', desktop: 31, mobile: 90 },
  { date: '2024-05-29', desktop: 10, mobile: 62 },
  { date: '2024-05-30', desktop: 46, mobile: 33 },
  { date: '2024-05-31', desktop: 24, mobile: 110 },
  { date: '2024-06-01', desktop: 24, mobile: 95 },
  { date: '2024-06-02', desktop: 63, mobile: 95 },
  { date: '2024-06-03', desktop: 14, mobile: 76 },
  { date: '2024-06-04', desktop: 59, mobile: 81 },
  { date: '2024-06-05', desktop: 12, mobile: 67 },
  { date: '2024-06-06', desktop: 39, mobile: 119 },
  { date: '2024-06-07', desktop: 43, mobile: 176 },
  { date: '2024-06-08', desktop: 52, mobile: 152 },
  { date: '2024-06-09', desktop: 59, mobile: 229 },
  { date: '2024-06-10', desktop: 21, mobile: 95 },
  { date: '2024-06-11', desktop: 12, mobile: 71 },
  { date: '2024-06-12', desktop: 66, mobile: 20 },
  { date: '2024-06-13', desktop: 11, mobile: 62 },
  { date: '2024-06-14', desktop: 57, mobile: 81 },
  { date: '2024-06-15', desktop: 41, mobile: 67 },
  { date: '2024-06-16', desktop: 50, mobile: 48 },
  { date: '2024-06-17', desktop: 64, mobile: 28 },
  { date: '2024-06-18', desktop: 14, mobile: 81 },
  { date: '2024-06-19', desktop: 46, mobile: 38 },
  { date: '2024-06-20', desktop: 55, mobile: 14 },
  { date: '2024-06-21', desktop: 23, mobile: 100 },
  { date: '2024-06-22', desktop: 42, mobile: 29 },
  { date: '2024-06-23', desktop: 64, mobile: 52 },
  { date: '2024-06-24', desktop: 18, mobile: 86 },
  { date: '2024-06-25', desktop: 19, mobile: 90 },
  { date: '2024-06-26', desktop: 58, mobile: 4 },
  { date: '2024-06-27', desktop: 60, mobile: 33 },
  { date: '2024-06-28', desktop: 20, mobile: 95 },
  { date: '2024-06-29', desktop: 14, mobile: 76 },
  { date: '2024-06-30', desktop: 60, mobile: 90 }
  ];

const chartConfig = {
  views: {
    label: 'Defects'
  },
  desktop: {
    label: 'Major Faults',
    color: 'hsl(var(--chart-1))'
  },
  mobile: {
    label: 'Minor Faults',
    color: 'hsl(var(--chart-2))'
  },
  error: {
    label: 'Critical issues',
    color: 'hsl(var(--chart-2))'
  }
} satisfies ChartConfig;

export function BarGraph() {
  const [activeChart, setActiveChart] =
    React.useState<keyof typeof chartConfig>('desktop');

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0)
    }),
    []
  );

  const [isClient, setIsClient] = React.useState(false);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  React.useEffect(() => {
    if (activeChart === 'error') {
      throw new Error('Mocking Error');
    }
  }, [activeChart]);

  if (!isClient) {
    return null;
  }

  return (
    <Card>
      <CardHeader className='flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row'>
        <div className='flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6'>
          <CardTitle>Total Defects</CardTitle>
          <CardDescription>
            Showing total Defects for the last 3 months
          </CardDescription>
        </div>
        <div className='flex'>
          {['desktop', 'mobile'].map((key) => {
            const chart = key as keyof typeof chartConfig;
            if (!chart || total[key as keyof typeof total] === 0) return null;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className='relative flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6'
                onClick={() => setActiveChart(chart)}
              >
                <span className='text-xs text-muted-foreground'>
                  {chartConfig[chart].label}
                </span>
                <span className='text-lg font-bold leading-none sm:text-3xl'>
                  {total[key as keyof typeof total]?.toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className='px-2 sm:p-6'>
        <ChartContainer
          config={chartConfig}
          className='aspect-auto h-[280px] w-full'
        >
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey='date'
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString('en-US', {
                  month: 'short',
                  day: 'numeric'
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className='w-[150px]'
                  nameKey='views'
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString('en-US', {
                      month: 'short',
                      day: 'numeric',
                      year: 'numeric'
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
