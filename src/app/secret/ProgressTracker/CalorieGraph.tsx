"use client";

import React, { useEffect, useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    ResponsiveContainer,
} from "recharts";
import { Card, CardContent, CardDescription } from "@/components/ui/card";
import {
    ChartConfig,
    ChartContainer,
    ChartTooltip,
    ChartTooltipContent,
} from "@/components/ui/chart";
import EditBodyInformation from "./EditBodyStats/EditBodyInformation";
import BodyStats from "../../components/BodyStats";
import {
    getMaintenanceCalories,
    getPreviousWeeksCaloricConsumption,
} from "@/app/actions/actions";
import { CaloricConsumptionInterface } from "@/app/interfaces";
import { format, subDays } from "date-fns";
import { useStore } from "@/store/store";

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

export default function CalorieGraph() {
    const [entries, setEntries] = useState<CaloricConsumptionInterface[]>([]);

    const isLoadProfileAfterSetup = useStore(
        (state) => state.isLoadProfileAfterSetup
    );
    const setIsLoadProfileAfterSetup = useStore(
        (state) => state.setIsLoadProfileAfterSetup
    );
    const isReloadCalorieGraph = useStore(
        (state) => state.isReloadCalorieGraph
    );
    const setIsReloadCalorieGraph = useStore(
        (state) => state.setIsReloadCalorieGraph
    );

    useEffect(() => {
        async function getCalories() {
            const rawEntries = await getPreviousWeeksCaloricConsumption();
            const maintenanceCaloriesObj = await getMaintenanceCalories();
            const maintenanceCalories =
                maintenanceCaloriesObj?.maintenance_calories;

            const dateMap = new Map(
                rawEntries.map((e) => [e.date, e.calories])
            );

            const fullWeek = [];
            for (let i = 0; i < 7; i++) {
                const date = format(subDays(new Date(), 6 - i), "yyyy-MM-dd");
                fullWeek.push({
                    date,
                    calories: dateMap.get(date) ?? 0,
                    goal: maintenanceCalories ?? 0,
                });
            }
            setEntries(fullWeek);
            return fullWeek;
        }

        getCalories();
    }, []);

    useEffect(() => {
        if (isReloadCalorieGraph || isLoadProfileAfterSetup) {
            async function refreshData() {
                console.log("Refreshing calorie graph data...");
                console.log(
                    "Refreshing calorie graph data due to state change..."
                );
                const rawEntries = await getPreviousWeeksCaloricConsumption();
                const maintenanceCaloriesObj = await getMaintenanceCalories();
                const maintenanceCalories =
                    maintenanceCaloriesObj?.maintenance_calories;

                const dateMap = new Map(
                    rawEntries.map((e) => [e.date, e.calories])
                );

                const fullWeek = [];
                for (let i = 0; i < 7; i++) {
                    const date = format(
                        subDays(new Date(), 6 - i),
                        "yyyy-MM-dd"
                    );
                    fullWeek.push({
                        date,
                        calories: dateMap.get(date) ?? 0,
                        goal: maintenanceCalories ?? 0,
                    });
                }
                setEntries(fullWeek);
                setIsReloadCalorieGraph(false); // ✅ reset flag
                setIsLoadProfileAfterSetup(false);
            }

            refreshData();
        }
    }, [
        isReloadCalorieGraph,
        setIsReloadCalorieGraph,
        isLoadProfileAfterSetup,
        setIsLoadProfileAfterSetup,
    ]);

    return (
        <>
            <Card className="hover-card h-full flex justify-between">
                <Card className="h-1/2 border-none">
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

                <Card className=" border-none">
                    <BodyStats />
                    <EditBodyInformation />
                </Card>
            </Card>
        </>
    );
}
