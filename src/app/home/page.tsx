"use client";

import { TrendingUp } from "lucide-react";
import * as React from "react";
import { Line, LineChart } from "recharts";

import {
  Bar,
  BarChart,
  CartesianGrid,
  LabelList,
  XAxis,
  YAxis,
} from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData2 = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 280, mobile: 150 },
  { month: "Avgust", desktop: 290, mobile: 180 },
  { month: "September", desktop: 230, mobile: 160 },
  { month: "October", desktop: 240, mobile: 170 },
  { month: "November", desktop: 245, mobile: 200 },
  { month: "December", desktop: 255, mobile: 210 },
];

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
  { month: "July", desktop: 300, mobile: 145 },
  { month: "August", desktop: 150, mobile: 139 },
  { month: "September", desktop: 214, mobile: 120 },
  { month: "October", desktop: 240, mobile: 115 },
  { month: "November", desktop: 245, mobile: 118 },
  { month: "December", desktop: 310, mobile: 125 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function Home() {
  return (
    <div className="p-0  bg-[#000] min-h-screen space-y-6">
      <div className="flex flex-wrap gap-6">
        {[
          {
            title: "Students",
            value: "2000",
            description: "Last month: 510",
            trend: "+19.04%",
            trendColor: "text-green-500",
          },
          {
            title: "Teachers",
            value: "300",
            description: "Last month: 980",
            trend: "+32.65%",
            trendColor: "text-green-500",
          },
          {
            title: "Total     ",
            value: "$30,000",
            description: "Last month: 21,000",
            trend: "+30.00%",
            trendColor: "text-green-500",
          },
        ].map((card, index) => (
          <Card
            key={index}
            className="shadow-md flex-1 min-w-[250px] h-[140px]"
          >
            <CardHeader className="flex justify-between items-start p-4">
              <CardTitle className="text-lg font-bold">{card.title}</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-between">
              <div>
                <p className="text-3xl font-bold">{card.value}</p>
                <p className="text-sm text-gray-500">{card.description}</p>
              </div>
              <div className={`flex items-center ${card.trendColor}`}>
                <TrendingUp className="h-5 w-5 mr-1" />
                <span className="text-base font-medium">{card.trend}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="flex gap-3">
        <Card className="bg-[#000]  w-full">
          <CardHeader>
            <CardTitle className="text-white">Result</CardTitle>
            <CardDescription className="text-white">
              January - December 2024
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ChartContainer config={chartConfig}>
              <BarChart
                accessibilityLayer
                data={chartData2}
                layout="vertical"
                margin={{
                  right: 16,
                }}
              >
                <CartesianGrid horizontal={false} />
                <YAxis
                  dataKey="month"
                  type="category"
                  tickLine={false}
                  tickMargin={10}
                  axisLine={false}
                  tickFormatter={(value) => value.slice(0, 3)}
                  hide
                />
                <XAxis dataKey="desktop" type="number" hide />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Bar dataKey="desktop" layout="vertical" fill="#fff" radius={4}>
                  <LabelList
                    dataKey="month"
                    position="insideLeft"
                    offset={8}
                    style={{
                      fill: "#000",
                      fontSize: 12,
                      fontWeight: "semi-bold",
                    }}
                  />

                  <LabelList
                    dataKey="desktop"
                    position="right"
                    offset={8}
                    style={{
                      fill: "#fff",
                      fontSize: 12,
                      fontWeight: "semi-bold",
                    }}
                  />
                </Bar>
              </BarChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm">
            <div className="flex gap-2 font-medium leading-none">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none text-muted-foreground text-white">
              Showing total visitors for the last 6 months
            </div>
          </CardFooter>
        </Card>
        <Card className="bg-[#000] shadow-md rounded-lg w-full">
          <CardHeader>
            <CardTitle className="text-white">Statistika</CardTitle>
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
                  right: 12,
                }}
                width={700}
                height={300}
              >
                <CartesianGrid vertical={false} />
                <XAxis
                  dataKey="month"
                  tickLine={false}
                  axisLine={false}
                  tickMargin={8}
                  tickFormatter={(value) => value.slice(0, 10)}
                />
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent indicator="line" />}
                />
                <Line
                  dataKey="desktop"
                  type="natural"
                  stroke="white"
                  strokeWidth={2}
                  dot={{
                    fill: "white",
                  }}
                  activeDot={{
                    r: 6,
                  }}
                >
                  <LabelList
                    position="top"
                    offset={12}
                    className="fill-foreground"
                    fontSize={12}
                    style={{ fill: "#fff", fontSize: 12, fontWeight: "bold" }}
                  />
                </Line>
              </LineChart>
            </ChartContainer>
          </CardContent>
          <CardFooter className="flex-col items-start gap-2 text-sm text-gray-400">
            <div className="flex gap-2 font-medium leading-none text-white">
              Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
            </div>
            <div className="leading-none">
              Showing total visitors for the last 12 months
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
