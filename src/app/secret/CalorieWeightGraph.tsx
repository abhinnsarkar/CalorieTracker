"use client";

import React from "react";
import { TrendingUp } from "lucide-react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    // CardHeader,
    // CardTitle,
} from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";

const data = [
    { date: "Mon", calories: 2100, weight: 70 },
    { date: "Tue", calories: 2300, weight: 70.2 },
    { date: "Wed", calories: 1950, weight: 69.8 },
    { date: "Thu", calories: 2200, weight: 69.9 },
    { date: "Fri", calories: 2400, weight: 70.1 },
];

const chartConfig = {
    calories: {
        label: "Calories",
        color: "hsl(var(--chart-1))",
    },
    weight: {
        label: "Weight",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

export default function CalorieWeightGraph() {
    return (
        <Card className="hover-card">
            {/* <CardHeader> */}
            {/* <CardTitle></CardTitle> */}
            <h2 className="text-lg font-semibold mb-3 text-blue-100">
                Progress Tracker
            </h2>
            <CardDescription>Calories and Weight Over Time</CardDescription>
            {/* </CardHeader> */}
            <CardContent>
                <ChartContainer config={chartConfig}>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart
                            data={data}
                            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
                        >
                            <CartesianGrid
                                vertical={false}
                                strokeDasharray="3 3"
                            />
                            <XAxis
                                dataKey="date"
                                tickLine={false}
                                axisLine={false}
                                tickMargin={8}
                            />
                            <YAxis />
                            <ChartTooltip
                                cursor={false}
                                content={<ChartTooltipContent />}
                            />
                            <Line
                                dataKey="calories"
                                type="monotone"
                                stroke="var(--graph-1)"
                                strokeWidth={2}
                                dot={false}
                            />
                            <Line
                                dataKey="weight"
                                type="monotone"
                                stroke="var(--graph-2)"
                                strokeWidth={2}
                                dot={false}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </ChartContainer>
            </CardContent>
            <CardFooter>
                <div className="flex w-full items-start gap-2 text-sm">
                    <div className="grid gap-2">
                        <div className="flex items-center gap-2 font-medium leading-none">
                            Trending up by 5.2% this week{" "}
                            <TrendingUp className="h-4 w-4" />
                        </div>
                        <div className="flex items-center gap-2 leading-none text-muted-foreground">
                            Tracking your calorie intake and weight changes
                        </div>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}
