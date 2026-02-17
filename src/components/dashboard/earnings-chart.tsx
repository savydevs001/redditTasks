"use client";

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts";
import {
  ChartContainer,
  ChartTooltipContent,
  ChartConfig,
} from "@/components/ui/chart";
import { earnings } from "@/lib/placeholder-data";

const chartConfig = {
  earnings: {
    label: "Earnings",
    color: "hsl(var(--primary))",
  },
} satisfies ChartConfig;

export default function EarningsChart() {
  return (
    <ChartContainer config={chartConfig} className="min-h-[200px] w-full">
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={earnings.monthly} margin={{ top: 5, right: 20, left: -10, bottom: 5 }}>
          <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={8} />
          <YAxis
            tickFormatter={(value) => `$${value}`}
            tickLine={false}
            axisLine={false}
            tickMargin={8}
          />
          <Tooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dot" />}
          />
          <Bar dataKey="earnings" fill="var(--color-earnings)" radius={8} />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
