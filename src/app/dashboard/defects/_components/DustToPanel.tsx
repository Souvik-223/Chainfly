"use client"

import { TrendingUp } from "lucide-react"
import { Pie, PieChart } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"
const chartData = [
  { browser: "SectionA", panels: 275, fill: "var(--color-SectionA)" },
  { browser: "SectionB", panels: 200, fill: "var(--color-SectionB)" },
  { browser: "SectionC", panels: 187, fill: "var(--color-SectionC)" },
  { browser: "SectionD", panels: 173, fill: "var(--color-SectionD)" },
  { browser: "SectionE", panels: 90, fill: "var(--color-SectionE)" },
]

const chartConfig = {
  panels: {
    label: "Panels",
  },
  SectionA: {
    label: "SectionA",
    color: "hsl(var(--chart-1))",
  },
  SectionB: {
    label: "SectionB",
    color: "hsl(var(--chart-2))",
  },
  SectionC: {
    label: "SectionC",
    color: "hsl(var(--chart-3))",
  },
  SectionD: {
    label: "SectionD",
    color: "hsl(var(--chart-4))",
  },
  SectionE: {
    label: "SectionE",
    color: "hsl(var(--chart-5))",
  },
} satisfies ChartConfig

export function DustToPanel() {
  return (
    <Card className="flex flex-col">
      <CardHeader className="items-center pb-0">
        <CardTitle>Dust To Panel Distribution</CardTitle>
        <CardDescription>1st January - 31st January 2025</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px] px-0"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="panels" hideLabel />}
            />
            <Pie
              data={chartData}
              dataKey="panels"
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
                    fill="hsla(var(--foreground))"
                  >
                    {payload.panels}
                  </text>
                )
              }}
              nameKey="browser"
            />
            <ChartLegend
              content={<ChartLegendContent nameKey="browser" />}
              className="-translate-y-2 flex-wrap gap-2 justify-center"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col gap-2 text-sm">
        <div className="flex items-center gap-2 font-medium leading-none">
         Dust blockade up by 4.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Showing total panels affected by dust for the last month
        </div>
      </CardFooter>
    </Card>
  )
}
