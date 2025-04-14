// "use client";
// // import Link from "next/link";
// import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
// import { getFoodById } from "@/app/actions/actions";
// import { Button } from "@/components/ui/button";
// import AddFood from "../AddFood";
// import Column1 from "./Column1/Column1";
// import Column2 from "./Column2/Column2";
// import Column3 from "./Column3/Column3";
// import { FoodItemInterface } from "@/app/interfaces";
// import { useEffect, useState } from "react";
// import { useStore } from "@/store/store";
// import { useRouter } from "next/navigation";

// interface FoodPageProps {
//     params: { id: string };
// }

// export default function Page({ params }: FoodPageProps) {
//     const [food, setFood] = useState<FoodItemInterface | null>(null);
//     useEffect(() => {
//         // Create an inner async function
//         const fetchFood = async () => {
//             const res = await getFoodById(params.id);
//             setFood(res as FoodItemInterface);
//         };

//         fetchFood(); // Call the async function
//     }, [params.id]);

//     const previousRoute = useStore((state) => state.previousRoute);
//     const router = useRouter();

//     const backBtnLabel = useStore((state) => state.backBtnLabel);

//     const handleBack = () => {
//         if (previousRoute && previousRoute !== "") {
//             router.push(previousRoute);
//         } else {
//             router.push("/foods");
//         }
//     };

//     if (!food) return <div className="p-8">Food not found.</div>;

//     return (
//         <div className="min-h-screen bg-background text-foreground">
//             {/* Header */}
//             <div className="w-full px-4 md:px-12 pt-20 flex justify-center">
//                 <div className="flex justify-between items-center w-full max-w-7xl">
//                     <div className="w-1/2">
//                         {/* <Link href="/foods"> */}
//                         <Button className="hover-btn">
//                             <ArrowBackIosIcon />
//                             <Button className="hover-btn" onClick={handleBack}>
//                                 <ArrowBackIosIcon />
//                                 Back to {backBtnLabel || "All Foods"}
//                             </Button>
//                         </Button>
//                         {/* </Link> */}
//                     </div>
//                     <div className="w-1/2 flex justify-end">
//                         <AddFood food={food} />
//                     </div>
//                 </div>
//             </div>

//             {/* Title */}
//             <div className="py-4 px-4 md:px-12">
//                 <h1 className="!text-3xl !font-bold gradient-text justify-center">
//                     {food.food_name}
//                 </h1>
//             </div>

//             {/* Content */}
//             <div className="w-full px-4 md:px-12 py-8 flex justify-center">
//                 <div className="flex flex-col md:flex-row gap-6 max-w-7xl w-full h-[75vh]">
//                     <Column1 food={food} />
//                     <Column2 food={food} />
//                     <Column3 food={food} />
//                 </div>
//             </div>
//         </div>
//     );
// }

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
                    <div className="w-1/2">
                        <Button className="hover-btn" onClick={handleBack}>
                            <ArrowBackIosIcon />
                            Back to {backBtnLabel || "All Foods"}
                        </Button>
                    </div>
                    <div className="w-1/2 flex justify-end">
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
