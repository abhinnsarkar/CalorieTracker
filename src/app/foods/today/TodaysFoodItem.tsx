"use client";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import React from "react";
import { OpenInNew } from "@mui/icons-material";
import Link from "next/link";
import { TodaysFoodEntryInterface } from "@/app/interfaces";
import { deleteLoggedFood } from "@/app/actions/actions";
import { RenderNotification } from "@/app/components/RenderNotification";
import { useStore } from "@/store/store";

function TodaysFoodItem({ entry }: { entry: TodaysFoodEntryInterface }) {
    const setIsReloadTodaysLoggedFoods = useStore(
        (s) => s.setIsReloadTodaysLoggedFoods
    );

    const deleteFoodEntry = async () => {
        const isSuccess = await deleteLoggedFood(entry.entry_id);
        if (isSuccess) {
            RenderNotification({
                title: "Food Log Deleted",
                description: "The food log was successfully removed.",
                variant: "success",
            });

            setIsReloadTodaysLoggedFoods(true);
        } else {
            RenderNotification({
                title: "Error Deleting Food Log",
                description: "The food log was not successfully removed.",
                variant: "destructive",
            });
        }
    };

    return (
        <div
            key={entry.entry_id}
            className="hover-card border border-white/10 flex flex-col my-3 p-4"
        >
            <div className="flex flex-row justify-between w-full">
                {/* Food name and main info */}
                <div className="flex flex-col space-y-1 w-1/4 justify-center">
                    <Link href={`/foods/${entry.food_id}`}>
                        <h2 className="font-semibold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                            {entry.food_name}
                        </h2>
                    </Link>
                    <p>{entry.quantity} servings</p>
                </div>

                {/* Nutrient breakdown */}
                <div className="grid grid-flow-col auto-cols-max gap-4 w-1/2 justify-center">
                    {[
                        { label: "Calories", value: `${entry.calories}kcal` },
                        { label: "Protein", value: `${entry.protein}g` },
                        { label: "Carbs", value: `${entry.carbs}g` },
                        { label: "Fats", value: `${entry.fats}g` },
                        { label: "Fiber", value: `${entry.fiber}g` },
                        { label: "Sugar", value: `${entry.sugar}g` },
                        { label: "Sodium", value: `${entry.sodium}g` },
                        { label: "Potassium", value: `${entry.potassium}g` },
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

                {/* External link + delete icon */}
                <div className="w-1/4 flex justify-end items-center mt-2 md:mt-0">
                    <div className="flex flex-col items-center h-full justify-evenly">
                        <Link href={`/foods/${entry.food_id}`}>
                            <OpenInNew className="hover-icon" />
                        </Link>
                        <RemoveCircleOutlineIcon
                            className="hover-icon color:red"
                            onClick={deleteFoodEntry}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TodaysFoodItem;
