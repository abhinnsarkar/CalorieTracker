import { Label } from "@/components/ui/label";

interface ObjectiveDropdownProps {
    selectedObjective: string;
    setSelectedObjective: (objective: string) => void;
}

const ObjectiveDropdown = ({
    selectedObjective,
    setSelectedObjective,
}: ObjectiveDropdownProps) => {
    return (
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="objective" className="text-right">
                Objective
            </Label>
            <select
                title="Objective"
                name="objective"
                id="objective"
                className="col-span-3 rounded-md border bg-background p-2 text-foreground focus:ring-0 "
                value={selectedObjective}
                onChange={(e) => setSelectedObjective(e.target.value)}
            >
                <option value="" className="text-center justify-center">
                    Select Objective
                </option>
                <option value="Cutting" className="text-center justify-center">
                    Cutting
                </option>
                <option value="Maintain" className="text-center justify-center">
                    Maintain
                </option>
                <option value="Bulking" className="text-center justify-center">
                    Bulking
                </option>
            </select>
        </div>
    );
};

export default ObjectiveDropdown;
