import React from "react";
import { FoodItemInterface } from "@/app/interfaces";

function Description({ food }: { food: FoodItemInterface }) {
    return (
        <div>
            <h2 className="text-xl font-semibold text-center mb-4 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                Description
            </h2>
            <div className="hover-card text-center w-full">
                {food?.description || "No description available."}
            </div>
        </div>
    );
}

export default Description;
