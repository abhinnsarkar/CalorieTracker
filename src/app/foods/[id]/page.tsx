import React from "react";
import { prisma } from "@/lib/db";

interface LinkPageProps {
    params: {
        id: string;
    };
}

const ListItems = ({ items }: { items: string[] }) => (
    <div className="flex-wrap w-[75%]">
        {items.map((item, key) => (
            <div key={key} className="hover-card text-center my-2">
                {item}
            </div>
        ))}
    </div>
);

export default async function Page({ params }: LinkPageProps) {
    // Fetch the food record using the provided id
    const food = await prisma.foods.findUnique({
        where: { food_id: params.id },
    });

    if (!food) {
        return <div>Food not found.</div>;
    }

    console.log("food is", JSON.stringify(food));
    console.log("food description:", food?.description);

    const foodFacts = [
        { label: "Calories", value: food?.calories?.toString() },
        { label: "Protein", value: food?.protein?.toString() + "g" },
        { label: "Carbs", value: food?.carbs?.toString() + "g" },
        { label: "Fats", value: food?.fats?.toString() + "g" },
        { label: "Fiber", value: food?.fiber?.toString() + "g" },
        { label: "Sugar", value: food?.sugar?.toString() + "g" },
        { label: "Sodium", value: food?.sodium?.toString() + "g" },
        { label: "Potassium", value: food?.potassium?.toString() + "g" },
        { label: "Iron", value: food?.iron?.toString() + "g" },
    ];

    return (
        <div className="flex flex-col h-screen w-[95%] mx-auto">
            {/* Main content */}
            <main className="container mx-auto px-4 pt-20 flex-grow">
                <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent place-self-center">
                    {food?.food_name}
                </h1>
            </main>

            {/* Food Facts Grid */}
            <div className="flex-grow grid grid-cols-3 grid-rows-2 w-[95%] mx-auto gap-4 overflow-hidden">
                <div className="col-span-1">
                    <div className="flex justify-center items-center">
                        <div className="w-[75%] grid grid-cols-3 gap-4 my-2 auto-rows-auto">
                            {foodFacts.map((fact, index) => (
                                <div
                                    key={index}
                                    className="hover-card text-center"
                                >
                                    <p className="text-gray-600 font-semibold">
                                        {fact.label}
                                    </p>
                                    <p className="text-gray-400">
                                        {fact.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="row-span-2">
                    <div className="flex flex-col items-center justify-center row-span-2">
                        <ListItems
                            items={food?.ingredients?.split(",") ?? []}
                        />
                    </div>
                </div>
                <div className="row-span-2">
                    <div className="flex flex-col items-center justify-center row-span-2">
                        <ListItems
                            items={food?.instructions?.split(",") ?? []}
                        />
                    </div>
                </div>
                <div className="col-start-1">
                    <div className="flex justify-center items-center">
                        <div className="w-[75%] my-2 hover-card text-center">
                            {food?.description}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
