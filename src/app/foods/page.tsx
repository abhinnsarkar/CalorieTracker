import { prisma } from "@/lib/db";
import Link from "next/link";
import React from "react";

export default async function page() {
    const foods = await prisma.foods.findMany();

    return (
        <div>
            <main className="container mx-auto px-4 pt-20">
                <div>
                    <h1 className="text-xl font-semibold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent place-self-center">
                        All Foods
                    </h1>
                    <div>
                        {foods.map((food) => (
                            <Link
                                key={food.food_id}
                                href={`/foods/${food.food_id}`}
                            >
                                <div
                                    key={food.food_id}
                                    className="hover-card border border-white/10 flex flex-col my-3"
                                >
                                    <h2 className="text-sm font-medium text-blue-100">
                                        {food.food_name}
                                    </h2>
                                    <p className="text-sm text-gray-600">
                                        Calories : {food.calories}
                                    </p>
                                    <p className="text-sm text-gray-600">
                                        Portion :{" "}
                                        {food.default_quantity?.toString()}{" "}
                                        {food.portion_size}
                                    </p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    );
}
