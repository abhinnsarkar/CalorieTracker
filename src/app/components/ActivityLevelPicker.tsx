import { Label } from "@/components/ui/label";

interface ActivityLevelPickerProps {
    selectedActivityLevel: string;
    setSelectedActivityLevel: (level: string) => void;
}

const ActivityLevelPicker = ({
    selectedActivityLevel,
    setSelectedActivityLevel,
}: ActivityLevelPickerProps) => {
    return (
        // <div className="flex flex-col sm:grid sm:grid-cols-4 sm:items-center gap-4">
        <div className="grid grid-cols-4 items-center gap-4">
            <Label
                htmlFor="activity-level"
                className="text-center sm:text-right"
            >
                Activity Level
            </Label>
            <select
                title="Activity Level"
                id="activity-level"
                className="col-span-3 rounded-md border bg-background p-2 text-foreground focus:ring-0 "
                value={selectedActivityLevel}
                onChange={(e) => setSelectedActivityLevel(e.target.value)}
            >
                <option value="" className="text-center justify-center">
                    Activity Level
                </option>
                <option
                    value="Sedentary"
                    className="text-center justify-center"
                >
                    Sedentary
                </option>
                <option value="Light" className="text-center justify-center">
                    Light
                </option>
                <option value="Moderate" className="text-center justify-center">
                    Moderate
                </option>
                <option value="Active" className="text-center justify-center">
                    Active
                </option>
                <option
                    value="Superactive"
                    className="text-center justify-center"
                >
                    Superactive
                </option>
            </select>
        </div>
    );
};

export default ActivityLevelPicker;
