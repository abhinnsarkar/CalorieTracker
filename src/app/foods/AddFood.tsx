"use client";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import FoodLogDialog from "../components/FoodLogDialog";
import { FoodItemInterface } from "../interfaces";

function AddFood({ food }: { food: FoodItemInterface }) {
    const [dialogOpen, setDialogOpen] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        e.stopPropagation(); // prevent parent dropdowns from closing
        setDialogOpen(true);
    };

    return (
        <>
            <AddIcon className="hover-icon font-bold" onClick={handleClick} />
            <FoodLogDialog
                open={dialogOpen}
                onOpenChange={setDialogOpen}
                food={food}
            />
        </>
    );
}

export default AddFood;
