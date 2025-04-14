"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import CloseIcon from "@mui/icons-material/Close";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { FoodItemInterface } from "@/app/interfaces";
import { logFoodEntry } from "@/app/actions/actions";
import { RenderNotification } from "@/app/components/RenderNotification";
import { useStore } from "@/store/store";
import { Separator } from "@/components/ui/separator";

export default function FoodLogDialog({
    open,
    onOpenChange,
    food,
    setFood,
}: {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    food: FoodItemInterface | null;
    setFood?: (food: FoodItemInterface | null) => void;
}) {
    const [quantity, setQuantity] = useState<number>(
        food?.default_quantity || 0
    );

    const setIsReloadTodaysProgress = useStore(
        (s) => s.setIsReloadTodaysProgress
    );

    const setIsReloadCalorieGraph = useStore((s) => s.setIsReloadCalorieGraph);

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
            setIsReloadTodaysProgress(true);
            setIsReloadCalorieGraph(true);
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
            <DialogContent className="p-6 rounded-xl shadow-lg w-[90%] sm:w-full hover-dialog">
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
                            {setFood ? (
                                <div className="hover-card my-4 p-4 rounded-lg border border-white/10 shadow-md">
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
                                </div>
                            ) : (
                                <></>
                            )}

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
                            {setFood ? (
                                <div className="hover-card my-4 p-4 rounded-lg border border-white/10 shadow-md">
                                    <div className="flex flex-col gap-2">
                                        <h1 className="text-xl font-semibold">
                                            {food?.food_name}
                                        </h1>
                                        {/* <p className="text-sm text-muted-foreground sm:max-h-none max-h-[50px] overflow-y-auto"> */}
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
                                    <Separator className="my-2 hover-icon" />
                                    <div className="flex flex-col gap-2 items-start text-left">
                                        <p className="text-sm text-muted-foreground">
                                            Set a specific quantity based on
                                            serving size
                                        </p>
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
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col gap-2 items-start text-left hover-card my-4">
                                    <h1 className="text-xl font-semibold">
                                        Custom
                                    </h1>
                                    <p className="text-sm text-muted-foreground">
                                        Set a specific quantity based on serving
                                        size
                                    </p>
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
                                </div>
                            )}

                            <Button
                                onClick={handleLogFood}
                                className="hover-btn w-full"
                            >
                                Log Custom Amount
                            </Button>
                        </TabsContent>
                    </Tabs>
                </div>
            </DialogContent>
        </Dialog>
    );
}
