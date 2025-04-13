import { getTodaysFoodEntries } from "@/app/actions/actions";
import React from "react";
// import { OpenInNew } from "@mui/icons-material";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import TodaysFoodItem from "./TodaysFoodItem";
import { Refresher } from "@/app/components/Refresher";
// import DeleteNotification from "./DeleteNotification";

export default async function Page() {
    const todaysFoodEntries = await getTodaysFoodEntries();

    return (
        <main className="container mx-auto px-4 pt-20 text-white space-y-8">
            <Refresher />
            <div className="justify-start">
                <Link href="/">
                    <Button className="hover-btn">
                        <ArrowBackIosIcon />
                        Back to Dashboard
                    </Button>
                </Link>
            </div>

            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent text-center">
                Today’s Logged Foods
            </h1>

            <div className="space-y-4">
                {todaysFoodEntries.map((entry) => (
                    <TodaysFoodItem key={entry.entry_id} entry={entry} />
                ))}
            </div>
        </main>
    );
}
