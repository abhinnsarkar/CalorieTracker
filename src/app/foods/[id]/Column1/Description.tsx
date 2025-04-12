import React from "react";
import { FoodItemInterface } from "@/app/interfaces";

function Description({ food }: { food: FoodItemInterface }) {
    return (
        <div>
            <h2 className="gradient-text mb-4 justify-center">Description</h2>
            <div className="hover-card text-center w-full">
                {food?.description || "No description available."}
            </div>
        </div>
    );
}

export default Description;
