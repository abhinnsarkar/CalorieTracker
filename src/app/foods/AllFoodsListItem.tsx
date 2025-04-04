import React from "react";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import { FoodItemInterface } from "../interfaces";
import Link from "next/link";
import AddFood from "./AddFood";

function AllFoodsListItem({ food }: { food: FoodItemInterface }) {
    return (
        <div
            key={food.food_id}
            // className="hover-card border border-white/10 flex flex-col my-3 p-4"
            className="hover-card border flex flex-col layout-x-padding"
        >
            <div className="w-full">
                <div className="flex flex-row w-full">
                    <div className="flex flex-col space-y-1 w-1/4">
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

                    <div className="grid grid-flow-col auto-cols-max gap-4 w-1/2 justify-center">
                        {[
                            {
                                label: "Carbs",
                                value: `${food.carbs}g`,
                            },
                            {
                                label: "Fats",
                                value: `${food.fats}g`,
                            },
                            {
                                label: "Fiber",
                                value: `${food.fiber}g`,
                            },
                            {
                                label: "Sugar",
                                value: `${food.sugar}g`,
                            },
                            {
                                label: "Sodium",
                                value: `${food.sodium}g`,
                            },
                            {
                                label: "Potassium",
                                value: `${food.potassium}g`,
                            },
                            {
                                label: "Iron",
                                value: `${food.iron}g`,
                            },
                        ].map((fact, index) => (
                            <div
                                key={index}
                                className="hover-card text-center px-2"
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

                    <div className="w-1/4 flex justify-end items-center mt-2 md:mt-0">
                        <div className="flex flex-col items-end space-y-1">
                            <Link
                                key={food.food_id}
                                href={`/foods/${food.food_id}`}
                                className="block"
                            >
                                <OpenInNewIcon className="hover-icon" />
                            </Link>
                            {/* <AddIcon
                                                className="hover-icon"
                                                onClick={() => addClicked(food)}
                                            /> */}
                            <AddFood food={food} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AllFoodsListItem;
