import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import AddIcon from "@mui/icons-material/Add";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import CloseIcon from "@mui/icons-material/Close";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { logFoodEntry } from "@/app/actions/actions";
import { FoodItemInterface } from "@/app/interfaces";

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
                <Dialog
                    open={dialogOpen}
                    onOpenChange={(open) => setDialogOpen(open)}
                >
                    <DialogContent className="p-6 rounded-xl shadow-lg">
                        <CloseIcon
                            className="hover-icon"
                            onClick={() => setDialogOpen(false)}
                        />
                        <VisuallyHidden>
                            <DialogTitle>Add Food</DialogTitle>
                        </VisuallyHidden>
                        <div className="flex justify-center items-center">
                            <Tabs className="w-[400px]" defaultValue="default">
                                <TabsList className="grid w-full grid-cols-2 glow-box rounded-xl h-15">
                                    <TabsTrigger
                                        value="default"
                                        className="hover-tab"
                                    >
                                        Default
                                    </TabsTrigger>
                                    <TabsTrigger
                                        value="custom"
                                        className="hover-tab"
                                    >
                                        Custom
                                    </TabsTrigger>
                                </TabsList>

                                <TabsContent value="default">
                                    <Card className="rounded-xl border border-white/10 shadow-md mt-5 p-4 text-sm text-white">
                                        <p>
                                            <strong>Food Name:</strong>{" "}
                                            {selectedFood.food_name}
                                        </p>
                                        <p>
                                            <strong>Calories:</strong>{" "}
                                            {selectedFood.calories}
                                        </p>
                                        <p>
                                            <strong>Protein:</strong>{" "}
                                            {selectedFood.protein}g
                                        </p>
                                        <p>
                                            <strong>Carbs:</strong>{" "}
                                            {selectedFood.carbs}g
                                        </p>
                                        <p>
                                            <strong>Fats:</strong>{" "}
                                            {selectedFood.fats}g
                                        </p>
                                        <p>
                                            <strong>Serving Size:</strong>{" "}
                                            {selectedFood.portion_size}
                                        </p>
                                    </Card>
                                    <Card className="rounded-xl border border-white/10 shadow-md glow-box mt-5">
                                        <Button
                                            onClick={async () => {
                                                if (
                                                    await logFoodEntry({
                                                        food_id:
                                                            selectedFood.food_id,
                                                        quantity:
                                                            selectedFood.default_quantity ||
                                                            0,
                                                    })
                                                ) {
                                                    setDialogOpen(false);
                                                }
                                            }}
                                            className="hover-btn w-full my-auto"
                                        >
                                            Log Default Quantity of Food
                                        </Button>
                                    </Card>
                                </TabsContent>

                                <TabsContent value="custom">
                                    <Card className="rounded-xl border border-white/10 shadow-md mt-5 p-4 text-sm text-white">
                                        <p>
                                            <strong>Food Name:</strong>{" "}
                                            {selectedFood.food_name}
                                        </p>
                                        <p>
                                            <strong>Calories:</strong>{" "}
                                            {selectedFood.calories}
                                        </p>
                                        <p>
                                            <strong>Protein:</strong>{" "}
                                            {selectedFood.protein}g
                                        </p>
                                        <p>
                                            <strong>Carbs:</strong>{" "}
                                            {selectedFood.carbs}g
                                        </p>
                                        <p>
                                            <strong>Fats:</strong>{" "}
                                            {selectedFood.fats}g
                                        </p>
                                        <p>
                                            <strong>Serving Size:</strong>{" "}
                                            {selectedFood.portion_size}
                                        </p>
                                    </Card>
                                    <Card className="rounded-xl border border-white/10 shadow-md mt-5">
                                        <CardHeader>
                                            <CardTitle>Custom</CardTitle>
                                            <CardDescription>
                                                Change the quantity of the food
                                                item to a certain amount based
                                                on the serving size
                                            </CardDescription>
                                        </CardHeader>
                                        <CardContent className="space-y-2">
                                            <div className="flex items-center gap-2">
                                                <Input
                                                    className="w-fit"
                                                    type="text"
                                                    onChange={(e) =>
                                                        setSelectedFood({
                                                            ...selectedFood,
                                                            default_quantity:
                                                                parseInt(
                                                                    e.target
                                                                        .value
                                                                ),
                                                        })
                                                    }
                                                />
                                                <span>
                                                    {selectedFood?.portion_size +
                                                        "s"}
                                                </span>
                                            </div>
                                        </CardContent>
                                        <CardFooter>
                                            <Button
                                                className="hover-btn w-full mt-2"
                                                onClick={async () => {
                                                    if (
                                                        await logFoodEntry({
                                                            food_id:
                                                                selectedFood.food_id,
                                                            quantity:
                                                                selectedFood.default_quantity ||
                                                                0,
                                                        })
                                                    ) {
                                                        setDialogOpen(false);
                                                    }
                                                }}
                                            >
                                                Log Custom Amount
                                            </Button>
                                        </CardFooter>
                                    </Card>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </DialogContent>
                </Dialog>
            )}
        </div>
    );
}

export default FoodSearchList;
