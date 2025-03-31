"use client";

import React, { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
    ReferenceLine,
} from "recharts";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import EditBodyStats from "./EditBodyStats/EditBodyStats";
import BodyStats from "../../components/BodyStats";
import { getPreviousWeeksCaloricConsumption } from "@/app/actions/actions";
import { CaloricConsumptionInterface } from "@/app/interfaces";
import { format, subDays } from "date-fns";

const chartConfig = {
    calories: {
        label: "Calories",
        color: "hsl(var(--chart-1))",
    },
    goal: {
        label: "Goal",
        color: "hsl(var(--chart-2))",
    },
} satisfies ChartConfig;

export default function CalorieWeightGraph() {
    const [entries, setEntries] = useState<CaloricConsumptionInterface[]>([]);

    useEffect(() => {
        async function getCalories() {
            const rawEntries = await getPreviousWeeksCaloricConsumption();
            console.log("rawEntries: " + rawEntries);
            const dateMap = new Map(
                rawEntries.map((e) => [e.date, e.calories])
            );

            const fullWeek = [];
            for (let i = 0; i < 7; i++) {
                const date = format(subDays(new Date(), 6 - i), "yyyy-MM-dd");
                fullWeek.push({
                    date,
                    calories: dateMap.get(date),
                    goal: 1712,
                });
            }
            setEntries(fullWeek);
            return fullWeek;
        }

        getCalories().then((entriesData) => {
            console.log("Calories from past week:", entriesData);
        });
    }, []);

    return (
        <>
            <Card className="hover-card">
                <Card className="hover-card h-full">
                    <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                        Progress Tracker
                    </h2>
                    <br />
                    <CardDescription>
                        Calories over the last week
                    </CardDescription>
                    <CardContent>
                        <ChartContainer config={chartConfig}>
                            <ResponsiveContainer width="100%" height={300}>
                                <LineChart
                                    data={entries}
                                    margin={{
                                        top: 5,
                                        right: 20,
                                        bottom: 5,
                                        left: 0,
                                    }}
                                >
                                    <CartesianGrid
                                        vertical={false}
                                        strokeDasharray="3 3"
                                    />
                                    <XAxis
                                        dataKey="date"
                                        tickLine={false}
                                        axisLine={true}
                                        tickMargin={8}
                                        tickFormatter={(value) =>
                                            new Date(
                                                value + "T00:00:00"
                                            ).toLocaleDateString("en-US", {
                                                month: "short",
                                                day: "numeric",
                                                timeZone: "UTC",
                                            })
                                        }
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
                                        dot={{ r: 3, strokeWidth: 2 }}
                                        activeDot={{ r: 6 }}
                                    />
                                    <Line
                                        dataKey="goal"
                                        type="monotone"
                                        stroke="var(--graph-2)"
                                        strokeWidth={2}
                                        dot={false}
                                    />
                                    {/* <ReferenceLine
                                        y={1712}
                                        stroke="var(--graph-2)"
                                        strokeWidth={2}
                                        label={{
                                            value: "Calorie Goal",
                                            position: "top",
                                            fill: "var(--graph-2)",
                                            fontSize: 12,
                                        }}
                                    /> */}
                                </LineChart>
                            </ResponsiveContainer>
                        </ChartContainer>
                    </CardContent>
                </Card>

                <Card className="hover-card mt-2">
                    <BodyStats />
                    <EditBodyStats />
                </Card>
            </Card>
        </>
    );
}
