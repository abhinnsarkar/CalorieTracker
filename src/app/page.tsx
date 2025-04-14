"use client";
import { useState, useEffect } from "react";
import CalorieGraph from "./secret/ProgressTracker/CalorieGraph";
import DailyTracking from "./secret/DailyProgress/DailyProgress";
import FoodSearch from "./secret/FoodSearch/FoodSearch";
import ProfileSetupDialog from "./secret/ProfileSetupDialog";
import { checkIfUserProfileAlreadyExists } from "./actions/actions";

export default function Home() {
    const [showProfileSetup, setShowProfileSetup] = useState(false);

    useEffect(() => {
        async function checkProfile() {
            try {
                const profileExists = await checkIfUserProfileAlreadyExists();
                if (!profileExists) {
                    setShowProfileSetup(true); // Show Profile Setup if profile doesn't exist
                }
            } catch (error) {
                console.error("Error checking user profile:", error);
                // You can log out the user if there's an issue with authentication
                // For example, by using Clerk's `signOut` method or redirecting the user
            }
        }

        checkProfile();
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 container mx-auto px-4 pt-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 py-0">
                    {showProfileSetup && <ProfileSetupDialog />}
                    <CalorieGraph />
                    <FoodSearch />
                    <DailyTracking />
                </div>
            </main>
        </div>
    );
}
