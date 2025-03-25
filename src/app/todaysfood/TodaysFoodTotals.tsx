// import React from "react";
import { getTodaysFoodEntries } from "../actions/actions";

export interface TodaysFoodEntry {
    entry_id: string;
    food_name: string;
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

async function TodaysFoodTotals() {
    const todaysFoodEntries = await getTodaysFoodEntries();

    const totals = {
        calories: 0,
        protein: 0,
        carbs: 0,
        fats: 0,
        fiber: 0,
        sugar: 0,
        sodium: 0,
        potassium: 0,
        iron: 0,
    };

    for (const entry of todaysFoodEntries) {
        totals.calories += entry.calories;
        totals.protein += entry.protein;
        totals.carbs += entry.carbs;
        totals.fats += entry.fats;
        totals.fiber += entry.fiber;
        totals.sugar += entry.sugar;
        totals.sodium += entry.sodium;
        totals.potassium += entry.potassium;
        totals.iron += entry.iron;
    }

    return totals;
    // <div className="pt-20 text-white space-y-8">
    //     <div className="hover-card border border-blue-400/40 p-4">
    //         <h2 className="text-lg font-bold text-blue-100 mb-2">
    //             Today&apos;s Totals
    //         </h2>
    //         <p>Calories: {totals.calories}</p>
    //         <p>Protein: {totals.protein}</p>
    //         <p>Carbs: {totals.carbs}</p>
    //         <p>Fats: {totals.fats}</p>
    //         <p>Fiber: {totals.fiber}</p>
    //         <p>Sugar: {totals.sugar}</p>
    //         <p>Sodium: {totals.sodium}</p>
    //         <p>Potassium: {totals.potassium}</p>
    //         <p>Iron: {totals.iron}</p>
    //     </div>

    //     {todaysFoodEntries.map((foodEntry) => (
    //         <div
    //             key={foodEntry.entry_id}
    //             className="hover-card border border-white/10 p-4"
    //         >
    //             <h3 className="text-md font-semibold text-blue-200">
    //                 {foodEntry.food_name}
    //             </h3>
    //             <p>Calories: {foodEntry.calories}</p>
    //             <p>Protein: {foodEntry.protein}</p>
    //             <p>Carbs: {foodEntry.carbs}</p>
    //             <p>Fats: {foodEntry.fats}</p>
    //             <p>Fiber: {foodEntry.fiber}</p>
    //             <p>Sugar: {foodEntry.sugar}</p>
    //             <p>Sodium: {foodEntry.sodium}</p>
    //             <p>Potassium: {foodEntry.potassium}</p>
    //             <p>Iron: {foodEntry.iron}</p>
    //         </div>
    //     ))}
    // </div>
}

export default TodaysFoodTotals;
