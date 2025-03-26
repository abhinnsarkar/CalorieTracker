import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
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
import { FoodItemInterface } from "../interfaces";
import { logFoodEntry } from "../actions/actions";

function AddFoodDialog({
    open,
    onClose,
    selectedFood,
}: {
    open: boolean;
    onClose: () => void;
    selectedFood: FoodItemInterface | null;
}) {
    const [quantity, setQuantity] = useState<number>(
        selectedFood?.default_quantity || 0
    );

    useEffect(() => {
        setQuantity(selectedFood?.default_quantity || 0);
    }, [selectedFood]);

    console.log("AddFoodDialog");
    console.log("dialogOpen", open);
    console.log("selectedFood", selectedFood);

    const handleLogFood = async () => {
        console.log("handleLogFood");

        if (selectedFood) {
            if (
                await logFoodEntry({
                    food_id: selectedFood.food_id,
                    quantity: quantity,
                })
            ) {
                onClose();
            }
        }
    };

    return (
        <div>
            <Dialog open={open} onOpenChange={onClose}>
                <DialogContent className="p-6 rounded-xl shadow-lg">
                    <div className="mx-auto w-[87%]">
                        <div className="flex flex-row justify-between">
                            <DialogTitle className="text-xl font-semibold text-center mb-2 bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                                Add Food
                            </DialogTitle>
                            <CloseIcon
                                className="hover-icon"
                                onClick={onClose}
                            />
                        </div>
                    </div>
                    <VisuallyHidden>
                        <DialogTitle>Add Food</DialogTitle>
                    </VisuallyHidden>
                    <div className="flex justify-center items-center">
                        <Tabs className="w-[400px]">
                            <TabsList className="grid w-full grid-cols-2 glow-box  rounded-xl h-15">
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
                                <Card className="rounded-xl border border-white/10 shadow-md glow-box mt-5">
                                    <Button
                                        onClick={handleLogFood}
                                        className="hover-btn w-full my-auto"
                                    >
                                        Log Default Quantity of Food
                                    </Button>
                                </Card>
                            </TabsContent>
                            <TabsContent value="custom">
                                <Card className="rounded-xl border border-white/10 shadow-md">
                                    <CardHeader>
                                        <CardTitle>Custom</CardTitle>
                                        <CardDescription>
                                            Change the quantity of the food item
                                            to a certain amount based on the
                                            serving size
                                        </CardDescription>
                                    </CardHeader>
                                    <CardContent className="space-y-2">
                                        <div className="flex items-center gap-2">
                                            <Input
                                                className="w-fit"
                                                id="current"
                                                type="text"
                                                onChange={(e) =>
                                                    setQuantity(
                                                        parseInt(e.target.value)
                                                    )
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
                                            onClick={handleLogFood}
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
        </div>
    );
}

export default AddFoodDialog;
