import CalorieWeightGraph from "./secret/CalorieWeightGraph";
import DailyTracking from "./secret/DailyTracking";
import FoodSearch from "./secret/FoodSearch";

export default function Home() {
    return (
        // <div className="min-h-screen bg-[#1A1F2C] bg-gradient-to-br from-background to-accent">
        <div>
            <main className="container mx-auto px-4 pt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-6">
                    <CalorieWeightGraph />
                    <FoodSearch />
                    <DailyTracking />
                </div>
            </main>
        </div>
    );
}
