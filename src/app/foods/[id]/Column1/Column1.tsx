import React from "react";
import MacrosTable from "./MacrosTable";
import Description from "./Description";
import { FoodItemInterface } from "@/app/interfaces";

function Column1({ food }: { food: FoodItemInterface }) {
    return (
        <div className="hover-card flex-1 flex flex-col h-full p-4 overflow-y-auto rounded-lg space-y-6">
            <MacrosTable food={food} />
            <Description food={food} />
        </div>
    );
}

export default Column1;
