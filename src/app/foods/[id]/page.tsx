"use client";

import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { getFoodById } from "@/app/actions/actions";
import { Button } from "@/components/ui/button";
import AddFood from "../AddFood";
import Column1 from "./Column1/Column1";
import Column2 from "./Column2/Column2";
import Column3 from "./Column3/Column3";
import { FoodItemInterface } from "@/app/interfaces";
import { useEffect, useState } from "react";
import { useStore } from "@/store/store";
import { useRouter, useParams } from "next/navigation";

export default function Page() {
    const [food, setFood] = useState<FoodItemInterface | null>(null);

    const params = useParams(); // ✅ unwrap params properly
    const foodId = params?.id as string;

    useEffect(() => {
        const fetchFood = async () => {
            const res = await getFoodById(foodId);
            setFood(res as FoodItemInterface);
        };

        if (foodId) {
            fetchFood();
        }
    }, [foodId]);

    const previousRoute = useStore((state) => state.previousRoute);
    const backBtnLabel = useStore((state) => state.backBtnLabel);
    const router = useRouter();

    const handleBack = () => {
        if (previousRoute && previousRoute !== "") {
            router.push(previousRoute);
        } else {
            router.push("/foods");
        }
    };

    if (!food) return <div className="p-8">Food not found.</div>;

    return (
        <main className="layout-grid layout-grid-1 px-4 sm:px-6 md:px-10 pt-20 text-foreground space-y-4 lg:space-y-8">
            {/* Header */}
            <div className="w-full">
                <div className="flex justify-between items-center w-full max-w-7xl">
                    <div className="w-full flex !justify-start lg:justify-center text-left lg:text-center">
                        <Button
                            className="hover-btn w-full xs:w-auto"
                            onClick={handleBack}
                        >
                            <ArrowBackIosIcon />
                            <span className="text-left lg:text-center w-full">
                                Back to {backBtnLabel || "All Foods"}
                            </span>
                        </Button>
                    </div>
                    <div className="lg:w-1/2 w-auto flex justify-end ml-2 lg:ml-0">
                        <AddFood food={food} />
                    </div>
                </div>
            </div>

            {/* Title */}
            <div className="py-4">
                <h1 className="!text-3xl !font-bold gradient-text justify-center">
                    {food.food_name}
                </h1>
            </div>

            {/* Content */}
            <div className="py-8">
                <div className="layout-grid layout-grid-1 lg:layout-grid-3 gap-6 h-[75vh]">
                    <Column1 food={food} />
                    <Column2 food={food} />
                    <Column3 food={food} />
                </div>
            </div>
        </main>
    );
}
