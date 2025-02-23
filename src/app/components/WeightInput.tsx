import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface WeightInputProps {
    weight: string;
    setWeight: (weight: string) => void;
}

const WeightInput = ({ weight, setWeight }: WeightInputProps) => {
    return (
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="weight" className="text-right">
                Weight (kg)
            </Label>
            <div className="col-span-3">
                <Input
                    id="weight"
                    type="text"
                    placeholder="Enter Weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    className="mt-2 rounded-md border p-2 w-full flex text-center" // Consistent styling
                    style={{ backgroundColor: "#0e1729" }} // Consistent styling
                />
            </div>
        </div>
    );
};

export default WeightInput;
