// "use client";

// import React, { useEffect, useState } from "react";
// import { Card } from "@/components/ui/card";
// import {
//     getTodaysFoodTotals,
//     getUserCurrentNutritionRequirements,
// } from "../../actions/actions";
// import { Button } from "@/components/ui/button";
// import OpenInNewIcon from "@mui/icons-material/OpenInNew";
// import Link from "next/link";
// import MacroProgress from "./MacroProgress";
// import CircularProgress from "./CircularProgress";
// import { NutritionRequirementsInterface } from "@/app/interfaces";
// import { useStore } from "@/store/store";

// interface TodaysFoodEntryTotals {
//     calories: number;
//     protein: number;
//     carbs: number;
//     fats: number;
//     fiber: number;
//     sugar: number;
//     sodium: number;
//     potassium: number;
//     iron: number;
// }

// export default function DailyProgress() {
//     const [nutritionRequirements, setNutritionRequirements] =
//         useState<NutritionRequirementsInterface | null>(null);
//     const [todaysTotals, setTodaysTotals] =
//         useState<TodaysFoodEntryTotals | null>(null);

//     const [calorieGoal, setCalorieGoal] = useState(0);
//     const [caloriesConsumed, setCaloriesConsumed] = useState(0);

//     const setIsLoadProfileAfterSetup = useStore(
//         (state) => state.setIsLoadProfileAfterSetup
//     );

//     const isReloadTodaysProgress = useStore(
//         (state) => state.isReloadTodaysProgress
//     );
//     const setIsReloadTodaysProgress = useStore(
//         (state) => state.setIsReloadTodaysProgress
//     );

//     // Shared fetch logic for both initial load and reactive reload
//     const fetchNutritionStats = async () => {
//         const data = await getUserCurrentNutritionRequirements();

//         if (data) {
//             setNutritionRequirements({
//                 maintenance_calories: data.maintenance_calories,
//                 protein: data.protein,
//                 carbs: data.carbs,
//                 fats: data.fats,
//                 fiber: data.fiber,
//                 sugar: data.sugar,
//                 sodium: data.sodium,
//                 potassium: data.potassium,
//                 iron: data.iron,
//             });

//             const totals = await getTodaysFoodTotals();
//             setTodaysTotals(totals);

//             const maintenance = data.maintenance_calories || 0;
//             const consumed = totals.calories || 0;

//             setCalorieGoal(maintenance);
//             setCaloriesConsumed(consumed);
//         }
//     };

//     // ✅ Initial fetch on mount
//     useEffect(() => {
//         fetchNutritionStats();
//     }, []);

//     // ✅ Triggered reload when Zustand flag is true
//     useEffect(() => {
//         if (isReloadTodaysProgress || isLoadProfileAfterSetup) {
//             fetchNutritionStats();
//             // setIsReloadTodaysProgress(true);
//             setIsLoadProfileAfterSetup(false);
//             setIsReloadTodaysProgress(false);
//         }
//     }, [isReloadTodaysProgress, setIsReloadTodaysProgress]);

//     return (
//         <Card className="hover-card h-full">
//             <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
//                 Daily Progress
//             </h2>
//             <br />

//             <div className="flex-grow flex flex-col min-h-0">
//                 <div className="text-center mb-4">
//                     <CircularProgress
//                         caloriesConsumed={caloriesConsumed}
//                         caloriesGoal={calorieGoal}
//                     />
//                 </div>

//                 <div className="space-y-3 overflow-auto flex-grow pb-6">
//                     <h3 className="text-sm font-medium text-blue-200/70">
//                         Macronutrients
//                     </h3>
//                     <MacroProgress
//                         label="Protein"
//                         value={todaysTotals?.protein || 0}
//                         max={nutritionRequirements?.protein || 0}
//                     />
//                     <MacroProgress
//                         label="Carbs"
//                         value={todaysTotals?.carbs || 0}
//                         max={nutritionRequirements?.carbs || 0}
//                     />
//                     <MacroProgress
//                         label="Fats"
//                         value={todaysTotals?.fats || 0}
//                         max={nutritionRequirements?.fats || 0}
//                     />

//                     <h3 className="text-sm font-medium text-blue-200/70">
//                         Micronutrients
//                     </h3>
//                     <MacroProgress
//                         label="Fiber"
//                         value={todaysTotals?.fiber || 0}
//                         max={nutritionRequirements?.fiber || 0}
//                     />
//                     <MacroProgress
//                         label="Sugar"
//                         value={todaysTotals?.sugar || 0}
//                         max={nutritionRequirements?.sugar || 0}
//                     />
//                     <MacroProgress
//                         label="Sodium"
//                         value={todaysTotals?.sodium || 0}
//                         max={nutritionRequirements?.sodium || 0}
//                     />
//                     <MacroProgress
//                         label="Potassium"
//                         value={todaysTotals?.potassium || 0}
//                         max={nutritionRequirements?.potassium || 0}
//                     />
//                     <MacroProgress
//                         label="Iron"
//                         value={todaysTotals?.iron || 0}
//                         max={nutritionRequirements?.iron || 0}
//                     />
//                     <br />
//                 </div>
//             </div>

//             <Link href="/foods/today">
//                 <Button className="hover-btn w-full mt-4">
//                     View Today&apos;s Logged Foods <OpenInNewIcon />
//                 </Button>
//             </Link>
//         </Card>
//     );
// }

"use client";

import React, { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import {
    getTodaysFoodTotals,
    getUserCurrentNutritionRequirements,
} from "../../actions/actions";
import { Button } from "@/components/ui/button";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";
import MacroProgress from "./MacroProgress";
import CircularProgress from "./CircularProgress";
import { NutritionRequirementsInterface } from "@/app/interfaces";
import { useStore } from "@/store/store";

interface TodaysFoodEntryTotals {
    calories: number;
    protein: number;
    carbs: number;
    fats: number;
    fiber: number;
    sugar: number;
    sodium: number;
    potassium: number;
    iron: number;
}

export default function DailyProgress() {
    const [nutritionRequirements, setNutritionRequirements] =
        useState<NutritionRequirementsInterface | null>(null);
    const [todaysTotals, setTodaysTotals] =
        useState<TodaysFoodEntryTotals | null>(null);

    const [calorieGoal, setCalorieGoal] = useState(0);
    const [caloriesConsumed, setCaloriesConsumed] = useState(0);

    const isReloadTodaysProgress = useStore(
        (state) => state.isReloadTodaysProgress
    );
    const setIsReloadTodaysProgress = useStore(
        (state) => state.setIsReloadTodaysProgress
    );

    const isLoadProfileAfterSetup = useStore(
        (state) => state.isLoadProfileAfterSetup
    );
    const setIsLoadProfileAfterSetup = useStore(
        (state) => state.setIsLoadProfileAfterSetup
    );

    const fetchNutritionStats = async () => {
        const data = await getUserCurrentNutritionRequirements();

        if (data) {
            setNutritionRequirements({
                maintenance_calories: data.maintenance_calories,
                protein: data.protein,
                carbs: data.carbs,
                fats: data.fats,
                fiber: data.fiber,
                sugar: data.sugar,
                sodium: data.sodium,
                potassium: data.potassium,
                iron: data.iron,
            });

            const totals = await getTodaysFoodTotals();

            setTodaysTotals(totals);

            const maintenance = data.maintenance_calories || 0;
            const consumed = totals.calories || 0;

            setCalorieGoal(maintenance);
            setCaloriesConsumed(consumed);
        }
    };

    // ✅ Fetch once on page load
    useEffect(() => {
        fetchNutritionStats();
    }, []);

    // ✅ Re-fetch on Zustand trigger
    useEffect(() => {
        if (isReloadTodaysProgress || isLoadProfileAfterSetup) {
            fetchNutritionStats();
            setIsReloadTodaysProgress(false);
            setIsLoadProfileAfterSetup(false);
        }
    }, [
        isReloadTodaysProgress,
        isLoadProfileAfterSetup,
        setIsReloadTodaysProgress,
        setIsLoadProfileAfterSetup,
    ]);

    return (
        <Card className="hover-card h-full">
            <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                Daily Progress
            </h2>
            <br />

            <div className="flex-grow flex flex-col min-h-0">
                <div className="text-center mb-4">
                    <CircularProgress
                        caloriesConsumed={caloriesConsumed}
                        caloriesGoal={calorieGoal}
                    />
                </div>

                <div className="space-y-3 overflow-auto flex-grow pb-6">
                    <h3 className="text-sm font-medium text-blue-200/70">
                        Macronutrients
                    </h3>
                    <MacroProgress
                        label="Protein"
                        value={todaysTotals?.protein || 0}
                        max={nutritionRequirements?.protein || 0}
                    />
                    <MacroProgress
                        label="Carbs"
                        value={todaysTotals?.carbs || 0}
                        max={nutritionRequirements?.carbs || 0}
                    />
                    <MacroProgress
                        label="Fats"
                        value={todaysTotals?.fats || 0}
                        max={nutritionRequirements?.fats || 0}
                    />

                    <h3 className="text-sm font-medium text-blue-200/70">
                        Micronutrients
                    </h3>
                    <MacroProgress
                        label="Fiber"
                        value={todaysTotals?.fiber || 0}
                        max={nutritionRequirements?.fiber || 0}
                    />
                    <MacroProgress
                        label="Sugar"
                        value={todaysTotals?.sugar || 0}
                        max={nutritionRequirements?.sugar || 0}
                    />
                    <MacroProgress
                        label="Sodium"
                        value={todaysTotals?.sodium || 0}
                        max={nutritionRequirements?.sodium || 0}
                    />
                    <MacroProgress
                        label="Potassium"
                        value={todaysTotals?.potassium || 0}
                        max={nutritionRequirements?.potassium || 0}
                    />
                    <MacroProgress
                        label="Iron"
                        value={todaysTotals?.iron || 0}
                        max={nutritionRequirements?.iron || 0}
                    />
                    <br />
                </div>
            </div>

            <Link href="/foods/today">
                <Button className="hover-btn w-full mt-4">
                    View Today&apos;s Logged Foods <OpenInNewIcon />
                </Button>
            </Link>
        </Card>
    );
}
