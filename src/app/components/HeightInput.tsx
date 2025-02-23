import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface HeightInputProps {
    height: string;
    setHeight: (height: string) => void;
}

const HeightInput = ({ height, setHeight }: HeightInputProps) => {
    return (
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="height" className="text-right">
                Height (cm)
            </Label>
            <div className="col-span-3">
                <Input
                    id="height"
                    type="text"
                    placeholder="Enter Height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    className="mt-2 rounded-md border p-2 w-full flex text-center"
                    style={{ backgroundColor: "#0e1729" }} // Consistent styling
                />
            </div>
        </div>
    );
};

export default HeightInput;
