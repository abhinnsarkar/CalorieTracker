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
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <div className="w-full px-4 md:px-12 pt-20 flex justify-center">
                <div className="flex justify-between items-center w-full max-w-7xl">
                    <div className="w-full flex !justify-start lg:justify-center text-left lg:text-center">
                        <Button
                            className="hover-btn w-full lg:w-auto  !justify-start"
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
            <div className="py-4 px-4 md:px-12">
                <h1 className="!text-3xl !font-bold gradient-text justify-center">
                    {food.food_name}
                </h1>
            </div>

            {/* Content */}
            <div className="w-full px-4 md:px-12 py-8 flex justify-center">
                <div className="flex flex-col md:flex-row gap-6 max-w-7xl w-full h-[75vh]">
                    <Column1 food={food} />
                    <Column2 food={food} />
                    <Column3 food={food} />
                </div>
            </div>
        </div>
    );
}
