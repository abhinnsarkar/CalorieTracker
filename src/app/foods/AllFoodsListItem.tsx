"use client";

import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { FoodItemInterface } from "../interfaces";
import { usePathname, useRouter } from "next/navigation";
import { useStore } from "@/store/store";
import determineBackBtnLabel from "@/determineBackBtnLabel";
import AddFood from "./AddFood";

function AllFoodsListItem({ food }: { food: FoodItemInterface }) {
    const currentPath = usePathname();
    const router = useRouter();

    const setPreviousRoute = useStore((state) => state.setPreviousRoute);
    const setBackBtnLabel = useStore((state) => state.setBackBtnLabel);

    const handleNavigate = (foodId: string) => {
        setPreviousRoute(currentPath);
        setBackBtnLabel(determineBackBtnLabel(currentPath) || "");
        router.push(`/foods/${foodId}`);
    };

    return (
        <div className="hover-card border flex flex-col layout-x-padding !my-4">
            <div className="w-full">
                <div className="flex flex-row w-full flex-wrap md:flex-nowrap">
                    <div className="flex flex-col space-y-1 w-1/2 md:w-1/4 ">
                        <h2 className="text-lg font-bold text-blue-100">
                            {food.food_name}
                        </h2>
                        <p className="text-sm text-gray-600">
                            Calories: {food.calories}
                        </p>
                        <p className="text-sm text-gray-600">
                            Protein: {food.protein?.toString()}g
                        </p>
                        <p className="text-sm text-gray-600">
                            Portion: {food.default_quantity?.toString()}{" "}
                            {food.portion_size}
                        </p>
                    </div>

                    <div className="hidden md:grid md:grid-cols-4 md:grid-rows-2 md:gap-4 md:w-1/2 md:justify-start ">
                        {[
                            { label: "Protein", value: `${food.protein}g` },
                            { label: "Carbs", value: `${food.carbs}g` },
                            { label: "Fats", value: `${food.fats}g` },
                            { label: "Fiber", value: `${food.fiber}g` },
                            { label: "Sugar", value: `${food.sugar}g` },
                            { label: "Sodium", value: `${food.sodium}g` },
                            { label: "Potassium", value: `${food.potassium}g` },
                            { label: "Iron", value: `${food.iron}g` },
                        ].map((fact, index) => (
                            <div
                                key={index}
                                className="hover-card text-center px-2 min-w-[80px] break-words"
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

                    <div className=" w-1/2 md:w-1/4 flex justify-end items-center mt-2 md:mt-0">
                        <div className="flex flex-col items-end space-y-1">
                            <OpenInNewIcon
                                onClick={() => handleNavigate(food.food_id)}
                                className="hover-icon"
                            />

                            <AddFood food={food} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllFoodsListItem;
