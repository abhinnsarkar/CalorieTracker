"use client";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddFoodDialog from "./AddFoodDialog";
import { FoodItemInterface } from "../interfaces";

function AddFood({ food }: { food: FoodItemInterface }) {
    const [selectedFood, setSelectedFood] = useState<FoodItemInterface | null>(
        null
    );
    const [dialogOpen, setDialogOpen] = useState(false);

    const addClicked = (food: FoodItemInterface) => {
        console.log("Add clicked");
        setSelectedFood(food);
        setDialogOpen(true);
    };

    return (
        <>
            <AddIcon className="hover-icon" onClick={() => addClicked(food)} />
            <AddFoodDialog
                open={dialogOpen}
                onClose={() => setDialogOpen(false)}
                selectedFood={selectedFood}
            />
        </>
    );
}

export default AddFood;
