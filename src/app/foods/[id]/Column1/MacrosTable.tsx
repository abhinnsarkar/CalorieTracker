import React from "react";
import { FoodItemInterface } from "@/app/interfaces";

function MacrosTable({ food }: { food: FoodItemInterface }) {
    const facts = [
        { label: "Calories", value: `${food?.calories}` },
        { label: "Protein", value: `${food?.protein}g` },
        { label: "Carbs", value: `${food?.carbs}g` },
        { label: "Fats", value: `${food?.fats}g` },
        { label: "Fiber", value: `${food?.fiber}g` },
        { label: "Sugar", value: `${food?.sugar}g` },
        { label: "Sodium", value: `${food?.sodium}g` },
        { label: "Potassium", value: `${food?.potassium}g` },
        { label: "Iron", value: `${food?.iron}g` },
    ];

    return (
        <div>
            <h2 className="text-xl font-semibold text-center mb-4 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                Macros
            </h2>
            <div className="grid grid-cols-3 gap-4">
                {facts.map((fact, index) => (
                    <div
                        key={index}
                        className="hover-card text-center flex flex-col justify-center items-center"
                    >
                        <p className="text-sm text-foreground">{fact.label}</p>
                        <p className="text-xs text-muted-foreground">
                            {fact.value}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MacrosTable;
