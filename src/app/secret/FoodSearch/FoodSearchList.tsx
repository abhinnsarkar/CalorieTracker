import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { FoodItemInterface } from "@/app/interfaces";
import FoodLogDialog from "@/app/components/FoodLogDialog";

function FoodSearchList({
    filteredFoods,
    setSearch,
    setIsDropdownOpen,
}: {
    filteredFoods: FoodItemInterface[];
    setSearch: (foodName: string) => void;
    setIsDropdownOpen: (open: boolean) => void;
}) {
    const [selectedFood, setSelectedFood] = useState<FoodItemInterface | null>(
        null
    );
    const [dialogOpen, setDialogOpen] = useState(false);

    return (
        <div className="flex flex-col h-full w-full min-h-0">
            <div className="flex-grow max-h-[100%] overflow-y-auto w-full mt-2 py-2 bg-accent/80 backdrop-blur-md rounded-md shadow-lg border border-white/10 z-10">
                {filteredFoods.map((food: FoodItemInterface) => (
                    <div
                        key={
                            food.food_id ?? `${food.food_name}-${Math.random()}`
                        }
                        className="w-full px-4 py-2 text-left text-blue-100 hover:bg-blue-400/10 transition-colors"
                        onClick={() => {
                            setSearch(food.food_name);
                            setIsDropdownOpen(false);
                            setSelectedFood(food);
                            setDialogOpen(true);
                        }}
                    >
                        <div className="flex flex-row items-center justify-between w-full px-2">
                            <span className="text-sm text-white truncate">
                                {food.food_name}
                            </span>
                            <AddIcon
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedFood(food);
                                    setDialogOpen(true);
                                    console.log(
                                        "Dialog opened from AddIcon click"
                                    );
                                }}
                                className="hover-icon cursor-pointer"
                            />
                        </div>
                    </div>
                ))}
            </div>

            {selectedFood && (
                <FoodLogDialog
                    open={dialogOpen}
                    onOpenChange={setDialogOpen}
                    food={selectedFood}
                    setFood={setSelectedFood}
                />
            )}
        </div>
    );
}

export default FoodSearchList;
