import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
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
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="col-span-3">
                        <DropdownMenuLabel>
                            {selectedGender || "Select Gender"}
                        </DropdownMenuLabel>
                        <ArrowDropDownIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuItem
                        className="hover-menu-item"
                        onClick={() => setSelectedGender("Male")}
                    >
                        Male
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="hover-menu-item"
                        onClick={() => setSelectedGender("Female")}
                    >
                        Female
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default GenderDropdown;
