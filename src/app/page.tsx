// src/pages/Home.tsx

import CalorieWeightGraph from "./secret/CalorieWeightGraph";
import DailyTracking from "./secret/DailyTracking";
import FoodSearch from "./secret/FoodSearch";
import ProfileSetupDialog from "./secret/ProfileSetupDialog";
// import ProfileSetupDialog from "./secret/ProfileSetupDialog";

export default function Home() {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-1 container mx-auto px-4 pt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
                    <ProfileSetupDialog />
                    <CalorieWeightGraph />
                    <FoodSearch />
                    <DailyTracking />
                </div>
            </main>
        </div>
    );
}
