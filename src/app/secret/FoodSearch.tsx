"use client";
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const mockFoods = [
    "Apple",
    "Banana",
    "Chicken Breast",
    "Greek Yogurt",
    "Quinoa",
    "Brown Rice",
    "Salmon",
    "Sweet Potato",
    "Avocado",
    "Eggs",
];

export default function FoodSearch() {
    const [search, setSearch] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const filteredFoods = mockFoods.filter((food) =>
        food.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Card className=" hover-card p-4 h-[calc(100vh-96px)] bg-accent/30 backdrop-blur-md border border-white/10 animate-fade-in flex flex-col">
            <h2 className="text-lg font-semibold mb-3 text-blue-100">
                Food Search
            </h2>
            <div className="relative flex-grow flex flex-col min-h-0">
                <div>
                    <Input
                        type="text"
                        placeholder="Search foods..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => setIsDropdownOpen(true)}
                        className="pl-10 bg-accent/50 border-white/10 text-blue-100 placeholder:text-blue-300/50"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-300/50 h-4 w-4" />
                </div>
                {isDropdownOpen && filteredFoods.length > 0 && (
                    <div className="absolute w-full mt-2 py-2 bg-accent/80 backdrop-blur-md rounded-md shadow-lg border border-white/10 z-10">
                        {filteredFoods.map((food) => (
                            <button
                                key={food}
                                className="w-full px-4 py-2 text-left text-blue-100 hover:bg-blue-400/10 transition-colors"
                                onClick={() => {
                                    setSearch(food);
                                    setIsDropdownOpen(false);
                                }}
                            >
                                {food}
                            </button>
                        ))}
                    </div>
                )}

                <div className="mt-4 space-y-3 flex-grow overflow-hidden">
                    <h3 className="text-sm font-medium text-blue-200/70">
                        Recent Searches
                    </h3>
                    <div className="space-y-1.5 overflow-auto flex-grow">
                        {mockFoods.slice(0, 5).map((food) => (
                            <button
                                key={food}
                                className="w-full px-3 py-1.5 text-left text-blue-100 hover:bg-blue-400/10 transition-colors rounded-md"
                                onClick={() => setSearch(food)}
                            >
                                {food}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </Card>
    );
}
