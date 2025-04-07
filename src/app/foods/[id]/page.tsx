import Link from "next/link";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { getFoodById } from "@/app/actions/actions";
import { Button } from "@/components/ui/button";
import AddFood from "../AddFood";
import Column1 from "./Column1/Column1";
import Column2 from "./Column2/Column2";
import Column3 from "./Column3/Column3";
import { FoodItemInterface } from "@/app/interfaces";

interface FoodPageProps {
    params: { id: string };
}

export default async function Page({ params }: FoodPageProps) {
    const foodId = params.id;
    const food = (await getFoodById(foodId)) as FoodItemInterface;

    if (!food) return <div className="p-8">Food not found.</div>;

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Header */}
            <div className="w-full px-4 md:px-12 pt-20 flex justify-center">
                <div className="flex justify-between items-center w-full max-w-7xl">
                    <div className="w-1/2">
                        <Link href="/foods">
                            <Button className="hover-btn">
                                <ArrowBackIosIcon />
                                Back to All Foods
                            </Button>
                        </Link>
                    </div>
                    <div className="w-1/2 flex justify-end">
                        <AddFood food={food} />
                    </div>
                </div>
            </div>

            {/* Title */}
            <div className="py-4 px-4 md:px-12">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent text-center">
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
