"use client";
import { useEffect, useState } from "react";
import { useUser, ClerkLoaded } from "@clerk/nextjs";
import CalorieGraph from "./secret/ProgressTracker/CalorieGraph";
import DailyTracking from "./secret/DailyProgress/DailyProgress";
import FoodSearch from "./secret/FoodSearch/FoodSearch";
import ProfileSetupDialog from "./secret/ProfileSetupDialog";
import { checkIfUserProfileAlreadyExists } from "./actions/actions";

export default function Home() {
    const { isSignedIn } = useUser();
    const [showProfileSetup, setShowProfileSetup] = useState(false);

    useEffect(() => {
        const delayCheck = async () => {
            if (!isSignedIn) return;

            try {
                const profileExists = await checkIfUserProfileAlreadyExists();
                if (!profileExists) {
                    setShowProfileSetup(true);
                }
            } catch (error) {
                console.error("Error checking user profile:", error);
            }
        };

        const timer = setTimeout(() => {
            delayCheck();
        }, 300);

        return () => clearTimeout(timer);
    }, [isSignedIn]);

    return (
        <ClerkLoaded>
            <div className="min-h-screen flex flex-col">
                <main className="flex-1 pt-20">
                    {/* <div className="layout-grid layout-grid-1 lg:layout-grid-3 "> */}
                    <div className="layout-grid layout-grid-1 lg:layout-grid-3 px-4 sm:px-6 md:px-10 lg:h-[75vh]">
                        {showProfileSetup && <ProfileSetupDialog />}
                        <div className="layout-section order-3 lg:order-1 h-full">
                            <CalorieGraph />
                        </div>
                        <div className="layout-section order-1 lg:order-2 h-full">
                            <FoodSearch />
                        </div>
                        <div className="layout-section order-2 lg:order-3 h-full">
                            <DailyTracking />
                        </div>
                    </div>
                </main>
            </div>
        </ClerkLoaded>
    );
}
