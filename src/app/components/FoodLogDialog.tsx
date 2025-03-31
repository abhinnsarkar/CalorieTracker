"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import CloseIcon from "@mui/icons-material/Close";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { FoodItemInterface } from "@/app/interfaces";
import { logFoodEntry } from "@/app/actions/actions";
import { RenderNotification } from "@/app/components/RenderNotification";

export default function FoodLogDialog({
    open,
    onOpenChange,
    food,
    setFood, // optional, used to clear selectedFood
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    food: FoodItemInterface | null;
    setFood?: (food: FoodItemInterface | null) => void;
}) {
    const [quantity, setQuantity] = useState<number>(
        food?.default_quantity || 0
    );

    useEffect(() => {
        if (food) setQuantity(food.default_quantity || 0);
    }, [food]);

    const close = () => {
        onOpenChange(false);
        if (setFood) setFood(null);
    };

    const handleLogFood = async () => {
        if (!food) return;
        const success = await logFoodEntry({
            food_id: food.food_id,
            quantity,
        });

        if (success) {
            close();
            RenderNotification({
                title: "Food Logged",
                description: "The food was successfully logged.",
                variant: "success",
            });
        } else {
            RenderNotification({
                title: "Error Logging Food",
                description: "The food was not successfully logged.",
                variant: "destructive",
            });
        }
    };

    return (
        <Dialog open={open} onOpenChange={close}>
            <DialogContent className="p-6 rounded-xl shadow-lg">
                <div className="flex flex-row justify-end items-center">
                    <CloseIcon className="hover-icon" onClick={close} />
                </div>
                <VisuallyHidden>
                    <DialogTitle>Add Food</DialogTitle>
                </VisuallyHidden>
                <div className="flex justify-center items-center">
                    <Tabs className="w-[400px]" defaultValue="default">
                        <TabsList className="grid w-full grid-cols-2 glow-box rounded-xl h-15">
                            <TabsTrigger value="default" className="hover-tab">
                                Default
                            </TabsTrigger>
                            <TabsTrigger value="custom" className="hover-tab">
                                Custom
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="default">
                            <div className="hover-card my-4 p-4 rounded-lg border border-white/10 shadow-md">
                                {setFood ? (
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-xl font-semibold">
                                            {food?.food_name}
                                        </h1>
                                        <p className="text-sm text-muted-foreground">
                                            {food?.description}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Calories: {food?.calories}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Protein: {food?.calories}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Portion: {food?.default_quantity}{" "}
                                            {food?.portion_size}
                                        </p>
                                    </div>
                                ) : (
                                    <p></p>
                                )}
                            </div>
                            <Card className="rounded-xl border border-white/10 shadow-md glow-box mt-5">
                                <Button
                                    onClick={handleLogFood}
                                    className="hover-btn w-full"
                                >
                                    Log Default Quantity of Food
                                </Button>
                            </Card>
                        </TabsContent>

                        <TabsContent value="custom">
                            <div className="hover-card my-4 p-4 rounded-lg border border-white/10 shadow-md">
                                {setFood ? (
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-xl font-semibold">
                                            {food?.food_name}
                                        </h1>
                                        <p className="text-sm text-muted-foreground">
                                            {food?.description}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Calories: {food?.calories}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Protein: {food?.calories}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Portion: {food?.default_quantity}{" "}
                                            {food?.portion_size}
                                        </p>
                                    </div>
                                ) : (
                                    <p></p>
                                )}
                            </div>
                            <Card className="rounded-xl border border-white/10 shadow-md hover-card">
                                <CardHeader>
                                    <CardTitle>Custom</CardTitle>
                                    <CardDescription>
                                        Set a specific quantity based on serving
                                        size
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="space-y-2">
                                    <div className="flex items-center gap-2">
                                        <Input
                                            className="w-fit"
                                            type="text"
                                            inputMode="numeric"
                                            pattern="[0-9]*"
                                            onWheel={(e) =>
                                                e.currentTarget.blur()
                                            }
                                            onChange={(e) => {
                                                const val = e.target.value;
                                                const num = parseInt(val);
                                                setQuantity(
                                                    isNaN(num) ? 0 : num
                                                );
                                            }}
                                            value={quantity || ""}
                                        />
                                        <span>{food?.portion_size}s</span>
                                    </div>
                                </CardContent>
                            </Card>
                            <Card className="rounded-xl border border-white/10 shadow-md glow-box mt-5">
                                <Button
                                    onClick={handleLogFood}
                                    className="hover-btn w-full"
                                >
                                    Log Custom Amount
                                </Button>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </DialogContent>
        </Dialog>
    );
}
