"use client";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import AddFoodDialog from "./AddFoodDialog";
import { Food } from "./page";

function AddFood({ food }: { food: Food }) {
    const [selectedFood, setSelectedFood] = useState<Food | null>(null);
    const [dialogOpen, setDialogOpen] = useState(false);

    const addClicked = (food: Food) => {
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
