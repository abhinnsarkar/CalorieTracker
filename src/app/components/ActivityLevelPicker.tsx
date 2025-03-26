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

interface ActivityLevelPickerProps {
    selectedActivityLevel: string;
    setSelectedActivityLevel: (level: string) => void;
}

const ActivityLevelPicker = ({
    selectedActivityLevel,
    setSelectedActivityLevel,
}: ActivityLevelPickerProps) => {
    return (
        <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="activity-level" className="text-right">
                Activity Level
            </Label>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="col-span-3">
                        <DropdownMenuLabel>
                            {selectedActivityLevel || "Select Activity Level"}
                        </DropdownMenuLabel>
                        <ArrowDropDownIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuItem
                        className="hover-menu-item"
                        onClick={() => setSelectedActivityLevel("sedentary")}
                    >
                        Sedentary
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="hover-menu-item"
                        onClick={() => setSelectedActivityLevel("light")}
                    >
                        Light
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="hover-menu-item"
                        onClick={() => setSelectedActivityLevel("moderate")}
                    >
                        Moderate
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="hover-menu-item"
                        onClick={() => setSelectedActivityLevel("active")}
                    >
                        Active
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="hover-menu-item"
                        onClick={() => setSelectedActivityLevel("superactive")}
                    >
                        Superactive
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default ActivityLevelPicker;
