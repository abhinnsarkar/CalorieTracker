import { getTodaysFoodEntries } from "@/app/actions/actions";
import React from "react";
import { OpenInNew } from "@mui/icons-material";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

export default async function Page() {
    const todaysFoodEntries = await getTodaysFoodEntries();

    return (
        <main className="container mx-auto px-4 pt-20 text-white space-y-8">
            <div className="justify-start">
                <Link href="/">
                    <Button className="hover-btn">
                        <ArrowBackIosIcon />
                        Back to Dashboard
                    </Button>
                </Link>
            </div>

            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent text-center">
                Today’s Logged Foods
            </h1>

            <div className="space-y-4">
                {todaysFoodEntries.map((entry) => (
                    <div
                        key={entry.entry_id}
                        className="hover-card border border-white/10 flex flex-col my-3 p-4"
                    >
                        <div className="flex flex-row justify-between w-full">
                            {/* Food name and main info */}
                            <div className="flex flex-col space-y-1 w-1/4 justify-center">
                                <Link href={`/foods/${entry.food_id}`}>
                                    <h2 className="font-semibold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                                        {/* text-xl font-semibold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent */}
                                        {entry.food_name}
                                    </h2>
                                </Link>
                                <p>{entry.quantity} servings</p>
                            </div>

                            {/* Nutrient breakdown */}
                            <div className="grid grid-flow-col auto-cols-max gap-4 w-1/2 justify-center">
                                {[
                                    {
                                        label: "Calories",
                                        value: `${entry.calories}kcal`,
                                    },
                                    {
                                        label: "Protein",
                                        value: `${entry.protein}g`,
                                    },
                                    {
                                        label: "Carbs",
                                        value: `${entry.carbs}g`,
                                    },
                                    { label: "Fats", value: `${entry.fats}g` },
                                    {
                                        label: "Fiber",
                                        value: `${entry.fiber}g`,
                                    },
                                    {
                                        label: "Sugar",
                                        value: `${entry.sugar}g`,
                                    },
                                    {
                                        label: "Sodium",
                                        value: `${entry.sodium}g`,
                                    },
                                    {
                                        label: "Potassium",
                                        value: `${entry.potassium}g`,
                                    },
                                    { label: "Iron", value: `${entry.iron}g` },
                                ].map((fact, index) => (
                                    <div
                                        key={index}
                                        className="text-center px-2 hover-card"
                                    >
                                        <p className="text-gray-500 text-xs font-semibold">
                                            {fact.label}
                                        </p>
                                        <p className="text-gray-400 text-sm">
                                            {fact.value}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            {/* Optional: external link / button */}
                            <div className="w-1/4 flex justify-end items-center mt-2 md:mt-0">
                                <Link href={`/foods/${entry.food_id}`}>
                                    <OpenInNew className="hover-icon" />
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </main>
    );
}
