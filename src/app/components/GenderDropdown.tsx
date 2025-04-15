// import {
//     DropdownMenu,
//     DropdownMenuContent,
//     DropdownMenuItem,
//     DropdownMenuLabel,
//     DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { Button } from "@/components/ui/button";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Label } from "@/components/ui/label";

interface GenderDropdownProps {
    selectedGender: string;
    setSelectedGender: (gender: string) => void;
}

const GenderDropdown = ({
    selectedGender,
    setSelectedGender,
}: GenderDropdownProps) => {
    return (
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="gender" className="text-right">
                Gender
            </Label>
            <select
                title="Gender"
                name="gender"
                id="gender"
                className="col-span-3 rounded-md border bg-background p-2 text-foreground focus:ring-0"
                value={selectedGender}
                onChange={(e) => setSelectedGender(e.target.value)}
            >
                <option value="" className="text-center justify-center">
                    Select Gender
                </option>
                <option value="Male" className="text-center justify-center">
                    Male
                </option>
                <option value="Female" className="text-center justify-center">
                    Female
                </option>
            </select>
        </div>
    );
};

export default GenderDropdown;
