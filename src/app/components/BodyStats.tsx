// import React from "react";
// import { getUserCurrentBodyStats } from "../actions/actions";

// export default async function BodyStats() {
//     const bodyStats = await getUserCurrentBodyStats();
//     const height_cm = bodyStats?.height_cm;
//     const weight_kg = bodyStats?.weight_kg;
//     const activity_level = bodyStats?.activity_level;
//     const objective = bodyStats?.objective;

//     const bodyStatsList = [
//         { label: "Height(cm)", value: height_cm },
//         { label: "Weight(kg)", value: weight_kg },
//         { label: "Activity Level", value: activity_level },
//         { label: "Objective", value: objective },
//     ];

//     return (
//         <div>
//             <div className="w-[75%] grid grid-cols-3 gap-4 my-2 auto-rows-auto">
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
// "use client";

// import React, { useState, useEffect } from "react";
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
//             setBodyStats(data);
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
//             <div className="w-[75%] grid grid-cols-2 gap-4 auto-rows-auto">
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

interface BodyStatsInterface {
    height_cm: number | null;
    weight_kg: number | null;
    activity_level: string | null;
    objective: string | null;
}

export default function BodyStats() {
    const [bodyStats, setBodyStats] = useState<BodyStatsInterface | null>(null);

    useEffect(() => {
        // Fetch the body stats when the component is mounted
        const fetchBodyStats = async () => {
            const data = await getUserCurrentBodyStats();

            if (data) {
                // Resolve promises for activity_level and objective
                const resolvedActivityLevel = await data.activity_level;
                const resolvedObjective = await data.objective;

                // Update the state with resolved values
                setBodyStats({
                    height_cm: data.height_cm,
                    weight_kg: data.weight_kg,
                    activity_level: resolvedActivityLevel,
                    objective: resolvedObjective,
                });
            }
        };

        fetchBodyStats();
    }, []); // Empty dependency array ensures this runs once when the component mounts

    if (!bodyStats) {
        return <div>Loading...</div>; // Display loading state while data is being fetched
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
