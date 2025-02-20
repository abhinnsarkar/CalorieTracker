import React from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const MacroProgress = ({
    label,
    value,
    max,
    color,
}: {
    label: string;
    value: number;
    max: number;
    color: string;
}) => (
    <div className="space-y-1">
        <div className="flex justify-between text-sm">
            <span>{label}</span>
            <span>
                {value}/{max}g
            </span>
        </div>
        <Progress
            value={(value / max) * 100}
            className={`h-2 [&>div]:${color}`}
        />
    </div>
);

export default function DailyTracking() {
    const calorieGoal = 2000;
    const currentCalories = 1450;
    const caloriePercentage = (currentCalories / calorieGoal) * 100;

    return (
        <Card className="hover-card p-4 h-[calc(100vh-96px)] bg-accent/30 backdrop-blur-md border border-white/10 animate-fade-in flex flex-col">
            <h2 className="text-lg font-semibold mb-3 text-blue-100">
                Daily Progress
            </h2>

            <div className="flex-grow flex flex-col min-h-0">
                <div className="text-center mb-4">
                    <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-4 border-blue-400/20">
                        <div className="text-center">
                            <div className="text-xl font-bold text-blue-100">
                                {Math.round(caloriePercentage)}%
                            </div>
                            <div className="text-xs text-blue-200/70">
                                of daily goal
                            </div>
                        </div>
                    </div>
                    <div className="mt-1 text-sm text-blue-200/70">
                        {currentCalories} / {calorieGoal} kcal
                    </div>
                </div>

                <div className="space-y-3 overflow-auto flex-grow">
                    <h3 className="text-sm font-medium text-blue-200/70">
                        Macronutrients
                    </h3>
                    <MacroProgress
                        label="Protein"
                        value={65}
                        max={150}
                        color="bg-nutrition-protein"
                    />
                    <MacroProgress
                        label="Carbs"
                        value={180}
                        max={250}
                        color="bg-nutrition-carbs"
                    />
                    <MacroProgress
                        label="Fats"
                        value={45}
                        max={70}
                        color="bg-nutrition-fats"
                    />

                    <h3 className="text-sm font-medium text-blue-200/70">
                        Micronutrients
                    </h3>
                    <MacroProgress
                        label="Fiber"
                        value={12}
                        max={25}
                        color="bg-teal-500"
                    />
                    <MacroProgress
                        label="Sugar"
                        value={35}
                        max={50}
                        color="bg-pink-500"
                    />
                    <MacroProgress
                        label="Sodium"
                        value={1200}
                        max={2300}
                        color="bg-amber-500"
                    />
                    <MacroProgress
                        label="Potassium"
                        value={2500}
                        max={3500}
                        color="bg-emerald-500"
                    />
                    <MacroProgress
                        label="Iron"
                        value={8}
                        max={18}
                        color="bg-red-500"
                    />
                </div>
            </div>
        </Card>
    );
}
