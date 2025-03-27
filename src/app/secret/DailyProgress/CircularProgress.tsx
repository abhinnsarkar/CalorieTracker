"use client";

import {
    Label,
    PolarGrid,
    PolarRadiusAxis,
    RadialBar,
    RadialBarChart,
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

export default function CircularProgress({
    caloriesConsumed,
    caloriesGoal,
}: {
    caloriesConsumed: number;
    caloriesGoal: number;
}) {
    if (!caloriesGoal || caloriesGoal <= 0) {
        return (
            <Card className="flex flex-col items-center justify-center h-full text-sm text-muted-foreground border-none">
                Loading progress...
            </Card>
        );
    }

    const chartData = [
        {
            name: "Progress",
            value: caloriesConsumed,
            fill: "url(#progressGradient)",
        },
    ];

    const chartConfig = {
        value: {
            label: "Calories Consumed",
            color: "hsl(var(--chart-2))",
        },
    } satisfies ChartConfig;

    console.log("Calories Consumed:", caloriesConsumed);
    console.log("Calories Goal:", caloriesGoal);
    const decimalPercentage =
        caloriesGoal > 0 ? caloriesConsumed / caloriesGoal : 0;
    console.log("Decimal Percentage:", decimalPercentage);
    const circleEndAngle = -(decimalPercentage * 360) + 90;
    console.log("Circle End Angle:", circleEndAngle);

    return (
        <Card className="flex flex-col border-none">
            <CardContent className="p-2 flex flex-col items-center justify-start">
                <ChartContainer
                    config={chartConfig}
                    className="h-[150px] w-[150px]"
                >
                    <RadialBarChart
                        width={150}
                        height={150}
                        data={chartData}
                        startAngle={90}
                        endAngle={circleEndAngle}
                        innerRadius={60}
                        outerRadius={75}
                    >
                        <defs>
                            <linearGradient
                                id="progressGradient"
                                x1="0%"
                                y1="0%"
                                x2="100%"
                                y2="0%"
                            >
                                <stop offset="0%" stopColor="#93c5fd" />{" "}
                                {/* blue-300 */}
                                <stop offset="100%" stopColor="#dbeafe" />{" "}
                                {/* blue-100 */}
                            </linearGradient>
                        </defs>
                        <PolarGrid
                            gridType="circle"
                            radialLines={false}
                            stroke="none"
                            className="first:fill-muted last:fill-background"
                        />
                        <RadialBar
                            dataKey="value"
                            background
                            cornerRadius={10}
                        />
                        <PolarRadiusAxis
                            tick={false}
                            tickLine={false}
                            axisLine={false}
                        >
                            <Label
                                content={({ viewBox }) => {
                                    if (
                                        viewBox &&
                                        "cx" in viewBox &&
                                        "cy" in viewBox
                                    ) {
                                        return (
                                            <text
                                                x={viewBox.cx}
                                                y={viewBox.cy}
                                                textAnchor="middle"
                                                dominantBaseline="middle"
                                            >
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={viewBox.cy}
                                                    className="fill-foreground text-4xl font-bold"
                                                >
                                                    {Math.round(
                                                        decimalPercentage * 100
                                                    ) > 100
                                                        ? 100
                                                        : Math.round(
                                                              decimalPercentage *
                                                                  100
                                                          )}
                                                    %
                                                </tspan>
                                                <tspan
                                                    x={viewBox.cx}
                                                    y={(viewBox.cy || 0) + 24}
                                                    className="fill-muted-foreground"
                                                >
                                                    of daily goal
                                                </tspan>
                                            </text>
                                        );
                                    }
                                }}
                            />
                        </PolarRadiusAxis>
                    </RadialBarChart>
                </ChartContainer>
                <div className="mt-1 text-sm text-blue-200/70 text-center">
                    {caloriesConsumed} / {caloriesGoal} kcal
                </div>
            </CardContent>
        </Card>
    );
}
