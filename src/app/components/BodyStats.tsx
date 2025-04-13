// "use client";

// import React, { useState, useEffect, use } from "react";
// import { getUserCurrentBodyStats } from "../actions/actions";

// interface BodyStatsInterface {
//     height_cm: number | null;
//     weight_kg: number | null;
//     activity_level: string | null;
//     objective: string | null;
// }

// export default function BodyStats() {
//     const [bodyStats, setBodyStats] = useState<BodyStatsInterface | null>(null);

//     useEffect(() => {
//         // Fetch the body stats when the component is mounted
//         const fetchBodyStats = async () => {
//             const data = await getUserCurrentBodyStats();

//             if (data) {
//                 // Resolve promises for activity_level and objective
//                 const resolvedActivityLevel = await data.activity_level;
//                 const resolvedObjective = await data.objective;

//                 // Update the state with resolved values
//                 setBodyStats({
//                     height_cm: data.height_cm,
//                     weight_kg: data.weight_kg,
//                     activity_level: resolvedActivityLevel,
//                     objective: resolvedObjective,
//                 });
//             }
//         };

//         fetchBodyStats();
//     }, []); // Empty dependency array ensures this runs once when the component mounts

//     if (!bodyStats) {
//         return <div>Loading...</div>; // Display loading state while data is being fetched
//     }

//     const { height_cm, weight_kg, activity_level, objective } = bodyStats;

//     const bodyStatsList = [
//         { label: "Height(cm)", value: height_cm ?? "Not available" },
//         { label: "Weight(kg)", value: weight_kg ?? "Not available" },
//         { label: "Activity Level", value: activity_level ?? "Not available" },
//         { label: "Objective", value: objective ?? "Not available" },
//     ];

//     return (
//         <div className="flex justify-center items-center mb-5">
//             <div className="w-[70%] grid grid-cols-2 gap-2 auto-rows-auto">
//                 {bodyStatsList.map((fact, index) => (
//                     <div key={index} className="hover-card text-center">
//                         <p className="text-gray-600 font-semibold">
//                             {fact.label}
//                         </p>
//                         <p className="text-gray-400">{fact.value}</p>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

"use client";

import React, { useState, useEffect } from "react";
import { getUserCurrentBodyStats } from "../actions/actions";
import { useStore } from "@/store/store";

interface BodyStatsInterface {
    height_cm: number | null;
    weight_kg: number | null;
    activity_level: string | null;
    objective: string | null;
}

export default function BodyStats() {
    const [bodyStats, setBodyStats] = useState<BodyStatsInterface | null>(null);

    const isReloadBodyInformation = useStore(
        (state) => state.isReloadBodyInformation
    );
    const setIsReloadBodyInformation = useStore(
        (state) => state.setIsReloadBodyInformation
    );

    const isLoadProfileAfterSetup = useStore(
        (state) => state.isLoadProfileAfterSetup
    );
    const setIsLoadProfileAfterSetup = useStore(
        (state) => state.setIsLoadProfileAfterSetup
    );

    const fetchBodyStats = async () => {
        const data = await getUserCurrentBodyStats();

        if (data) {
            const resolvedActivityLevel = await data.activity_level;
            const resolvedObjective = await data.objective;

            setBodyStats({
                height_cm: data.height_cm,
                weight_kg: data.weight_kg,
                activity_level: resolvedActivityLevel,
                objective: resolvedObjective,
            });
        }
    };

    // ✅ Fetch once on mount
    useEffect(() => {
        fetchBodyStats();
    }, []);

    // ✅ Watch for Zustand trigger
    useEffect(() => {
        if (isReloadBodyInformation || isLoadProfileAfterSetup) {
            fetchBodyStats();
            setIsLoadProfileAfterSetup(false);
            setIsReloadBodyInformation(false);
        }
    }, [
        isReloadBodyInformation,
        setIsReloadBodyInformation,
        isLoadProfileAfterSetup,
        setIsLoadProfileAfterSetup,
    ]);

    if (!bodyStats) {
        return <div>Loading...</div>;
    }

    const { height_cm, weight_kg, activity_level, objective } = bodyStats;

    const bodyStatsList = [
        { label: "Height(cm)", value: height_cm ?? "Not available" },
        { label: "Weight(kg)", value: weight_kg ?? "Not available" },
        { label: "Activity Level", value: activity_level ?? "Not available" },
        { label: "Objective", value: objective ?? "Not available" },
    ];

    return (
        <div className="flex justify-center items-center mb-5">
            <div className="w-[70%] grid grid-cols-2 gap-2 auto-rows-auto">
                {bodyStatsList.map((fact, index) => (
                    <div key={index} className="hover-card text-center">
                        <p className="text-gray-600 font-semibold">
                            {fact.label}
                        </p>
                        <p className="text-gray-400">{fact.value}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
