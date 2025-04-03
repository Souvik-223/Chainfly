'use client';

import { TrendingUp } from 'lucide-react';
import { Pie, PieChart } from 'recharts';

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
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent
} from '@/components/ui/chart';
const chartData = [
  { browser: 'Hotspots', panels: 275, fill: 'var(--color-Hotspots)' },
  { browser: 'Backsheet', panels: 200, fill: 'var(--color-Backsheet)' },
  { browser: 'Junction', panels: 187, fill: 'var(--color-Junction)' },
  { browser: 'Surface', panels: 173, fill: 'var(--color-Surface)' },
  { browser: 'Edges', panels: 90, fill: 'var(--color-Edges)' }
];

const chartConfig = {
  panels: {
    label: 'Panels'
  },
  Hotspots: {
    label: 'Hotspots',
    color: 'hsl(var(--chart-1))'
  },
  Backsheet: {
    label: 'Backsheet',
    color: 'hsl(var(--chart-2))'
  },
  Junction: {
    label: 'Junction',
    color: 'hsl(var(--chart-3))'
  },
  Surface: {
    label: 'Surface',
    color: 'hsl(var(--chart-4))'
  },
  Edges: {
    label: 'Edges',
    color: 'hsl(var(--chart-5))'
  }
} satisfies ChartConfig;

export function DustToPanel() {
  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>Dust To Panel Distribution</CardTitle>
        <CardDescription>1st January - 31st January 2025</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[250px] px-0'
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey='panels' hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey='panels'
              labelLine={false}
              label={({ payload, ...props }) => {
                return (
                  <text
                    cx={props.cx}
                    cy={props.cy}
                    x={props.x}
                    y={props.y}
                    textAnchor={props.textAnchor}
                    dominantBaseline={props.dominantBaseline}
                    fill='hsla(var(--foreground))'
                  >
                    {payload.panels}
                  </text>
                );
              }}
              nameKey='browser'
            />
            <ChartLegend
              content={<ChartLegendContent nameKey='browser' />}
              className='-translate-y-2 flex-wrap justify-center gap-2'
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        <div className='flex items-center gap-2 font-medium leading-none'>
          Dust blockade up by 4.2% this month <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>
          Showing total panels affected by dust for the last month
        </div>
      </CardFooter>
    </Card>
  );
}
