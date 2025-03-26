"use client";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddFoodDialog from "./AddFoodDialog";
import { FoodItemInterface } from "../interfaces";

function AddFood({ food }: { food: FoodItemInterface }) {
    const [dialogOpen, setDialogOpen] = useState(false);
    const [selectedFood, setSelectedFood] = useState<FoodItemInterface | null>(
        null
    );

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // prevent parent dropdowns from closing
        setSelectedFood(food);
        setDialogOpen(true);
    };

    return (
        <>
            <AddIcon
                className="hover-icon cursor-pointer"
                onClick={handleClick}
            />
            <AddFoodDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                selectedFood={selectedFood}
            />
        </>
    );
}

export default AddFood;
