"use client";
import { useEffect, useState } from "react";
import { ClerkLoaded } from "@clerk/nextjs";
import CalorieGraph from "./secret/ProgressTracker/CalorieGraph";
import DailyTracking from "./secret/DailyProgress/DailyProgress";
import FoodSearch from "./secret/FoodSearch/FoodSearch";
import ProfileSetupDialog from "./secret/ProfileSetupDialog";
import {
    checkIfUserProfileAlreadyExists,
    getClerkUserInfo,
} from "./actions/actions";
// import { currentUser } from "@clerk/nextjs/server";

export default function Home() {
    // const { isSignedIn } = useUser();
    const [clerkUserId, setClerkUserId] = useState<string | null>(null);
    const [showProfileSetup, setShowProfileSetup] = useState(false);

    useEffect(() => {
        const delayCheck = async () => {
            // if (!isSignedIn) return;

            // const userFromClerk = await currentUser();
            const clerkUserIdPromise = await getClerkUserInfo();
            setClerkUserId(clerkUserIdPromise || "No user id found");

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
    }, [clerkUserId]);

    return (
        <ClerkLoaded>
            <div className="min-h-screen flex flex-col">
                <main className="flex-1 pt-20">
                    {/* <div className="layout-grid layout-grid-1 lg:layout-grid-3 "> */}
                    <div className="layout-grid layout-grid-1 lg:layout-grid-3 px-4 sm:px-6 md:px-10 lg:h-[50vh]">
                        {showProfileSetup ? <ProfileSetupDialog /> : null}
                        <div className="layout-section order-3 lg:order-1 h-full">
                            {/* <h1>Col 1</h1>
                            {clerkUserId ? (
                                <h1>Clerk User Id is {clerkUserId}</h1>
                            ) : (
                                <h1>No user id found</h1>
                            )} */}
                            <CalorieGraph />
                        </div>
                        <div className="layout-section order-1 lg:order-2 h-full">
                            <FoodSearch />
                            {/* <h1>Col 2</h1>
                            <h2>
                                {showProfileSetup ? (
                                    <p>Profile needs to be set up</p>
                                ) : (
                                    <p>Profile is already set up</p>
                                )}
                            </h2> */}
                        </div>
                        <div className="layout-section order-2 lg:order-3 h-full">
                            <DailyTracking />
                            {/* <h1>Col 3</h1> */}
                        </div>
                    </div>
                </main>
            </div>
        </ClerkLoaded>
    );
}
