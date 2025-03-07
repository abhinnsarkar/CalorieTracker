// // // src/pages/Home.tsx

// // import CalorieWeightGraph from "./secret/CalorieWeightGraph";
// // import DailyTracking from "./secret/DailyTracking";
// // import FoodSearch from "./secret/FoodSearch";
// // import ProfileSetupDialog from "./secret/ProfileSetupDialog";
// // // import ProfileSetupDialog from "./secret/ProfileSetupDialog";

// // export default function Home() {
// //     return (
// //         <div className="min-h-screen flex flex-col">
// //             <main className="flex-1 container mx-auto px-4 pt-20">
// //                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
// //                     <ProfileSetupDialog />
// //                     <CalorieWeightGraph />
// //                     <FoodSearch />
// //                     <DailyTracking />
// //                 </div>
// //             </main>
// //         </div>
// //     );
// // }
// "use client";
// import { useState, useEffect } from "react";
// import CalorieWeightGraph from "./secret/CalorieWeightGraph";
// import DailyTracking from "./secret/DailyTracking";
// import FoodSearch from "./secret/FoodSearch";
// import ProfileSetupDialog from "./secret/ProfileSetupDialog";

// export default function Home() {
//     const [showProfileSetup, setShowProfileSetup] = useState(false);

//     useEffect(() => {
//         const user = JSON.parse(localStorage.getItem("user") || "{}");
//         const isProfileComplete =
//             user?.dob &&
//             user?.height_cm &&
//             user?.weight_kg &&
//             user?.gender &&
//             user?.objective &&
//             user?.activity_level;

//         if (!isProfileComplete) {
//             setShowProfileSetup(true);
//         }
//     }, []);

//     return (
//         <div className="min-h-screen flex flex-col">
//             <main className="flex-1 container mx-auto px-4 pt-20">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
//                     {showProfileSetup && <ProfileSetupDialog />}
//                     <CalorieWeightGraph />
//                     <FoodSearch />
//                     <DailyTracking />
//                 </div>
//             </main>
//         </div>
//     );
// }
"use client";
import { useState, useEffect } from "react";
import CalorieWeightGraph from "./secret/CalorieWeightGraph";
import DailyTracking from "./secret/DailyTracking";
import FoodSearch from "./secret/FoodSearch";
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-0">
                    {showProfileSetup && <ProfileSetupDialog />}
                    <CalorieWeightGraph />
                    <FoodSearch />
                    <DailyTracking />
                </div>
            </main>
        </div>
    );
}
