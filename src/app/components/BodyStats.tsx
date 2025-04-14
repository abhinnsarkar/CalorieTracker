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
            <div className="w-[90%] sm:w-[100%] grid grid-cols-2 sm:grid-cols-2 gap-4 auto-rows-auto">
                {bodyStatsList.map((fact, index) => (
                    <div
                        key={index}
                        className="hover-card text-center p-3 sm:p-4 text-sm leading-tight break-words flex flex-col justify-center min-h-[80px]"
                    >
                        <p className="text-gray-600 font-semibold text-xs sm:text-sm">
                            {fact.label}
                        </p>
                        <p className="text-gray-400 text-sm sm:text-base">
                            {fact.value}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}
