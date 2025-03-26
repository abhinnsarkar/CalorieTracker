"use client";
import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import Link from "next/link";
import FoodSearchList from "./FoodSearchList";
import { FoodItemInterface } from "@/app/interfaces";
import { getAllFoods } from "@/app/actions/actions";

// const mockFoods = [
//     "Apple",
//     "Banana",
//     "Chicken Breast",
//     "Greek Yogurt",
//     "Quinoa",
//     "Brown Rice",
//     "Salmon",
//     "Sweet Potato",
//     "Avocado",
//     "Eggs",
// ];

export default function FoodSearch() {
    const [search, setSearch] = useState("");
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const [filteredFoods, setFilteredFoods] = useState<FoodItemInterface[]>([]);

    useEffect(() => {
        const fetchFoods = async () => {
            try {
                const foodsList = await getAllFoods();
                setFilteredFoods(foodsList);
            } catch (error) {
                console.error("Failed to fetch foods:", error);
            }
        };
        fetchFoods();
    }, []);

    const openSearchOptions = () => {
        console.log("openSearchOptions");
        setIsDropdownOpen(true);
    };

    return (
        <Card className="hover-card h-full">
            <h2 className="text-xl font-semibold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent">
                Food Search
            </h2>
            <br />
            <Link className=" w-full my-2" href="/foods">
                <Button className="hover-btn w-full">
                    View All Foods <OpenInNewIcon />
                </Button>
            </Link>
            <div className="relative flex-grow flex flex-col min-h-0 mt-1">
                <div>
                    <Input
                        type="text"
                        placeholder="Search foods..."
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onFocus={() => openSearchOptions()}
                        className="pl-10 bg-accent/50 border-white/10 text-blue-100 placeholder:text-blue-300/50"
                    />
                </div>

                <div className="absolute inset-0 flex items-center h-[95%] mt-10 justify-center ">
                    {isDropdownOpen && filteredFoods.length > 0 && (
                        <FoodSearchList
                            filteredFoods={filteredFoods}
                            setSearch={setSearch}
                            setIsDropdownOpen={setIsDropdownOpen}
                        />
                    )}
                </div>
            </div>
        </Card>
    );
}
