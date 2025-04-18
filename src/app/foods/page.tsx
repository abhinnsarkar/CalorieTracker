"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { getAllFoods } from "../actions/actions";
import { FoodItemInterface } from "../interfaces";
import AllFoodsListItem from "./AllFoodsListItem";
import { useRouter } from "next/navigation";

export default function Page() {
    const [foods, setFoods] = useState<FoodItemInterface[]>([]);
    const [allFoods, setAllFoods] = useState<FoodItemInterface[]>([]);
    const [selectedLetter, setSelectedLetter] = useState<string | null>(null);

    const router = useRouter();

    useEffect(() => {
        async function fetchFoods() {
            const data = await getAllFoods();
            setFoods(data);
            setAllFoods(data);
        }
        fetchFoods();
    }, []);

    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const filterFoods = (letter: string) => {
        setSelectedLetter(letter);
        const filtered = allFoods.filter((food) =>
            food.food_name.toUpperCase().startsWith(letter)
        );
        setFoods(filtered);
    };

    const handleBackToDashboard = () => {
        router.push("/"); // ✅ always go back to the dashboard
    };

    return (
        <main className="pt-20">
            <div className="px-4 sm:px-6 md:px-10 max-w-screen-xl mx-auto w-full h-[100vh]">
                <div className="justify-start">
                    <Button
                        className="hover-btn w-full xs:w-auto !justify-start"
                        onClick={handleBackToDashboard}
                    >
                        <div className="justify-center lg:justify-start">
                            <ArrowBackIosIcon />
                            Back to Dashboard
                        </div>
                    </Button>
                </div>

                <div className="py-4 px-4 md:px-12">
                    <h1 className="gradient-text !text-3xl font-bold justify-center">
                        All Foods ({foods.length})
                    </h1>
                </div>

                <div className="space-y-4 w-full">
                    {/* Desktop Grid */}
                    <div className="hidden xl:grid grid-cols-[repeat(26,_minmax(0,_1fr))] gap-2 w-full">
                        {alphabet.map((letter) => (
                            <div
                                key={letter}
                                className={`hover-card border flex flex-col justify-center items-center h-24 w-full cursor-pointer ${
                                    selectedLetter === letter
                                        ? "border-[3px] border-transparent bg-clip-border bg-gradient-to-r from-blue-300 to-blue-100"
                                        : "border-white/10"
                                }`}
                                onClick={() => filterFoods(letter)}
                            >
                                <h2 className="text-lg font-bold text-blue-100">
                                    {letter}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Dropdown */}
                <div className="xl:hidden w-full">
                    <select
                        id="letter"
                        name="letter"
                        title="Filter by letter"
                        className="w-full p-3 rounded bg-slate-800 text-white border border-white/10"
                        onChange={(e) => filterFoods(e.target.value)}
                        value={selectedLetter ?? ""}
                    >
                        <option value="">Filter by Letter</option>
                        {alphabet.map((letter) => (
                            <option key={letter} value={letter}>
                                {letter}
                            </option>
                        ))}
                    </select>
                </div>

                {selectedLetter && (
                    <div>
                        <br />

                        <button
                            onClick={() => {
                                setFoods(allFoods);
                                setSelectedLetter(null);
                            }}
                            className="text-sm underline text-blue-300"
                        >
                            Clear Filter
                        </button>
                    </div>
                )}

                <br />

                {foods.map((food) => (
                    <AllFoodsListItem key={food.food_id} food={food} />
                ))}
            </div>
        </main>
    );
}
