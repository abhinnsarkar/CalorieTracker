"use client";

import { useEffect, useState } from "react";
import { getTodaysFoodEntries } from "@/app/actions/actions";
import { useStore } from "@/store/store"; // ✅ adjust this import path if needed
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import TodaysFoodItem from "./TodaysFoodItem";
import { TodaysFoodEntryInterface } from "@/app/interfaces";

export default function Page() {
    const [entries, setEntries] = useState<TodaysFoodEntryInterface[]>([]);

    const isReloadTodaysLoggedFoods = useStore(
        (state) => state.isReloadTodaysLoggedFoods
    );
    const setIsReloadTodaysLoggedFoods = useStore(
        (state) => state.setIsReloadTodaysLoggedFoods
    );

    // ✅ Fetch once on page load
    useEffect(() => {
        getTodaysFoodEntries().then((data) => {
            setEntries(data);
        });
    }, []);

    // ✅ Re-fetch if reload is triggered from elsewhere
    useEffect(() => {
        if (isReloadTodaysLoggedFoods) {
            getTodaysFoodEntries().then((data) => {
                setEntries(data);
                setIsReloadTodaysLoggedFoods(false);
            });
        }
        setIsReloadTodaysLoggedFoods(false);
    }, [isReloadTodaysLoggedFoods, setIsReloadTodaysLoggedFoods]);

    return (
        <main className="layout-grid layout-grid-1 px-4 sm:px-6 md:px-10 pt-20 text-white space-y-4 lg:space-y-8">
            <div className="justify-start">
                <Link href="/">
                    <Button className="hover-btn w-full xs:w-auto">
                        <ArrowBackIosIcon />
                        <span className="text-left lg:text-center w-full">
                            Back to Dashboard
                        </span>
                    </Button>
                </Link>
            </div>
            <div className="w-full flex !justify-start lg:justify-center text-left lg:text-center"></div>

            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent text-center">
                Today’s Logged Foods
            </h1>

            <div className="space-y-4">
                {entries.map((entry) => (
                    <TodaysFoodItem key={entry.entry_id} entry={entry} />
                ))}
            </div>
        </main>
    );
}
