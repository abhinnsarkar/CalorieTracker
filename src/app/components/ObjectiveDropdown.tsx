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
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" className="col-span-3">
                        <DropdownMenuLabel>
                            {selectedObjective || "Select Objective"}
                        </DropdownMenuLabel>
                        <ArrowDropDownIcon />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                    <DropdownMenuItem
                        className="hover-menu-item"
                        onClick={() => setSelectedObjective("Cutting")}
                    >
                        Cutting
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="hover-menu-item"
                        onClick={() => setSelectedObjective("Maintain")}
                    >
                        Maintain
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        className="hover-menu-item"
                        onClick={() => setSelectedObjective("Bulking")}
                    >
                        Bulking
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default ObjectiveDropdown;
